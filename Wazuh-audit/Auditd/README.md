# Auditd Integration Guide

## Overview

Auditd (Linux Audit Daemon) is the userspace component of the Linux auditing system that provides detailed logging of system events, including system calls, file access, network connections, and user authentication. This guide covers the complete integration of Auditd with Wazuh for enhanced Linux system monitoring and threat detection.

The integration enables real-time monitoring of critical system activities with user attribution (who-data), making it invaluable for compliance, forensics, and advanced threat hunting.

---

## Prerequisites

### System Requirements
- **Operating System**: Linux (Ubuntu 20.04+, CentOS 7+, RHEL 7+)
- **Privileges**: Root or sudo access required
- **Disk Space**: Minimum 2GB for audit logs (varies by activity level)
- **Network**: Connectivity to Wazuh Manager (192.168.88.130)
- **Wazuh Agent**: Must be installed and configured

### Package Dependencies
```bash
# Ubuntu/Debian
sudo apt update
sudo apt install auditd audispd-plugins
```

## Installation and Configuration

### Step 1: Install Auditd

#### Ubuntu/Debian Systems
```bash
# Update package repository
sudo apt update

# Install auditd and related tools
sudo apt install auditd audispd-plugins -y

# Verify installation
auditctl --version
```

![installation-Ubuntu](./screenshots/01-installation-Ubuntu.png)

![installation-kali](./screenshots/06-installation-kali.png)


### Step 2: Enable and Start Auditd

#### Enable and Start Auditd
```bash
# Enable auditd service
sudo systemctl enable auditd

# Start auditd service
sudo systemctl start auditd

# Verify service status
sudo systemctl status auditd
```
![auditd-Ubuntu](./screenshots/02-auditd-Ubuntu.png)

![auditd-kali](./screenshots/05-auditd-kali.png)

- Reduce permissions for security reasons :
![Permissions](./screenshots/07-Permissions.png)


### Step 3: Configure Audit Rules

#### Wazuh Audit Rules

```bash
# Edit auditd rule configuration file
sudo nano /etc/audit/rules.d/audit.rules
```

![Wazuh-audit-rules](./screenshots/03-Wazuh-audit-rules.png)


### Step 4: Configure Wazuh Agent Integration

#### Configure Wazuh Agent for Auditd
```bash
# Edit Wazuh agent configuration
sudo nano /var/ossec/etc/ossec.conf
```
![Wazuh-agent-config](./screenshots/08-Wazuh-agent-config].png)


#### Restart Wazuh Agent

```bash
# Restart wazuh Agent
sudo systemctl restart wazuh-agent
```

### Step 5 : Who-data monitoring

The who-data functionality allows the FIM module to obtain information about who made modifications to a monitored file. This information contains the user who made the changes to the monitored files and the program name or process used.

- Add the configuration below within the FiM :
![who-data](./screenshots/09-who-data.png)

- Configure the provider tag: 
![provider-tag](./screenshots/10-provider-tag.png)

**Use Cases** :
-    *** Monitor changes in the /etc/hosts.allow file on Linux :***
![Monitor-changes](./screenshots/11-Monitor-changes.png)
 -   *** Detecting Account Manipulation :***
![Account-Manipulation](./screenshots/12-Account-Manipulation.png)

#### Test Result :

![Test-Result](./screenshots/04-Test-Result.png)


**Last Updated**: August 2025  
**Testing**: Validated with account manipulation and file monitoring
