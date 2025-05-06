# Uptime Kuma Setup

Used to monitor and report on service uptime and latency.

## Configuration
- Volume mapped to `/app/data` for persistent configuration.
- Exposed on port 3001.
- Uses the same `docker_network` as other services.

## Security
- Minimal external exposure.
- Docker socket mounted read-only for container monitoring.
- Passwords and setup done through web interface.

## Networking
- Static IP assigned in custom network.
- No Traefik routing applied (optional).

## Example
Service is lightweight; check `docker-compose.yml` for volume and IP settings.

