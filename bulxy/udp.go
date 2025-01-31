package bulxy

import (
	"context"
	"fmt"
	"log"
	"net"
	"sync"

	"tailscale.com/tsnet"
	"tailscale.com/types/nettype"
)

type UDPProxyState struct {
	Config   *Proxy
	listener net.Listener
	wg       sync.WaitGroup
	ctx      context.Context
	cancel   context.CancelFunc
}

func (p *Proxy) StartUDP(srv *tsnet.Server) (*UDPProxyState, error) {
	ln, err := srv.Listen("udp", fmt.Sprintf(":%d", p.From))
	if err != nil {
		return nil, fmt.Errorf("failed to listen on UDP port %d: %w", p.From, err)
	}

	ctx, cancel := context.WithCancel(context.Background())

	state := &UDPProxyState{
		Config:   p,
		listener: ln,
		ctx:      ctx,
		cancel:   cancel,
	}

	state.wg.Add(1)
	go state.acceptLoop()

	log.Printf("UDP proxy started on :%d -> 127.0.0.1:%d", p.From, p.To)
	return state, nil
}

func (u *UDPProxyState) acceptLoop() {
	defer u.wg.Done()

	for {
		conn, err := u.listener.Accept()
		if err != nil {
			select {
			case <-u.ctx.Done():
				log.Print("[udp] accept loop shutting down")
				return
			default:
				log.Printf("[udp] accept error: %v", err)
				return
			}
		}
		u.wg.Add(1)
		go u.handleConn(conn)
	}
}

func (u *UDPProxyState) handleConn(c net.Conn) {
	defer u.wg.Done()
	defer c.Close()

	packetConn, ok := c.(nettype.ConnPacketConn)
	if !ok {
		log.Printf("[udp] cannot cast to nettype.ConnPacketConn: %T", c)
		return
	}

	remoteAddr, err := net.ResolveUDPAddr("udp", fmt.Sprintf("127.0.0.1:%d", u.Config.To))
	if err != nil {
		log.Printf("[udp] failed to resolve 127.0.0.1:%d: %v", u.Config.To, err)
		return
	}

	remoteConn, err := net.DialUDP("udp", nil, remoteAddr)
	if err != nil {
		log.Printf("[udp] failed to connect to %v: %v", remoteAddr, err)
		return
	}
	defer remoteConn.Close()

	var wg sync.WaitGroup
	wg.Add(2)

	go func() {
		defer wg.Done()
		buf := make([]byte, 1500)
		for {
			n, _, err := packetConn.ReadFrom(buf)
			if err != nil {
				log.Printf("[udp] read error from local side: %v", err)
				return
			}
			if n > 0 {
				if _, werr := remoteConn.Write(buf[:n]); werr != nil {
					log.Printf("[udp] write error to remote: %v", werr)
					return
				}
			}
		}
	}()

	go func() {
		defer wg.Done()
		buf := make([]byte, 1500)
		for {
			n, _, err := remoteConn.ReadFromUDP(buf)
			if err != nil {
				log.Printf("[udp] read error from remote: %v", err)
				return
			}
			if n > 0 {
				if _, werr := packetConn.WriteTo(buf[:n], nil); werr != nil {
					log.Printf("[udp] write error to local side: %v", werr)
					return
				}
			}
		}
	}()

	wg.Wait()
	log.Printf("[udp] connection closed for :%d", u.Config.To)
}

func (u *UDPProxyState) StopUDP() {
	u.cancel()
	u.listener.Close()
	u.wg.Wait()
	log.Println("[udp] proxy stopped")
}
