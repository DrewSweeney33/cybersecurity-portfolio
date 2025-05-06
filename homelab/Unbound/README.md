# Unbound DNS Resolver Setup

Private, recursive DNS server for Pi-hole integration.

## Configuration
- Port 53 exposed for both TCP and UDP.
- Volume mounted for `unbound.conf`.
- Static IP within the `docker_network`.

## Security
- Only Pi-hole points to this DNS container internally.
- No external access to Unbound.
- Simplified firewall footprint.

## Networking
- Integrated with custom Docker network.
- Used as the `DNS1` setting in Pi-hole.

## Example
Static IP and configuration file paths are redacted in the Compose file.

