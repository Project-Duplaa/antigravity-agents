// 50 Inputs, Selectores & Formularios
export const inputs = [
  {
    id: "inp_01", num: "01", name: "Hairline Underline Minimalist Input", archetype: "Minimalist Hairline",
    tags: ["#underline", "#hairline", "#input", "#clean"],
    desc: "Campo de texto sin bordes laterales con línea inferior expandible en oro al hacer foco.",
    html: `<div class="space-y-1 w-full"><label class="text-[10px] font-mono uppercase tracking-wider text-slate-400 block">IMPORTE DE ASIGNACIÓN (USD)</label><input type="text" value="$2,000,000" class="w-full bg-transparent border-b border-slate-700 focus:border-amber-400 py-2 text-white font-mono text-base outline-none transition-colors"></div>`
  },
  {
    id: "inp_02", num: "02", name: "Chamfered Terminal HUD Input", archetype: "Cyberpunk Terminal",
    tags: ["#terminal", "#hud", "#notch", "#mono"],
    desc: "Caja de texto con esquinas recortadas a 45 grados, prefijo de consola y cursor verde ácido.",
    html: `<div class="space-y-1 w-full font-mono text-xs"><label class="text-[10px] text-lime-400 block">// IDENTIFICADOR DE BÓVEDA</label><div class="flex items-center bg-[#070D06] border border-lime-600/50 clip-notch px-3 py-2"><span class="text-lime-500 mr-2">></span><input type="text" value="0x9F4A...E12D" class="bg-transparent text-white font-mono outline-none w-full"></div></div>`
  },
  {
    id: "inp_03", num: "03", name: "Pill Toggle Micro-Illuminated Switch", archetype: "Pill Switch",
    tags: ["#toggle", "#switch", "#pill", "#illumination"],
    desc: "Interruptor de palanca con cápsula deslizante y micro-LED de estado en verde esmeralda.",
    html: `<div class="flex items-center justify-between p-3 bg-slate-900 border border-slate-800 rounded-xl w-full text-xs"><span class="font-medium text-white">Modo Privacidad Absoluta</span><button class="w-11 h-6 bg-amber-400 rounded-full p-1 transition-colors flex items-center justify-end"><span class="w-4 h-4 rounded-full bg-black shadow-md"></span></button></div>`
  },
  {
    id: "inp_04", num: "04", name: "Multi-Segment Horizon Tab Selector", archetype: "Horizon Tabs",
    tags: ["#segmented", "#tabs", "#selector", "#duration"],
    desc: "Selector horizontal de tres opciones de duración de foco: 25m, 50m y 90m.",
    html: `<div class="w-full space-y-1.5"><label class="text-[10px] font-mono text-slate-400 uppercase">DURACIÓN DEL BLOQUE</label><div class="grid grid-cols-3 gap-2 text-center text-xs font-mono"><button class="py-2 rounded bg-slate-900 border border-slate-800 text-slate-300 hover:text-white">25 MIN</button><button class="py-2 rounded bg-amber-400 text-black font-bold shadow">50 MIN</button><button class="py-2 rounded bg-slate-900 border border-slate-800 text-slate-300 hover:text-white">90 MIN</button></div></div>`
  },
  {
    id: "inp_05", num: "05", name: "Sovereign Floating Label Field with Gold Border", archetype: "Sovereign Gold",
    tags: ["#floating-label", "#gold", "#input", "#sovereign"],
    desc: "Campo con etiqueta flotante animada y halo dorado al recibir el foco del cursor.",
    html: `<div class="relative w-full"><input type="text" value="Alexander Pierce" class="w-full bg-[#0A0D14] border border-amber-500/40 rounded-lg pt-5 pb-2 px-3 text-white text-xs font-serif outline-none focus:border-amber-400 shadow-sm"><label class="absolute top-1.5 left-3 text-[9px] font-mono text-amber-400 uppercase tracking-widest">TITULAR FIDUCIARIO</label></div>`
  },
  {
    id: "inp_06", num: "06", name: "Numerical Range Slider with Value Bubble", archetype: "Range Slider",
    tags: ["#slider", "#range", "#numeric", "#bubble"],
    desc: "Control deslizante continuo con indicador flotante que muestra el porcentaje en tiempo real.",
    html: `<div class="w-full space-y-2 text-xs font-mono"><div class="flex justify-between"><span class="text-slate-400">TOLERANCIA DE RIESGO:</span><span class="text-amber-400 font-bold">18% MODERADO</span></div><input type="range" min="0" max="100" value="18" class="w-full accent-amber-400 bg-slate-800 h-1.5 rounded-lg cursor-pointer"></div>`
  },
  {
    id: "inp_07", num: "07", name: "Multi-Tag Token Pill Selector", archetype: "Tag Selector",
    tags: ["#tags", "#tokens", "#pills", "#categories"],
    desc: "Selector de etiquetas por chips con botón de cierre individual y campo para añadir nuevas.",
    html: `<div class="w-full space-y-1.5 text-xs"><label class="text-[10px] font-mono text-slate-400 uppercase">CATEGORÍAS</label><div class="flex flex-wrap gap-1.5 p-2 bg-slate-950 border border-slate-800 rounded-lg"><span class="px-2 py-0.5 rounded bg-amber-400/20 text-amber-300 font-mono text-[10px] flex items-center gap-1">Engineering <i class="ph-bold ph-x cursor-pointer"></i></span><span class="px-2 py-0.5 rounded bg-blue-500/20 text-blue-300 font-mono text-[10px] flex items-center gap-1">Legal <i class="ph-bold ph-x cursor-pointer"></i></span></div></div>`
  },
  {
    id: "inp_08", num: "08", name: "Brutalist Heavy Inset Textarea", archetype: "Brutalist Textarea",
    tags: ["#brutalist", "#textarea", "#inset", "#black"],
    desc: "Área de texto de alta densidad con tipografía monospace y marco negro de 2px.",
    html: `<div class="w-full space-y-1 font-mono text-xs"><label class="text-[10px] font-bold text-neutral-400 block uppercase">MEMORÁNDUM DE RESOLUCIÓN</label><textarea rows="2" class="w-full bg-black border-2 border-neutral-700 text-white p-2.5 outline-none focus:border-red-500 font-mono text-xs">Aprobación de transferencia extraordinaria a la cuenta fiduciaria.</textarea></div>`
  },
  {
    id: "inp_09", num: "09", name: "PIN Security Digits Code Boxes", archetype: "PIN Digits",
    tags: ["#pin", "#otp", "#digits", "#security"],
    desc: "Seis casillas individuales para código de doble factor (2FA) con avance automático.",
    html: `<div class="w-full space-y-2 text-center"><label class="text-[10px] font-mono text-slate-400 uppercase tracking-widest">CÓDIGO DE DOBLE FACTOR 2FA</label><div class="flex justify-center gap-2"><input type="text" maxlength="1" value="4" class="w-9 h-11 bg-slate-900 border border-slate-700 rounded text-center text-white font-mono text-lg font-bold"><input type="text" maxlength="1" value="9" class="w-9 h-11 bg-slate-900 border border-slate-700 rounded text-center text-white font-mono text-lg font-bold"><input type="text" maxlength="1" value="2" class="w-9 h-11 bg-slate-900 border border-slate-700 rounded text-center text-white font-mono text-lg font-bold"><input type="text" maxlength="1" value="1" class="w-9 h-11 bg-slate-900 border border-amber-400 rounded text-center text-white font-mono text-lg font-bold"></div></div>`
  },
  {
    id: "inp_10", num: "10", name: "Radio Card Tiles with Dual Option", archetype: "Radio Tiles",
    tags: ["#radio", "#cards", "#tiles", "#options"],
    desc: "Tarjetas seleccionables como radio buttons con icono de verificación activo.",
    html: `<div class="grid grid-cols-2 gap-2 w-full text-xs"><div class="p-3 bg-amber-400/10 border-2 border-amber-400 rounded-lg cursor-pointer"><div class="font-bold text-white flex justify-between">Custodia Fría <i class="ph-bold ph-check-circle text-amber-400"></i></div><div class="text-[10px] text-slate-400 mt-1">Air-gapped 100%</div></div><div class="p-3 bg-slate-900 border border-slate-800 rounded-lg cursor-pointer opacity-70"><div class="font-bold text-slate-300">Custodia Caliente</div><div class="text-[10px] text-slate-500 mt-1">Liquidación 0.1s</div></div></div>`
  },
  {
    id: "inp_11", num: "11", name: "Search Combobox with Autocomplete", archetype: "Search Combobox",
    tags: ["#combobox", "#search", "#autocomplete", "#dropdown"],
    desc: "Buscador con desplegable de sugerencias filtradas y atajo de teclado.",
    html: `<div class="relative w-full text-xs"><div class="flex items-center gap-2 px-3 py-2 bg-slate-900 border border-slate-700 rounded-lg"><i class="ph-bold ph-magnifying-glass text-slate-400"></i><input type="text" value="Aurelius" class="bg-transparent text-white outline-none w-full"><span class="text-[10px] font-mono text-slate-500">ESC</span></div></div>`
  },
  {
    id: "inp_12", num: "12", name: "Currency Input with Prefix & Suffix", archetype: "Currency Input",
    tags: ["#currency", "#money", "#prefix", "#finance"],
    desc: "Entrada numérica financiera con símbolo de divisa fijo y selector de moneda.",
    html: `<div class="flex items-center bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-xs font-mono w-full"><span class="text-amber-400 font-bold mr-2">$</span><input type="text" value="500,000.00" class="bg-transparent text-white font-bold outline-none flex-1"><span class="text-slate-400 text-[10px]">USD</span></div>`
  },
  {
    id: "inp_13", num: "13", name: "Date Horizon Timepicker Input", archetype: "Timepicker",
    tags: ["#time", "#date", "#picker", "#horizon"],
    desc: "Selector horario con icono de reloj de pulsera e intervalos de 15 minutos.",
    html: `<div class="flex items-center justify-between p-2.5 bg-slate-900 border border-slate-800 rounded-lg text-xs font-mono w-full"><div class="flex items-center gap-2"><i class="ph-bold ph-clock text-amber-400"></i><span class="text-white">10:00 - 12:30 GVA</span></div><span class="text-[10px] text-slate-400">150 MIN</span></div>`
  },
  {
    id: "inp_14", num: "14", name: "Star Rating & Priority Dots Selector", archetype: "Rating Dots",
    tags: ["#rating", "#priority", "#dots", "#stars"],
    desc: "Selector de prioridad mediante tres puntos o estrellas clicables.",
    html: `<div class="flex items-center justify-between p-3 bg-slate-950 border border-slate-800 rounded-xl w-full text-xs"><span class="text-slate-400 font-mono text-[11px]">PRIORIDAD:</span><div class="flex gap-1.5"><span class="w-3 h-3 rounded-full bg-amber-400"></span><span class="w-3 h-3 rounded-full bg-amber-400"></span><span class="w-3 h-3 rounded-full bg-slate-700"></span></div></div>`
  },
  {
    id: "inp_15", num: "15", name: "Color Swatch Palette Picker", archetype: "Swatch Picker",
    tags: ["#color", "#swatch", "#picker", "#palette"],
    desc: "Paleta de muestras de color circulares para personalizar la interfaz.",
    html: `<div class="flex items-center gap-2.5 p-2 bg-slate-900 border border-slate-800 rounded-lg w-full justify-between"><span class="text-[10px] font-mono text-slate-400">ACENTO:</span><div class="flex gap-2"><span class="w-5 h-5 rounded-full bg-amber-400 border-2 border-white cursor-pointer"></span><span class="w-5 h-5 rounded-full bg-cyan-400 cursor-pointer"></span><span class="w-5 h-5 rounded-full bg-emerald-400 cursor-pointer"></span><span class="w-5 h-5 rounded-full bg-rose-500 cursor-pointer"></span></div></div>`
  },
  {
    id: "inp_16", num: "16", name: "Quantity Stepper Plus / Minus", archetype: "Quantity Stepper",
    tags: ["#stepper", "#quantity", "#plus-minus", "#number"],
    desc: "Botones decrementales e incrementales para selección de unidades.",
    html: `<div class="flex items-center justify-between p-2 bg-slate-950 border border-slate-800 rounded-lg text-xs font-mono w-full"><span class="text-slate-400">RESERVAS (LINDEROS):</span><div class="flex items-center gap-2"><button class="w-6 h-6 rounded bg-slate-800 text-white font-bold flex items-center justify-center">-</button><span class="text-white font-bold">04</span><button class="w-6 h-6 rounded bg-slate-800 text-white font-bold flex items-center justify-center">+</button></div></div>`
  },
  {
    id: "inp_17", num: "17", name: "Dropzone File Upload Area", archetype: "Upload Dropzone",
    tags: ["#upload", "#dropzone", "#files", "#drag-drop"],
    desc: "Área de arrastrar y soltar archivos con icono de nube y límite de tamaño.",
    html: `<div class="p-4 bg-slate-900/60 border-2 border-dashed border-slate-700 hover:border-amber-400 rounded-xl text-center text-xs space-y-1 w-full cursor-pointer transition-colors"><i class="ph-bold ph-upload-simple text-amber-400 text-lg"></i><div class="text-white font-medium">Arrastra el contrato firmado aquí</div><div class="text-[10px] text-slate-500 font-mono">PDF, DOCX HASTA 25 MB</div></div>`
  },
  {
    id: "inp_18", num: "18", name: "OTP Code Boxes with Dash Separator", archetype: "OTP Separator",
    tags: ["#otp", "#code", "#2fa", "#separator"],
    desc: "Dos grupos de 3 dígitos divididos por un guion central para validación segura.",
    html: `<div class="flex items-center justify-center gap-1.5 w-full font-mono text-sm font-bold"><input type="text" value="8" class="w-8 h-10 bg-slate-900 border border-slate-700 rounded text-center text-white"><input type="text" value="4" class="w-8 h-10 bg-slate-900 border border-slate-700 rounded text-center text-white"><input type="text" value="2" class="w-8 h-10 bg-slate-900 border border-slate-700 rounded text-center text-white"><span class="text-slate-500 mx-1">—</span><input type="text" value="9" class="w-8 h-10 bg-slate-900 border border-slate-700 rounded text-center text-white"><input type="text" value="1" class="w-8 h-10 bg-slate-900 border border-slate-700 rounded text-center text-white"><input type="text" value="0" class="w-8 h-10 bg-slate-900 border border-slate-700 rounded text-center text-white"></div>`
  },
  {
    id: "inp_19", num: "19", name: "Dual Range Slider (Min / Max)", archetype: "Dual Range",
    tags: ["#dual-range", "#slider", "#min-max", "#filter"],
    desc: "Doble deslizador para acotar intervalos de precio o rentabilidad mínima y máxima.",
    html: `<div class="w-full space-y-1.5 text-xs font-mono"><div class="flex justify-between text-slate-400"><span class="text-[10px]">RANGO DE INVERSIÓN:</span><span class="text-amber-400 font-bold">$1M — $25M</span></div><div class="h-1.5 bg-slate-800 rounded-full relative"><div class="absolute left-1/4 right-1/4 h-full bg-amber-400 rounded-full"></div></div></div>`
  },
  {
    id: "inp_20", num: "20", name: "Rotary Knob Dial Controller", archetype: "Rotary Knob",
    tags: ["#knob", "#rotary", "#dial", "#audio"],
    desc: "Control giratorio simulado estilo sintetizador para volumen o intensidad de foco.",
    html: `<div class="flex items-center justify-between p-3 bg-slate-950 border border-slate-800 rounded-xl w-full text-xs font-mono"><span>SENSIBILIDAD</span><div class="w-10 h-10 rounded-full bg-slate-900 border-2 border-amber-400 flex items-center justify-center relative"><div class="w-1 h-3 bg-amber-400 absolute top-1 rounded-full"></div></div><span class="text-amber-400 font-bold">75%</span></div>`
  },
  {
    id: "inp_21", num: "21", name: "Password with Reveal Toggle Eye", archetype: "Password Reveal",
    tags: ["#password", "#reveal", "#eye", "#input"],
    desc: "Campo de contraseña oculta con botón de ojo para verificar los caracteres introducidos.",
    html: `<div class="relative w-full"><input type="password" value="SuperSecretPassword123" class="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-xs text-white outline-none pr-9 font-mono"><button class="absolute right-2.5 top-2 text-slate-400 hover:text-white"><i class="ph-bold ph-eye"></i></button></div>`
  },
  {
    id: "inp_22", num: "22", name: "Phone Number with Country Flag Selector", archetype: "Phone Flag",
    tags: ["#phone", "#flag", "#country", "#prefix"],
    desc: "Campo telefónico con selector de prefijo internacional y bandera de Suiza.",
    html: `<div class="flex bg-slate-900 border border-slate-700 rounded-lg overflow-hidden text-xs w-full"><div class="px-2.5 py-2 bg-slate-800 text-white font-mono flex items-center gap-1 border-r border-slate-700"><span>🇨🇭</span><span>+41</span></div><input type="text" value="22 819 40 00" class="bg-transparent text-white px-3 py-2 outline-none font-mono flex-1"></div>`
  },
  {
    id: "inp_23", num: "23", name: "Credit Card Single Line Form", archetype: "Credit Card",
    tags: ["#creditcard", "#payment", "#expiry", "#cvv"],
    desc: "Formulario condensado en una sola fila para número de tarjeta, caducidad y CVV.",
    html: `<div class="flex bg-slate-950 border border-slate-800 rounded-lg p-2 text-xs font-mono w-full items-center"><i class="ph-bold ph-credit-card text-amber-400 text-base mr-2"></i><input type="text" value="4921 •••• •••• 8812" class="bg-transparent text-white outline-none flex-1"><span class="text-slate-500 mx-2">08/28</span><span class="text-slate-500">CVV</span></div>`
  },
  {
    id: "inp_24", num: "24", name: "Toggle Switch with Descriptive Subtitle", archetype: "Descriptive Toggle",
    tags: ["#toggle", "#settings", "#preferences", "#switch"],
    desc: "Interruptor con título principal y explicación detallada de su efecto en el sistema.",
    html: `<div class="flex justify-between items-start p-3 bg-slate-900 border border-slate-800 rounded-xl w-full text-xs"><div><div class="font-bold text-white">Sincronización P2P</div><div class="text-[10px] text-slate-400 mt-0.5">Permite enlaces directos sin pasar por el servidor central.</div></div><button class="w-8 h-4 bg-emerald-500 rounded-full relative"><span class="w-3 h-3 bg-white rounded-full absolute right-0.5 top-0.5 shadow"></span></button></div>`
  },
  {
    id: "inp_25", num: "25", name: "Tag Input with Auto-Suggest Pills", archetype: "Tag Input",
    tags: ["#tags", "#suggest", "#chips", "#input"],
    desc: "Entrada para añadir palabras clave con recomendaciones sugeridas al pulsar.",
    html: `<div class="p-2 bg-slate-950 border border-slate-800 rounded-lg w-full flex items-center gap-1.5 text-xs"><span class="px-2 py-0.5 rounded bg-slate-800 text-white font-mono text-[10px]">#fintech</span><input type="text" placeholder="Escribe un tag..." class="bg-transparent text-white outline-none flex-1 text-xs"></div>`
  },
  {
    id: "inp_26", num: "26", name: "Time Horizon Dual Wheel Picker", archetype: "Wheel Picker",
    tags: ["#wheel", "#picker", "#hours", "#minutes"],
    desc: "Selector de horas y minutos con ruedas independientes para configuración precisa.",
    html: `<div class="flex justify-center items-center gap-2 p-2 bg-slate-900 border border-slate-800 rounded-xl text-xs font-mono w-full"><div class="p-2 bg-slate-950 rounded text-center w-12"><div class="text-white font-bold text-base">18</div><div class="text-[9px] text-slate-500">HORA</div></div><span class="text-amber-400 font-bold">:</span><div class="p-2 bg-slate-950 rounded text-center w-12"><div class="text-white font-bold text-base">24</div><div class="text-[9px] text-slate-500">MIN</div></div></div>`
  },
  {
    id: "inp_27", num: "27", name: "Signature Canvas Pad Field", archetype: "Signature Canvas",
    tags: ["#signature", "#canvas", "#drawing", "#legal"],
    desc: "Espacio para estampación de firma manuscrita con pluma digital.",
    html: `<div class="p-3 bg-black border border-slate-800 rounded-xl text-center space-y-1 w-full"><div class="h-10 border-b border-dashed border-slate-700 flex items-center justify-center font-serif text-amber-300 italic text-sm">Alexander Pierce</div><span class="text-[9px] font-mono text-slate-500 uppercase">FIRMA DIGITAL LEGALMENTE VÁLIDA</span></div>`
  },
  {
    id: "inp_28", num: "28", name: "Multi-Checkbox Group List", archetype: "Checkbox Group",
    tags: ["#checkbox", "#list", "#selection", "#group"],
    desc: "Lista de 3 casillas de verificación independientes con estado activado.",
    html: `<div class="p-3 bg-slate-900 border border-slate-800 rounded-xl space-y-2 text-xs w-full"><label class="flex items-center gap-2 text-white cursor-pointer"><input type="checkbox" checked class="accent-amber-400"><span>Notificar por canal seguro</span></label><label class="flex items-center gap-2 text-white cursor-pointer"><input type="checkbox" checked class="accent-amber-400"><span>Requerir doble firma multisig</span></label></div>`
  },
  {
    id: "inp_29", num: "29", name: "Custom Select with Icon Trigger", archetype: "Custom Select",
    tags: ["#select", "#dropdown", "#icons", "#clean"],
    desc: "Desplegable elegante con icono descriptivo a la izquierda y flecha de apertura.",
    html: `<div class="flex items-center justify-between p-2.5 bg-slate-950 border border-slate-800 rounded-lg text-xs w-full cursor-pointer hover:border-slate-700"><div class="flex items-center gap-2"><i class="ph-bold ph-globe text-amber-400"></i><span class="text-white">Ginebra (GMT+1)</span></div><i class="ph-bold ph-caret-down text-slate-500"></i></div>`
  },
  {
    id: "inp_30", num: "30", name: "Monospaced Hex Color Picker Input", archetype: "Hex Color",
    tags: ["#hex", "#color", "#picker", "#css"],
    desc: "Campo de código de color hexadecimal con recuadro de previsualización en vivo.",
    html: `<div class="flex items-center bg-slate-900 border border-slate-700 rounded-lg p-1.5 text-xs font-mono w-full"><span class="w-5 h-5 rounded bg-[#C5A358] border border-white/20 mr-2"></span><input type="text" value="#C5A358" class="bg-transparent text-white font-bold outline-none flex-1"><span class="text-slate-500 text-[10px]">ORO</span></div>`
  },
  {
    id: "inp_31", num: "31", name: "Slider with Min / Max Labels", archetype: "Labeled Slider",
    tags: ["#slider", "#labels", "#min-max", "#controls"],
    desc: "Deslizador con marcas numéricas en ambos extremos y valor central.",
    html: `<div class="w-full space-y-1 text-xs font-mono"><input type="range" class="w-full accent-cyan-400"><div class="flex justify-between text-[10px] text-slate-500"><span>0 MS</span><span>50 MS</span><span>100 MS</span></div></div>`
  },
  {
    id: "inp_32", num: "32", name: "Date Range Calendar Picker", archetype: "Date Range",
    tags: ["#dates", "#range", "#calendar", "#period"],
    desc: "Selector de periodo temporal de fecha de inicio a fecha de fin.",
    html: `<div class="flex items-center justify-between p-2 bg-slate-950 border border-slate-800 rounded-lg text-xs font-mono w-full"><i class="ph-bold ph-calendar text-amber-400"></i><span class="text-white">01-OCT-2026 ⇄ 31-DIC-2026</span><i class="ph-bold ph-caret-down text-slate-500"></i></div>`
  },
  {
    id: "inp_33", num: "33", name: "Search Input with Keyboard Shortcut Pill", archetype: "Shortcut Search",
    tags: ["#search", "#shortcut", "#ctrl-k", "#pill"],
    desc: "Barra de búsqueda global con la insignia 'Ctrl+K' o '⌘K' visible a la derecha.",
    html: `<div class="flex items-center justify-between p-2.5 bg-slate-900 border border-slate-700 rounded-lg text-xs w-full"><div class="flex items-center gap-2"><i class="ph-bold ph-magnifying-glass text-slate-400"></i><input type="text" placeholder="Buscar expedientes..." class="bg-transparent text-white outline-none"></div><span class="px-1.5 py-0.5 rounded bg-slate-800 font-mono text-[10px] text-slate-400">⌘K</span></div>`
  },
  {
    id: "inp_34", num: "34", name: "Stepped Slider with Discrete Points", archetype: "Stepped Slider",
    tags: ["#stepped", "#discrete", "#slider", "#snapping"],
    desc: "Deslizador que salta exclusivamente a puntos fijos (1x, 2x, 4x, 8x).",
    html: `<div class="w-full space-y-1 text-xs font-mono"><div class="flex justify-between text-slate-400"><span>POTENCIA:</span><span class="text-amber-400 font-bold">4x BOOST</span></div><input type="range" min="1" max="4" step="1" value="3" class="w-full accent-amber-400"></div>`
  },
  {
    id: "inp_35", num: "35", name: "Clearable Input Field with Reset Cross", archetype: "Clearable Input",
    tags: ["#clearable", "#reset", "#cross", "#input"],
    desc: "Campo de texto con aspa de borrado rápido al final para vaciar el contenido.",
    html: `<div class="relative w-full"><input type="text" value="Filtro_Aplicado_01" class="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-xs text-white outline-none pr-8 font-mono"><button class="absolute right-2.5 top-2.5 text-slate-400 hover:text-white"><i class="ph-bold ph-x-circle"></i></button></div>`
  },
  {
    id: "inp_36", num: "36", name: "Floating Label Dark Monospace Input", archetype: "Mono Floating",
    tags: ["#floating", "#mono", "#dark", "#input"],
    desc: "Estilo técnico con etiqueta superior en monospace y tipografía espaciada.",
    html: `<div class="p-2.5 bg-black border border-slate-800 rounded-lg w-full font-mono text-xs"><div class="text-[9px] text-slate-500 uppercase">DIRECCIÓN_IPV6</div><input type="text" value="2001:0db8:85a3::8a2e" class="bg-transparent text-emerald-400 outline-none w-full font-bold"></div>`
  },
  {
    id: "inp_37", num: "37", name: "Segmented Radio Switch (3 States)", archetype: "Three States",
    tags: ["#segmented", "#states", "#radio", "#switch"],
    desc: "Tres estados de conmutación: Desactivado, Automático y Siempre Activo.",
    html: `<div class="grid grid-cols-3 gap-1 p-1 bg-slate-950 border border-slate-800 rounded-lg text-xs font-mono text-center w-full"><button class="py-1 text-slate-500">OFF</button><button class="py-1 bg-amber-400 text-black font-bold rounded">AUTO</button><button class="py-1 text-slate-500">ON</button></div>`
  },
  {
    id: "inp_38", num: "38", name: "Credit Card Expiry & CVC Combo", archetype: "Card Expiry CVC",
    tags: ["#card", "#cvc", "#expiry", "#inputs"],
    desc: "Dos campos emparejados en el mismo contenedor para tarjeta bancaria.",
    html: `<div class="grid grid-cols-2 gap-2 w-full font-mono text-xs"><input type="text" value="MM/AA: 12/28" class="bg-slate-900 border border-slate-700 rounded-lg p-2 text-white outline-none"><input type="password" value="884" class="bg-slate-900 border border-slate-700 rounded-lg p-2 text-white outline-none"></div>`
  },
  {
    id: "inp_39", num: "39", name: "Percentage Numeric Input with Buttons", archetype: "Percentage Stepper",
    tags: ["#percentage", "#numeric", "#buttons", "#allocation"],
    desc: "Campo de porcentaje con botones rápidos de +5% y -5%.",
    html: `<div class="flex items-center justify-between p-2 bg-slate-950 border border-slate-800 rounded-lg text-xs font-mono w-full"><span class="text-slate-400">PARTICIPACIÓN:</span><div class="flex items-center gap-2"><button class="px-2 py-0.5 bg-slate-800 rounded text-slate-300">-5%</button><span class="text-white font-bold">45.0%</span><button class="px-2 py-0.5 bg-slate-800 rounded text-slate-300">+5%</button></div></div>`
  },
  {
    id: "inp_40", num: "40", name: "Multi-Selection Pill Tags with Counters", archetype: "Pill Counters",
    tags: ["#pills", "#counters", "#filter", "#selection"],
    desc: "Píldoras de filtrado con conteo de elementos coincidentes en cada una.",
    html: `<div class="flex gap-2 w-full text-xs font-mono"><button class="px-3 py-1 rounded-full bg-amber-400 text-black font-bold flex items-center gap-1.5">Activas <span class="bg-black text-amber-400 px-1.5 py-0.2 rounded-full text-[9px]">12</span></button><button class="px-3 py-1 rounded-full bg-slate-800 text-slate-300 flex items-center gap-1.5">Cerradas <span class="bg-slate-900 px-1.5 py-0.2 rounded-full text-[9px]">4</span></button></div>`
  },
  {
    id: "inp_41", num: "41", name: "IP Address Quad Octet Inputs", archetype: "IP Inputs",
    tags: ["#ip", "#octets", "#network", "#inputs"],
    desc: "Cuatro campos de tres dígitos separados por puntos para direcciones IPv4.",
    html: `<div class="flex items-center justify-center gap-1 p-2 bg-black border border-slate-800 rounded-lg font-mono text-xs w-full text-slate-400"><input type="text" value="192" class="w-10 text-center bg-slate-900 rounded p-1 text-white">. <input type="text" value="168" class="w-10 text-center bg-slate-900 rounded p-1 text-white">. <input type="text" value="1" class="w-10 text-center bg-slate-900 rounded p-1 text-white">. <input type="text" value="100" class="w-10 text-center bg-slate-900 rounded p-1 text-white"></div>`
  },
  {
    id: "inp_42", num: "42", name: "Volume DB Slider with Mute Button", archetype: "Volume Slider",
    tags: ["#volume", "#audio", "#mute", "#slider"],
    desc: "Control de volumen en decibelios con botón de silenciamiento directo.",
    html: `<div class="flex items-center gap-3 p-2 bg-slate-900 border border-slate-800 rounded-xl w-full text-xs font-mono"><button class="text-amber-400"><i class="ph-bold ph-speaker-high text-base"></i></button><input type="range" value="80" class="flex-1 accent-amber-400"><span class="text-white">-3.2 dB</span></div>`
  },
  {
    id: "inp_43", num: "43", name: "Drag-to-Order List Items", archetype: "Drag Items",
    tags: ["#drag", "#order", "#reorder", "#list"],
    desc: "Elementos de formulario reordenables mediante asa de arrastre de seis puntos.",
    html: `<div class="p-2.5 bg-slate-950 border border-slate-800 rounded-lg flex items-center justify-between text-xs w-full cursor-grab"><div class="flex items-center gap-2"><i class="ph-bold ph-dots-six-vertical text-slate-500"></i><span class="text-white">1. Asignación Prioritaria</span></div><i class="ph-bold ph-caret-up-down text-slate-500"></i></div>`
  },
  {
    id: "inp_44", num: "44", name: "Selectable Avatar Radio Matrix", archetype: "Avatar Radio",
    tags: ["#avatar", "#radio", "#matrix", "#users"],
    desc: "Matriz de selección de usuario responsable con avatares circulares.",
    html: `<div class="flex gap-2 w-full justify-between p-2 bg-slate-900 border border-slate-800 rounded-xl"><div class="w-8 h-8 rounded-full border-2 border-amber-400 bg-amber-400/20 text-amber-300 flex items-center justify-center font-bold text-xs">AP</div><div class="w-8 h-8 rounded-full border border-slate-700 bg-slate-800 text-slate-400 flex items-center justify-center font-bold text-xs">EL</div><div class="w-8 h-8 rounded-full border border-slate-700 bg-slate-800 text-slate-400 flex items-center justify-center font-bold text-xs">MK</div></div>`
  },
  {
    id: "inp_45", num: "45", name: "Search Filter Pill with Active Count", archetype: "Filter Pill",
    tags: ["#filter", "#search", "#pill", "#active"],
    desc: "Píldora de filtrado con botón de eliminación de todos los filtros aplicados.",
    html: `<div class="flex items-center justify-between p-2 bg-slate-950 border border-slate-800 rounded-lg text-xs font-mono w-full"><span class="text-slate-400">3 FILTROS ACTIVOS</span><button class="text-rose-400 hover:text-rose-300 text-[10px]">LIMPIAR TODOS</button></div>`
  },
  {
    id: "inp_46", num: "46", name: "Compact Dropdown with Checkmarks", archetype: "Dropdown Checks",
    tags: ["#dropdown", "#checkmarks", "#multi-select", "#clean"],
    desc: "Menú desplegable con casillas de verificación para selección múltiple.",
    html: `<div class="p-3 bg-slate-900 border border-slate-800 rounded-xl space-y-2 text-xs w-full"><div class="flex justify-between items-center text-white"><span>Fondo Aurelius IV</span><i class="ph-bold ph-check text-amber-400"></i></div><div class="flex justify-between items-center text-slate-400"><span>Kestrel BioVentures</span><i class="ph-bold ph-check text-transparent"></i></div></div>`
  },
  {
    id: "inp_47", num: "47", name: "Textarea with Live Character Counter", archetype: "Character Counter",
    tags: ["#textarea", "#counter", "#characters", "#limits"],
    desc: "Campo de notas con contador de caracteres restantes en tiempo real.",
    html: `<div class="w-full space-y-1 text-xs"><textarea rows="2" class="w-full bg-slate-950 border border-slate-800 rounded-lg p-2 text-white outline-none">Instrucciones para la transferencia fiduciaria...</textarea><div class="text-right text-[10px] font-mono text-slate-500">48 / 250 CARACTERES</div></div>`
  },
  {
    id: "inp_48", num: "48", name: "Sovereign Gold Wax Seal Button Selector", archetype: "Wax Selector",
    tags: ["#wax", "#seal", "#sovereign", "#signature"],
    desc: "Selector para autorizar la colocación del sello de lacre oficial.",
    html: `<div class="flex items-center justify-between p-3 bg-gradient-to-r from-amber-950/30 to-slate-950 border border-amber-500/40 rounded-xl w-full text-xs font-serif"><span class="text-amber-200">Colocar Sello Fiduciario</span><button class="px-3 py-1 bg-amber-400 text-black font-bold font-mono text-[10px] rounded">APLICAR</button></div>`
  },
  {
    id: "inp_49", num: "49", name: "Monolithic Blackout Input Field", archetype: "Monolith Input",
    tags: ["#monolith", "#blackout", "#stark", "#input"],
    desc: "Campo sobre negro puro sin bordes curvos con texto blanco.",
    html: `<div class="w-full bg-black border border-neutral-800 p-2 font-mono text-xs"><input type="text" value="ROOT_COMMAND_INPUT" class="bg-transparent text-white outline-none w-full font-bold"></div>`
  },
  {
    id: "inp_50", num: "50", name: "Zero-Gravity Quantum Dial Slider", archetype: "Quantum Slider",
    tags: ["#quantum", "#dial", "#slider", "#zero-gravity"],
    desc: "Control deslizante con halo cuántico cian y micro-partículas estelares.",
    html: `<div class="p-4 bg-slate-950/80 border border-cyan-400/40 rounded-2xl shadow-[0_10px_25px_rgba(6,182,212,0.2)] w-full space-y-2 font-mono text-xs"><div class="flex justify-between text-cyan-300"><span>ENERGÍA CUÁNTICA</span><span class="font-bold">100.0%</span></div><input type="range" value="100" class="w-full accent-cyan-400"></div>`
  }
];
