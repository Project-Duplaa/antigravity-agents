// 50 Menús & Sistemas de Navegación
export const menus = [
  {
    id: "nav_01", num: "01", name: "Architectural Masthead con Reloj Suizo", archetype: "Architectural Masthead",
    tags: ["#masthead", "#clock", "#geneva", "#sovereign"],
    desc: "Cabecera arquitectónica sólida con reloj en vivo de Ginebra, marca fiduciaria y conmutador de privacidad.",
    html: `<header class="w-full bg-[#0A0E17] border-b border-slate-800 px-6 py-3.5 flex items-center justify-between rounded-lg"><div class="flex items-center gap-4"><div class="flex items-center gap-2"><div class="w-7 h-7 rounded bg-amber-400/20 border border-amber-400 text-amber-300 flex items-center justify-center font-serif font-bold text-xs">C</div><span class="font-serif font-bold text-sm tracking-wide text-white">CHRONOS</span></div><nav class="hidden md:flex items-center gap-4 ml-6 text-xs text-slate-400"><a href="#" class="text-amber-400 font-semibold">Dashboard</a><a href="#" class="hover:text-white transition-colors">Sprints</a><a href="#" class="hover:text-white transition-colors">Analítica</a><a href="#" class="hover:text-white transition-colors">Bóveda</a></nav></div><div class="flex items-center gap-3"><span class="px-2.5 py-1 rounded-full text-[11px] font-mono text-slate-300 bg-slate-900 border border-slate-700 flex items-center gap-2"><i class="ph-bold ph-clock text-amber-400"></i> GVA 18:24:00</span><button class="px-2.5 py-1 rounded text-xs text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"><i class="ph-bold ph-eye-slash"></i></button></div></header>`
  },
  {
    id: "nav_02", num: "02", name: "Sovereign Dark Dock / Slim Icon Rail", archetype: "Slim Icon Rail",
    tags: ["#rail", "#sidebar", "#dock", "#compact"],
    desc: "Barra lateral ultra-delgada de iconos con tooltip flotante e indicador de estado activo en ámbar.",
    html: `<aside class="w-14 bg-[#0A0D14] border border-slate-800 rounded-xl py-4 flex flex-col items-center justify-between h-64 shadow-xl"><div class="w-8 h-8 rounded-lg bg-amber-400/20 border border-amber-400 text-amber-300 flex items-center justify-center font-bold text-xs font-serif">S</div><div class="flex flex-col gap-3 text-slate-400"><button class="w-9 h-9 rounded-lg bg-slate-800 text-amber-400 flex items-center justify-center border border-amber-400/30"><i class="ph-bold ph-squares-four text-lg"></i></button><button class="w-9 h-9 rounded-lg hover:bg-slate-800/80 hover:text-white flex items-center justify-center transition-colors"><i class="ph-bold ph-timer text-lg"></i></button><button class="w-9 h-9 rounded-lg hover:bg-slate-800/80 hover:text-white flex items-center justify-center transition-colors"><i class="ph-bold ph-chart-line-up text-lg"></i></button></div><button class="w-9 h-9 rounded-lg hover:bg-slate-800/80 text-slate-400 hover:text-white flex items-center justify-center"><i class="ph-bold ph-gear text-lg"></i></button></aside>`
  },
  {
    id: "nav_03", num: "03", name: "Minimalist Floating Glass Dock", archetype: "Floating Glass Dock",
    tags: ["#dock", "#glass", "#floating", "#mac"],
    desc: "Muelle flotante inferior inspirado en macOS con difuminado de 24px, iconos escalables y rebote elástico.",
    html: `<nav class="inline-flex items-center gap-1.5 p-1.5 bg-slate-900/80 border border-white/10 backdrop-blur-xl rounded-full shadow-2xl"><button class="p-2.5 rounded-full text-slate-300 hover:text-white hover:bg-white/10 transition-all"><i class="ph-bold ph-house text-base"></i></button><button class="p-2.5 rounded-full bg-white/15 text-amber-400 shadow-sm"><i class="ph-bold ph-compass text-base"></i></button><button class="p-2.5 rounded-full text-slate-300 hover:text-white hover:bg-white/10 transition-all"><i class="ph-bold ph-wallet text-base"></i></button><div class="w-[1px] h-4 bg-white/20 mx-1"></div><button class="p-2.5 rounded-full text-slate-300 hover:text-white hover:bg-white/10 transition-all"><i class="ph-bold ph-bell text-base"></i></button></nav>`
  },
  {
    id: "nav_04", num: "04", name: "Swiss Brutalist Vertical Index", archetype: "Brutalist Stark",
    tags: ["#brutalist", "#swiss", "#vertical", "#index"],
    desc: "Navegación editorial con grandes números de índice tipográficos y líneas divisorias de alto contraste.",
    html: `<div class="bg-black border-2 border-white p-4 font-mono text-xs w-full max-w-sm"><div class="text-[10px] text-red-500 font-bold mb-3 tracking-widest">// ÍNDICE GENERAL</div><ul class="space-y-2"><li class="flex items-center justify-between pb-1.5 border-b border-white/20 hover:text-red-500 cursor-pointer"><span class="font-bold">01. DASHBOARD PRINCIPAL</span><span class="text-neutral-500">→</span></li><li class="flex items-center justify-between pb-1.5 border-b border-white/20 hover:text-red-500 cursor-pointer"><span class="font-bold">02. ASIGNACIÓN TEMPORAL</span><span class="text-neutral-500">→</span></li><li class="flex items-center justify-between pb-1.5 border-b border-white/20 hover:text-red-500 cursor-pointer"><span class="font-bold">03. AUDITORÍA CRIPTOGRÁFICA</span><span class="text-neutral-500">→</span></li></ul></div>`
  },
  {
    id: "nav_05", num: "05", name: "Split Dual-Tier Command Bar", archetype: "Command Deck",
    tags: ["#dual-tier", "#breadcrumbs", "#actions", "#pro"],
    desc: "Estructura de dos niveles con migas de pan y selectores de entorno en el nivel superior y comandos abajo.",
    html: `<div class="w-full bg-slate-950 border border-slate-800 rounded-lg overflow-hidden text-xs"><div class="px-4 py-2 bg-slate-900/60 border-b border-slate-800 flex justify-between items-center text-slate-400 font-mono text-[11px]"><div class="flex items-center gap-1.5"><span>PRODUCCIÓN</span><span class="text-slate-600">/</span><span class="text-amber-400">SERIES-B</span><span class="text-slate-600">/</span><span class="text-white">CONTRATOS</span></div><span class="text-emerald-400">SISTEMA NOMINAL</span></div><div class="px-4 py-3 flex justify-between items-center"><div class="flex gap-4 font-semibold text-slate-300"><a href="#" class="text-white">Visión General</a><a href="#" class="hover:text-white">Firmantes</a><a href="#" class="hover:text-white">Transacciones</a></div><button class="px-3 py-1 bg-amber-400 text-black font-bold rounded text-[11px]">+ NUEVA CLÁUSULA</button></div></div>`
  },
  {
    id: "nav_06", num: "06", name: "Off-Canvas Lateral Dossier Drawer", archetype: "Dossier Drawer",
    tags: ["#drawer", "#off-canvas", "#dossier", "#menu"],
    desc: "Menú lateral deslizante con jerarquía de expediente fiduciario y etiquetas de confidencialidad.",
    html: `<div class="w-64 bg-[#0A0D14] border border-slate-800 rounded-xl p-4 shadow-2xl font-mono text-xs"><div class="flex justify-between items-center pb-3 border-b border-slate-800 mb-3"><span class="text-amber-400 font-bold tracking-widest text-[11px]">DOSSIER MENÚ</span><i class="ph-bold ph-x text-slate-400"></i></div><div class="space-y-1"><div class="px-2 py-1.5 rounded bg-amber-400/10 text-amber-300 font-bold">1. RESUMEN EJECUTIVO</div><div class="px-2 py-1.5 rounded text-slate-400 hover:text-white hover:bg-slate-900 cursor-pointer">2. CARTERA DE CAPITAL</div><div class="px-2 py-1.5 rounded text-slate-400 hover:text-white hover:bg-slate-900 cursor-pointer">3. LLAMADAS DE CAPITAL</div><div class="px-2 py-1.5 rounded text-slate-400 hover:text-white hover:bg-slate-900 cursor-pointer">4. TELEMETRÍA SWIFT</div></div></div>`
  },
  {
    id: "nav_07", num: "07", name: "Radial Quick-Command Wheel", archetype: "Radial HUD",
    tags: ["#radial", "#hud", "#circle", "#futuristic"],
    desc: "Menú radial con botones dispuestos geométricamente alrededor de un núcleo de disparo central.",
    html: `<div class="relative w-36 h-36 mx-auto flex items-center justify-center"><div class="w-12 h-12 rounded-full bg-amber-400 text-black flex items-center justify-center font-bold text-sm shadow-lg shadow-amber-400/30 z-10 cursor-pointer"><i class="ph-bold ph-plus"></i></div><button class="absolute -top-1 w-9 h-9 rounded-full bg-slate-900 border border-slate-700 text-slate-300 hover:text-amber-400 flex items-center justify-center shadow"><i class="ph-bold ph-shield"></i></button><button class="absolute -bottom-1 w-9 h-9 rounded-full bg-slate-900 border border-slate-700 text-slate-300 hover:text-amber-400 flex items-center justify-center shadow"><i class="ph-bold ph-chart-pie"></i></button><button class="absolute -left-1 w-9 h-9 rounded-full bg-slate-900 border border-slate-700 text-slate-300 hover:text-amber-400 flex items-center justify-center shadow"><i class="ph-bold ph-cpu"></i></button><button class="absolute -right-1 w-9 h-9 rounded-full bg-slate-900 border border-slate-700 text-slate-300 hover:text-amber-400 flex items-center justify-center shadow"><i class="ph-bold ph-vault"></i></button></div>`
  },
  {
    id: "nav_08", num: "08", name: "Floating Micro-Pill Island", archetype: "Dynamic Island",
    tags: ["#island", "#pill", "#floating", "#badge"],
    desc: "Isla dinámica flotante con contadores numéricos y estado de sincronización en tiempo real.",
    html: `<nav class="inline-flex items-center gap-3 px-4 py-2 bg-slate-950 border border-slate-800 rounded-full shadow-2xl text-xs"><div class="flex items-center gap-2"><span class="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span><span class="font-bold text-white font-mono">LIVE CLOUD</span></div><div class="w-[1px] h-3 bg-slate-800"></div><a href="#" class="text-amber-400 font-semibold">Operaciones</a><a href="#" class="text-slate-400 hover:text-white">Informes</a><span class="px-2 py-0.5 rounded-full bg-slate-800 text-[10px] font-mono text-slate-300">4 ALERTAS</span></nav>`
  },
  {
    id: "nav_09", num: "09", name: "Segmented Horizon Tabs", archetype: "Segmented Tabs",
    tags: ["#tabs", "#segmented", "#horizon", "#clean"],
    desc: "Pestañas horizontales embutidas con indicador de selección deslizante.",
    html: `<div class="inline-flex p-1 bg-slate-950 border border-slate-800 rounded-lg text-xs font-semibold text-slate-400"><button class="px-4 py-2 rounded-md bg-slate-800 text-white shadow">HORIZONTE 24H</button><button class="px-4 py-2 hover:text-white">SEMANAL</button><button class="px-4 py-2 hover:text-white">MENSUAL</button><button class="px-4 py-2 hover:text-white">HISTÓRICO</button></div>`
  },
  {
    id: "nav_10", num: "10", name: "Compact Breadcrumb Command Deck", archetype: "Breadcrumbs Deck",
    tags: ["#breadcrumbs", "#compact", "#deck", "#path"],
    desc: "Navegación por migas de pan con menú desplegable en cada segmento.",
    html: `<div class="px-4 py-2.5 bg-slate-900 border border-slate-800 rounded-lg flex items-center justify-between text-xs font-mono"><div class="flex items-center gap-2 text-slate-400"><i class="ph-bold ph-house text-sm"></i><span>/</span><span class="text-slate-300">Cartera Global</span><span>/</span><span class="text-amber-400 font-bold">Aurelius Trust</span></div><i class="ph-bold ph-dots-three text-slate-400"></i></div>`
  },
  {
    id: "nav_11", num: "11", name: "Mega Menu Grid Dropdown", archetype: "Mega Menu",
    tags: ["#mega-menu", "#dropdown", "#grid", "#categories"],
    desc: "Panel desplegable de gran formato con 3 columnas organizadas por categoría de producto.",
    html: `<div class="w-full max-w-md bg-slate-950 border border-slate-800 rounded-xl p-4 shadow-2xl text-xs"><div class="grid grid-cols-2 gap-4"><div class="space-y-2"><div class="text-[10px] font-mono text-amber-400 font-bold uppercase">CUSTODIA FIDUCIARIA</div><a href="#" class="block text-white font-semibold hover:text-amber-400">Bóveda Digital</a><a href="#" class="block text-slate-400 hover:text-white">Multifirma Cuántica</a><a href="#" class="block text-slate-400 hover:text-white">Auditoría en Tiempo Real</a></div><div class="space-y-2"><div class="text-[10px] font-mono text-cyan-400 font-bold uppercase">SERVICIOS DE CAPITAL</div><a href="#" class="block text-white font-semibold hover:text-cyan-400">Llamadas de Capital</a><a href="#" class="block text-slate-400 hover:text-white">Informes a Inversores</a><a href="#" class="block text-slate-400 hover:text-white">Rendimiento Consolidado</a></div></div></div>`
  },
  {
    id: "nav_12", num: "12", name: "Horological Bezel Ring Nav", archetype: "Horological Dial",
    tags: ["#horological", "#bezel", "#watch", "#circular"],
    desc: "Bisel de reloj de lujo con graduación de 60 minutos e indicadores marcados.",
    html: `<div class="flex items-center gap-3 p-3 bg-slate-950 border border-amber-500/40 rounded-xl text-xs font-serif"><div class="w-6 h-6 rounded-full border-2 border-amber-400 flex items-center justify-center text-[10px] font-bold text-amber-400">60</div><div class="space-x-4"><a href="#" class="text-amber-400 font-bold">I. INTRODUCCIÓN</a><a href="#" class="text-slate-400 hover:text-white">II. ASIGNACIÓN</a><a href="#" class="text-slate-400 hover:text-white">III. CONCLUSIÓN</a></div></div>`
  },
  {
    id: "nav_13", num: "13", name: "Mobile App 4-Tab Bottom Bar", archetype: "Mobile Bottom Nav",
    tags: ["#mobile", "#bottom-nav", "#tabs", "#app"],
    desc: "Barra inferior optimizada para móviles con 4 iconos y etiqueta micro de texto.",
    html: `<nav class="w-full max-w-sm bg-slate-950 border-t border-slate-800 px-6 py-2.5 flex justify-between items-center rounded-b-xl"><button class="flex flex-col items-center gap-1 text-amber-400"><i class="ph-bold ph-squares-four text-lg"></i><span class="text-[9px] font-semibold">Inicio</span></button><button class="flex flex-col items-center gap-1 text-slate-400 hover:text-white"><i class="ph-bold ph-chart-line text-lg"></i><span class="text-[9px]">Métricas</span></button><button class="flex flex-col items-center gap-1 text-slate-400 hover:text-white"><i class="ph-bold ph-shield-check text-lg"></i><span class="text-[9px]">Bóveda</span></button><button class="flex flex-col items-center gap-1 text-slate-400 hover:text-white"><i class="ph-bold ph-user text-lg"></i><span class="text-[9px]">Perfil</span></button></nav>`
  },
  {
    id: "nav_14", num: "14", name: "Terminal Prompt Command Line Menu", archetype: "Terminal Line",
    tags: ["#terminal", "#cli", "#prompt", "#mono"],
    desc: "Menú interactivo tipo consola Unix con opciones numeradas por tecla rápida.",
    html: `<div class="bg-black border border-green-500/60 p-4 rounded font-mono text-xs text-green-400 max-w-sm"><div class="text-[10px] text-slate-500 mb-2">// SELECCIONE DESTINO:</div><div class="space-y-1"><div>[1] Ir al Panel de Control</div><div>[2] Revisar Bóveda Fría</div><div>[3] Salir de la Sesión</div></div><div class="mt-3 text-white">$ <span class="animate-pulse">_</span></div></div>`
  },
  {
    id: "nav_15", num: "15", name: "Fullscreen Overlay Curtain Trigger", archetype: "Fullscreen Curtain",
    tags: ["#fullscreen", "#curtain", "#overlay", "#hero"],
    desc: "Activador de menú de pantalla completa con efecto de cortina cinematográfica.",
    html: `<div class="p-3 bg-slate-900 border border-slate-800 rounded-lg flex items-center justify-between text-xs font-semibold"><span class="text-slate-400">MENÚ DE NAVEGACIÓN</span><button class="px-3 py-1.5 rounded bg-amber-400 text-black font-bold flex items-center gap-2"><i class="ph-bold ph-list"></i> ABRIR ÍNDICE (ESC)</button></div>`
  },
  {
    id: "nav_16", num: "16", name: "Vertical Step Milestone Timeline Nav", archetype: "Stepper Nav",
    tags: ["#stepper", "#vertical", "#milestone", "#wizard"],
    desc: "Navegación paso a paso conectada por una línea vertical continua para onboarding o flujos.",
    html: `<div class="p-4 bg-slate-950 border border-slate-800 rounded-xl space-y-4 text-xs font-mono max-w-xs"><div class="flex items-center gap-3"><span class="w-6 h-6 rounded-full bg-emerald-500 text-black flex items-center justify-center font-bold text-[10px]">✓</span><span class="text-white font-bold">1. Identificación</span></div><div class="flex items-center gap-3"><span class="w-6 h-6 rounded-full bg-amber-400 text-black flex items-center justify-center font-bold text-[10px]">2</span><span class="text-amber-400 font-bold">2. Firma Criptográfica</span></div><div class="flex items-center gap-3 opacity-50"><span class="w-6 h-6 rounded-full bg-slate-800 text-slate-400 flex items-center justify-center font-bold text-[10px]">3</span><span class="text-slate-400">3. Despliegue</span></div></div>`
  },
  {
    id: "nav_17", num: "17", name: "Tabbed Pill Bar with Slide Line", archetype: "Slide Indicator",
    tags: ["#pills", "#slide", "#underline", "#clean"],
    desc: "Línea indicadora flotante que acompaña la pestaña activa con animación.",
    html: `<nav class="flex border-b border-slate-800 text-xs font-semibold gap-6 pb-2"><a href="#" class="text-amber-400 border-b-2 border-amber-400 pb-2 -mb-2">Resumen General</a><a href="#" class="text-slate-400 hover:text-white pb-2">Contratos</a><a href="#" class="text-slate-400 hover:text-white pb-2">Auditores</a></nav>`
  },
  {
    id: "nav_18", num: "18", name: "Floating Ring Switcher", archetype: "Ring Switcher",
    tags: ["#ring", "#switcher", "#floating", "#orbit"],
    desc: "Conmutador circular con tres botones satélite en órbita.",
    html: `<div class="flex items-center gap-2 p-2 bg-slate-900 border border-slate-800 rounded-full max-w-xs justify-center"><button class="px-3 py-1 rounded-full text-xs font-bold bg-amber-400 text-black">DIARIO</button><button class="px-3 py-1 rounded-full text-xs font-medium text-slate-400 hover:text-white">SEMANAL</button><button class="px-3 py-1 rounded-full text-xs font-medium text-slate-400 hover:text-white">MENSUAL</button></div>`
  },
  {
    id: "nav_19", num: "19", name: "Sidebar Accordion with Folder Tree", archetype: "Folder Tree",
    tags: ["#accordion", "#tree", "#folders", "#sidebar"],
    desc: "Árbol de carpetas jerárquico desplegable con iconos de documento.",
    html: `<div class="p-3 bg-slate-950 border border-slate-800 rounded-lg text-xs font-mono space-y-1.5 max-w-xs"><div class="flex items-center gap-2 text-amber-400"><i class="ph-fill ph-folder-open"></i><span>bóveda_central/</span></div><div class="ml-4 space-y-1 text-slate-400"><div class="hover:text-white cursor-pointer">├── estatutos.pdf</div><div class="hover:text-white cursor-pointer">├── asignaciones.json</div><div class="text-emerald-400">└── firma_multisig.key</div></div></div>`
  },
  {
    id: "nav_20", num: "20", name: "Centered Balanced Header", archetype: "Balanced Header",
    tags: ["#balanced", "#centered", "#header", "#clean"],
    desc: "Logotipo a la izquierda, navegación principal centrada y llamada a la acción a la derecha.",
    html: `<header class="w-full bg-slate-900/80 border border-slate-800 px-5 py-3 rounded-lg flex items-center justify-between text-xs"><span class="font-serif font-bold text-white tracking-widest">KESTREL</span><nav class="hidden sm:flex items-center gap-5 text-slate-400"><a href="#" class="text-white">Visión</a><a href="#" class="hover:text-white">Cartera</a><a href="#" class="hover:text-white">Contacto</a></nav><button class="px-3 py-1.5 rounded bg-slate-800 text-amber-400 font-bold border border-slate-700">ACCEDER</button></header>`
  },
  {
    id: "nav_21", num: "21", name: "Contextual Floating Popover Menu", archetype: "Floating Popover",
    tags: ["#contextual", "#popover", "#right-click", "#actions"],
    desc: "Menú contextual de clic derecho con acciones rápidas como copiar hash, exportar y archivar.",
    html: `<div class="w-48 bg-slate-900 border border-slate-700 rounded-lg p-1.5 shadow-2xl text-xs font-mono space-y-0.5"><div class="px-3 py-1.5 rounded hover:bg-slate-800 text-slate-200 cursor-pointer flex items-center gap-2"><i class="ph-bold ph-copy"></i> Copiar Hash</div><div class="px-3 py-1.5 rounded hover:bg-slate-800 text-slate-200 cursor-pointer flex items-center gap-2"><i class="ph-bold ph-download-simple"></i> Exportar JSON</div><div class="h-[1px] bg-slate-800 my-1"></div><div class="px-3 py-1.5 rounded hover:bg-rose-950 text-rose-400 cursor-pointer flex items-center gap-2"><i class="ph-bold ph-trash"></i> Purgar Registro</div></div>`
  },
  {
    id: "nav_22", num: "22", name: "Sticky Glass Aero Header", archetype: "Aero Header",
    tags: ["#sticky", "#glass", "#aero", "#blur"],
    desc: "Cabecera translúcida con difuminado dinámico al desplazarse por la pantalla.",
    html: `<header class="w-full bg-white/5 border border-white/10 backdrop-blur-md px-5 py-3 rounded-xl flex justify-between items-center text-xs"><div class="font-bold text-white">NEXUS OPERACIONAL</div><div class="flex gap-4 text-slate-300"><a href="#" class="hover:text-cyan-400">Panel</a><a href="#" class="hover:text-cyan-400">Nodos</a><a href="#" class="hover:text-cyan-400">Logs</a></div></header>`
  },
  {
    id: "nav_23", num: "23", name: "Top Ticker Financial Tape Header", archetype: "Ticker Tape",
    tags: ["#ticker", "#tape", "#stock", "#financial"],
    desc: "Tira financiera superior con cotizaciones y porcentajes en vivo.",
    html: `<div class="w-full bg-black border-y border-slate-800 py-1.5 px-4 font-mono text-[11px] flex items-center justify-between text-slate-400 overflow-hidden"><span class="text-amber-400 font-bold">MERCADOS GLOBALES</span><div class="flex gap-6"><span class="text-emerald-400">S&P500 +0.84%</span><span class="text-emerald-400">GOLD $2,642.10</span><span class="text-rose-400">USD/CHF -0.12%</span></div></div>`
  },
  {
    id: "nav_24", num: "24", name: "Bottom Sheet Filter Bar", archetype: "Bottom Filter",
    tags: ["#filter", "#bottom-sheet", "#controls", "#drawer"],
    desc: "Barra de filtros acoplada al margen inferior con chips de selección múltiple.",
    html: `<div class="p-3 bg-slate-900 border border-slate-800 rounded-lg flex items-center gap-3 text-xs"><span class="text-slate-400 font-mono text-[10px]">FILTRAR POR:</span><button class="px-2.5 py-1 rounded bg-amber-400/20 text-amber-300 border border-amber-400/40 font-bold">Alta Prioridad</button><button class="px-2.5 py-1 rounded bg-slate-800 text-slate-300">Completados</button></div>`
  },
  {
    id: "nav_25", num: "25", name: "Compact Floating Speed Dial", archetype: "Speed Dial",
    tags: ["#speed-dial", "#floating", "#action", "#fab"],
    desc: "Botón de acción flotante (FAB) que despliega tres acciones rápidas al pulsar.",
    html: `<div class="flex flex-col items-center gap-2 max-w-min"><button class="w-8 h-8 rounded-full bg-slate-800 text-slate-300 flex items-center justify-center border border-slate-700 shadow"><i class="ph-bold ph-plus"></i></button><button class="w-10 h-10 rounded-full bg-amber-400 text-black flex items-center justify-center font-bold shadow-lg"><i class="ph-bold ph-lightning"></i></button></div>`
  },
  {
    id: "nav_26", num: "26", name: "Stepper Horizontal Wizard Bar", archetype: "Horizontal Wizard",
    tags: ["#stepper", "#wizard", "#horizontal", "#steps"],
    desc: "Barra horizontal con pasos numerados unidos por una línea continua.",
    html: `<div class="flex items-center gap-2 w-full max-w-sm text-xs font-mono"><div class="flex items-center gap-1.5 text-emerald-400 font-bold"><span class="w-5 h-5 rounded-full bg-emerald-500/20 border border-emerald-500 flex items-center justify-center text-[10px]">1</span> Datos</div><div class="flex-1 h-[1px] bg-emerald-500"></div><div class="flex items-center gap-1.5 text-amber-400 font-bold"><span class="w-5 h-5 rounded-full bg-amber-400/20 border border-amber-400 flex items-center justify-center text-[10px]">2</span> Firma</div><div class="flex-1 h-[1px] bg-slate-800"></div><div class="flex items-center gap-1.5 text-slate-600"><span class="w-5 h-5 rounded-full bg-slate-800 flex items-center justify-center text-[10px]">3</span> Fin</div></div>`
  },
  {
    id: "nav_27", num: "27", name: "Segmented Button Pill Group", archetype: "Button Group",
    tags: ["#pill", "#segmented", "#group", "#compact"],
    desc: "Grupo de 3 botones encapsulados con esquinas redondeadas compartidas.",
    html: `<div class="inline-flex rounded-md border border-slate-700 bg-slate-900 p-0.5 text-xs font-semibold"><button class="px-3 py-1.5 rounded bg-slate-800 text-white shadow">Día</button><button class="px-3 py-1.5 text-slate-400 hover:text-white">Semana</button><button class="px-3 py-1.5 text-slate-400 hover:text-white">Mes</button></div>`
  },
  {
    id: "nav_28", num: "28", name: "Sidebar with Pinned User Profile", archetype: "User Profile Sidebar",
    tags: ["#profile", "#sidebar", "#avatar", "#user"],
    desc: "Barra lateral con pie fijado que muestra el avatar del usuario, cargo y botón de desconexión.",
    html: `<div class="p-4 bg-slate-950 border border-slate-800 rounded-xl max-w-xs"><div class="flex items-center gap-3"><div class="w-9 h-9 rounded-full bg-amber-400/20 border border-amber-400 text-amber-300 flex items-center justify-center font-bold text-xs">AP</div><div><div class="text-xs font-bold text-white">Alexander Pierce</div><div class="text-[10px] text-slate-400">DIRECTOR GENERAL</div></div></div></div>`
  },
  {
    id: "nav_29", num: "29", name: "Horological Timezone Switcher", archetype: "Timezone Switcher",
    tags: ["#timezone", "#clock", "#geneva", "#london"],
    desc: "Píldoras para cambiar instantáneamente entre husos horarios GVA, LON, NYC y TYO.",
    html: `<div class="inline-flex gap-1.5 p-1 bg-slate-950 border border-slate-800 rounded-lg text-xs font-mono"><button class="px-2.5 py-1 rounded bg-amber-400 text-black font-bold">GVA 18:24</button><button class="px-2.5 py-1 text-slate-400 hover:text-white">LON 17:24</button><button class="px-2.5 py-1 text-slate-400 hover:text-white">NYC 12:24</button></div>`
  },
  {
    id: "nav_30", num: "30", name: "High-Density Monospace Status Bar", archetype: "Status Bar",
    tags: ["#status", "#density", "#mono", "#bottom"],
    desc: "Línea de estado técnica en el margen inferior de la pantalla al estilo VS Code o Vim.",
    html: `<div class="w-full bg-[#070A0F] border-t border-slate-800 px-4 py-1.5 font-mono text-[11px] flex justify-between items-center text-slate-400"><div class="flex gap-4"><span>UTF-8</span><span>JSON-RPC</span><span class="text-emerald-400">LATENCIA: 0.8ms</span></div><span>RAM: 34% // CPU: 12%</span></div>`
  },
  {
    id: "nav_31", num: "31", name: "Minimalist Borderless Nav Links", archetype: "Borderless Links",
    tags: ["#borderless", "#links", "#clean", "#minimal"],
    desc: "Enlaces tipográficos espaciados sin fondos ni bordes para elegancia editorial.",
    html: `<nav class="flex gap-6 text-xs uppercase tracking-widest text-slate-400"><a href="#" class="text-amber-400 font-bold">MANIFIESTO</a><a href="#" class="hover:text-white">ARCHIVOS</a><a href="#" class="hover:text-white">BÓVEDA</a></nav>`
  },
  {
    id: "nav_32", num: "32", name: "Cyberpunk Notched Header Bar", archetype: "Notched Header",
    tags: ["#cyberpunk", "#notched", "#cyan", "#terminal"],
    desc: "Cabecera con esquinas recortadas y franja luminosa verde ácido.",
    html: `<header class="p-4 bg-slate-950 border border-lime-500/50 clip-notch flex justify-between items-center font-mono text-xs"><span class="text-lime-400 font-bold">[ TERMINAL DE COMANDO ]</span><span class="text-slate-400">ENLACE CIFRADO // OK</span></header>`
  },
  {
    id: "nav_33", num: "33", name: "Dual-Level Subnav with Active Line", archetype: "Subnav Line",
    tags: ["#subnav", "#active-line", "#tabs", "#clean"],
    desc: "Subnavegación secundaria con línea de realce de 2px en el elemento activo.",
    html: `<div class="flex gap-5 border-b border-slate-800 text-xs font-semibold"><a href="#" class="text-amber-400 pb-2 border-b-2 border-amber-400 -mb-[1px]">General</a><a href="#" class="text-slate-400 hover:text-white pb-2">Seguridad</a><a href="#" class="text-slate-400 hover:text-white pb-2">Integraciones</a></div>`
  },
  {
    id: "nav_34", num: "34", name: "Vertical Dot-Navigation for One-Page", archetype: "Dot Navigation",
    tags: ["#dots", "#one-page", "#vertical", "#minimal"],
    desc: "Serie de puntos verticales para navegación por secciones en páginas de scroll largo.",
    html: `<div class="flex flex-col gap-3 p-2 bg-slate-950/80 border border-slate-800 rounded-full w-min"><span class="w-2.5 h-2.5 rounded-full bg-amber-400 shadow"></span><span class="w-2 h-2 rounded-full bg-slate-700 hover:bg-slate-400 cursor-pointer"></span><span class="w-2 h-2 rounded-full bg-slate-700 hover:bg-slate-400 cursor-pointer"></span></div>`
  },
  {
    id: "nav_35", num: "35", name: "Expanding Search Bar Header", archetype: "Expanding Search",
    tags: ["#search", "#expanding", "#header", "#input"],
    desc: "Barra de búsqueda que se expande al hacer foco para búsqueda global instantánea.",
    html: `<div class="flex items-center gap-2 px-3 py-1.5 bg-slate-900 border border-slate-700 rounded-lg text-xs w-64"><i class="ph-bold ph-magnifying-glass text-slate-400"></i><input type="text" placeholder="Buscar expedientes... (Ctrl+K)" class="bg-transparent text-white outline-none w-full placeholder-slate-500"></div>`
  },
  {
    id: "nav_36", num: "36", name: "Tree View File Explorer Nav", archetype: "Tree View",
    tags: ["#tree", "#files", "#explorer", "#mono"],
    desc: "Navegación por jerarquía de archivos con chevron de colapso.",
    html: `<div class="p-3 bg-slate-950 border border-slate-800 rounded-lg font-mono text-xs text-slate-300 space-y-1 max-w-xs"><div class="flex items-center gap-1.5 text-amber-400"><i class="ph-bold ph-caret-down text-[10px]"></i><i class="ph-bold ph-folder"></i><span>src/</span></div><div class="ml-4 space-y-1 text-slate-400"><div>server.js</div><div>db.js</div></div></div>`
  },
  {
    id: "nav_37", num: "37", name: "Split Header with Notification Tray", archetype: "Notification Tray",
    tags: ["#tray", "#notifications", "#split", "#header"],
    desc: "Bandeja desplegable de alertas con botón de campana interactivo.",
    html: `<header class="p-3.5 bg-slate-900 border border-slate-800 rounded-lg flex justify-between items-center text-xs"><span class="font-bold text-white">PANEL PRINCIPAL</span><button class="relative p-2 text-slate-400 hover:text-white"><i class="ph-bold ph-bell text-base"></i><span class="absolute top-1 right-1 w-2 h-2 rounded-full bg-rose-500"></span></button></header>`
  },
  {
    id: "nav_38", num: "38", name: "Floating Island Notification Bell", archetype: "Floating Island",
    tags: ["#island", "#bell", "#floating", "#clean"],
    desc: "Isla compacta para avisos del sistema con campana de alerta animada.",
    html: `<div class="inline-flex items-center gap-3 px-4 py-2 bg-slate-900 border border-slate-700 rounded-full shadow-lg text-xs"><i class="ph-fill ph-bell-ringing text-amber-400 text-base"></i><span class="text-white font-medium">Nueva llamada de capital convocada</span></div>`
  },
  {
    id: "nav_39", num: "39", name: "Sovereign Gold Emblem Header", archetype: "Gold Emblem",
    tags: ["#gold", "#emblem", "#sovereign", "#crest"],
    desc: "Cabecera con escudo heráldico bañado en oro y tipografía serifa solemne.",
    html: `<header class="p-4 bg-[#090C12] border-b border-amber-500/30 flex justify-between items-center"><div class="flex items-center gap-3"><i class="ph-fill ph-shield-star text-amber-400 text-xl"></i><span class="font-serif font-bold text-amber-100 tracking-wider text-sm">BANCA PRIVADA SOBERANA</span></div><span class="text-xs font-mono text-amber-400">ZÚRICH // GINEBRA</span></header>`
  },
  {
    id: "nav_40", num: "40", name: "Carousel Horizontal Category Bar", archetype: "Carousel Nav",
    tags: ["#carousel", "#categories", "#scroll", "#pill"],
    desc: "Tira deslizante horizontal de categorías de contenido para exploración rápida.",
    html: `<div class="flex gap-2 overflow-x-auto pb-1 text-xs font-semibold max-w-sm"><button class="px-3 py-1.5 rounded-full bg-amber-400 text-black whitespace-nowrap">Todas</button><button class="px-3 py-1.5 rounded-full bg-slate-800 text-slate-300 hover:text-white whitespace-nowrap">Finanzas</button><button class="px-3 py-1.5 rounded-full bg-slate-800 text-slate-300 hover:text-white whitespace-nowrap">Seguridad</button></div>`
  },
  {
    id: "nav_41", num: "41", name: "Quick Command Palette Trigger Bar", archetype: "Command Palette",
    tags: ["#command", "#palette", "#spotlight", "#raycast"],
    desc: "Barra de comando centralizada inspirada en Raycast para saltar a cualquier función.",
    html: `<button class="w-full max-w-sm px-4 py-2.5 bg-slate-900 border border-slate-700 rounded-lg flex items-center justify-between text-xs text-slate-400 hover:border-amber-400 transition-colors"><div class="flex items-center gap-2"><i class="ph-bold ph-command text-amber-400"></i><span>Ejecutar comando rápido...</span></div><span class="px-1.5 py-0.5 rounded bg-slate-800 font-mono text-[10px]">⌘K</span></button>`
  },
  {
    id: "nav_42", num: "42", name: "Swiss Brutalist Sticky Side Rail", archetype: "Brutalist Rail",
    tags: ["#brutalist", "#rail", "#sticky", "#black"],
    desc: "Riel lateral rígido en blanco y negro con texto rotado 90 grados.",
    html: `<div class="w-12 bg-white text-black border-2 border-black flex flex-col justify-between items-center py-6 h-48 font-mono font-bold text-xs"><span class="tracking-widest">01</span><span class="-rotate-90 uppercase text-[10px] tracking-widest whitespace-nowrap">NAVEGACIÓN</span><span>↓</span></div>`
  },
  {
    id: "nav_43", num: "43", name: "Bottom Dock with Tooltips", archetype: "Dock Tooltip",
    tags: ["#dock", "#tooltips", "#bottom", "#clean"],
    desc: "Muelle inferior con globos informativos que aparecen sobre cada icono.",
    html: `<div class="flex gap-2 p-2 bg-slate-900 border border-slate-800 rounded-xl shadow-xl justify-center"><button class="p-2.5 rounded-lg hover:bg-slate-800 text-slate-300 hover:text-white"><i class="ph-bold ph-chart-bar text-base"></i></button><button class="p-2.5 rounded-lg bg-amber-400/20 text-amber-400"><i class="ph-bold ph-shield text-base"></i></button><button class="p-2.5 rounded-lg hover:bg-slate-800 text-slate-300 hover:text-white"><i class="ph-bold ph-gear text-base"></i></button></div>`
  },
  {
    id: "nav_44", num: "44", name: "Minimalist Underline Nav Strip", archetype: "Underline Strip",
    tags: ["#underline", "#strip", "#minimal", "#clean"],
    desc: "Fila horizontal de enlaces con subrayado de color al hacer clic.",
    html: `<nav class="flex gap-6 text-xs font-medium text-slate-400 border-b border-slate-800 pb-2"><a href="#" class="text-white border-b border-white pb-2 -mb-2">Visión</a><a href="#" class="hover:text-white">Cartera</a><a href="#" class="hover:text-white">Equipo</a></nav>`
  },
  {
    id: "nav_45", num: "45", name: "Multi-Tenant Org Switcher Bar", archetype: "Org Switcher",
    tags: ["#tenant", "#org", "#switcher", "#enterprise"],
    desc: "Selector desplegable para conmutar entre diferentes entidades o empresas.",
    html: `<div class="p-2 bg-slate-900 border border-slate-800 rounded-lg flex items-center justify-between text-xs max-w-xs cursor-pointer hover:border-slate-700"><div class="flex items-center gap-2"><div class="w-5 h-5 rounded bg-amber-400 text-black font-bold flex items-center justify-center text-[10px]">A</div><span class="font-bold text-white">Aurelius Holdings Ltd</span></div><i class="ph-bold ph-caret-down text-slate-400 text-xs"></i></div>`
  },
  {
    id: "nav_46", num: "46", name: "Tactical HUD Top Display Bar", archetype: "Tactical HUD",
    tags: ["#tactical", "#hud", "#reticle", "#military"],
    desc: "Barra superior con retícula militar, estado de satélite y coordenadas GPS.",
    html: `<div class="w-full bg-[#0B100B] border-b border-lime-600/40 p-2 font-mono text-[11px] flex justify-between items-center text-lime-400"><span>SAT_SYNC: LOCK [46.2044° N, 6.1432° E]</span><span class="animate-pulse">ONLINE // ENCRYPTED</span></div>`
  },
  {
    id: "nav_47", num: "47", name: "Floating Media Playback Bar", archetype: "Playback Bar",
    tags: ["#playback", "#media", "#player", "#audio"],
    desc: "Barra de control de audio o reproducción de eventos con botones de play/pause.",
    html: `<div class="flex items-center gap-3 px-4 py-2 bg-slate-950 border border-slate-800 rounded-full shadow-lg text-xs max-w-sm"><button class="w-7 h-7 rounded-full bg-amber-400 text-black flex items-center justify-center font-bold"><i class="ph-bold ph-play"></i></button><span class="text-white font-mono">03:42 // SESIÓN EN CURSO</span></div>`
  },
  {
    id: "nav_48", num: "48", name: "Vertical Icon Rail with Glow", archetype: "Glow Rail",
    tags: ["#glow", "#rail", "#vertical", "#cyan"],
    desc: "Barra vertical de iconos con iluminación reactiva en color cian.",
    html: `<div class="w-12 bg-slate-950 border border-cyan-500/30 rounded-xl py-4 flex flex-col items-center gap-4 text-cyan-400"><button class="p-2 rounded-lg bg-cyan-950 border border-cyan-500 shadow-[0_0_10px_#22D3EE]"><i class="ph-bold ph-broadcast"></i></button><button class="p-2 text-slate-500 hover:text-cyan-400"><i class="ph-bold ph-database"></i></button></div>`
  },
  {
    id: "nav_49", num: "49", name: "Monolithic Blackout Bar Header", archetype: "Blackout Header",
    tags: ["#blackout", "#monolith", "#pure", "#stark"],
    desc: "Cabecera negro 100% absoluto sin bordes con texto blanco puro.",
    html: `<header class="w-full bg-black px-6 py-4 flex justify-between items-center text-xs tracking-widest uppercase font-bold text-white"><span>CHRONOS MONOLITH</span><div class="flex gap-6"><a href="#">PROYECTOS</a><a href="#">SISTEMAS</a></div></header>`
  },
  {
    id: "nav_50", num: "50", name: "Zero-Gravity Spatial 3D Floating Header", archetype: "Spatial Header",
    tags: ["#spatial", "#3d", "#cosmic", "#zero-gravity"],
    desc: "Cabecera flotante ingrávida con halo cuántico y micro-levitación espacial.",
    html: `<header class="w-full bg-slate-950/80 border border-cyan-400/40 backdrop-blur-2xl px-6 py-3.5 rounded-2xl flex justify-between items-center shadow-[0_15px_35px_rgba(6,182,212,0.2)] text-xs"><div class="flex items-center gap-3"><i class="ph-fill ph-planet text-cyan-400 text-lg"></i><span class="font-serif font-bold text-white text-sm">ORBITA CUÁNTICA</span></div><div class="flex gap-4 font-mono text-cyan-300"><a href="#" class="hover:text-white">Telemetría</a><a href="#" class="hover:text-white">Propulsión</a></div></header>`
  }
];
