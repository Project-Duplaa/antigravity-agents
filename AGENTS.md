# Engineering OS — Agent System (v2)

This file points to the GEMINI.md orchestration protocol. All rules and agent definitions are maintained there.

See [GEMINI.md](./GEMINI.md) for the complete Multi-Agent Orchestration Protocol v2.

## What Changed in v2
- **New Agent:** `frontend` — Dedicated Principal Frontend Engineer that produces visual artifacts (HTML/CSS mockups), not documents.
- **Split Responsibility:** `developer` is now backend-only. Frontend work goes to `frontend`.
- **Adaptive Pipeline:** Three orchestration modes (Mockup-First, Backend-First, Full Parallel) replace the rigid 11-phase pipeline.
- **QA Feedback Loop:** Automatic re-invocation cycle when QA exercises veto (max 3 iterations).
- **New Skills:** `mockup-first-workflow`, `component-patterns`, `data-visualization`.
- **Roster:** 12 agents (was 11).
