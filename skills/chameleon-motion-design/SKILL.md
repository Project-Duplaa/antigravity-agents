---
name: chameleon-motion-design
description: Master skill for Chameleon Art Direction (adapting seamlessly to 7 distinct visual archetypes without generic AI tropes), Real-World Internet Reference Benchmarking (Awwwards, Siteinspire, Mobbin, Godly), and Bespoke Motion Choreography & Thematic Loading Screens.
---

# CHAMELEON ART DIRECTION, REFERENCE BENCHMARKING & MOTION CHOREOGRAPHY

## 🎯 Mission
You are the definitive visual intelligence and motion engineering system. Your mission is twofold:
1. **Chameleon Versatility**: Equip agents to adopt **any visual archetype** required by the project's domain—from Swiss brutalism to warm heritage craft, high-density technical consoles, or playful indie tools—while remaining 100% divorced from generic AI website tropes.
2. **Kinetic & Atmospheric Depth**: Bring interfaces to life with **bespoke, thematic loading screens**, spring-physics micro-interactions, staggered entrances, and cinematic route transitions.

---

## 🎨 1. The Chameleon Art Direction Matrix (7 Core Archetypes)

Never force every website into the same dark slate / brass template. Read the project brief and choose the archetype that genuinely embodies the domain:

| Archetype | Real-World Benchmark References | Palette Philosophy | Typography Pairing | Interaction & Motion Feel |
| :--- | :--- | :--- | :--- | :--- |
| **1. Artisanal Heritage / Editorial Craft** | *Aesop, Kinfolk, Murdock London, Fellow Barber, Toast* | Warm charcoals (`#121316`), raw linen/parchment (`#f5f2eb`), brushed brass (`#c5a059`), vintage leather. | Editorial Serif headers (*Playfair Display, Instrument Serif, Cormorant*) + DM Sans / Space Mono. | Deliberate, tactile, physical paper textures, troqueles, slow fade-in, whisper-quiet micro-interactions. |
| **2. High-Density Technical / Mission Control** | *Linear, Vercel, Stripe Dashboard, Supabase, Bloomberg* | Deep matrix indigo/black (`#08090d`), slate borders, phosphor accents (cyan `#00f0ff`, emerald `#00e599`, amber). | Display Grotesk (*Space Grotesk, Cabinet*) + Strict Tabular Monospace (*Space Mono, Geist Mono*) for telemetry. | Lightning-fast keyboard-first navigation, instant state feedback, crisp 1px borders, data crosshairs on hover. |
| **3. Swiss Modernist / International Typographic** | *Braun, Teenage Engineering, Grid System, Vitra* | Stark optic white (`#ffffff`), pitch black (`#000000`), functional safety accents (blaze orange `#ff5500`, cobalt). | Bold Grotesk (*Helvetica Now, Neue Haas, Inter Tight*) in mathematical scale. | Rigid mathematical grids, 0px border-radius, high-contrast dividers, clean geometric transitions. |
| **4. Playful & Tactile Indie Craft** | *Notion, Arc Browser, Pitch, Figma, Raycast* | Soft curated pastels (clay, lilac, sage), warm charcoal typography, tactile borders. | Friendly Geometric (*Outfit, Satoshi, General Sans*). | Bouncy spring physics (`cubic-bezier(0.34, 1.56, 0.64, 1)`), rubber-band button presses, animated SVG micro-states. |
| **5. Biotech & Clinical Precision** | *Ro, Forward Health, Modern Health, Kry* | Immaculate stark backgrounds (`#fbfcfd`), frosted glass layers (`backdrop-blur-md`), icy cyan/teal accents. | Clean Humanist Sans (*Geist, DM Sans*) + tabular numerals. | Ultra-smooth sliding panels, clinical precision gauges, progressive disclosure accordions. |
| **6. Neo-Brutalist & Raw Digital** | *Gumroad, Retool, Figma Community, Poolsuite* | High-contrast saturated yellow/cyan/pink canvases, thick black borders (`2px border-black`), hard box-shadows. | Heavy Monospace or Expanded Grotesk (*Syne, Monument Extended*). | Snap transitions, zero blur, mechanical button depressions (`translate-x-[2px] translate-y-[2px]`). |
| **7. Spatial & Cinematic Luxury** | *Apple Pro, Leica, Bang & Olufsen, Polestar* | Weightless deep blacks (`#000000`), warm tungsten ambient glows, brushed titanium/silver borders. | Ultra-refined Sans with generous letter-spacing (*SF Pro Display, Neue Montreal, Cinzel*). | Slow cinematic parallax, floating cards with perspective tilt, smooth 60fps canvas animations. |

> [!WARNING]
> **STRICT BAN ON AI DEFAULT FONTS**:
> NEVER use `JetBrains Mono` or `Plus Jakarta Sans`. These are the automatic, stereotypical defaults of generic AI generators. Projects using them will fail review.

---

## 🔍 2. Real-World Internet Reference Benchmarking Protocol

Before creating wireframes or tokens, agents MUST conduct **Real-World Web Reconnaissance**:

1. **Query Curated Design Showcase Catalogs**:
   - *Awwwards / FWA*: For cinematic interactions, 3D WebGL, and custom loaders.
   - *Siteinspire / Land-book*: For unconventional editorial layouts, asymmetry, and typography.
   - *Mobbin*: For mobile ergonomic patterns, thumb-zone navigation, and drawer flows.
   - *Godly.website*: For top-tier modern web design trends that break away from corporate AI templates.
2. **Deconstruct Benchmark Leaders**:
   - Analyze: What is their exact hero structure? (Do they use a split asymmetrical canvas, an editorial portrait, or an interactive tool?).
   - Analyze: How do their hover states feel? (Subtle scale, color invert, border highlight, or crosshair snap?).
   - Analyze: How do they handle empty states and loading?

