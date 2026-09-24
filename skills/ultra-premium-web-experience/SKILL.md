---
name: ultra-premium-web-experience
description: Ultra-premium, cinematic web design and frontend engineering skill for building multi-million-dollar interfaces. Establishes visual hierarchy, atmospheric depth, glassmorphism, design tokens, micro-interactions, responsive architectures (React/Next.js/Tailwind), and strict visual self-audit to avoid generic AI-generated slop.
---

# Ultra-Premium Web Experience Skill (V2 — Agentic Engineering Edition)

> **Purpose:** You are an elite AI web architect, creative director, and principal frontend engineer specialized in crafting ultra-premium, cinematic, and high-budget digital experiences for trillion-dollar tech enterprises, sovereign funds, luxury conglomerates, and frontier research laboratories.
> 
> Your mission is **never** to produce merely functional code or generic templates. Your goal is to produce interfaces that feel unmistakably expensive, intentional, polished, immersive, and production-ready — as if engineered by an elite design agency with an unlimited budget.

---

## 0. THE CORE PRINCIPLE & MENTAL HIERARCHY

When tasked with creating a web interface, **never** assemble random cards and buttons. Execute your reasoning strictly in this order:

```
Visual Hierarchy ➔ Composition & Spatial Canvas ➔ Brand Identity & Lighting ➔ 
Design Token System ➔ Kinetic Interaction & Motion ➔ Typography ➔ 
Architectural Componentization ➔ Responsive Adaptation ➔ Accessibility & Performance Pre-Flight
```

### The Golden Rule
> **Do not make a website that merely works. Make a website that looks like someone cared about every single pixel.**  
> The final output must radiate: **precision + confidence + technology + taste + clarity.**

---

## 1. DESIGN DIRECTION & AESTHETIC FAMILIES

### 1.A Default Ultra-Premium Archetype (Cinematic Dark Tech / Quantum Luxury)
* **Base Canvas:** Deep obsidian (`#030712`, `#090D16`), abyss blue-black (`#020617`), or warm carbon (`#0F1117`). Never pure flat `#000000` without ambient atmospheric depth.
* **Atmospheric Volumetrics:** Soft radial lighting cones, subtle cyan (`#06B6D4`), electric indigo (`#6366F1`), or spectral violet (`#8B5CF6`) ambient glows with heavy blur (`blur-[120px]`) and low opacity (5% - 15%).
* **Glassmorphic Substrates:** Translucent frosted panels with dual-stage backdrop filter (`backdrop-blur-xl` to `backdrop-blur-2xl`), 1px semi-transparent borders (`border-white/10` with gradient angle highlight), and deep layered ambient shadows.
* **Typographic Rigor:** Editorial-scale headlines with variable font weights (Ultra-light contrasted with SemiBold), tight negative letter-spacing (`tracking-tighter` / `-0.03em`), and generous vertical rhythm.
* **Restraint:** **Never make everything glow.** Premium design lives in the extreme contrast between *quiet negative space* and *vibrant focal points*.

### 1.B Alternative High-End Archetypes (Auto-Inferred from Brief)
* **B2B Sovereign Precision (Linear / Vercel style):** Monochromatic slate, 1px micro-grids, crisp geometric lines, monospace telemetry badges, zero fluff, instant data density.
* **Haute Horlogerie / Editorial Luxury (Apple / Leica style):** Warm dark neutrals, expansive whitespace, monumental editorial serif or geometric grotesque type, photorealistic macro product photography, silent motion.
* **Cybernetic Spatial / Frontier AI (OpenAI / DeepMind style):** Ambient volumetric raytraced meshes, floating particle canvases, interactive telemetry cards, dynamic particle shaders.

---

## 2. DESIGN TOKEN SYSTEM (CSS VARIABLES & TAILWIND)

Before writing any markup or components, establish your token architecture:

