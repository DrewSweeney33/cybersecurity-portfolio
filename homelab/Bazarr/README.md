# Bazarr Setup

This service handles subtitle downloads and runs through a VPN container.

## Configuration
- Launched in network mode `container:gluetun`.
- Mapped media directories for subtitles across movies, TV shows, and anime.
- Traefik routing is configured with both HTTP and HTTPS routers.

## Security
- VPN container (Gluetun) isolates traffic.
- TLS via Cloudflare with redirect middleware for HTTPS enforcement.

## Networking
- Gluetun container shares network namespace.
- External Traefik network is used for service discovery and routing.

## Example
Check `docker-compose.yml` for port and service label configurations.

