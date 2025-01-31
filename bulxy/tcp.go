package bulxy

import (
	"context"
	"fmt"
	"io"
	"log"
	"net"
	"sync"

	"tailscale.com/tsnet"
)

type TCPProxyState struct {
	Config   *Proxy
	listener net.Listener
	wg       sync.WaitGroup
	ctx      context.Context
	cancel   context.CancelFunc
}

func (proxy *Proxy) StartTCP(srv *tsnet.Server) (*TCPProxyState, error) {
	ln, err := srv.Listen("tcp", fmt.Sprintf(":%d", proxy.From))
	if err != nil {
		return nil, fmt.Errorf("failed to listen tcp on :%d: %w", proxy.From, err)
	}

	ctx, cancel := context.WithCancel(context.Background())

	s := &TCPProxyState{
		Config:   proxy,
		listener: ln,
		ctx:      ctx,
		cancel:   cancel,
	}

	s.wg.Add(1)
	go s.acceptLoop()

	log.Printf("TCP proxy started on :%d -> 127.0.0.1:%d", proxy.From, proxy.To)
	return s, nil
}

func (s *TCPProxyState) acceptLoop() {
	defer s.wg.Done()

	for {
		conn, err := s.listener.Accept()
		if err != nil {
			select {
			case <-s.ctx.Done():
				log.Print("[tcp] accept loop shutting down")
				return
			default:
				log.Printf("[tcp] accept error: %v", err)
				return
			}
		}
		s.wg.Add(1)
		go s.handleConn(conn)
	}
}

func (s *TCPProxyState) handleConn(c net.Conn) {
	defer s.wg.Done()
	defer c.Close()

	remoteConn, err := net.Dial("tcp", fmt.Sprintf("127.0.0.1:%d", s.Config.To))
	if err != nil {
		log.Printf("[tcp] failed to connect to 127.0.0.1:%d: %v", s.Config.To, err)
		return
	}
	defer remoteConn.Close()

	var wg sync.WaitGroup
	wg.Add(2)

	// c -> remoteConn
	go func() {
		defer wg.Done()
		io.Copy(remoteConn, c)
	}()

	// remoteConn -> c
	go func() {
		defer wg.Done()
		io.Copy(c, remoteConn)
	}()

	wg.Wait()
}

func (s *TCPProxyState) StopTCP() {
	s.cancel()
	s.listener.Close()
	s.wg.Wait()

	log.Println("[tcp] proxy stopped")
}
