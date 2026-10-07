#!/usr/bin/env python3
"""
Encodes and optimizes sequence frames to WebP in responsive sizes (e.g. 960px, 1600px).
Generates poster.webp fallback.
"""

import os
import sys
from PIL import Image

def encode_sequence(src_dir, out_dir, widths=[960, 1600], quality=86):
    os.makedirs(out_dir, exist_ok=True)
    
    # Collect png or webp frames
    raw_files = sorted([f for f in os.listdir(src_dir) if f.startswith("frame_") and f.lower().endswith(('.png', '.webp'))])
    if not raw_files:
        print(f"No frames starting with 'frame_' found in {src_dir}")
        return False
        
    print(f"Found {len(raw_files)} frames to encode.")
    
    for w in widths:
        w_dir = os.path.join(out_dir, "frames", str(w))
        os.makedirs(w_dir, exist_ok=True)
        print(f"Encoding width {w}px into {w_dir}...")
        
        for f in raw_files:
            src_path = os.path.join(src_dir, f)
            with Image.open(src_path) as im:
                aspect = im.height / im.width
                target_h = int(w * aspect)
                resized = im.resize((w, target_h), Image.Resampling.LANCZOS)
                
                # Base index name: frame_0001.webp
                base_name = os.path.splitext(f)[0] + ".webp"
                dest_path = os.path.join(w_dir, base_name)
                resized.save(dest_path, "WEBP", quality=quality, method=5)
                
    # Create poster.webp from frame 1 (or mid frame)
    poster_src = os.path.join(src_dir, raw_files[0])
    poster_dest = os.path.join(out_dir, "poster.webp")
    with Image.open(poster_src) as im:
        aspect = im.height / im.width
        poster_resized = im.resize((1280, int(1280 * aspect)), Image.Resampling.LANCZOS)
        poster_resized.save(poster_dest, "WEBP", quality=90, method=5)
    print(f"Poster generated at: {poster_dest}")
    
    return True

if __name__ == "__main__":
    src = sys.argv[1] if len(sys.argv) > 1 else "."
    dest = sys.argv[2] if len(sys.argv) > 2 else os.path.join(src, "dist")
    encode_sequence(src, dest)
