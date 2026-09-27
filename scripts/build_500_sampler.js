import fs from 'fs';
import path from 'path';
import { palettes } from './data/palettes.js';
import { typography } from './data/typography.js';
import { buttons } from './data/buttons.js';
import { cards } from './data/cards.js';
import { menus } from './data/menus.js';
import { metrics } from './data/metrics.js';
import { timelines } from './data/timelines.js';
import { tables } from './data/tables.js';
import { inputs } from './data/inputs.js';
import { modals } from './data/modals.js';

console.log('Compilando Mega Catálogo Studio de 500 componentes...');

const categories = [
  { id: 'palettes', name: 'Paletas Cromáticas & Atmósferas', icon: 'ph-palette', count: palettes.length, data: palettes },
  { id: 'typography', name: 'Tríos Tipográficos Curados', icon: 'ph-text-aa', count: typography.length, data: typography },
  { id: 'buttons', name: 'Botones & Interacciones Táctiles', icon: 'ph-cursor-click', count: buttons.length, data: buttons },
  { id: 'cards', name: 'Cards, Superficies & Elevación', icon: 'ph-cards', count: cards.length, data: cards },
  { id: 'menus', name: 'Menús & Sistemas de Navegación', icon: 'ph-compass', count: menus.length, data: menus },
  { id: 'metrics', name: 'Widgets de Métricas & KPIs', icon: 'ph-chart-line-up', count: metrics.length, data: metrics },
  { id: 'timelines', name: 'Líneas de Tiempo, Horizontes & Feeds', icon: 'ph-hourglass', count: timelines.length, data: timelines },
  { id: 'tables', name: 'Tablas & Listas de Datos', icon: 'ph-table', count: tables.length, data: tables },
  { id: 'inputs', name: 'Inputs, Selectores & Formularios', icon: 'ph-keyboard', count: inputs.length, data: inputs },
  { id: 'modals', name: 'Modales, Overlays & Notificaciones', icon: 'ph-browsers', count: modals.length, data: modals },
];

function renderCard(catId, item) {
  const tagsHtml = (item.tags || []).map(t => `<span class="tag-pill text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-slate-400 border border-white/10 hover:border-amber-400 hover:text-amber-300 transition-colors cursor-pointer" onclick="filterByTag('${t}', event)">${t}</span>`).join(' ');

  let previewHtml = '';

  if (catId === 'palettes') {
    const chips = (item.chips || []).map(c => `<div class="h-6 flex-1 rounded-sm border border-white/10 shadow-sm" style="background-color: ${c}" title="${c}"></div>`).join('');
    previewHtml = `
      <div class="p-3 rounded-lg border border-white/10 mb-3 space-y-2" style="background-color: ${item.bg}">
        <div class="flex gap-1.5">${chips}</div>
        <div class="flex justify-between items-center text-[10px] font-mono pt-1">
          <span style="color: ${item.primary}" class="font-bold">■ ${item.primary}</span>
          <span style="color: ${item.accent}">▲ ${item.accent}</span>
          <span style="color: ${item.text}">● ${item.badge || 'PRO'}</span>
        </div>
      </div>
    `;
  } else if (catId === 'typography') {
    previewHtml = `
      <div class="p-4 rounded-lg bg-black/60 border border-white/10 mb-3 space-y-2">
        <div class="text-sm font-bold text-white tracking-wide" style="font-family: '${item.display}', serif">${item.headline}</div>
        <p class="text-xs text-slate-300 leading-relaxed" style="font-family: '${item.body}', sans-serif">${item.paragraph}</p>
        <div class="pt-2 border-t border-white/10 flex justify-between items-center text-[10px] font-mono text-amber-400">
          <span class="px-1.5 py-0.5 rounded bg-amber-400/10 border border-amber-400/20">${item.badge}</span>
          <span class="text-slate-400 truncate max-w-[140px]" style="font-family: '${item.mono}', monospace">${item.monoSample}</span>
        </div>
      </div>
    `;
  } else {
    previewHtml = `
      <div class="p-4 rounded-lg bg-black/50 border border-white/10 mb-3 flex items-center justify-center min-h-[90px] overflow-hidden">
        ${item.html}
      </div>
    `;
  }

  return `
    <div class="sample-card p-4 rounded-xl flex flex-col justify-between" 
         id="${item.id}"
         data-category="${catId}" 
         data-id="${item.id}"
         data-num="${item.num}"
         data-name="${item.name.replace(/"/g, '&quot;')}"
         data-tags="${(item.tags || []).join(' ')}"
         onclick="selectComponent('${catId}', '${item.id}')">
      
      <div>
        <div class="flex justify-between items-start mb-2.5">
          <span class="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-white/10 text-slate-300 border border-white/15">
            #${item.num}
          </span>
          <span class="check-badge w-6 h-6 rounded-full bg-amber-400 text-black flex items-center justify-center font-bold text-xs shadow-md">
            <i class="ph-bold ph-check"></i>
          </span>
        </div>

        <h4 class="text-xs font-bold text-white tracking-wide mb-1 font-sans">${item.name}</h4>
        <p class="text-[11px] text-slate-400 leading-relaxed mb-3 line-clamp-2">${item.desc || ''}</p>

        ${previewHtml}
      </div>

      <div class="pt-3 border-t border-white/10 flex items-center justify-between mt-auto">
        <div class="flex flex-wrap gap-1 max-w-[170px] overflow-hidden">
          ${tagsHtml}
        </div>
        <button class="px-2.5 py-1 rounded text-[11px] font-semibold bg-white/5 hover:bg-amber-400 hover:text-black border border-white/15 text-slate-300 transition-colors">
          Seleccionar
        </button>
      </div>
    </div>
  `;
}

