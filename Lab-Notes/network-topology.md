# Lab Network Topology

````
Internet
    |
Router (192.168.88.1)
    |
Lab Network (192.168.88.0/24)
    ├── Wazuh Manager (192.168.88.130) - Ubuntu 24.04.2
    ├── Windows 11 Agent (DHCP) - Endpoint monitoring
    ├── Kali Linux Agent (DHCP) - Pentesting platform
    └── WSL Ubuntu Agent (DHCP) - Development environment
```
Honeypots: Running on Wazuh Manager via Docker
IDS: Suricata on each endpoint