# Multi-Agent Orchestration Protocol (Mandatory)

## Core Directive
Whenever starting a project from scratch (greenfield), executing a major feature, or redesigning components:
1. **NEVER** act as a monolithic developer writing and designing everything directly in a single agent loop.
2. **ALWAYS** invoke and orchestrate the specialized subagents using the `invoke_subagent` tool.
3. **NEVER** accept generic AI-slop design (flat grey cards with 1px border, generic search inputs, static pages with zero motion, empty centered logins). The design must feel crafted by a world-class digital studio.

## Specialized Agent Roster & Sequence
Follow this strict division of responsibilities:

1. **`product` (Product Manager & UX Strategist)**:
   - Must be invoked to define formal requirements, user stories (`US-xxx`), acceptance criteria (AC), and backlog prioritization.
2. **`creative` (Creative Director & Visual Discovery Specialist)**:
   - Must be invoked for chameleon art direction, internet reference benchmarking (Awwwards, Siteinspire, Mobbin, Godly), visual moodboards, and breaking generic AI tropes.
3. **`documentation` (Knowledge Architect & Obsidian Curator)**:
   - Must be invoked to maintain the Obsidian Knowledge Vault (`SentinelOps-Vault/` following `obsidian-vault-craft`), graph view taxonomy, MOCs, bidirectional links `[[...]]`, and formal atomic notes.
4. **`architect` (Software Architect)**:
   - Must be invoked for system boundaries, microservices/monorepo structure, API contracts, C4 diagrams, and Architectural Decision Records (ADRs).
5. **`designer` (UI/UX Designer & Motion Art Director)**:
   - Must be invoked to establish the bespoke design system, kinetic tokens, depth layering (ambient lights, inner bevels, tactile surfaces), spring physics (`cubic-bezier`), staggered animations, and exercise the **Anti-AI Design Veto**.
6. **`developer` (Senior Fullstack & AI Dev)**:
   - Must be invoked for backend API implementation, database models, AI pipelines, and frontend components with fluid motion and micro-interactions.
7. **`security` (Cybersecurity & DevSecOps)**:
   - Must be invoked for STRIDE threat modeling, OWASP verification, and AI guardrails (anti-Prompt Injection, data leakage filters).
8. **`qa` (Lead QA & SDET)**:
   - Must be invoked for automated test suites, boundary condition analysis, and acceptance criteria verification.
9. **`enhancer` (Code Reviewer & Quality Gate)**:
   - Must be invoked for component-by-component code reviews, motion & accessibility audits, and final release sign-off.

## Orchestration Flow
`product` / `creative` ➔ `documentation` ➔ `architect` / `designer` ➔ `developer` ➔ `security` / `qa` ➔ `enhancer` ➔ Release.

## Strict Anti-Generic Design Mandates (Enforced by Designer & Enhancer)
- **Zero Static Deadpan**: No page can remain completely frozen. Elements must have kinetic life (subtle ambient telemetry pulses, staggered entrances, reactive hover elevations, live data counter easing).
- **Zero Flat Grey Box Syndrome**: Forbid identical `bg-zinc-900 border border-zinc-800` cards across the entire view. Cards must feature depth: inner highlights (`inset 0 1px 0 rgba(255,255,255,0.06)`), subtle radiant backdrops, status-driven aura glows, and distinct hierarchical weights.
- **Bespoke Component Craft**: Search bars must be interactive command centers (hotkey aura, spotlight focus, contextual category chips). Login screens must tell a story with atmospheric mission-control backdrops and live terminal connection status.
- **Physical Spring Feedback**: Every clickable interactive element must have tactile depress feedback (`active:scale-[0.98] active:translate-y-[1px] transition-all`).

## Inviolable Application Flow & State Machine Mandate (Anti-Bypass Protocol)
- **Zero Static Template Fallacy**: An application is NOT a collection of isolated static mockups or tabs. Every application is a deterministic Finite State Machine (FSM).
- **Inescapable Prerequisite Hierarchy**: First something MUST happen before something else is permitted (`primero tiene que pasar algo para hacer otra cosa`):
  `Unauthenticated (Public/Auth Only) ➔ Authenticated (Pending Diagnostic / Onboarding) ➔ Active Operational Interface ➔ Admin / Role-Guarded`.
