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

### Tier 3 — SPECIALIZED (Read only when the project matches)
These are domain-specific and only relevant for certain archetypes:

6. **`chameleon-motion-design`** → 7 visual archetypes, thematic loaders, motion choreography dials.
7. **`antigravity-design-expert`** → Glassmorphism, spatial/weightless UI, 3D CSS.
8. **`senior-ui-rescue-anti-ai`** → Fixing existing UIs that look like AI slop.
9. **`taste-skill`** → Landing pages, portfolios, redesigns.

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
