#!/usr/bin/env python3
"""
Numeric & Visual Quality Audit for Rendered Frames.
Evaluates luminance, highlights clipping, shadow crushing, and contrast on object pixels (alpha-isolated).
Generates contact_sheet.png and audit_report.txt.
"""

import os
import sys
import math
from PIL import Image, ImageDraw, ImageFont

def analyze_image(img_path):
    im = Image.open(img_path).convert('RGBA')
    width, height = im.size
    pixels = im.load()
    
    lum_vals = []
    total_obj_pixels = 0
    clipped_count = 0
    crushed_count = 0
    
    for y in range(height):
        for x in range(width):
            r, g, b, a = pixels[x, y]
            if a > 20: # Object pixel threshold
                total_obj_pixels += 1
                # Standard Rec.709 perceived luminance
                lum = (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255.0
                lum_vals.append(lum)
                if lum > 0.98:
                    clipped_count += 1
                elif lum < 0.03:
                    crushed_count += 1
                    
    if total_obj_pixels == 0:
        return {
            'file': os.path.basename(img_path),
            'obj_pixels': 0,
            'mean_lum': 0.0,
            'clipped_pct': 0.0,
            'crushed_pct': 100.0,
            'std_dev': 0.0,
            'pass': False,
            'issues': ['Empty image / no object pixels']
        }
        
    mean_lum = sum(lum_vals) / total_obj_pixels
    variance = sum((v - mean_lum) ** 2 for v in lum_vals) / total_obj_pixels
    std_dev = math.sqrt(variance)
    clipped_pct = (clipped_count / total_obj_pixels) * 100.0
    crushed_pct = (crushed_count / total_obj_pixels) * 100.0
    
    issues = []
    # Quality target gates
    if not (0.20 <= mean_lum <= 0.55):
        issues.append(f"Mean luminance {mean_lum:.3f} outside [0.20, 0.55]")
    if clipped_pct > 2.0:
        issues.append(f"Clipped highlights {clipped_pct:.1f}% > 2.0%")
    if crushed_pct > 12.0:
        issues.append(f"Crushed shadows {crushed_pct:.1f}% > 12.0%")
    if std_dev < 0.11:
        issues.append(f"Contrast std {std_dev:.3f} < 0.11 (washed out)")
        
    is_pass = len(issues) == 0
    
    return {
        'file': os.path.basename(img_path),
        'obj_pixels': total_obj_pixels,
        'mean_lum': mean_lum,
        'clipped_pct': clipped_pct,
        'crushed_pct': crushed_pct,
        'std_dev': std_dev,
        'pass': is_pass,
        'issues': issues
    }

def run_audit(image_dir, out_dir=None):
    if out_dir is None:
        out_dir = image_dir
    os.makedirs(out_dir, exist_ok=True)
    
    # Search for frames
    valid_exts = ('.png', '.webp', '.jpg', '.jpeg')
    files = sorted([f for f in os.listdir(image_dir) if f.lower().endswith(valid_exts) and not f.startswith(('contact_sheet', 'poster', 'hero_still'))])
    
    if not files:
        print(f"Error: No render frames found in {image_dir}")
        return False
        
    print(f"Auditing {len(files)} frames from: {image_dir}")
    
    results = []
    for f in files:
        p = os.path.join(image_dir, f)
        res = analyze_image(p)
        results.append(res)
        
    # Aggregate statistics
    avg_lum = sum(r['mean_lum'] for r in results) / len(results)
    avg_clipped = sum(r['clipped_pct'] for r in results) / len(results)
    avg_crushed = sum(r['crushed_pct'] for r in results) / len(results)
    avg_std = sum(r['std_dev'] for r in results) / len(results)
    all_passed = all(r['pass'] for r in results)
    
    report_lines = [
        "===========================================================",
        "        BLENDER STUDIO PIPELINE — QUALITY AUDIT REPORT     ",
        "===========================================================",
        f"Directory:       {image_dir}",
        f"Total Frames:    {len(results)}",
        f"Mean Luminance:  {avg_lum:.3f}   (Target: 0.20 - 0.55)",
        f"Clipped (>0.98): {avg_clipped:.2f}%   (Target: < 2.0%)",
        f"Crushed (<0.03): {avg_crushed:.2f}%   (Target: < 12.0%)",
        f"Contrast Std:    {avg_std:.3f}   (Target: > 0.11)",
        f"Overall Status:  {'PASS [OK]' if all_passed else 'ATTENTION / REVIEW REQUIRED'}",
        "-----------------------------------------------------------",
        "SAMPLE FRAME BREAKDOWN:"
    ]
    
    # Pick 5 milestone indices
    indices = [
        0,
        len(files) // 4,
        len(files) // 2,
        (len(files) * 3) // 4,
        len(files) - 1
    ]
    # Unique sorted indices
    indices = sorted(list(set(indices)))
    sample_frames = []
    
    for idx in indices:
        r = results[idx]
        sample_frames.append((files[idx], r))
        status_sym = "[OK]" if r['pass'] else "[FAIL]"
        report_lines.append(
            f"Frame {r['file']:<16} Lum: {r['mean_lum']:.3f} | Clip: {r['clipped_pct']:4.1f}% | Crush: {r['crushed_pct']:4.1f}% | Std: {r['std_dev']:.3f} {status_sym}"
        )
        if r['issues']:
            for issue in r['issues']:
                report_lines.append(f"   ↳ Issue: {issue}")
                
    report_lines.append("===========================================================")
    report_text = "\n".join(report_lines)
    
    # Save audit_report.txt
    report_path = os.path.join(out_dir, "audit_report.txt")
    with open(report_path, "w", encoding="utf-8") as f:
        f.write(report_text)
    print(report_text)
    
    # Generate contact_sheet.png
    create_contact_sheet(image_dir, sample_frames, out_dir, avg_lum, avg_std, all_passed)
    
    return all_passed

def create_contact_sheet(image_dir, sample_frames, out_dir, avg_lum, avg_std, all_passed):
    # Load 5 sample images
    loaded = []
    for fname, meta in sample_frames:
        p = os.path.join(image_dir, fname)
        im = Image.open(p).convert('RGBA')
        loaded.append((im, fname, meta))
        
    thumb_w = 480
    thumb_h = int(thumb_w * (loaded[0][0].height / loaded[0][0].width))
    cols = len(loaded)
    padding = 24
    header_h = 100
    footer_h = 80
    
    sheet_w = cols * thumb_w + (cols + 1) * padding
    sheet_h = header_h + thumb_h + footer_h + padding * 2
    
    sheet = Image.new('RGB', (sheet_w, sheet_h), color=(11, 14, 19))
    draw = ImageDraw.Draw(sheet)
    
    # Draw Header
    title = "BLENDER STUDIO QUALITY AUDIT — CONTACT SHEET"
    status_str = "STATUS: PASS (AgX High-Contrast Verified)" if all_passed else "STATUS: REVIEW REQUIRED"
    draw.text((padding, 24), title, fill=(240, 244, 248))
    draw.text((padding, 50), f"{status_str}  |  Mean Lum: {avg_lum:.3f}  |  Contrast Std: {avg_std:.3f}", fill=(0, 240, 255) if all_passed else (255, 120, 100))
    
    # Place thumbnails
    x_cursor = padding
    y_top = header_h
    
    for im, fname, meta in loaded:
        resized = im.resize((thumb_w, thumb_h), Image.Resampling.LANCZOS)
        # Composite over dark studio slate back
        bg_card = Image.new('RGBA', (thumb_w, thumb_h), (18, 22, 29, 255))
        bg_card.alpha_composite(resized)
        
        sheet.paste(bg_card.convert('RGB'), (x_cursor, y_top))
        
        # Draw border
        border_col = (0, 240, 255) if meta['pass'] else (200, 70, 70)
        draw.rectangle([x_cursor, y_top, x_cursor + thumb_w, y_top + thumb_h], outline=border_col, width=1)
        
        # Label below
        lbl = f"{fname} (Lum {meta['mean_lum']:.2f} | Std {meta['std_dev']:.2f})"
        draw.text((x_cursor, y_top + thumb_h + 8), lbl, fill=(180, 190, 205))
        
        x_cursor += thumb_w + padding
        
    out_path = os.path.join(out_dir, "contact_sheet.png")
    sheet.save(out_path, "PNG")
    print(f"Contact sheet saved: {out_path}")

if __name__ == "__main__":
    target = sys.argv[1] if len(sys.argv) > 1 else "."
    out = sys.argv[2] if len(sys.argv) > 2 else None
    run_audit(target, out)
