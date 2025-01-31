package bulxy

import (
	"fmt"
	"html/template"
	"log"
	"net"
	"net/http"
	"os"
	"path/filepath"
	"strings"

	"tailscale.com/tsnet"
)

var indexTemplate = `<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>{{.Title}}</title>
    <style>
        body {
            font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
            background-color: #1c1c1c;
            color: #f5f5f5;
            margin: 0;
            padding: 0;
        }
        header {
            background-color: #444;
            padding: 20px;
            text-align: center;
        }
        h1 {
            margin: 0;
            font-size: 24px;
        }
        .container {
            margin: 20px auto;
            max-width: 800px;
        }
        a {
            color: #61dafb;
            text-decoration: none;
        }
        a:hover {
            text-decoration: underline;
        }
        ul {
            list-style: none;
            padding-left: 0;
        }
        li {
            margin: 5px 0;
        }
    </style>
</head>
<body>
    <header>
        <h1>{{.Title}}</h1>
    </header>
    <div class="container">
        <p>ディレクトリ: {{.Path}}</p>
        <ul>
            {{range .Items}}
                <li><a href="{{.}}">{{.}}</a></li>
            {{end}}
        </ul>
    </div>
</body>
</html>
`

func (file *File) StartFileServer(srv *tsnet.Server) (net.Listener, error) {
	ln, err := srv.Listen("tcp", fmt.Sprintf(":%d", file.From))
	if err != nil {
		return nil, fmt.Errorf("failed to listen on :%d: %w", file.From, err)
	}

	tpl, err := template.New("index").Parse(indexTemplate)
	if err != nil {
		return nil, fmt.Errorf("failed to parse template: %w", err)
	}

	mux := http.NewServeMux()
	mux.Handle("/", file.fancyFileHandler(tpl))

	go func() {
		log.Printf("Serving files from %s on port %d\n", file.Dir, file.From)
		if err := http.Serve(ln, mux); err != nil {
			log.Printf("server error: %v", err)
		}
	}()
	return ln, nil
}

func (file *File) fancyFileHandler(tpl *template.Template) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		// Clean the path and ensure it doesn't escape the base directory
		cleanPath := filepath.Clean(r.URL.Path)
		if containsDotDot(cleanPath) {
			http.Error(w, "Invalid path", http.StatusBadRequest)
			return
		}

		fullPath := filepath.Join(file.Dir, cleanPath)

		// Verify the path is under the base directory
		baseDir, err := filepath.Abs(file.Dir)
		if err != nil {
			http.Error(w, "Internal server error", http.StatusInternalServerError)
			return
		}

		requestPath, err := filepath.Abs(fullPath)
		if err != nil {
			http.Error(w, "Internal server error", http.StatusInternalServerError)
			return
		}

		if !strings.HasPrefix(requestPath, baseDir) {
			http.Error(w, "Forbidden", http.StatusForbidden)
			return
		}

		info, err := os.Stat(fullPath)
		if os.IsNotExist(err) {
			http.NotFound(w, r)
			return
		}

		if info.IsDir() {

			if !strings.HasSuffix(r.URL.Path, "/") {
				http.Redirect(w, r, r.URL.Path+"/", http.StatusFound)
				return
			}

			dirEntries, err := os.ReadDir(fullPath)
			if err != nil {
				http.Error(w, "Unable to read directory", http.StatusInternalServerError)
				return
			}

			var items []string
			for _, entry := range dirEntries {
				name := entry.Name()

				if entry.IsDir() {
					name += "/"
				}
				items = append(items, name)
			}

			displayName := file.DisplayName
			if displayName == nil {
				defaultName := "File Server"
				displayName = &defaultName
			}

			data := struct {
				Title string
				Path  string
				Items []string
			}{
				Title: *displayName,
				Path:  r.URL.Path,
				Items: items,
			}

			if err := tpl.Execute(w, data); err != nil {
				http.Error(w, "Template rendering error", http.StatusInternalServerError)
			}
			return
		}

		http.ServeFile(w, r, fullPath)
	})
}

func containsDotDot(path string) bool {
	parts := strings.Split(path, "/")
	for _, part := range parts {
		if part == ".." {
			return true
		}
	}
	return false
}
