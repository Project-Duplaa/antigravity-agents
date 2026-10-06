# Multi-Agent Orchestration Protocol (Mandatory) — v2

## Core Directive
Whenever starting a project from scratch (greenfield), executing a major feature, or redesigning components:
1. **NEVER** act as a monolithic developer writing and designing everything directly in a single agent loop.
2. **ALWAYS** invoke and orchestrate the specialized subagents using the `invoke_subagent` tool.
3. **NEVER** accept generic AI-slop design. The design must feel crafted by a world-class digital studio.
4. **ALWAYS** follow the Mockup-First Workflow for visual products (see `mockup-first-workflow` skill).
5. **ALWAYS** ensure every agent reads `.preferences.md` in the workspace root before producing any output. User preferences override all other rules.

## Specialized Agent Roster (14 Agents)

| # | Agent | Role | Invoked For |
|---|-------|------|-------------|
| 1 | `product` | Product Manager & UX Strategist | Requirements, user stories, acceptance criteria, content map, backlog prioritization |
| 2 | `creative` | Creative Director & Visual Discovery | Chameleon art direction (7 archetypes), internet benchmarking, photography, icon curation |
| 3 | `architect` | Software Architect | System boundaries, hexagonal architecture, API contracts, CI/CD, ADRs |
| 4 | `database` | Data Architect & DBA | ERD modeling, DDL schemas, migration strategy, index planning, query optimization, engine config |
| 5 | `security` | Security Engineer & DevSecOps | STRIDE, OWASP, AI/LLM security, supply chain, infra security, Security Veto |
| 6 | `designer` | UI/UX Designer & Motion Art Director | Design tokens, motion choreography, icon system, route layouts, Anti-AI Design Veto |
| 7 | `frontend` | **Principal Frontend Engineer** | **Static mockups, interactive prototypes, HTML/CSS/GSAP/Canvas. Produces visual artifacts, not documents.** |
| 8 | `blender` | **Principal CGI & CAD Director (v3.0)** | **Photorealistic Blender 5.2.2 headless renders (AgX, 4-point studio lighting, PBR materials), hard-surface CAD modeling, visual self-inspection loop, WebP frame sequences, Draco GLB export.** |
| 9 | `motion` | **Creative Motion & Interaction Specialist** | **GSAP ScrollTrigger choreography, spring physics micro-interactions, cinematic boot sequences, scroll-scrub timelines, Canvas/WebGL particles, Web Audio haptics, Motion Veto.** |
| 10 | `developer` | Senior Backend Developer | Backend APIs, data access layer, server logic, tests. **Does NOT produce frontend code.** |
| 11 | `qa` | Lead QA & SDET | Test pyramid, BVA, E2E (Playwright), performance, accessibility, QA Veto |
| 12 | `enhancer` | Code Quality & Optimization | Code reviews, refactoring blueprints, performance, a11y, before/after diffs |
| 13 | `documentation` | Knowledge Architect & Docs Specialist | README, API docs (OpenAPI), CHANGELOG, Obsidian knowledge vault |
| 14 | `orchestrator` | Pipeline Coordinator | Phase sequencing, quality gates, error recovery, progress tracking |

## Adaptive Orchestration Flow (Replaces Rigid 11-Phase)

### Mode A: Sampler & Mockup-First (DEFAULT for visual products)
```
Loop 0 — Visual Style & Component Picker (MANDATORY):
  product (basic PRD) → frontend produces `design-sampler.html` (interactive component matrix)
                                       ↓
                        [USER PICKS TYPOGRAPHY & COMPONENTS]
                                       ↓
Loop 1 — Visual Approval:
  creative (locks Visual Contract from User choices) → designer → frontend (static mockup)
                                       ↓
                              INTERNAL DESIGN REVIEW (creative or designer reviews the HTML)
                                       ↓
                              [USER SEES AND APPROVES]

Loop 2 — Engineering (only after approval):
  architect → database / security → developer (backend only) → frontend (connect APIs) → qa / enhancer → documentation
```

#### Internal Design Review Gate (New in v2)
After the `frontend` agent produces a mockup, the orchestrator MUST invoke `creative` or `designer` to review the HTML source before presenting it to the user. The reviewer checks:
1. Does the mockup honor the Creative Brief's visual archetype?
2. Does it follow `.preferences.md` rules (no images in cards, correct fonts, etc.)?
3. Does it use the correct icons (Phosphor, not Lucide)?
4. Is the data from the PRD (not invented placeholders)?
5. Are all buttons functional?
6. **STRICT COMPONENT RELEVANCE CHECK (Anti-Gratuitous Telemetry):** Are all components on the screen 100% relevant to the product domain? If the reviewer finds irrelevant engineering telemetry, sensor gauges, or clock capsules on a non-engineering page, **REJECT IMMEDIATELY**.
7. **DOMAIN-ADAPTIVE COLOR CHECK:** Does the color palette authentically fit the product domain (light/organic for wellness, pristine navy/white for fintech, ivory/espresso for fashion) rather than defaulting to dark obsidian / amber?

If the reviewer finds violations, the `frontend` agent is re-invoked with specific fixes BEFORE the user sees it. Maximum 2 internal iterations.

