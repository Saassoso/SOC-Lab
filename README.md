# SOC Lab


## Overview
This repository documents the setup of the SOC lab using multiple virtual machines.  
The first phase - installation of the Wazuh Manager and endpoint agents - has been completed.
The second phase - configuration of File integrity monitoring - has been completed.
The thrid phase - File integrity monitoring (FIM) - 
The fourth phase - System Audit(Sysmon, Auditd) - 
The fifth phase - Log collector - 
The sixth phase - Container security - 
The seventh phase - Security configuration assessment (SCA) - is comming next. 
📄 **Current Documentation:**  
- [01 – Wazuh Manager Installation](Wazuh-Installation/README.md)
- [02 – Wazuh Agent Installation](Wazuh-Agents/README.md)
---

## Repository Structure

```bash
📂 soc-lab/
├── README.md
├── Wazuh-Installation/
│   ├── README.md
│   ├── screenshots/
│   ├── configs/
│   └── troubleshooting/
├── Wazuh-Agents/
│   ├── Windows/
│   │   ├── screenshots/
|   │   ├── README.md
│   │   └── configs/
│   ├── kali/
│   │   ├── screenshots/
|   │   ├── README.md
│   │   └── configs/
│   ├── RHEL/
│   │   ├── screenshots/
|   │   ├── README.md
│   │   └── configs/
│   ├── WSL/
│   │   ├── screenshots/
|   │   ├── README.md
│   │   └── configs/
|   └── README.md
├── Network-Setup/
│   ├── README.md
│   └── network-diagrams/
└── Lab-Notes/
    ├── lessons-learned.md
    └── future-enhancements.md
```

---

## Progress
- [x] Wazuh Manager Installed ([details](Wazuh-Manager/README.md))
- [x] Windows Agent Installed ([details](Wazuh-Agents/Windows/README.md))
- [x] WSL Agent Installed ([details](Wazuh-Agents//README.md))
- [x] kalli Agent Installed ([details](Wazuh-Agents//README.md))
- 
