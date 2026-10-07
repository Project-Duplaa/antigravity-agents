"""
Blender Studio Pipeline — Showcase: GPU Exploded Assembly
Demonstrates modular use of studio_lib.py to build, light, animate,
render, and export tracked web manifests.
"""

import sys
import os
import math
import bpy

# Add skill scripts directory to path
skill_dir = r"D:\Usuarios\jamado\.gemini\config\skills\blender-studio-pipeline\scripts"
if skill_dir not in sys.path:
    sys.path.insert(0, skill_dir)

import studio_lib

# 1. Reset Scene
bpy.ops.wm.read_factory_settings(use_empty=True)

# 2. Output Configuration
output_base = r"D:\Usuarios\jamado\.gemini\antigravity\scratch\forge-pc-peripherals\assets\exploded_v2"
raw_png_dir = os.path.join(output_base, "raw_png")
os.makedirs(raw_png_dir, exist_ok=True)

total_frames = 48
scene = studio_lib.setup_render(engine='EEVEE', resolution=(1024, 640), samples=32, transparent=True, total_frames=total_frames)
scene.render.filepath = os.path.join(raw_png_dir, "frame_")

# 3. AgX Color Management & High-Contrast Product Studio Lighting
studio_lib.setup_color(view_transform='AgX', exposure=0.85)
studio_lib.studio_lighting(preset='product_dark')

# 4. Camera Setup
cam = studio_lib.setup_camera(location=(7.5, -9.5, 6.0), rotation=(math.radians(62), 0, math.radians(38)), lens=70)

# 5. Materials Library
mats = studio_lib.get_pbr_library()
mat_ti = mats['titanium']
mat_chrome = mats['mirror_chrome']
mat_copper = mats['mirror_copper']
mat_gold = mats['gold_contacts']
mat_pcb = mats['matte_pcb']
mat_die = mats['silicon_die']
mat_dark = mats['anodized_dark']
mat_cryo = mats['cryo_glow']

# 6. Assembly Geometry Construction

# A. Backplate
bpy.ops.mesh.primitive_cube_add(size=1.0, location=(0, 0, -1.2))
backplate = bpy.context.active_object
backplate.name = "Backplate"
backplate.scale = (5.6, 2.8, 0.12)
studio_lib.add_bevel(backplate, width=0.03, segments=3)
backplate.data.materials.append(mat_ti)

# B. PCB Board
bpy.ops.mesh.primitive_cube_add(size=1.0, location=(0, 0, -0.6))
pcb = bpy.context.active_object
pcb.name = "PCB_Board"
pcb.scale = (5.4, 2.7, 0.08)
studio_lib.add_bevel(pcb, width=0.02, segments=2)
pcb.data.materials.append(mat_pcb)

# B1. PCIe Gold Edge Finger
bpy.ops.mesh.primitive_cube_add(size=1.0, location=(-1.0, -1.45, -0.6))
pcie = bpy.context.active_object
pcie.name = "PCIe_Gold_Contacts"
pcie.scale = (2.8, 0.22, 0.07)
pcie.data.materials.append(mat_gold)

# B2. Silicon Die
bpy.ops.mesh.primitive_cube_add(size=1.0, location=(-0.4, 0, -0.5))
die = bpy.context.active_object
die.name = "GPU_Die"
die.scale = (1.3, 1.3, 0.06)
studio_lib.add_bevel(die, width=0.02, segments=2)
die.data.materials.append(mat_die)

# B3. GDDR6X Modules
mem_modules = []
mem_locs = [
    (-1.4, -0.9, -0.52), (-0.4, -0.9, -0.52), (0.6, -0.9, -0.52),
    (-1.4, 0.9, -0.52), (-0.4, 0.9, -0.52), (0.6, 0.9, -0.52),
    (1.4, -0.3, -0.52), (1.4, 0.3, -0.52)
]
for i, mloc in enumerate(mem_locs):
    bpy.ops.mesh.primitive_cube_add(size=1.0, location=mloc)
    m = bpy.context.active_object
    m.name = f"VRAM_{i}"
    m.scale = (0.5, 0.4, 0.04)
    m.data.materials.append(mat_dark)
    mem_modules.append(m)

