# Wazuh-IDS - General Overview

## Overview

Wazuh integrates with a network-based intrusion detection system (NIDS) to enhance threat detection by monitoring and analyzing network traffic. In this use case, we demonstrate how to integrate Suricata with Wazuh. Suricata can provide additional insights into your networks security with its network traffic inspection capabilities.

This document covers the deployment of Suricata IDS/IPS (Intrusion Detection/Prevention System) on 2 different infrastructure platforms: **Windows 11** and **Windows Subsystem for Linux (WSL Ubuntu)**. Both implementations will be configured to monitor network traffic and generate security alerts that integrate seamlessly with the existing Wazuh SIEM infrastructure at **192.168.88.130**.

### What is Network-Based Intrusion Detection?

Network-based Intrusion Detection Systems (NIDS) monitor network traffic in real-time to detect suspicious activities, malicious patterns, and security threats. Unlike host-based systems that focus on individual endpoints, NIDS provides a comprehensive view of network communications, enabling detection of:

- **Lateral movement** between compromised systems
- **Command and control (C2)** communications
- **Data exfiltration** attempts
- **Network-based attacks** such as port scans and DDoS
- **Protocol anomalies** and malformed packets

## Infrastructure Deployment Strategy

This implementation demonstrates Suricata deployment across **heterogeneous infrastructure environments** to showcase flexibility and cross-platform compatibility:

### Deployment List

| Infrastructure  | Platform        | Version       | Instance Name | Purpose         | Installation Guide |
| --------------- | --------------- | ------------- | ------------- | --------------- | ------------------ |
| **Windows**     | Windows 11      | 22H2          | Windows  | Network IDS/IPS | [📖 Windows 11 Guide](./Surricata/Windows/README.md) |
| **Linux**       | WSL Ubuntu      | 24.04 LTS     | WSL  | Network IDS/IPS | [📖 WSL Ubuntu Guide](./Surricata/WSL/README.md) |


### Why Two Infrastructure Approaches?

**Windows Native Deployment** provides:
- Direct hardware interface access for comprehensive network monitoring
- Native Windows service integration
- Optimal performance for Windows-centric environments
- Enterprise-grade management capabilities

**Linux-based Deployment (WSL)** offers:
- Advanced packet processing capabilities
- Rich ecosystem of network analysis tools
- Superior rule management with suricata-update
- Flexible configuration and customization options

---


## Directory Structure

This documentation is organized with platform-specific guides in their respective directories:

``` bash
Wazuh-IDS
├── Surricata/
|   ├── Windows/
|   │   ├── README.md                 # Windows 11 installation guide
|   │   └── screenshots/              # Windows 11 screenshots
|   ├── WSL/
|   │   ├── README.md                 # WSL Ubuntu installation guide
|   │   └── screenshots/              # WSL Ubuntu screenshots
|   └──  README.md  
├──  Zeek                           # In the future if wanting to enhance Network monitoring  
└──  README.md                     # This overview document
```


### Additional Resources
- **Suricata Documentation**: [Suricata Docs](https://suricata.readthedocs.io/en/latest/)
- **Wazuh Documentation**: [Wazuh Docs](https://documentation.waz
uh.com/)
- **Emerging Threats Rules**: [ET Open Rules](https://rules.emergingthreats.net/open/)
- **Suricata GitHub Repository**: [Suricata GitHub](https://github.com/OISF/suricata)
- **Wazuh GitHub Repository**: [Wazuh GitHub](https://github.com/wazuh)


## Conclusion
This guide provides a comprehensive overview of deploying Suricata as a network-based intrusion detection system within Wazuh. By leveraging both Windows and WSL Ubuntu environments, you can enhance your network security posture with real-time monitoring, threat detection, and seamless integration into your existing SIEM infrastructure.
For detailed installation and configuration steps, please refer to the platform-specific guides in the respective directories. Each guide includes step-by-step instructions, configuration examples, and troubleshooting tips to ensure a successful deployment of Suricata within your Wazuh environment.
