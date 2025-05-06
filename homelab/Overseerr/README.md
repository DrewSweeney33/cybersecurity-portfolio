# Overseerr Setup

Media request management system integrated with Sonarr and Radarr.

## Configuration
- Runs behind VPN container using `container:gluetun`.
- Traefik is configured with HTTPS and subdomain routing.
- Volume maps `/config` directory.

## Security
- TLS enabled via Traefik and Cloudflare.
- Runs as non-root user with `PUID` and `PGID`.

## Networking
- Port 5055 used internally.
- Connected through Gluetun's namespace.

## Example
Labels show Traefik setup clearly in `docker-compose.yml`.