- **Zero Route Bypassing**: Direct URL entry or navigation clicks to protected routes without a valid authenticated session MUST be intercepted and hard-redirected to `/login`.
- **Context-Aware Navigation Shells**: Unauthenticated users MUST NEVER be shown links, sidebars, or menus to protected internal application modules. Public layout vs Authenticated layout must be strictly segregated.
- **Anti-AI Topbar Veto**: Forbid generic AI translucent pill-button top bars (`backdrop-blur bg-zinc-900/50` with horizontal button soup). Enforce authentic, domain-tailored application layouts (solid lateral workspace sidebars, contextual breadcrumb hierarchies, active session telemetry).

## Iconography & Visual Asset Standards (Anti-Repetitive-Icon Mandate)
- **Lucide Demotion**: `lucide-react` (1,500 icons) is DISCOURAGED as the default icon library. Every AI-generated project uses the same 20 Lucide icons. Break the pattern.
- **Phosphor Icons Default**: Use `@phosphor-icons/react` (9,000+ icons, 6 weights: thin/light/regular/bold/fill/duotone) as the primary icon library for all new projects.
- **Iconify MCP Available**: An Iconify MCP server is configured globally, providing access to 200,000+ icons from 200+ icon sets. Agents can use `search_icons`, `get_icon`, `get_all_icon_sets`, and `get_icon_set` tools to discover and retrieve domain-specific icons.
- **One Icon Family Per Project**: Pick ONE primary icon library. Do NOT mix Phosphor + Lucide + Tabler in the same component tree. Supplement with Iconify only for specialized icons (flags, brands, cultural symbols).
- **Zero Text-Only Pages**: Every page and section MUST contain real visual content (images, illustrations, data visualizations, or generated assets). Text-only interfaces are incomplete work.

## Inter-Agent Artifact Reading Protocol (Anti-Silo Mandate)
Every agent MUST read and honor ALL upstream artifacts before starting work. Agents do NOT work in isolation — they build upon each other's deliverables.

| Agent | MUST Read Before Starting |
|-------|--------------------------|
| `creative` | PRD from `product` (user personas, content strategy, domain context) |
| `architect` | PRD from `product` (functional scope, state machine, user flows) |
| `designer` | PRD from `product` + Creative Brief from `creative` (imagery, archetype, icon map) |
| `developer` | PRD (Content Map, Mock Data, User Flow) + Creative Brief (images, icons) + Design Spec (tokens, motion, layouts) + ADR (component tree, data models) |
| `security` | ADR from `architect` + Developer's implementation (code audit) |
| `qa` | PRD (acceptance criteria) + Design Spec (visual checklist) + Developer's implementation |
| `enhancer` | ALL upstream artifacts for cross-referencing |

**If an upstream artifact is missing, the agent MUST request it before proceeding.** Never improvise content, design tokens, or data models that should come from an upstream agent.

## Universal Pre-Handoff Self-Critique (Mandatory for ALL Agents)
Before marking ANY work as complete, every agent MUST answer these 3 questions:
1. **"If I were the user seeing this for the first time, would I be impressed?"** — If no, revise.
2. **"Does this feel AI-generated or does it feel crafted by a senior professional?"** — If AI-generated, identify the tells and fix them.
3. **"Did I read and honor ALL upstream artifacts?"** — If no, go back and read them.

If ANY answer is negative, the agent MUST revise before handing off. This is not optional.

## Operational Realism & Anti-Concept-Design Mandate (The 12 Inviolable Rules)
Never design or build an application like a marketing pitch deck or an AI concept mockup. Software is a working tool, not a landing page for investors.

1. **Zero Buzzword Soup / Over-Engineered Copy**: State what the product DOES in simple, direct human language ("IT Support & Incident Management — Manage employee requests, assign incidents to support teams, and track operational workflows from one place.").
   - **HARD BANNED ADJECTIVES & BUZZWORDS**: `Next-Gen`, `AI-Powered`, `Intelligent`, `Future-Ready`, `Enterprise-Grade`, `Unified`, `Smart`, `Advanced`, `Precision`, `Command Center`, `Command Platform`, `Hyper-`, `Bloat`, `Cryptographically verified`, `Velocity`, `Consumer-grade`.
