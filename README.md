# Bulxy

![2025-01-31 22 41 04 100 113 141 16 bcdce346feb6](https://github.com/user-attachments/assets/024cb633-1200-41dc-ad5d-f9ca8fa5b533)
Bulxy is a flexible proxy and file server manager that allows you to run multiple services on a single host.

## Features

- Multiple proxy servers management
- Static file serving
- Web dashboard for monitoring
- TOML-based configuration
- Ephemeral mode support

## Configuration

Create a `config.toml` file with the following structure:

```toml
hostname = "example.com"
description = "My Server"
dashboard = 8080  # Optional: Web dashboard port

[proxy.app1]
display_name = "Application 1"
description = "Main application"
from = 8001
to = 3000
mode = "http"

[file.static]
display_name = "Static Files"
description = "Static file server"
dir = "./public"
from = 8002
```

### Configuration Options

- `hostname`: Server hostname
- `description`: Optional server description
- `dir`: Optional base directory for tailscaleconfig
- `auth_key`: Optional authentication key
- `ephemeral`: Optional flag for ephemeral mode
- `dashboard`: Optional port number for web dashboard

#### Proxy Configuration
Each proxy entry supports:
- `display_name`: Optional display name
- `description`: Optional description
- `from`: Port to listen on
- `to`: Target port to proxy to
- `mode`: Proxy mode ("udp" or "tcp")

#### File Server Configuration
Each file server entry supports:
- `display_name`: Optional display name
- `description`: Optional description
- `dir`: Directory to serve files from
- `from`: Port to listen on

## Usage

1. Create your `config.toml` file
2. Run the server:
   ```bash
   bulxy
   ```

## License

MIT
