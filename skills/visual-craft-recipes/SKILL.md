---
name: visual-craft-recipes
description: Concrete CSS token dictionaries, HTML component blueprints, and visual craft recipes organized by domain archetype. Provides the POSITIVE design vocabulary that agents must reach for instead of generic AI defaults. This is the recipe book — not the prohibition list.
---

# VISUAL CRAFT RECIPES — Concrete Design Patterns for Premium Interfaces

> This skill is the **positive complement** to taste-skill and anti-generic-premium-web-design.
> Those skills say "don't do X." This skill says "DO this instead — here is the exact code."
> Every agent (designer, developer, creative, enhancer) MUST read this before producing UI.

---

## 0. HOW TO USE THIS SKILL

1. **Read the project brief** (from product agent or user).
2. **Pick ONE archetype** from Section 1 that fits the domain.
3. **Copy the token dictionary** from Section 2 for that archetype into your CSS `:root`.
4. **Build components** using the blueprints in Section 3 — adapt, don't copy blindly.
5. **Apply the depth recipes** from Section 4 to escape flat-card syndrome.
6. **Choreograph motion** using the kinetic patterns from Section 5.
7. **Run the Pre-Ship Visual Audit** in Section 6 before declaring done.

---

## 1. DOMAIN-TO-ARCHETYPE MAP (Pick ONE Per Project)

| Domain | Archetype | Key Visual DNA |
|--------|-----------|----------------|
| Beauty, Salon, Spa, Wellness | **Warm Artisan** | Serif headlines, warm canvas, beveled geometry, sand/blush/sage palette |
| SaaS, Dev Tools, Analytics | **Precision Instrument** | Monospace telemetry, deep slate, 1px borders, keyboard-first |
| Health, Clinic, Medical | **Clinical Trust** | Stark white, icy blue accent, humanist sans, frosted panels |
| Restaurant, Café, Hospitality | **Culinary Warmth** | Rich earth tones, editorial photography, textured surfaces |
| Finance, Banking, Legal | **Institutional Authority** | Navy/charcoal, gold accents, tight grids, conservative serif |
| Creative Agency, Portfolio | **Editorial Canvas** | Asymmetric layouts, oversized type, high contrast, kinetic scroll |
| E-commerce, Retail, Fashion | **Product Theater** | Product-first imagery, minimal chrome, focus on merchandise |
| Education, Nonprofit | **Accessible Clarity** | High contrast, generous spacing, clear hierarchy, no gimmicks |
| Real Estate, Architecture | **Spatial Luxury** | Full-bleed photography, overlay typography, cinematic transitions |
| Kids, Gaming, Entertainment | **Playful Bounce** | Saturated palette, rounded shapes, spring physics, big icons |

---

## 2. TOKEN DICTIONARIES (Copy Into `:root`)

### 2.A — Warm Artisan (Beauty / Salon / Spa)
```css
:root {
  /* Palette */
  --ink:         #111009;
  --ink-soft:    #4a4540;
  --ink-muted:   #7a746c;
  --canvas:      #f8f5f0;
  --surface:     rgba(255,255,255,0.75);
  --surface-s:   rgba(255,255,255,0.55);
  --sand:        #c49a6c;
  --sand-lt:     #f0e6d8;
  --blush:       #d4a898;
  --sage:        #8da88a;
  --line:        rgba(17,16,9,0.1);
  --line-strong: rgba(17,16,9,0.2);

  /* Status */
  --s-pending:   #b45309;
  --s-confirmed: #1d4ed8;
  --s-active:    #6b21a8;
  --s-done:      #047857;
  --s-cancelled: #b91c1c;

  /* Typography */
  --serif: 'Cinzel', Georgia, serif;
  --sans:  'Space Grotesk', system-ui, sans-serif;

  /* Geometry — Beveled corners, not rounded */
  --bevel:   polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px));
  --bevel-l: polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px));

  /* Motion */
  --ease-out: cubic-bezier(0.16, 1, 0.3, 1);
  --dur: 0.38s;
}
```

### 2.B — Precision Instrument (SaaS / Dev Tools)
```css
:root {
  --ink:         #e2e8f0;
  --ink-soft:    #94a3b8;
  --ink-muted:   #64748b;
  --canvas:      #0f172a;
  --surface:     rgba(30,41,59,0.85);
  --surface-s:   rgba(30,41,59,0.6);
  --accent:      #3b82f6;
  --accent-muted:#1e40af;
  --success:     #22c55e;
  --warning:     #f59e0b;
  --danger:      #ef4444;
  --line:        rgba(148,163,184,0.12);
  --line-strong: rgba(148,163,184,0.25);

  --sans:  'Inter', system-ui, sans-serif;
  --mono:  'JetBrains Mono', 'Fira Code', monospace;
  --display: 'Space Grotesk', var(--sans);

  --radius: 4px;
  --radius-md: 6px;

  --ease-out: cubic-bezier(0.16, 1, 0.3, 1);
  --dur: 0.2s;
}
```

