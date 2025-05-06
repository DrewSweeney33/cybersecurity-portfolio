# Radarr Setup

Handles movie downloads and automation.

## Configuration
- Shared network with Gluetun for VPN-only downloads.
- Volumes map movie and download directories.
- Ports and services exposed through Traefik reverse proxy.

## Security
- Traefik HTTPS setup using Cloudflare DNS challenge.
- Access restricted to HTTPS endpoints only.
- Least-privilege permissions using `PUID` and `PGID`.

## Networking
- Uses `container:gluetun` to tunnel traffic.
- Traefik labels for secure routing.

## Example
Service bound to port 7878 internally; all labels redacted appropriately.