### Mode B: Backend-First (APIs, CLIs, data pipelines)
```
product → architect → database / security → developer → qa / enhancer → documentation
```

### Mode C: Full Parallel (Large projects with clear boundaries)
```
product → creative + architect (parallel)
       → designer + database + security (parallel)
       → frontend + developer (parallel)
       → qa / enhancer → documentation
```

**The orchestrator selects the mode based on project type. If unsure, default to Mode A.**

## Mandatory Skills for Frontend Work
Any agent producing HTML/CSS/JS MUST read these skills before writing code:
1. `.preferences.md` — User preferences override everything. Read FIRST.
2. `.golden-samples/README.md` + at least one golden sample — Study the user-approved quality bar.
3. `visual-contract-template` — Read the Visual Contract from `creative` as a literal spec.
4. `mockup-first-workflow` — The overall workflow and file conventions.
5. `component-patterns` — Reusable HTML/Tailwind component blueprints. Copy and customize, don't reinvent.
6. `data-visualization` — SVG sparklines, donut charts, bar charts, Canvas area charts.
7. `visual-craft-recipes` — CSS token dictionaries and domain-specific recipes.
8. `viral-3d-experience` — Dual-Engine visual architecture (Apple Canvas 2D scrubbing + Three.js WebGL Orbit PBR), Lumafield CT slicing lenses, fluid particle physics, and procedural Web Audio API haptics (activated when 3D is requested or for physical flagship showcases).

## Mandatory Output Format for Creative Agent
The `creative` agent MUST output a **Visual Contract** (NOT a prose Creative Brief).
- Read the template at `.agents/skills/visual-contract-template/SKILL.md`.
- Every decision must be a concrete, implementable spec with exact CSS classes/values.
- Reference golden samples from `.golden-samples/` when applicable.
- Paragraphs describing "vibes" or "feelings" are BANNED. Use structured tables and specs.


## Shared Design & Quality Rules
All agents MUST honor the rules defined in the `engineering-os` plugin (`rules/01` through `rules/05`). In particular:
- `05_anti_ai_design_standards.md` — Anti-AI visual patterns, operational realism, iconography, typography, buzzword bans.
- `01_engineering_standards.md` — Hexagonal architecture, stateless services, type safety.
- `02_quality_gates.md` — Security, QA, Architecture, Database veto powers.
- `03_handoff_protocol.md` — Phase artifact trail and IACP protocol.
- `04_encoding_and_i18n.md` — UTF-8 encoding and Windows compatibility.

These rules are non-negotiable and apply to every project.

## State Machine Mandate (Anti-Bypass Protocol)
- Every application is a deterministic Finite State Machine (FSM), NOT a collection of static mockups.
- Strict prerequisite hierarchy: `Unauthenticated → Authenticated (Pending Setup) → Active Operational → Admin`.
- Zero route bypassing: protected routes without valid session → hard redirect to `/login`.
- Dual layout shells: Public (marketing, auth) vs Authenticated (sidebar, breadcrumbs). Never leak internal nav to unauthenticated visitors.

## Inter-Agent Artifact Reading Protocol
Every agent MUST read and honor ALL upstream artifacts before starting work:

| Agent | MUST Read Before Starting |
|-------|--------------------------|
| `creative` | PRD from `product` + `.golden-samples/` (study approved patterns) + `visual-contract-template` skill |
| `architect` | PRD from `product` |
| `database` | PRD from `product` + ADR from `architect` |
| `security` | ADR from `architect` + Developer's implementation |
| `designer` | PRD + Visual Contract from `creative` + `.golden-samples/` (for design review) |
| `blender` | PRD from `product` + Visual Contract from `creative` + Real-world CAD benchmarks & photos + Motion Choreography from `motion` (if animation sequences) |
| `motion` | PRD from `product` + Visual Contract from `creative` + Design Spec from `designer` + `.preferences.md` motion rules |
| `frontend` | PRD + **Visual Contract** (NOT prose brief) + 3D Geometries/Assets from `blender` + Motion Choreography from `motion` + Design Spec + `.golden-samples/` + `component-patterns` + `data-visualization` + `visual-craft-recipes` |
| `developer` | PRD + ADR + DATA spec + Security spec (NO frontend work) |
| `qa` | PRD + Design Spec + Frontend mockup + Developer's implementation + Security Report + Motion Choreography |
| `enhancer` | ALL upstream artifacts |
| `documentation` | ALL upstream artifacts + source code |

**If an upstream artifact is missing, the agent MUST request it before proceeding.**

## QA Feedback Loop Protocol
When QA exercises a VETO:
1. QA sends specific findings with file paths, line numbers, and concrete fixes.
2. The orchestrator re-invokes the responsible agent (frontend or developer) with the QA findings.
3. The responsible agent applies fixes and reports back.
4. QA re-verifies. This loop repeats until QA approves.
5. Maximum 3 iterations. If still failing after 3, escalate to user.

## Universal Pre-Handoff Self-Critique
Before marking ANY work as complete, every agent MUST answer:
1. "If I were the user seeing this for the first time, would I be impressed?" — If no, revise.
2. "Does this feel AI-generated or crafted by a senior professional?" — If AI-generated, fix.
3. "Did I read and honor ALL upstream artifacts?" — If no, go back.
