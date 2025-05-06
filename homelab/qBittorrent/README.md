# qBittorrent Setup

Secure torrenting client routed through VPN.

## Configuration
- Runs with `container:gluetun` network mode.
- Ports exposed for UI and torrent communication.
- Volumes for downloads, config, and incomplete transfers.

## Security
- VPN usage ensures public traffic is masked.
- WebUI protected via port 8081 behind Traefik.
- No root privileges (`PUID` and `PGID` set).

## Networking
- Shares Gluetun's network namespace.
- Traefik handles HTTPS routes via subdomain and certresolver.

## Example
Environment variables, paths, and labels all shown in redacted Compose.

