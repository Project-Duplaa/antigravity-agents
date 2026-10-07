---
name: blender-studio-pipeline
description: "Master CGI & CAD engineering skill for headless Blender 5.2.2 LTS automation. Provides studio_lib.py with 4-point softbox strip lighting, AgX high-contrast color management, PBR metallurgy (titanium, mirror copper, chrome, gold, PCB), procedural CAD geometry generators (finstacks, axial fans, heatpipes), F-curve disassembly animation, automated quality audits (audit.py), and web interactive hotspot tracking manifests."
---

# BLENDER STUDIO PIPELINE & CGI CAD SPECIALIST GUIDE

## 🎯 Purpose
This skill establishes the production-grade pipeline for headless Blender 5.2.2 LTS scripting. It eliminates both amateur failure modes:
1. **The Black Void collapse:** Untextured or near-black materials reflecting black space.
2. **The Washed-Out fog:** Overexposed, flat ambient lighting that turns metals into matte grey cardboard.

Instead, it enforces **high-contrast product studio cinematography**: a dark/moody environment with sharp, elongated area light softboxes that strike reflective metallic bevels with brilliant specular gleams and rich shadowed depths.

---

## 🛠️ Architecture & File Structure

```
blender-studio-pipeline/
├── SKILL.md                                 # This specification
├── scripts/
│   ├── studio_lib.py                        # Core library importable inside Blender (-b -P)
│   ├── audit.py                             # Numeric & visual quality auditor (Pillow)
│   └── encode_sequence.py                   # Responsive WebP sequence and poster generator
├── references/
│   └── sequence-manifest.schema.json        # Shared manifest schema contract with motion agent
└── examples/
    └── gpu_exploded_showcase.py             # Complete reference implementation
```

---

## 📦 How to Import `studio_lib` in Headless Scripts

In any Blender script executed via `blender -b -P script.py`:

```python
import sys
import os

skill_lib_dir = r"D:\Usuarios\jamado\.gemini\config\skills\blender-studio-pipeline\scripts"
if skill_lib_dir not in sys.path:
    sys.path.insert(0, skill_lib_dir)

import studio_lib

# Initialize scene, color, and lighting
scene = studio_lib.setup_render(engine='EEVEE', resolution=(1024, 640), samples=32, transparent=True)
studio_lib.setup_color(view_transform='AgX', exposure=0.85)
studio_lib.studio_lighting(preset='product_dark')

# Access authentic PBR materials
mats = studio_lib.get_pbr_library()
mat_copper = mats['mirror_copper']
mat_titanium = mats['titanium']
mat_chrome = mats['mirror_chrome']
```

---

## 💡 Lighting Presets

### 1. `product_dark` (Recommended for Hardware Showcases)
- **World:** Dark slate `(0.02, 0.03, 0.05)` with subtle 0.5 strength ambient radiance.
- **Key Strip Softbox:** Top-front 45° angle, 2800W warm studio light `(1.0, 0.98, 0.94)`, elongated 9×4.5m plane.
- **Rim Cyan Strip:** Back-left, 2200W cryogenic cyan `(0.0, 0.95, 1.0)`, produces razor-sharp edge contours.
- **Fill Softbox:** Low front-right, 900W neutral fill to avoid deep black voids under components.
- **Top Slit:** Overhead, 1600W 12×3m strip casting linear reflection streaks along top chamfers.
- **Kicker:** Low rear kicker defining lower silhouette edges.

### 2. `dramatic_rim`
- Ultra-dark void with dual opposing rim softboxes (Cyan vs Tungsten Warm Amber) sculpting the outer geometry.

---

## 🔬 PBR Metallurgy Formulas

| Material | Base Color RGB | Metallic | Roughness | Anisotropic | Highlights |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Titanium Silver** | `(0.78, 0.81, 0.86)` | 0.95 | 0.22 | 0.20 | Crisp specular sheen, micro-noise |
| **Mirror Copper** | `(0.96, 0.52, 0.22)` | 0.98 | 0.10 | 0.00 | Rich warm orange vapor chamber |
| **Mirror Chrome** | `(0.95, 0.97, 0.99)` | 1.00 | 0.04 | 0.00 | Glass-like reflective heatpipes |
| **Gold 18K Contacts**| `(1.00, 0.78, 0.20)` | 0.98 | 0.14 | 0.00 | PCIe and LGA golden pins |
| **Matte PCB Mask** | `(0.05, 0.07, 0.09)` | 0.12 | 0.82 | 0.00 | High-contrast dark substrate |
| **Silicon Die** | `(0.16, 0.22, 0.30)` | 0.95 | 0.07 | 0.00 | Deep iridescent reflective mirror |

---

## ⚠️ Blender 5.2.2 LTS Verified API Notes

| API Area | Verified Behavior in 5.2.2 LTS |
| :--- | :--- |
| **EEVEE Engine** | `scene.render.engine = 'BLENDER_EEVEE'` (not `BLENDER_EEVEE_NEXT`) |
| **Sampling Setting**| `scene.eevee.taa_render_samples = 32` |
| **Transmission Input**| `bsdf.inputs["Transmission Weight"]` |
| **Emission Input** | `bsdf.inputs["Emission Color"]` + `bsdf.inputs["Emission Strength"]` |
| **Voronoi Texture** | `node.distance = 'MANHATTAN'`, feature: `'F1', 'F2', 'SMOOTH_F1'` |
| **Camera Projection**| `bpy_extras.object_utils.world_to_camera_view(scene, cam, loc_world)` converts 3D world to 2D normalized screen coordinates `(x, 1.0 - y)` |

---

## 🔍 Quality Audit Standards (`audit.py`)

Every frame sequence must pass the numeric audit before handoff:

1. **Mean Luminance:** Target `0.20 - 0.55` (calculated strictly over alpha-isolated object pixels).
2. **Clipped Highlights (>0.98):** Must be `< 2.0%` of object surface area.
3. **Crushed Shadows (<0.03):** Must be `< 12.0%` of object surface area.
4. **Contrast (Std Dev):** Must be `> 0.11` (values below 0.11 signify washed-out, flat contrast).
5. **Contact Sheet:** Generates `contact_sheet.png` displaying 5 milestones with color-coded audit status.

Run with:
```bash
python D:\Usuarios\jamado\.gemini\config\skills\blender-studio-pipeline\scripts\audit.py <image_dir> <out_dir>
```

---

## 🌐 Web Handshake Contract (`sequence-manifest.schema.json`)

The output manifest links directly to the `motion` agent's `MotionKit.imageSequence()` controller:
- Supports responsive widths (`frames/960/`, `frames/1600/`).
- Supplies `hotspots[].track` with normalized `[x, y, visible]` coordinates per frame.
- Organizes the story into structured narrative chapters.
