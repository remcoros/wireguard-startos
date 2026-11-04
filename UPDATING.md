# Updating WireGuard

The service image is built from the root `Dockerfile`. Alpine supplies
`wireguard-tools`, `wireguard-go`, `iproute2`, and `iptables`.

## Determine available versions

Build a fresh image and inspect the versions it actually contains:

```sh
docker build --pull --no-cache -t wireguard-startos:update-check .
docker run --rm --entrypoint sh wireguard-startos:update-check -c \
  'cat /etc/alpine-release; apk info -v wireguard-tools wireguard-go ca-certificates-bundle; wg --version'
```

Review WireGuard tools changes at
<https://git.zx2c4.com/wireguard-tools/log/> and Alpine package changes before
moving the base image.

## Apply an update

1. Update the Alpine tag in `Dockerfile` when required. Use the current stable
   point release so a base refresh invalidates Docker's cached package layer.
2. Build the image with `--pull --no-cache` and record the installed Alpine,
   WireGuard, and CA bundle versions. Confirm security updates are present in
   both architectures' final packaged images; a floating tag or `apk add
   --no-cache` does not bypass Docker's build cache.
