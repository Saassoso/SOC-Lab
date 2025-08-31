
# pfSense Network Segmentation - SOC Lab

## Overview
This document outlines the pfSense-based network segmentation implemented for the SOC Lab environment. The architecture provides proper network isolation between critical security infrastructure, monitored endpoints, and external network access through strategic VLAN segmentation and firewall rules.

## Network Architecture

### Physical/Virtual Infrastructure
- **pfSense Version**: Latest stable release
- **Network Interfaces**: 1 WAN + 3 LAN interfaces
- **VLAN Configuration**: 3 isolated subnets with dedicated purposes
- **Routing**: Inter-VLAN communication controlled by firewall rules

---

## Network Segments

### 🔧 Management Network (VLAN 10)
**Purpose**: Dedicated network for SOC infrastructure and management systems
- **Subnet**: `192.168.10.0/24`
- **Gateway**: `192.168.10.1` (pfSense)
- **DHCP Range**: `192.168.10.100-192.168.10.200`

#### Critical Systems
| System | IP Address | Function |
|--------|------------|----------|
| pfSense Management | `192.168.10.1` | Network gateway & firewall |
| Wazuh Manager | `192.168.10.10` | SIEM central server |
| Jump Box/Admin | `192.168.10.50` | Administrative access point |

#### Security Characteristics
- **Highest Security Zone**: Restricted access to management protocols
- **Limited Outbound**: Only essential updates and threat intelligence feeds
- **No Direct Internet**: Protected by strict firewall rules
- **Management Protocols**: SSH, HTTPS, SNMP (restricted to admin networks)

---

### 🖥️ Agent Network (VLAN 20)
**Purpose**: Monitored endpoints and systems under security observation
- **Subnet**: `192.168.20.0/24`
- **Gateway**: `192.168.20.1` (pfSense)
- **DHCP Range**: `192.168.20.100-192.168.20.200`

#### Monitored Systems
| System | IP Assignment | Agent Type | Purpose |
|--------|---------------|------------|---------|
| Windows 11 Lab | DHCP/Static | Wazuh Agent | Windows endpoint monitoring |
| Kali Linux | DHCP/Static | Wazuh Agent | Penetration testing monitoring |
| Ubuntu Desktop | DHCP/Static | Wazuh Agent | Linux workstation monitoring |
| WSL Instances | DHCP | Wazuh Agent | Development environment monitoring |

#### Security Characteristics
- **Medium Security Zone**: Controlled internet access for updates
- **Agent Communication**: Direct connection to Wazuh Manager (VLAN 10)
- **Monitoring Focus**: File integrity, process execution, network connections
- **Threat Simulation**: Controlled environment for security testing

---

### 🌐 Public/DMZ Network (VLAN 30)
**Purpose**: External-facing services and honeypot infrastructure
- **Subnet**: `192.168.30.0/24`
- **Gateway**: `192.168.30.1` (pfSense)
- **DHCP Range**: `192.168.30.100-192.168.30.200`

#### Public Services
| Service | IP Address | Ports | Purpose |
|---------|------------|-------|---------|
| Web Honeypot | `192.168.30.10` | 80, 443 | HTTP/HTTPS attack detection |
| SSH Honeypot | `192.168.30.20` | 22 | SSH brute force monitoring |
| DeceptiNet Platform | `192.168.30.30` | Various | Deception technology hub |
| Test Web Server | `192.168.30.40` | 80, 8080 | Application security testing |

#### Security Characteristics
- **Lowest Trust Zone**: Direct internet exposure allowed
- **Honeypot Operations**: Designed to attract and log attacks
- **Isolated Communication**: Limited access to internal networks
- **Threat Intelligence**: Collection point for attack patterns

---

## Firewall Rules Configuration


```
                    ┌─────────────────────────────────┐
                    │        WAZUH MANAGER            │
                    │  ┌─────────────────────────────┐ │
                    │  │     Wazuh Server            │ │
                    │  │  - Event Processing         │ │
                    │  │  - Rule Engine              │ │
                    │  │  - Active Response          │ │
                    │  └─────────────────────────────┘ │
                    │  ┌─────────────────────────────┐ │
                    │  │     Elasticsearch           │ │
                    │  │  - Event Storage            │ │
                    │  │  - Indexation               │ │ 
                    │  │  - Search Engine            │ │
                    │  └─────────────────────────────┘ │
                    │  ┌─────────────────────────────┐ │
                    │  │       Kibana                │ │
                    │  │  - Web Dashboard            │ │
                    │  │  - Visualizations           │ │
                    │  │  - Reporting                │ │
                    │  └─────────────────────────────┘ │
                    │  ┌─────────────────────────────┐ │
                    │  │      Suricata IDS           │ │
                    │  │  - Network Monitoring       │ │
                    │  │  - Threat Detection         │ │
                    │  └─────────────────────────────┘ │
                    └─────────────────────────────────┘
                                    │
                    ┌───────────────┼───────────────┐
                    │               │               │
        ┌─────────────────┐ ┌─────────────────┐ ┌─────────────────┐
        │ WINDOWS AGENT   │ │  LINUX AGENT    │ │  FUTURE AGENTS  │
        │                 │ │                 │ │                 │
        │ - Wazuh Agent   │ │ - Wazuh Agent   │ │ - Scalability   │
        │ - Sysmon        │ │ - Auditd        │ │ - Cloud Ready   │
        │ - FIM Whodata   │ │ - FIM Whodata   │ │                 │
        │ - CIS Scanner   │ │ - CIS Scanner   │ │                 │
        │ - Log Forward   │ │ - Log Forward   │ │                 │
        └─────────────────┘ └─────────────────┘ └─────────────────┘
```