# Inter-Agent Handoff Protocol (Adaptive Lifecycles)

Communication between agents in the Engineering OS must be backed by documented artifacts to eliminate ambiguity and prevent loss of context.
In v2, the rigid 11-phase waterfall is replaced by three adaptive orchestration modes tailored to the project type.

---

## Orchestration Modes

### Mode A: Mockup-First (DEFAULT for visual products, SaaS, dashboards)
Visual validation comes BEFORE backend engineering. The user inspects and approves a standalone visual artifact before APIs or schemas are written.

```
Loop 1 — Visual Approval:
  product → creative → designer → frontend (static HTML mockup)
                                       │
                                       ▼
                              INTERNAL DESIGN REVIEW (creative or designer)
                                       │
                                       ▼
                              [USER REVIEWS & APPROVES]

Loop 2 — Engineering Integration (only after visual approval):
  architect → database + security [Phase 1: Pre-Code Threat Model & SEC-SPEC] (parallel)
       ↓
  developer (backend only, adhering to DATA & SEC-SPEC)
       ↓
  frontend (connect APIs) + security [Phase 2: Post-Code Audit & Veto] + qa / enhancer (parallel) → documentation
```

### Mode B: Backend-First (APIs, CLIs, data pipelines, SDKs)
```
product → architect → database + security [Pre-Code] → developer → security [Post-Code] + qa / enhancer → documentation
```

### Mode C: Full Parallel (Large projects with clear domain boundaries)
```
product → creative + architect (parallel)
       → designer + database + security [Pre-Code] (parallel)
       → frontend + developer (parallel)
       → security [Post-Code] + qa / enhancer (parallel) → documentation
```

---

## Workflow Phases & Required Artifacts

| Phase | Agent | Deliverable Artifact | Description |
|-------|-------|----------------------|-------------|
| 1. Product & UX | `product` | `docs/prd/PRD-XXX.md` | User stories, content map, realistic mock data, FSM |
| 2. Creative Discovery | `creative` | `docs/creative/CREATIVE-XXX.md` | Archetype, internet benchmarks, imagery, icon mapping |
| 3. Design Tokens | `designer` | `docs/design/DESIGN-XXX.md` | Tokens, motion spec, component state matrix, Anti-AI veto |
| 4. Visual Mockup | `frontend` | `mockups/vX.html` | Standalone HTML mockup, zero server dependencies, hardcoded PRD data |
| 5. Architecture | `architect` | `docs/adr/ADR-XXX.md` | Hexagonal structure, API contracts, ADRs, state boundaries |
| 6. Data Architecture | `database` | `docs/data/DATA-XXX.md` | ERD, DDL schemas, index strategy, engine config, seed data |
| 7. Security Pre-Code | `security` | `docs/security/SEC-SPEC.md` | STRIDE model, trust boundaries, auth/RBAC matrix, rate limits |
| 8. Backend Engineering | `developer` | `src/`, `src/domain/`, etc. | REST endpoints, data access layer, server logic, unit tests |
| 9. Frontend Connection | `frontend` | `public/index.html` | Connect approved mockup to backend REST APIs |
| 10. Security Post-Code | `security` | `docs/security/SEC-AUDIT.md` | SAST, dependency audit, verification against SEC-SPEC, Security Veto |
| 11. QA Validation | `qa` | `docs/qa/QA-XXX.md` | Test execution matrix, BVA, accessibility, QA Veto |
| 12. Code Optimization | `enhancer` | `docs/enhancements/ENHANCE-XXX.md` | 10-pillar code quality scorecard, before/after diffs |
| 13. Documentation | `documentation` | `README.md`, `CHANGELOG.md`, `docs/notes/` | Comprehensive docs, Obsidian second-brain vault |

---

## Mandatory Artifact Locations
- **Creative Brief**: `docs/creative/CREATIVE-XXX-<name>.md`
- **Product Requirements**: `docs/prd/PRD-XXX-<name>.md`
- **Architecture**: `docs/adr/ADR-XXX-<name>.md`
- **Data Architecture**: `docs/data/DATA-XXX-<name>.md`
- **Security**: `docs/security/SEC-XXX-<name>.md`
- **Design System**: `docs/design/DESIGN-XXX-<name>.md`
- **Mockup HTML**: `mockups/vX.html`
- **QA Reports**: `docs/qa/QA-XXX-<name>.md`
- **Enhancements**: `docs/enhancements/ENHANCE-XXX-<name>.md`
- **Knowledge Vault**: `docs/notes/` (Obsidian-compatible)

---

## IACP Communication Packets
All inter-agent communication uses structured packets:
- **HANDOFF**: Phase completion with deliverables and next actions.
- **CRITIQUE**: Technical challenge with severity and concrete suggestion.
- **VETO_ALERT**: Work stoppage with evidence and required remediation.
- **REVISION_REQUEST**: Quality gate iteration with acceptance criteria.
