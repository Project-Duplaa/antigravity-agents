---
name: mockup-first-workflow
description: Formalizes the mockup-first development workflow. Visual artifacts are produced and approved by the user BEFORE any backend work begins. Eliminates wasted engineering effort on backends that serve rejected UIs.
---

# Mockup-First Development Workflow

> **Principle:** Never build a backend for a UI nobody has approved.

## When to Apply
- ANY project where the user interface is a primary deliverable
- ANY greenfield SaaS, dashboard, or web application
- ANY redesign or visual overhaul

## The Two-Loop Pipeline

### Loop 1: Visual Approval (Fast, Cheap)
```
Product (PRD) → Creative (Brief) → Designer (Tokens) → Frontend (Static Mockup HTML)
                                                              ↓
                                                     USER REVIEWS & ITERATES
                                                              ↓
                                                     USER APPROVES DESIGN ✅
```

**Rules for Loop 1:**
1. The `frontend` agent produces a standalone HTML file with hardcoded data.
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
├── mockups/
│   ├── v1.html          ← First iteration
│   ├── v2.html          ← After user feedback
│   └── v3-approved.html ← Frozen approved version
├── public/
│   └── index.html       ← Connected to backend (Loop 2)
├── src/                  ← Backend code (Loop 2)
└── docs/                 ← Specifications
```

## Agent Responsibilities

| Agent | Loop 1 | Loop 2 |
|-------|--------|--------|
| `product` | ✅ PRD with mock data | Review final product |
| `creative` | ✅ Visual direction | — |
| `designer` | ✅ Design tokens & component specs | Verify visual fidelity |
| `frontend` | ✅ **Produces the mockup HTML** | Adapt HTML for API integration |
| `architect` | — | ✅ ADR & API contracts |
| `database` | — | ✅ DDL & migrations |
| `security` | — | ✅ Threat model |
| `developer` | — | ✅ Backend APIs |
| `qa` | — | ✅ Full test suite |
| `enhancer` | — | ✅ Code quality audit |

## Anti-Patterns (What NOT To Do)
- ❌ Building Express routes before the user has seen a UI
- ❌ Setting up SQLite schemas before visual approval
- ❌ Running QA on code the user hasn't visually approved
- ❌ Writing API documentation for endpoints serving rejected designs