let sectionsHtml = '';
for (const cat of categories) {
  const cardsHtml = cat.data.map(item => renderCard(cat.id, item)).join('\n');
  sectionsHtml += `
    <section id="section-${cat.id}" class="category-section mb-16 scroll-mt-28" data-category="${cat.id}">
      <div class="flex flex-col md:flex-row md:items-center justify-between pb-4 mb-6 border-b border-white/10 gap-3">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-xl bg-amber-400/15 border border-amber-400/40 text-amber-300 flex items-center justify-center text-xl">
            <i class="ph-bold ${cat.icon}"></i>
          </div>
          <div>
            <h2 class="text-lg md:text-xl font-bold text-white tracking-wide">${cat.name}</h2>
            <p class="text-xs text-slate-400">Catálogo curado con ${cat.count} opciones visuales interactivas probadas.</p>
          </div>
        </div>
        <div class="flex items-center gap-2">
          <span class="px-3 py-1 rounded-full text-xs font-mono font-bold bg-slate-900 border border-slate-700 text-amber-400">
            ${cat.count} OPCIONES
          </span>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        ${cardsHtml}
      </div>
    </section>
  `;
}

const tabsHtml = categories.map(cat => `
  <button class="cat-tab px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-600 flex items-center gap-1.5"
          data-category="${cat.id}"
          onclick="filterCategory('${cat.id}')">
    <i class="ph-bold ${cat.icon}"></i>
    <span>${cat.name.split('&')[0].trim()}</span>
    <span class="text-[10px] font-mono text-slate-500 font-bold ml-1">50</span>
  </button>
`).join('\n');

