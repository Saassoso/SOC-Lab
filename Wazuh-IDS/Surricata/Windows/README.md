# Suricata Installation Guide - Windows  

## Prerequisites

- **Operating System**: Windows System
- **Administrative Privileges**: Required for installation and network interface access
- **Network Access**: Internet connectivity for downloading packages and rule updates
- **Hardware**: Minimum 4GB RAM, 4+ CPU cores recommended

## Environment Details

- **Instance Name**: `SURICATA-WIN`
- **Target Network**: `192.168.88.0/24`
- **Management Interface**: Primary network adapter
- **Log Integration**: Wazuh Manager at `192.168.88.130`

## Installation Steps

### Step 1: Download Suricata for Windows

1. **Download the Windows installer**:


   ![Suricata Download](screenshots/01-suricata-download.png)

### Step 2: Install Suricata

1. **Run the MSI installer as Administrator**:

![Suricata Download](screenshots/02-suricata-exe.png)

2. **Verify installation**:
   ```powershell
   # Check version
   & "C:\Program Files\Suricata\suricata.exe" --version
   ```

   ![Suricata Installation](screenshots/02-suricata-installation.png)

### Step 3: Download Emerging Threats Rules

1. **Download and extract rules**:
   ```powershell
   # Create rules directory
   New-Item -Path "C:\Program Files\Suricata\rules" -ItemType Directory -Force
   
   # Download rules
   cd "C:\Program Files\Suricata\rules"
   Invoke-WebRequest -Uri "https://rules.emergingthreats.net/open/suricata-6.0.8/emerging.rules.tar.gz" -OutFile "emerging.rules.tar.gz"
   
   # Extract rules (requires 7-Zip or similar extraction tool)
   # After extraction, ensure *.rules files are in C:\Program Files\Suricata\rules\
   ```

   ![Rules Download](screenshots/03-rules-download.png)

### Step 4: Configure Suricata

1. **Edit the configuration file**:
   ```powershell
   # Edit Suricata configuration
   notepad "C:\Program Files\Suricata\suricata.yaml"
   ```

2. **Modify key settings**:
   ```yaml
   vars:
     address-groups:
       HOME_NET: "192.168.88.0/24"
       EXTERNAL_NET: "!$HOME_NET"

   default-rule-path: C:\Program Files\Suricata\rules
   rule-files:
     - "*.rules"

   # Windows interface configuration
   pcap:
     - interface: "\\Device\\NPF_{INTERFACE-GUID}"
   
   outputs:
     - eve-log:
         enabled: yes
         filename: C:\Program Files\Suricata\logs\eve.json
         types:
           - alert
           - http
           - dns
           - tls
   ```

   ![Configuration Edit](screenshots/04-config-edit.png)

### Step 5: Configure Wazuh Integration

1. **Add Suricata log monitoring to Wazuh agent**:
   Edit `C:\Program Files (x86)\ossec-agent\ossec.conf`:
   
   ```xml
   <ossec_config>
     <localfile>
       <log_format>json</log_format>
       <location>C:\Program Files\Suricata\logs\eve.json</location>
     </localfile>
   </ossec_config>
   ```

2. **Restart Wazuh agent**:
   ```powershell
   Restart-Service wazuh-agent
   ```

   ![Wazuh Integration](screenshots/05-wazuh-integration.png)

### Step 6: Start Suricata

1. **Start Suricata service**:
   ```powershell
   # Start Suricata (adjust interface name as needed)
   Start-Process -FilePath "C:\Program Files\Suricata\suricata.exe" -ArgumentList "-c","C:\Program Files\Suricata\suricata.yaml","-i","Ethernet" -WindowStyle Hidden
   ```

   ![Start Suricata](screenshots/06-start-suricata.png)

## Attack Emulation

Wazuh automatically parses data from the Suricata EVE JSON logs and generates related alerts on the Wazuh dashboard.

1. **Generate test traffic from another machine**:
   ```bash
   # From Wazuh server or another machine, ping the Windows endpoint
   ping -c 20 "192.168.88.XXX"  # Replace with Windows IP
   ```

2. **Browse to test websites**:
   ```powershell
   # Generate HTTP traffic that might trigger rules
   Invoke-WebRequest -Uri "http://testmynids.org/uid/index.html"
   ```



## Additional Resources

- [Suricata Documentation](https://docs.suricata.io/)
- [Windows Installation Guide](https://docs.suricata.io/en/latest/install.html#windows)
- [Rule Management](https://docs.suricata.io/en/latest/rules/index.html)
- [Performance Tuning](https://docs.suricata.io/en/latest/performance/index.html)

---

**Last Updated**: August 2025  
**Suricata Version**: 8.0.0 
**Tested On**: Windows 11 Pro 22H2  
**Integration**: Wazuh SIEM v4.12.0