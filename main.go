package main

import (
	"log"

	"github.com/BurntSushi/toml"
	"github.com/h-sumiya/bulxy/bulxy"
	"github.com/h-sumiya/bulxy/web"
)

func main() {
	var config bulxy.Config
	if _, err := toml.DecodeFile("config.toml", &config); err != nil {
		log.Fatal(err)
	}

	var svr = config.StartServer()
	defer svr.Close()

	if config.Dashboard != nil {
		ln, err := web.StartDashboard(&config, svr, *config.Dashboard)
		if err != nil {
			log.Fatal(err)
		}
		defer ln.Close()
	}

	for _, proxy := range config.Proxy {
		state, err := proxy.Start(svr)
		if err != nil {
			log.Fatal(err)
		}
		defer state.Close()
	}

	for _, file := range config.File {
		state, err := file.StartFileServer(svr)
		if err != nil {
			log.Fatal(err)
		}
		defer state.Close()
	}

	select {}
}