### 2.C — Clinical Trust (Health / Medical)
```css
:root {
  --ink:         #1e293b;
  --ink-soft:    #475569;
  --ink-muted:   #94a3b8;
  --canvas:      #fbfcfd;
  --surface:     rgba(255,255,255,0.85);
  --surface-s:   rgba(241,245,249,0.7);
  --accent:      #0891b2;
  --accent-muted:#155e75;
  --success:     #059669;
  --warning:     #d97706;
  --danger:      #dc2626;
  --line:        rgba(30,41,59,0.08);
  --line-strong: rgba(30,41,59,0.15);

  --sans:  'Geist', 'Inter', system-ui, sans-serif;
  --mono:  'Geist Mono', monospace;

  --radius: 8px;
  --radius-sm: 4px;

  --ease-out: cubic-bezier(0.16, 1, 0.3, 1);
  --dur: 0.3s;
}
```

### 2.D — Culinary Warmth (Restaurant / Hospitality)
```css
:root {
  --ink:         #1c1917;
  --ink-soft:    #44403c;
  --ink-muted:   #78716c;
  --canvas:      #faf9f6;
  --surface:     rgba(255,255,255,0.8);
  --surface-s:   rgba(250,249,246,0.6);
  --terracotta:  #c2410c;
  --olive:       #4d7c0f;
  --cream:       #fef3c7;
  --espresso:    #292524;
  --line:        rgba(28,25,23,0.1);
  --line-strong: rgba(28,25,23,0.2);

  --serif: 'DM Serif Display', Georgia, serif;
  --sans:  'DM Sans', system-ui, sans-serif;

  --radius: 2px;

  --ease-out: cubic-bezier(0.16, 1, 0.3, 1);
  --dur: 0.35s;
}
```

### 2.E — Institutional Authority (Finance / Legal)
```css
:root {
  --ink:         #0f172a;
  --ink-soft:    #334155;
  --ink-muted:   #64748b;
  --canvas:      #ffffff;
  --surface:     rgba(248,250,252,0.95);
  --surface-s:   rgba(241,245,249,0.8);
  --navy:        #1e3a5f;
  --gold:        #b8860b;
  --success:     #166534;
  --danger:      #991b1b;
  --line:        rgba(15,23,42,0.08);
  --line-strong: rgba(15,23,42,0.18);

  --serif: 'Playfair Display', Georgia, serif;
  --sans:  'Inter', system-ui, sans-serif;
  --mono:  'IBM Plex Mono', monospace;

  --radius: 2px;

  --ease-out: cubic-bezier(0.33, 1, 0.68, 1);
  --dur: 0.25s;
}
```

---

## 3. COMPONENT BLUEPRINTS

### 3.A — Atmospheric Background System (Anti-Static Mandate)
Every project needs ambient life. NOT neon particles. Soft, barely-visible, slow-moving light orbs.

```css
.ambient-bg {
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 0;
  overflow: hidden;
}

.orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(90px);
  will-change: transform, opacity;
}

/* Adapt colors to your archetype palette */
.orb-1 {
  width: 520px; height: 520px;
  background: radial-gradient(circle, rgba(var(--orb-color-1),0.22) 0%, transparent 70%);
  top: -120px; left: -100px;
  animation: orbFloat1 22s ease-in-out infinite alternate;
}

.orb-2 {
  width: 400px; height: 400px;
  background: radial-gradient(circle, rgba(var(--orb-color-2),0.18) 0%, transparent 70%);
  top: 10%; right: -80px;
  animation: orbFloat2 28s ease-in-out infinite alternate;
}

@keyframes orbFloat1 {
  0%   { transform: translate(0, 0) scale(1); opacity: 0.6; }
  100% { transform: translate(80px, 60px) scale(1.15); opacity: 0.85; }
}

@keyframes orbFloat2 {
  0%   { transform: translate(0, 0) scale(1); opacity: 0.5; }
  100% { transform: translate(-60px, 50px) scale(1.1); opacity: 0.75; }
}
```

