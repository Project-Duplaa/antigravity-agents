---
name: design-skill-index
description: Master index that tells agents exactly which design skills to read and in what order. Replaces the need to read all 10+ individual design skills. Read THIS file first, then follow its instructions.
---

# Design Skill Index (Read This First)

> **Problem:** There are 10+ design-related skills. No agent can read all of them.
> **Solution:** This index tells you exactly which to read based on your role.

---

## Priority Tiers

### Tier 0 — ABSOLUTE (Read before ANYTHING else)
These define the quality bar. They are non-negotiable.

0. **`.preferences.md`** → User preferences override everything.
   Path: `.preferences.md` (workspace root)

1. **`.golden-samples/`** → User-approved HTML mockups with annotated patterns.
   Path: `.golden-samples/README.md` + at least one sample file.
   **Study the HTML structure, class density, and compositional decisions.**

2. **`visual-contract-template`** → If a Visual Contract exists for your project, read it as a literal spec.
   Path: `.agents/skills/visual-contract-template/SKILL.md`

### Tier 1 — MANDATORY (Read before writing ANY frontend code)
These three skills contain everything you need. Read them in this order:

1. **`component-patterns`** → Copy-paste HTML/Tailwind blueprints for common components.
   Path: `.agents/skills/component-patterns/SKILL.md`
   
2. **`data-visualization`** → SVG sparklines, donut charts, bar charts, Canvas area charts.
   Path: `.agents/skills/data-visualization/SKILL.md`

3. **`visual-craft-recipes`** → CSS token dictionaries and domain-specific styling recipes.
   Path: `.agents/skills/visual-craft-recipes/SKILL.md`

### Tier 2 — REFERENCE (Read only if you need deeper guidance)
These provide philosophy and anti-patterns. Skim them if your output feels generic:

4. **`ultra-premium-web-experience`** → Design philosophy, spatial composition, the "billion-dollar glass card" template.
   Path: `.agents/skills/ultra-premium-web-experience/SKILL.md`

5. **`anti-generic-premium-web-design`** → Anti-slop patterns, asymmetric compositions, typography intentionality.
   Path: `.agents/skills/anti-generic-premium-web-design/SKILL.md`

6. **`design-taste-frontend`** / **`taste-skill`** → Anti-slop frontend intelligence for landing pages and portfolios. Brief inference, 3 dials (Variance, Motion, Density), pre-flight checks.
   Path: `.agents/skills/design-taste-frontend/SKILL.md`

7. **`image-to-code`** → Elite image-first website design. Takes screenshots or generated mockups, deeply analyzes composition, and produces faithful, high-craft frontend code.
   Path: `.agents/skills/image-to-code/SKILL.md`

8. **`web-design-guidelines`** → Vercel Web Interface Guidelines compliance, UX audit, accessibility review.
   Path: `.agents/skills/web-design-guidelines/SKILL.md`

### Tier 3 — SPECIALIZED (Read only when the project matches)
These are domain-specific and only relevant for certain archetypes:

9. **`awesome-design`** → Master taxonomy and tokens for 67 modular design archetypes (bento, glassmorphism, premium, minimal, neobrutalism, editorial, enterprise, skeumorphism, sleek, modern, etc.).
   Path: `.agents/skills/awesome-design/SKILL.md`
10. **`scroll-world`** → Immersive camera flight through diorama / 3D worlds driven by continuous scroll (Higgsfield / video scrub engine).
    Path: `.agents/skills/scroll-world/SKILL.md`
11. **`chameleon-motion-design`** → 7 visual archetypes, thematic loaders, motion choreography dials.
12. **`antigravity-design-expert`** → Glassmorphism, spatial/weightless UI, 3D CSS.
13. **`modern-animated-ui-components`** → shadcn/ui + MCP, Magic UI, Aceternity UI, Motion & GSAP blueprints.
14. **`viral-3d-experience`** → Dual-Engine (Apple Canvas scrubbing + Three.js WebGL Orbit PBR), Lumafield CT slice, fluid particle physics, and procedural Web Audio API haptics (for 3D flagships or when user requests).
15. **`senior-ui-rescue-anti-ai`** → Fixing existing UIs that look like AI slop.
16. **`find-skills`** → Meta-skill for discovering and installing open agent skills from skills.sh via `npx skills find`.
    Path: `.agents/skills/find-skills/SKILL.md`

---

## Quick Decision Tree

```
Are you building frontend code?
├── YES → Read Tier 0 FIRST (preferences + golden samples + visual contract)
│   ├── Then read Tier 1 (all 3 pattern/recipe skills)
│   ├── Does it still look generic? → Read Tier 2
│   └── Is it a specific archetype? → Read the matching Tier 3 skill
└── NO (writing specs/docs) → Read only .preferences.md + ultra-premium-web-experience for vocabulary
```

## The One Rule
**Always read `.preferences.md` + `.golden-samples/` BEFORE any other skill.** User preferences and approved samples override everything.
