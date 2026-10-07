---
name: motion-choreography-system
description: "Master Creative Motion & Interaction Engineering skill. Establishes the MotionKit vanilla JS library, motion-tokens.css, GSAP ScrollTrigger choreography, Apple-style scroll-scrub image sequences with per-frame component tracking hotspots, text masking reveals, spring-damped micro-interactions, procedural Web Audio haptics, and Motion Veto standards."
---

# MOTION CHOREOGRAPHY SYSTEM & MOTIONKIT GUIDE

## 🎯 Purpose
This skill equips agents with the tools and blueprints to build living, breathing, Awwwards Site of the Year caliber digital experiences. It eliminates:
1. **Generic AI slide-ins:** Blind `transition: all 0.3s ease` that makes everything move uniformly.
2. **Childish bounce physics:** Cartoonish overshoots on serious luxury/hardware interfaces.
3. **Overstimulating carnivals:** Moving too many things at once.

Instead, it enforces **deliberate, tactile, physically grounded motion** governed by `.preferences.md`:
- Max 2–3 autonomous kinetic focal points per view.
- Easing: `cubic-bezier(0.22, 1, 0.36, 1)` for micro-interactions, `cubic-bezier(0.16, 1, 0.3, 1)` for entrances.
- Organic molten lava lamp Canvas backgrounds at 60fps.
- Strict `prefers-reduced-motion` compliance.

---

## 🛠️ Architecture & File Structure

```
motion-choreography-system/
├── SKILL.md                                 # This master specification
├── scripts/
│   ├── motion-tokens.css                    # CSS custom properties (durations, easings, media queries)
│   └── motion-kit.js                        # Standalone vanilla engine (window.MotionKit)
├── references/
│   ├── sequence-manifest.schema.json        # Shared contract with blender agent
│   └── choreography-patterns.md             # 6 complete narrative arcs & section recipes
└── examples/
    └── motion-showcase.html                 # Standalone interactive reference implementation
```

---

## 📦 How to Use `MotionKit` in Frontend Mockups

Include CDN scripts in your HTML `<head>`:
```html
<!-- GSAP & ScrollTrigger -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js"></script>

<!-- Motion Tokens & Kit -->
<link rel="stylesheet" href="path/to/motion-tokens.css">
<script src="path/to/motion-kit.js"></script>
```

---

## 🕹️ Declarative HTML API (`data-*` Attributes)

| Attribute | Values | Description |
| :--- | :--- | :--- |
| `data-reveal` | `mask-up`, `fade-up`, `blur-in`, `scale-in` | Batched staggered scroll reveal |
| `data-reveal-delay` | Number in seconds, e.g. `0.2` | Base entrance delay |
| `data-magnetic` | (empty or boolean) | Subtle magnetic pull towards cursor |
| `data-magnetic-strength`| Number, e.g. `0.35` | Magnetic displacement multiplier |
| `data-tilt` | (empty or boolean) | Interactive 3D perspective tilt |
| `data-tilt-max` | Number in degrees, e.g. `5.0` | Maximum tilt angle |
| `data-count-to` | Number, e.g. `845` | Smooth numeric odometer counter |
| `data-count-suffix` | String, e.g. `W` or `%` | Appended unit symbol |
| `data-haptic` | `click` | Procedural dry switch sound on click |

---

## 🎞️ The Dual-Engine Frame Scrubber (`MotionKit.imageSequence`)

Consumes the `manifest.json` exported by the `blender` agent:

```javascript
const canvas = document.getElementById('dissection-canvas');

MotionKit.imageSequence(canvas, 'assets/exploded_v2/manifest.json', {
  basePath: 'assets/exploded_v2/',
  pin: true,
  scrub: 0.6,
  start: 'top top',
  end: '+=350%'
});
```

### Automatic Hotspot Tracking
If `manifest.json` defines a hotspot with id `"copper_coldplate"`, place an HTML badge:
```html
<div id="hotspot-copper_coldplate" class="absolute pointer-events-none transition-opacity duration-300">
  <div class="px-3 py-1.5 rounded-md bg-void/90 border border-white/15 text-xs text-chrome backdrop-blur-md">
    Cámara de Cobre Espejo
  </div>
</div>
```
`MotionKit` calculates the exact normalized 2D screen coordinate for each frame and translates the badge in real time with hardware acceleration!

---

## 🔊 Procedural Web Audio Haptics (`MotionKit.haptics`)

Zero external audio files:
- `MotionKit.haptics.click()` — Dry switch click (160Hz → 40Hz in 35ms).
- `MotionKit.haptics.snap()` — Aluminum latch snap (2400Hz → 140Hz in 20ms).
- `MotionKit.haptics.chime()` — Crystal triad harmonic chord (880Hz, 1320Hz, 1760Hz).