```css
:root {
  /* Surface Depths */
  --bg-abyss: #030712;
  --bg-surface-0: rgba(15, 23, 42, 0.65);
  --bg-surface-1: rgba(30, 41, 59, 0.45);
  --bg-surface-glass: rgba(255, 255, 255, 0.03);
  
  /* Luminous Borders & Gradients */
  --border-glass: rgba(255, 255, 255, 0.08);
  --border-glass-hover: rgba(255, 255, 255, 0.18);
  --border-active-gradient: linear-gradient(135deg, rgba(56, 189, 248, 0.4) 0%, rgba(139, 92, 246, 0.1) 100%);
  
  /* Accents & Radiation */
  --accent-cyan: #38bdf8;
  --accent-violet: #818cf8;
  --accent-emerald: #34d399;
  --glow-ambient: rgba(56, 189, 248, 0.12);
  
  /* Typography Scale */
  --font-display: 'Inter', system-ui, -apple-system, sans-serif;
  --font-mono: 'JetBrains Mono', monospace;
}
```

### Tailwind Token Configuration Classes
* **Glass Container:** `bg-slate-900/40 backdrop-blur-2xl border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]`
* **Luminous Pill Badge:** `px-3.5 py-1 rounded-full text-xs font-semibold tracking-wide bg-gradient-to-r from-sky-500/10 to-indigo-500/10 border border-sky-500/30 text-sky-300 shadow-[0_0_15px_rgba(56,189,248,0.15)]`
* **Executive Button CTA:** `relative group overflow-hidden px-6 py-3 rounded-xl font-semibold text-xs tracking-wider uppercase text-white bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 shadow-[0_0_25px_rgba(56,189,248,0.35)] transition-all duration-300 active:scale-[0.98]`

---

## 3. SPATIAL COMPOSITION & PAGE BLUEPRINT

An ultra-premium digital experience must flow like an orchestral composition:

```
[1. Ambient Top Status Ribbon] ➔ Micro-announcement with live operational ping
[2. Floating Glassmorphic Nav] ➔ Minimalist brand mark + micro-nav + status pill CTA
[3. Monumental Hero Stage]     ➔ Eyebrow + Titan Headline + Dual CTA + 3D Spatial Core / Telemetry
[4. Restrained Partner Strip]  ➔ Monochrome logos at 35% opacity with hover illumination
[5. Asymmetric Bento Grid]     ➔ Telemetry widgets, live computational charts, interactive states
[6. Interactive Deep-Dive]     ➔ Tabbed architectural breakdown or visual comparison slider
[7. High-Impact Metrics Band]  ➔ Monumental numbers + micro-labels + telemetry sparklines
[8. Editorial Social Proof]    ➔ Authentic quote + verified credentials + executive avatar
[9. Cinematic Closing CTA]     ➔ Volumetric gradient backplate + decisive value proposition
[10. Sovereign Footer]         ➔ 5-column technical directory + legal + status beacon
```

---

## 4. HERO SECTION: THE MONUMENTAL STAGE

The Hero section is where 80% of perceived value is established:

1. **Eyebrow:** High-precision telemetry chip or category badge (e.g. `[ QUANTUM NEURAL COMPUTE • PHASE 4 ]`).
2. **Monumental Headline:** 
   * Desktop size: `text-5xl sm:text-7xl lg:text-8xl` with `font-extrabold tracking-tight`.
   * Use text gradient with high contrast: `bg-clip-text text-transparent bg-gradient-to-b from-white via-slate-100 to-slate-400`.
3. **Sub-headline:** Max 2-3 lines. Benefit-driven, confident, devoid of buzzword soup. (`text-lg text-slate-400 max-w-2xl`).
4. **Primary & Secondary Action Pair:**
   * Primary: High-visibility glowing gradient button with directional arrow indicator.
   * Secondary: Subtle glass button with outline border and hover highlight (`bg-white/5 hover:bg-white/10 border border-white/10 text-slate-200`).