```html
<!-- Place immediately after <body> -->
<div class="ambient-bg" aria-hidden="true">
  <div class="orb orb-1"></div>
  <div class="orb orb-2"></div>
  <div class="orb orb-3"></div>
</div>
```

### 3.B — Depth Card System (Anti-Flat-Card)
Cards MUST have inner light edges, subtle shadows, and surface variation. Never `bg-zinc-900 border border-zinc-800`.

```css
/* LIGHT THEME depth card */
.depth-card {
  background: var(--surface);
  backdrop-filter: blur(16px) saturate(1.4);
  -webkit-backdrop-filter: blur(16px) saturate(1.4);
  border: 1px solid var(--line);
  box-shadow:
    inset 0 1px 0 rgba(255,255,255,0.6),     /* inner highlight */
    0 1px 3px rgba(0,0,0,0.04),               /* tight shadow */
    0 8px 24px rgba(0,0,0,0.06);              /* ambient shadow */
  transition: transform var(--dur) var(--ease-out),
              box-shadow var(--dur) var(--ease-out);
}

.depth-card:hover {
  transform: translateY(-2px);
  box-shadow:
    inset 0 1px 0 rgba(255,255,255,0.6),
    0 4px 12px rgba(0,0,0,0.08),
    0 16px 48px rgba(0,0,0,0.1);
}

/* DARK THEME depth card */
.depth-card-dark {
  background: var(--surface);
  backdrop-filter: blur(16px) saturate(1.2);
  border: 1px solid var(--line);
  box-shadow:
    inset 0 1px 0 rgba(255,255,255,0.06),     /* subtle inner bevel */
    0 1px 3px rgba(0,0,0,0.3),
    0 8px 24px rgba(0,0,0,0.4);
}
```

### 3.C — Beveled Geometry System (Alternative to Border-Radius)
For domains where rounded corners feel generic (salon, luxury, editorial), use clip-path bevels.

```css
.bevel-card {
  clip-path: var(--bevel);
  background: var(--surface);
  padding: 2rem;
  position: relative;
}

/* Beveled button */
.btn-bevel {
  clip-path: var(--bevel);
  background: var(--sand);
  color: white;
  padding: 0.85rem 2.2rem;
  font-family: var(--sans);
  font-weight: 500;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  font-size: 0.78rem;
  border: none;
  transition: all var(--dur) var(--ease-out);
}

.btn-bevel:hover {
  background: var(--ink);
  transform: translateY(-1px);
}

.btn-bevel:active {
  transform: scale(0.98) translateY(1px);
}
```

### 3.D — Tactile Press Feedback (ALL Interactive Elements)
```css
/* Apply to ALL buttons, cards, interactive items */
.tactile {
  transition: transform 0.15s var(--ease-out),
              box-shadow 0.15s var(--ease-out);
}

.tactile:active {
  transform: scale(0.98) translateY(1px);
  box-shadow: none;
}

/* For nav items */
.nav-tactile:active {
  transform: scale(0.97);
}
```

### 3.E — Status Indicator System (Domain-Appropriate)
```css
/* Inline status pill — NOT neon glowing dots */
.status-pill {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0.2rem 0.65rem;
  border-radius: 2px;
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.status-pill::before {
  content: '';
  width: 6px;
  height: 6px;
  border-radius: 50%;
  flex-shrink: 0;
}

.status-pending  { background: #fef3c7; color: #92400e; }
.status-pending::before  { background: #f59e0b; }

.status-confirmed { background: #dbeafe; color: #1e40af; }
.status-confirmed::before { background: #3b82f6; }

.status-done     { background: #d1fae5; color: #065f46; }
.status-done::before     { background: #10b981; }

.status-cancelled { background: #fee2e2; color: #991b1b; }
.status-cancelled::before { background: #ef4444; }
```

### 3.F — Typography Hierarchy System
```css
/* Section eyebrow — use SPARINGLY (max 1 per 3 sections) */
.eyebrow {
  font-family: var(--sans);
  font-size: 0.65rem;
  font-weight: 600;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--ink-muted);
}

/* Section heading */
.section-heading {
  font-family: var(--serif, var(--sans));
  font-size: clamp(1.8rem, 4vw, 2.8rem);
  font-weight: 400;
  line-height: 1.15;
  color: var(--ink);
  letter-spacing: -0.01em;
}

/* Body text — max readable width */
.body-text {
  font-family: var(--sans);
  font-size: 0.95rem;
  line-height: 1.65;
  color: var(--ink-soft);
  max-width: 65ch;
}

/* Data label (for dashboards/forms) */
.data-label {
  font-family: var(--sans);
  font-size: 0.72rem;
  font-weight: 500;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: var(--ink-muted);
}

/* Data value */
.data-value {
  font-family: var(--sans);
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--ink);
  line-height: 1.2;
}
```

