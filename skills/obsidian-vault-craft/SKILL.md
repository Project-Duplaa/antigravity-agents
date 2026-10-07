---
name: obsidian-vault-craft
description: Master skill for building deeply interconnected, highly actionable Second Brain knowledge vaults in Obsidian across ANY software project. Establishes Graph View color grouping taxonomies, rich YAML frontmatter, qualitative decision-gated note structures (context, decision, discarded alternatives, consequences, links, owner, date), and bidirectional wikilink topologies.
---

# OBSIDIAN VAULT CRAFT & SECOND BRAIN KNOWLEDGE ARCHITECTURE

## 🎯 Mission
Equip AI agents to transform ephemeral project engineering decisions, domain mathematics, UX architectures, and system designs into a **world-class, deeply interconnected Second Brain (Obsidian Knowledge Vault)** located at `<project_root>/docs/notes/`.

The agent is **never a summary-bot** and **never writes 10-line skeleton stubs**.
Whether applied to a fintech platform, an aerospace tool, a coffee extraction lab, a distributed consensus engine, a healthcare service, or an e-commerce startup, every note must read like a masterclass article written by a staff engineer.

---

## 🎨 1. Obsidian Graph View Grouping Taxonomy

Every vault must be color-codable in Obsidian Graph View (`Ctrl/Cmd + G` ➔ Groups) using these standardized query groups:

| Group Name | Search Query | Recommended Color | Purpose |
| :--- | :--- | :--- | :--- |
| **🟣 Nexus & MOCs** | `tag:#type/moc` | `#a855f7` (Purple / Violet) | Central aggregation and navigation hubs. |
| **🟠 Primary Project Domain** | `tag:#domain/<domain>` | Specific project accent (e.g. `#ff4500` for coffee, `#c5a059` for barber, `#00f0ff` for compute) | Domain-specific theory and business logic. |
| **🟢 Architecture & Decisions** | `tag:#type/architecture` OR `tag:#type/adr` | `#10b981` (Emerald Green) | ADRs, design patterns, and structural decisions. |
| **🔵 Concepts & Pure Math** | `tag:#type/concept` OR `tag:#type/algorithm` | `#3b82f6` (Electric Blue) | First-principles equations and core algorithms. |
| **🔴 Failures & Post-Mortems** | `tag:#type/postmortem` | `#ef4444` (Crimson Red) | Outages, edge cases, race conditions, memory leaks. |

---

## 🏷️ 2. Standardized YAML Frontmatter Template

Every note MUST start with this frontmatter:

```yaml
---
title: "Descriptive and Accurate Title"
type: moc | concept | architecture | implementation | protocol | algorithm | postmortem | runbook
domain: <project-domain> | shared
tags:
  - type/concept
  - domain/<project-domain>
  - status/evergreen
  - <topic>/<subtopic>
aliases: ["Alias 1", "Acronym", "Alternative Name"]
created: YYYY-MM-DD
updated: YYYY-MM-DD
status: evergreen # seed | developing | evergreen
complexity: intermediate # foundational | intermediate | advanced
related_code:
  - "src/domain/<engine>.ts"
  - "src/components/<feature>/<Component>.tsx"
---
```

---

## 📝 3. Qualitative Note Anatomy & Decision Quality Gate

Documentation is gated by **information quality, not line count**. Artificial length requirements (e.g. 80 lines) create fluff and repetitive prose. A note may be 15 lines or 60 lines as long as it satisfies the **Decision & Knowledge Checklist**:

Every note must clearly articulate:
1. **Contexto**: El problema u origen de la necesidad (por qué surge).
2. **Decisión explicada**: Qué se eligió o diseñó, con precisión técnica y sin ambigüedad.
3. **Alternativas descartadas**: Qué otras opciones se evaluaron y la razón concreta de su descarte.
4. **Consecuencias & Trade-offs**: Impacto positivo, limitaciones aceptadas, riesgos o costes.
5. **Trazabilidad & Enlaces**: Enlaces directos a archivos de código (`src/...`), ADRs o `[[wikilinks]]` bidireccionales.
6. **Metadatos & Autoría**: Owner/autor, fecha, estado (`evergreen | developing | deprecated`).
7. **Modelado / Ecuaciones / Código (si aplica)**: Excerpt de código o formulación matemática concisa cuando el concepto lo amerite.

1. **Frontmatter YAML**: Standard metadata and graph tags.
2. **Executive Summary & Principles**: 2 paragraphs explaining what the concept is and why it matters.
3. **Feynman First-Principles Explanation**: Clear, jargon-free breakdown using real-world analogies.
4. **Formal Mathematical / Theoretical Modeling**: Rigorous LaTeX equations (`$$...$$` and `$...$`), dimensional analysis, and step-by-step derivations.
5. **💻 Project Code Implementation & File Links**:
   - Direct code excerpt from the project (`src/domain/...` or `src/components/...`).
   - Line-by-line explanation of why it was implemented that way (safety invariants, performance optimizations, memory control).
6. **🧠 Engineering & Field Commentary**:
   - Practical field observations (from the barista, operator, engineer, or end user).
   - Design trade-offs, alternative approaches rejected, and rationale.
7. **⚠️ Edge Cases, Failure Modes & Anti-Patterns**:
   - Behavior under zero, negative, or overflowing values.
   - Concurrency risks, float inaccuracies, or physical degradation.
8. **🔗 Bidirectional Graph Connections**:
   - `MOC Padre`: Parent MOC link.
   - `Conceptos Hermanos`: Peer note links.
   - `Documentos de Ingeniería`: Links to `docs/adr/`, `docs/prd/`, `docs/design/`.

---

## 🕸️ 4. Dense Bidirectional Linking & Nexus Protocol

- **No Orphan Notes**: Every note must link to at least 3-5 other notes.
- **In-Context Links**: Weave `[[WikiLink]]` tags directly inside prose sentences.
- **Central Nexus**: Always maintain `docs/notes/MOC Master Vault.md` as the omniscient root index.
- **Vault Guide**: Always provide `docs/notes/README-VAULT.md` instructing how to set up Obsidian Graph View.
