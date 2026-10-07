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
- **Zero Glow / Neon Halos (HARD BAN)**: Ban glowing box shadows (`shadow-[0_0_...`), neon halos, pulsating glow borders, and `animate-ping` indicators. Use quiet, solid, physical surfaces.
- **Quiet Action Buttons**: Solid, sober, functional (muted blue, slate, charcoal). No hyper-saturated glowing CTAs or fake gold gradient buttons.
- **No Clichéd Cyberpunk Neon**: Forbid `#0B111C` + electric cyan + neon green as default.
- **Zero Decorative Terminal Watermarks**: No giant `>_` prompts, circuit grids, or fake code backgrounds.
- **No three identical cards in a row** (the #1 AI layout tell).
- **No pure black (#000000) or pure white (#ffffff)**. Use off-black/off-white.
- **No emoji icons** in professional interfaces.
- **No em-dashes (—)** anywhere in visible text.

## 4. User-Enforced Anti-AI Prohibitions (Non-Negotiable)
- **BANNED: Generic AI Typography Defaults**:
  - `JetBrains Mono` and generic `monospace` are **HARD BANNED** as default fonts.
  - `Plus Jakarta Sans` is **HARD BANNED** as the go-to AI body font.
  - `Inter`, `Fraunces`, and `Instrument Serif` are **HARD BANNED** as default crutches.
  - USE INSTEAD: Curated, human-crafted pairings such as `Cinzel` / `Playfair Display` / `Bodoni Moda` with `DM Sans`, `Outfit`, `Cabinet Grotesk`, or `Satoshi`.
- **BANNED: Toy Synthetic Audio / Web Audio Oscillator Beeps**:
  - Forbid generating cheap Web Audio API sine wave beeps, chimes, or arcade tones that sound like synthetic toys. If audio is needed, use genuine acoustic master recordings or silent, tactile UI feedback.
- **BANNED: Single-Layer Flat Void (Lack of Depth)**:
  - Forbid placing all UI elements on a single flat black or grey background plane with 1px borders.
  - MANDATORY: True spatial depth. Overlapping visual planes, foreground/midground/background composition, depth through subtle physical drop-shadows, layered photography, and asymmetric physical card overlaps.
- **BANNED: Dead Empty Deserts (Excessive Vacant Spaces)**:
  - Forbid massive yawning voids (`py-32`, huge empty black spaces between sparse text elements).
  - MANDATORY: Editorial density, tight compositional balance, and content-rich layouts where every pixel serves a purpose.
- **BANNED: The Translucent Floating Backdrop-Blur Navbar**:
  - Forbid the cookie-cutter `fixed top-0 bg-.../80 backdrop-blur-md` floating navbar slapped on every AI page.
  - MANDATORY: Grounded, solid, architectural headers, editorial mastheads, or integrated navigation bars that feel physically built into the structure.

## 5. Content & Domain Telemetry Standards
- **AUTHENTIC DOMAIN TELEMETRY (The Precision Capsule Standard)**:
  - Domain-specific operational badges (e.g. live manufacture timezones `● GENEVA 02:53:38 CET`, cadence indicators `● 4Hz Live`, real tolerances, or power reserves) are **EXPLICITLY CELEBRATED** when they represent genuine technical craftsmanship.
  - They MUST be integrated into structured dark machined capsules (`bg-[#090B0E] border border-white/10 rounded-sm text-[10px]`) with subtle glowing status dots (`w-1.5 h-1.5 rounded-full bg-accentGold animate-pulse`), never as tacky floating stickers.
- No generic names ("John Doe", "Jane Smith"). Use realistic, locale-appropriate names.
- No invented statistics without `{/* mock */}` comment.
- No scroll cues ("↓ scroll", "Scroll to explore").
- No version labels in hero ("V0.6", "BETA").
- No section-number eyebrows ("001 · Capabilities").
- No div-based fake screenshots.
- No placeholder-as-label in form inputs.

## 6. Iconography Standards
- **Coherent Icon Family Selection**: Choose ONE cohesive icon family per project matching the Visual Contract (`@phosphor-icons/react`, `lucide-react`, `@tabler/icons-react`, `hugeicons-react`, or `material-symbols`).
- **Strict Single-Family Coherence**: ONE icon family per project. NEVER mix disparate icon libraries in the same component tree. Supplement with `@iconify/react` only for specialized domain symbols.
- **Uniform Stroke & Optical Weight**: Standardize stroke width (e.g., 1.5px or 2.0px) and active state variations (e.g. duotone/regular for idle, fill/bold for active).
- **Anti-Emoji Mandate**: Raw OS emojis are strictly banned as UI icons in professional interfaces.
- Icon sizing scale: 16px inline, 20px nav, 24px feature, 32px hero, 48px empty-state.

## 7. Typography Standards
- NEVER default to Inter, Plus Jakarta Sans, or JetBrains Mono.
- Control hierarchy with weight + color, not raw scale alone.
- No mixed serif/sans emphasis within headlines.

## 8. Kinetic Standards: Ambient Depth, Lava Lamp Fluidity & Studio Interactions (Mandatory)
Every interface designed or built by ANY agent MUST implement deliberate kinetic craftsmanship:
- **Lava Lamp & Fluid Organic Backgrounds**:
  - Prefer hypnotic, viscous lava lamp canvas simulations or fluid morphing blobs (in warm mineral gold/amber or domain tones) drifting and deforming smoothly at 60fps. Avoid flat static voids or harsh electric neon gradients.
- **Top Scroll Progress Indicator**:
  - Implement a thin (2px) precision gradient progress line fixed at the very top of the viewport tracking scroll depth (`window.scrollY / totalScroll`).
- **Navigation Mega-Previews (Hover-Activated)**:
  - Navigation links must feature an animated underline that scales in from the left on hover (`scale-x-0` to `scale-x-100`).
  - Nav links should reveal a floating contextual preview card with thumbnail imagery, subtitle, and action arrow.
- **Button Shimmer & Physical Elevation**:
  - Primary buttons must include a passing specular light sweep on hover (`::after` gradient glint) paired with subtle lift (`translate-y-[-2px]`) and soft border illumination.
- **Image Depth Zoom**:
  - Product and hero imagery must zoom smoothly (`scale-[1.04]` with `cubic-bezier(0.16, 1, 0.3, 1)`) with deepening soft shadows upon hover.
- **Interactive Contextual Tooltips**:
  - Technical metrics, specifications, and complications must feature rich educational tooltips on hover explaining domain principles.
- **Parallax Spatial Depth**:
  - Background technical diagrams, gear trains, or coordinate watermarks must respond with subtle scroll-linked parallax translations.
- **Autonomous Component Life (Motion Without Interaction)**:
  - The interface must feel *alive* even before the user touches anything.
  - Curate 2 to 3 selective focal components per view (e.g., periodic specular crystal sweep every 8-12s, living 4Hz balance wheel escapement, slow rotating concentric calibration rings).
  - *Rule of Selective Restraint*: Maximum 2-3 focal points with continuous motion to avoid visual chaos.
- **Mandatory Lazy Loading & Scroll Entrance Choreography**:
  - Offscreen assets must include `loading="lazy"`.
  - Cards and sections must enter dynamically via IntersectionObserver with staggered reveals (40-60ms delay) and human easing (`cubic-bezier(0.16, 1, 0.3, 1)`).
- **Circular Arrow Action Triggers**:
  - Product and catalogue cards should feature refined circular arrow buttons `(→)` that scale and highlight on hover.

## 9. Spatial Luxury & Precision Editorial (Domain-Adaptive Architecture)

The high-craft design principles demonstrated in our gold standards represent a quality bar for craftsmanship, visual depth, and typographical excellence, **NOT a template to force watch telemetry onto unrelated products**:

1. **Strict Rule of Component Relevance (Ban on Gratuitous Telemetry)**:
   - ❌ **NEVER put telemetry, sensor gauges, frequency pulses (`● 4Hz`), timezone capsules (`● GENEVA`), micrometer tolerances, or radar widgets on pages where they do not belong!**
   - A bakery, a clinic, a fashion store, an educational platform, or a CRM MUST NEVER have telemetry or engineering gauges.
   - ✅ Every single component on the screen MUST be 100% relevant to the product vertical:
     - *Gastronomy*: Menus, reservation calendar, wine pairing, allergen notes, chef provenance.
     - *Healthcare / Wellness*: Medical credentials, specialist intake, treatment pathways, patient testimonials.
     - *SaaS / Digital Tools*: Feature workflows, interactive live previews, pricing tables, integrations.
     - *Fashion / Luxury*: High-res lookbook, textile origin, tailoring details, sizing guide, bag cart.
     - *Engineering / Overclocking / Ops*: Telemetry, sensor logs, watt calculators, FLIR thermal maps (ONLY here is telemetry permitted!).

2. **Domain-Adaptive Bespoke Palettes (Never Monolithic)**:
   - ❌ **NEVER** force every project into dark obsidian or amber.
   - ✅ Choose palettes that authentically express the brand:
     - Organic / Wellness: Sage green, oat cream, eucalyptus, warm terracotta.
     - FinTech / Corporate: Deep navy, pristine alpine white, emerald, platinum.
     - Luxury Editorial: Warm alabaster, espresso, charcoal, rich burgundy.
     - Clinical / Health: Sterile white, arctic cyan, cobalt, frosted glass.
     - Creative / Consumer: Curated pastels, vibrant cobalt, warm coral accents.
     - Industrial / Gaming: Obsidian, titanium, thermal amber, cobalt.

3. **Asymmetrical Split Composition & Layered Depth**:
   - Avoid generic centered AI heroes. Use asymmetrical compositions (50/50, 60/40, or bento grids).
   - Incorporate layered depth: overlapping elements that break bounding boxes with subtle calibrated shadows.
   - Avoid `rounded-2xl` or `rounded-3xl` cards. Use sharp or subtle radii (`rounded-none` to `rounded-md`).
   - Mastheads must have architectural weight and clean borders, avoiding floating translucent pill navbars.

4. **Viral 3D Experiences (viral-3d-experience Skill)**:
   - When requested by the user or when designing physical hardware flagships, automotive, or luxury devices:
     - Implement the **Dual Engine Architecture**: Apple-style frame sequence scrubbing on `<canvas>` 2D + real-time Three.js WebGL 360° PBR scene with OrbitControls.
     - Incorporate interactive Lumafield CT Scanner slicing lenses, fluid particle physics (`THREE.Points`), and procedural Web Audio API haptics (clicks, servos, pings).

5. **Complete Zero-Tolerance Font Lock**:
   - BANNED: `JetBrains Mono`, `Plus Jakarta Sans`.
   - APPROVED HEADERS: `Playfair Display`, `Cinzel`, `Fraunces`, `Bodoni Moda`, `Cabinet Grotesk`.
   - APPROVED BODY/TEXT: `DM Sans`, `Outfit`, `IBM Plex Mono` (for raw code/tabular numbers only).


