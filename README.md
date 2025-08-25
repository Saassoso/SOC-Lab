# SOC Lab

## Overview
This repository documents the comprehensive setup of a SOC (Security Operations Center) lab using multiple virtual machines. The lab implements a complete security monitoring infrastructure with Wazuh SIEM as the central platform, featuring multiple detection capabilities across different operating systems and security domains.

📄 **Documentation Index:**
- [01 – Wazuh Manager Installation](Wazuh-Installation/README.md)
- [02 – Wazuh Agent Installation](Wazuh-Agents/README.md)
- [03 – File Integrity Monitoring (FIM)](Wazuh-FIM/README.md)
- [04 – Network-Based Intrusion Detection (IDS)](Wazuh-IDS/README.md)
- [05 – Honeypot Integration (DeceptiNet)](Wazuh-DeceptiNet/README.md)
- [06 – System Audit Integration](Wazuh-audit/README.md)
- [📋 SOC Operations](Lab-Notes/SOC-Runbook.md)        
- [🎯 Detection Use Cases](Lab-Notes/detection-use-cases.md)  

---

## Repository Structure

```bash
📂 soc-lab/
├── README.md
├── Wazuh-Installation/
├── Wazuh-Agents/
├── Wazuh-FIM/
├── Wazuh-IDS/
├── Wazuh-DeceptiNet/
├── Wazuh-System-Audit/
│   ├── Auditd/
│   └── Sysmon/
└── Lab-Notes/
    ├── lessons-learned.md
    └── future-enhancements.md
```

---

## Infrastructure Overview

### Lab Network Configuration
- **Wazuh Manager**: Ubuntu 24.04.2 LTS - `192.168.88.130`
- **Network Segment**: `192.168.88.0/24`

### Monitored Endpoints
| Agent OS        | Version       | Agent Name | IP Address | Group   | Status |
| --------------- | ------------- | ---------- | ---------- | ------- | ------ |
| Windows 11      | 22H2          | W11        | Dynamic    | windows | ✅ Active |
| Kali Linux      | 2023.1        | kali       | Dynamic    | linux   | ✅ Active |
| Windows WSL2    | Ubuntu 24.04  | WSL        | Dynamic    | linux   | ✅ Active |

---

## Project Progress

### Phase 1: Core SIEM Infrastructure ✅
- [x] **Wazuh Manager Installation** - Ubuntu 24.04.2 LTS deployment
  - All-in-one installation (Wazuh server, indexer, dashboard)
  - Web dashboard accessible at `https://192.168.88.130`
  - System requirements: 4 vCPUs, 11GB RAM, 70GB storage
- [x] **Multi-Platform Agent Deployment**
  - Windows 11 agent with MSI installer
  - Kali Linux agent with DEB package
  - RHEL agent with RPM package
  - WSL Ubuntu agent with DEB package

### Phase 2: File Integrity Monitoring (FIM) ✅
- [x] **Linux FIM Configuration** - Group-based monitoring
  - Standard Linux group configuration for servers/desktops
  - Critical system directories monitoring (`/etc`, `/bin`, `/sbin`)
  - Real-time monitoring with `realtime="yes"`
- [x] **Kali Linux Specialized Configuration**
  - Local agent override to reduce pentesting noise
  - Focused monitoring on sensitive system changes
  - Volatile directory exclusions for operational efficiency
- [x] **Windows FIM Configuration**
  - Registry monitoring for persistence detection
  - Critical Windows directories and system files
  - Group-based configuration for Windows agents

### Phase 3: Network-Based Intrusion Detection ✅
- [x] **Suricata IDS Integration** - Multi-platform deployment
  - Windows 11 native Suricata deployment
  - WSL Ubuntu Suricata with advanced rule management
  - Real-time network traffic analysis and alerting
  - Integration with Wazuh for centralized alert management
- [x] **Network Monitoring Capabilities**
  - Lateral movement detection
  - Command and control communications monitoring
  - Protocol anomaly detection
  - Emerging Threats ruleset integration

### Phase 4: Deception Technology ✅
- [x] **Wazuh-DeceptiNet Integration** - Honeypot platform
  - SSH Honeypot (Cowrie) for attack simulation
  - Web Honeypot (Flask) for credential harvesting detection
  - Docker-based deployment for easy management
  - Custom Wazuh rules for honeypot event analysis
- [x] **Honeypot Monitoring**
  - JSON structured logging for SIEM integration
  - Real-time attack detection and alerting
  - Threat intelligence gathering from honeypot interactions

### Phase 5: System Audit Integration ✅
- [x] **Linux Auditd Integration** - Advanced system call monitoring
  - Comprehensive audit rules for process execution monitoring
  - Account manipulation detection and alerting
  - File access monitoring with user attribution (who-data)
  - Privilege escalation and sudo usage monitoring
  - Network connection tracking and analysis
- [x] **Windows Sysmon Integration** - Enhanced Windows event logging
  - Process creation and termination monitoring
  - Network connection tracking with destination details
  - File system activity monitoring
  - Registry modification detection
  - Image and DLL loading events
- [x] **Advanced Threat Detection**
  - PowerShell encoded command detection
  - Living-off-the-land binary abuse monitoring
  - Persistence mechanism identification
  - Lateral movement detection capabilities

---

## Security Monitoring Capabilities

