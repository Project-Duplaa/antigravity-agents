"""
Blender Studio Pipeline — Core Library (studio_lib.py)
Reusable, CAD-grade studio lighting, PBR metallurgy, geometry helpers, animation,
and web hotspot tracking for Blender 5.2.2 LTS headless scripts.
"""

import bpy
import bpy_extras
import math
import os
import json

# -----------------------------------------------------------------------------
# 1. RENDER & COLOR MANAGEMENT SETUP
# -----------------------------------------------------------------------------

def setup_render(engine='EEVEE', resolution=(1024, 640), samples=32, transparent=True, total_frames=48):
    """Configures the render engine, resolution, samples, and transparency."""
    scene = bpy.context.scene
    
    # Engine Selection
    if engine.upper() == 'CYCLES':
        scene.render.engine = 'CYCLES'
        # Hardware device check
        prefs = bpy.context.preferences.addons.get('cycles')
        if prefs:
            cprefs = prefs.preferences
            devices = cprefs.get_devices()
            gpu_found = False
            for d in (devices[0] if devices else []):
                if d.type in ('OPTIX', 'CUDA', 'HIP', 'ONEAPI'):
                    d.use = True
                    gpu_found = True
            if gpu_found:
                scene.cycles.device = 'GPU'
            else:
                scene.cycles.device = 'CPU'
        scene.cycles.samples = samples
        if hasattr(scene.cycles, 'use_denoising'):
            scene.cycles.use_denoising = True
    else:
        # EEVEE in Blender 5.2.2 LTS
        scene.render.engine = 'BLENDER_EEVEE'
        if hasattr(scene.eevee, 'taa_render_samples'):
            scene.eevee.taa_render_samples = samples
            
    # Resolution & Output
    scene.render.resolution_x = resolution[0]
    scene.render.resolution_y = resolution[1]
    scene.render.resolution_percentage = 100
    scene.render.film_transparent = transparent
    scene.render.image_settings.file_format = 'PNG'
    scene.render.image_settings.color_mode = 'RGBA'
    
    scene.frame_start = 1
    scene.frame_end = total_frames
    
    return scene

def setup_color(view_transform='AgX', look='None', exposure=0.9):
    """Sets AgX Color Management with calibrated exposure to eliminate black crush and overexposure."""
    scene = bpy.context.scene
    scene.view_settings.view_transform = view_transform
    scene.view_settings.look = look
    scene.view_settings.exposure = exposure

# -----------------------------------------------------------------------------
# 2. STUDIO LIGHTING PRESETS
# -----------------------------------------------------------------------------

def studio_lighting(preset='product_dark'):
    """
    Configures lighting strips that cast crisp, elongated specular bands on metals.
    Avoids uniform ambient fog.
    """
    scene = bpy.context.scene
    world = bpy.data.worlds.new(f"StudioWorld_{preset}")
    scene.world = world
    world.use_nodes = True
    wnodes = world.node_tree.nodes
    wlinks = world.node_tree.links
    wnodes.clear()
    
    w_out = wnodes.new('ShaderNodeOutputWorld')
    w_bg = wnodes.new('ShaderNodeBackground')
    
    if preset == 'product_dark':
        # Dark, moody studio space with subtle blue-slate ambient reflection
        w_bg.inputs['Color'].default_value = (0.02, 0.03, 0.05, 1.0)
        w_bg.inputs['Strength'].default_value = 0.5
        wlinks.new(w_bg.outputs['Background'], w_out.inputs['Surface'])
        
        # 1. Main Key Strip Softbox (Top-Front at 45°)
        add_area_light("KeyStrip", color=(1.0, 0.98, 0.94), energy=2800.0, 
                       size_x=9.0, size_y=4.5, loc=(6.0, -7.5, 8.5), 
                       rot=(math.radians(50), 0, math.radians(35)))
                       
        # 2. Rim Cyan Edge Delineator (Back-Left)
        add_area_light("RimCyan", color=(0.0, 0.95, 1.0), energy=2200.0, 
                       size_x=7.0, size_y=3.5, loc=(-8.0, 5.0, 5.5), 
                       rot=(math.radians(-40), math.radians(25), math.radians(-120)))
                       
        # 3. Fill Softbox (Low Front-Right for soft underbelly fill)
        add_area_light("FillSoftbox", color=(0.85, 0.90, 1.0), energy=900.0, 
                       size_x=6.0, size_y=5.0, loc=(8.0, -2.5, 2.0), 
                       rot=(math.radians(70), 0, math.radians(80)))
                       
        # 4. Top Overhead Slit (Linear highlight along top bevels)
        add_area_light("TopSlit", color=(1.0, 1.0, 1.0), energy=1600.0, 
                       size_x=12.0, size_y=3.0, loc=(0.0, 0.0, 10.0), 
                       rot=(0, 0, 0))
                       
        # 5. Kicker Light (Opposite back for rimming lower components)
        add_area_light("Kicker", color=(0.95, 0.98, 1.0), energy=1100.0,
                       size_x=4.0, size_y=4.0, loc=(5.0, 7.0, 4.0),
                       rot=(math.radians(-50), 0, math.radians(140)))
                       
    elif preset == 'dramatic_rim':
        w_bg.inputs['Color'].default_value = (0.01, 0.01, 0.02, 1.0)
        w_bg.inputs['Strength'].default_value = 0.2
        wlinks.new(w_bg.outputs['Background'], w_out.inputs['Surface'])
        add_area_light("RimLeft", (0.0, 0.95, 1.0), 3200.0, 8.0, 3.0, (-8.0, 4.0, 4.0), (math.radians(-40), 0, math.radians(-110)))
        add_area_light("RimRight", (1.0, 0.85, 0.5), 2800.0, 8.0, 3.0, (8.0, 4.0, 4.0), (math.radians(-40), 0, math.radians(110)))
        add_area_light("TopSlit", (1.0, 1.0, 1.0), 1200.0, 10.0, 2.0, (0.0, 0.0, 9.0), (0, 0, 0))
        add_area_light("FillLow", (0.8, 0.85, 0.9), 600.0, 6.0, 4.0, (0.0, -8.0, 1.0), (math.radians(75), 0, 0))

