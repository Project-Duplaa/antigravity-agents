---
name: modern-animated-ui-components
description: Master skill for building cutting-edge animated web experiences using shadcn/ui + MCP, Magic UI, Aceternity UI, Motion (Framer Motion), and GSAP. Covers component registries, physics-based micro-interactions, spatial timelines, and seamless CLI/AI workflows.
risk: safe
source: user_configured
date_added: "2026-10-05"
---

# Modern Animated UI Components & Motion Engine
### *shadcn/ui, Magic UI, Aceternity UI, Motion & GSAP*

This skill equips agents with end-to-end patterns to generate, scaffold, and animate world-class digital products using the premier modern UI animation stack.

---

## 🛠️ Stack Synergy Matrix

| Layer | Primary Tech | Role & Capabilities | Installation / Access |
|---|---|---|---|
| **Component Foundation** | `shadcn/ui` + MCP | Unstyled accessible primitives (Radix UI), design system scaffolding, component governance. | Global CLI: `shadcn`<br>MCP Server: `npx -y shadcn@latest mcp` |
| **Micro-Interactions** | `Magic UI` | Bento grids, border beams, animated beams, particle backgrounds, marquee tickers. | `shadcn add @magicui/...` or custom registry URL |
| **Hero & Spatial Effects** | `Aceternity UI` | 3D Pin, Sparkles, Lamp, Background Beams, Tracing Beams, Floating Docks. | Copy-paste Tailwind + Motion blueprints or `shadcn add` |
| **Declarative React Motion** | `Motion` (Framer Motion) | Springs, layout transitions, exit animations (`AnimatePresence`), gesture hooks (`hover`, `tap`, `drag`). | `npm i motion` or global `motion` |
| **Universal Timelines & Scroll** | `GSAP` (GreenSock) | High-performance scrubbed timelines, ScrollTrigger, DOM orchestrations across **both Vanilla JS & React**. | `npm i gsap` / CDN / global `gsap` |

---

## 1. shadcn/ui + MCP Server

### Global Usage
The global CLI is active:
```bash
# Add components directly to any React/Next project
shadcn add button card dialog dropdown-menu tooltip tabs
```

### Official MCP Server Capabilities
The Antigravity MCP integration enables the AI to:
- Browse installed registries and discover compatible components.
- Inspect component source codes before writing.
- Autonomously scaffold UI blocks directly into your workspace.

```json
// Configured in mcp_config.json
{
  "mcpServers": {
    "shadcn": {
      "command": "npx",
      "args": ["-y", "shadcn@latest", "mcp"]
    }
  }
}
```

---

## 2. Magic UI: Animated Micro-Interactions

Magic UI components extend `shadcn/ui`. When working in a project with Tailwind and `shadcn`:

### Key Components & Installation:
- **Border Beam** (Animated glowing border around cards):
  `shadcn add @magicui/border-beam`
- **Bento Grid** (Editorial asymmetrical grids):
  `shadcn add @magicui/bento-grid`
- **Marquee** (Seamless infinite scrolling logos/items):
  `shadcn add @magicui/marquee`
- **Animated Beam** (Connecting nodes with animated glowing data paths):
  `shadcn add @magicui/animated-beam`
- **Particles / Meteors** (Interactive floating canvas background):
  `shadcn add @magicui/particles`
- **Number Ticker** (Smooth financial/telemetry animated counters):
  `shadcn add @magicui/number-ticker`

### Magic UI Design Mandates:
1. Never oversaturate with multiple competing animations on one screen. Choose **one primary focal animation** (e.g., Animated Beam or Bento Grid) and keep secondary elements subtle.
2. Comply strictly with `.preferences.md`: Do NOT use generic purple gradients; ground colors in Deep Midnight Slate (`#070B10`), Cyan (`#38BDF8`), and Warm Amber (`#F59E0B`).

---

## 3. Aceternity UI: Spatial & 3D Web Craft

Aceternity UI provides copy-paste ready components built on Tailwind CSS + Motion + Canvas.

### Essential Blueprint Patterns:

#### A. Spotlight Card
Reveals an ambient spotlight gradient tracking cursor movement:
```tsx
import React, { useRef, useState } from "react";

export const SpotlightCard = ({ children, className = "" }) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setOpacity(1)}
      onMouseLeave={() => setOpacity(0)}
      className={`relative overflow-hidden rounded-xl border border-slate-800 bg-slate-950 p-6 ${className}`}
    >
      <div
        className="pointer-events-none absolute -inset-px transition duration-300"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(56, 189, 248, 0.12), transparent 40%)`,
        }}
      />
      {children}
    </div>
  );
};
```

#### B. 3D Pin & Floating Elements
Uses CSS 3D perspective (`perspective: 1000px`) and `transform: rotateX(var(--rx)) rotateY(var(--ry))` mapped to pointer coordinates.

---

## 4. Motion (Framer Motion): Physics & Gestures

### The Spring Philosophy
Prefer physics-based spring transitions over linear durations:
```tsx
import { motion } from "motion/react";

// Standard buttery spring config:
const springTransition = {
  type: "spring",
  stiffness: 380,
  damping: 30,
};

export function InteractiveCard({ title, desc }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4, scale: 1.01 }}
      whileTap={{ scale: 0.98 }}
      transition={springTransition}
      className="p-6 rounded-lg bg-slate-900 border border-slate-800"
    >
      <h3 className="text-white font-semibold">{title}</h3>
      <p className="text-slate-400 text-sm mt-1">{desc}</p>
    </motion.div>
  );
}
```

### Layout Animations (`layoutId`)
Use `layoutId` for smooth shared-element transitions (e.g., active tab indicator, expanding drawers, modal morphs) without manual coordinate calculations.

---

## 5. GSAP (GreenSock): Universal & Heavy Timelines

### Where to Choose GSAP over Motion:
- **Vanilla JS Architectures** (e.g., SENTRA RMM, standalone dashboards, pure HTML/CSS prototypes).
- **Complex Sequential Timelines** with precise cross-element delays and label synchronizations (`tl.addLabel("spin").to(...)`).
- **ScrollTrigger**: Scrubbing animations pinned to user scroll position with scrub damping.

### Vanilla JS GSAP Blueprint (Ready for SENTRA or Standalone HTML):
```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
<script>
  // High-performance timeline sequence:
  const tl = gsap.timeline({ defaults: { ease: "power3.out", duration: 0.6 } });
  
  tl.from(".panel-header", { y: -20, opacity: 0 })
    .from(".metric-card", { 
      y: 30, 
      opacity: 0, 
      stagger: 0.08, 
      scale: 0.96 
    }, "-=0.3")
    .from(".chart-container", { opacity: 0, scale: 0.98 }, "-=0.2");
</script>
```

---

## 🎯 Pre-Flight Rules for Any Animated UI

1. **Accessibility (`prefers-reduced-motion`):** Always support reduced-motion queries by disabling transforms and falling back to subtle opacity transitions.
2. **GPU Optimization:** Only animate `transform` and `opacity`. Avoid animating `width`, `height`, `top`, `left`, or `margin` to preserve 60fps / 120fps refresh rates.
3. **Taste & Restraint:** Animations should feel mechanical, precise, and authoritative (like aviation avionics or executive hardware), never like bouncy cartoon toys.
