# Plex Setup

This service is deployed using Docker Compose with GPU passthrough and host networking.

## Configuration
- Host network mode is used for native DLNA and performance.
- GPU support enabled via NVIDIA runtime and device bindings.
- Volumes store metadata and media content under `/mnt/...`.
- PLEX_CLAIM token is provided at first run via an environment variable.

## Security
- Uses `PUID` and `PGID` to avoid root access.
- Traefik is not used for Plex; native port access via host mode is preferred.

## Networking
- Host network ensures compatibility with Plex DLNA and remote access.
- External media libraries mapped via volumes.

## Example
See `docker-compose.yml` for NVIDIA runtime flags, media mounts, and token redaction.

