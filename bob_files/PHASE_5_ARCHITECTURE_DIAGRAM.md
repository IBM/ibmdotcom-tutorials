# Phase 5: Requirements Architecture Diagram

## Multi-Tiered Requirements Structure

```mermaid
graph TB
    subgraph "Repository Root"
        BASE[requirements.txt<br/>Base Dependencies<br/>~20 packages]
        RAG[requirements-rag.txt<br/>RAG-Specific<br/>~25 packages]
        AGENTS[requirements-agents.txt<br/>Agent Orchestration<br/>~20 packages]
        MULTI[requirements-multiagent.txt<br/>Multi-Agent Systems<br/>~15 packages]
        OPT[requirements-optional.txt<br/>Specialized<br/>~30 packages]
        DEV[requirements-dev.txt<br/>Development<br/>~10 packages]
    end
    
    subgraph "Tutorial Categories"
        T1[01-rag-and-retrieval]
        T2[02-agents-and-orchestration]
        T3[03-multi-agent-systems]
        T4[04-prompt-engineering]
        T5[05-multimodal-ai]
        T6[Other tutorials]
    end
    
    subgraph "Tutorial-Specific"
        TS1[a2a_tutorial/<br/>requirements.txt<br/>beeai >=0.1.36]
        TS2[beeai_agent_server/<br/>pyproject.toml<br/>beeai ==0.1.29]
        TS3[chatdev/<br/>requirements.txt<br/>exact pins]
    end
    
    BASE --> T1
    BASE --> T2
    BASE --> T3
    BASE --> T4
    BASE --> T5
    BASE --> T6
    
    RAG --> T1
    AGENTS --> T2
    MULTI --> T3
    OPT --> T5
    
    T3 -.-> TS1
    T3 -.-> TS2
    T3 -.-> TS3
    
    style BASE fill:#4CAF50,stroke:#2E7D32,color:#fff
    style RAG fill:#2196F3,stroke:#1565C0,color:#fff
    style AGENTS fill:#FF9800,stroke:#E65100,color:#fff
    style MULTI fill:#9C27B0,stroke:#6A1B9A,color:#fff
    style OPT fill:#607D8B,stroke:#37474F,color:#fff
    style DEV fill:#795548,stroke:#4E342E,color:#fff
    style TS1 fill:#F44336,stroke:#C62828,color:#fff
    style TS2 fill:#F44336,stroke:#C62828,color:#fff
    style TS3 fill:#F44336,stroke:#C62828,color:#fff
```

## Dependency Flow

```mermaid
graph LR
    subgraph "Installation Patterns"
        A[User] --> B{Tutorial Type?}
        B -->|Basic| C[pip install -r requirements.txt]
        B -->|RAG| D[pip install -r requirements-rag.txt]
        B -->|Agents| E[pip install -r requirements-agents.txt]
        B -->|Multi-Agent| F[pip install -r requirements-multiagent.txt]
        B -->|Specialized| G[pip install -r requirements-optional.txt]
        
        D -.includes.-> C
        E -.includes.-> C
        F -.includes.-> C
        G -.includes.-> C
    end
    
    style A fill:#4CAF50,stroke:#2E7D32,color:#fff
    style B fill:#2196F3,stroke:#1565C0,color:#fff
    style C fill:#FF9800,stroke:#E65100,color:#fff
    style D fill:#9C27B0,stroke:#6A1B9A,color:#fff
    style E fill:#607D8B,stroke:#37474F,color:#fff
    style F fill:#795548,stroke:#4E342E,color:#fff
    style G fill:#F44336,stroke:#C62828,color:#fff
```

## Package Distribution

```mermaid
pie title "Package Distribution Across Requirements Files"
    "Base (Core)" : 20
    "RAG-Specific" : 25
    "Agent-Specific" : 20
    "Multi-Agent" : 15
    "Optional" : 30
    "Development" : 10
```

## Version Conflict Resolution Strategy

```mermaid
graph TD
    A[Dependency Conflict Detected] --> B{Can Resolve?}
    B -->|Yes| C[Use Compatible Version Range]
    B -->|No| D{Critical for Multiple Tutorials?}
    D -->|Yes| E[Document as Known Issue<br/>Provide Workaround]
    D -->|No| F[Keep in Tutorial-Specific<br/>Requirements]
    
    C --> G[Add to Consolidated Requirements]
    E --> H[Add to REQUIREMENTS_MAINTENANCE.md]
    F --> I[Document in Tutorial README]
    
    style A fill:#F44336,stroke:#C62828,color:#fff
    style B fill:#FF9800,stroke:#E65100,color:#fff
    style C fill:#4CAF50,stroke:#2E7D32,color:#fff
    style D fill:#2196F3,stroke:#1565C0,color:#fff
    style E fill:#FFC107,stroke:#F57C00,color:#000
    style F fill:#9C27B0,stroke:#6A1B9A,color:#fff
    style G fill:#4CAF50,stroke:#2E7D32,color:#fff
    style H fill:#607D8B,stroke:#37474F,color:#fff
    style I fill:#795548,stroke:#4E342E,color:#fff
```

## Testing Workflow