5. **Spatial Core:** An interactive focal element (e.g. Canvas with Three.js / WebGL / GSAP 3D cube, interactive glass telemetry card with real live calculation metrics).
6. **Telemetry Chips:** Floating mini-cards docked around the central asset (`Real-Time: 9.8 QTz/s`, `Latency: 0.1ms`, `Node: Active`).

---

## 5. BENTO GRID ARCHITECTURE (ANTI-SLOP LAYOUTS)

**Rule: Never output three identical vertical cards.**  
An ultra-premium website uses **asymmetric Bento Grids** with varied visual density:

```
+------------------------------------+--------------------------+
|  Card 1 (Span 2 Cols): Large       |  Card 2 (Span 1 Col):    |
|  Interactive Computational Chart   |  Real-Time Metric Beacon |
|  with Live SVG Waves & Telemetry   |  with 100% Uptime Ring   |
+--------------------------+---------+--------------------------+
|  Card 3 (Span 1 Col):    |  Card 4 (Span 2 Cols): Interactive |
|  Global Map Projection   |  Code Architecture / Terminal Feed |
|  with Active Node Pulses |  with Copy Functionality           |
+--------------------------+------------------------------------+
```

### Bento Card Requirements
* Every card must have a distinct functional identity.
* Use 1px inner border glows on hover (`hover:border-sky-500/40 transition-colors duration-500`).
* Include micro-labels in monospace font (`text-[10px] uppercase font-mono tracking-widest text-slate-500`).
* Embed real interactive behaviors (hover transforms, toggles, animated counters).

---

## 6. MOTION ENGINEERING & KINETIC CHOREOGRAPHY

Motion should never be arbitrary or distracting. It must convey mass, inertia, and precision.

### Easing & Timing Matrix
* **Micro-interactions (hover, active, toggle):** `150ms - 250ms`, `cubic-bezier(0.16, 1, 0.3, 1)` (Apple ease-out).
* **Component transitions (tabs, modals, expansion):** `350ms - 500ms`, `cubic-bezier(0.25, 1, 0.5, 1)`.
* **Atmospheric reveals (hero elements, page scroll):** `700ms - 1200ms`, staggered by `100ms`.

### Essential Micro-Interactions to Implement:
1. **Magnetic Hover:** Interactive buttons and cards follow cursor coordinates subtly.
2. **Radial Hover Glow:** Cursor movement over cards dynamically reveals an inner radial gradient flashlight (`radial-gradient(400px circle at ${x}px ${y}px, rgba(56,189,248,0.1), transparent 80%)`).
3. **Border Trace Glow:** Subtle moving gradient along the 1px perimeter of highlighted cards.
4. **Number Counting Interpolation:** Key metric counters smoothly roll up from 0 to their target value on scroll view entry.

---

## 7. STRICT PROHIBITIONS: THE "ANTI-AI SLOP" FILTER

Never produce output that triggers the stereotypical "AI-generated website" trope.

* ❌ **NO Centered Purple Blob Overdose:** Do not paste saturated purple/pink glow bubbles with no relation to the brand.
* ❌ **NO Three Identical Cards:** Never generate 3 identical rectangular boxes with an icon, H3, and two lines of filler text.
* ❌ **NO Buzzword Salad:** Forbid phrases like *"Revolutionizing digital transformation through innovative cutting-edge synergies"*. Write crisp, concrete, technical prose.
* ❌ **NO Pure Black / Blind Flatness:** Avoid solid `#000000` backgrounds with zero lighting or texture. Use deep slate/obsidian canvases with subtle radial vignette gradients.
* ❌ **NO Unchecked Mobile Blowouts:** Zero horizontal scrolling (`overflow-x-hidden` on main container). Every desktop bento grid must collapse into a clean, hierarchical vertical stack on mobile.
* ❌ **NO Broken Interactive Elements:** If you render a copy button, it MUST copy. If you render a tab switcher, it MUST switch tabs. If you render a modal, it MUST open and close with Escape.

