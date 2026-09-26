# Inter-Agent Handoff Protocol (11-Phase Lifecycle)

Communication between agents in the Engineering OS must be backed by documented artifacts to eliminate ambiguity and prevent loss of context.

## Workflow Phases & Required Artifacts

```
1. Creative Discovery (Creative) ──────► Produces `docs/creative/CREATIVE-XXX.md`
       │                                 [Archetype, benchmarks, imagery, icon map]
       ▼
2. Product & UX Strategy (Product) ────► Produces `docs/prd/PRD-XXX.md`
       │                                 [User stories, content map, mock data, state machine]
       ▼
3. Architecture (Architect) ───────────► Produces `docs/adr/ADR-XXX.md`
       │                                 [Component tree, API contracts, CI/CD, data models]
       ▼
4. Data Architecture (Database) ───────► Produces `docs/data/DATA-XXX.md`
       │                                 [ERD, DDL, migrations, indexes, engine config]
       ▼
5. Security Review (Security) ─────────► Produces `docs/security/SEC-XXX.md`
       │                                 [Status: APPROVED | BLOCKED]
       ▼
6. Design System (Designer) ───────────► Produces `docs/design/DESIGN-XXX.md`
       │                                 [Tokens, motion spec, icon system, layouts]
       ▼
7. Implementation (Developer) ─────────► Writes code in `src/` & tests in `src/__tests__/`
       │                                 (Only proceeds if Security is APPROVED)
       ▼
8. QA Validation (QA) ────────────────► Produces `docs/qa/QA-XXX.md`
       │                                 [Status: PASSED | FAILED]
       ▼
9. Code Review (Enhancer) ────────────► Produces `docs/enhancements/ENHANCE-XXX.md`
       │                                 [Scorecard, before/after recommendations]
       ▼
10. Product Check (Product) ───────────► UX acceptance & Feynman validation
       │
       ▼
11. Documentation (Documentation) ─────► README, API docs, CHANGELOG, Knowledge Vault
```

## Mandatory Artifact Locations
- **Creative Brief**: `docs/creative/CREATIVE-XXX-<name>.md`
- **Product Requirements**: `docs/prd/PRD-XXX-<name>.md`
- **Architecture**: `docs/adr/ADR-XXX-<name>.md`
- **Data Architecture**: `docs/data/DATA-XXX-<name>.md`
- **Security**: `docs/security/SEC-XXX-<name>.md`
- **Design System**: `docs/design/DESIGN-XXX-<name>.md`
- **QA Reports**: `docs/qa/QA-XXX-<name>.md`
- **Enhancements**: `docs/enhancements/ENHANCE-XXX-<name>.md`
- **Knowledge Vault**: `docs/notes/` (Obsidian-compatible)

## IACP Communication Packets
All inter-agent communication uses structured packets:
- **HANDOFF**: Phase completion with deliverables and next actions.
- **CRITIQUE**: Technical challenge with severity and concrete suggestion.
- **VETO_ALERT**: Work stoppage with evidence and required remediation.
- **REVISION_REQUEST**: Quality gate iteration with acceptance criteria.