```mermaid
graph TB
    subgraph "Phase 1: RAG Tutorials"
        R1[Create Python 3.11 venv]
        R2[Install requirements-rag.txt]
        R3[Test langchain-rag.ipynb]
        R4[Test agentic-rag.ipynb]
        R5[Test self_rag.ipynb]
        R6[Document Issues]
        
        R1 --> R2 --> R3 --> R4 --> R5 --> R6
    end
    
    subgraph "Phase 2: Agent Tutorials"
        A1[Create Python 3.11 venv]
        A2[Install requirements-agents.txt]
        A3[Test llm-agent-orchestration.ipynb]
        A4[Test human-in-the-loop-agent.ipynb]
        A5[Test sql-agent-app]
        A6[Document Issues]
        
        A1 --> A2 --> A3 --> A4 --> A5 --> A6
    end
    
    subgraph "Phase 3: Multi-Agent Tutorials"
        M1[Create Python 3.11 venv]
        M2[Install requirements-multiagent.txt]
        M3[Test CrewAI tutorials]
        M4[Test BeeAI tutorials]
        M5[Test ACP tutorials]
        M6[Document Issues]
        
        M1 --> M2 --> M3 --> M4 --> M5 --> M6
    end
    
    R6 --> A1
    A6 --> M1
    M6 --> FINAL[Consolidate Findings<br/>Update Requirements]
    
    style R1 fill:#2196F3,stroke:#1565C0,color:#fff
    style A1 fill:#FF9800,stroke:#E65100,color:#fff
    style M1 fill:#9C27B0,stroke:#6A1B9A,color:#fff
    style FINAL fill:#4CAF50,stroke:#2E7D32,color:#fff
```

## Maintenance Workflow

```mermaid
graph LR
    A[New Tutorial Added] --> B{Requires New Dependency?}
    B -->|Yes| C{Dependency Category?}
    B -->|No| D[Use Existing Requirements]
    
    C -->|Core| E[Add to requirements.txt]
    C -->|RAG| F[Add to requirements-rag.txt]
    C -->|Agent| G[Add to requirements-agents.txt]
    C -->|Multi-Agent| H[Add to requirements-multiagent.txt]
    C -->|Optional| I[Add to requirements-optional.txt]
    C -->|Unique| J[Create Tutorial-Specific]
    
    E --> K[Test Compatibility]
    F --> K
    G --> K
    H --> K
    I --> K
    J --> L[Document in Tutorial README]
    
    K --> M{Conflicts?}
    M -->|Yes| N[Resolve or Document]
    M -->|No| O[Update REQUIREMENTS_MAINTENANCE.md]
    
    N --> O
    L --> O
    D --> O
    
    style A fill:#4CAF50,stroke:#2E7D32,color:#fff
    style B fill:#2196F3,stroke:#1565C0,color:#fff
    style C fill:#FF9800,stroke:#E65100,color:#fff
    style K fill:#9C27B0,stroke:#6A1B9A,color:#fff
    style M fill:#F44336,stroke:#C62828,color:#fff
    style O fill:#607D8B,stroke:#37474F,color:#fff
```

## File Size Estimates

| File | Packages | Est. Size | Install Time |
|------|----------|-----------|--------------|
| requirements.txt | ~20 | 150 MB | 2-3 min |
| requirements-rag.txt | ~45 (incl. base) | 800 MB | 5-7 min |
| requirements-agents.txt | ~40 (incl. base) | 600 MB | 4-6 min |
| requirements-multiagent.txt | ~35 (incl. base) | 500 MB | 4-5 min |
| requirements-optional.txt | ~50 (incl. base) | 2 GB | 10-15 min |
| **Full Installation** | ~120 unique | 3-4 GB | 15-20 min |

## Python Version Compatibility Matrix

| Package Category | Python 3.10 | Python 3.11 | Python 3.12 | Python 3.13 |
|-----------------|-------------|-------------|-------------|-------------|
| Base | ✅ | ✅ | ✅ | ✅ |
| RAG | ✅ | ✅ | ✅ | ⚠️ |
| Agents | ✅ | ✅ | ✅ | ⚠️ |
| Multi-Agent | ✅ | ✅ | ⚠️ | ❌ |
| Optional | ✅ | ✅ | ⚠️ | ❌ |

Legend:
- ✅ Fully supported
- ⚠️ Mostly supported (some packages may have issues)
- ❌ Not supported

## Key Benefits of Multi-Tiered Approach

1. **Modularity**: Install only what you need
2. **Faster Installation**: Smaller, focused dependency sets
3. **Easier Maintenance**: Clear categorization of dependencies
4. **Better Documentation**: Each file documents its purpose
5. **Conflict Isolation**: Tutorial-specific conflicts don't affect others
6. **Testing Efficiency**: Test by category rather than all-at-once
7. **User Experience**: Clear installation paths for different use cases

## Implementation Checklist

- [x] Complete dependency audit
- [x] Identify version conflicts
- [x] Design multi-tiered architecture
- [ ] Create requirements.txt (base)
- [ ] Create requirements-rag.txt
- [ ] Create requirements-agents.txt
- [ ] Create requirements-multiagent.txt
- [ ] Create requirements-optional.txt
- [ ] Create requirements-dev.txt
- [ ] Test RAG tutorials
- [ ] Test Agent tutorials
- [ ] Test Multi-Agent tutorials
- [ ] Create REQUIREMENTS_MAINTENANCE.md
- [ ] Update README.md
- [ ] Document tutorial-specific requirements

## Next Action

**Switch to Code mode** to begin creating the requirements files, starting with:
1. requirements.txt (base dependencies)
2. requirements-rag.txt (RAG-specific)
3. requirements-agents.txt (Agent-specific)

Then test with priority tutorials (RAG and Agents) before proceeding with remaining files.