def add_area_light(name, color, energy, size_x, size_y, loc, rot):
    l_data = bpy.data.lights.new(name, 'AREA')
    l_data.color = color
    l_data.energy = energy
    l_data.size = size_x
    l_data.size_y = size_y
    l_obj = bpy.data.objects.new(name, l_data)
    bpy.context.scene.collection.objects.link(l_obj)
    l_obj.location = loc
    l_obj.rotation_euler = rot
    return l_obj

# -----------------------------------------------------------------------------
# 3. PBR MATERIAL FACTORY
# -----------------------------------------------------------------------------

def create_pbr_mat(name, base_color, metallic, roughness, 
                   anisotropic=0.0, transmission=0.0, ior=1.5,
                   emission_color=None, emission_strength=1.0,
                   micro_noise=True):
    """
    Creates high-fidelity Principled BSDF materials with micro-variation
    to prevent flat, synthetic CG looks.
    """
    mat = bpy.data.materials.new(name=name)
    mat.use_nodes = True
    nodes = mat.node_tree.nodes
    links = mat.node_tree.links
    bsdf = nodes.get("Principled BSDF")
    
    if bsdf:
        bsdf.inputs["Base Color"].default_value = (*base_color[:3], 1.0)
        bsdf.inputs["Metallic"].default_value = metallic
        bsdf.inputs["Roughness"].default_value = roughness
        
        if "Anisotropic" in bsdf.inputs and anisotropic > 0.0:
            bsdf.inputs["Anisotropic"].default_value = anisotropic
            
        if transmission > 0.0:
            if "Transmission Weight" in bsdf.inputs:
                bsdf.inputs["Transmission Weight"].default_value = transmission
            elif "Transmission" in bsdf.inputs:
                bsdf.inputs["Transmission"].default_value = transmission
            if "IOR" in bsdf.inputs:
                bsdf.inputs["IOR"].default_value = ior
                
        if emission_color:
            if "Emission Color" in bsdf.inputs:
                bsdf.inputs["Emission Color"].default_value = (*emission_color[:3], 1.0)
                bsdf.inputs["Emission Strength"].default_value = emission_strength
            elif "Emission" in bsdf.inputs:
                bsdf.inputs["Emission"].default_value = (*emission_color[:3], 1.0)
                
        # Subtle micro-variation bump
        if micro_noise and metallic > 0.4:
            tex_coord = nodes.new('ShaderNodeTexCoord')
            noise = nodes.new('ShaderNodeTexNoise')
            noise.inputs['Scale'].default_value = 95.0
            noise.inputs['Detail'].default_value = 4.0
            bump = nodes.new('ShaderNodeBump')
            bump.inputs['Strength'].default_value = 0.025
            links.new(tex_coord.outputs['Object'], noise.inputs['Vector'])
            links.new(noise.outputs['Fac'], bump.inputs['Height'])
            links.new(bump.outputs['Normal'], bsdf.inputs['Normal'])
            
    return mat

