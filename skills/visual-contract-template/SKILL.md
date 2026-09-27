---
name: visual-contract-template
description: Replaces prose-heavy Creative Briefs with atomic Visual Contracts. The creative agent MUST output this structured format instead of paragraphs. The frontend agent reads these atomic specs and implements them literally.
---

# Visual Contract Template

> **Problem:** The `creative` agent writes paragraphs like *"The archetype is Dark Horological 
> Minimalist with mineral undertones and a sense of temporal gravitas..."* — the `frontend` agent
> then interprets this freely and produces generic output.
>
> **Solution:** The `creative` agent outputs a **Visual Contract** — a structured document with
> atomic, implementable decisions. No prose. No vibes. Just specs.

---

## Instructions for the `creative` Agent

When producing the Creative Brief, you MUST use the Visual Contract format below.
Replace every `[FILL]` with a concrete decision. Do NOT write paragraphs.

If a section doesn't apply to the project, write `N/A` — do NOT remove the section.

---

## Visual Contract Format

```markdown
# Visual Contract — [Project Name]

## 1. ARCHETYPE
- Primary: [Pick ONE from visual-craft-recipes Section 1]
- Secondary influence: [Pick ONE or N/A]
- Token dictionary: [Reference the exact section, e.g. "visual-craft-recipes 2.G"]

## 2. GOLDEN SAMPLE REFERENCE
- Closest match: [Pick from .golden-samples/ or write "None — new territory"]
- What to borrow: [Specific patterns, e.g. "Oversized numbered list", "Hero metric display"]
- What to diverge: [What should be different from the sample]

## 3. TYPOGRAPHY CONTRACTS

### Display / Headlines
- Font: [e.g. Playfair Display]
- Weight: [e.g. 400]
- Size range: [e.g. text-4xl to text-5xl]
- Tracking: [e.g. tracking-tight]
- Color: [e.g. text-white]

### Body / UI
- Font: [e.g. DM Sans]
- Size: [e.g. text-sm / text-base]
- Color: [e.g. text-graphite for labels, text-white for values]

### Data / Telemetry
- Font: [e.g. IBM Plex Mono]
- Size: [e.g. text-[10px] to text-xs]
- Tracking: [e.g. tracking-widest uppercase]
- Color: [e.g. text-graphite for labels, text-white for values]

### Hero Number (if applicable)
- Font: [e.g. Playfair Display]
- Size: [e.g. text-[80px]]
- Unit treatment: [e.g. "% in text-4xl text-graphite inline"]
- Label below: [e.g. "UTILIZATION in text-[10px] font-mono uppercase tracking-[0.2em]"]

## 4. COLOR CONTRACTS

### Background System
- Base canvas: [hex]
- Card/surface: [hex + opacity, e.g. rgba(10, 15, 22, 0.90)]
- Border: [e.g. border-white/[0.04]]
- Background texture: [e.g. "Mountain silhouette photo, opacity 0.15, mask gradient to bottom"]

### Accent Mapping
| Domain/Category | Color | Hex | Usage |
|----------------|-------|-----|-------|
| [e.g. Engineering / Deep Work] | [e.g. Amber] | [e.g. #F59E0B] | [e.g. borders, tag pills, progress segments] |
| [e.g. Strategy / Tactical] | [e.g. Cobalt Blue] | [e.g. #3B82F6] | [e.g. same] |
| [e.g. Legal / Buffer] | [e.g. Emerald] | [e.g. #10B981] | [e.g. same] |

### Status Colors
| Status | Color | Treatment |
|--------|-------|-----------|
| Active / In Progress | [e.g. Amber dot + uppercase label] | |
| Queued / Up Next | [e.g. Blue dot + uppercase label] | |
| Completed | [e.g. Emerald, opacity-60 on row] | |
| Danger / Overload | [e.g. Red-400] | |

## 5. COMPONENT CONTRACTS

### Section Header Pattern
- Eyebrow: [e.g. "Colored bar (w-1.5 h-4) + mono uppercase text-[10px] tracking-[0.25em]"]
- Title: [e.g. "text-5xl font-serif text-white"]
- Subtitle: [e.g. "text-[10px] font-mono uppercase text-graphite"]
- Counterpoint: [e.g. "Italic serif motto right-aligned, text-graphite/60"]

### Primary List Item Pattern
- Structure: [e.g. "Left: 3px colored border + large mono index (01, 02, 03)"]
- Center: [e.g. "title text-base font-medium + tag pill + priority badge"]
- Right: [e.g. "duration in mono + status dot + label + arrow icon"]
- Interaction: [e.g. "group-hover changes number and title to accent color"]

### Metric Card Pattern
- Number: [describe exact rendering]
- Label: [describe exact rendering]
- Comparison data: [e.g. "TARGET vs OVERLOAD on the right side"]
- Progress bar: [e.g. "Segmented rounded-full bar with gap-1 between segments"]

### Timeline/Horizon Pattern (if applicable)
- Layout: [e.g. "Left legend column + right scrollable timeline"]
- Time markers: [e.g. "text-[10px] font-mono text-graphite, 14 spans from 07:00 to 20:00"]
- NOW indicator: [e.g. "Vertical amber line with hollow circle ornament and 'NOW' label above"]
- Block stagger: [e.g. "Even blocks at top:0, odd blocks at top:32px"]
- Block anatomy: [e.g. "Colored bg/10, colored border, icon + title + time range"]

### Sidebar Pattern
- Active item: [e.g. "Filled icon in amber square (bg-amber-500 w-4 h-4) + white text"]
- Inactive item: [e.g. "Duotone icon + graphite text, hover transitions to white"]
- Numbering: [e.g. "font-mono text-[11px] before label: 01, 02, 03, 04"]
- Footer: [e.g. "Status beacon — emerald pulse dot + 'LIVE ENGINE / ONLINE'"]

## 6. LAYOUT CONTRACTS

### Grid Structure
- Main: [e.g. "grid-cols-12, primary content 8 cols, telemetry panel 4 cols"]
- Gap: [e.g. "gap-12"]
- Primary panel: [e.g. "Open (no card wrapper), breathes into background"]
- Secondary panel: [e.g. "Card with rounded-xl, bg-[#0a0f16]/90, backdrop-blur-sm"]

### Section Dividers
- Between sections: [e.g. "border-t border-white/[0.05] + pt-12 mt-12"]

## 7. MOTION CONTRACTS
- Page transitions: [e.g. "fadeIn 0.4s cubic-bezier(0.16, 1, 0.3, 1)"]
- Hover on interactive rows: [e.g. "translateY(-1px) + border-color lighten"]
- Button press: [e.g. "scale(0.98) translateY(1px)"]
- Progress bar: [e.g. "transition-all duration-700"]

## 8. ANTI-PATTERN CHECKLIST
Before submitting, verify:
- [ ] No 3 identical cards in a row
- [ ] No rounded-2xl or rounded-3xl on any container
- [ ] No floating translucent pill navbar
- [ ] No images inside cards
- [ ] No Lucide / Heroicons / emoji icons
- [ ] No JetBrains Mono or Plus Jakarta Sans
- [ ] No generic SaaS copy ("revolutionize", "leverage", "empower")
- [ ] All data uses real PRD mock data, not "Lorem ipsum" or "Task 1"
```

---

## Instructions for the `frontend` Agent

When you receive a Visual Contract:
1. Read every section as a **literal spec**, not a suggestion.
2. If a pattern references a golden sample, **open that file and study it**.
3. Implement the Typography, Color, Component, and Layout contracts exactly.
4. If something is ambiguous, default to the golden sample's approach.
5. Do NOT invent new patterns that aren't in the contract.