2. **Plain, Direct Navigation Labels (No Artificial Productization)**: An app is a working tool, not a sales brochure. Use direct nouns:
   - ✅ Use: `Tickets`, `Queue`, `Requests`, `Departments`, `Integrations`, `Settings`, `Users`, `Audit Log`.
   - ❌ FORBIDDEN: `Triage Queue Matrix`, `Requester Portal`, `Integrations & Connectors Hub`, `Areas & Departments Matrix`, `Roles & RBAC Permission Matrix`.
3. **Actionable Operational Metrics (Zero Demo Vanity Numbers)**: Forbid ambiguous metrics like `100% routing health`, `HTTP 200 OK Handshake`, `99.9% AI accuracy`.
   - Every metric must have clear operational context: `Last sync: 2m ago (0 failures)`, `5 of 5 squads active`, `3 tickets awaiting triage`, `2 critical P1 incidents`.
4. **Operational Workspace over Marketing Hero**: When an authenticated user opens an operational application or dashboard, NEVER show a promotional marketing hero with huge centered text and CTA buttons. Prioritize what requires attention in the first 5 seconds:
   - Priority incidents requiring action ➔ Assigned queue ➔ SLA countdowns ➔ Chronological activity log.
5. **No Clichéd Cyberpunk Neon Palette**: Forbid the generic AI trope of `#0B111C` + electric cyan + neon blue + neon green glowing status dots for IT/dev tools. Use credible, mature product palettes (balanced dark slates or neutrals, functional muted borders, intentional restrained accents).
6. **Functional Button Labels**: Use standard verbs: `Open Queue`, `New Ticket`, `View Integrations`. Ban dramatic labels like `Launch Agent Triage`, `Initiate Incident Command`.
7. **Zero Decorative Terminal Watermarks (`>_`, Code Glyphs, Circuit Backgrounds)**: Do NOT add giant watermark terminal prompts, fake code lines, or circuit grids as background decoration. Software conveys technical credibility through its speed and utility, not decorative graffiti.
8. **Realistic User Identities & Metadata**: In user profiles, display `Carlos Herrera` and `IT Operations`. Do not put artificial labels like `🟢 Carlos (super_admin)` and `Carlos Herrera - IT Operations & Governance` everywhere.
9. **No Artificial Demo Scenarios**: Avoid data that looks fabricated to impress (e.g. perfect round numbers, mock users with overly technical titles). Use organic, believable data.
10. **Microcopy for Operation, Not for Designers**: Microcopy must help the user work, not sell the feature to them (`Keyboard shortcuts enabled` instead of `Keyboard-first velocity`).
11. **Ergonomic Hierarchy over Symmetry**: Real software dashboards are not grids of identical cards. They have clear hierarchy: primary work area (60-70% width) + secondary contextual panel (30-40% width).
12. **The 5-Second Operational Test**: Look at any screen. Can a working professional understand what is happening and what action to take in the first 5 seconds without reading marketing prose? If not, redesign immediately.
13. **Zero "Card Everything" Syndrome**: Forbid wrapping every metric, section, and label in isolated rounded boxes. A mature enterprise tool mixes tables, inline data strips, clean divider lines, and text sections. Reduce cards and border-boxes by at least 40%.
14. **Monospace Restraint**: Monospace (`font-mono`) is STRICTLY reserved for genuine technical identifiers (ticket IDs, IP addresses, latency ms, HTTP codes, hashes, code snippets). NEVER use monospace for human counts, relative dates, or general metrics.
15. **Tight Corner Radius (Max 4-6px)**: Forbid `rounded-2xl` and `rounded-3xl` on operational software components. Use tight, professional radii: `rounded` (4px) or `rounded-md` (6px). Tables and list panes should have flat edges or simple divider borders.
16. **Zero Glow / Neon Halos**: Total ban on glowing box shadows (`shadow-[0_0_...]`), neon cyan halos, and pulsating glow borders. Real operational tools use quiet, solid surfaces and subtle separation lines.
17. **Quiet Action Buttons**: Primary buttons must be solid, sober, and functional (e.g. clean muted blue or slate). Forbid hyper-saturated glowing buttons that look like marketing landing page CTAs.
18. **Page Title Restraint (No Marketing H1s)**: Inside an application, page titles must be standard view names (`Overview`, `Queue`, `Settings`, `Integrations`). Never use marketing headlines as H1 page titles.