---

## 4. DEPTH RECIPES (Escape Flat-Card Syndrome)

### Recipe 1 — Inner Bevel Edge Light
```css
box-shadow: inset 0 1px 0 rgba(255,255,255,0.06);
```
Gives a subtle "physical edge" at the top of dark cards. Essential for dark themes.

### Recipe 2 — Layered Ambient Shadow (Light Theme)
```css
box-shadow:
  0 1px 2px rgba(0,0,0,0.04),
  0 4px 8px rgba(0,0,0,0.04),
  0 12px 32px rgba(0,0,0,0.06);
```
Three layers: tight contact shadow, mid-distance, ambient. Never use a single `shadow-lg`.

### Recipe 3 — Frosted Glass Surface
```css
background: rgba(255,255,255,0.75);
backdrop-filter: blur(16px) saturate(1.4);
-webkit-backdrop-filter: blur(16px) saturate(1.4);
border: 1px solid rgba(255,255,255,0.3);
```

### Recipe 4 — Status-Driven Aura (For Critical Items)
```css
.urgent-card {
  border-left: 3px solid var(--s-pending);
  background: linear-gradient(90deg, rgba(180,83,9,0.04) 0%, transparent 40%);
}
```
Not a glow. A subtle directional gradient that whispers importance.

### Recipe 5 — Distinct Hierarchical Card Weights
```css
/* Primary card (main action) */
.card-primary {
  background: var(--surface);
  border: 1px solid var(--line-strong);
  box-shadow: 0 8px 24px rgba(0,0,0,0.08);
}

/* Secondary card (supporting info) */
.card-secondary {
  background: var(--surface-s);
  border: 1px solid var(--line);
  box-shadow: 0 2px 8px rgba(0,0,0,0.04);
}

/* Tertiary card (background detail) */
.card-tertiary {
  background: transparent;
  border: 1px solid var(--line);
  box-shadow: none;
}
```

---

## 5. KINETIC PATTERNS (Motion That Means Something)

### 5.A — Staggered Entrance (For Lists / Cards)
```css
.stagger-item {
  opacity: 0;
  transform: translateY(20px);
  animation: staggerIn var(--dur) var(--ease-out) forwards;
}

/* Apply --stagger-index via inline style or JS */
.stagger-item { animation-delay: calc(var(--stagger-index, 0) * 60ms); }

@keyframes staggerIn {
  to { opacity: 1; transform: translateY(0); }
}
```

```html
<div class="stagger-item" style="--stagger-index: 0">Item 1</div>
<div class="stagger-item" style="--stagger-index: 1">Item 2</div>
<div class="stagger-item" style="--stagger-index: 2">Item 3</div>
```

### 5.B — Pulse Beacon (For Live Status Indicators)
```css
.beacon {
  position: relative;
}

.beacon::after {
  content: '';
  position: absolute;
  top: 50%; left: 50%;
  width: 100%; height: 100%;
  border-radius: 50%;
  background: currentColor;
  transform: translate(-50%, -50%);
  animation: beaconPulse 2.5s ease-out infinite;
  opacity: 0;
}

@keyframes beaconPulse {
  0%   { transform: translate(-50%, -50%) scale(1); opacity: 0.4; }
  100% { transform: translate(-50%, -50%) scale(2.5); opacity: 0; }
}
```

### 5.C — Counter Easing (For Animated Numbers)
```js
function animateCounter(element, target, duration = 1200) {
  const start = parseInt(element.textContent) || 0;
  const startTime = performance.now();

  function update(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    // Ease-out cubic
    const eased = 1 - Math.pow(1 - progress, 3);
    element.textContent = Math.round(start + (target - start) * eased);
    if (progress < 1) requestAnimationFrame(update);
  }

  requestAnimationFrame(update);
}
```

### 5.D — Smooth Page Transition (For Multi-Page Apps)
```css
.page-enter {
  opacity: 0;
  transform: translateY(12px);
  animation: pageIn 0.4s var(--ease-out) forwards;
}

@keyframes pageIn {
  to { opacity: 1; transform: translateY(0); }
}
```

### 5.E — Hover Elevation (For Clickable Items)
```css
.hover-lift {
  transition: transform var(--dur) var(--ease-out),
              box-shadow var(--dur) var(--ease-out);
}

.hover-lift:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 32px rgba(0,0,0,0.12);
}
```

