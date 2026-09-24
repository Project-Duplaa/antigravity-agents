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
| **1. Artisanal Heritage / Editorial Craft** | *Aesop, Kinfolk, Murdock London, Fellow Barber, Toast* | Warm charcoals (`#121316`), raw linen/parchment (`#f5f2eb`), brushed brass (`#c5a059`), vintage leather. | Editorial Serif headers (*Playfair, Instrument Serif, Cormorant*) + Inter / Mono. | Deliberate, tactile, physical paper textures, troqueles, slow fade-in, whisper-quiet micro-interactions. |
| **2. High-Density Technical / Mission Control** | *Linear, Vercel, Stripe Dashboard, Supabase, Bloomberg* | Deep matrix indigo/black (`#08090d`), slate borders, phosphor accents (cyan `#00f0ff`, emerald `#00e599`, amber). | Display Grotesk (*Space Grotesk, Cabinet*) + Strict Monospace (*JetBrains Mono*) for telemetry. | Lightning-fast keyboard-first navigation, instant state feedback, crisp 1px borders, data crosshairs on hover. |
| **3. Swiss Modernist / International Typographic** | *Braun, Teenage Engineering, Grid System, Vitra* | Stark optic white (`#ffffff`), pitch black (`#000000`), functional safety accents (blaze orange `#ff5500`, cobalt). | Bold Grotesk (*Helvetica Now, Neue Haas, Inter Tight*) in mathematical scale. | Rigid mathematical grids, 0px border-radius, high-contrast dividers, clean geometric transitions. |
| **4. Playful & Tactile Indie Craft** | *Notion, Arc Browser, Pitch, Figma, Raycast* | Soft curated pastels (clay, lilac, sage), warm charcoal typography, tactile borders. | Friendly Geometric (*Plus Jakarta Sans, Satoshi, General Sans*). | Bouncy spring physics (`cubic-bezier(0.34, 1.56, 0.64, 1)`), rubber-band button presses, animated SVG micro-states. |
| **5. Biotech & Clinical Precision** | *Ro, Forward Health, Modern Health, Kry* | Immaculate stark backgrounds (`#fbfcfd`), frosted glass layers (`backdrop-blur-md`), icy cyan/teal accents. | Clean Humanist Sans (*Geist, Inter*) + tabular numerals. | Ultra-smooth sliding panels, clinical precision gauges, progressive disclosure accordions. |
| **6. Neo-Brutalist & Raw Digital** | *Gumroad, Retool, Figma Community, Poolsuite* | High-contrast saturated yellow/cyan/pink canvases, thick black borders (`2px border-black`), hard box-shadows. | Heavy Monospace or Expanded Grotesk (*Syne, Monument Extended*). | Snap transitions, zero blur, mechanical button depressions (`translate-x-[2px] translate-y-[2px]`). |
| **7. Spatial & Cinematic Luxury** | *Apple Pro, Leica, Bang & Olufsen, Polestar* | Weightless deep blacks (`#000000`), warm tungsten ambient glows, brushed titanium/silver borders. | Ultra-refined Sans with generous letter-spacing (*SF Pro Display, Neue Montreal*). | Slow cinematic parallax, floating cards with perspective tilt, smooth 60fps canvas animations. |

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
