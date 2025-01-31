package bulxy

import (
	"log"

	"tailscale.com/tsnet"
)

type ProxyState struct {
	Config        *Proxy
	UDPProxyState *UDPProxyState
	TCPProxyState *TCPProxyState
}

func (proxy *ProxyState) Close() {
	if proxy.UDPProxyState != nil {
		proxy.UDPProxyState.StopUDP()
	}
	if proxy.TCPProxyState != nil {
		proxy.TCPProxyState.StopTCP()
	}
}

func (proxy *Proxy) Start(srv *tsnet.Server) (state *ProxyState, err error) {
	switch proxy.Mode {
	case "udp":
		udpState, err := proxy.StartUDP(srv)
		if err != nil {
			return nil, err
		} else {
			return &ProxyState{
				Config:        proxy,
				UDPProxyState: udpState,
			}, nil
		}
	case "tcp":
		tcpState, err := proxy.StartTCP(srv)
		if err != nil {
			return nil, err
		} else {
			return &ProxyState{
				Config:        proxy,
				TCPProxyState: tcpState,
			}, nil
		}
	default:
		log.Fatalf("unknown mode: %s", proxy.Mode)
	}

	return nil, nil
}
