---
name: component-patterns
description: Reusable HTML/CSS/Tailwind component blueprints for common UI patterns. Agents copy and customize these instead of reinventing from scratch. Covers data tables, sidebars, metric cards, modals, steppers, and notification panels.
---

# Component Pattern Library

> **Purpose:** Concrete, copy-paste-ready HTML/Tailwind snippets for the most common UI components. Every agent producing frontend code MUST reference this library before building custom components.

---

## 1. Architectural Masthead (NOT a floating pill navbar)

```html
<header class="fixed top-0 w-full z-50 bg-[#030712] border-b border-white/10 px-8 py-4 flex items-center justify-between">
    <div class="flex items-center gap-8">
        <div class="font-serif text-2xl tracking-tight">BrandName</div>
        <nav class="flex items-center gap-6 text-sm text-slate-400">
            <a href="#" class="text-white">Active</a>
            <a href="#" class="hover:text-white transition-colors">Link</a>
        </nav>
    </div>
    <div class="flex items-center gap-4 text-xs text-slate-500 uppercase tracking-widest font-mono">
        <span class="flex items-center gap-2">
            <span class="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
            OPERATIONAL
        </span>
    </div>
</header>
```

**Rules:** Solid background, hard border-bottom. Never rounded, never floating, never translucent pill.

---

## 2. Sidebar (Workspace Shell)

```html
<aside class="fixed left-0 top-[65px] bottom-0 w-60 bg-[#030712] border-r border-white/10 py-6 px-4 flex flex-col justify-between">
    <nav class="space-y-1">
        <!-- Active item -->
        <a href="#" class="flex items-center gap-3 px-3 py-2.5 text-sm text-white bg-white/5 border-l-2 border-amber-500">
            <i class="ph-fill ph-squares-four text-lg"></i> Dashboard
        </a>
        <!-- Inactive item -->
        <a href="#" class="flex items-center gap-3 px-3 py-2.5 text-sm text-slate-400 hover:text-white hover:bg-white/5 transition-colors border-l-2 border-transparent">
            <i class="ph-duotone ph-bank text-lg"></i> Capital Calls
        </a>
    </nav>
    <div class="text-[10px] text-slate-600 uppercase tracking-widest">v1.0.4</div>
</aside>
```

**Rules:** Fixed left, solid bg, border-right. Active state uses border-left accent + fill icon weight. Never floating, never collapsible drawer on desktop.

---

## 3. Dense Data Table

```html
<div class="border border-white/10 bg-black/20 overflow-x-auto">
    <table class="w-full text-left text-sm">
        <thead class="bg-white/5 border-b border-white/10">
            <tr class="text-[10px] text-slate-500 uppercase tracking-widest">
                <th class="px-6 py-4 font-normal">Entity</th>
                <th class="px-6 py-4 font-normal text-right">Amount</th>
                <th class="px-6 py-4 font-normal text-center">Status</th>
            </tr>
        </thead>
        <tbody class="divide-y divide-white/5">
            <tr class="hover:bg-white/5 transition-colors">
                <td class="px-6 py-4 text-white font-medium">Row Data</td>
                <td class="px-6 py-4 text-right text-white font-mono">$1,000,000</td>
                <td class="px-6 py-4 text-center">
                    <span class="inline-flex items-center gap-1.5 text-xs text-emerald-400">
                        <span class="w-1.5 h-1.5 rounded-full bg-emerald-400"></span> Active
                    </span>
                </td>
            </tr>
        </tbody>
    </table>
</div>
```

**Rules:** Sharp borders (never rounded), proper thead/tbody semantics, hover row highlight. Never use cards for tabular data.

---

## 4. Asymmetric Bento Grid

```html
<div class="grid grid-cols-1 md:grid-cols-3 gap-6">
    <!-- Large Card (Span 2) -->
    <div class="md:col-span-2 p-8 bg-white/5 border border-white/10 hover:border-amber-500/40 transition-colors">
        <!-- Content -->
    </div>
    <!-- Small Card (Span 1) -->
    <div class="md:col-span-1 p-8 bg-white/5 border border-white/10">
        <!-- Content -->
    </div>
</div>
```

