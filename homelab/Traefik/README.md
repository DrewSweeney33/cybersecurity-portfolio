# Traefik Setup

This Traefik instance serves as the reverse proxy and TLS termination point for all self-hosted services on the network.

## Configuration

- **Version**: Latest Traefik image used via Docker Compose.
- **Secrets**: Cloudflare API token is stored securely using Docker secrets (`cf-token`) and `.env` is used for credentials like `TRAEFIK_DASHBOARD_CREDENTIALS`.
- **Static Configuration**:
  - Defined in `traefik.yaml`.
  - Includes entry points for HTTP and HTTPS, Cloudflare DNS challenge for Let's Encrypt, and internal dashboard settings.
- **Dynamic Configuration**:
  - Loaded via `config.yaml` mounted into the container.
  - Includes middleware like HTTPS redirect, security headers, and default router behavior.

## Security

- **TLS Encryption**: Enabled via Let's Encrypt with Cloudflare DNS challenge.
- **Basic Auth**: Used for dashboard access, credentials hashed and provided through `.env`.
- **Headers**: Middlewares apply security headers and enforce HTTPS across routers.
- **Minimal Privileges**: Runs without `privileged` mode and mounts volumes as read-only where possible.

## Networking

- **Network**: Traefik is attached to a custom external `docker_network` with a static IP.
- **Ports**: Listens on 80 and 443 for HTTP and HTTPS.
- **Routing**: Traefik routes are defined using container labels with rules like `Host(`service.domain.com`)`.

## Volumes

- `/var/run/docker.sock`: Mounted read-only to auto-discover containers.
- `/acme.json`: Stores certificates, mounted with write access.
- `/config.yaml`, `/traefik.yaml`: Mounted read-only for security.
- `/logs`: Used for persistent logging if needed.

## Example

Check the redacted `docker-compose.yml`, `traefik.yaml`, and `config.yaml` for structured setup of secure reverse proxying and service discovery.

