FROM alpine:3.24.3

RUN apk add --no-cache \
    bash \
    iproute2 \
    iptables \
    wireguard-go \
    wireguard-tools

COPY assets/configure-network.sh /usr/local/bin/configure-network
COPY assets/collect-wireguard-statistics.awk /usr/local/bin/collect-wireguard-statistics.awk
COPY assets/start-wireguard.sh /usr/local/bin/start-wireguard

RUN chmod 0755 /usr/local/bin/configure-network /usr/local/bin/start-wireguard

ENTRYPOINT ["/usr/local/bin/start-wireguard"]
