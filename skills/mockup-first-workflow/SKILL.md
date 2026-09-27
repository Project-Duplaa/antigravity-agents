---
name: mockup-first-workflow
description: Formalizes the component-sampler and mockup-first development workflow. Visual components and mockups are tested and approved by the user BEFORE any backend work begins. Eliminates wasted engineering effort on backends that serve rejected UIs.
---

# Mockup-First Development Workflow

> **Principle:** Never build a UI without letting the user choose their visual components first, and never build a backend for a UI nobody has approved.

## When to Apply
- ANY project where the user interface is a primary deliverable
- ANY greenfield SaaS, dashboard, or web application
- ANY redesign or visual overhaul

## The Three-Loop Pipeline

### Loop 0: Visual Style & Component Picker (MANDATORY BEFORE MOCKUP)
```
Product (PRD scope) → Frontend produces interactive `design-sampler.html`
                                     ↓
                      USER TESTS & PICKS VISUAL DNA
             (Typography, Buttons, Cards, Menus, Timeline, Colors)
                                     ↓
```

**Rules for Loop 0:**
1. The `frontend` agent generates an interactive `design-sampler.html` tailored to the project domain.
2. It showcases real, clickable component variations side-by-side:
   - Typography pairings (Titular serif/sans, body, numbers mono)
   - Button styles and tactile micro-interactions (mecanizado, biselado, wireframe, rounded)
   - Cards, borders, and data containers (borde grueso, vidrio ahumado, monolito, abierto)
   - Menus and navigation schemes (sidebar vertical con números, masthead superior, dock)
   - Data displays, metrics (80px hero, gauges) and timeline/table layouts
3. The user opens `design-sampler.html` with a double-click, tests the components, and selects their preferred combination.
4. The user copies their selection and posts it in the chat.
5. The `creative` agent locks this chosen DNA into the project's `Visual Contract`.
6. Only then does Loop 1 begin.

### Loop 1: Visual Mockup Production (using User's Chosen DNA)
```
Creative (locks Visual Contract) → Designer (Tokens) → Frontend (Static Mockup HTML)
                                                               ↓
                                                      USER REVIEWS & ITERATES
                                                               ↓
                                                      USER APPROVES DESIGN ✅
```

**Rules for Loop 1:**
1. The `frontend` agent produces a standalone HTML file (`mockups/v1.html`) incorporating the exact components and typography selected in Loop 0.
2. Zero server dependencies. The file opens with a double-click.
3. All data comes from the PRD mock data set — never invented.
4. Iterations happen directly on the HTML file.
5. The user can request unlimited visual changes.
6. No backend, database, or API work happens during this loop.

### Loop 2: Engineering Integration (Only After Approval)
```
Architect (ADR) → Database (DDL) → Security (Threat Model) → Developer (Backend)
                                                                     ↓
                                                              Connect Approved UI to APIs
                                                                     ↓
                                                              QA → Enhancer → Documentation
```

**Rules for Loop 2:**
1. Only triggered when the user explicitly approves the mockup from Loop 1.
2. The backend Developer takes the approved HTML and replaces hardcoded data with `fetch()` calls.
3. The approved HTML structure, classes, and visual design are FROZEN — the backend adapts to the frontend, not the other way around.
4. QA verifies that the connected version is visually identical to the approved mockup.

## File Convention
```
project/
├── design-sampler.html   ← Loop 0: Interactive component & style picker
├── mockups/
│   ├── v1.html           ← Loop 1: First full mockup with selected DNA
│   ├── v2.html           ← After user feedback
│   └── v3-approved.html  ← Frozen approved version
├── public/
│   └── index.html        ← Connected to backend (Loop 2)
├── src/                   ← Backend code (Loop 2)
└── docs/                  ← Specifications
```

## Agent Responsibilities

| Agent | Loop 0 (Sampler) | Loop 1 (Mockup) | Loop 2 (Engineering) |
|-------|------------------|-----------------|-----------------------|
| `product` | Define domain scope | PRD with mock data | Review final product |
| `creative` | Propose 3-4 archetypes | Lock Visual Contract | — |
| `designer` | Review sampler components | Design tokens & spec | Verify visual fidelity |
| `frontend` | **Produces `design-sampler.html`** | **Produces mockup HTML** | Adapt HTML for API integration |
| `architect` | — | — | ADR & API contracts |
| `database` | — | — | DDL & migrations |
| `security` | — | — | Threat model |
| `developer` | — | — | Backend APIs |
| `qa` | — | — | Full test suite |
| `enhancer` | — | — | Code quality audit |

## Anti-Patterns (What NOT To Do)
- ❌ Building a full mockup or page before the user selects their components in `design-sampler.html`
- ❌ Building Express routes before the user has seen a UI
- ❌ Setting up SQLite schemas before visual approval
- ❌ Running QA on code the user hasn't visually approved
- ❌ Writing API documentation for endpoints serving rejected designs
