// 50 Tablas & Listas de Datos
export const tables = [
  {
    id: "tab_01", num: "01", name: "Sovereign Dense Ledger Table", archetype: "Dense Ledger",
    tags: ["#ledger", "#table", "#dense", "#sovereign"],
    desc: "Tabla contable de alta densidad con líneas de división ultrafinas, números en monospace y estados en píldora.",
    html: `<div class="bg-[#0A0D14] border border-slate-800 rounded-xl overflow-hidden font-mono text-xs w-full"><table class="w-full text-left"><thead class="bg-slate-900/60 text-slate-400 text-[10px] uppercase border-b border-slate-800"><tr><th class="p-3">Activo / Fondo</th><th class="p-3">Comprometido</th><th class="p-3">No Desembolsado</th><th class="p-3 text-right">Estado</th></tr></thead><tbody class="divide-y divide-slate-800/60"><tr class="hover:bg-slate-900/40"><td class="p-3 font-serif font-bold text-white">Aurelius Real Estate IV</td><td class="p-3">$25,000,000</td><td class="p-3 text-amber-400">$8,450,000</td><td class="p-3 text-right"><span class="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-[10px]">ACTIVO</span></td></tr><tr class="hover:bg-slate-900/40"><td class="p-3 font-serif font-bold text-white">Kestrel BioVentures II</td><td class="p-3">$10,000,000</td><td class="p-3 text-amber-400">$1,200,000</td><td class="p-3 text-right"><span class="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-[10px]">ACTIVO</span></td></tr></tbody></table></div>`
  },
  {
    id: "tab_02", num: "02", name: "Swiss Brutalist High-Density Data Grid", archetype: "Brutalist Grid",
    tags: ["#brutalist", "#grid", "#hard-border", "#table"],
    desc: "Cuadrícula con bordes negros sólidos de 2px, tipografía rígida y contraste extremo.",
    html: `<div class="bg-white text-black border-2 border-black font-mono text-xs overflow-hidden w-full"><table class="w-full text-left border-collapse"><thead class="bg-black text-white text-[10px] font-bold uppercase"><tr><th class="p-2.5 border-r border-white">LOTE</th><th class="p-2.5 border-r border-white">IDENTIFICADOR</th><th class="p-2.5 text-right">VALOR CHF</th></tr></thead><tbody><tr class="border-b border-black font-bold"><td class="p-2 border-r border-black">#01</td><td class="p-2 border-r border-black">BONO CONFEDERADO 2036</td><td class="p-2 text-right">1,000,000</td></tr><tr class="font-bold"><td class="p-2 border-r border-black">#02</td><td class="p-2 border-r border-black">ORO EN BÓVEDA ZÚRICH</td><td class="p-2 text-right">2,450,000</td></tr></tbody></table></div>`
  },
  {
    id: "tab_03", num: "03", name: "Floating Card-Row Data List", archetype: "Card Rows",
    tags: ["#card-rows", "#list", "#floating", "#expandable"],
    desc: "Filas separadas como tarjetas individuales con botón de acción lateral para inspección rápida.",
    html: `<div class="space-y-2 w-full text-xs"><div class="p-3 bg-slate-900 border border-slate-800 rounded-lg flex justify-between items-center hover:border-amber-400/50 transition-colors"><div class="flex items-center gap-3"><span class="w-2 h-2 rounded-full bg-emerald-400"></span><div><div class="font-bold text-white font-mono">SWIFT-MT103-9042</div><div class="text-[10px] text-slate-400">BENEFICIARIO: KESTREL CORP</div></div></div><div class="flex items-center gap-3"><span class="font-mono text-amber-400 font-bold">$2,000,000</span><button class="px-2 py-1 bg-slate-800 rounded text-slate-300 hover:text-white"><i class="ph-bold ph-arrow-right"></i></button></div></div><div class="p-3 bg-slate-900 border border-slate-800 rounded-lg flex justify-between items-center hover:border-amber-400/50 transition-colors"><div class="flex items-center gap-3"><span class="w-2 h-2 rounded-full bg-amber-400"></span><div><div class="font-bold text-white font-mono">SWIFT-MT103-9043</div><div class="text-[10px] text-slate-400">BENEFICIARIO: OBELISK LTD</div></div></div><div class="flex items-center gap-3"><span class="font-mono text-amber-400 font-bold">£1,400,000</span><button class="px-2 py-1 bg-slate-800 rounded text-slate-300 hover:text-white"><i class="ph-bold ph-arrow-right"></i></button></div></div></div>`
  },
  {
    id: "tab_04", num: "04", name: "Kanban Micro-Column Swimlane", archetype: "Kanban Swimlane",
    tags: ["#kanban", "#swimlane", "#columns", "#cards"],
    desc: "Columnas reducidas de flujo de trabajo: Pendiente, En Foco y Concluido.",
    html: `<div class="grid grid-cols-3 gap-2 w-full text-xs font-mono"><div class="p-2.5 bg-slate-950 border border-slate-800 rounded-lg space-y-2"><div class="text-[10px] text-slate-400 font-bold">PENDIENTE (2)</div><div class="p-2 bg-slate-900 rounded border border-slate-800 text-[11px] text-white">Revisar pacto socios</div></div><div class="p-2.5 bg-slate-950 border border-amber-500/40 rounded-lg space-y-2"><div class="text-[10px] text-amber-400 font-bold">EN FOCO (1)</div><div class="p-2 bg-amber-950/40 rounded border border-amber-500/30 text-[11px] text-amber-200">Firmar Serie B</div></div><div class="p-2.5 bg-slate-950 border border-slate-800 rounded-lg space-y-2"><div class="text-[10px] text-emerald-400 font-bold">LISTO (4)</div><div class="p-2 bg-slate-900 rounded border border-slate-800 text-[11px] text-slate-400">Auditoría fiscal</div></div></div>`
  },
  {
    id: "tab_05", num: "05", name: "Split Key-Value Inspector Table", archetype: "Key-Value Inspector",
    tags: ["#key-value", "#inspector", "#details", "#mono"],
    desc: "Panel de propiedades clave-valor para inspección minuciosa de objetos fiduciarios.",
    html: `<div class="p-4 bg-slate-950 border border-slate-800 rounded-xl font-mono text-xs w-full space-y-2"><div class="text-amber-400 text-[10px] font-bold uppercase pb-1 border-b border-slate-800">PROPIEDADES DE TRANSACCIÓN</div><div class="flex justify-between py-1 border-b border-slate-900"><span class="text-slate-500">UETR:</span><span class="text-slate-300">f81d4fae-7dec-11d0</span></div><div class="flex justify-between py-1 border-b border-slate-900"><span class="text-slate-500">DIVISA:</span><span class="text-white font-bold">USD (United States)</span></div><div class="flex justify-between py-1"><span class="text-slate-500">TARIFA:</span><span class="text-emerald-400">$25.00 FIJO</span></div></div>`
  },
  {
    id: "tab_06", num: "06", name: "Metric Comparison Matrix", archetype: "Comparison Matrix",
    tags: ["#matrix", "#comparison", "#features", "#checklist"],
    desc: "Matriz con verificación de características y capacidades técnicas por tier.",
    html: `<div class="bg-slate-950 border border-slate-800 rounded-xl overflow-hidden text-xs w-full"><table class="w-full text-left font-mono"><thead class="bg-slate-900 text-slate-400 text-[10px]"><tr><th class="p-3">Capacidad</th><th class="p-3 text-center">Estándar</th><th class="p-3 text-center text-amber-400">Soberano</th></tr></thead><tbody class="divide-y divide-slate-800/80"><tr class="text-slate-300"><td class="p-2.5">Bóveda Criptográfica</td><td class="p-2.5 text-center text-slate-500">Límites</td><td class="p-2.5 text-center text-emerald-400 font-bold">Ilimitada</td></tr><tr class="text-slate-300"><td class="p-2.5">Custodia Air-Gapped</td><td class="p-2.5 text-center text-slate-600">—</td><td class="p-2.5 text-center text-emerald-400 font-bold">Incluida</td></tr></tbody></table></div>`
  },
  {
    id: "tab_07", num: "07", name: "Striped Accounting Balance Sheet", archetype: "Accounting Sheet",
    tags: ["#accounting", "#balance", "#striped", "#finance"],
    desc: "Hoja de balance rayada con totales de activos, pasivos y patrimonio neto.",
    html: `<div class="p-4 bg-slate-900 border border-slate-800 rounded-xl font-mono text-xs w-full space-y-2"><div class="flex justify-between font-bold text-white pb-2 border-b border-slate-700"><span>BALANCE SOBERANO</span><span>30-SEP-2026</span></div><div class="space-y-1"><div class="flex justify-between py-1 bg-slate-950/60 px-2 rounded"><span class="text-slate-400">ACTIVO NO CORRIENTE</span><span class="text-white">$34,200,000</span></div><div class="flex justify-between py-1 px-2"><span class="text-slate-400">ACTIVO CORRIENTE</span><span class="text-white">$8,710,000</span></div><div class="flex justify-between py-1.5 bg-amber-400/10 px-2 rounded text-amber-300 font-bold border border-amber-400/20"><span>TOTAL ACTIVOS</span><span>$42,910,000</span></div></div></div>`
  },
  {
    id: "tab_08", num: "08", name: "Hierarchical Tree Table with Nesting", archetype: "Tree Table",
    tags: ["#tree", "#nesting", "#hierarchy", "#parent-child"],
    desc: "Tabla con filas hijas sangradas para desglosar subcuentas y vehículos.",
    html: `<div class="bg-slate-950 border border-slate-800 rounded-xl p-3 font-mono text-xs w-full space-y-1"><div class="flex justify-between font-bold text-white py-1"><span>▼ Aurelius Group Holding</span><span>100%</span></div><div class="flex justify-between text-slate-400 pl-4 py-0.5 border-l border-slate-800 ml-2"><span>├─ Aurelius Real Estate IV</span><span>64.2%</span></div><div class="flex justify-between text-slate-400 pl-4 py-0.5 border-l border-slate-800 ml-2"><span>└─ Aurelius Clean Energy Trust</span><span>35.8%</span></div></div>`
  },
  {
    id: "tab_09", num: "09", name: "File Browser List with Permissions", archetype: "File Browser",
    tags: ["#files", "#permissions", "#browser", "#posix"],
    desc: "Lista de archivos con permisos Unix, tamaño en megabytes y fecha de modificación.",
    html: `<div class="bg-black border border-slate-800 rounded-lg p-3 font-mono text-xs w-full text-slate-300 space-y-1"><div class="flex justify-between text-slate-500 text-[10px] pb-1 border-b border-slate-800"><span>PERMISOS</span><span>NOMBRE</span><span>TAMAÑO</span></div><div class="flex justify-between py-1"><span>-rwxr-xr-x</span><span class="text-amber-400">vault_daemon</span><span>4.2 MB</span></div><div class="flex justify-between py-1"><span>-rw-r--r--</span><span class="text-white">estatutos.pdf</span><span>840 KB</span></div></div>`
  },
  {
    id: "tab_10", num: "10", name: "Compact Pricing Tier Comparison", archetype: "Pricing Tier",
    tags: ["#pricing", "#tiers", "#table", "#saas"],
    desc: "Comparativa horizontal de tres niveles de suscripción con tarifas y límites.",
    html: `<div class="grid grid-cols-3 gap-2 w-full text-xs font-mono text-center"><div class="p-3 bg-slate-900 border border-slate-800 rounded-lg"><div class="text-[10px] text-slate-400">STARTER</div><div class="text-base font-bold text-white my-1">$0</div><div class="text-[10px] text-slate-500">1 Usuario</div></div><div class="p-3 bg-amber-400/20 border border-amber-400/50 rounded-lg"><div class="text-[10px] text-amber-300 font-bold">SOBERANO</div><div class="text-base font-bold text-amber-300 my-1">$499</div><div class="text-[10px] text-amber-200">Ilimitado</div></div><div class="p-3 bg-slate-900 border border-slate-800 rounded-lg"><div class="text-[10px] text-slate-400">ENTERPRISE</div><div class="text-base font-bold text-white my-1">Custom</div><div class="text-[10px] text-slate-500">Dedicated</div></div></div>`
  },
  {
    id: "tab_11", num: "11", name: "Audit Log Diffs Table", archetype: "Audit Diff",
    tags: ["#diff", "#audit", "#changes", "#code"],
    desc: "Visualización de cambios con resaltado en rojo para lo borrado y verde para lo añadido.",
    html: `<div class="p-3 bg-black border border-slate-800 rounded-lg font-mono text-xs w-full space-y-1"><div class="text-slate-500 text-[10px] pb-1 border-b border-slate-800">MODIFICACIÓN: CONTRATO_CLÁUSULA_4</div><div class="text-rose-400 bg-rose-950/30 px-2 py-0.5 rounded">- plazo_ejecución: 30_dias</div><div class="text-emerald-400 bg-emerald-950/30 px-2 py-0.5 rounded">+ plazo_ejecución: 15_dias_improrrogables</div></div>`
  },
  {
    id: "tab_12", num: "12", name: "User Team Directory with Roles", archetype: "Team Directory",
    tags: ["#team", "#users", "#roles", "#permissions"],
    desc: "Directorio de colaboradores con avatar, cargo y botón de edición de permisos.",
    html: `<div class="p-3 bg-slate-900 border border-slate-800 rounded-xl w-full text-xs space-y-2"><div class="flex justify-between items-center"><div class="flex items-center gap-2"><div class="w-6 h-6 rounded-full bg-amber-400/20 text-amber-300 flex items-center justify-center font-bold text-[10px]">AP</div><span class="font-bold text-white">Alexander Pierce</span></div><span class="px-2 py-0.5 rounded bg-slate-800 text-amber-300 font-mono text-[10px]">ADMIN</span></div><div class="flex justify-between items-center"><div class="flex items-center gap-2"><div class="w-6 h-6 rounded-full bg-cyan-400/20 text-cyan-300 flex items-center justify-center font-bold text-[10px]">EL</div><span class="font-bold text-white">Elena Lindqvist</span></div><span class="px-2 py-0.5 rounded bg-slate-800 text-slate-400 font-mono text-[10px]">AUDITOR</span></div></div>`
  },
  {
    id: "tab_13", num: "13", name: "Invoice Line Items Table with Totals", archetype: "Invoice Table",
    tags: ["#invoice", "#billing", "#totals", "#finance"],
    desc: "Factura comercial detallada con desglose por concepto, IVA y total a pagar.",
    html: `<div class="p-4 bg-slate-950 border border-slate-800 rounded-xl font-mono text-xs w-full space-y-2"><div class="flex justify-between text-slate-400 text-[10px] pb-1 border-b border-slate-800"><span>CONCEPTO</span><span>TOTAL</span></div><div class="flex justify-between"><span>Custodia Fiduciaria Q3</span><span>$14,500.00</span></div><div class="flex justify-between"><span>Auditoría de Ciberseguridad</span><span>$8,000.00</span></div><div class="flex justify-between pt-2 border-t border-slate-800 font-bold text-amber-400"><span>TOTAL NETO</span><span>$22,500.00</span></div></div>`
  },
  {
    id: "tab_14", num: "14", name: "Order Book Depth Table", archetype: "Order Book",
    tags: ["#orderbook", "#trading", "#bids", "#asks"],
    desc: "Libro de órdenes de compra (verde) y venta (rojo) con profundidad acumulada.",
    html: `<div class="grid grid-cols-2 gap-2 p-3 bg-black border border-slate-800 rounded-lg font-mono text-xs w-full"><div class="space-y-1"><div class="text-[10px] text-emerald-400 font-bold">COMPRA (BIDS)</div><div class="flex justify-between text-emerald-300 text-[11px]"><span>$2,642.00</span><span>14.2 oz</span></div><div class="flex justify-between text-emerald-300 text-[11px]"><span>$2,641.50</span><span>28.0 oz</span></div></div><div class="space-y-1"><div class="text-[10px] text-rose-400 font-bold">VENTA (ASKS)</div><div class="flex justify-between text-rose-300 text-[11px]"><span>$2,642.50</span><span>8.4 oz</span></div><div class="flex justify-between text-rose-300 text-[11px]"><span>$2,643.00</span><span>19.1 oz</span></div></div></div>`
  },
  {
    id: "tab_15", num: "15", name: "Token Balance List with Sparklines", archetype: "Token Balance",
    tags: ["#tokens", "#crypto", "#balance", "#sparkline"],
    desc: "Lista de criptoactivos con balance en moneda local y tendencia visual.",
    html: `<div class="p-3 bg-slate-900 border border-slate-800 rounded-xl w-full text-xs space-y-2"><div class="flex justify-between items-center"><div class="flex items-center gap-2"><i class="ph-fill ph-currency-btc text-amber-400 text-base"></i><span class="font-bold text-white">Bitcoin</span></div><span class="font-mono text-white font-bold">$64,280.00</span></div><div class="flex justify-between items-center"><div class="flex items-center gap-2"><i class="ph-fill ph-currency-eth text-cyan-400 text-base"></i><span class="font-bold text-white">Ethereum</span></div><span class="font-mono text-white font-bold">$3,420.00</span></div></div>`
  },
  {
    id: "tab_16", num: "16", name: "Capital Call Investor Allocation", archetype: "Investor Allocation",
    tags: ["#investors", "#capital-call", "#lp", "#shares"],
    desc: "Desglose por inversor institucional con porcentaje de suscripción y llamada.",
    html: `<div class="bg-slate-950 border border-slate-800 rounded-xl p-3 font-mono text-xs w-full space-y-2"><div class="flex justify-between text-slate-400 text-[10px] pb-1 border-b border-slate-800"><span>INVERSOR</span><span>ASIGNACIÓN</span></div><div class="flex justify-between"><span>Ginebra Private Trust</span><span class="text-white font-bold">$1,200,000 (60%)</span></div><div class="flex justify-between"><span>Zürich Family Office</span><span class="text-white font-bold">$800,000 (40%)</span></div></div>`
  },
  {
    id: "tab_17", num: "17", name: "Server Resource Utilization Matrix", archetype: "Resource Matrix",
    tags: ["#servers", "#cpu", "#ram", "#matrix"],
    desc: "Matriz de 3 servidores físicos con porcentaje de uso de CPU, RAM y disco.",
    html: `<div class="p-3 bg-slate-900 border border-slate-800 rounded-xl w-full text-xs font-mono space-y-1.5"><div class="flex justify-between items-center pb-1 border-b border-slate-800 text-[10px] text-slate-400"><span>NODO</span><span>CPU</span><span>RAM</span></div><div class="flex justify-between items-center"><span class="text-white">srv-gva-01</span><span class="text-emerald-400">14%</span><span class="text-amber-400">62%</span></div><div class="flex justify-between items-center"><span class="text-white">srv-lhr-02</span><span class="text-emerald-400">22%</span><span class="text-emerald-400">48%</span></div></div>`
  },
  {
    id: "tab_18", num: "18", name: "Real Estate Property Portfolio", archetype: "Real Estate Portfolio",
    tags: ["#real-estate", "#properties", "#cities", "#valuation"],
    desc: "Inventario de inmuebles corporativos con ubicación, metros cuadrados y valoración.",
    html: `<div class="p-3 bg-slate-950 border border-slate-800 rounded-xl w-full text-xs font-serif space-y-2"><div class="flex justify-between items-center border-b border-slate-800 pb-1.5"><div class="font-bold text-white">Torre Limmat, Zúrich</div><span class="font-mono text-amber-400 font-bold text-[11px]">CHF 45M</span></div><div class="flex justify-between items-center"><div class="font-bold text-white">Pabellón Ródano, Ginebra</div><span class="font-mono text-amber-400 font-bold text-[11px]">CHF 28M</span></div></div>`
  },
  {
    id: "tab_19", num: "19", name: "Due Diligence Document Checklist", archetype: "Doc Checklist",
    tags: ["#checklist", "#documents", "#due-diligence", "#legal"],
    desc: "Lista de verificación de documentos legales con iconos de estado de entrega.",
    html: `<div class="p-3 bg-slate-900 border border-slate-800 rounded-xl w-full text-xs space-y-2"><div class="flex items-center justify-between"><div class="flex items-center gap-2"><i class="ph-bold ph-check-circle text-emerald-400"></i><span class="text-white">Escrituras de Constitución</span></div><span class="text-slate-500 font-mono text-[10px]">VALIDADO</span></div><div class="flex items-center justify-between"><div class="flex items-center gap-2"><i class="ph-bold ph-clock text-amber-400"></i><span class="text-white">Certificado de Gravámenes</span></div><span class="text-amber-400 font-mono text-[10px]">PENDIENTE</span></div></div>`
  },
  {
    id: "tab_20", num: "20", name: "API Endpoint Latency & Status Roster", archetype: "API Roster",
    tags: ["#api", "#endpoints", "#latency", "#status"],
    desc: "Tabla con los endpoints REST principales, código de respuesta HTTP y milisegundos.",
    html: `<div class="bg-black border border-slate-800 rounded-lg p-3 font-mono text-xs w-full text-slate-300 space-y-1.5"><div class="flex justify-between items-center"><span class="text-emerald-400 font-bold">GET /api/v1/dashboard</span><span class="text-white">200 OK (0.8ms)</span></div><div class="flex justify-between items-center"><span class="text-cyan-400 font-bold">POST /api/v1/sprints</span><span class="text-white">201 CREATED (1.4ms)</span></div></div>`
  },
  {
    id: "tab_21", num: "21", name: "Sprint Backlog Table with Badges", archetype: "Sprint Backlog",
    tags: ["#backlog", "#sprint", "#tasks", "#badges"],
    desc: "Lista de tareas pendientes organizadas por prioridad con etiquetas de color.",
    html: `<div class="p-3 bg-slate-950 border border-slate-800 rounded-xl w-full text-xs space-y-2"><div class="flex justify-between items-center"><span class="text-white font-medium">Revisar enclave criptográfico</span><span class="px-2 py-0.5 rounded bg-amber-400/20 text-amber-300 font-mono text-[10px]">ALTA</span></div><div class="flex justify-between items-center"><span class="text-white font-medium">Finalizar narrativa Q3</span><span class="px-2 py-0.5 rounded bg-blue-500/20 text-blue-300 font-mono text-[10px]">MEDIA</span></div></div>`
  },
  {
    id: "tab_22", num: "22", name: "Cross-Border FX Conversion Matrix", archetype: "FX Matrix",
    tags: ["#fx", "#forex", "#currency", "#conversion"],
    desc: "Matriz cruzada de tipos de cambio entre USD, EUR, CHF y GBP.",
    html: `<div class="p-3 bg-slate-900 border border-slate-800 rounded-xl font-mono text-xs w-full"><div class="grid grid-cols-3 gap-2 text-center"><div class="p-2 bg-slate-950 rounded"><div class="text-slate-400 text-[10px]">USD/CHF</div><div class="text-white font-bold">0.8420</div></div><div class="p-2 bg-slate-950 rounded"><div class="text-slate-400 text-[10px]">EUR/CHF</div><div class="text-white font-bold">0.9380</div></div><div class="p-2 bg-slate-950 rounded"><div class="text-slate-400 text-[10px]">GBP/CHF</div><div class="text-white font-bold">1.1140</div></div></div></div>`
  },
  {
    id: "tab_23", num: "23", name: "Smart Contract Event Log Table", archetype: "Contract Events",
    tags: ["#contract", "#ethereum", "#events", "#solidity"],
    desc: "Registro de eventos emitidos por el contrato fiduciario con decodificación de parámetros.",
    html: `<div class="p-3 bg-black border border-slate-800 rounded-lg font-mono text-xs w-full text-slate-300 space-y-1"><div class="text-purple-400 font-bold text-[10px]">EVENT Transfer(from, to, value)</div><div class="text-slate-400 text-[11px] truncate">0x9f4a...e12d → 0x3a1b...88c4 : 2,000,000 USDC</div></div>`
  },
  {
    id: "tab_24", num: "24", name: "Database Schema DDL Viewer", archetype: "DDL Viewer",
    tags: ["#ddl", "#schema", "#sqlite", "#database"],
    desc: "Vista técnica de tabla SQLite con tipos de datos y restricciones de integridad.",
    html: `<div class="p-3 bg-slate-950 border border-slate-800 rounded-lg font-mono text-xs w-full text-slate-300 space-y-1"><div class="text-amber-400 text-[10px] font-bold">TABLA: tasks</div><div class="text-slate-400">id TEXT PRIMARY KEY</div><div class="text-slate-400">priority TEXT CHECK(priority IN ('high','medium'))</div></div>`
  },
  {
    id: "tab_25", num: "25", name: "Vulnerability CVE Priority Table", archetype: "CVE Roster",
    tags: ["#cve", "#security", "#vulnerability", "#soc"],
    desc: "Lista de incidencias de seguridad clasificadas por severidad CVSS.",
    html: `<div class="p-3 bg-slate-900 border border-slate-800 rounded-xl w-full text-xs font-mono space-y-2"><div class="flex justify-between items-center"><span class="text-rose-400 font-bold">CVE-2026-9042</span><span class="px-2 py-0.5 rounded bg-rose-950 text-rose-300 text-[10px]">CRÍTICA (9.8)</span></div><div class="flex justify-between items-center"><span class="text-amber-300 font-bold">CVE-2026-8812</span><span class="px-2 py-0.5 rounded bg-amber-950 text-amber-300 text-[10px]">MEDIA (5.4)</span></div></div>`
  },
  {
    id: "tab_26", num: "26", name: "Customer Account Activity Ledger", archetype: "Account Activity",
    tags: ["#activity", "#ledger", "#customer", "#banking"],
    desc: "Extracto de movimientos bancarios con fecha, concepto y saldo resultante.",
    html: `<div class="p-3 bg-slate-950 border border-slate-800 rounded-xl w-full text-xs font-mono space-y-2"><div class="flex justify-between items-center pb-1 border-b border-slate-800"><span class="text-white">Transferencia Entrante SWIFT</span><span class="text-emerald-400 font-bold">+$2,000,000</span></div><div class="flex justify-between items-center"><span class="text-white">Comisión Custodia Fiduciaria</span><span class="text-slate-400">-$2,450</span></div></div>`
  },
  {
    id: "tab_27", num: "27", name: "Software Dependency Package Roster", archetype: "Package Roster",
    tags: ["#npm", "#dependencies", "#packages", "#node"],
    desc: "Roster de módulos de producción con versiones bloqueadas por hash.",
    html: `<div class="p-3 bg-black border border-slate-800 rounded-lg font-mono text-xs w-full text-slate-300 space-y-1"><div class="flex justify-between"><span>express</span><span class="text-amber-400">v4.21.2</span></div><div class="flex justify-between"><span>node:sqlite</span><span class="text-emerald-400">NATIVO (WAL)</span></div></div>`
  },
  {
    id: "tab_28", num: "28", name: "Private Equity Cap Table Breakdown", archetype: "Cap Table",
    tags: ["#captable", "#equity", "#shares", "#founders"],
    desc: "Distribución accionarial de la compañía con acciones comunes y preferentes.",
    html: `<div class="p-3 bg-slate-900 border border-slate-800 rounded-xl w-full text-xs font-mono space-y-2"><div class="flex justify-between"><span class="text-slate-400">Fundadores Clase A</span><span class="text-white font-bold">54.0%</span></div><div class="flex justify-between"><span class="text-slate-400">Inversores Serie A/B</span><span class="text-amber-400 font-bold">36.0%</span></div><div class="flex justify-between"><span class="text-slate-400">Pool de Opciones (ESOP)</span><span class="text-slate-300">10.0%</span></div></div>`
  },
  {
    id: "tab_29", num: "29", name: "Microservices Health Status Matrix", archetype: "Health Matrix",
    tags: ["#microservices", "#health", "#cluster", "#k8s"],
    desc: "Estado de 4 microservicios críticos con semáforo de disponibilidad.",
    html: `<div class="grid grid-cols-2 gap-2 p-3 bg-slate-950 border border-slate-800 rounded-xl font-mono text-xs w-full"><div class="flex items-center gap-2"><span class="w-2 h-2 rounded-full bg-emerald-400"></span><span class="text-white">auth-service</span></div><div class="flex items-center gap-2"><span class="w-2 h-2 rounded-full bg-emerald-400"></span><span class="text-white">vault-core</span></div><div class="flex items-center gap-2"><span class="w-2 h-2 rounded-full bg-emerald-400"></span><span class="text-white">swift-engine</span></div><div class="flex items-center gap-2"><span class="w-2 h-2 rounded-full bg-emerald-400"></span><span class="text-white">telemetry-db</span></div></div>`
  },
  {
    id: "tab_30", num: "30", name: "Maritime Freight Shipping Manifest", archetype: "Shipping Manifest",
    tags: ["#maritime", "#manifest", "#freight", "#containers"],
    desc: "Manifiesto de embarque marítimo con código de contenedor TEU y precinto.",
    html: `<div class="p-3 bg-[#0A1420] border border-blue-500/30 rounded-xl font-mono text-xs w-full space-y-1"><div class="text-blue-300 text-[10px] font-bold">CONTENEDOR MSCU-904210</div><div class="flex justify-between text-slate-300"><span>PRECINTO ADUANERO</span><span class="text-white font-bold">#CH-89421</span></div><div class="flex justify-between text-slate-400 text-[10px]"><span>ORIGEN: GÉNOVA</span><span>DESTINO: ROTTERDAM</span></div></div>`
  },
  {
    id: "tab_31", num: "31", name: "Biometric Access Log Table", archetype: "Biometric Log",
    tags: ["#biometric", "#access", "#security", "#doors"],
    desc: "Registro de accesos físicos a la sala acorazada mediante huella y retina.",
    html: `<div class="p-3 bg-slate-900 border border-slate-800 rounded-xl font-mono text-xs w-full space-y-1.5"><div class="flex justify-between text-slate-400 text-[10px]"><span>HORA</span><span>USUARIO</span><span>PUERTA</span></div><div class="flex justify-between text-slate-300"><span>18:24</span><span class="text-amber-400">A. Pierce</span><span class="text-emerald-400">BÓVEDA-01</span></div><div class="flex justify-between text-slate-400"><span>17:50</span><span>E. Lindqvist</span><span class="text-emerald-400">SALA-CONF</span></div></div>`
  },
  {
    id: "tab_32", num: "32", name: "Board Resolution Voting Tally", archetype: "Voting Tally",
    tags: ["#board", "#voting", "#governance", "#resolutions"],
    desc: "Resultado de votaciones del consejo de administración por voto ponderado.",
    html: `<div class="p-3 bg-slate-950 border border-slate-800 rounded-xl font-serif text-xs w-full space-y-2"><div class="font-bold text-white">Resolución 2026/04: Emisión Serie B</div><div class="flex justify-between font-mono text-[11px]"><span class="text-emerald-400">A FAVOR: 92%</span><span class="text-rose-400">EN CONTRA: 8%</span></div><div class="text-[10px] font-mono text-slate-500 uppercase">APROBADA POR MAYORÍA CUALIFICADA</div></div>`
  },
  {
    id: "tab_33", num: "33", name: "Cryptographic Key Inventory List", archetype: "Key Inventory",
    tags: ["#keys", "#crypto", "#inventory", "#hsm"],
    desc: "Inventario de llaves maestras en módulos de seguridad hardware (HSM).",
    html: `<div class="p-3 bg-black border border-purple-500/40 rounded-xl font-mono text-xs w-full space-y-1.5"><div class="flex justify-between items-center"><span class="text-purple-300 font-bold">HSM-KEY-MASTER-01</span><span class="px-2 py-0.5 rounded bg-purple-950 text-purple-300 text-[10px]">ED25519</span></div><div class="text-slate-400 text-[10px]">UBICACIÓN: BÓVEDA SUIZA FRÍA</div></div>`
  },
  {
    id: "tab_34", num: "34", name: "High-Yield Bond Issue Schedule", archetype: "Bond Schedule",
    tags: ["#bonds", "#coupon", "#yield", "#debt"],
    desc: "Calendario de pago de cupones de bonos corporativos con fecha e importe.",
    html: `<div class="p-3 bg-slate-900 border border-slate-800 rounded-xl font-mono text-xs w-full space-y-2"><div class="flex justify-between text-slate-400 text-[10px]"><span>CUPÓN</span><span>VENCIMIENTO</span><span>IMPORTE</span></div><div class="flex justify-between text-white"><span>Cupón 1</span><span>15-OCT-2026</span><span class="text-amber-400 font-bold">$450,000</span></div><div class="flex justify-between text-slate-400"><span>Cupón 2</span><span>15-ABR-2027</span><span class="text-amber-400 font-bold">$450,000</span></div></div>`
  },
  {
    id: "tab_35", num: "35", name: "Automated Test Suite Results", archetype: "Test Results",
    tags: ["#tests", "#suite", "#qa", "#results"],
    desc: "Informe de ejecución de pruebas automatizadas con tiempos y estado verde.",
    html: `<div class="p-3 bg-slate-950 border border-slate-800 rounded-xl font-mono text-xs w-full space-y-1.5"><div class="flex justify-between items-center text-emerald-400 font-bold"><span>✔ test_rule_of_three</span><span>1.2ms</span></div><div class="flex justify-between items-center text-emerald-400 font-bold"><span>✔ test_sprint_fsm_lifecycle</span><span>2.8ms</span></div><div class="flex justify-between items-center text-emerald-400 font-bold"><span>✔ test_cognitive_telemetry</span><span>1.4ms</span></div></div>`
  },
  {
    id: "tab_36", num: "36", name: "Environmental Sensor Telemetry Grid", archetype: "Sensor Grid",
    tags: ["#sensor", "#iot", "#environment", "#climate"],
    desc: "Lecturas ambientales de temperatura, humedad y presión barométrica de laboratorio.",
    html: `<div class="grid grid-cols-3 gap-2 p-3 bg-slate-900 border border-slate-800 rounded-xl font-mono text-xs text-center w-full"><div class="p-2 bg-slate-950 rounded"><span class="text-slate-400 text-[10px]">TEMP</span><div class="text-white font-bold">21.2°C</div></div><div class="p-2 bg-slate-950 rounded"><span class="text-slate-400 text-[10px]">HUM</span><div class="text-cyan-400 font-bold">45.0%</div></div><div class="p-2 bg-slate-950 rounded"><span class="text-slate-400 text-[10px]">PRES</span><div class="text-amber-400 font-bold">1014 hPa</div></div></div>`
  },
  {
    id: "tab_37", num: "37", name: "Patent Portfolio Filing Status", archetype: "Patent Status",
    tags: ["#patents", "#ip", "#filing", "#legal"],
    desc: "Estado registral de solicitudes de patente ante la OMPI y oficinas nacionales.",
    html: `<div class="p-3 bg-slate-950 border border-slate-800 rounded-xl font-mono text-xs w-full space-y-2"><div class="flex justify-between items-center"><span class="text-white font-bold">PCT/IB2026/004921</span><span class="px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 text-[10px]">PUBLICADA</span></div><div class="text-[10px] text-slate-400">Algoritmo de Custodia Multifirma Cuántica</div></div>`
  },
  {
    id: "tab_38", num: "38", name: "Hedge Fund Monthly Performance", archetype: "Fund Performance",
    tags: ["#hedgefund", "#performance", "#alpha", "#finance"],
    desc: "Rendimientos mensuales del fondo con comparación respecto al índice de referencia.",
    html: `<div class="p-3 bg-slate-900 border border-slate-800 rounded-xl font-mono text-xs w-full space-y-1.5"><div class="flex justify-between items-center text-[10px] text-slate-400 pb-1 border-b border-slate-800"><span>MES</span><span>FONDO</span><span>BENCHMARK</span></div><div class="flex justify-between items-center"><span class="text-white">Septiembre 2026</span><span class="text-emerald-400 font-bold">+2.84%</span><span class="text-slate-400">+0.82%</span></div><div class="flex justify-between items-center"><span class="text-white">Agosto 2026</span><span class="text-emerald-400 font-bold">+1.92%</span><span class="text-slate-400">-0.40%</span></div></div>`
  },
  {
    id: "tab_39", num: "39", name: "Data Pipeline ETL Job Status", archetype: "ETL Status",
    tags: ["#etl", "#pipeline", "#data", "#cron"],
    desc: "Estado de ejecución de procesos batch de extracción, transformación y carga.",
    html: `<div class="p-3 bg-slate-950 border border-slate-800 rounded-xl font-mono text-xs w-full space-y-1.5"><div class="flex justify-between items-center"><span class="text-white">etl_market_sync_daily</span><span class="text-emerald-400 font-bold">COMPLETADO</span></div><div class="text-[10px] text-slate-500">142,000 REGISTROS INSERTADOS // 1.4s</div></div>`
  },
  {
    id: "tab_40", num: "40", name: "Cloud Storage Bucket Cost Matrix", archetype: "Storage Costs",
    tags: ["#cloud", "#costs", "#s3", "#storage"],
    desc: "Desglose mensual de costes por bucket en caliente y archivado en frío.",
    html: `<div class="p-3 bg-slate-900 border border-slate-800 rounded-xl font-mono text-xs w-full space-y-1.5"><div class="flex justify-between text-slate-400 text-[10px]"><span>BUCKET</span><span>NIVEL</span><span>COSTE</span></div><div class="flex justify-between text-slate-200"><span>bóveda-documental</span><span>Glacier</span><span class="text-amber-400 font-bold">$42.80</span></div><div class="flex justify-between text-slate-200"><span>snapshots-db</span><span>Standard</span><span class="text-amber-400 font-bold">$124.50</span></div></div>`
  },
  {
    id: "tab_41", num: "41", name: "Multi-Sig Transaction Queue", archetype: "Multisig Queue",
    tags: ["#multisig", "#queue", "#transactions", "#crypto"],
    desc: "Cola de transferencias pendientes de la segunda o tercera firma requerida.",
    html: `<div class="p-3 bg-slate-950 border border-slate-800 rounded-xl font-mono text-xs w-full space-y-2"><div class="flex justify-between items-center"><span class="text-amber-300 font-bold">TX #0942 (3/5 FIRMAS)</span><span class="text-white font-bold">$500,000</span></div><div class="text-[10px] text-slate-400">PENDIENTE: FIRMA DIRECTOR JURÍDICO</div></div>`
  },
  {
    id: "tab_42", num: "42", name: "Executive Travel Itinerary Table", archetype: "Travel Itinerary",
    tags: ["#travel", "#itinerary", "#flights", "#hotels"],
    desc: "Plan de viaje ejecutivo con vuelos, hoteles y traslados concertados.",
    html: `<div class="p-3 bg-slate-900 border border-slate-800 rounded-xl font-serif text-xs w-full space-y-2"><div class="flex justify-between items-center border-b border-slate-800 pb-1.5"><div><div class="font-bold text-white">Vuelo Privado GVA ⇄ LHR</div><div class="text-[10px] font-mono text-slate-400">SALIDA 08:30 GVA</div></div><span class="font-mono text-amber-400 text-xs">CONFIRMADO</span></div></div>`
  },
  {
    id: "tab_43", num: "43", name: "Hardware Asset Depreciation Table", archetype: "Asset Depreciation",
    tags: ["#hardware", "#assets", "#depreciation", "#accounting"],
    desc: "Cálculo de amortización lineal de servidores y equipos de laboratorio.",
    html: `<div class="p-3 bg-slate-950 border border-slate-800 rounded-xl font-mono text-xs w-full space-y-1.5"><div class="flex justify-between text-slate-400 text-[10px]"><span>ACTIVO</span><span>VALOR RESIDUAL</span></div><div class="flex justify-between text-white"><span>Cluster GPU H100 (x8)</span><span class="text-emerald-400 font-bold">$240,000</span></div></div>`
  },
  {
    id: "tab_44", num: "44", name: "Medical Clinical Cohort Table", archetype: "Clinical Cohort",
    tags: ["#medical", "#cohort", "#patients", "#clinical"],
    desc: "Datos anonimizados de pacientes participantes en ensayo terapéutico.",
    html: `<div class="p-3 bg-slate-900 border border-slate-800 rounded-xl font-mono text-xs w-full space-y-1.5"><div class="flex justify-between text-slate-400 text-[10px]"><span>COHORTE</span><span>DOSIS</span><span>RESPUESTA</span></div><div class="flex justify-between text-slate-200"><span>PACIENTE #042</span><span>50 mg</span><span class="text-emerald-400 font-bold">REMISIÓN COMPLETA</span></div></div>`
  },
  {
    id: "tab_45", num: "45", name: "Satellite Constellation Roster", archetype: "Satellite Roster",
    tags: ["#satellite", "#constellation", "#telecom", "#space"],
    desc: "Estado operativo de 12 satélites de comunicaciones de baja órbita (LEO).",
    html: `<div class="p-3 bg-black border border-cyan-500/30 rounded-xl font-mono text-xs w-full space-y-1.5"><div class="flex justify-between items-center"><span class="text-cyan-400 font-bold">SAT-ORBIT-01</span><span class="text-emerald-400">ACTIVO // TELEMETRÍA 100%</span></div><div class="flex justify-between items-center"><span class="text-cyan-400 font-bold">SAT-ORBIT-02</span><span class="text-emerald-400">ACTIVO // TELEMETRÍA 100%</span></div></div>`
  },
  {
    id: "tab_46", num: "46", name: "Corporate Tax Jurisdiction Matrix", archetype: "Tax Matrix",
    tags: ["#tax", "#jurisdiction", "#treaties", "#legal"],
    desc: "Tipos impositivos aplicables según convenios de doble imposición cantonal.",
    html: `<div class="p-3 bg-slate-950 border border-slate-800 rounded-xl font-mono text-xs w-full space-y-2"><div class="flex justify-between"><span class="text-slate-400">Cantón de Zúrich</span><span class="text-white font-bold">14.5%</span></div><div class="flex justify-between"><span class="text-slate-400">Cantón de Zug</span><span class="text-amber-400 font-bold">11.8%</span></div></div>`
  },
  {
    id: "tab_47", num: "47", name: "Incident Response Action Item Log", archetype: "Action Log",
    tags: ["#incident", "#actions", "#postmortem", "#security"],
    desc: "Medidas correctivas acordadas en la sesión de autopsia tras un fallo de sistema.",
    html: `<div class="p-3 bg-slate-900 border border-slate-800 rounded-xl text-xs space-y-1.5"><div class="font-bold text-white">Postmortem: Incidente de Red 24-Sep</div><div class="text-[11px] text-slate-300 font-mono">✔ Añadida redundancia BGP en router perimetral</div><div class="text-[11px] text-amber-400 font-mono">⏳ Actualizar firmware de firewall</div></div>`
  },
  {
    id: "tab_48", num: "48", name: "Vault Safe Deposit Box Allocation", archetype: "Safe Boxes",
    tags: ["#safebox", "#vault", "#allocation", "#storage"],
    desc: "Asignación de cajas de seguridad privadas con llave biométrica individual.",
    html: `<div class="p-3 bg-gradient-to-br from-slate-950 to-amber-950/20 border border-amber-500/30 rounded-xl font-serif text-xs w-full space-y-1.5"><div class="flex justify-between font-mono text-[10px] text-amber-500"><span>CAJA SEGURIDAD #0842</span><span>BÓVEDA GINEBRA</span></div><div class="text-white font-bold text-sm">Custodia Documental y Metales</div><div class="text-[10px] font-mono text-slate-400">ACCESO: BIOMÉTRICO EXCLUSIVO</div></div>`
  },
  {
    id: "tab_49", num: "49", name: "Monolithic Blackout Clean Table", archetype: "Monolith Table",
    tags: ["#monolith", "#blackout", "#stark", "#table"],
    desc: "Tabla sobre negro absoluto con bordes tenues e información puramente tipográfica.",
    html: `<div class="bg-black border border-neutral-800 p-3 font-mono text-xs w-full space-y-2"><div class="flex justify-between text-neutral-500 text-[10px] uppercase tracking-wider"><span>REGISTRO</span><span>ESTADO</span></div><div class="flex justify-between text-white font-bold"><span>0x01_ENCLAVE</span><span>OPERATIVO</span></div></div>`
  },
  {
    id: "tab_50", num: "50", name: "Zero-Gravity Quantum State Matrix", archetype: "Quantum Matrix",
    tags: ["#quantum", "#matrix", "#qubits", "#zero-gravity"],
    desc: "Matriz de densidad de estados cuánticos puros con probabilidad de fase.",
    html: `<div class="p-4 bg-slate-950/80 border border-cyan-400/40 rounded-2xl shadow-[0_10px_30px_rgba(6,182,212,0.2)] font-mono text-xs w-full space-y-2"><div class="flex justify-between text-cyan-300 text-[10px] uppercase"><span>ESTADO CUÁNTICO |ψ⟩</span><span>PROBABILIDAD</span></div><div class="flex justify-between text-white font-bold"><span>|00⟩ + |11⟩ (Bell)</span><span class="text-cyan-400">50.0% / 50.0%</span></div><div class="text-[10px] text-slate-400">ENTRELAZAMIENTO MÁXIMO CONFIRMADO</div></div>`
  }
];