# C. Mirror Copper Coldplate & Vapor Chamber
bpy.ops.mesh.primitive_cube_add(size=1.0, location=(-0.4, 0, 0.0))
coldplate = bpy.context.active_object
coldplate.name = "Coldplate_Copper"
coldplate.scale = (3.2, 2.2, 0.24)
studio_lib.add_bevel(coldplate, width=0.04, segments=3)
coldplate.data.materials.append(mat_copper)

# D. Chrome Heatpipes
heatpipes = []
for i, y_off in enumerate([-0.65, -0.22, 0.22, 0.65]):
    hp = studio_lib.create_heatpipe(f"Heatpipe_{i}", radius=0.11, length=5.2, 
                                   location=(0.0, y_off, 0.32), mat=mat_chrome)
    heatpipes.append(hp)

# E. Aluminum Fin Stack (Dense cooling array)
finstack_root = studio_lib.create_fin_stack("FinStack", fin_count=36, width=4.9, height=0.68, span=2.3, mat=mat_ti)
finstack_root.location = (0.1, 0, 0.8)

# F. CNC Shroud
bpy.ops.mesh.primitive_cube_add(size=1.0, location=(0.1, 0, 1.6))
shroud = bpy.context.active_object
shroud.name = "CNC_Shroud"
shroud.scale = (5.4, 2.6, 0.4)
studio_lib.add_bevel(shroud, width=0.05, segments=3)
shroud.data.materials.append(mat_ti)

# F1. Cryo Laser Accent Line
bpy.ops.mesh.primitive_cube_add(size=1.0, location=(0.1, -1.32, 1.6))
accent = bpy.context.active_object
accent.name = "Cryo_Accent"
accent.scale = (4.8, 0.06, 0.08)
accent.data.materials.append(mat_cryo)

# G. Axial Fans
fans = []
for i, x_pos in enumerate([-1.3, 1.5]):
    fan = studio_lib.create_axial_fan(f"Fan_{i}", radius=0.92, blades=7, mat_blade=mat_dark, mat_hub=mat_chrome)
    fan.location = (x_pos, 0, 1.72)
    fans.append(fan)

# 7. Animation Setup (Easing Disassembly along Z axis)
anim_layers = [
    (backplate, -1.2, -3.2),
    (pcb, -0.6, -1.4),
    (pcie, -0.6, -1.4),
    (die, -0.5, -1.3),
    (coldplate, 0.0, 0.0), # Stays grounded as centerpiece
    (finstack_root, 0.8, 1.8),
    (shroud, 1.6, 3.8),
    (accent, 1.6, 3.8)
]

for m in mem_modules:
    orig_z = m.location.z
    anim_layers.append((m, orig_z, orig_z - 0.8))

for hp in heatpipes:
    anim_layers.append((hp, 0.32, 0.95))

for f in fans:
    orig_z = f.location.z
    anim_layers.append((f, orig_z, orig_z + 2.2))

studio_lib.animate_disassembly(anim_layers, start_frame=1, end_frame=total_frames)

# 8. Export Tracked Web Hotspots & Chapters Manifest
manifest_path = os.path.join(output_base, "manifest.json")
hotspots_dict = {
    "gpu_shroud": {"object": shroud, "label": "Cubierta CNC Titanio"},
    "fans": {"object": fans[0], "label": "Ventiladores Axiales"},
    "finstack": {"object": finstack_root, "label": "Disipador Microaletas"},
    "copper_coldplate": {"object": coldplate, "label": "Cámara Cobre Espejo"},
    "gpu_die": {"object": die, "label": "Silicio Binned 4nm"},
    "pcb_gold": {"object": pcie, "label": "Conector PCIe Oro 18K"}
}

chapters_list = [
    {"id": "assembled", "label": "Ensamblado de Precisión", "start": 1, "end": 12, "description": "Chasis cerrado en titanio y flujo presurizado"},
    {"id": "thermal_split", "label": "Desacople Térmico", "start": 13, "end": 24, "description": "Separación del disipador de microaletas"},
    {"id": "vapor_chamber", "label": "Cámara de Cobre Puro", "start": 25, "end": 36, "description": "Contacto directo de cobre pulido espejo"},
    {"id": "silicon_core", "label": "Silicio y Arquitectura", "start": 37, "end": 48, "description": "Die binned y módulos GDDR6X"}
]

manifest = studio_lib.export_sequence_manifest(manifest_path, "gpu-exploded-v2", total_frames, hotspots_dict, chapters_list, aspect=1.6)

print("Showcase setup completed successfully.")
