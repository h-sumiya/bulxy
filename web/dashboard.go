package web

import (
	"embed"
	"encoding/json"
	"fmt"
	"io/fs"
	"net"
	"net/http"
	"runtime"

	"github.com/h-sumiya/bulxy/bulxy"
	"github.com/shirou/gopsutil/v3/cpu"
	"github.com/shirou/gopsutil/v3/mem"
	"tailscale.com/tsnet"
)

//go:embed bluxy-dashboard/build/*
var webData embed.FS

type SystemState struct {
	MemTotal       uint64  `json:"mem_total"`
	MemUsed        uint64  `json:"mem_used"`
	MemUsedPercent float64 `json:"mem_used_percent"`

	CPUModel        string  `json:"cpu_model"`
	CPUCores        int     `json:"cpu_cores"`
	CPUUsagePercent float64 `json:"cpu_usage_percent"`

	NumGoroutine int    `json:"num_goroutine"`
	GoVersion    string `json:"go_version"`
}

func getSystemState() (SystemState, error) {
	v, _ := mem.VirtualMemory()
	c, _ := cpu.Info()
	percent, _ := cpu.Percent(0, false)

	state := SystemState{
		MemTotal:        v.Total,
		MemUsed:         v.Used,
		MemUsedPercent:  v.UsedPercent,
		CPUModel:        c[0].ModelName,
		CPUCores:        runtime.NumCPU(),
		CPUUsagePercent: percent[0],
		NumGoroutine:    runtime.NumGoroutine(),
		GoVersion:       runtime.Version(),
	}

	return state, nil
}

func StartDashboard(conf *bulxy.Config, srv *tsnet.Server, port int) (net.Listener, error) {
	ln, err := srv.Listen("tcp", fmt.Sprintf(":%d", port))
	if err != nil {
		return nil, fmt.Errorf("failed to listen tcp on :%d: %w", port, err)
	}

	staticFS, err := fs.Sub(webData, "bluxy-dashboard/build")
	if err != nil {
		return nil, fmt.Errorf("failed to get static fs: %w", err)
	}

	mux := http.NewServeMux()
	mux.HandleFunc("/api/config", func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Content-Type", "application/json")
		json.NewEncoder(w).Encode(conf)
	})
	mux.HandleFunc("/api/state", func(w http.ResponseWriter, r *http.Request) {
		state, err := getSystemState()
		if err != nil {
			http.Error(w, err.Error(), http.StatusInternalServerError)
			return
		}
		w.Header().Set("Content-Type", "application/json")
		json.NewEncoder(w).Encode(state)
	})
	mux.Handle("/", http.FileServer(http.FS(staticFS)))
	go http.Serve(ln, mux)

	return ln, nil
}
