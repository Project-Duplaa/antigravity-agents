// 50 Botones e Interacciones Táctiles
export const buttons = [
  {
    id: "btn_01", num: "01", name: "Sovereign Gold Chamfer", archetype: "Sovereign Luxury",
    tags: ["#gold", "#chamfer", "#luxury", "#sovereign"],
    desc: "Bisel dorado a 45 grados con degradado de pan de oro, borde pulido y compresión táctil al hacer clic.",
    btnLabel: "AUTORIZAR ASIGNACIÓN",
    html: `<button class="btn-tactile px-6 py-3 font-semibold text-xs tracking-widest uppercase transition-all clip-bevel text-black bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#AA771C] hover:brightness-110 shadow-lg shadow-[#D4AF37]/20 flex items-center justify-center gap-2"><i class="ph-bold ph-shield-check text-base"></i> AUTORIZAR ASIGNACIÓN</button>`
  },
  {
    id: "btn_02", num: "02", name: "Swiss Brutalist 3D Offset", archetype: "Brutalist Stark",
    tags: ["#brutalist", "#swiss", "#3d", "#high-contrast"],
    desc: "Sombra dura de 3px sin difuminar. Al presionar, el botón se desplaza físicamente hacia la sombra.",
    btnLabel: "EJECUTAR ORDEN",
    html: `<button class="btn-tactile px-6 py-3 font-bold text-xs tracking-wider uppercase bg-white text-black border-2 border-black shadow-[4px_4px_0px_0px_#E11D48] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_#E11D48] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none transition-all flex items-center justify-center gap-2"><i class="ph-bold ph-arrow-right text-base text-[#E11D48]"></i> EJECUTAR ORDEN</button>`
  },
  {
    id: "btn_03", num: "03", name: "Liquid Glass Pill", archetype: "Glassmorphism",
    tags: ["#glass", "#pill", "#blur", "#specular"],
    desc: "Cristal líquido traslúcido con backdrop-blur de 16px, borde especular brillante y fulgor interior.",
    btnLabel: "DESPLEGAR CÁLCULO",
    html: `<button class="btn-tactile px-6 py-3 font-medium text-xs tracking-wide rounded-full text-white bg-white/10 hover:bg-white/15 border border-white/30 backdrop-blur-md shadow-[inset_0_1px_1px_rgba(255,255,255,0.4)] hover:shadow-[inset_0_1px_2px_rgba(255,255,255,0.6),0_8px_20px_rgba(0,0,0,0.3)] transition-all flex items-center justify-center gap-2"><i class="ph-duotone ph-sparkle text-base text-cyan-300"></i> DESPLEGAR CÁLCULO</button>`
  },
  {
    id: "btn_04", num: "04", name: "Cyberpunk Corner-Notch HUD", archetype: "Cyberpunk Tech",
    tags: ["#cyberpunk", "#hud", "#notch", "#neon"],
    desc: "Esquina inferior recortada con borde verde ácido, microcódigo de terminal y resplandor HUD.",
    btnLabel: "OVERRIDE PROTOCOL",
    html: `<button class="btn-tactile px-6 py-3 font-mono text-xs tracking-widest text-[#A3E635] bg-[#0A1408] hover:bg-[#12240F] border border-[#A3E635] clip-notch shadow-[0_0_15px_rgba(163,230,53,0.25)] transition-all flex items-center justify-center gap-2"><i class="ph-bold ph-terminal-window text-base"></i> OVERRIDE // 0x8F</button>`
  },
  {
    id: "btn_05", num: "05", name: "Minimalist Hairline Drawer", archetype: "Minimalist Pro",
    tags: ["#minimal", "#hairline", "#underline", "#subtle"],
    desc: "Fondo transparente puro con línea inferior expandible en oro al hacer hover y tipografía espaciada.",
    btnLabel: "VER EXPEDIENTE COMPLETO",
    html: `<button class="group px-4 py-2.5 font-medium text-xs tracking-widest uppercase text-slate-300 hover:text-white transition-colors relative flex items-center justify-center gap-2"><span>VER EXPEDIENTE</span><i class="ph-bold ph-arrow-up-right text-amber-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"></i><span class="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#F59E0B] group-hover:w-full transition-all duration-300"></span></button>`
  },
  {
    id: "btn_06", num: "06", name: "Tactical Ghost Reticle", archetype: "Tactical Military",
    tags: ["#tactical", "#ghost", "#military", "#crosshair"],
    desc: "Botón fantasma con marcas de mira telescópica en las cuatro esquinas y tipografía monospace.",
    btnLabel: "LOCK TARGET // SYNC",
    html: `<button class="btn-tactile relative px-6 py-3 font-mono text-xs tracking-wider text-slate-300 hover:text-white bg-slate-900/60 hover:bg-slate-800/80 border border-slate-700/80 transition-all flex items-center justify-center gap-2"><span class="absolute top-0 left-0 w-1.5 h-1.5 border-t-2 border-l-2 border-amber-400"></span><span class="absolute top-0 right-0 w-1.5 h-1.5 border-t-2 border-r-2 border-amber-400"></span><span class="absolute bottom-0 left-0 w-1.5 h-1.5 border-b-2 border-l-2 border-amber-400"></span><span class="absolute bottom-0 right-0 w-1.5 h-1.5 border-b-2 border-r-2 border-amber-400"></span><i class="ph-bold ph-crosshair text-amber-400"></i> LOCK TARGET // SYNC</button>`
  },
  {
    id: "btn_07", num: "07", name: "Heavy Metal Bevel & Emboss", archetype: "Skeuomorphic Gunmetal",
    tags: ["#skeuomorph", "#metal", "#bevel", "#heavy"],
    desc: "Acabado de titanio maquinado en CNC con doble bisel superior claro e inferior oscuro en 3D.",
    btnLabel: "ENGAGE HYDRAULICS",
    html: `<button class="btn-tactile px-6 py-3 font-bold text-xs tracking-widest text-slate-200 uppercase rounded bg-gradient-to-b from-[#334155] via-[#1E293B] to-[#0F172A] border-t border-slate-400 border-b-2 border-b-black border-x border-slate-700 shadow-md shadow-black/60 active:border-t-black active:border-b-slate-400 active:bg-gradient-to-b active:from-[#0F172A] active:to-[#1E293B] transition-all flex items-center justify-center gap-2"><i class="ph-fill ph-gear text-base text-slate-400"></i> ENGAGE HYDRAULICS</button>`
  },
  {
    id: "btn_08", num: "08", name: "Kinetic Pill Morph", archetype: "Interactive Kinetic",
    tags: ["#kinetic", "#pill", "#morph", "#spring"],
    desc: "Píldora interactiva que expande un círculo con flecha magnética con curvatura spring natural.",
    btnLabel: "INICIAR SESIÓN DE FOCO",
    html: `<button class="group btn-tactile pl-6 pr-2 py-2 font-medium text-xs tracking-wide rounded-full text-white bg-slate-900 border border-slate-700 hover:border-amber-400/80 transition-all flex items-center justify-center gap-3"><span>INICIAR SESIÓN DE FOCO</span><span class="w-8 h-8 rounded-full bg-amber-400 text-black flex items-center justify-center group-hover:scale-110 group-hover:bg-amber-300 transition-transform"><i class="ph-bold ph-play text-xs"></i></span></button>`
  },
  {
    id: "btn_09", num: "09", name: "Bicolor Segmented Split", archetype: "Segmented Action",
    tags: ["#segmented", "#split", "#dropdown", "#pro"],
    desc: "Botón dividido con acción principal en cuerpo principal y selector de variantes en lateral.",
    btnLabel: "CREAR INFORME",
    html: `<div class="inline-flex rounded-md overflow-hidden border border-slate-700 shadow-sm"><button class="btn-tactile px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold tracking-wide flex items-center gap-2 transition-colors"><i class="ph-bold ph-file-plus text-amber-400"></i> CREAR INFORME</button><div class="w-[1px] bg-slate-700"></div><button class="btn-tactile px-2.5 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"><i class="ph-bold ph-caret-down text-xs"></i></button></div>`
  },
  {
    id: "btn_10", num: "10", name: "Floating Dual-Shadow Pill", archetype: "Modern Elevation",
    tags: ["#floating", "#shadow", "#pill", "#gradient"],
    desc: "Elevación suave mediante doble sombra perimetral difusa y degradado magenta a violeta profundo.",
    btnLabel: "TRANSFERIR FONDOS",
    html: `<button class="btn-tactile px-6 py-3 font-semibold text-xs tracking-wider rounded-full text-white bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 shadow-[0_10px_25px_-5px_rgba(124,58,237,0.5),0_8px_10px_-6px_rgba(124,58,237,0.3)] hover:shadow-[0_15px_30px_-5px_rgba(124,58,237,0.6)] transition-all flex items-center justify-center gap-2"><i class="ph-bold ph-paper-plane-tilt text-base"></i> TRANSFERIR FONDOS</button>`
  },
  {
    id: "btn_11", num: "11", name: "Soft Clay Neumorphic Inset", archetype: "Neumorphic Tactile",
    tags: ["#clay", "#neumorphic", "#inset", "#tactile"],
    desc: "Efecto de plástico moldeado suave con sombras interiores y exteriores que simulan extrusión física.",
    btnLabel: "MODO REPOSO",
    html: `<button class="btn-tactile px-6 py-3 rounded-xl font-bold text-xs tracking-wider text-slate-300 bg-[#161D2A] shadow-[inset_2px_2px_4px_rgba(255,255,255,0.06),inset_-2px_-2px_4px_rgba(0,0,0,0.5),5px_5px_15px_rgba(0,0,0,0.4)] active:shadow-[inset_4px_4px_6px_rgba(0,0,0,0.6),inset_-2px_-2px_4px_rgba(255,255,255,0.04)] transition-all flex items-center justify-center gap-2"><i class="ph-fill ph-moon-stars text-base text-indigo-400"></i> MODO REPOSO</button>`
  },
  {
    id: "btn_12", num: "12", name: "Micro-Haptic Audio Wave", archetype: "Audio Interactive",
    tags: ["#audio", "#haptic", "#equalizer", "#sound"],
    desc: "Botón con barra ecualizadora de 4 bandas que simula retroalimentación acústica.",
    btnLabel: "TRANSMITIR VOZ",
    html: `<button class="group btn-tactile px-6 py-3 rounded-lg font-mono text-xs tracking-wider text-emerald-300 bg-emerald-950/40 hover:bg-emerald-950/60 border border-emerald-500/40 transition-all flex items-center justify-center gap-3"><span>TRANSMITIR VOZ</span><div class="flex items-end gap-0.5 h-3"><span class="w-0.5 h-1.5 bg-emerald-400 animate-pulse"></span><span class="w-0.5 h-3 bg-emerald-400 animate-pulse"></span><span class="w-0.5 h-2 bg-emerald-400 animate-pulse"></span><span class="w-0.5 h-2.5 bg-emerald-400 animate-pulse"></span></div></button>`
  },
  {
    id: "btn_13", num: "13", name: "Perforated Stamp Ticket", archetype: "Voucher Ticket",
    tags: ["#stamp", "#ticket", "#perforated", "#voucher"],
    desc: "Bordes dentados troquelados estilo ticket de avión o entrada de subasta exclusiva.",
    btnLabel: "BOARDING PASS #04",
    html: `<button class="btn-tactile px-6 py-2.5 font-mono text-xs tracking-widest text-amber-200 bg-amber-950/40 hover:bg-amber-950/60 border-2 border-dashed border-amber-500/60 rounded-sm transition-all flex items-center justify-center gap-2"><i class="ph-bold ph-ticket text-base text-amber-400"></i> BOARDING PASS #04</button>`
  },
  {
    id: "btn_14", num: "14", name: "Laser Glow Neon Pulse", archetype: "Laser Cyber",
    tags: ["#laser", "#glow", "#neon", "#cyan"],
    desc: "Resplandor exterior intenso en cian saturado con microborde blanco superbrillante.",
    btnLabel: "PULSO LÁSER 100%",
    html: `<button class="btn-tactile px-6 py-3 font-bold text-xs tracking-widest text-black bg-cyan-400 hover:bg-cyan-300 rounded shadow-[0_0_20px_#22D3EE] hover:shadow-[0_0_30px_#22D3EE] transition-all flex items-center justify-center gap-2"><i class="ph-bold ph-lightning text-base"></i> PULSO LÁSER 100%</button>`
  },
  {
    id: "btn_15", num: "15", name: "Retro Terminal Green CRT", archetype: "Retro Monospace",
    tags: ["#terminal", "#crt", "#green", "#retro"],
    desc: "Verde fósforo P1 sobre negro absoluto con cursor parpadeante integrado.",
    btnLabel: "$ ./DEPLOY_PRODUCTION",
    html: `<button class="btn-tactile px-5 py-2.5 font-mono text-xs tracking-wider text-green-400 bg-black hover:bg-green-950/30 border border-green-500/80 rounded-none shadow-[0_0_10px_rgba(34,197,94,0.2)] transition-all flex items-center justify-center gap-2"><span class="text-green-500">$</span> ./DEPLOY_PROD<span class="inline-block w-1.5 h-3 bg-green-400 animate-ping ml-1"></span></button>`
  },
  {
    id: "btn_16", num: "16", name: "Monastic Wax Seal Stamp", archetype: "Craft Wax Seal",
    tags: ["#seal", "#wax", "#stamp", "#embossed"],
    desc: "Sello circular simulando cera carmesí de lacre fundido con relieve heráldico.",
    btnLabel: "CONFIRMAR LACRE",
    html: `<button class="btn-tactile px-6 py-2.5 font-serif text-xs tracking-widest text-rose-100 bg-gradient-to-br from-rose-900 via-rose-800 to-rose-950 border border-rose-600/60 rounded-full shadow-[0_4px_12px_rgba(225,29,72,0.4)] hover:brightness-110 transition-all flex items-center justify-center gap-2"><i class="ph-fill ph-seal-check text-rose-300 text-base"></i> CONFIRMAR LACRE</button>`
  },
  {
    id: "btn_17", num: "17", name: "Diamond Chamfer Precision", archetype: "Precision Diamond",
    tags: ["#diamond", "#chamfer", "#geometric", "#precision"],
    desc: "Corte biselado en ambos extremos simulando gema tallada con precisión suiza.",
    btnLabel: "VERIFICAR CRIPTO",
    html: `<button class="btn-tactile px-7 py-3 font-semibold text-xs tracking-wider text-white bg-slate-900 border border-cyan-500/50 clip-bevel-sm hover:border-cyan-400 hover:bg-slate-800 transition-all flex items-center justify-center gap-2"><i class="ph-bold ph-shield-chevron text-cyan-400"></i> VERIFICAR CRIPTO</button>`
  },
  {
    id: "btn_18", num: "18", name: "Wireframe Hologram Shift", archetype: "Hologram Wireframe",
    tags: ["#hologram", "#wireframe", "#aberration", "#shift"],
    desc: "Efecto holográfico con separación de canales cromáticos y fondo de rejilla traslúcido.",
    btnLabel: "SYNCHRONIZE MATRIX",
    html: `<button class="btn-tactile px-6 py-3 font-mono text-xs tracking-widest text-sky-300 bg-sky-950/30 hover:bg-sky-900/40 border border-sky-400/40 hover:border-sky-300 shadow-[0_0_15px_rgba(56,189,248,0.2)] transition-all flex items-center justify-center gap-2"><i class="ph-bold ph-cube text-base text-sky-400"></i> SYNC MATRIX // 60Hz</button>`
  },
  {
    id: "btn_19", num: "19", name: "Double Hairline Border", archetype: "Architectural Border",
    tags: ["#double-border", "#hairline", "#clean", "#minimal"],
    desc: "Doble contorno concéntrico de 1px con separación de aire para sofisticación institucional.",
    btnLabel: "CONSULTAR BÓVEDA",
    html: `<div class="p-1 border border-slate-700/60 rounded inline-block"><button class="btn-tactile px-5 py-2 font-medium text-xs tracking-widest uppercase text-slate-200 bg-slate-900 hover:bg-slate-800 border border-slate-600/80 rounded transition-all flex items-center gap-2"><i class="ph-bold ph-lock-key text-amber-400"></i> CONSULTAR BÓVEDA</button></div>`
  },
  {
    id: "btn_20", num: "20", name: "Tactile Pill Switch", archetype: "Physical Rocker",
    tags: ["#switch", "#rocker", "#toggle", "#mechanical"],
    desc: "Interruptor basculante mecánico con LED indicador en verde esmeralda activo.",
    btnLabel: "ENLACE SEGURO",
    html: `<button class="btn-tactile px-5 py-2.5 rounded-full bg-slate-900 border border-slate-700 text-xs font-semibold tracking-wide text-slate-300 hover:text-white flex items-center gap-3 shadow-inner"><span class="w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-[0_0_8px_#34D399]"></span><span>ENLACE SEGURO</span><span class="text-[10px] font-mono text-slate-500 uppercase">ONLINE</span></button>`
  },
  {
    id: "btn_21", num: "21", name: "Brutalist Label Sticker", archetype: "Post-Punk Sticker",
    tags: ["#sticker", "#brutalist", "#rotated", "#punk"],
    desc: "Etiqueta adhesiva ligeramente inclinada (-1.5deg) con código de barras y corte de tijera.",
    btnLabel: "SAMPLE #9042 // PASS",
    html: `<button class="btn-tactile -rotate-1 px-5 py-2.5 font-mono text-xs font-bold text-black bg-[#FDE047] border-2 border-black shadow-[3px_3px_0px_#000] hover:rotate-0 transition-transform flex items-center justify-center gap-2"><i class="ph-bold ph-barcode text-base"></i> SAMPLE #9042 // PASS</button>`
  },
  {
    id: "btn_22", num: "22", name: "Brushed Titanium Bar", archetype: "Machined Titanium",
    tags: ["#titanium", "#brushed", "#metal", "#industrial"],
    desc: "Acabado de titanio aeroespacial cepillado con reflejos lineales horizontales.",
    btnLabel: "CALIBRAR VECTORES",
    html: `<button class="btn-tactile px-6 py-3 font-bold text-xs tracking-widest text-slate-200 uppercase bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 hover:from-slate-700 hover:to-slate-700 border border-slate-600 rounded shadow-md transition-all flex items-center justify-center gap-2"><i class="ph-bold ph-compass text-amber-400"></i> CALIBRAR VECTORES</button>`
  },
  {
    id: "btn_23", num: "23", name: "Glass Morphed Floating Ring", archetype: "Futuristic Orb",
    tags: ["#ring", "#glass", "#glow", "#circular"],
    desc: "Anillo flotante traslúcido con halo perimetral que se intensifica al acercar el cursor.",
    btnLabel: "ACTIVAR VÓRTICE",
    html: `<button class="btn-tactile px-6 py-3 rounded-full font-medium text-xs tracking-wider text-purple-200 bg-purple-950/40 hover:bg-purple-900/50 border border-purple-500/50 hover:border-purple-400 shadow-[0_0_15px_rgba(168,85,247,0.3)] transition-all flex items-center justify-center gap-2"><i class="ph-bold ph-aperture text-base text-purple-400"></i> ACTIVAR VÓRTICE</button>`
  },
  {
    id: "btn_24", num: "24", name: "Hazard Warning Diagonal Stripes", archetype: "Industrial Hazard",
    tags: ["#hazard", "#warning", "#stripes", "#industrial"],
    desc: "Rayas diagonales amarillas y negras de advertencia de planta nuclear o alta tensión.",
    btnLabel: "EMERGENCY SHUTDOWN",
    html: `<button class="btn-tactile px-6 py-3 font-black text-xs tracking-widest text-black uppercase bg-[#FACC15] border-2 border-black shadow-[4px_4px_0px_#000] hover:bg-[#EAB308] transition-all flex items-center justify-center gap-2"><i class="ph-fill ph-warning-octagon text-base text-red-600"></i> EMERGENCY STOP</button>`
  },
  {
    id: "btn_25", num: "25", name: "Magnetic Snap Cursor", archetype: "Kinetic Micro",
    tags: ["#magnetic", "#snap", "#minimal", "#kinetic"],
    desc: "Botón con micro-rebote que responde con feedback visual de atracción magnética.",
    btnLabel: "EXPLORAR CARTERA",
    html: `<button class="btn-tactile px-6 py-3 font-semibold text-xs tracking-wide rounded-lg text-slate-100 bg-slate-800/80 hover:bg-amber-400 hover:text-black border border-slate-600 hover:border-amber-400 transition-all flex items-center justify-center gap-2"><i class="ph-bold ph-magnet text-base"></i> EXPLORAR CARTERA</button>`
  },
  {
    id: "btn_26", num: "26", name: "Gradient Edge Conic Glow", archetype: "Border Beam",
    tags: ["#conic", "#border-beam", "#glow", "#gradient"],
    desc: "Borde iluminado con degradado angular cónico que simula un haz de luz giratorio.",
    btnLabel: "GENERAR IA COPILOT",
    html: `<div class="p-[1px] rounded-lg bg-gradient-to-r from-amber-400 via-rose-500 to-indigo-500 inline-block"><button class="btn-tactile px-6 py-2.5 rounded-[7px] font-semibold text-xs tracking-wider text-white bg-slate-950 hover:bg-slate-900 transition-colors flex items-center justify-center gap-2"><i class="ph-fill ph-sparkle text-amber-400"></i> GENERAR IA COPILOT</button></div>`
  },
  {
    id: "btn_27", num: "27", name: "Monospaced Command Prompt", archetype: "Terminal Line",
    tags: ["#prompt", "#mono", "#command", "#cli"],
    desc: "Entrada directa estilo consola Unix con instrucción de terminal autocompletada.",
    btnLabel: "> run bench --quick",
    html: `<button class="btn-tactile px-5 py-2.5 font-mono text-xs text-sky-400 bg-slate-950 hover:bg-slate-900 border border-sky-800 rounded font-semibold tracking-wider flex items-center gap-2"><span class="text-amber-400">></span> run bench --quick <i class="ph-bold ph-play text-xs text-sky-300"></i></button>`
  },
  {
    id: "btn_28", num: "28", name: "Pill with Live Status Beacon", archetype: "Live Telemetry",
    tags: ["#beacon", "#pulse", "#live", "#pill"],
    desc: "Píldora ejecutiva con micro-faro de emisión luminosa parpadeante a 2Hz seguro.",
    btnLabel: "RED SWIFT: ACTIVA",
    html: `<button class="btn-tactile px-5 py-2.5 rounded-full font-medium text-xs tracking-wide text-slate-200 bg-slate-900/90 border border-slate-700/80 hover:border-slate-500 transition-all flex items-center gap-2.5"><span class="relative flex h-2 w-2"><span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span><span class="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span></span><span>RED SWIFT: ACTIVA</span></button>`
  },
  {
    id: "btn_29", num: "29", name: "Frosted Acrylic Borderless", archetype: "Aero Frosted",
    tags: ["#acrylic", "#borderless", "#blur", "#clean"],
    desc: "Placa acrílica satinada pura sin contornos rígidos con difusión de sombras suaves.",
    btnLabel: "DESCUBRIR MÁS",
    html: `<button class="btn-tactile px-6 py-3 font-semibold text-xs tracking-wider rounded-md text-slate-100 bg-white/10 hover:bg-white/20 backdrop-blur-lg shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"><i class="ph-bold ph-compass text-amber-300"></i> DESCUBRIR MÁS</button>`
  },
  {
    id: "btn_30", num: "30", name: "Ceramic Gloss Tile", archetype: "Ceramic Specular",
    tags: ["#ceramic", "#gloss", "#tile", "#clean"],
    desc: "Sensación de porcelana vidriada con reflejo especular blanco puro en el tercio superior.",
    btnLabel: "CREAR IDENTIDAD",
    html: `<button class="btn-tactile px-6 py-3 rounded-lg font-bold text-xs tracking-wider uppercase text-slate-900 bg-gradient-to-b from-white via-slate-100 to-slate-200 shadow-md hover:brightness-105 transition-all flex items-center justify-center gap-2"><i class="ph-bold ph-fingerprint text-base text-amber-600"></i> CREAR IDENTIDAD</button>`
  },
  {
    id: "btn_31", num: "31", name: "Military Stencil Cutout", archetype: "Military Stencil",
    tags: ["#stencil", "#military", "#cutout", "#olive"],
    desc: "Letras estarcidas sobre chapa verde militar con remaches perimetrales simulados.",
    btnLabel: "SPEC-OPS 09 // GO",
    html: `<button class="btn-tactile px-6 py-3 font-mono font-bold text-xs tracking-widest text-lime-400 uppercase bg-[#141B12] border-2 border-lime-600/70 hover:bg-[#1B2618] transition-all flex items-center justify-center gap-2"><i class="ph-bold ph-target text-base"></i> SPEC-OPS // ENGAGE</button>`
  },
  {
    id: "btn_32", num: "32", name: "Tactile Rubber Push Keypad", archetype: "Mechanical Pad",
    tags: ["#rubber", "#keypad", "#tactile", "#vintage"],
    desc: "Tecla de goma táctil profunda inspirada en sintetizadores Roland y cajas de ritmos MPC.",
    btnLabel: "PAD 01: TRIG",
    html: `<button class="btn-tactile px-6 py-3 rounded font-mono text-xs font-bold text-amber-300 bg-[#252528] border-b-4 border-black hover:border-b-2 hover:translate-y-[2px] active:border-b-0 active:translate-y-[4px] transition-all flex items-center justify-center gap-2"><i class="ph-fill ph-waveform text-amber-400"></i> PAD 01: TRIG</button>`
  },
  {
    id: "btn_33", num: "33", name: "Liquid Mercury Morph", archetype: "Chrome Fluid",
    tags: ["#mercury", "#chrome", "#metallic", "#fluid"],
    desc: "Degradado metálico líquido con brillo de mercurio dinámico.",
    btnLabel: "SINTETIZAR METAL",
    html: `<button class="btn-tactile px-6 py-3 rounded-full font-bold text-xs tracking-wider uppercase text-slate-900 bg-gradient-to-r from-slate-200 via-slate-400 to-slate-200 hover:from-white hover:to-slate-300 shadow-md transition-all flex items-center justify-center gap-2"><i class="ph-fill ph-drop text-slate-800"></i> SINTETIZAR METAL</button>`
  },
  {
    id: "btn_34", num: "34", name: "Minimalist Arrow Launcher", archetype: "Launcher Arrow",
    tags: ["#launcher", "#arrow", "#minimal", "#clean"],
    desc: "Composición tipográfica sobria con flecha dinámica que se desplaza hacia la derecha en hover.",
    btnLabel: "ACCEDER AL TERMINAL",
    html: `<button class="group btn-tactile px-5 py-2.5 font-medium text-xs tracking-wider text-slate-200 hover:text-amber-400 border border-slate-700 hover:border-amber-400/80 rounded transition-all flex items-center gap-3"><span>ACCEDER AL TERMINAL</span><i class="ph-bold ph-arrow-right text-sm group-hover:translate-x-1.5 transition-transform text-amber-400"></i></button>`
  },
  {
    id: "btn_35", num: "35", name: "Carbon Fiber Weave Texture", archetype: "Carbon Composite",
    tags: ["#carbon", "#fiber", "#racing", "#texture"],
    desc: "Trama de fibra de carbono entrelazada con borde rojo de competición.",
    btnLabel: "LAUNCH TELEMETRY",
    html: `<button class="btn-tactile px-6 py-3 font-sans font-bold text-xs tracking-widest text-slate-200 uppercase bg-slate-950 border border-slate-800 hover:border-rose-500 shadow-md transition-all flex items-center justify-center gap-2 relative overflow-hidden"><span class="w-1 h-full bg-rose-500 absolute left-0 top-0"></span><i class="ph-bold ph-gauge text-rose-400"></i> LAUNCH TELEMETRY</button>`
  },
  {
    id: "btn_36", num: "36", name: "Split Accent Corner", archetype: "Corner Ribbon",
    tags: ["#ribbon", "#corner", "#accent", "#gold"],
    desc: "Tarjeta de botón con pestaña triangular en la esquina superior derecha en color dorado.",
    btnLabel: "PLAN PREMIUM PRO",
    html: `<button class="btn-tactile relative px-6 py-3 font-semibold text-xs tracking-wider text-white bg-slate-900 border border-slate-700 hover:border-slate-500 rounded transition-all flex items-center justify-center gap-2 overflow-hidden"><span class="absolute top-0 right-0 w-3.5 h-3.5 bg-amber-400 rotate-45 translate-x-2 -translate-y-2"></span><i class="ph-fill ph-crown text-amber-400"></i> PLAN PREMIUM PRO</button>`
  },
  {
    id: "btn_37", num: "37", name: "Pill with Embedded Micro-Counter", archetype: "Badge Counter",
    tags: ["#counter", "#badge", "#pill", "#tasks"],
    desc: "Botón con contador numérico circular para tareas pendientes o notificaciones activas.",
    btnLabel: "PROCESAR COLA",
    html: `<button class="btn-tactile px-5 py-2.5 rounded-full font-medium text-xs tracking-wide text-white bg-slate-800 hover:bg-slate-700 border border-slate-600 transition-all flex items-center gap-2.5"><span>PROCESAR COLA</span><span class="px-2 py-0.5 rounded-full text-[10px] font-mono font-bold bg-amber-400 text-black">14</span></button>`
  },
  {
    id: "btn_38", num: "38", name: "Horological Crown Gear", archetype: "Horological Watch",
    tags: ["#watch", "#crown", "#gear", "#horological"],
    desc: "Borde dentado que emula la corona de cuerda de un reloj suizo de alta manufactura.",
    btnLabel: "RESERVA DE MARCHA",
    html: `<button class="btn-tactile px-6 py-2.5 font-serif text-xs tracking-widest text-amber-200 bg-slate-950 border-x-2 border-y border-amber-500/50 hover:border-amber-400 transition-all flex items-center justify-center gap-2"><i class="ph-duotone ph-watch text-amber-400 text-base"></i> RESERVA DE MARCHA: 72H</button>`
  },
  {
    id: "btn_39", num: "39", name: "Ink Stamp Pressed", archetype: "Distressed Stamp",
    tags: ["#ink", "#stamp", "#pressed", "#archive"],
    desc: "Estilo sello de caucho entintado a mano con textura envejecida de archivo oficial.",
    btnLabel: "[ APROBADO // AUDITORÍA ]",
    html: `<button class="btn-tactile px-6 py-2.5 font-mono text-xs font-bold text-emerald-400 border-2 border-emerald-500/80 bg-emerald-950/20 hover:bg-emerald-950/40 rounded-sm tracking-wider flex items-center justify-center gap-2"><i class="ph-bold ph-check-square text-base"></i> [ APROBADO: AUDITORÍA ]</button>`
  },
  {
    id: "btn_40", num: "40", name: "Quantum Particle Glow", archetype: "Cosmic Glow",
    tags: ["#quantum", "#glow", "#purple", "#particle"],
    desc: "Aura violeta cuántica con micropartículas de alta energía en el fondo.",
    btnLabel: "INICIAR INFERENCIA",
    html: `<button class="btn-tactile px-6 py-3 rounded-lg font-semibold text-xs tracking-wider text-purple-100 bg-gradient-to-r from-purple-900 to-indigo-900 hover:from-purple-800 hover:to-indigo-800 border border-purple-500/50 shadow-[0_0_20px_rgba(168,85,247,0.35)] transition-all flex items-center justify-center gap-2"><i class="ph-fill ph-atom text-purple-300"></i> INICIAR INFERENCIA</button>`
  },
  {
    id: "btn_41", num: "41", name: "Sovereign Monogram Crest", archetype: "Heraldic Crest",
    tags: ["#monogram", "#crest", "#sovereign", "#gold"],
    desc: "Emblema heráldico con inicial grabada en oro sobre fondo azul marino profundo.",
    btnLabel: "ACCESO DIPLOMÁTICO",
    html: `<button class="btn-tactile px-6 py-3 font-serif text-xs tracking-widest text-[#F4EDE2] bg-[#071328] hover:bg-[#0D2040] border border-[#C5A358]/60 rounded shadow-md transition-all flex items-center justify-center gap-2"><i class="ph-fill ph-shield-star text-[#C5A358]"></i> ACCESO DIPLOMÁTICO</button>`
  },
  {
    id: "btn_42", num: "42", name: "Cyberpunk Warning Hazard", archetype: "Hazard Strip",
    tags: ["#hazard", "#cyberpunk", "#override", "#danger"],
    desc: "Bloque de advertencia rojo fuego con bandas de precaución para acciones irreversibles.",
    btnLabel: "PURGAR REGISTROS",
    html: `<button class="btn-tactile px-6 py-3 font-mono font-bold text-xs tracking-wider text-rose-200 bg-rose-950/60 hover:bg-rose-900/80 border border-rose-500 transition-all flex items-center justify-center gap-2"><i class="ph-bold ph-radiation text-rose-400"></i> PURGAR // 0xDEADBEEF</button>`
  },
  {
    id: "btn_43", num: "43", name: "Deep Groove Channel", archetype: "Sunken Trench",
    tags: ["#groove", "#channel", "#trench", "#embedded"],
    desc: "Botón embutido dentro de una ranura oscura para evitar pulsaciones accidentales.",
    btnLabel: "DESBLOQUEAR ENCLAVE",
    html: `<div class="p-1 bg-black/60 rounded-lg inline-block border border-slate-800"><button class="btn-tactile px-5 py-2 rounded-md font-bold text-xs tracking-wider text-slate-300 bg-slate-900 hover:bg-slate-800 border border-slate-700 transition-all flex items-center gap-2"><i class="ph-bold ph-key text-amber-400"></i> DESBLOQUEAR ENCLAVE</button></div>`
  },
  {
    id: "btn_44", num: "44", name: "Prism Rainbow Refraction", archetype: "Spectral Prism",
    tags: ["#rainbow", "#prism", "#refraction", "#color"],
    desc: "Refracción de arcoíris en el borde que reproduce la descomposición de la luz en un prisma.",
    btnLabel: "REFRACCIÓN ÓPTICA",
    html: `<button class="btn-tactile px-6 py-3 rounded-lg font-bold text-xs tracking-wider text-white bg-slate-900 border border-white/20 hover:border-transparent hover:shadow-[0_0_20px_rgba(255,255,255,0.4)] transition-all flex items-center justify-center gap-2"><i class="ph-bold ph-rainbow text-base text-pink-400"></i> REFRACCIÓN ÓPTICA</button>`
  },
  {
    id: "btn_45", num: "45", name: "Minimalist Dot Matrix Indicator", archetype: "Dot Matrix Display",
    tags: ["#dot-matrix", "#retro", "#ticker", "#led"],
    desc: "Simulación de letrero de matriz de puntos LED monocromático ámbar.",
    btnLabel: "TRANSMISIÓN 14.4K",
    html: `<button class="btn-tactile px-5 py-2.5 font-mono text-xs tracking-widest text-amber-400 bg-amber-950/30 hover:bg-amber-950/50 border border-amber-600/50 rounded flex items-center justify-center gap-2"><i class="ph-bold ph-broadcast text-base"></i> TX: 14.4 KB/S [SYNC]</button>`
  },
  {
    id: "btn_46", num: "46", name: "Neumorphic Dual State Toggle", archetype: "Tactile Rocker",
    tags: ["#neumorphic", "#toggle", "#state", "#soft"],
    desc: "Interruptor con dos estados táctiles visibles con curvatura ergonómica.",
    btnLabel: "AUTO // MANUAL",
    html: `<div class="inline-flex rounded-lg bg-slate-900 p-1 border border-slate-800"><button class="px-3.5 py-1.5 rounded-md text-xs font-bold bg-amber-400 text-black shadow">AUTO</button><button class="px-3.5 py-1.5 rounded-md text-xs font-medium text-slate-400 hover:text-white">MANUAL</button></div>`
  },
  {
    id: "btn_47", num: "47", name: "Floating Pill with Drop Badge", archetype: "Badge Pill",
    tags: ["#badge", "#floating", "#pill", "#new"],
    desc: "Píldora flotante con etiqueta de novedad anclada en la esquina superior.",
    btnLabel: "MODELO NEURONAL V4",
    html: `<div class="relative inline-block"><span class="absolute -top-2 -right-1 px-1.5 py-0.5 rounded text-[9px] font-bold font-mono bg-rose-500 text-white shadow">NUEVO</span><button class="btn-tactile px-6 py-2.5 rounded-full font-medium text-xs tracking-wide text-white bg-slate-800 hover:bg-slate-700 border border-slate-600 flex items-center gap-2"><i class="ph-bold ph-brain text-amber-400"></i> MODELO NEURONAL V4</button></div>`
  },
  {
    id: "btn_48", num: "48", name: "Architectural Concrete Slab", archetype: "Brutalist Stone",
    tags: ["#concrete", "#slab", "#architectural", "#chiseled"],
    desc: "Bloque de hormigón arquitectónico chiseled con biseles duros y tipografía monumental.",
    btnLabel: "ESTRUCTURAR FUNDACIÓN",
    html: `<button class="btn-tactile px-6 py-3 font-mono font-bold text-xs tracking-wider text-slate-300 uppercase bg-[#181D24] border-2 border-slate-600 hover:border-slate-400 hover:text-white transition-all flex items-center justify-center gap-2"><i class="ph-bold ph-buildings text-base"></i> FUNDACIÓN SÓLIDA</button>`
  },
  {
    id: "btn_49", num: "49", name: "Monolithic Blackout Bar", archetype: "Zero Noise Monolith",
    tags: ["#monolith", "#blackout", "#zero-noise", "#stark"],
    desc: "Negro 100% puro con tipografía micro-espaciada blanca. Cero distracciones.",
    btnLabel: "AUTENTICAR IDENTIDAD",
    html: `<button class="btn-tactile px-8 py-3.5 font-sans font-bold text-xs tracking-[0.2em] text-white uppercase bg-black hover:bg-neutral-900 border border-neutral-700 rounded-none transition-all flex items-center justify-center gap-3"><i class="ph-bold ph-lock text-sm"></i> AUTENTICAR IDENTIDAD</button>`
  },
  {
    id: "btn_50", num: "50", name: "Zero-Gravity Spatial Float", archetype: "Spatial Floating",
    tags: ["#spatial", "#float", "#3d", "#cosmic"],
    desc: "Botón con micro-levitación tridimensional y halo gravitacional que acompaña el scroll.",
    btnLabel: "ACTIVAR INGRAVIDEZ",
    html: `<button class="btn-tactile px-7 py-3 rounded-xl font-semibold text-xs tracking-wider text-cyan-200 bg-cyan-950/50 hover:bg-cyan-900/60 border border-cyan-400/60 shadow-[0_12px_24px_-8px_rgba(6,182,212,0.4)] hover:shadow-[0_16px_32px_-8px_rgba(6,182,212,0.6)] hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2"><i class="ph-fill ph-planet text-base text-cyan-400"></i> ACTIVAR INGRAVIDEZ</button>`
  }
];
