package bulxy

import (
	"log"

	"tailscale.com/tsnet"
)

func (conf *Config) StartServer() *tsnet.Server {
	ephemeral := false
	if conf.Ephemeral != nil {
		ephemeral = *conf.Ephemeral
	}

	authKey := ""
	if conf.AuthKey != nil {
		authKey = *conf.AuthKey
	}

	dir := ""
	if conf.Dir != nil {
		dir = *conf.Dir
	}

	srv := &tsnet.Server{
		Hostname:  conf.Hostname,
		AuthKey:   authKey,
		Ephemeral: ephemeral,
		Dir:       dir,
	}

	if err := srv.Start(); err != nil {
		log.Fatalf("can't start tsnet server: %v", err)
	}

	return srv
}
