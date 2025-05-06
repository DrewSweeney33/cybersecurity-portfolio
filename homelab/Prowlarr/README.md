# Prowlarr Setup

This service is deployed using Docker Compose as part of a self-hosted infrastructure.

## Configuration
- The container is configured with `restart: unless-stopped`.
- Volumes are mapped to persist configuration data under `/mnt/...` or `/.../data`.
- Network mode is set to `container:gluetun` to route traffic securely through a VPN.
- Traefik is enabled as a reverse proxy with labeled routers and services for both HTTP and HTTPS.

## Security
- Runs as a non-root user using `PUID` and `PGID`.
- Traefik routes are protected using TLS via the Cloudflare DNS challenge.
- All sensitive values such as host paths and domains are injected via `.env` or redacted directly in the compose file.

## Networking
- Shared VPN networking is used to isolate the service's traffic through Gluetun.
- Custom `docker_network` is used to control IP assignment and name resolution.

## Example
See the redacted `docker-compose.yml` for exact volume mounts, network mode, and Traefik label definitions.

