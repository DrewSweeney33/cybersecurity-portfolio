# Pi-hole Setup

This container provides DNS-level ad blocking for the local network.

## Configuration
- Volumes mapped for persistent settings and configuration.
- Static IP assigned in `docker_network` to be a known DNS target.
- DNS settings point to internal Unbound service for upstream resolution.

## Security
- Web admin password set via environment variable (redacted).
- DNS ports exposed only as needed.
- Traefik used for encrypted access via HTTPS and Cloudflare certresolver.

## Networking
- Runs on its own static IP.
- DNS1 points to a local Unbound container.

## Example
All configuration paths and secrets redacted in `docker-compose.yml`.

