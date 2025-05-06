# SABnzbd Setup

NZB download client running through the Gluetun container.

## Configuration
- Network mode is `container:gluetun`.
- Volumes map downloads and incomplete files.
- Ports exposed to access UI through Traefik.

## Security
- Access locked to VPN tunnel.
- Traefik provides encrypted access via TLS with Cloudflare.

## Networking
- Shared Gluetun network.
- Traefik routes for both HTTP and HTTPS configured.

## Example
Check labels and ports in `docker-compose.yml`.