### 🛡️ Host-Based Detection
- **File Integrity Monitoring**: Real-time detection of unauthorized file/registry changes
- **System Activity Monitoring**: Process execution, user authentication, system modifications
- **System Audit Integration**: Comprehensive system call and event monitoring
- **Multi-OS Coverage**: Windows, Linux (multiple distributions)

### 🔍 Advanced Monitoring
- **Process Execution Tracking**: Complete command-line and process ancestry
- **Account Management Monitoring**: User creation, modification, privilege changes
- **Network Activity Analysis**: Connection tracking with process attribution
- **Registry Monitoring**: Windows persistence and configuration changes

### 🌐 Network-Based Detection  
- **Intrusion Detection**: Suricata IDS with Emerging Threats rules
- **Traffic Analysis**: Protocol inspection, anomaly detection
- **Cross-Platform Deployment**: Windows and Linux network monitoring

### 🍯 Deception Technology
- **SSH Honeypots**: Command capture and attacker profiling
- **Web Honeypots**: Credential harvesting and web attack detection
- **Integrated Alerting**: Real-time notifications via Wazuh SIEM

### 📊 Centralized Analysis
- **Unified Dashboard**: Single pane of glass for all security events
- **Custom Rules**: Tailored detection logic for specific threats
- **Alert Correlation**: Multi-source event analysis and threat hunting
- **MITRE ATT&CK Mapping**: Technique-based threat classification

---

## Quick Start Guide

### Prerequisites
- VMware/VirtualBox hypervisor
- Network connectivity between VMs
- Administrative privileges on target systems

### Deployment Sequence
1. **[Deploy Wazuh Manager](Wazuh-Installation/README.md)** - Central SIEM platform
2. **[Install Wazuh Agents](Wazuh-Agents/README.md)** - Endpoint monitoring
3. **[Configure FIM](Wazuh-FIM/README.md)** - File integrity monitoring
4. **[Deploy Suricata IDS](Wazuh-IDS/README.md)** - Network intrusion detection
5. **[Setup Honeypots](Wazuh-DeceptiNet/README.md)** - Deception technology
6. **[Configure System Auditing](Wazuh-audit/README.md)** - Advanced system monitoring

### Access Points
- **Wazuh Dashboard**: `https://192.168.88.130`
  - Username: `admin`
  - Password: `qkiPxU5uC94ZZMQEyS?07qYkUYASi3K5`

---

## Future Roadmap

### Phase 6: Security Assessment (Planned)
- [ ] **Security Configuration Assessment (SCA)** - Compliance monitoring
- [ ] **Vulnerability Management** - Integration with vulnerability scanners
- [ ] **Threat Intelligence** - IOC feeds and threat hunting capabilities

### Phase 7: Automation & Response (Planned)
- [ ] **SOAR Integration** - Security orchestration and automated response
- [ ] **Machine Learning** - Behavioral analysis and anomaly detection
- [ ] **Cloud Integration** - AWS/Azure security monitoring

### Phase 8: Container Security (Planned)
- [ ] **Docker Security** - Container runtime monitoring
- [ ] **Kubernetes Integration** - Orchestration platform security
- [ ] **Container Image Scanning** - Vulnerability assessment

---

## Key Features

✅ **Multi-Platform Support** - Windows, Linux, containers  
✅ **Real-Time Monitoring** - File integrity, network traffic, system events  
✅ **Advanced System Auditing** - Process execution, account management, privilege escalation  
✅ **Deception Technology** - Honeypots for threat intelligence  
✅ **Network Intrusion Detection** - Traffic analysis and threat detection  
✅ **Centralized Management** - Single dashboard for all security events  
✅ **Custom Detection Rules** - Tailored threat detection logic with MITRE mapping  
✅ **Scalable Architecture** - Agent-based deployment model  
✅ **Open Source** - Cost-effective security monitoring solution

---

## Security Use Cases Covered

### 🎯 Threat Detection Scenarios

**Initial Access & Execution**
- Malicious process execution detection
- Script-based attack identification
- Living-off-the-land binary abuse

**Persistence & Privilege Escalation**
- Registry modification monitoring
- Account manipulation detection
- Sudo/privilege escalation tracking

**Defense Evasion & Discovery**
- PowerShell obfuscation detection
- System reconnaissance monitoring
- Anti-forensics technique identification

**Lateral Movement & Exfiltration**
- Network connection analysis
- Credential usage tracking
- Data access pattern anomalies

**Impact & Collection**
- File system modification tracking
- Service disruption detection
- Data collection behavior analysis

---

## Compliance & Standards

### Regulatory Compliance
✅ **PCI-DSS** - Payment card industry data security standards  
✅ **GDPR** - General data protection regulation compliance  
✅ **HIPAA** - Healthcare information privacy and security  
✅ **SOX** - Sarbanes-Oxley financial compliance  

### Security Frameworks
✅ **MITRE ATT&CK** - Threat technique mapping and detection  
✅ **NIST Cybersecurity Framework** - Risk management alignment  
✅ **CIS Controls** - Critical security control implementation  

---

## Documentation & Support

Each component includes comprehensive documentation with:
- Step-by-step installation guides
- Configuration examples and best practices
- Screenshots for visual guidance
- Troubleshooting sections
- Performance tuning recommendations
- Security rule customization examples
- Testing and validation procedures

For specific implementation details, refer to the individual component documentation linked in the repository structure above.

---

**Lab Status**: 
**Last Updated**: August 2025  
**Documentation**: Uncomplete for all implemented phases  