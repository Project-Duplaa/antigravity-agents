---
name: data-visualization
description: Recipes for inline SVG charts, Canvas sparklines, and data visualization patterns for dashboards and financial interfaces. No heavy chart libraries required — pure SVG and Canvas 2D.
---

# Data Visualization Patterns

> **Purpose:** Concrete recipes for embedding charts, sparklines, and data visualizations into premium interfaces using only inline SVG and Canvas 2D. No Chart.js, no D3, no heavy libraries.

---

## 1. SVG Sparkline (Inline, Lightweight)

A tiny trend line for embedding next to metrics. ~50 bytes of SVG.

```html
<div class="flex items-center gap-3">
    <span class="text-2xl font-serif text-white">$4.2B</span>
    <svg width="80" height="24" viewBox="0 0 80 24" fill="none" class="text-emerald-400">
        <polyline 
            points="0,20 10,18 20,15 30,16 40,12 50,10 60,8 70,6 80,4" 
            stroke="currentColor" 
            stroke-width="1.5" 
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
        />
        <!-- Optional: Area fill under the line -->
        <linearGradient id="spark-fill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="currentColor" stop-opacity="0.2"/>
            <stop offset="100%" stop-color="currentColor" stop-opacity="0"/>
        </linearGradient>
        <polygon 
            points="0,20 10,18 20,15 30,16 40,12 50,10 60,8 70,6 80,4 80,24 0,24" 
            fill="url(#spark-fill)"
        />
    </svg>
    <span class="text-xs text-emerald-400">+12.4%</span>
</div>
```

**Use for:** Inline metric trends, table cell mini-charts, header KPIs.

---

## 2. SVG Donut / Ring Chart

For allocation breakdowns and progress indicators.

```html
<div class="relative w-32 h-32">
    <svg viewBox="0 0 36 36" class="w-full h-full -rotate-90">
        <!-- Background Ring -->
        <circle cx="18" cy="18" r="15.5" fill="none" stroke="rgba(255,255,255,0.1)" stroke-width="2"/>
        <!-- Segment 1: 60% -->
        <circle cx="18" cy="18" r="15.5" fill="none" stroke="#C5A358" stroke-width="2"
            stroke-dasharray="60 40" stroke-dashoffset="0" class="transition-all duration-1000"/>
        <!-- Segment 2: 25% -->
        <circle cx="18" cy="18" r="15.5" fill="none" stroke="#34d399" stroke-width="2"
            stroke-dasharray="25 75" stroke-dashoffset="-60" class="transition-all duration-1000"/>
        <!-- Segment 3: 15% -->
        <circle cx="18" cy="18" r="15.5" fill="none" stroke="#8B8D98" stroke-width="2"
            stroke-dasharray="15 85" stroke-dashoffset="-85" class="transition-all duration-1000"/>
    </svg>
    <!-- Center Label -->
    <div class="absolute inset-0 flex flex-col items-center justify-center">
        <span class="text-2xl font-serif text-white">$4.2B</span>
        <span class="text-[10px] text-slate-500 uppercase tracking-widest">Total AUM</span>
    </div>
</div>
```

---

## 3. SVG Horizontal Bar Chart

For comparing values across categories.

```html
<div class="space-y-4">
    <!-- Bar Item -->
    <div>
        <div class="flex justify-between text-xs mb-1">
            <span class="text-slate-400">Private Equity</span>
            <span class="text-white font-mono">$2.1B</span>
        </div>
        <div class="h-2 bg-white/5 w-full">
            <div class="h-full bg-amber-500 transition-all duration-1000" style="width: 65%"></div>
        </div>
    </div>
    <!-- Bar Item -->
    <div>
        <div class="flex justify-between text-xs mb-1">
            <span class="text-slate-400">Real Estate</span>
            <span class="text-white font-mono">$1.4B</span>
        </div>
        <div class="h-2 bg-white/5 w-full">
            <div class="h-full bg-emerald-500 transition-all duration-1000" style="width: 42%"></div>
        </div>
    </div>
    <!-- Bar Item -->
    <div>
        <div class="flex justify-between text-xs mb-1">
            <span class="text-slate-400">Venture Capital</span>
            <span class="text-white font-mono">$0.7B</span>
        </div>
        <div class="h-2 bg-white/5 w-full">
            <div class="h-full bg-slate-400 transition-all duration-1000" style="width: 21%"></div>
        </div>
    </div>
</div>
```