---

## 6. PRE-SHIP VISUAL AUDIT (Mandatory Checklist)

Before ANY agent declares UI work complete, verify ALL of the following:

### Atmospheric Life
- [ ] Page has ambient background elements (orbs, gradients, or texture) — NOT static white/dark void
- [ ] At least ONE element has subtle perpetual motion (beacon, counter, float)
- [ ] Interactive elements have hover AND active states

### Surface Depth
- [ ] Cards have inner bevel highlight (`inset 0 1px 0 rgba(...)`)
- [ ] Shadows are multi-layered (2-3 layers), NOT single `shadow-lg`
- [ ] Card hierarchy exists — primary, secondary, tertiary weights are DIFFERENT

### Typography
- [ ] Heading font differs from body font (serif/sans pairing, OR display/body pairing)
- [ ] Font sizes follow a modular scale (not arbitrary px values)
- [ ] Body text has `max-width: 65ch` for readability
- [ ] Eyebrows appear at most 1 per 3 sections

### Color & Palette
- [ ] Single consistent palette from archetype token dictionary
- [ ] Status colors are domain-appropriate, not neon
- [ ] No AI-purple gradients unless explicitly requested
- [ ] Accent color appears in max 2-3 strategic locations, not everywhere

### Geometry & Shape
- [ ] Consistent corner radius strategy across all components
- [ ] Buttons have tactile press feedback (`:active` scale/translate)
- [ ] Shape language matches domain (bevels for artisan, sharp for institutional, soft for playful)

### Content Realism
- [ ] Real names, not "User 1" or "John Doe"
- [ ] Realistic metrics with operational context
- [ ] No buzzword soup in copy
- [ ] Navigation labels are direct nouns

### Responsive
- [ ] Mobile breakpoint explicitly handled
- [ ] Touch targets are minimum 44px
- [ ] Hero fits in initial viewport without scroll to find CTA

---

## 7. AGENT-SPECIFIC INSTRUCTIONS

### For `creative` Agent:
Read the domain → pick archetype from Section 1 → define the token dictionary → find 3-5 real-world web references (Awwwards, Siteinspire, Mobbin) → deliver as Creative Brief with actual hex values and font names.

### For `designer` Agent:
Read Creative Brief → adapt token dictionary from Section 2 → build component specifications using blueprints from Section 3 → specify depth recipes from Section 4 → define motion choreography from Section 5 → deliver Design Spec with exact CSS.

### For `developer` Agent:
Read Creative Brief + Design Spec → paste token dictionary into `:root` → implement components using blueprints → apply depth recipes → wire motion patterns → run Pre-Ship Audit from Section 6.

### For `enhancer` Agent:
Run the Pre-Ship Visual Audit (Section 6) checkbox-by-checkbox. Any unchecked item = FAIL. Provide specific code fixes for every failure. Do NOT approve with unchecked items.

---

## 8. ARCHETYPE EXAMPLES (Reference Projects)

### Beauty Era (Warm Artisan)
- **Tokens**: Sand `#c49a6c`, Blush `#d4a898`, Sage `#8da88a` on Canvas `#f8f5f0`
- **Geometry**: Beveled clip-path corners, NOT border-radius
- **Typography**: Cinzel serif for headings, Space Grotesk for body
- **Ambient**: Floating orbs with sand/blush/sage radial gradients
- **Motion**: 22s float cycles, staggered card entrances, counter easing
- **Status**: Warm pills (amber/blue/green/red), not neon dots

This project is the reference standard for the Warm Artisan archetype.

---

## 9. COMMON ANTI-PATTERNS AND THEIR FIXES

| Anti-Pattern | Fix |
|---|---|
| `bg-zinc-900 border border-zinc-800` everywhere | Use depth card system with inner bevel + multi-layer shadow |
| Static page, zero motion | Add ambient orbs + staggered entrances + counter easing |
| All cards same visual weight | Implement primary/secondary/tertiary card hierarchy |
| `rounded-2xl` on operational components | Use tight `rounded` (4px) or domain-specific bevels |
| Generic circular spinner | Domain-themed loader (scissors for salon, chart for finance) |
| `shadow-lg` single shadow | Multi-layer shadow recipe (tight + mid + ambient) |
| Neon cyan status dots | Muted, tinted status pills with contextual background |
| `font-mono` on everything | Reserve monospace strictly for IDs, codes, technical values |
| Centered marketing hero in operational app | Operational workspace with priority queue + metrics |
| Purple gradient blob hero | Domain-appropriate atmospheric background system |
