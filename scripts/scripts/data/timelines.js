// 50 Líneas de Tiempo, Horizontes & Feeds
export const timelines = [
  {
    id: "time_01", num: "01", name: "Daily Allocation Horizon (07:00 a 20:00)", archetype: "Daily Horizon",
    tags: ["#horizon", "#daily", "#time-blocking", "#schedule"],
    desc: "Bloques de tiempo horizontales de 07:00 a 20:00 con código cromático (Deep Work, Táctica, Búfer) y línea viva 'NOW'.",
    html: `<div class="p-5 bg-[#0A0D14] border border-slate-800 rounded-xl space-y-3"><div class="flex justify-between items-center text-xs"><span class="font-bold text-white">HORIZONTE DIARIO 07:00 - 20:00</span><span class="text-amber-400 font-mono text-[10px]">NOW: 18:24</span></div><div class="h-10 bg-slate-900 border border-slate-800 rounded-lg flex overflow-hidden p-1 gap-1"><div class="h-full bg-amber-400/20 border border-amber-400/40 rounded text-amber-300 font-mono text-[10px] flex items-center justify-center font-bold w-[35%]">DEEP WORK (150m)</div><div class="h-full bg-blue-500/20 border border-blue-500/40 rounded text-blue-300 font-mono text-[10px] flex items-center justify-center font-bold w-[25%]">SYNC M&A</div><div class="h-full bg-emerald-500/20 border border-emerald-500/40 rounded text-emerald-300 font-mono text-[10px] flex items-center justify-center font-bold w-[15%]">BUFFER</div><div class="h-full bg-slate-800 rounded text-slate-500 font-mono text-[10px] flex items-center justify-center w-[25%]">LIBRE</div></div></div>`
  },
  {
    id: "time_02", num: "02", name: "Vertical Stepper Audit Trail con Nodos", archetype: "Vertical Stepper",
    tags: ["#stepper", "#audit", "#nodes", "#vertical"],
    desc: "Auditoría secuencial con nodos circulares conectados por una línea de hilo de datos.",
    html: `<div class="p-5 bg-slate-950 border border-slate-800 rounded-xl space-y-3 text-xs max-w-sm"><div class="flex gap-3"><div class="flex flex-col items-center"><span class="w-3 h-3 rounded-full bg-emerald-400"></span><div class="w-[1px] h-8 bg-slate-700"></div></div><div class="space-y-0.5"><div class="font-bold text-white">Firma de Términos Serie B</div><div class="text-[10px] text-slate-400 font-mono">14:20 GVA // APROBADO</div></div></div><div class="flex gap-3"><div class="flex flex-col items-center"><span class="w-3 h-3 rounded-full bg-amber-400"></span><div class="w-[1px] h-8 bg-slate-700"></div></div><div class="space-y-0.5"><div class="font-bold text-amber-300">Revisión de Enclave Seguro</div><div class="text-[10px] text-slate-400 font-mono">16:00 GVA // EN CURSO</div></div></div><div class="flex gap-3"><div class="flex flex-col items-center"><span class="w-3 h-3 rounded-full bg-slate-800"></span></div><div class="space-y-0.5"><div class="text-slate-500">Cierre de Sesión Notarial</div><div class="text-[10px] text-slate-600 font-mono">19:30 GVA // PROGRAMADO</div></div></div></div>`
  },
  {
    id: "time_03", num: "03", name: "Asymmetric Alternating Milestone Feed", archetype: "Milestone Feed",
    tags: ["#milestone", "#feed", "#alternating", "#cards"],
    desc: "Hitos cronológicos alternados en tarjetas elegantes a derecha e izquierda.",
    html: `<div class="p-5 bg-slate-900 border border-slate-800 rounded-xl space-y-3 text-xs"><div class="p-3 bg-slate-950 border border-slate-800 rounded-lg flex justify-between items-center"><div><div class="text-amber-400 font-mono text-[10px]">FASE 1 // Q1 2026</div><div class="text-white font-bold">Constitución del Sindicato</div></div><i class="ph-bold ph-check text-emerald-400"></i></div><div class="p-3 bg-slate-950 border border-slate-800 rounded-lg flex justify-between items-center"><div><div class="text-cyan-400 font-mono text-[10px]">FASE 2 // Q2 2026</div><div class="text-white font-bold">Despliegue de Bóveda Cuántica</div></div><span class="text-[10px] font-mono text-amber-400">75%</span></div></div>`
  },
  {
    id: "time_04", num: "04", name: "Gantt Bandwidth Cognitive Pacing", archetype: "Gantt Chart",
    tags: ["#gantt", "#bandwidth", "#pacing", "#bars"],
    desc: "Diagrama de Gantt compacto para balancear la carga de trabajo entre miembros del equipo.",
    html: `<div class="p-5 bg-slate-950 border border-slate-800 rounded-xl space-y-3 text-xs"><div class="flex justify-between items-center text-slate-400 font-mono text-[11px]"><span>TAREA</span><span>Q3 CRONOGRAMA</span></div><div class="space-y-2"><div class="flex items-center gap-3"><span class="w-20 text-slate-300 font-medium truncate">Auditoría L1</span><div class="flex-1 bg-slate-900 h-3 rounded relative overflow-hidden"><div class="bg-amber-400 h-full w-2/3 ml-4 rounded"></div></div></div><div class="flex items-center gap-3"><span class="w-20 text-slate-300 font-medium truncate">Despliegue</span><div class="flex-1 bg-slate-900 h-3 rounded relative overflow-hidden"><div class="bg-cyan-400 h-full w-1/2 ml-16 rounded"></div></div></div></div></div>`
  },
  {
    id: "time_05", num: "05", name: "Compact Terminal Event Stream", archetype: "Event Stream",
    tags: ["#stream", "#events", "#terminal", "#logs"],
    desc: "Flujo de eventos en tiempo real con marcas de tiempo en milisegundos.",
    html: `<div class="p-4 bg-black border border-slate-800 rounded-lg font-mono text-xs text-slate-300 space-y-1.5"><div class="flex gap-2 text-slate-500 text-[10px]"><span>18:24:02.104</span><span class="text-emerald-400">[AUTH]</span><span class="text-white">Sesión iniciada con éxito por AP</span></div><div class="flex gap-2 text-slate-500 text-[10px]"><span>18:24:01.890</span><span class="text-cyan-400">[SYNC]</span><span class="text-white">Bóveda Ginebra sincronizada</span></div><div class="flex gap-2 text-slate-500 text-[10px]"><span>18:23:59.412</span><span class="text-amber-400">[CALL]</span><span class="text-white">Llamada de capital procesada</span></div></div>`
  },
  {
    id: "time_06", num: "06", name: "Circular Clock Radar Horizon 24h", archetype: "Radar 24h",
    tags: ["#clock", "#radar", "#24h", "#circular"],
    desc: "Esfera de reloj de 24 horas con arcos coloreados para cada franja del día.",
    html: `<div class="p-5 bg-slate-900 border border-slate-800 rounded-xl flex items-center justify-between text-xs"><div class="space-y-1"><span class="font-bold text-white">RELOJ CIRCADIANO 24H</span><p class="text-slate-400 text-[11px]">Sincronización con el solsticio local.</p><div class="text-amber-400 font-mono text-[10px]">PICO COGNITIVO: 10:00 - 13:00</div></div><div class="w-14 h-14 rounded-full border-4 border-amber-400/40 border-t-amber-400 flex items-center justify-center font-mono text-white text-[11px] font-bold">24H</div></div>`
  },
  {
    id: "time_07", num: "07", name: "Financial Tape Ticker Stream", archetype: "Tape Ticker",
    tags: ["#tape", "#ticker", "#financial", "#orders"],
    desc: "Cinta de teletipo de operaciones financieras ejecutadas con precio y volumen.",
    html: `<div class="p-3 bg-black border border-slate-800 rounded font-mono text-xs flex justify-between items-center text-slate-300"><div><span class="text-emerald-400 font-bold">BUY</span> <span class="text-white">GOLD 999.9</span> <span class="text-slate-400">@ $2,642.10</span></div><span class="text-[10px] text-slate-500">18:24:01</span></div>`
  },
  {
    id: "time_08", num: "08", name: "Git Commit Tree with Branch Forks", archetype: "Git Tree",
    tags: ["#git", "#tree", "#commit", "#branch"],
    desc: "Árbol de commits con ramas paralelas y etiquetas de versión v2.0.",
    html: `<div class="p-4 bg-slate-950 border border-slate-800 rounded-lg font-mono text-xs text-slate-300 space-y-2"><div class="flex items-center gap-2"><span class="w-2.5 h-2.5 rounded-full bg-amber-400"></span><span class="text-amber-300 font-bold">main</span><span class="text-slate-500 text-[10px]">aa0c87d</span><span class="text-white">feat: studio catalog</span></div><div class="flex items-center gap-2 ml-4"><span class="w-2 h-2 rounded-full bg-cyan-400"></span><span class="text-cyan-300">release/2.0</span><span class="text-slate-500 text-[10px]">1c9bd0f</span><span class="text-slate-400">merge: v2 pipeline</span></div></div>`
  },
  {
    id: "time_09", num: "09", name: "Sprint Roadmap Quarters Strip", archetype: "Roadmap Strip",
    tags: ["#roadmap", "#quarters", "#sprint", "#planning"],
    desc: "Tira horizontal de cuatro trimestres con hitos de ingeniería marcados.",
    html: `<div class="grid grid-cols-4 gap-2 p-3 bg-slate-900 border border-slate-800 rounded-xl text-center text-xs font-mono"><div class="p-2 bg-slate-800 rounded text-emerald-400 font-bold">Q1: ALPHA</div><div class="p-2 bg-amber-400/20 text-amber-300 border border-amber-400/40 rounded font-bold">Q2: BETA</div><div class="p-2 bg-slate-950 rounded text-slate-500">Q3: AUDIT</div><div class="p-2 bg-slate-950 rounded text-slate-500">Q4: LAUNCH</div></div>`
  },
  {
    id: "time_10", num: "10", name: "Calendar Day Strip with Active Marker", archetype: "Day Strip",
    tags: ["#calendar", "#day-strip", "#week", "#active"],
    desc: "Franja semanal de 7 días con fecha seleccionada destacada en oro.",
    html: `<div class="flex justify-between p-2 bg-slate-950 border border-slate-800 rounded-xl text-center text-xs font-mono max-w-sm"><div class="p-2 text-slate-500">LUN<br><span class="text-white font-bold">22</span></div><div class="p-2 text-slate-500">MAR<br><span class="text-white font-bold">23</span></div><div class="p-2 bg-amber-400 text-black font-bold rounded-lg">MIÉ<br><span>24</span></div><div class="p-2 text-slate-500">JUE<br><span class="text-white font-bold">25</span></div><div class="p-2 text-slate-500">VIE<br><span class="text-white font-bold">26</span></div></div>`
  },
  {
    id: "time_11", num: "11", name: "Flight Path Radar Horizon", archetype: "Flight Path",
    tags: ["#flight", "#radar", "#aviation", "#waypoints"],
    desc: "Ruta de navegación aérea con puntos de referencia de waypoint y horas estimadas.",
    html: `<div class="p-4 bg-[#08121E] border border-blue-500/30 rounded-xl font-mono text-xs"><div class="flex justify-between text-blue-300 text-[10px] mb-2"><span>RUTA GVA-LHR</span><span>NIVEL FL360</span></div><div class="flex items-center gap-2"><span class="w-2 h-2 rounded-full bg-cyan-400"></span><div class="flex-1 h-[1px] bg-cyan-500/40"></div><span class="w-2 h-2 rounded-full bg-cyan-400"></span><div class="flex-1 h-[1px] bg-slate-700"></div><span class="w-2 h-2 rounded-full bg-slate-700"></span></div><div class="flex justify-between text-[10px] text-slate-400 mt-2"><span>SALIDA 18:00</span><span>WAYPOINT DJL</span><span>LLEGADA 19:20</span></div></div>`
  },
  {
    id: "time_12", num: "12", name: "Product Changelog Release Feed", archetype: "Changelog Feed",
    tags: ["#changelog", "#releases", "#feed", "#version"],
    desc: "Historial de versiones con etiquetas de versión, fecha y resumen de cambios.",
    html: `<div class="p-5 bg-slate-900 border border-slate-800 rounded-xl space-y-2 text-xs"><div class="flex items-center gap-2"><span class="px-2 py-0.5 rounded font-mono font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 text-[10px]">v2.1.0</span><span class="text-slate-400 text-[11px]">27 de Septiembre</span></div><h5 class="font-bold text-white">Catálogo Studio de 500 Componentes</h5><p class="text-slate-400 text-[11px] leading-relaxed">Añadida la matriz masiva de componentes interactivos con selección en 1 clic.</p></div>`
  },
  {
    id: "time_13", num: "13", name: "Legal Discovery Timeline Milestones", archetype: "Legal Timeline",
    tags: ["#legal", "#discovery", "#milestone", "#court"],
    desc: "Cronograma de proceso legal con presentación de alegaciones y vista oral.",
    html: `<div class="p-4 bg-slate-950 border border-slate-800 rounded-xl space-y-2 text-xs font-serif"><div class="flex justify-between items-center text-amber-500 text-[11px] font-mono"><span>PROCEDIMIENTO MERCANTIL</span><span>TRIBUNAL CANTONAL</span></div><div class="text-white font-bold">Presentación de Dictamen Pericial</div><p class="text-slate-400 text-[11px] font-sans">Plazo improrrogable fijado para el próximo viernes a las 15:00 horas.</p></div>`
  },
  {
    id: "time_14", num: "14", name: "Security Incident Response Feed", archetype: "Incident Feed",
    tags: ["#incident", "#security", "#soc", "#feed"],
    desc: "Flujo de respuesta a incidentes del Centro de Operaciones de Seguridad (SOC).",
    html: `<div class="p-4 bg-slate-900 border border-slate-800 rounded-xl space-y-2 text-xs"><div class="flex items-center justify-between"><span class="text-rose-400 font-mono font-bold text-[10px] flex items-center gap-1.5"><i class="ph-bold ph-shield-warning"></i> INCIDENTE #1042</span><span class="text-slate-500 font-mono text-[10px]">HACE 4M</span></div><div class="text-white font-semibold">Anomalía de tráfico en endpoint /api/auth</div><p class="text-slate-400 text-[11px]">Activado bloqueo automático de tasa límite en cloud flare.</p></div>`
  },
  {
    id: "time_15", num: "15", name: "Capital Call Schedule Table", archetype: "Capital Calls",
    tags: ["#capital-call", "#schedule", "#lp", "#fintech"],
    desc: "Calendario de desembolsos de fondos con fecha de vencimiento y estado de cobro.",
    html: `<div class="p-4 bg-slate-950 border border-slate-800 rounded-xl space-y-2 text-xs font-mono"><div class="flex justify-between text-slate-400 text-[10px]"><span>CALL #04</span><span>VENCE: 2026-10-15</span></div><div class="flex justify-between items-center"><span class="text-white font-bold">$2,000,000 USD</span><span class="px-2 py-0.5 rounded bg-amber-400/20 text-amber-300 text-[10px] font-bold">CONVOCADA</span></div><div class="text-slate-500 text-[10px]">FONDO: AURELIUS REAL ESTATE IV</div></div>`
  },
  {
    id: "time_16", num: "16", name: "Biological Circadian Rhythms Horizon", archetype: "Circadian Rhythm",
    tags: ["#circadian", "#bio", "#health", "#focus"],
    desc: "Curva de energía y alerta biológica a lo largo del día con picos de cortisol.",
    html: `<div class="p-4 bg-[#0A140F] border border-emerald-600/30 rounded-xl space-y-2 text-xs"><div class="flex justify-between items-center"><span class="text-emerald-400 font-mono text-[10px] font-bold">RITMO CIRCADIANO</span><span class="text-slate-400 font-mono text-[10px]">ÓPTIMO</span></div><div class="text-white font-bold">Ventana de Alto Enfoque 2</div><p class="text-slate-400 text-[11px]">Momento recomendado para toma de decisiones y redacción estratégica.</p></div>`
  },
  {
    id: "time_17", num: "17", name: "Sprint Burndown Day-by-Day Track", archetype: "Burndown Track",
    tags: ["#burndown", "#sprint", "#agile", "#track"],
    desc: "Seguimiento diario del remanente de tareas de la iteración en curso.",
    html: `<div class="p-4 bg-slate-900 border border-slate-800 rounded-xl space-y-2 text-xs font-mono"><div class="flex justify-between"><span class="text-slate-400">BURNDOWN DÍA 8/10</span><span class="text-emerald-400 font-bold">-4 HORAS META</span></div><div class="w-full bg-slate-800 h-2 rounded-full overflow-hidden"><div class="bg-amber-400 h-full w-[78%]"></div></div></div>`
  },
  {
    id: "time_18", num: "18", name: "Continuous Integration Pipeline Steps", archetype: "CI Pipeline",
    tags: ["#ci", "#pipeline", "#build", "#test"],
    desc: "Línea de etapas de integración continua: linting, pruebas y despliegue.",
    html: `<div class="flex items-center gap-2 p-3 bg-slate-950 border border-slate-800 rounded-lg text-xs font-mono"><span class="text-emerald-400 flex items-center gap-1"><i class="ph-bold ph-check"></i> Lint</span><span class="text-slate-600">→</span><span class="text-emerald-400 flex items-center gap-1"><i class="ph-bold ph-check"></i> Test</span><span class="text-slate-600">→</span><span class="text-amber-400 flex items-center gap-1 animate-pulse"><i class="ph-bold ph-spinner"></i> Deploy</span></div>`
  },
  {
    id: "time_19", num: "19", name: "Executive Meeting Horizon Agenda", archetype: "Meeting Agenda",
    tags: ["#meeting", "#agenda", "#executive", "#calendar"],
    desc: "Agenda ejecutiva del día con tres compromisos sincronizados con calendario suizo.",
    html: `<div class="p-4 bg-slate-900 border border-slate-800 rounded-xl space-y-2.5 text-xs"><div class="flex items-center gap-3"><span class="font-mono text-amber-400 font-bold">10:00</span><div><div class="font-bold text-white">Comité de Inversiones</div><div class="text-[10px] text-slate-400">SALA DE JUNTAS GVA</div></div></div><div class="flex items-center gap-3 opacity-60"><span class="font-mono text-slate-500 font-bold">12:30</span><div><div class="text-slate-300">Almuerzo Fiduciario</div><div class="text-[10px] text-slate-500">HOTEL DES BERGUES</div></div></div></div>`
  },
  {
    id: "time_20", num: "20", name: "Satellite Orbit Ground Track", archetype: "Satellite Track",
    tags: ["#satellite", "#orbit", "#ground-track", "#space"],
    desc: "Paso orbital del satélite con tiempos de contacto de estación terrestre.",
    html: `<div class="p-4 bg-black border border-cyan-500/40 rounded-xl font-mono text-xs"><div class="flex justify-between text-cyan-400 text-[10px] mb-1"><span>ORBIT PASS #4210</span><span>ELEV: 68°</span></div><div class="text-white font-bold text-sm">CONTACTO ESTACIÓN ZÚRICH</div><div class="text-slate-400 text-[10px] mt-1">VENTANA: 18:32 - 18:41 UTC</div></div>`
  },
  {
    id: "time_21", num: "21", name: "Macro Economic Calendar Events", archetype: "Macro Calendar",
    tags: ["#macro", "#events", "#fed", "#interest-rate"],
    desc: "Anuncios macroeconómicos previstos para la semana con impacto esperado.",
    html: `<div class="p-4 bg-slate-950 border border-slate-800 rounded-xl space-y-2 text-xs"><div class="flex justify-between items-center"><span class="px-2 py-0.5 rounded bg-rose-500/20 text-rose-300 font-mono text-[10px] font-bold">ALTO IMPACTO</span><span class="text-slate-500 font-mono text-[10px]">MAÑANA 14:30</span></div><div class="font-bold text-white">Decisión de Tipos de Interés FOMC</div><div class="text-[10px] text-slate-400 font-mono">CONSENSO: MANTENER EN 5.25%</div></div>`
  },
  {
    id: "time_22", num: "22", name: "Blockchain Block Height Stream", archetype: "Block Stream",
    tags: ["#blockchain", "#blocks", "#crypto", "#stream"],
    desc: "Flujo de los últimos 3 bloques minados en la cadena principal con sus hashes.",
    html: `<div class="p-4 bg-slate-900 border border-slate-800 rounded-xl space-y-2 text-xs font-mono"><div class="flex justify-between items-center pb-1 border-b border-slate-800"><div><span class="text-amber-400 font-bold">#19,842,104</span> <span class="text-slate-400">124 txs</span></div><span class="text-slate-500 text-[10px]">HACE 12S</span></div><div class="flex justify-between items-center"><div><span class="text-slate-300">#19,842,103</span> <span class="text-slate-500">98 txs</span></div><span class="text-slate-500 text-[10px]">HACE 24S</span></div></div>`
  },
  {
    id: "time_23", num: "23", name: "Vessel Marine AIS Tracking Line", archetype: "Marine AIS",
    tags: ["#marine", "#vessel", "#ais", "#shipping"],
    desc: "Trayectoria de buque mercante con rumbo actual, velocidad y llegada a puerto estimada.",
    html: `<div class="p-4 bg-[#0A1624] border border-blue-500/30 rounded-xl font-mono text-xs"><div class="flex justify-between text-blue-300 text-[10px] mb-1"><span>BUQUE: OLYMPIC CARRIER</span><span>RUMBO 042°</span></div><div class="text-white font-bold text-sm">EN RUTA: ROTTERDAM</div><div class="text-slate-400 text-[10px] mt-1">ETA: 2026-10-02 // 14 KTS</div></div>`
  },
  {
    id: "time_24", num: "24", name: "Audit Trail Signature Chain", archetype: "Signature Chain",
    tags: ["#signatures", "#audit", "#chain", "#legal"],
    desc: "Cadena de firmas digitales consecutivas con sello de tiempo criptográfico.",
    html: `<div class="p-4 bg-slate-950 border border-slate-800 rounded-xl space-y-2 text-xs font-serif"><div class="flex justify-between text-slate-400 font-mono text-[10px]"><span>FIRMA 1 DE 2</span><span class="text-emerald-400">VERIFICADA</span></div><div class="font-bold text-white">Alexander Pierce (Fiduciario)</div><div class="text-[10px] text-slate-500 font-mono">ED25519 // SHA-256 VALID</div></div>`
  },
  {
    id: "time_25", num: "25", name: "Battery Charge Time Remaining Curve", archetype: "Charge Curve",
    tags: ["#charge", "#battery", "#curve", "#power"],
    desc: "Curva de carga de batería con estimación de 80% en 18 minutos.",
    html: `<div class="p-4 bg-slate-900 border border-slate-800 rounded-xl space-y-2 text-xs font-mono"><div class="flex justify-between"><span class="text-slate-400">CARGA RÁPIDA 150kW</span><span class="text-cyan-400 font-bold">68% CARGADO</span></div><div class="w-full bg-slate-800 h-2 rounded-full overflow-hidden"><div class="bg-cyan-400 h-full w-[68%]"></div></div><div class="text-[10px] text-slate-500 text-right">TIEMPO HASTA 80%: 8 MIN</div></div>`
  },
  {
    id: "time_26", num: "26", name: "Executive Sleep & Recovery Architecture", archetype: "Sleep Recovery",
    tags: ["#sleep", "#recovery", "#wellness", "#health"],
    desc: "Desglose de fases de sueño profundo, REM y ligero para recuperación cognitiva.",
    html: `<div class="p-4 bg-slate-950 border border-slate-800 rounded-xl space-y-2 text-xs"><div class="flex justify-between text-slate-400 font-mono text-[10px]"><span>RECUPERACIÓN NOCTURNA</span><span class="text-amber-400">88% SCORE</span></div><div class="flex gap-1 h-3 rounded-full overflow-hidden"><div class="bg-indigo-600 h-full w-[25%]"></div><div class="bg-violet-400 h-full w-[20%]"></div><div class="bg-slate-700 h-full w-[55%]"></div></div><div class="flex justify-between text-[10px] font-mono text-slate-400"><span>PROFUNDO 1H 45M</span><span>REM 1H 30M</span></div></div>`
  },
  {
    id: "time_27", num: "27", name: "Hardware Server Patching Window", archetype: "Maintenance Window",
    tags: ["#patching", "#maintenance", "#server", "#uptime"],
    desc: "Ventana de mantenimiento programado de servidores con aviso de cuenta atrás.",
    html: `<div class="p-4 bg-slate-900 border border-slate-800 rounded-xl space-y-1 text-xs font-mono"><div class="text-amber-400 text-[10px] font-bold">VENTANA DE PARCHEO</div><div class="text-white font-bold text-sm">DOMINGO 02:00 - 04:00 UTC</div><div class="text-slate-400 text-[10px]">CONMUTACIÓN AUTOMÁTICA EN CLUSTER B</div></div>`
  },
  {
    id: "time_28", num: "28", name: "Sprint Retrospective Feedback Stream", archetype: "Retro Stream",
    tags: ["#retro", "#feedback", "#agile", "#stream"],
    desc: "Comentarios y aprendizajes registrados por el equipo al cierre de la iteración.",
    html: `<div class="p-4 bg-slate-950 border border-slate-800 rounded-xl space-y-2 text-xs"><div class="flex items-center gap-2"><span class="text-emerald-400 font-bold">+</span><span class="text-white font-medium">Mayor velocidad con el catálogo 500</span></div><div class="flex items-center gap-2 text-slate-400"><span>=</span><span>Mantener sincronización continua con git</span></div></div>`
  },
  {
    id: "time_29", num: "29", name: "Multi-Day Conference Itinerary", archetype: "Conference Agenda",
    tags: ["#conference", "#itinerary", "#sessions", "#keynote"],
    desc: "Programa de conferencias con keynotes, paneles y salas de networking.",
    html: `<div class="p-4 bg-slate-900 border border-slate-800 rounded-xl space-y-2 text-xs"><div class="text-amber-400 font-mono text-[10px] font-bold">DÍA 1 // FORO GLOBAL SOBERANO</div><div class="font-bold text-white">09:30 Apertura Presidencial</div><div class="text-slate-400">11:00 Panel: Soberanía de Datos en la Era de la IA</div></div>`
  },
  {
    id: "time_30", num: "30", name: "Real Estate Development Phase Timeline", archetype: "Real Estate Horizon",
    tags: ["#real-estate", "#construction", "#phases", "#permits"],
    desc: "Cronograma de promoción inmobiliaria desde licencias hasta entrega de llaves.",
    html: `<div class="p-4 bg-slate-950 border border-slate-800 rounded-xl space-y-2 text-xs font-mono"><div class="flex justify-between text-slate-400 text-[10px]"><span>FASE 3: CIMENTACIÓN</span><span class="text-amber-400">EN TIEMPO</span></div><div class="text-white font-bold text-sm">TORRE AURELIUS ZÚRICH</div><div class="text-slate-500 text-[10px]">ENTREGA PREVISTA: Q4 2027</div></div>`
  },
  {
    id: "time_31", num: "31", name: "Fine Wine Aging Maturity Horizon", archetype: "Wine Aging",
    tags: ["#wine", "#aging", "#maturity", "#vintage"],
    desc: "Curva de evolución de añada de gran reserva con ventana óptima de cata.",
    html: `<div class="p-4 bg-[#1A0A0E] border border-rose-900/40 rounded-xl space-y-1 text-xs font-serif"><div class="text-rose-400 text-[10px] font-mono">BODEGA SOBERANA // BORDEAUX 2016</div><div class="text-rose-100 font-bold text-sm">Ventana Óptima de Consumo</div><div class="text-rose-300/70 text-[10px] font-mono">APOGEO: 2028 - 2036 // 98 PTS</div></div>`
  },
  {
    id: "time_32", num: "32", name: "Cloud Backup Retention Daily Cycles", archetype: "Backup Cycles",
    tags: ["#backup", "#cloud", "#retention", "#snapshot"],
    desc: "Ciclos diarios, semanales y mensuales de instantáneas de datos en frío.",
    html: `<div class="p-4 bg-slate-900 border border-slate-800 rounded-xl flex justify-between items-center text-xs font-mono"><div><span class="text-slate-400 text-[10px]">INSTANTÁNEA DIARIA</span><div class="text-white font-bold">SNAPSHOT #0942</div></div><span class="px-2 py-1 rounded bg-emerald-950 text-emerald-300 text-[10px]">COMPLETA</span></div>`
  },
  {
    id: "time_33", num: "33", name: "Medical Trial Clinical Phases Strip", archetype: "Clinical Phases",
    tags: ["#clinical", "#medical", "#trial", "#fda"],
    desc: "Avance de ensayos clínicos desde Fase I hasta aprobación regulatoria final.",
    html: `<div class="p-4 bg-slate-950 border border-slate-800 rounded-xl space-y-2 text-xs font-mono"><div class="flex justify-between text-slate-400 text-[10px]"><span>ENSAYO CLÍNICO FASE IIb</span><span class="text-cyan-400">72% RECLUTADO</span></div><div class="text-white font-bold">Terapia Génica Monocigótica</div><div class="text-slate-500 text-[10px]">RESULTADOS PRELIMINARES: Q1 2027</div></div>`
  },
  {
    id: "time_34", num: "34", name: "IPO Public Listing Countdown Clock", archetype: "IPO Countdown",
    tags: ["#ipo", "#listing", "#nasdaq", "#countdown"],
    desc: "Cuenta atrás para la salida a bolsa con fecha de toque de campana fijada.",
    html: `<div class="p-5 bg-gradient-to-br from-slate-950 to-amber-950/20 border border-amber-500/40 rounded-xl text-center space-y-2"><div class="text-xs font-mono text-amber-400">SALIDA A BOLSA (IPO)</div><div class="text-2xl font-bold font-mono text-white">42D : 14H : 20M</div><div class="text-[10px] font-mono text-slate-400">TICKER: $CHRN // NYSE</div></div>`
  },
  {
    id: "time_35", num: "35", name: "Smart Grid Power Demand Forecast", archetype: "Power Demand",
    tags: ["#energy", "#grid", "#forecast", "#power"],
    desc: "Predicción horaria de consumo eléctrico de la red inteligente para las próximas 12 horas.",
    html: `<div class="p-4 bg-slate-900 border border-slate-800 rounded-xl space-y-2 text-xs font-mono"><div class="flex justify-between"><span class="text-slate-400">DEMANDA DE RED 24H</span><span class="text-amber-400">PICO A LAS 20:00</span></div><div class="w-full bg-slate-800 h-2 rounded-full overflow-hidden"><div class="bg-amber-400 h-full w-[65%]"></div></div></div>`
  },
  {
    id: "time_36", num: "36", name: "Autonomous Vehicle Route Telemetry", archetype: "AV Route",
    tags: ["#autonomous", "#vehicle", "#telemetry", "#route"],
    desc: "Puntos kilométricos de trayecto autónomo con velocidad media y estado de sensores LIDAR.",
    html: `<div class="p-4 bg-slate-950 border border-slate-800 rounded-xl font-mono text-xs"><div class="flex justify-between text-slate-400 text-[10px] mb-1"><span>TRAYECTO AUTÓNOMO</span><span>LIDAR 100%</span></div><div class="text-white font-bold text-sm">KM 142.8 // AUTOPISTA 1</div><div class="text-emerald-400 text-[10px] mt-1">VELOCIDAD: 120 KM/H CRUCERO</div></div>`
  },
  {
    id: "time_37", num: "37", name: "Seed Round to Series B Funding Ladder", archetype: "Funding Ladder",
    tags: ["#funding", "#ladder", "#series-b", "#venture"],
    desc: "Escalera de rondas de inversión acumuladas con valoraciones y fechas clave.",
    html: `<div class="p-4 bg-slate-900 border border-slate-800 rounded-xl space-y-2 text-xs font-mono"><div class="flex justify-between items-center"><span class="text-white font-bold">Serie B ($45M)</span><span class="text-amber-400 font-bold">2026</span></div><div class="flex justify-between items-center text-slate-400"><span class="text-slate-300">Serie A ($15M)</span><span>2024</span></div><div class="flex justify-between items-center text-slate-500"><span class="text-slate-400">Semilla ($3M)</span><span>2022</span></div></div>`
  },
  {
    id: "time_38", num: "38", name: "Art Conservation Restoration Log", archetype: "Art Log",
    tags: ["#art", "#conservation", "#restoration", "#heritage"],
    desc: "Registro cronológico de intervenciones de conservación en obras de arte renacentistas.",
    html: `<div class="p-4 bg-[#16120D] border border-amber-900/40 rounded-xl space-y-1 text-xs font-serif"><div class="text-amber-500 font-mono text-[10px]">CONSERVACIÓN // TALLER GINEBRA</div><div class="text-white font-bold text-sm">Limpieza de Barniz Oxidado</div><p class="text-amber-200/60 text-[11px] font-sans">Retirada de capas de barniz del siglo XIX con disolventes neutros.</p></div>`
  },
  {
    id: "time_39", num: "39", name: "Data Center Cold Aisle Thermal Cycle", archetype: "Cold Aisle",
    tags: ["#datacenter", "#cooling", "#thermal", "#servers"],
    desc: "Ciclo térmico del pasillo frío del centro de datos con fluctuación menor a 0.5°C.",
    html: `<div class="p-4 bg-slate-950 border border-slate-800 rounded-lg font-mono text-xs flex justify-between items-center"><div><span class="text-slate-400 text-[10px]">PASILLO FRÍO SALA 3</span><div class="text-cyan-300 font-bold">21.4 °C ESTABLE</div></div><span class="text-emerald-400">FLUJO OPTIMAL</span></div>`
  },
  {
    id: "time_40", num: "40", name: "Patent Examination Office Milestones", archetype: "Patent Milestones",
    tags: ["#patent", "#ip", "#milestones", "#legal"],
    desc: "Hitos de examen de patente de invención ante la oficina europea de patentes (EPO).",
    html: `<div class="p-4 bg-slate-900 border border-slate-800 rounded-xl space-y-2 text-xs font-mono"><div class="flex justify-between text-slate-400 text-[10px]"><span>PATENTE EP #904281</span><span class="text-emerald-400">CONCEDIDA</span></div><div class="text-white font-bold">Algoritmo de Inferencia Bayesiana</div><div class="text-slate-500 text-[10px]">PROTECCIÓN HASTA: 2046</div></div>`
  },
  {
    id: "time_41", num: "41", name: "Private Equity Portfolio Exit Horizon", archetype: "PE Exit Horizon",
    tags: ["#private-equity", "#exit", "#m&a", "#horizon"],
    desc: "Horizonte previsto para desinversión de empresas participadas con múltiplo objetivo.",
    html: `<div class="p-4 bg-slate-950 border border-slate-800 rounded-xl space-y-2 text-xs font-serif"><div class="flex justify-between font-mono text-slate-400 text-[10px]"><span>SALIDA ESTRATÉGICA</span><span>M&A TRADE SALE</span></div><div class="text-white font-bold text-sm">Obelisk London Holdings Ltd</div><div class="text-amber-400 font-mono text-xs">MÚLTIPLO OBJETIVO: 3.4x MOIC</div></div>`
  },
  {
    id: "time_42", num: "42", name: "Subsea Fiber Optic Cable Latency Stream", archetype: "Subsea Cable",
    tags: ["#cable", "#subsea", "#fiber", "#latency"],
    desc: "Monitorización de latencia en cable submarino transatlántico con detección acústica.",
    html: `<div class="p-4 bg-slate-900 border border-slate-800 rounded-xl font-mono text-xs flex justify-between items-center"><div><span class="text-slate-400 text-[10px]">CABLE TRANSATLÁNTICO 4</span><div class="text-cyan-400 font-bold">58.2 ms RTT</div></div><span class="text-emerald-400">0.00% PÉRDIDA</span></div>`
  },
  {
    id: "time_43", num: "43", name: "High-Altitude Balloon Stratosphere Flight", archetype: "Stratosphere",
    tags: ["#balloon", "#stratosphere", "#altitude", "#flight"],
    desc: "Ascenso estratosférico con registro de altitud barométrica cada 1.000 metros.",
    html: `<div class="p-4 bg-[#0A1420] border border-blue-500/30 rounded-xl font-mono text-xs"><div class="flex justify-between text-blue-300 text-[10px] mb-1"><span>SONDA ESTRATOSFÉRICA</span><span>32,400 M</span></div><div class="text-white font-bold text-sm">EN TECHO DE VUELO</div><div class="text-slate-400 text-[10px] mt-1">PRESIÓN: 8.4 hPa // -56°C</div></div>`
  },
  {
    id: "time_44", num: "44", name: "Cognitive Focus Sprint Countdown", archetype: "Focus Sprint",
    tags: ["#sprint", "#focus", "#countdown", "#pomodoro"],
    desc: "Temporizador de sprint activo de 50 minutos con botón de pausa y conclusión.",
    html: `<div class="p-5 bg-gradient-to-br from-slate-950 to-amber-950/30 border border-amber-500/40 rounded-xl flex items-center justify-between"><div class="space-y-1"><span class="text-[10px] font-mono text-amber-400">SESIÓN DE FOCO #02</span><div class="text-2xl font-bold font-mono text-white">34:18</div><span class="text-xs text-slate-400">Revisión de arquitectura enclave</span></div><button class="px-3 py-1.5 rounded bg-amber-400 text-black font-bold text-xs">Pausar</button></div>`
  },
  {
    id: "time_45", num: "45", name: "Maritime Port Harbor Berth Schedule", archetype: "Port Berth",
    tags: ["#harbor", "#port", "#berth", "#maritime"],
    desc: "Asignación de atraque en dársena comercial con tiempos de carga y estiba.",
    html: `<div class="p-4 bg-slate-950 border border-slate-800 rounded-xl font-mono text-xs space-y-1"><div class="text-slate-400 text-[10px]">ATRAQUE DÁRSENA 04</div><div class="text-white font-bold text-sm">DESCARGA DE CONTENEDORES</div><div class="text-emerald-400 text-[10px]">OPERATIVO: 06:00 - 18:00</div></div>`
  },
  {
    id: "time_46", num: "46", name: "Corporate M&A Due Diligence Horizon", archetype: "Due Diligence",
    tags: ["#m&a", "#due-diligence", "#legal", "#audit"],
    desc: "Calendario de revisión legal, financiera y técnica de due diligence de adquisición.",
    html: `<div class="p-4 bg-slate-900 border border-slate-800 rounded-xl space-y-2 text-xs font-serif"><div class="flex justify-between font-mono text-slate-400 text-[10px]"><span>DUE DILIGENCE</span><span class="text-amber-400">SEMANA 3 DE 6</span></div><div class="text-white font-bold text-sm">Auditoría Fiscal y Laboral</div><p class="text-slate-400 text-[11px] font-sans">Informe preliminar listo para envío a los socios directores.</p></div>`
  },
  {
    id: "time_47", num: "47", name: "Quantum Computing Coherence Time Log", archetype: "Coherence Time",
    tags: ["#quantum", "#qubit", "#coherence", "#physics"],
    desc: "Tiempo de coherencia cuántica de qubits superconductores antes de desfasamiento.",
    html: `<div class="p-4 bg-black border border-purple-500/40 rounded-lg font-mono text-xs flex justify-between items-center"><div><span class="text-purple-400 text-[10px]">TIEMPO DE COHERENCIA T2</span><div class="text-white font-bold">142 μs ESTABLE</div></div><span class="text-emerald-400">RECORD LAB</span></div>`
  },
  {
    id: "time_48", num: "48", name: "Sovereign Gold Vault Inventory Audit", archetype: "Vault Inventory",
    tags: ["#vault", "#gold", "#inventory", "#audit"],
    desc: "Auditoría de inventario físico de lingotes con número de serie y peso verificado.",
    html: `<div class="p-4 bg-gradient-to-br from-slate-950 to-amber-950/20 border border-amber-500/30 rounded-xl font-serif text-xs"><div class="flex justify-between font-mono text-amber-500 text-[10px] mb-1"><span>BÓVEDA PRINCIPAL</span><span>SERIE № 4921</span></div><div class="text-white font-bold text-sm">Lingote 400 oz Good Delivery</div><div class="text-amber-300 font-mono text-[10px] mt-1">PUREZA: 999.9 // SELLO ZÚRICH</div></div>`
  },
  {
    id: "time_49", num: "49", name: "Monolithic Blackout Log Feed", archetype: "Blackout Feed",
    tags: ["#monolith", "#blackout", "#feed", "#minimal"],
    desc: "Alimentación de registros sin adornos sobre negro puro con marcas de tiempo.",
    html: `<div class="p-4 bg-black border border-neutral-800 rounded-none font-mono text-xs space-y-2 text-neutral-300"><div class="flex justify-between text-neutral-500 text-[10px]"><span>18:24:00</span><span>SYS</span></div><div class="text-white font-bold">INICIALIZACIÓN DE ENTORNO COMPLETADA</div></div>`
  },
  {
    id: "time_50", num: "50", name: "Zero-Gravity Quantum Event Horizon", archetype: "Quantum Horizon",
    tags: ["#quantum", "#horizon", "#singularity", "#zero-gravity"],
    desc: "Línea de tiempo de eventos cuánticos en el horizonte de sucesos de una simulación cósmica.",
    html: `<div class="p-5 bg-slate-950/80 border border-cyan-400/40 rounded-2xl shadow-[0_10px_30px_rgba(6,182,212,0.2)] text-xs font-mono"><div class="flex justify-between text-cyan-300 text-[10px] mb-2"><span>HORIZONTE DE SUCESOS</span><span>t = 0.000s</span></div><div class="text-white font-bold text-sm font-serif">Simulación de Colapso Gravitacional</div><div class="text-cyan-400 text-[10px] mt-2">DILATACIÓN TEMPORAL: 10,000x</div></div>`
  }
];