**Rules:** NEVER three equal cards. Always vary col-span. First card dominates visually.

---

## 5. FSM / Stepper Timeline

```html
<div class="flex items-center gap-0 w-full">
    <!-- Completed Step -->
    <div class="flex items-center gap-2">
        <div class="w-8 h-8 bg-emerald-500/20 border border-emerald-500 flex items-center justify-center">
            <i class="ph-bold ph-check text-emerald-400 text-sm"></i>
        </div>
        <span class="text-xs text-emerald-400 uppercase tracking-widest">Draft</span>
    </div>
    <div class="flex-1 h-px bg-emerald-500/50"></div>
    
    <!-- Active Step -->
    <div class="flex items-center gap-2">
        <div class="w-8 h-8 bg-amber-500/20 border border-amber-500 flex items-center justify-center animate-pulse">
            <span class="w-2 h-2 rounded-full bg-amber-500"></span>
        </div>
        <span class="text-xs text-amber-400 uppercase tracking-widest font-bold">Called</span>
    </div>
    <div class="flex-1 h-px bg-white/10"></div>
    
    <!-- Pending Step -->
    <div class="flex items-center gap-2">
        <div class="w-8 h-8 bg-white/5 border border-white/10 flex items-center justify-center">
            <span class="text-[10px] text-slate-500">3</span>
        </div>
        <span class="text-xs text-slate-500 uppercase tracking-widest">Escrow</span>
    </div>
</div>
```

**Rules:** Square step indicators (not circles). Color progression: emerald (done), amber (active), slate (pending). Connecting lines between steps.

---

## 6. Metric Card (NOT an image card)

```html
<div class="p-6 bg-white/5 border border-white/10 hover:border-white/20 transition-colors group">
    <div class="flex justify-between items-start mb-4">
        <span class="text-[10px] text-slate-500 uppercase tracking-widest">Metric Label</span>
        <i class="ph-duotone ph-trend-up text-xl text-slate-500 group-hover:text-amber-500 transition-colors"></i>
    </div>
    <div class="text-3xl font-serif text-white mb-1">$4.2B</div>
    <div class="text-xs text-emerald-400">+2.1% vs Q2</div>
</div>
```

**Rules:** Pure typography and numbers. Never put images, illustrations, or decorative graphics inside metric cards.

---

## 7. Confirmation Modal

```html
<div class="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100] flex items-center justify-center">
    <div class="bg-[#030712] border border-amber-500 p-8 max-w-md w-full shadow-[0_0_50px_rgba(197,163,88,0.15)]">
        <div class="flex items-center gap-3 mb-6">
            <i class="ph-duotone ph-warning-circle text-3xl text-amber-500"></i>
            <h3 class="text-2xl font-serif text-white">Confirm Action</h3>
        </div>
        <p class="text-sm text-slate-400 mb-8 leading-relaxed">Description of the action.</p>
        <div class="flex justify-end gap-4">
            <button class="px-6 py-2 border border-white/10 text-white text-xs uppercase tracking-widest hover:bg-white/5">Cancel</button>
            <button class="px-6 py-2 bg-amber-500 text-black font-bold text-xs uppercase tracking-widest hover:bg-amber-400">Confirm</button>
        </div>
    </div>
</div>
```

**Rules:** Sharp borders, no rounded corners. Amber border accent on the modal container. Dark backdrop with blur.

---

## 8. Notification / Alert Item

```html
<div class="flex items-start gap-4 px-4 py-3 border-b border-white/5 hover:bg-white/5 transition-colors">
    <div class="w-8 h-8 bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center flex-shrink-0 mt-0.5">
        <i class="ph-duotone ph-check text-emerald-400"></i>
    </div>
    <div class="flex-1 min-w-0">
        <p class="text-sm text-white font-medium">Wire UETR-97e9 cleared</p>
        <p class="text-xs text-slate-500 mt-0.5">Aurelius Real Estate Fund IV — $2,000,000</p>
    </div>
    <span class="text-[10px] text-slate-600 whitespace-nowrap">3h ago</span>
</div>
```
