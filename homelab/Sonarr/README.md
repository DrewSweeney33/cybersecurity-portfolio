# Sonarr Setup

This container is part of a self-hosted media stack.

## Configuration
- Uses `container:gluetun` for secure downloads.
- Volumes mapped for media (TV, anime) and download client integration.
- Traefik routes created with automatic HTTPS support.

## Security
- VPN usage ensures IP privacy.
- TLS is managed by Traefik and Cloudflare DNS challenge.
- PUID and PGID set to limit permissions.

## Networking
- VPN container isolates all traffic.
- Traefik middleware handles HTTPS redirection.

## Example
See the Compose file for media mounts and port mappings.

