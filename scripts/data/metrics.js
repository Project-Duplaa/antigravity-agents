// 50 Widgets de Métricas & KPIs
export const metrics = [
  {
    id: "metric_01", num: "01", name: "Horological Precision Dial Gauge", archetype: "Horological Watch",
    tags: ["#gauge", "#svg", "#circular", "#watch"],
    desc: "Indicador circular con aguja de oro suizo, escala de 0 a 100 y lectura de porcentaje de carga cognitiva.",
    html: `<div class="p-5 bg-[#0D141F] border border-amber-400/20 rounded-xl flex items-center justify-between"><div class="space-y-1"><span class="text-[10px] font-mono text-slate-400 uppercase tracking-widest">CARGA COGNITIVA</span><div class="text-2xl font-serif text-white font-bold">91.4%</div><span class="text-xs text-amber-400 font-mono">ESTADO: ALTO ENFOQUE</span></div><div class="relative w-16 h-16 flex items-center justify-center"><svg class="w-full h-full -rotate-90" viewBox="0 0 36 36"><path class="text-slate-800" stroke-width="3.5" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" /><path class="text-amber-400" stroke-dasharray="91, 100" stroke-width="3.5" stroke-linecap="round" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" /></svg><span class="absolute text-[11px] font-mono font-bold text-white">91%</span></div></div>`
  },
  {
    id: "metric_02", num: "02", name: "Delta Comparison with Mini Sparkline", archetype: "FinTech Telemetry",
    tags: ["#sparkline", "#delta", "#fintech", "#svg"],
    desc: "Métrica con cálculo delta porcentual y gráfico de línea SVG de 7 días.",
    html: `<div class="p-5 bg-slate-900 border border-slate-800 rounded-xl flex justify-between items-end"><div class="space-y-1"><span class="text-xs text-slate-400 font-mono">LIQUIDEZ DISPONIBLE</span><div class="text-xl font-bold font-mono text-white">$14.85M</div><span class="text-xs text-emerald-400 font-mono">+12.4% vs semana ant.</span></div><div class="w-24 h-10"><svg class="w-full h-full" viewBox="0 0 100 40"><path d="M0,35 Q20,15 40,25 T80,10 T100,5" fill="none" stroke="#10B981" stroke-width="2.5" stroke-linecap="round"/><path d="M0,35 Q20,15 40,25 T80,10 T100,5 L100,40 L0,40 Z" fill="rgba(16,185,129,0.1)"/></svg></div></div>`
  },
  {
    id: "metric_03", num: "03", name: "Multi-Segment Energy Meter", archetype: "Segmented Bar",
    tags: ["#meter", "#energy", "#segmented", "#multi-color"],
    desc: "Barra segmentada de tres colores para representar Deep Work, Tareas Tácticas y Búfer.",
    html: `<div class="p-5 bg-slate-950 border border-slate-800 rounded-xl space-y-3"><div class="flex justify-between items-center"><span class="text-xs font-bold text-white">DISTRIBUCIÓN DE ENERGÍA</span><span class="text-xs font-mono text-amber-400">7H 15M TOTAL</span></div><div class="h-2.5 w-full bg-slate-900 rounded-full flex overflow-hidden gap-1"><div class="bg-amber-400 h-full w-[55%]"></div><div class="bg-blue-500 h-full w-[30%]"></div><div class="bg-emerald-400 h-full w-[15%]"></div></div><div class="flex justify-between text-[11px] font-mono text-slate-400"><span>FOCO: 55%</span><span>TÁCTICA: 30%</span><span>REPOSO: 15%</span></div></div>`
  },
  {
    id: "metric_04", num: "04", name: "Sovereign Gold Ingot KPI", archetype: "Sovereign Gold",
    tags: ["#gold", "#ingot", "#sovereign", "#kpi"],
    desc: "KPI institucional en pan de oro con gran cifra en serifa y borde dorado suave.",
    html: `<div class="p-5 bg-gradient-to-br from-[#1C150A] to-[#0A0D14] border border-amber-500/40 rounded-xl"><span class="text-[10px] font-mono text-amber-400 uppercase tracking-widest">ACTIVOS TOTALES EN CUSTODIA</span><div class="text-2xl font-serif font-bold text-white mt-1 mb-1">$42,910,000</div><div class="text-xs font-mono text-amber-300">CUSTODIA SEGREGADA ZÚRICH</div></div>`
  },
  {
    id: "metric_05", num: "05", name: "Tactical Military HUD Reticle Counter", archetype: "Tactical HUD",
    tags: ["#tactical", "#hud", "#reticle", "#counter"],
    desc: "Contador con retícula militar, números mono y coordenadas geográficas.",
    html: `<div class="p-4 bg-[#0A1208] border border-lime-600/40 rounded font-mono text-xs"><div class="flex justify-between text-lime-400 text-[10px] mb-1"><span>NODOS DE TRANSMISIÓN</span><i class="ph-bold ph-crosshair"></i></div><div class="text-xl font-bold text-white mb-1">128 // 128</div><div class="text-lime-400 text-[10px]">COBERTURA GLOBAL 100%</div></div>`
  },
  {
    id: "metric_06", num: "06", name: "Canvas Area Mini-Sparkline", archetype: "Area Sparkline",
    tags: ["#sparkline", "#area", "#cyan", "#chart"],
    desc: "Gráfico de área relleno con gradiente en cian con punto de valor actual.",
    html: `<div class="p-5 bg-slate-900 border border-slate-800 rounded-xl space-y-2"><div class="flex justify-between items-center"><span class="text-xs text-slate-400 font-mono">LATENCIA DE RED</span><span class="text-sm font-bold font-mono text-cyan-400">1.2 ms</span></div><div class="w-full h-8"><svg class="w-full h-full" viewBox="0 0 100 30"><path d="M0,25 Q30,5 50,20 T100,8" fill="none" stroke="#06B6D4" stroke-width="2"/><path d="M0,25 Q30,5 50,20 T100,8 L100,30 L0,30 Z" fill="rgba(6,182,212,0.15)"/></svg></div></div>`
  },
  {
    id: "metric_07", num: "07", name: "Bullet Chart with Target Threshold", archetype: "Bullet Chart",
    tags: ["#bullet", "#target", "#threshold", "#finance"],
    desc: "Gráfico de bala con barra de rendimiento actual, rango aceptable y línea de objetivo fijada.",
    html: `<div class="p-5 bg-slate-950 border border-slate-800 rounded-xl space-y-2"><div class="flex justify-between text-xs"><span class="font-bold text-white">OBJETIVO DE FOCO DIARIO</span><span class="font-mono text-amber-400">5.2h / 6.0h</span></div><div class="h-4 bg-slate-800 rounded relative overflow-hidden"><div class="h-full bg-slate-700 w-3/4"></div><div class="h-full bg-amber-400 w-[65%] absolute top-0 left-0"></div><div class="h-full w-[2px] bg-white absolute top-0 left-[75%] z-10"></div></div><div class="text-[10px] font-mono text-slate-500 text-right">META: 75% DEL TIEMPO</div></div>`
  },
  {
    id: "metric_08", num: "08", name: "Percentage Ring with Focus Debt", archetype: "Donut Ring",
    tags: ["#ring", "#donut", "#focus-debt", "#metric"],
    desc: "Anillo de progreso circular que señala el porcentaje de deuda de atención acumulada.",
    html: `<div class="p-5 bg-slate-900 border border-slate-800 rounded-xl flex items-center justify-between"><div class="space-y-0.5"><span class="text-xs text-slate-400 font-mono">DEUDA DE ENFOQUE</span><div class="text-xl font-bold font-mono text-rose-400">-42 MIN</div><span class="text-[10px] text-slate-500">RECUPERACIÓN RECOMENDADA</span></div><div class="w-12 h-12 rounded-full border-4 border-rose-500/30 border-t-rose-500 flex items-center justify-center font-mono font-bold text-xs text-white">78%</div></div>`
  },
  {
    id: "metric_09", num: "09", name: "Live Ticker Metric with 2Hz Pulse", archetype: "Live Pulse",
    tags: ["#ticker", "#pulse", "#beacon", "#live"],
    desc: "Tarjeta de cotización con baliza de pulso segura y actualización de microsegundos.",
    html: `<div class="p-4 bg-slate-950 border border-slate-800 rounded-lg flex items-center justify-between"><div class="flex items-center gap-2.5"><span class="relative flex h-2.5 w-2.5"><span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span><span class="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span></span><span class="text-xs font-mono text-slate-300">SWIFT MT103</span></div><div class="text-sm font-bold font-mono text-emerald-400">LIQUIDADO</div></div>`
  },
  {
    id: "metric_10", num: "10", name: "Speedometer Arc Gauge", archetype: "Speedometer Arc",
    tags: ["#speedometer", "#arc", "#gauge", "#dial"],
    desc: "Arco semicircular de 180 grados graduado en secciones verde, amarillo y rojo.",
    html: `<div class="p-5 bg-slate-900 border border-slate-800 rounded-xl text-center space-y-2"><div class="text-xs text-slate-400 font-mono">VELOCIDAD DE EJECUCIÓN</div><div class="text-2xl font-bold font-mono text-white">98.4 TPS</div><div class="w-28 h-7 mx-auto overflow-hidden relative"><div class="w-28 h-28 rounded-full border-8 border-slate-800 border-t-amber-400 border-r-amber-400"></div></div><div class="text-[10px] font-mono text-emerald-400">CAPACIDAD ÓPTIMA</div></div>`
  },
  {
    id: "metric_11", num: "11", name: "Candlestick Mini Price Gauge", archetype: "Candlestick",
    tags: ["#candlestick", "#finance", "#trading", "#price"],
    desc: "Tres velas japonesas de cotización financiera con mechas superior e inferior.",
    html: `<div class="p-4 bg-slate-950 border border-slate-800 rounded-lg flex justify-between items-center"><div class="space-y-0.5"><div class="text-[10px] font-mono text-slate-400">SPREAD ORO/USD</div><div class="text-base font-bold font-mono text-amber-400">$2,642.10</div></div><div class="flex gap-2 items-end h-8"><div class="w-2 bg-emerald-500 h-6 rounded-xs"></div><div class="w-2 bg-emerald-500 h-7 rounded-xs"></div><div class="w-2 bg-rose-500 h-4 rounded-xs"></div></div></div>`
  },
  {
    id: "metric_12", num: "12", name: "Comparison Pill Dual Metric", archetype: "Comparison Pill",
    tags: ["#comparison", "#pills", "#metric", "#delta"],
    desc: "Dos píldoras enfrentadas comparando el volumen previsto con el ejecutado.",
    html: `<div class="p-4 bg-slate-900 border border-slate-800 rounded-xl space-y-2"><div class="text-xs font-bold text-white">ASIGNACIÓN MENSUAL</div><div class="grid grid-cols-2 gap-2 text-center text-xs font-mono"><div class="p-2 bg-slate-800 rounded"><span class="text-[10px] text-slate-400 block">PLAN:</span>$25.0M</div><div class="p-2 bg-amber-400/20 text-amber-300 rounded border border-amber-400/30"><span class="text-[10px] block">REAL:</span>$24.8M</div></div></div>`
  },
  {
    id: "metric_13", num: "13", name: "Thermometer Vertical Temperature Bar", archetype: "Thermometer",
    tags: ["#thermometer", "#vertical", "#bar", "#hardware"],
    desc: "Termómetro vertical con escala graduada de temperatura de chips GPU.",
    html: `<div class="p-4 bg-slate-950 border border-slate-800 rounded-xl flex items-center justify-between"><div class="space-y-1"><span class="text-xs text-slate-400 font-mono">TEMPERATURA GPU</span><div class="text-xl font-bold font-mono text-white">48.2 °C</div><span class="text-[10px] text-emerald-400 font-mono">ENLACE TÉRMICO OK</span></div><div class="w-3 h-14 bg-slate-800 rounded-full overflow-hidden p-0.5 flex flex-col justify-end"><div class="w-full bg-emerald-400 rounded-full h-[45%]"></div></div></div>`
  },
  {
    id: "metric_14", num: "14", name: "Audio VU Peak Meter", archetype: "VU Meter",
    tags: ["#vu", "#meter", "#audio", "#db"],
    desc: "Medidor de picos acústicos en decibelios con segmentos verdes, amarillos y rojos.",
    html: `<div class="p-4 bg-black border border-slate-800 rounded-lg space-y-1.5 font-mono text-xs"><div class="flex justify-between text-slate-400 text-[10px]"><span>CANAL L/R</span><span>-3.2 dBFS</span></div><div class="flex gap-0.5 h-3"><div class="w-2 bg-emerald-500"></div><div class="w-2 bg-emerald-500"></div><div class="w-2 bg-emerald-500"></div><div class="w-2 bg-yellow-500"></div><div class="w-2 bg-red-500/30"></div></div></div>`
  },
  {
    id: "metric_15", num: "15", name: "Battery Life Status Pill", archetype: "Battery Status",
    tags: ["#battery", "#power", "#pill", "#hardware"],
    desc: "Icono de batería con indicador de carga porcentual y tiempo restante estimado.",
    html: `<div class="p-4 bg-slate-900 border border-slate-800 rounded-xl flex items-center justify-between"><div class="space-y-0.5"><div class="text-xs text-slate-400 font-mono">ENERGÍA DE RESERVA</div><div class="text-sm font-bold text-white font-mono">8H 24M RESTANTES</div></div><div class="flex items-center gap-1"><div class="w-8 h-4 border-2 border-emerald-400 rounded-sm p-0.5"><div class="bg-emerald-400 h-full w-[80%]"></div></div><div class="w-0.5 h-1.5 bg-emerald-400"></div></div></div>`
  },
  {
    id: "metric_16", num: "16", name: "Memory Consumption Donut Slice", archetype: "Memory Donut",
    tags: ["#memory", "#donut", "#ram", "#server"],
    desc: "Círculo con desglose de memoria RAM utilizada, en búfer y libre.",
    html: `<div class="p-4 bg-slate-950 border border-slate-800 rounded-xl flex items-center justify-between"><div class="space-y-1"><span class="text-xs font-mono text-slate-400">USO DE MEMORIA</span><div class="text-lg font-bold font-mono text-cyan-400">14.2 / 64 GB</div><span class="text-[10px] text-slate-500">22% EN USO</span></div><div class="w-10 h-10 rounded-full border-4 border-slate-800 border-t-cyan-400 border-r-cyan-400"></div></div>`
  },
  {
    id: "metric_17", num: "17", name: "Throughput Counter with K/M Multiplier", archetype: "Throughput",
    tags: ["#throughput", "#counter", "#multiplier", "#network"],
    desc: "Contador numérico de alto impacto con sufijo de multiplicador K/M/B.",
    html: `<div class="p-5 bg-slate-900 border border-slate-800 rounded-xl"><div class="text-xs font-mono text-slate-400 mb-1">OPERACIONES DIARIAS</div><div class="text-3xl font-bold font-mono text-white">4.82<span class="text-amber-400 text-lg font-serif">M</span></div><div class="text-xs text-emerald-400 font-mono mt-1">+840K hoy</div></div>`
  },
  {
    id: "metric_18", num: "18", name: "Network Ping Latency Gauge", archetype: "Latency Gauge",
    tags: ["#latency", "#ping", "#network", "#ms"],
    desc: "Métrica de latencia de red ultrabaja en microsegundos con indicación de ruta.",
    html: `<div class="p-4 bg-slate-950 border border-slate-800 rounded-lg flex justify-between items-center"><div class="space-y-0.5"><div class="text-[10px] font-mono text-slate-400">GINEBRA ⇄ LONDRES</div><div class="text-base font-bold font-mono text-white">4.2 ms</div></div><div class="w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-[0_0_8px_#34D399]"></div></div>`
  },
  {
    id: "metric_19", num: "19", name: "System Uptime Percentage Pill", archetype: "Uptime Pill",
    tags: ["#uptime", "#sla", "#cloud", "#percentage"],
    desc: "SLA de disponibilidad con 5 nueves de precisión garantizada.",
    html: `<div class="p-4 bg-slate-900 border border-slate-800 rounded-xl flex justify-between items-center"><div class="space-y-0.5"><span class="text-xs text-slate-400 font-mono">DISPONIBILIDAD SLA</span><div class="text-lg font-bold font-mono text-emerald-400">99.999%</div></div><span class="px-2 py-1 rounded bg-emerald-950 text-emerald-300 font-mono text-[10px]">CERO CAÍDAS</span></div>`
  },
  {
    id: "metric_20", num: "20", name: "Cryptographic Entropy Score", archetype: "Crypto Entropy",
    tags: ["#entropy", "#crypto", "#security", "#score"],
    desc: "Puntuación de entropía aleatoria cuántica en bits para generación de llaves.",
    html: `<div class="p-4 bg-black border border-purple-500/40 rounded-lg font-mono text-xs"><div class="text-slate-400 text-[10px]">ENTROPÍA CUÁNTICA</div><div class="text-xl font-bold text-purple-300">256 BITS PURE</div><div class="text-purple-400 text-[10px] mt-1">GENERADOR TRNG: OK</div></div>`
  },
  {
    id: "metric_21", num: "21", name: "Carbon Footprint Offset Metric", archetype: "Carbon Offset",
    tags: ["#carbon", "#eco", "#green", "#offset"],
    desc: "Métrica de compensación de emisiones de carbono en toneladas métricas.",
    html: `<div class="p-4 bg-[#0A160F] border border-emerald-600/30 rounded-xl flex justify-between items-center"><div class="space-y-0.5"><span class="text-xs text-emerald-400 font-mono">HUELLA COMPENSADA</span><div class="text-lg font-bold text-white font-mono">142.8 tCO2e</div></div><i class="ph-fill ph-leaf text-emerald-400 text-xl"></i></div>`
  },
  {
    id: "metric_22", num: "22", name: "Vault Security Health Index", archetype: "Security Index",
    tags: ["#health", "#security", "#vault", "#index"],
    desc: "Índice de salud de bóveda de 100 puntos con comprobación de claves multisig.",
    html: `<div class="p-4 bg-slate-950 border border-slate-800 rounded-xl flex justify-between items-center"><div class="space-y-0.5"><span class="text-xs text-slate-400 font-mono">SALUD DE BÓVEDA</span><div class="text-xl font-bold font-mono text-white">100 / 100</div></div><span class="text-xs font-mono text-amber-400 font-bold">5 DE 5 LLAVES</span></div>`
  },
  {
    id: "metric_23", num: "23", name: "Transaction Gas Price Gwei", archetype: "Gas Gwei",
    tags: ["#gas", "#gwei", "#eth", "#fees"],
    desc: "Monitor de precio de gas en la red Ethereum con semáforo de coste bajo.",
    html: `<div class="p-4 bg-slate-900 border border-slate-800 rounded-lg flex justify-between items-center"><div class="space-y-0.5"><span class="text-[10px] text-slate-400 font-mono">TASA DE RED (GAS)</span><div class="text-base font-bold font-mono text-emerald-400">12 Gwei</div></div><span class="text-[10px] font-mono text-slate-500">COSTE ÓPTIMO</span></div>`
  },
  {
    id: "metric_24", num: "24", name: "Daily Active Synergies Ratio", archetype: "Synergies Ratio",
    tags: ["#ratio", "#synergy", "#teams", "#active"],
    desc: "Ratio de colaboración interdepartamental entre equipos de ingeniería y estrategia.",
    html: `<div class="p-4 bg-slate-950 border border-slate-800 rounded-xl space-y-1"><div class="text-xs text-slate-400 font-mono">SINERGIA DE EQUIPO</div><div class="text-xl font-bold font-mono text-white">88.4%</div><div class="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden"><div class="bg-indigo-400 h-full w-[88%]"></div></div></div>`
  },
  {
    id: "metric_25", num: "25", name: "Sprint Focus Velocity Points", archetype: "Sprint Velocity",
    tags: ["#velocity", "#sprint", "#scrum", "#points"],
    desc: "Puntos de velocidad completados en el sprint en curso frente a la estimación.",
    html: `<div class="p-4 bg-slate-900 border border-slate-800 rounded-xl flex justify-between items-center"><div class="space-y-0.5"><span class="text-xs text-slate-400 font-mono">PUNTOS DE SPRINT</span><div class="text-xl font-bold font-mono text-amber-400">42 / 50 pts</div></div><span class="text-xs font-mono text-slate-500">84% META</span></div>`
  },
  {
    id: "metric_26", num: "26", name: "Real-Time Active Visitors Pulse", archetype: "Visitors Pulse",
    tags: ["#visitors", "#analytics", "#live", "#counter"],
    desc: "Contador de usuarios concurrentes en directo con actualización automática.",
    html: `<div class="p-4 bg-slate-950 border border-slate-800 rounded-lg flex justify-between items-center"><div class="flex items-center gap-2"><span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span><span class="text-xs font-mono text-slate-300">USUARIOS ACTIVOS</span></div><div class="text-lg font-bold font-mono text-white">1,492</div></div>`
  },
  {
    id: "metric_27", num: "27", name: "Storage Quota Terabyte Meter", archetype: "Storage Meter",
    tags: ["#storage", "#terabyte", "#quota", "#cloud"],
    desc: "Capacidad de almacenamiento ocupada en terabytes en cabina SSD NVMe.",
    html: `<div class="p-4 bg-slate-900 border border-slate-800 rounded-xl space-y-2"><div class="flex justify-between text-xs font-mono"><span class="text-slate-400">ALMACENAMIENTO NVMe</span><span class="text-white">4.2 TB / 10 TB</span></div><div class="w-full bg-slate-800 h-2 rounded-full overflow-hidden"><div class="bg-cyan-400 h-full w-[42%]"></div></div></div>`
  },
  {
    id: "metric_28", num: "28", name: "Treasury Bond Yield Basis Points", archetype: "Bond Yield",
    tags: ["#bonds", "#yield", "#bps", "#macro"],
    desc: "Rendimiento de bono soberano con cambio expresado en puntos básicos (bps).",
    html: `<div class="p-4 bg-slate-950 border border-slate-800 rounded-xl flex justify-between items-center"><div class="space-y-0.5"><span class="text-xs text-slate-400 font-mono">BONO SOBERANO 10Y</span><div class="text-lg font-bold font-mono text-white">3.84%</div></div><span class="text-xs font-mono text-rose-400">-4.2 bps</span></div>`
  },
  {
    id: "metric_29", num: "29", name: "AI Inference Tokens per Second", archetype: "Inference Tokens",
    tags: ["#tokens", "#ai", "#speed", "#tps"],
    desc: "Velocidad de generación de tokens por segundo de modelos de lenguaje en local.",
    html: `<div class="p-4 bg-black border border-slate-800 rounded-lg font-mono text-xs flex justify-between items-center"><div><div class="text-slate-400 text-[10px]">GENERACIÓN TOKENS</div><div class="text-base font-bold text-amber-300">184.2 T/S</div></div><i class="ph-bold ph-lightning text-amber-400 text-lg"></i></div>`
  },
  {
    id: "metric_30", num: "30", name: "Multisig Approval Quorum Bar", archetype: "Multisig Quorum",
    tags: ["#quorum", "#multisig", "#approvals", "#governance"],
    desc: "Progreso de firmas aprobadas para liberación de fondos corporativos.",
    html: `<div class="p-4 bg-slate-900 border border-slate-800 rounded-xl space-y-2"><div class="flex justify-between text-xs font-mono"><span class="text-slate-400">QUÓRUM DE FIRMA</span><span class="text-amber-400 font-bold">4 de 5 firmas</span></div><div class="flex gap-1.5"><span class="flex-1 h-2 rounded bg-emerald-400"></span><span class="flex-1 h-2 rounded bg-emerald-400"></span><span class="flex-1 h-2 rounded bg-emerald-400"></span><span class="flex-1 h-2 rounded bg-emerald-400"></span><span class="flex-1 h-2 rounded bg-slate-800"></span></div></div>`
  },
  {
    id: "metric_31", num: "31", name: "Cognitive Fatigue Risk Indicator", archetype: "Fatigue Risk",
    tags: ["#fatigue", "#wellness", "#risk", "#score"],
    desc: "Evaluador de fatiga cognitiva con recomendación de descanso de 15 minutos.",
    html: `<div class="p-4 bg-slate-950 border border-slate-800 rounded-xl flex justify-between items-center"><div class="space-y-0.5"><span class="text-xs text-slate-400 font-mono">ÍNDICE DE FATIGA</span><div class="text-base font-bold text-emerald-400 font-mono">BAJO (14%)</div></div><span class="text-[10px] font-mono text-slate-500">RITMO SOSTENIBLE</span></div>`
  },
  {
    id: "metric_32", num: "32", name: "Cache Hit Rate Performance", archetype: "Cache Hit",
    tags: ["#cache", "#performance", "#edge", "#cdn"],
    desc: "Tasa de aciertos de caché en borde CDN con reducción de peticiones a origen.",
    html: `<div class="p-4 bg-slate-900 border border-slate-800 rounded-lg flex justify-between items-center"><div class="space-y-0.5"><span class="text-[10px] text-slate-400 font-mono">CACHE HIT RATE</span><div class="text-base font-bold font-mono text-cyan-400">98.6%</div></div><span class="text-[10px] text-slate-500 font-mono">EDGE CLOUD</span></div>`
  },
  {
    id: "metric_33", num: "33", name: "Venture Fund IRR Internal Rate", archetype: "Venture IRR",
    tags: ["#irr", "#venture", "#fund", "#finance"],
    desc: "Tasa interna de retorno neta (Net IRR) auditada para fondos de Venture Capital.",
    html: `<div class="p-5 bg-gradient-to-br from-slate-950 to-amber-950/20 border border-amber-500/30 rounded-xl"><span class="text-[10px] font-mono text-amber-400">NET IRR AUDITADA</span><div class="text-2xl font-serif font-bold text-white mt-1">32.4%</div><span class="text-xs text-slate-400 font-mono">CUARTIL SUPERIOR 1</span></div>`
  },
  {
    id: "metric_34", num: "34", name: "SSL Certificate Days Remaining", archetype: "SSL Expiry",
    tags: ["#ssl", "#certificate", "#security", "#days"],
    desc: "Días restantes para la renovación automática del certificado TLS criptográfico.",
    html: `<div class="p-4 bg-slate-950 border border-slate-800 rounded-xl flex justify-between items-center"><div class="space-y-0.5"><span class="text-xs text-slate-400 font-mono">CERTIFICADO TLS</span><div class="text-base font-bold font-mono text-white">84 DÍAS</div></div><i class="ph-fill ph-lock-simple text-emerald-400 text-lg"></i></div>`
  },
  {
    id: "metric_35", num: "35", name: "Quantum Encryption Key Cycle", archetype: "Key Cycle",
    tags: ["#quantum", "#keys", "#rotation", "#security"],
    desc: "Rotación automática de claves criptográficas de 24 horas con cuenta atrás.",
    html: `<div class="p-4 bg-slate-900 border border-slate-800 rounded-xl flex justify-between items-center font-mono text-xs"><div><span class="text-slate-400 text-[10px]">ROTACIÓN DE LLAVE</span><div class="text-purple-300 font-bold">14H 12M</div></div><span class="text-emerald-400">AUTO-SYNC</span></div>`
  },
  {
    id: "metric_36", num: "36", name: "Database Read Replicas Health", archetype: "DB Replicas",
    tags: ["#database", "#replicas", "#sqlite", "#postgres"],
    desc: "Estado de las 4 réplicas de lectura de base de datos distribuidas geográficamente.",
    html: `<div class="p-4 bg-slate-950 border border-slate-800 rounded-lg flex justify-between items-center font-mono text-xs"><div><span class="text-slate-400 text-[10px]">RÉPLICAS DE LECTURA</span><div class="text-white font-bold">4 / 4 SIN LAG</div></div><div class="flex gap-1"><span class="w-2 h-2 rounded-full bg-emerald-400"></span><span class="w-2 h-2 rounded-full bg-emerald-400"></span><span class="w-2 h-2 rounded-full bg-emerald-400"></span><span class="w-2 h-2 rounded-full bg-emerald-400"></span></div></div>`
  },
  {
    id: "metric_37", num: "37", name: "Executive Time Allocation Ratio", archetype: "Time Allocation",
    tags: ["#executive", "#time", "#allocation", "#ratio"],
    desc: "Porcentaje de tiempo dedicado a estrategia, juntas de consejo y operaciones.",
    html: `<div class="p-4 bg-slate-900 border border-slate-800 rounded-xl space-y-2"><div class="flex justify-between text-xs font-mono"><span class="text-slate-400">ESTRATEGIA VS TÁCTICA</span><span class="text-white">70% / 30%</span></div><div class="h-2 bg-slate-800 rounded-full flex overflow-hidden"><div class="bg-amber-400 h-full w-[70%]"></div><div class="bg-slate-600 h-full w-[30%]"></div></div></div>`
  },
  {
    id: "metric_38", num: "38", name: "High-Frequency Trading Slippage", archetype: "HFT Slippage",
    tags: ["#slippage", "#hft", "#trading", "#execution"],
    desc: "Desviación de precio (slippage) media en milisegundos de ejecución.",
    html: `<div class="p-4 bg-slate-950 border border-slate-800 rounded-lg flex justify-between items-center font-mono text-xs"><div><span class="text-slate-400 text-[10px]">SLIPPAGE MEDIO</span><div class="text-emerald-400 font-bold">0.0012%</div></div><span class="text-slate-500">MÁX: 0.01%</span></div>`
  },
  {
    id: "metric_39", num: "39", name: "Clean Architecture Test Coverage", archetype: "Code Coverage",
    tags: ["#tests", "#coverage", "#clean-code", "#qa"],
    desc: "Porcentaje de cobertura de pruebas unitarias y de integración de backend.",
    html: `<div class="p-4 bg-slate-900 border border-slate-800 rounded-xl flex justify-between items-center"><div class="space-y-0.5"><span class="text-xs text-slate-400 font-mono">COBERTURA TEST</span><div class="text-lg font-bold font-mono text-emerald-400">98.4%</div></div><span class="text-xs font-mono text-slate-500">PASS 42/42</span></div>`
  },
  {
    id: "metric_40", num: "40", name: "Cold Storage Gold Reserves Ratio", archetype: "Cold Storage",
    tags: ["#cold-storage", "#gold", "#reserves", "#custody"],
    desc: "Porcentaje de reservas en bóvedas de almacenamiento en frío desconectadas de la red.",
    html: `<div class="p-5 bg-gradient-to-br from-slate-950 to-amber-950/30 border border-amber-500/40 rounded-xl"><span class="text-[10px] font-mono text-amber-400 uppercase">RESERVA AIR-GAPPED</span><div class="text-2xl font-serif font-bold text-white mt-1">94.8%</div><span class="text-xs text-slate-400 font-mono">DESCONECTADA DE INTERNET</span></div>`
  },
  {
    id: "metric_41", num: "41", name: "Disaster Recovery RPO / RTO", archetype: "DR RPO RTO",
    tags: ["#dr", "#rpo", "#rto", "#resilience"],
    desc: "Objetivo de punto de recuperación (RPO) y tiempo de recuperación (RTO) en minutos.",
    html: `<div class="p-4 bg-slate-950 border border-slate-800 rounded-xl flex justify-between items-center font-mono text-xs"><div><span class="text-slate-400 text-[10px]">RPO / RTO META</span><div class="text-white font-bold">&lt; 1 SEG // &lt; 2 MIN</div></div><span class="text-emerald-400">RESILIENTE</span></div>`
  },
  {
    id: "metric_42", num: "42", name: "Biometric Voice Authentication Confidence", archetype: "Voice Bio",
    tags: ["#biometric", "#voice", "#auth", "#ai"],
    desc: "Nivel de confianza biométrica de la huella de voz para autorización telefónica.",
    html: `<div class="p-4 bg-slate-900 border border-slate-800 rounded-lg flex justify-between items-center"><div class="space-y-0.5"><span class="text-[10px] text-slate-400 font-mono">CONFIANZA BIOMÉTRICA</span><div class="text-base font-bold font-mono text-emerald-400">99.8% PASS</div></div><i class="ph-bold ph-waveform text-emerald-400 text-lg"></i></div>`
  },
  {
    id: "metric_43", num: "43", name: "Global Family Office Net Worth", archetype: "Family Office",
    tags: ["#networth", "#family-office", "#wealth", "#sovereign"],
    desc: "Patrimonio neto consolidado en múltiples divisas con tipo de cambio neutral.",
    html: `<div class="p-5 bg-[#080D16] border border-amber-500/30 rounded-xl"><span class="text-[10px] font-mono text-amber-400">PATRIMONIO NETO CONSOLIDADO</span><div class="text-2xl font-serif font-bold text-white mt-1">$1.42B USD</div><span class="text-xs text-emerald-400 font-mono">+4.2% YTD</span></div>`
  },
  {
    id: "metric_44", num: "44", name: "Microsecond Hardware Clock Drift", archetype: "Clock Drift",
    tags: ["#clock", "#drift", "#precision", "#atomic"],
    desc: "Deriva del reloj atómico de cuarzo en nanosegundos respecto a UTC.",
    html: `<div class="p-4 bg-slate-950 border border-slate-800 rounded-lg flex justify-between items-center font-mono text-xs"><div><span class="text-slate-400 text-[10px]">DERIVA RELOJ ATÓMICO</span><div class="text-cyan-400 font-bold">+0.04 ns</div></div><span class="text-slate-500">PTP PRECISION</span></div>`
  },
  {
    id: "metric_45", num: "45", name: "DNS Anycast Propagation Speed", archetype: "DNS Speed",
    tags: ["#dns", "#anycast", "#speed", "#network"],
    desc: "Propagación de registros DNS en 340 servidores Anycast en 400 milisegundos.",
    html: `<div class="p-4 bg-slate-900 border border-slate-800 rounded-xl flex justify-between items-center"><div class="space-y-0.5"><span class="text-xs text-slate-400 font-mono">PROPAGACIÓN DNS</span><div class="text-base font-bold font-mono text-white">400 ms GLOBAL</div></div><i class="ph-bold ph-globe text-cyan-400 text-lg"></i></div>`
  },
  {
    id: "metric_46", num: "46", name: "Corporate Tax Arbitrage Efficiency", archetype: "Tax Efficiency",
    tags: ["#tax", "#arbitrage", "#efficiency", "#finance"],
    desc: "Eficiencia fiscal de estructuras societarias internacionales en jurisdicciones seguras.",
    html: `<div class="p-4 bg-slate-950 border border-slate-800 rounded-xl flex justify-between items-center font-mono text-xs"><div><span class="text-slate-400 text-[10px]">EFICIENCIA FISCAL</span><div class="text-amber-400 font-bold">14.8% EFECTIVO</div></div><span class="text-emerald-400">OPTIMIZADO</span></div>`
  },
  {
    id: "metric_47", num: "47", name: "Edge Compute Region Count", archetype: "Edge Regions",
    tags: ["#edge", "#regions", "#cloud", "#global"],
    desc: "Conteo de regiones activas con cómputo en el borde de red sin latencia de tránsito.",
    html: `<div class="p-4 bg-slate-900 border border-slate-800 rounded-lg flex justify-between items-center"><div class="space-y-0.5"><span class="text-[10px] text-slate-400 font-mono">REGIONES EDGE</span><div class="text-base font-bold font-mono text-white">48 ACTIVAS</div></div><i class="ph-bold ph-broadcast text-emerald-400 text-lg"></i></div>`
  },
  {
    id: "metric_48", num: "48", name: "Cryptographic Multi-Party Compute", archetype: "MPC Speed",
    tags: ["#mpc", "#crypto", "#computation", "#private"],
    desc: "Cómputo multipartito privado para firma de transferencias millonarias sin revelar llaves.",
    html: `<div class="p-4 bg-black border border-purple-500/40 rounded-xl font-mono text-xs flex justify-between items-center"><div><span class="text-purple-400 text-[10px]">CÓMPUTO MPC</span><div class="text-white font-bold">3 PARTES // 12 ms</div></div><span class="text-emerald-400">CONFIRMADO</span></div>`
  },
  {
    id: "metric_49", num: "49", name: "Monolithic Blackout Single Number", archetype: "Monolith Stat",
    tags: ["#monolith", "#blackout", "#stark", "#single"],
    desc: "Negro absoluto con cifra monumental blanca para paneles minimalistas de impacto.",
    html: `<div class="p-6 bg-black border border-neutral-800 rounded-none"><div class="text-[10px] font-mono text-neutral-400 uppercase tracking-widest mb-1">EFICIENCIA DE RED</div><div class="text-4xl font-bold font-mono text-white">99.8%</div></div>`
  },
  {
    id: "metric_50", num: "50", name: "Zero-Gravity Quantum Flux Metric", archetype: "Quantum Flux",
    tags: ["#quantum", "#flux", "#cosmic", "#zero-gravity"],
    desc: "Medición de flujo cuántico de vacío con fluctuaciones registradas en tiempo real.",
    html: `<div class="p-5 bg-slate-950/80 border border-cyan-400/40 rounded-2xl shadow-[0_10px_30px_rgba(6,182,212,0.2)] flex justify-between items-center"><div class="space-y-1"><span class="text-[10px] font-mono text-cyan-300 uppercase tracking-wider">FLUJO CUÁNTICO VACÍO</span><div class="text-2xl font-serif text-white font-bold">Δ 0.0042 eV</div><span class="text-xs text-cyan-400 font-mono">SINGULARIDAD ESTABLE</span></div><i class="ph-fill ph-atom text-cyan-400 text-3xl animate-spin"></i></div>`
  }
];
