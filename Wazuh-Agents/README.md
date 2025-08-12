# Wazuh Agents Installation - General Overview

## Overview  
This document covers the installation of 4 Wazuh agents on different platforms: Windows 11, Kali Linux, Red Hat Enterprise Linux (RHEL), and Windows Subsystem for Linux (WSL). These agents will communicate with the Wazuh Manager server at IP address **192.168.88.130**.

Each agent will be assigned a unique name and group for better management and will be installed using the appropriate Wazuh agent package and installation commands.

---

## Agents List  

| Agent OS        | Version       | Agent Name       | Group          |
| --------------- | ------------- | ---------------- | -------------- |
| Windows 11      | 22H2          | W11              | default        |
| Kali Linux      | 2023.1        | kali             | default        |
| RHEL            | 10            | RHEL             | default        |
| Windows WSL2    | Ubuntu 22.04  | WSL              | default        |

---

## General Server Address  
The Wazuh Manager server address used by all agents is:

**192.168.88.130**

## Common Agent Setup Steps  
1. **Assign a unique agent name and group on the Wazuh Manager** to easily identify the agent.
2. **Download and install the agent package** according to the operating system.
3. **Configure the agent with the Wazuh Manager IP address** and assigned name/group.
4. **Start and enable the agent service** to connect with the Wazuh Manager.



