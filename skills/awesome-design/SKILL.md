---
name: awesome-design
description: Master repository and taxonomy of 67 modular design archetypes from awesome-design-skills (by bergside & typeui.sh). Covers bento, glassmorphism, premium, minimal, neobrutalism, editorial, enterprise, skeumorphism, sleek, modern, futuristic, and 50+ more styles with precise color tokens, typography scales, spacing scales, and WCAG accessibility standards.
---

# Awesome Design Skills System (67 Design Archetypes)

The `awesome-design` system provides design tokens, typography rules, layout structures, and accessibility standards for 67 curated design archetypes.

## Core Archetype Quick Matrix

| Archetype | Primary Vibe | Key Colors | Typography (Display / Body / Mono) | Border Radius | Spacing Rhythm |
|-----------|--------------|------------|-----------------------------------|---------------|----------------|
| **bento** | Modular grid, organized, scannable cards | `#FAD4C0`, `#80A1C1`, `#FFF5E6` (bg), `#111827` (text) | Inter / Inter / JetBrains Mono | 4px, 8px | 4 / 8 / 12 / 16 / 24 / 32 |
| **glassmorphism** | Translucent frosted glass, subtle borders, depth | `#38BDF8` (sky), `#6366F1` (indigo), `#0F172A` (surface) | Inter / Inter / JetBrains Mono | 8px, 16px | 4 / 8 / 16 / 24 / 32 / 48 |
| **premium** | Ultra-luxury, restrained dark/light elegance | `#D4AF37` (gold), `#1C1917` (rich dark), `#F5F5F4` (ivory) | Playfair Display / Inter / JetBrains Mono | 2px, 6px | 8 / 16 / 24 / 32 / 48 / 64 |
| **minimal** | High whitespace, intentional contrast, content-first | `#000000`, `#FFFFFF`, `#737373` (neutral) | Geist / Geist / Geist Mono | 0px, 4px | 8 / 16 / 24 / 32 / 48 / 64 |
| **neobrutalism** | High contrast, bold borders, retro pop shadows | `#FFE600`, `#FF5757`, `#000000` (thick border), `#FFFFFF` | Space Grotesk / Archivo / Space Mono | 0px (sharp) | 8 / 16 / 24 / 32 / 48 |
| **editorial** | Magazine-grade typography, asymmetric layout | `#1C1917`, `#E7E5E4`, `#B91C1C` (accent) | Newsreader / Inter / JetBrains Mono | 0px, 2px | 12 / 24 / 36 / 48 / 72 |
| **enterprise** | Dependable, data-dense, polished B2B SaaS | `#2563EB`, `#0F172A`, `#F8FAFC`, `#64748B` | Inter / Inter / Roboto Mono | 4px, 6px | 4 / 8 / 12 / 16 / 20 / 24 |
| **refined** | Subtle gradients, micro-borders, quiet luxury | `#09090B`, `#27272A`, `#A1A1AA`, `#FAFAFA` | Outfit / DM Sans / IBM Plex Mono | 6px, 12px | 6 / 12 / 18 / 24 / 36 / 48 |
| **sleek** | Aerodynamic, dark-mode, high-tech performance | `#0B0F19`, `#00E5FF`, `#7000FF`, `#E2E8F0` | Plus Jakarta Sans / Inter / Fira Code | 8px, 12px | 4 / 8 / 16 / 24 / 32 / 48 |
| **spacious** | Generous breathing room, art-gallery openness | `#FAFAF9`, `#1C1917`, `#A8A29E` | Cinzel / Outfit / Space Mono | 4px, 8px | 16 / 32 / 48 / 64 / 96 / 128 |
| **shadcn** | Modern clean components, neutral zinc/slate tokens | `#18181B`, `#FAFAFA`, `#71717A`, `#27272A` | Inter / Inter / Geist Mono | 6px, 8px | 4 / 8 / 12 / 16 / 24 / 32 |
| **skeumorphism** | Tactile bevels, inner shadows, analog realism | `#262626`, `#E5E5E5`, `#525252`, `#A3A3A3` | SF Pro / Inter / JetBrains Mono | 8px, 12px | 4 / 8 / 16 / 24 / 32 |
| **futuristic** | Cyber-precision, neon accents, technical telemetry | `#030712`, `#06B6D4`, `#10B981`, `#F3F4F6` | Orbitron / Exo 2 / Share Tech Mono | 2px, 4px | 4 / 8 / 12 / 16 / 24 / 32 |

## Full Archetype Catalog (Installed & Available)
The complete set of 67 individual style directories can be referenced from `~/.agents/skills/`:
`agentic`, `ant`, `artistic`, `basic`, `bento`, `bold`, `brutalism`, `cafe`, `claude`, `claymorphism`, `clean`, `codex`, `colorful`, `contemporary`, `corporate`, `cosmic`, `creative`, `dithered`, `doodle`, `dramatic`, `editorial`, `enterprise`, `expressive`, `fantasy`, `fiction`, `flat`, `friendly`, `futuristic`, `geometric`, `glassmorphism`, `gradient`, `immersive`, `impeccable`, `levels`, `lingo`, `material`, `matrix`, `minimal`, `modern`, `mono`, `neobrutalism`, `neon`, `neumorphism`, `pacman`, `paper`, `perspective`, `power`, `premium`, `professional`, `pulse`, `refined`, `retro`, `riso`, `roku`, `sega`, `shadcn`, `sketch`, `skeumorphism`, `sleek`, `spacious`, `square`, `stitch`, `storytelling`, `terracotta`, `tetris`, `vibrant`, `vintage`.

## How Agents Must Use This System
1. **Creative & Designer Agents:**
   - Infer the target archetype from the product brief (e.g. luxury workstation -> `refined` or `sleek`; wellness -> `spacious` or `clean`; dev tools -> `bento` or `shadcn`).
   - Extract the color tokens, font pairings, and spacing scales from the matching archetype.
   - Lock these into the project's Visual Contract.
2. **Frontend Agent:**
   - Implement the exact CSS variables and classes defined by the archetype.
   - Do NOT mix contradictory styles (e.g. don't mix `neobrutalism` thick borders with `glassmorphism` soft blurs).
   - Verify WCAG 2.2 AA contrast compliance.
