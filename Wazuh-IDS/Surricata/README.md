# Suricata: High-Performance Network Security Engine

![Suricata Logo](https://images.app.goo.gl/sbTJnLCKQkLB3UBv9)

Suricata is a high-performance Network IDS, IPS, and Network Security Monitoring engine that provides:
- **Real-time intrusion detection** with rule-based analysis
- **Multi-threaded architecture** for high-throughput environments  
- **Protocol analysis** for HTTP, TLS, DNS, SMTP, and more
- **File extraction and analysis** capabilities
- **JSON logging** for easy SIEM integration

---

## Common Suricata Setup Components

All Suricata installations include these core components:

### 1. Core Engine
- **High-performance network packet processing** using multi-threading
- **Rule-based detection engine** with ET Open ruleset
- **Protocol analysis** for HTTP, TLS, DNS, SMTP, and more

### 2. Rule Management
- **Emerging Threats Open rules** (free ruleset)
- **Custom rule configuration** for specific threats
- **Rule update automation** for latest threat intelligence

### 3. Logging and Alerting
- **EVE JSON logging** for structured output
- **Alert generation** for detected threats
- **Performance statistics** and monitoring metrics

### 4. Integration Capabilities
- **Wazuh SIEM integration** via log forwarding
- **Network tap/mirror compatibility**
- **PCAP file analysis** for forensics

---