def get_pbr_library():
    """Returns a curated dictionary of authentic aerospace & hardware materials."""
    return {
        'titanium': create_pbr_mat('TitaniumSilver', (0.78, 0.81, 0.86), 0.95, 0.22, micro_noise=True),
        'anodized_dark': create_pbr_mat('AnodizedDark', (0.16, 0.19, 0.23), 0.90, 0.32, micro_noise=True),
        'mirror_chrome': create_pbr_mat('MirrorChrome', (0.95, 0.97, 0.99), 1.00, 0.04, micro_noise=False),
        'mirror_copper': create_pbr_mat('MirrorCopper', (0.96, 0.52, 0.22), 0.98, 0.10, micro_noise=False),
        'gold_contacts': create_pbr_mat('GoldContacts', (1.00, 0.78, 0.20), 0.98, 0.14, micro_noise=False),
        'matte_pcb': create_pbr_mat('MattePCB', (0.05, 0.07, 0.09), 0.12, 0.82, micro_noise=True),
        'silicon_die': create_pbr_mat('SiliconDie', (0.16, 0.22, 0.30), 0.95, 0.07, micro_noise=False),
        'cast_acrylic': create_pbr_mat('CastAcrylic', (0.98, 0.99, 1.0), 0.0, 0.02, transmission=0.96, ior=1.49),
        'cryo_glow': create_pbr_mat('CryoGlow', (0.0, 0.95, 1.0), 0.0, 0.12, emission_color=(0.0, 0.95, 1.0), emission_strength=4.5),
        'graphite_rubber': create_pbr_mat('GraphiteRubber', (0.08, 0.09, 0.11), 0.05, 0.75, micro_noise=True)
    }

# -----------------------------------------------------------------------------
# 4. CAD GEOMETRY GENERATORS
# -----------------------------------------------------------------------------

def add_bevel(obj, width=0.035, segments=3):
    bev = obj.modifiers.new(name="Bevel", type='BEVEL')
    bev.width = width
    bev.segments = segments
    bev.limit_method = 'ANGLE'
    bev.angle_limit = math.radians(35)
    return bev

def create_fin_stack(name, fin_count=42, width=5.2, height=2.4, thickness=0.025, span=0.65, mat=None):
    """Generates an authentic heatsink with dozens of individually separated cooling fins."""
    parent = bpy.data.objects.new(name, None)
    bpy.context.scene.collection.objects.link(parent)
    
    pitch = span / fin_count
    for i in range(fin_count):
        y_pos = -span/2.0 + i * pitch
        bpy.ops.mesh.primitive_cube_add(size=1.0, location=(0, y_pos, 0))
        fin = bpy.context.active_object
        fin.name = f"{name}_fin_{i:02d}"
        fin.scale = (width, thickness, height)
        if mat:
            fin.data.materials.append(mat)
        fin.parent = parent
        
    return parent

def create_axial_fan(name, radius=0.92, blades=9, twist_angle=26, hub_radius=0.28, mat_blade=None, mat_hub=None):
    """Constructs an aerodynamic axial fan with pitched blades and central hub."""
    fan_group = bpy.data.objects.new(name, None)
    bpy.context.scene.collection.objects.link(fan_group)
    
    # Outer shroud ring
    bpy.ops.mesh.primitive_torus_add(major_radius=radius, minor_radius=0.04, location=(0, 0, 0))
    ring = bpy.context.active_object
    ring.name = f"{name}_ring"
    if mat_blade:
        ring.data.materials.append(mat_blade)
    ring.parent = fan_group
    
    # Center Hub
    bpy.ops.mesh.primitive_cylinder_add(radius=hub_radius, depth=0.18, location=(0, 0, 0))
    hub = bpy.context.active_object
    hub.name = f"{name}_hub"
    if mat_hub:
        hub.data.materials.append(mat_hub)
    elif mat_blade:
        hub.data.materials.append(mat_blade)
    hub.parent = fan_group
    
    # Pitched Blades
    blade_length = radius - hub_radius - 0.02
    blade_geo = (blade_length, 0.03, 0.22)
    for b in range(blades):
        angle = b * (2.0 * math.pi / blades)
        dist = hub_radius + blade_length / 2.0
        bx = dist * math.cos(angle)
        by = dist * math.sin(angle)
        bpy.ops.mesh.primitive_cube_add(size=1.0, location=(bx, by, 0))
        blade = bpy.context.active_object
        blade.name = f"{name}_blade_{b}"
        blade.scale = blade_geo
        blade.rotation_euler = (math.radians(twist_angle), 0, angle)
        if mat_blade:
            blade.data.materials.append(mat_blade)
        blade.parent = fan_group
        
    return fan_group

