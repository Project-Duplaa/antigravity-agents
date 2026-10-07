# MOTION CHOREOGRAPHY PATTERNS & NARRATIVE ARCS

This document establishes the 6 production choreography patterns for high-craft web experiences.
Each pattern details section sequencing, motion mechanics, easing curves, timing, and what to **NEVER** animate.

---

## 🏛️ Pattern 1: Flagship Physical Hardware Showcase (Apple / Nothing / Leica)

**Core Archetype:** Product-as-Hero. Hardware volume is monumental, tactile, and physically grounded.

```
[Thematic Boot Sequence] → [Cinematic Hero Reveal] → [Scroll-Scrubbed Dissection] → [Macro Craft Bento] → [Tactile Specs & Checkout]
```

### 1. Thematic Boot Sequence (1.2s - 1.8s)
- **Visual:** Optical coordinate alignment or laser calibration path drawing (`stroke-dashoffset`).
- **Typography:** Staggered letter-spacing reveal (`tracking-[0.1em]` to `tracking-[0.35em]`), brand mark fade in.
- **Motion:** Blur dissolve curtain (`backdrop-blur: 20px → 0px`, `clip-path` iris opening).
- **Haptic:** Sub-bass resonant 45Hz thud + crystal chord completion.
- **Reduced Motion:** Instant fade (0.3s).

### 2. Cinematic Hero Reveal
- **Camera:** Subtle autonomous sinusoidal breathing orbit (`0.015 rad/s`).
- **Typography:** Split-text line masking (`overflow-hidden`, lines slide up from `y: 100%` to `y: 0%` with `cubic-bezier(0.16, 1, 0.3, 1)`).
- **CTA:** CNC machined button with subtle hover elevation (`y: -2px`) and active press scale `0.98`.

### 3. Scroll-Scrubbed Dissection (`MotionKit.imageSequence`)
- **Canvas:** Pinned scroll scrubber (300% to 400% scroll depth).
- **Tracking:** 4-6 dynamic hotspot badges anchored to `manifest.json` tracking coordinates that follow physical components.
- **Narrative Chapters:** Step indicators and technical annotations fade in and out according to frame ranges.
- **Forbidden:** No jumpy scrub lagging (`scrub: 0.6 - 0.8` recommended).

### 4. Macro Craft Bento Grid
- **Stagger:** Domino entry batching (50ms offset per card).
- **Perspective Tilt:** Mouse position generates subtle 3D perspective tilt (`rotateX`, `rotateY` max 4°).
- **Specular Sheen:** 8-second periodic light sweep across product images (`translateX(-150%) → translateX(150%)`).

### 5. What NOT to Animate
- ❌ Do not animate body text during scroll reading.
- ❌ Do not bounce or wobble cards.
- ❌ Do not animate navigation bars on every scroll pixel (use threshold hide/show).

---

## ⚡ Pattern 2: High-Density Technical & Mission Control (Linear / Vercel / Stripe)

**Core Archetype:** Tactical speed, keyboard-first velocity, surgical 1px precision.

```
[Instant State Load] → [Command Cockpit Hero] → [Interactive Live Telemetry] → [Modular Feature Ledger] → [Developer Terminal]
```

- **Timing Scale:** Ultra-fast (`80ms - 180ms`).
- **Easing:** Snappy deceleration `cubic-bezier(0.2, 0.8, 0.2, 1)`.
- **Micro-Interactions:** 
  - Crosshair data snapping on hover.
  - Number odometer counters on financial/load metrics (`data-count-to`).
  - 1px border glow tracking cursor position.
- **What NOT to Animate:** Never delay critical data grids with long loading animations.

---

## 💎 Pattern 3: Luxury Editorial & Bespoke Atelier (Bang & Olufsen / Cartier / Aesop)

**Core Archetype:** Deliberate, contemplative, generous whitespace, weightless typography.

```
[Quiet Monogram Intro] → [Full-Bleed Editorial Hero] → [Pinned Horizontal Journey] → [Artisanal Provenance Steps] → [Concierge Drawer]
```

- **Timing Scale:** Deliberate & slow (`700ms - 1200ms`).
- **Easing:** Quintic deceleration `cubic-bezier(0.19, 1, 0.22, 1)`.
- **Mechanics:**
  - Pinned horizontal gallery (`MotionKit.horizontalScroll`).
  - Subtle parallax on background architectural photography (`data-speed="0.15"`).
  - Off-canvas concierge drawer sliding in with spring-damped ease (`back.out(1.1)`).
- **What NOT to Animate:** No flashing lights, no neon accents, no bouncy buttons.

---

## 🛍️ Pattern 4: Curated Boutique E-Commerce & Peripherals

**Core Archetype:** Tactile product inspection, seamless cart feedback, crisp pricing updates.

```
[Atmospheric Ambient Canvas] → [Editorial Product Matrix] → [Interactive Variant Morph] → [Slide-Over Cart Drawer]
```

- **Mechanics:**
  - Smooth category filter transitions (`opacity: 0, scale: 0.96` exit → staggered entrance).
  - Variant finish switcher (smooth crossfade of textures).
  - Floating precision HUD dock responding to cart counter updates.
  - Haptic audio confirmation on cart additions.

---

## 🛠️ Pattern 5: Interactive 3D Configurator (The Spatial Sticky Atelier)

**Core Archetype:** Dual-column spatial viewport. The 3D model never scrolls away from user eyes.

- **Layout:** Left 58% viewport fixed/sticky; right 42% options panel scrolls freely.
- **Choreography:**
  - Clicking any hardware option triggers camera traveling focus with GSAP (`controls.target` and `camera.position`).
  - Emissive highlight pulse on the selected 3D mesh.
  - Exploded slider scrubbing synchronized with physical mesh offsets.
- **What NOT to Animate:** Never move the 3D canvas off-screen while the user is actively customizing.
