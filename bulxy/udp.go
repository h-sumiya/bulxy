package bulxy

import (
	"fmt"
	"log"
	"net"
	"sync"
	"time"

	"tailscale.com/tsnet"
)

type UDPProxyState struct {
	Config         *Proxy
	server         *tsnet.Server
	packetConn     net.PacketConn
	sessions       map[string]*udpSession
	sessionsLock   sync.Mutex
	sessionTimeout time.Duration
	done           chan struct{}
}

type udpSession struct {
	remoteConn *net.UDPConn
	lastActive time.Time
}

func NewUDPProxyState(srv *tsnet.Server, cfg *Proxy) *UDPProxyState {
	return &UDPProxyState{
		Config:         cfg,
		server:         srv,
		sessions:       make(map[string]*udpSession),
		sessionTimeout: 120 * time.Second,
		done:           make(chan struct{}),
	}
}

func (p *Proxy) StartUDP(svr *tsnet.Server) (state *UDPProxyState, err error) {
	s := NewUDPProxyState(svr, p)

	if s.server == nil {
		return nil, fmt.Errorf("tsnet.Server is nil")
	}

	ln, err := s.server.Listen("udp", fmt.Sprintf(":%d", s.Config.From))
	if err != nil {
		return nil, fmt.Errorf("failed to listen udp on :%d: %w", s.Config.From, err)
	}

	packetConn, ok := ln.(net.PacketConn)
	if !ok {
		return nil, fmt.Errorf("failed to cast to PacketConn")
	}
	s.packetConn = packetConn
	go s.cleanUpSessions()
	go s.readLoop()
	log.Printf("UDP proxy started on :%d -> 127.0.0.1:%d", s.Config.From, s.Config.To)
	return s, nil
}

func (s *UDPProxyState) readLoop() {
	buf := make([]byte, 1500)
	for {
		select {
		case <-s.done:
			return
		default:
		}

		n, srcAddr, err := s.packetConn.ReadFrom(buf)
		if err != nil {
			log.Printf("[udp] read error: %v", err)
			return
		}

		data := make([]byte, n)
		copy(data, buf[:n])
		go s.handleUDPPacket(srcAddr, data)
	}
}

func (s *UDPProxyState) handleUDPPacket(srcAddr net.Addr, data []byte) {
	session := s.getSession(srcAddr)
	if session == nil {
		newSession, err := s.createSession(srcAddr)
		if err != nil {
			log.Printf("failed to create session for %s: %v", srcAddr.String(), err)
			return
		}
		session = newSession
	}

	if _, err := session.remoteConn.Write(data); err != nil {
		log.Printf("failed to write to local(127.0.0.1:%d): %v", s.Config.To, err)
		return
	}

	s.sessionsLock.Lock()
	session.lastActive = time.Now()
	s.sessionsLock.Unlock()
}

func (s *UDPProxyState) getSession(srcAddr net.Addr) *udpSession {
	s.sessionsLock.Lock()
	defer s.sessionsLock.Unlock()
	return s.sessions[srcAddr.String()]
}

func (s *UDPProxyState) createSession(srcAddr net.Addr) (*udpSession, error) {
	remoteAddr, err := net.ResolveUDPAddr("udp", fmt.Sprintf("127.0.0.1:%d", s.Config.To))
	if err != nil {
		return nil, fmt.Errorf("resolve local udp addr: %w", err)
	}

	remoteConn, err := net.DialUDP("udp", nil, remoteAddr)
	if err != nil {
		return nil, fmt.Errorf("dial to local:%d failed: %w", s.Config.To, err)
	}

	session := &udpSession{
		remoteConn: remoteConn,
		lastActive: time.Now(),
	}

	s.sessionsLock.Lock()
	s.sessions[srcAddr.String()] = session
	s.sessionsLock.Unlock()

	go s.handleRemoteToClient(srcAddr, session)

	return session, nil
}

func (s *UDPProxyState) handleRemoteToClient(srcAddr net.Addr, sess *udpSession) {
	buf := make([]byte, 1500)

	for {
		n, err := sess.remoteConn.Read(buf)
		if err != nil {
			log.Printf("[udp] remote->client read error: %v", err)
			return
		}
		_, err = s.packetConn.WriteTo(buf[:n], srcAddr)
		if err != nil {
			log.Printf("[udp] write to client(%s) error: %v", srcAddr.String(), err)
			return
		}

		s.sessionsLock.Lock()
		sess.lastActive = time.Now()
		s.sessionsLock.Unlock()
	}
}

func (s *UDPProxyState) cleanUpSessions() {
	ticker := time.NewTicker(5 * time.Second)
	defer ticker.Stop()

	for {
		select {
		case <-s.done:
			return
		case <-ticker.C:
			now := time.Now()

			s.sessionsLock.Lock()
			for addr, sess := range s.sessions {
				if now.Sub(sess.lastActive) > s.sessionTimeout {
					log.Printf("session %s timed out, closing", addr)
					sess.remoteConn.Close()
					delete(s.sessions, addr)
				}
			}
			s.sessionsLock.Unlock()
		}
	}
}

func (s *UDPProxyState) StopUDP() {
	close(s.done)

	if s.packetConn != nil {
		s.packetConn.Close()
	}

	s.sessionsLock.Lock()
	defer s.sessionsLock.Unlock()
	for addr, sess := range s.sessions {
		sess.remoteConn.Close()
		delete(s.sessions, addr)
	}
	log.Println("UDP proxy stopped")
}
