# Anti-AI Design & Operational Realism Standards (Shared Rules)

These rules are non-negotiable and apply to ALL agents that produce, review, or verify user-facing interfaces. Every agent MUST honor these without exception.

## 1. Zero Buzzword Soup & Copy Standards
- State what the product DOES in plain human language.
- **HARD BANNED**: `Next-Gen`, `AI-Powered`, `Intelligent`, `Future-Ready`, `Enterprise-Grade`, `Unified`, `Smart`, `Advanced`, `Precision`, `Command Center`, `Command Platform`, `Hyper-`, `Bloat`, `Cryptographically verified`, `Velocity`, `Consumer-grade`, `Seamless`, `Revolutionize`, `Empower`.
- **Plain Navigation Labels**: Use direct nouns (`Tickets`, `Queue`, `Settings`, `Users`). Forbid `Triage Queue Matrix`, `Roles & RBAC Permission Matrix`.
- **Functional Button Labels**: Use standard verbs (`Open Queue`, `New Ticket`). Ban `Launch Agent Triage`, `Initiate Command`.
- **Realistic User Identities**: Display `Carlos Herrera` and `IT Operations`. Never `🟢 Carlos (super_admin)`.

## 2. Operational Workspace Standards
- **Operational Workspace over Marketing Hero**: Authenticated dashboards MUST prioritize what requires attention in the first 5 seconds. Never a promotional hero.
- **Actionable Metrics**: Forbid `100% routing health`, `HTTP 200 OK Handshake`. Use `Last sync: 2m ago (0 failures)`, `3 tickets awaiting triage`.
- **Page Title Restraint**: Inside an app, titles are standard view names (`Overview`, `Queue`, `Settings`). Never marketing headlines.
- **The 5-Second Operational Test**: Can a professional understand what is happening and what action to take in 5 seconds?

## 3. Visual Anti-Patterns (Hard Bans)
- **Zero "Card Everything" Syndrome**: Mix tables, inline data strips, divider lines, text sections. Reduce cards by at least 40%.
- **Monospace Restraint**: `font-mono` is STRICTLY for technical identifiers (ticket IDs, IPs, latency ms, HTTP codes). Never for human counts or dates.
- **Tight Corner Radius (Max 4-6px)**: Forbid `rounded-2xl` and `rounded-3xl` on operational components. Use `rounded` (4px) or `rounded-md` (6px).
- **Zero Glow / Neon Halos**: Ban glowing box shadows, neon cyan halos, pulsating glow borders. Use quiet, solid surfaces.
- **Quiet Action Buttons**: Solid, sober, functional (muted blue or slate). No hyper-saturated glowing CTAs.
- **No Clichéd Cyberpunk Neon**: Forbid `#0B111C` + electric cyan + neon green as default for IT/DevOps tools.
- **Zero Decorative Terminal Watermarks**: No giant `>_` prompts, circuit grids, or fake code backgrounds.
- **No three identical cards in a row** (the #1 AI layout tell).
- **No pure black (#000000) or pure white (#ffffff)**. Use off-black/off-white.
- **No emoji icons** in professional interfaces.
- **No em-dashes (—)** anywhere in visible text.

## 4. Content Anti-Patterns
- No generic names ("John Doe", "Jane Smith"). Use realistic, locale-appropriate names.
- No invented statistics without `{/* mock */}` comment.
- No scroll cues ("↓ scroll", "Scroll to explore").
- No version labels in hero ("V0.6", "BETA").
- No section-number eyebrows ("001 · Capabilities").
- No div-based fake screenshots.
- No placeholder-as-label in form inputs.

## 5. Iconography Standards
- `@phosphor-icons/react` (9,000+ icons, 6 weights) is the DEFAULT icon library.
- `lucide-react` is DISCOURAGED (overused by every AI).
- ONE icon family per project. Supplement with `@iconify/react` only for specialized icons (flags, brands).
- Use `weight="duotone"` for sidebar navigation, `weight="fill"` for active/selected states.
- Icon sizing scale: 16px inline, 20px nav, 24px feature, 32px hero, 48px empty-state.

## 6. Typography Standards
- NEVER default to Inter. Use `Geist`, `Outfit`, `Cabinet Grotesk`, `Satoshi`, or brand-appropriate alternatives.
- `Fraunces` and `Instrument Serif` are BANNED as defaults.
- Control hierarchy with weight + color, not raw scale alone.
- No mixed serif/sans emphasis within headlines.