def create_heatpipe(name, radius=0.11, length=5.4, location=(0,0,0), rot=(0, math.radians(90), 0), mat=None):
    """Creates a nickel-plated or copper heatpipe cylinder with bevels."""
    bpy.ops.mesh.primitive_cylinder_add(radius=radius, depth=length, location=location)
    hp = bpy.context.active_object
    hp.name = name
    hp.rotation_euler = rot
    if mat:
        hp.data.materials.append(mat)
    add_bevel(hp, width=radius * 0.4, segments=3)
    return hp

# -----------------------------------------------------------------------------
# 5. CAMERA & ANIMATION
# -----------------------------------------------------------------------------

def setup_camera(location=(7.5, -9.5, 6.0), rotation=(math.radians(62), 0, math.radians(38)), lens=70):
    cam_data = bpy.data.cameras.new("StudioCamera")
    cam_data.lens = lens
    cam_obj = bpy.data.objects.new("StudioCamera", cam_data)
    bpy.context.scene.collection.objects.link(cam_obj)
    bpy.context.scene.camera = cam_obj
    cam_obj.location = location
    cam_obj.rotation_euler = rotation
    return cam_obj

def animate_disassembly(layers, start_frame=1, end_frame=48):
    """
    Animates list of tuples: (obj, z_start, z_end) using natural ease-out F-curves.
    """
    for obj, z_start, z_end in layers:
        obj.location.z = z_start
        obj.keyframe_insert(data_path="location", index=2, frame=start_frame)
        obj.location.z = z_end
        obj.keyframe_insert(data_path="location", index=2, frame=end_frame)
        
        # Smooth interpolation if fcurves accessible
        if obj.animation_data and obj.animation_data.action and hasattr(obj.animation_data.action, 'fcurves'):
            for fcurve in obj.animation_data.action.fcurves:
                if fcurve.data_path == "location" and fcurve.array_index == 2:
                    for kf in fcurve.keyframe_points:
                        kf.interpolation = 'BEZIER'
                        kf.easing = 'EASE_OUT'

# -----------------------------------------------------------------------------
# 6. WEB INTERACTIVE HOTSPOT TRACKING MANIFEST
# -----------------------------------------------------------------------------

def export_sequence_manifest(manifest_path, name, frame_count, hotspots_dict, chapters_list, aspect=1.6):
    """
    Computes per-frame 2D normalized screen coordinates (x, y, visible)
    for key hardware components using world_to_camera_view.
    Saves sequence-manifest.schema.json compliant payload.
    """
    scene = bpy.context.scene
    cam = scene.camera
    
    hotspots_payload = []
    
    for hid, hmeta in hotspots_dict.items():
        obj = hmeta['object']
        label = hmeta.get('label', hid)
        track = []
        
        for f in range(1, frame_count + 1):
            scene.frame_set(f)
            # Evaluate object matrix world position
            mw = obj.matrix_world.translation
            co_2d = bpy_extras.object_utils.world_to_camera_view(scene, cam, mw)
            
            # co_2d is (x, y, depth). x: [0, 1], y: [0, 1] (0 at bottom in Blender).
            # Convert to web coordinates (0 at top):
            web_x = round(co_2d.x, 4)
            web_y = round(1.0 - co_2d.y, 4)
            visible = 1 if (0.0 <= co_2d.x <= 1.0 and 0.0 <= co_2d.y <= 1.0 and co_2d.z > 0) else 0
            
            track.append([web_x, web_y, visible])
            
        hotspots_payload.append({
            "id": hid,
            "label": label,
            "track": track
        })
        
    manifest = {
        "version": 1,
        "name": name,
        "frameCount": frame_count,
        "fps": 24,
        "aspect": aspect,
        "indexPad": 4,
        "background": "transparent",
        "sources": [
            {"width": 960, "pattern": "frames/960/frame_{index}.webp"},
            {"width": 1600, "pattern": "frames/1600/frame_{index}.webp"}
        ],
        "poster": "poster.webp",
        "chapters": chapters_list,
        "hotspots": hotspots_payload
    }
    
    os.makedirs(os.path.dirname(manifest_path), exist_ok=True)
    with open(manifest_path, "w", encoding="utf-8") as f:
        json.dump(manifest, f, indent=2)
        
    print(f"Exported interactive hotspot manifest to: {manifest_path}")
    return manifest