const fullHtml = `<!DOCTYPE html>
<html lang="es" class="scroll-smooth">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Super Design Matrix & Component Studio — 500 UI Options</title>
    
    <!-- Google Fonts: Editorial & Display Palette -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Bodoni+Moda:ital,opsz,wght@0,6..96,400;0,6..96,600;0,6..96,700;1,6..96,400&family=Cinzel:wght@500;700;800;900&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,400;0,9..144,600;0,9..144,700;1,9..144,400&family=IBM+Plex+Mono:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&family=Outfit:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400;1,600&family=Plus+Jakarta+Sans:wght@400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&family=Space+Mono:ital,wght@0,400;0,700;1,400&family=Syne:wght@500;600;700;800&family=Unbounded:wght@400;600;700;800&display=swap" rel="stylesheet">
    
    <!-- Phosphor Icons -->
    <script src="https://unpkg.com/@phosphor-icons/web"></script>
    
    <!-- Tailwind CSS CDN -->
    <script src="https://cdn.tailwindcss.com"></script>

    <style>
        body {
            background-color: #05070B;
            color: #E6EDF3;
            font-family: 'DM Sans', sans-serif;
        }

        /* Biseles Geométricos */
        .clip-bevel-sm { clip-path: polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px)); }
        .clip-bevel { clip-path: polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px)); }
        .clip-notch { clip-path: polygon(0 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%); }

        /* Tarjeta interactiva con selección */
        .sample-card {
            transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
            position: relative;
            cursor: pointer;
            background-color: #0A0F17;
            border: 1px solid rgba(255, 255, 255, 0.07);
        }
        .sample-card:hover {
            transform: translateY(-2px);
            border-color: rgba(255, 255, 255, 0.22) !important;
            box-shadow: 0 10px 25px -10px rgba(0, 0, 0, 0.6);
        }
        .sample-card.selected {
            border-color: #F59E0B !important;
            box-shadow: 0 0 0 1.5px #F59E0B, 0 14px 35px -10px rgba(245, 158, 11, 0.3);
            background-color: #0E1622 !important;
        }
        .sample-card.selected .check-badge {
            opacity: 1;
            transform: scale(1);
        }

        .check-badge {
            opacity: 0;
            transform: scale(0.6);
            transition: all 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        .btn-tactile:active {
            transform: scale(0.97) translateY(1px);
        }

        /* Cuadrícula de fondo */
        .bg-grid-mesh {
            background-size: 32px 32px;
            background-image: 
                linear-gradient(to right, rgba(255, 255, 255, 0.02) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(255, 255, 255, 0.02) 1px, transparent 1px);
        }
        .bg-dots-pattern {
            background-image: radial-gradient(rgba(255, 255, 255, 0.08) 1px, transparent 1px);
            background-size: 16px 16px;
        }

        /* Pestaña activa */
        .cat-tab.active {
            background-color: #F59E0B !important;
            color: #000000 !important;
            border-color: #F59E0B !important;
            font-weight: 700;
        }
        .cat-tab.active span {
            color: #000000 !important;
        }
    </style>
</head>
<body class="min-h-screen pb-32 bg-grid-mesh selection:bg-amber-400 selection:text-black">

    <!-- Top Floating Announcement Bar -->
    <div class="w-full bg-[#080B10] border-b border-white/10 px-4 py-2 text-xs font-mono flex items-center justify-between text-slate-400">
        <div class="flex items-center gap-3">
            <span class="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
            <span class="text-white font-bold">STUDIO EDITION v2.5</span>
            <span class="text-slate-600">|</span>
            <span class="text-amber-400 font-bold">500 OPCIONES VISUALES (50 POR CATEGORÍA)</span>
        </div>
        <div class="flex items-center gap-4">
            <span class="text-slate-400 hidden sm:inline">LOOP 0: SELECCIÓN PREVIA OBLIGATORIA</span>
            <span class="text-emerald-400">STATUS: SOBERANO</span>
        </div>
    </div>

    <!-- Main Header -->
    <header class="max-w-7xl mx-auto px-4 sm:px-6 pt-10 pb-6">
        <div class="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-white/10">
            <div class="space-y-2">
                <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-amber-400/10 text-amber-300 border border-amber-400/30">
                    <i class="ph-bold ph-magic-wand"></i>
                    <span>CATÁLOGO MAESTRO 500 COMPONENTES</span>
                </div>
                <h1 class="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight">
                    Super Studio Matrix & Visual DNA
                </h1>
                <p class="text-sm sm:text-base text-slate-400 max-w-2xl leading-relaxed">
                    Escoge exactamente la atmósfera cromática, tipografía, botones, cards, navegación, KPIs, timelines, tablas, inputs y modales. Haz clic en tus favoritos para ensamblar tu interfaz antes de programar una sola línea de backend.
                </p>
            </div>

            <div class="flex flex-wrap items-center gap-3">
                <button onclick="openAssembledModal()" class="px-5 py-3 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-black font-bold text-xs tracking-wider uppercase shadow-lg shadow-amber-400/20 flex items-center gap-2 transition-all">
                    <i class="ph-bold ph-lightning text-base"></i>
                    <span>Ver Interfaz Ensamblada</span>
                </button>
                <button onclick="toggleDrawer()" class="px-5 py-3 rounded-xl bg-slate-900 border border-slate-700 hover:border-slate-500 text-white font-bold text-xs tracking-wider uppercase flex items-center gap-2 transition-all">
                    <i class="ph-bold ph-clipboard-text text-amber-400 text-base"></i>
                    <span id="drawer-counter-btn">Mi Selección (10/10)</span>
                </button>
            </div>
        </div>

        <!-- Real-Time Search & Tag Filters -->
        <div class="pt-6 space-y-4">
            <div class="flex flex-col md:flex-row gap-3 items-center">
                <div class="relative w-full md:flex-1">
                    <i class="ph-bold ph-magnifying-glass absolute left-3.5 top-3.5 text-slate-400 text-base"></i>
                    <input type="text" id="catalog-search" 
                           placeholder="Buscar entre los 500 componentes (ej. #gold, #brutalist, #glass, #mono, #sovereign)..." 
                           oninput="onSearchInput(this.value)"
                           class="w-full bg-slate-900/90 border border-slate-800 rounded-xl pl-10 pr-10 py-3 text-sm text-white placeholder-slate-500 outline-none focus:border-amber-400 transition-colors shadow-inner">
                    <button onclick="clearSearch()" id="clear-search-btn" class="hidden absolute right-3.5 top-3.5 text-slate-400 hover:text-white">
                        <i class="ph-bold ph-x-circle text-base"></i>
                    </button>
                </div>
                <div class="flex items-center gap-2 w-full md:w-auto justify-between text-xs font-mono text-slate-400">
                    <span id="results-count" class="font-bold text-amber-400">Mostrando 500 de 500</span>
                    <button onclick="filterCategory('all')" class="text-xs text-slate-400 hover:text-white underline">Restablecer</button>
                </div>
            </div>

            <!-- Quick Filter Chips -->
            <div class="flex flex-wrap gap-1.5 items-center text-xs">
                <span class="text-slate-500 font-mono text-[10px] mr-1">TAGS POPULARES:</span>
                <button onclick="filterByTag('#gold')" class="px-2.5 py-1 rounded-full bg-amber-400/10 text-amber-300 border border-amber-400/30 hover:bg-amber-400 hover:text-black transition-colors font-mono text-[10px]">#gold</button>
                <button onclick="filterByTag('#brutalist')" class="px-2.5 py-1 rounded-full bg-slate-900 text-slate-300 border border-slate-700 hover:border-white transition-colors font-mono text-[10px]">#brutalist</button>
                <button onclick="filterByTag('#glass')" class="px-2.5 py-1 rounded-full bg-slate-900 text-slate-300 border border-slate-700 hover:border-white transition-colors font-mono text-[10px]">#glass</button>
                <button onclick="filterByTag('#cyberpunk')" class="px-2.5 py-1 rounded-full bg-slate-900 text-slate-300 border border-slate-700 hover:border-white transition-colors font-mono text-[10px]">#cyberpunk</button>
                <button onclick="filterByTag('#sovereign')" class="px-2.5 py-1 rounded-full bg-slate-900 text-slate-300 border border-slate-700 hover:border-white transition-colors font-mono text-[10px]">#sovereign</button>
                <button onclick="filterByTag('#mono')" class="px-2.5 py-1 rounded-full bg-slate-900 text-slate-300 border border-slate-700 hover:border-white transition-colors font-mono text-[10px]">#mono</button>
                <button onclick="filterByTag('#clean')" class="px-2.5 py-1 rounded-full bg-slate-900 text-slate-300 border border-slate-700 hover:border-white transition-colors font-mono text-[10px]">#clean</button>
                <button onclick="filterByTag('#tactical')" class="px-2.5 py-1 rounded-full bg-slate-900 text-slate-300 border border-slate-700 hover:border-white transition-colors font-mono text-[10px]">#tactical</button>
                <button onclick="filterByTag('#minimal')" class="px-2.5 py-1 rounded-full bg-slate-900 text-slate-300 border border-slate-700 hover:border-white transition-colors font-mono text-[10px]">#minimal</button>
            </div>
        </div>

        <!-- Category Navigation Tabs (10 Categories) -->
        <div class="pt-6 overflow-x-auto pb-2 scrollbar-none flex gap-2">
            <button class="cat-tab active px-4 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all bg-amber-400 text-black border border-amber-400 flex items-center gap-1.5"
                    data-category="all"
                    onclick="filterCategory('all')">
                <i class="ph-bold ph-squares-four"></i>
                <span>Todas las Categorías</span>
                <span class="text-[10px] font-mono text-black font-bold ml-1">500</span>
            </button>
            ${tabsHtml}
        </div>
    </header>

    <!-- Main Content Grid with 10 Sections -->
    <main class="max-w-7xl mx-auto px-4 sm:px-6 pt-6">
        ${sectionsHtml}
    </main>

    <!-- Floating Selection Drawer (Bottom Sticky) -->
    <div id="selection-drawer" class="fixed bottom-0 inset-x-0 bg-[#070A0F]/95 border-t border-amber-500/40 backdrop-blur-2xl p-4 sm:p-5 shadow-[0_-10px_35px_rgba(0,0,0,0.8)] z-40 transition-transform duration-300">
        <div class="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
            <div class="flex items-center gap-4 w-full md:w-auto">
                <div class="w-10 h-10 rounded-xl bg-amber-400 text-black flex items-center justify-center font-bold text-lg shadow-lg shadow-amber-400/30">
                    <i class="ph-bold ph-palette"></i>
                </div>
                <div>
                    <h4 class="text-sm font-bold text-white font-serif flex items-center gap-2">
                        <span>Tu ADN Visual Seleccionado</span>
                        <span id="selected-badge" class="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-amber-400/20 text-amber-300 border border-amber-400/40">10 / 10 SELECCIONADOS</span>
                    </h4>
                    <p id="selection-summary-text" class="text-xs text-slate-400 truncate max-w-xl">
                        Cargando selecciones por defecto...
                    </p>
                </div>
            </div>

            <div class="flex items-center gap-3 w-full md:w-auto justify-end">
                <button onclick="openAssembledModal()" class="px-4 py-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-amber-400 border border-amber-400/40 font-semibold text-xs flex items-center gap-2 transition-colors">
                    <i class="ph-bold ph-eye"></i>
                    <span>Probar Ensamblada</span>
                </button>
                <button onclick="copySelectionToChat()" class="px-5 py-2.5 rounded-lg bg-amber-400 hover:bg-amber-300 text-black font-bold text-xs tracking-wider uppercase shadow-lg shadow-amber-400/20 flex items-center gap-2 transition-all">
                    <i class="ph-bold ph-copy"></i>
                    <span>Copiar Elección al Chat</span>
                </button>
            </div>
        </div>
    </div>

    <!-- Live Assembled Modal (⚡ Ver Interfaz Ensamblada) -->
    <div id="assembled-modal" class="fixed inset-0 bg-black/85 backdrop-blur-md z-50 hidden flex items-center justify-center p-4">
        <div class="bg-[#090C12] border border-amber-500/40 rounded-2xl w-full max-w-5xl max-h-[90vh] overflow-hidden flex flex-col shadow-2xl">
            <!-- Modal Header -->
            <div class="p-4 bg-slate-950 border-b border-white/10 flex justify-between items-center">
                <div class="flex items-center gap-2">
                    <span class="w-3 h-3 rounded-full bg-emerald-400 animate-pulse"></span>
                    <h3 class="font-serif font-bold text-white text-base">⚡ Simulación de Interfaz Ensamblada en Vivo</h3>
                </div>
                <button onclick="closeAssembledModal()" class="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800 transition-colors">
                    <i class="ph-bold ph-x text-lg"></i>
                </button>
            </div>

            <!-- Modal Simulated App Body -->
            <div id="assembled-container" class="p-6 overflow-y-auto space-y-6 flex-1 bg-[#05070B]">
                <!-- Dynamic Content Generated by updateAssembledView() -->
            </div>

            <!-- Modal Footer -->
            <div class="p-4 bg-slate-950 border-t border-white/10 flex justify-between items-center text-xs">
                <span class="text-slate-400">Esta pantalla combina tus 10 elecciones en una composición real.</span>
                <button onclick="copySelectionToChat(); closeAssembledModal();" class="px-5 py-2 rounded-lg bg-amber-400 text-black font-bold uppercase tracking-wider">
                    Copiar Elección al Chat
                </button>
            </div>
        </div>
    </div>

    <!-- Toast Notification -->
    <div id="toast" class="fixed top-6 right-6 bg-slate-900 border border-amber-400/60 rounded-xl px-4 py-3 shadow-2xl z-50 text-xs font-mono text-white flex items-center gap-2.5 transition-all transform translate-y-[-150%] opacity-0">
        <i class="ph-fill ph-check-circle text-amber-400 text-base"></i>
        <span id="toast-text">Notificación</span>
    </div>

    <!-- Client Script -->
    <script>
        // State of active selections (starts with defaults #01)
        window.selectedDNA = {
            palettes: 'pal_01',
            typography: 'typo_01',
            buttons: 'btn_01',
            cards: 'card_01',
            menus: 'nav_01',
            metrics: 'metric_01',
            timelines: 'time_01',
            tables: 'tab_01',
            inputs: 'inp_01',
            modals: 'mod_01'
        };

        // Cache of data items
        window.catalogIndex = {};
        document.querySelectorAll('.sample-card').forEach(card => {
            const id = card.dataset.id;
            const category = card.dataset.category;
            const name = card.dataset.name;
            const num = card.dataset.num;
            const tags = card.dataset.tags;
            window.catalogIndex[id] = { id, category, name, num, tags };
        });

        // Initialize default selections
        function initSelections() {
            Object.entries(window.selectedDNA).forEach(([cat, id]) => {
                const card = document.getElementById(id);
                if (card) card.classList.add('selected');
            });
            updateDrawerSummary();
        }

        // Select a component
        function selectComponent(category, id) {
            const prevId = window.selectedDNA[category];
            if (prevId) {
                const prevCard = document.getElementById(prevId);
                if (prevCard) prevCard.classList.remove('selected');
            }

            window.selectedDNA[category] = id;
            const card = document.getElementById(id);
            if (card) card.classList.add('selected');

            updateDrawerSummary();
            showToast('Seleccionado: ' + (window.catalogIndex[id]?.name || id));
        }

        // Update Drawer Summary
        function updateDrawerSummary() {
            const summaryParts = [];
            const labels = {
                palettes: 'Paleta', typography: 'Tipografía', buttons: 'Botón',
                cards: 'Card', menus: 'Menú', metrics: 'Métrica',
                timelines: 'Timeline', tables: 'Tabla', inputs: 'Input', modals: 'Modal'
            };

            Object.entries(window.selectedDNA).forEach(([cat, id]) => {
                const item = window.catalogIndex[id];
                if (item) {
                    summaryParts.push(labels[cat] + ': ' + item.num + '. ' + item.name.split('(')[0].trim());
                }
            });

            const summaryEl = document.getElementById('selection-summary-text');
            if (summaryEl) {
                summaryEl.innerText = summaryParts.slice(0, 4).join(' • ') + '... (' + summaryParts.length + '/10 listos)';
            }
        }

        // Filter Category Tab
        function filterCategory(catId) {
            document.querySelectorAll('.cat-tab').forEach(t => {
                if (t.dataset.category === catId) {
                    t.classList.add('active');
                } else {
                    t.classList.remove('active');
                }
            });

            document.querySelectorAll('.category-section').forEach(sec => {
                if (catId === 'all' || sec.dataset.category === catId) {
                    sec.style.display = 'block';
                } else {
                    sec.style.display = 'none';
                }
            });

            updateResultsCount();
        }

        // Live Search Input
        function onSearchInput(term) {
            const q = term.trim().toLowerCase();
            const clearBtn = document.getElementById('clear-search-btn');
            if (q.length > 0) {
                clearBtn.classList.remove('hidden');
            } else {
                clearBtn.classList.add('hidden');
            }

            let visibleCount = 0;
            document.querySelectorAll('.sample-card').forEach(card => {
                const text = (card.dataset.name + ' ' + card.dataset.tags + ' ' + card.dataset.num).toLowerCase();
                if (!q || text.includes(q)) {
                    card.style.display = 'flex';
                    visibleCount++;
                } else {
                    card.style.display = 'none';
                }
            });

            // Hide empty sections
            document.querySelectorAll('.category-section').forEach(sec => {
                const visibleInSec = sec.querySelectorAll('.sample-card[style*="display: flex"]').length;
                if (visibleInSec === 0 && q.length > 0) {
                    sec.style.display = 'none';
                } else {
                    sec.style.display = 'block';
                }
            });

            const countEl = document.getElementById('results-count');
            if (countEl) {
                countEl.innerText = 'Mostrando ' + visibleCount + ' de 500';
            }
        }

        function clearSearch() {
            const input = document.getElementById('catalog-search');
            if (input) {
                input.value = '';
                onSearchInput('');
            }
        }

        function filterByTag(tag, event) {
            if (event) event.stopPropagation();
            const input = document.getElementById('catalog-search');
            if (input) {
                input.value = tag;
                onSearchInput(tag);
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        }

        function updateResultsCount() {
            const visible = document.querySelectorAll('.sample-card:not([style*="display: none"])').length;
            const countEl = document.getElementById('results-count');
            if (countEl) countEl.innerText = 'Mostrando ' + visible + ' de 500';
        }

        // Copy Selection to Chat
        function copySelectionToChat() {
            const labels = {
                palettes: 'Paleta Cromática & Atmósfera',
                typography: 'Trío Tipográfico',
                buttons: 'Botón & Interacción Táctil',
                cards: 'Card / Superficie / Elevación',
                menus: 'Menú & Navegación',
                metrics: 'Widget de Métricas & KPIs',
                timelines: 'Línea de Tiempo / Horizonte',
                tables: 'Tabla / Lista de Datos',
                inputs: 'Input / Selector de Formulario',
                modals: 'Modal / Overlay / Notificación'
            };

            let promptText = '### ADN Visual Seleccionado (Loop 0 Visual Contract)\\n\\n';
            promptText += 'He seleccionado los siguientes 10 componentes del catálogo de 500 para construir el proyecto:\\n\\n';

            Object.entries(window.selectedDNA).forEach(([cat, id], idx) => {
                const item = window.catalogIndex[id];
                const name = item ? ('#' + item.num + ' — ' + item.name) : id;
                promptText += (idx + 1) + '. **' + labels[cat] + '**: ' + name + '\\n';
            });

            promptText += '\\nPor favor, toma este ADN visual exacto como especificación literal para crear la interfaz.';

            navigator.clipboard.writeText(promptText).then(() => {
                showToast('¡Copiado al portapapeles! Pégalo en el chat.');
            }).catch(() => {
                showToast('Selección copiada.');
            });
        }

        // Assembled Modal logic
        function openAssembledModal() {
            const modal = document.getElementById('assembled-modal');
            const container = document.getElementById('assembled-container');
            
            // Build assembled screen based on selections
            const p = window.catalogIndex[window.selectedDNA.palettes] || {};
            const t = window.catalogIndex[window.selectedDNA.typography] || {};
            const b = document.getElementById(window.selectedDNA.buttons)?.querySelector('.p-4')?.innerHTML || '';
            const c = document.getElementById(window.selectedDNA.cards)?.querySelector('.p-4')?.innerHTML || '';
            const m = document.getElementById(window.selectedDNA.menus)?.querySelector('.p-4')?.innerHTML || '';
            const me = document.getElementById(window.selectedDNA.metrics)?.querySelector('.p-4')?.innerHTML || '';
            const ti = document.getElementById(window.selectedDNA.timelines)?.querySelector('.p-4')?.innerHTML || '';
            const ta = document.getElementById(window.selectedDNA.tables)?.querySelector('.p-4')?.innerHTML || '';
            const inp = document.getElementById(window.selectedDNA.inputs)?.querySelector('.p-4')?.innerHTML || '';
            const mod = document.getElementById(window.selectedDNA.modals)?.querySelector('.p-4')?.innerHTML || '';

            container.innerHTML = \`
                <!-- Simulated Masthead Nav -->
                <div class="mb-4">
                    \${m}
                </div>

                <!-- Bento Grid Body -->
                <div class="grid grid-cols-1 lg:grid-cols-3 gap-4">
                    <!-- Left Hero Card (Span 2) -->
                    <div class="lg:col-span-2 space-y-4">
                        <div class="p-1 rounded-xl">
                            \${c}
                        </div>
                        <div class="p-1 rounded-xl">
                            \${ti}
                        </div>
                    </div>

                    <!-- Right Telemetry & Controls (Span 1) -->
                    <div class="space-y-4">
                        <div class="p-1 rounded-xl">
                            \${me}
                        </div>
                        <div class="p-4 bg-slate-900 border border-slate-800 rounded-xl space-y-3">
                            <div class="text-xs font-mono text-slate-400 font-bold uppercase">CONTROL RÁPIDO</div>
                            \${inp}
                            <div class="pt-2">
                                \${b}
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Bottom Data Table -->
                <div class="pt-2">
                    \${ta}
                </div>

                <!-- Attached Toast Preview -->
                <div class="pt-2 max-w-sm ml-auto">
                    \${mod}
                </div>
            \`;

            modal.classList.remove('hidden');
        }

        function closeAssembledModal() {
            const modal = document.getElementById('assembled-modal');
            modal.classList.add('hidden');
        }

        function toggleDrawer() {
            window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
            showToast('Cajón de selección desplegado.');
        }

        function showToast(msg) {
            const toast = document.getElementById('toast');
            const text = document.getElementById('toast-text');
            text.innerText = msg;
            toast.style.transform = 'translateY(0)';
            toast.style.opacity = '1';
            setTimeout(() => {
                toast.style.transform = 'translateY(-150%)';
                toast.style.opacity = '0';
            }, 2500);
        }

        // Init on load
        window.addEventListener('DOMContentLoaded', () => {
            initSelections();
        });
    </script>
</body>
</html>`;

// Write to primary workspace
const primaryPath = path.resolve('c:/Users/USER/Documents/agentes/design-sampler.html');
fs.writeFileSync(primaryPath, fullHtml, 'utf8');
console.log('✓ Escrito con éxito en:', primaryPath);

// Write to global config
const globalPath = path.resolve('C:/Users/USER/.gemini/config/design-sampler.html');
fs.writeFileSync(globalPath, fullHtml, 'utf8');
console.log('✓ Escrito con éxito en:', globalPath);

// Write to git repo
const repoPath = path.resolve('c:/Users/USER/Documents/agentes/antigravity-agents/design-sampler.html');
fs.writeFileSync(repoPath, fullHtml, 'utf8');
console.log('✓ Escrito con éxito en:', repoPath);

console.log('BUILD COMPLETADO: 500 COMPONENTES ACTIVOS.');
