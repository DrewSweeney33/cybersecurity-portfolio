# Gluetun VPN Setup

Acts as a secure network container for routing traffic through a VPN.

## Configuration
- Exposes multiple ports via Gluetun (Radarr, Sonarr, etc.).
- Environment variables manage OpenVPN settings and credentials.
- Shared `.env` file handles secret data injection.

## Security
- VPN login info stored in `.env` (now redacted).
- Routes traffic from all dependent containers securely.
- Regular updates with `UPDATER_PERIOD=24h`.

## Networking
- Static IP used within `docker_network`.
- Gluetun is a parent container for network_mode.

## Example
Review `docker-compose.yml` for port exposure and environment settings.

