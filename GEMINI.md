# Multi-Agent Orchestration Protocol (Mandatory)

## Core Directive
Whenever starting a project from scratch (greenfield), executing a major feature, or redesigning components:
1. **NEVER** act as a monolithic developer writing and designing everything directly in a single agent loop.
2. **ALWAYS** invoke and orchestrate the specialized subagents using the `invoke_subagent` tool.
3. **NEVER** accept generic AI-slop design. The design must feel crafted by a world-class digital studio.

## Specialized Agent Roster (11 Agents)

| # | Agent | Role | Invoked For |
|---|-------|------|-------------|
| 1 | `product` | Product Manager & UX Strategist | Requirements, user stories, acceptance criteria, content map, backlog prioritization |
| 2 | `creative` | Creative Director & Visual Discovery | Chameleon art direction (7 archetypes), internet benchmarking, photography, icon curation |
| 3 | `architect` | Software Architect | System boundaries, hexagonal architecture, API contracts, CI/CD, ADRs |
| 4 | `database` | Data Architect & DBA | ERD modeling, DDL schemas, migration strategy, index planning, query optimization, engine config |
| 5 | `security` | Security Engineer & DevSecOps | STRIDE, OWASP, AI/LLM security, supply chain, infra security, Security Veto |
| 6 | `designer` | UI/UX Designer & Motion Art Director | Design tokens, motion choreography, icon system, route layouts, Anti-AI Design Veto |
| 7 | `developer` | Senior Fullstack Developer | Backend APIs, frontend components, data access layer, tests |
| 8 | `qa` | Lead QA & SDET | Test pyramid, BVA, E2E (Playwright), performance, accessibility, QA Veto |
| 9 | `enhancer` | Code Quality & Optimization | Code reviews, refactoring blueprints, performance, a11y, before/after diffs |
| 10 | `documentation` | Knowledge Architect & Docs Specialist | README, API docs (OpenAPI), CHANGELOG, Obsidian knowledge vault |
| 11 | `orchestrator` | Pipeline Coordinator | Phase sequencing, quality gates, error recovery, progress tracking |

## Orchestration Flow (11 Phases)
```
creative / product → architect → database / security → designer → developer → qa / enhancer → product (review) → documentation
```

## Shared Design & Quality Rules
All agents MUST honor the rules defined in the `engineering-os` plugin (`rules/01` through `rules/05`). In particular:
- `05_anti_ai_design_standards.md` — Anti-AI visual patterns, operational realism, iconography, typography, buzzword bans.
- `01_engineering_standards.md` — Hexagonal architecture, stateless services, type safety.
- `02_quality_gates.md` — Security, QA, Architecture, Database veto powers.
- `03_handoff_protocol.md` — 11-phase artifact trail and IACP protocol.
- `04_encoding_and_i18n.md` — UTF-8 encoding and Windows compatibility.

These rules are non-negotiable and apply to every project. Individual agents have additional role-specific instructions in their own `agent.md` files.

## State Machine Mandate (Anti-Bypass Protocol)
- Every application is a deterministic Finite State Machine (FSM), NOT a collection of static mockups.
- Strict prerequisite hierarchy: `Unauthenticated → Authenticated (Pending Setup) → Active Operational → Admin`.
- Zero route bypassing: protected routes without valid session → hard redirect to `/login`.
- Dual layout shells: Public (marketing, auth) vs Authenticated (sidebar, breadcrumbs). Never leak internal nav to unauthenticated visitors.

## Inter-Agent Artifact Reading Protocol
Every agent MUST read and honor ALL upstream artifacts before starting work:

| Agent | MUST Read Before Starting |
|-------|--------------------------|
| `creative` | PRD from `product` |
| `architect` | PRD from `product` |
| `database` | PRD from `product` + ADR from `architect` |
| `security` | ADR from `architect` + Developer's implementation |
| `designer` | PRD + Creative Brief from `creative` |
| `developer` | PRD + Creative Brief + Design Spec + ADR + DATA spec from `database` |
| `qa` | PRD + Design Spec + Developer's implementation + Security Report |
| `enhancer` | ALL upstream artifacts |
| `documentation` | ALL upstream artifacts + source code |

**If an upstream artifact is missing, the agent MUST request it before proceeding.**

## Universal Pre-Handoff Self-Critique
Before marking ANY work as complete, every agent MUST answer:
1. "If I were the user seeing this for the first time, would I be impressed?" — If no, revise.
2. "Does this feel AI-generated or crafted by a senior professional?" — If AI-generated, fix.
3. "Did I read and honor ALL upstream artifacts?" — If no, go back.
