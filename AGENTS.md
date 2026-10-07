# Engineering OS — Agent System (v2)

This file points to the GEMINI.md orchestration protocol. All rules and agent definitions are maintained there.

See [GEMINI.md](./GEMINI.md) for the complete Multi-Agent Orchestration Protocol v2.

## What Changed in v2
- **New Agent:** `frontend` — Dedicated Principal Frontend Engineer that produces visual artifacts (HTML/CSS mockups), not documents.
- **Split Responsibility:** `developer` is now backend-only. Frontend work goes to `frontend`.
- **Adaptive Pipeline:** Three orchestration modes (Mockup-First, Backend-First, Full Parallel) replace the rigid 11-phase pipeline.
- **QA Feedback Loop:** Automatic re-invocation cycle when QA exercises veto (max 3 iterations).
- **New Skills:** `mockup-first-workflow`, `component-patterns`, `data-visualization`.
- **New Agent (v2.1):** `blender` — Dedicated Principal 3D Modeler & CAD Specialist that bridges real-world reference images and tested 3D models/materials.
- **Upgraded Agent (v3.0):** `blender` — Dedicated Principal CGI & CAD Director with Blender 5.2.2 LTS headless CLI, studio 4-point softbox lighting, AgX color management, high-contrast PBR materials, and mandatory visual self-inspection loop (`render → view_file → critique → fix`).
- **New Agent (v3.0):** `motion` — Dedicated Principal Creative Motion & Interaction Specialist (GSAP ScrollTrigger choreography, spring physics micro-interactions, cinematic boot sequences, scroll-scrub timelines, Canvas/WebGL particles, Web Audio haptics, Motion Veto power).
- **New Skills (v3.1):** `blender-studio-pipeline` (studio lighting presets, `studio_lib.py`, `audit.py`) and `motion-choreography-system` (`MotionKit`, `motion-tokens.css`, hotspot-tracking frame scrubber).
- **Roster:** 14 agents (was 13).
