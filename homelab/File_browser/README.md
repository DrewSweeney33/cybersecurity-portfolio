# File Browser Setup

A lightweight file explorer for managing directories.

## Configuration
- Uses a static IP inside the `docker_network`.
- Volumes mapped to serve specific directory roots.
- Traefik configured for secure access via subdomain and HTTPS.

## Security
- TLS enforced via middleware and certresolver.
- X-Forwarded-Proto headers included to preserve HTTPS integrity.

## Networking
- Custom IP allows fixed routing within docker network.
- Accessible through Traefik with port forwarding and prefix stripping.

## Example
Volume and subdomain routing details available in `docker-compose.yml`.

