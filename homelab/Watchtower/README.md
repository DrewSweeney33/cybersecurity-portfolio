# Watchtower Setup

Automatically updates Docker containers on a scheduled interval.

## Configuration
- Runs with `restart: unless-stopped`.
- Mounts Docker socket read-only to monitor and update containers.
- Updates every 30 seconds (as configured via `WATCHTOWER_INTERVAL`).

## Security
- Runs isolated from external traffic.
- No ports exposed.
- Docker socket access is read-only.

## Networking
- Attached to external `docker_network` for discovery.
- No Traefik integration.

## Example
Very minimal config — just docker socket mount and environment variables.