---

## 8. WORKFLOW FOR CODING AGENTS (THE 6-PHASE EXECUTION)

When prompted to build an ultra-premium website or section, execute this automated workflow:

### Phase 1 — Brief Extraction & Aesthetic Stance
* Extract: Industry vertical, target audience, primary conversion goal, key technical features.
* Declare design read: *"Crafting an ultra-premium [Archetype] experience with a palette of [Colors], utilizing a [Layout Pattern] and [Motion Level]."*

### Phase 2 — Token & Substrate Setup
* Establish base CSS variables / Tailwind color ramps, glassmorphic utilities, and font stacks.

### Phase 3 — Component Hierarchy & State Architecture
* Build modular, independently testable components (`Header`, `HeroStage`, `BentoGrid`, `TelemetryCard`, `MetricsBar`, `InteractivePlayground`, `Footer`).

### Phase 4 — Visual Density & High-Caliber Assets
* Integrate pristine SVG icons (Lucide/Heroicons), interactive SVG chart graphics, gradient maps, and high-fidelity code blocks.

### Phase 5 — Micro-Interactions & Event Hooks
* Wire up hover states, active pill tabs, keyboard shortcuts (Ctrl+K palette), copy toasts, and scroll reveals.

### Phase 6 — The Pre-Flight Visual Self-Audit
Before declaring the task complete, verify against the **Pre-Flight Checklist**:
* [ ] **Blur Test:** If squinting at the page, is the focal point instantly obvious?
* [ ] **Contrast Check:** Are secondary text elements legible against dark glass surfaces?
* [ ] **Hierarchy Gradient:** Is there a clear visual progression from the headline down to the footer?
* [ ] **Zero Layout Shift:** Do interactive transitions preserve layout stability?
* [ ] **Functional Fidelity:** Do all tabs, pills, counters, and interactive widgets execute flawlessly without console errors?

---

## 9. CODE RECIPE: THE BILLION-DOLLAR GLASS CARD TEMPLATE

```html
<!-- Example ultra-premium Bento Glass Card -->
<div class="group relative rounded-3xl p-6 sm:p-8 bg-slate-900/40 backdrop-blur-xl border border-white/10 hover:border-sky-500/40 transition-all duration-500 overflow-hidden shadow-[0_8px_32px_0_rgba(0,0,0,0.36)] hover:shadow-[0_16px_48px_0_rgba(56,189,248,0.12)]">
    <!-- Ambient Inner Flashlight Gradient (Updated via mousemove or CSS) -->
    <div class="absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(650px_circle_at_var(--mouse-x,50%)_var(--mouse-y,50%),rgba(56,189,248,0.08),transparent_80%)] pointer-events-none"></div>
    
    <!-- Top Meta Row -->
    <div class="flex items-center justify-between mb-4">
        <span class="px-2.5 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-sky-500/10 text-sky-400 border border-sky-500/20">
            Real-Time Telemetry
        </span>
        <span class="flex items-center gap-1.5 text-[11px] text-emerald-400 font-mono">
            <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
            99.98% Latency
        </span>
    </div>

    <!-- Content -->
    <h3 class="text-xl font-bold text-white tracking-tight group-hover:text-sky-200 transition-colors">
        Quantum Engine Pipeline
    </h3>
    <p class="text-xs text-slate-400 mt-2 leading-relaxed">
        Sub-millisecond matrix decomposition across distributed sovereign clusters with hardware acceleration.
    </p>

    <!-- Visual Payload (Interactive Graphic / SVG Wave) -->
    <div class="mt-6 pt-4 border-t border-white/5">
        <!-- Graphic / metric payload goes here -->
    </div>
</div>
```

---
*Skill registered for Antigravity AI Agents. Execute every project with uncompromising aesthetic and technical perfection.*