---

## 🎬 3. Thematic Loading Screens & Motion Choreography

A generic circular spinner is strictly forbidden. Every project must possess a **thematic loading experience** rooted in the domain's soul:

### Thematic Loader Recipes
- **Barbershop / Salon**: Monogram scissors opening/closing with steam progress bar and quotes of the craft.
- **AI / LLM Engineering**: Stream of tokens decoding character by character, attention weights pulsating, tensor dimension bar.
- **Logistics / Delivery**: Animated GPS nodes connecting across an isometric route map.
- **Fintech / Crypto**: Mechanical vault lock spinning and aligning pins, laser line scanning balances.
- **Hospitality / Coffee**: Espresso extraction droplets filling a cup with aroma steam animation.

### Rules of Motion & Kinetic Physics
1. **Spring Press Physics**: Buttons and interactive cards must feel physically depressible:
   ```css
   /* Tailwind class recipe */
   active:scale-[0.98] active:translate-y-[1px] transition-all duration-150 ease-out
   ```
2. **Staggered Domino Entrances**: When lists, grids, or data cards enter the viewport, stagger them:
   ```tsx
   // Delay formula: idx * 50ms (never animate all at once)
   style={{ animationDelay: `${idx * 60}ms` }}
   className="animate-fadeInUp"
   ```
3. **Brand-Calibrated Skeleton Shimmers**: Skeletons must reflect the brand palette (e.g. for charcoal/brass: shimmer from `#1a1b22` to `#252836` with a hint of warm gold, not standard Tailwind grey).
4. **Accessibility First (`prefers-reduced-motion`)**: Always honor reduced motion preferences by disabling continuous pulse, ping, or spinning animations.

---

## ⚡ 4. Kinetic Mastery: Lava Lamp Fluidity, Autonomous Life & Studio Interactions

A page that remains completely motionless until the user interacts with it feels dead, sterile, and artificial. Elite digital products incorporate subtle, living autonomous motion and responsive studio craftsmanship:

### 1. Lava Lamp & Fluid Organic Backgrounds
- Never use a flat static void or harsh glowing electric neon gradients.
- **The Lava Lamp Standard**: Use an HTML `<canvas>` or fluid morphing blobs (in warm mineral gold/amber or domain palette tones) that float, rise, sink, and deform like viscous molten wax.
- Physics: 5–6 organic blobs with gentle boundary damping and sinusoidal radius morphing, filtered with soft gaussian blur (45–60px) to produce a hypnotic, deep organic atmosphere.

### 2. Autonomous Component Kinetic Focal Points (No User Interaction Needed)
Curate **2 to 3 selective focal components per view** to possess continuous, delicate autonomous movement:
- **Specular Crystal Sheen**: A periodic, subtle specular light sweep passing across the hero product photography or watch glass every 8–12 seconds (`transform: translateX(-140%) to translateX(140%)`).
- **Living Mechanical Micro-Motion**: Real physical micro-movements (e.g. an authentic 4Hz oscillating balance wheel SVG, escapement cadence, breathing hairspring, or rotating turbine).
- **Concentric Precision Depth Rings**: Slow technical rotation of background alignment rings, radar coordinate circles, or calibration lines (30–45s per revolution).
- **Parallax Spatial Depth**: Background technical diagrams, gear trains, or coordinate watermarks responding with subtle scroll-linked parallax translations.

> [!CAUTION]
> **BAN ON FAKE STATUS BADGES & CRUDE TICKERS**:
> NEVER add crude badges like `• GENEVA 02:36:27 CET`, `• 4Hz Live`, or fake server uptime/ping pills. They look like cheap crypto bots or low-effort SaaS mockups. Indicators must be integrated *structurally and dynamically into components* (e.g. SVG circular progress rings, bilateral tolerance bars) instead of separate tacky text badges.

### 3. The 10 Studio Interaction Mechanics
1. **Top Scroll Progress Indicator**: Thin (2px) precision gradient line fixed at the very top of the viewport tracking scroll depth (`window.scrollY / totalScroll`).
2. **Navigation Mega-Previews**: Navigation links with animated underlines that scale in from the left on hover (`scale-x-0` to `scale-x-100`) and reveal a floating contextual preview card with thumbnail imagery, subtitle, and action link.
3. **Button Shimmer & Physical Elevation**: Primary buttons with passing specular light sweep on hover (`::after` gradient glint) paired with subtle lift (`translate-y-[-2px]`) and soft border illumination.
4. **Image Depth Zoom**: Product and hero imagery zooming smoothly (`scale-[1.04]` with `cubic-bezier(0.16, 1, 0.3, 1)`) with deepening soft shadows upon hover.
5. **Interactive Contextual Tooltips**: Technical metrics and specifications featuring rich educational tooltips on hover explaining domain principles.
6. **Circular Arrow Action Triggers**: Product and catalogue cards featuring refined circular arrow buttons `(→)` that scale and highlight on hover.
7. **Staggered Domino Entrances**: When lists, grids, or data cards enter the viewport, stagger them by 40–60ms with human easing (`cubic-bezier(0.16, 1, 0.3, 1)`).
8. **Parallax Motion**: Background layers translating slightly with scroll velocity to establish tangible spatial depth.

### 4. The Rule of Selective Restraint
> [!IMPORTANT]
> **DO NOT ANIMATE EVERYTHING**.
> Maximum **2–3 focal points per screen** may feature continuous autonomous animation. If every card, icon, and text block moves, the interface turns into an overstimulating, childish carnival. The motion must be quiet, deliberate, and mathematically grounded.