---

## 4. Canvas 2D Area Chart (60fps)

For larger trend visualizations. Renders smooth curves on a Canvas element.

```html
<canvas id="area-chart" class="w-full h-48 border border-white/10 bg-black/20"></canvas>
<script>
(function() {
    const canvas = document.getElementById('area-chart');
    const ctx = canvas.getContext('2d');
    const dpr = window.devicePixelRatio || 1;
    
    function resize() {
        const rect = canvas.getBoundingClientRect();
        canvas.width = rect.width * dpr;
        canvas.height = rect.height * dpr;
        ctx.scale(dpr, dpr);
    }
    resize();
    
    // Sample data points (12 months)
    const data = [120, 135, 128, 142, 155, 148, 162, 175, 168, 180, 195, 210];
    const max = Math.max(...data) * 1.1;
    const w = canvas.getBoundingClientRect().width;
    const h = canvas.getBoundingClientRect().height;
    const stepX = w / (data.length - 1);
    
    // Draw grid lines
    ctx.strokeStyle = 'rgba(255,255,255,0.05)';
    ctx.lineWidth = 1;
    for(let i = 0; i < 4; i++) {
        const y = (h / 4) * i;
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(w, y);
        ctx.stroke();
    }
    
    // Draw area fill
    const gradient = ctx.createLinearGradient(0, 0, 0, h);
    gradient.addColorStop(0, 'rgba(197, 163, 88, 0.15)');
    gradient.addColorStop(1, 'rgba(197, 163, 88, 0)');
    
    ctx.beginPath();
    ctx.moveTo(0, h);
    data.forEach((val, i) => {
        ctx.lineTo(i * stepX, h - (val / max) * h);
    });
    ctx.lineTo(w, h);
    ctx.closePath();
    ctx.fillStyle = gradient;
    ctx.fill();
    
    // Draw line
    ctx.beginPath();
    data.forEach((val, i) => {
        const x = i * stepX;
        const y = h - (val / max) * h;
        i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
    });
    ctx.strokeStyle = '#C5A358';
    ctx.lineWidth = 2;
    ctx.stroke();
    
    // Draw endpoint dot
    const lastX = (data.length - 1) * stepX;
    const lastY = h - (data[data.length - 1] / max) * h;
    ctx.beginPath();
    ctx.arc(lastX, lastY, 4, 0, Math.PI * 2);
    ctx.fillStyle = '#C5A358';
    ctx.fill();
})();
</script>
```

---

## 5. Status Indicator Patterns

```html
<!-- Live Pulse (Safe 2Hz - WCAG compliant) -->
<span class="flex items-center gap-2 text-xs">
    <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
    Operational
</span>

<!-- Static Badge -->
<span class="inline-flex items-center gap-1.5 px-2 py-0.5 text-[10px] uppercase tracking-widest bg-amber-500/10 text-amber-500 border border-amber-500/20">
    Pending
</span>

<!-- Progress Bar (Determinate) -->
<div class="h-1 w-full bg-white/10 overflow-hidden">
    <div class="h-full bg-amber-500 transition-all duration-500" style="width: 72%"></div>
</div>
```

---

## Integration Rules
1. **Sparklines** go next to metric numbers, never alone.
2. **Donut charts** are for allocation/composition only (max 4 segments).
3. **Bar charts** are for comparison across categories.
4. **Area charts** are for time-series trends.
5. All charts use the project's color tokens — never introduce new colors.
6. Sharp corners on all chart containers (no rounded-2xl).
7. Grid lines are `rgba(255,255,255,0.05)` — barely visible.
