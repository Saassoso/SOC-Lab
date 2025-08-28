

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