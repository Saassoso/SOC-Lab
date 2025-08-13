# Wazuh Agents Installation - General Overview

## Overview

This document covers the installation of 4 Wazuh agents on different platforms: Windows 11, Kali Linux, Red Hat Enterprise Linux (RHEL), and Windows Subsystem for Linux (WSL). These agents will communicate with the Wazuh Manager server at IP address **192.168.88.130**.

Each agent will be assigned a unique name and group for better management and will be installed using the appropriate Wazuh agent package and installation commands.

**Wazuh agent enrollment** is the process of registering a Wazuh agent to a Wazuh manager. This enrollment allows the Wazuh agents to communicate securely with the Wazuh manager and become authorized members of the Wazuh security platform.

---

## Agents List

| Agent OS        | Version       | Agent Name | Group   | Installation Guide |
| --------------- | ------------- | ---------- | ------- | ------------------ |
| Windows 11      | 22H2          | W11        | default | [📖 Windows 11 Guide](./Windows/README.md) |
| Kali Linux      | 2023.1        | kali       | default | [📖 Kali Linux Guide](./kali/README.md) |
| RHEL            | 10            | RHEL       | default | [📖 RHEL Guide](./RHEL/README.md) |
| Windows WSL2    | Ubuntu 24.04  | WSL        | default | [📖 WSL Ubuntu Guide](./WSL/README.md) |

---

## General Server Address

The Wazuh Manager server address used by all agents is:
**192.168.88.130**

---

## Common Agent Setup Steps

All Wazuh agent installations follow these common steps, with platform-specific variations:

### 1. Assign Agent Name and Group
- **Assign a unique agent name and group on the Wazuh Manager** to easily identify the agent
- Access the Wazuh web interface → **Agents** → **Deploy New Agent**
- Configure agent name and group assignment

### 2. Select Package Type
- **Download and install the agent package** according to the operating system
- Choose the appropriate package format:
  - **Windows**: MSI installer
  - **Linux (Debian-based)**: DEB package
  - **Linux (RPM-based)**: RPM package

### 3. Configure Agent Connection
- **Configure the agent with the Wazuh Manager IP address** and assigned name/group
- Set server address: `192.168.88.130`
- Apply agent-specific configurations

### 4. Install and Start Service
- **Start and enable the agent service** to connect with the Wazuh Manager
- Verify successful enrollment and connectivity

---

## Directory Structure

This documentation is organized with platform-specific guides in their respective directories:

```
wazuh-agents-installation/
├── README.md                     # This overview document
├── Windows/
│   ├── README.md                 # Windows 11 installation guide
│   ├── configs/                  # ossec.conf
│   └── screenshots/              # Windows 11 screenshots
├── kali/
│   ├── README.md                 # Kali Linux installation guide
│   ├── configs/                  # ossec.conf
│   └── screenshots/              # Kali Linux screenshots
├── RHEL/
│   ├── README.md                 # RHEL installation guide
│   ├── configs/                  # ossec.conf
│   └── screenshots/              # RHEL screenshots
├── WSL/
│   ├── README.md                 # WSL Ubuntu installation guide
│   ├── configs/                  # ossec.conf
│   └── screenshots/              # WSL Ubuntu screenshots
└── common/
    └── README.md           # Common Troublshouting & Agent verification procedures
```

---

## Quick Start Guide

### Prerequisites for All Platforms
- Network connectivity to Wazuh Manager (`192.168.88.130`)
- Administrative/root privileges on target systems
- Wazuh Manager is accessible and running

### Installation Workflow

1. **Choose your platform** from the agents list above
2. **Follow the specific installation guide** for your operating system
3. **Verify agent enrollment** using the verification procedures
4. **Configure monitoring** according to your security requirements

---




