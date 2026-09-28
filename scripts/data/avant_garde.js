// 50 Componentes Avant-Garde & Vanguardia (Rompen lo Usual)
export const avantGarde = [
  {
    id: "avg_01", num: "01", name: "Teenage Engineering Pocket Synthesizer", archetype: "Tactile Audio Hardware",
    tags: ["#teenage-engineering", "#hardware", "#synth", "#creative"],
    desc: "Inspirado en el diseño industrial de Teenage Engineering y Braun: ABS mate, botones circulares de presión física, potenciómetro naranja y pantalla segmentada.",
    html: `<div class="p-4 bg-[#E3DFD5] text-black border-2 border-[#1E1E1E] rounded-xl shadow-[4px_4px_0px_#1E1E1E] font-mono text-xs max-w-sm space-y-3">
      <div class="flex justify-between items-center pb-2 border-b border-black/20">
        <span class="font-bold tracking-widest text-[10px]">PO-20 // ARCADE</span>
        <div class="w-3 h-3 rounded-full bg-[#FF5500] shadow-[inset_0_1px_1px_rgba(255,255,255,0.6)]"></div>
      </div>
      <div class="p-2.5 bg-[#B8B4A8] border border-black/30 rounded font-mono text-center text-slate-800 space-y-1 shadow-inner">
        <div class="text-[9px] tracking-widest text-slate-600">PATTERN 08 / 128 BPM</div>
        <div class="text-xl font-bold tracking-wider font-mono text-black">♫ ■ ■ □ ■ □ ■ ■</div>
      </div>
      <div class="grid grid-cols-4 gap-2 pt-1">
        <button class="w-9 h-9 rounded-full bg-[#D1CCC0] border-2 border-black flex items-center justify-center font-bold text-xs shadow-[2px_2px_0px_#000] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none">1</button>
        <button class="w-9 h-9 rounded-full bg-[#D1CCC0] border-2 border-black flex items-center justify-center font-bold text-xs shadow-[2px_2px_0px_#000] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none">2</button>
        <button class="w-9 h-9 rounded-full bg-[#FF5500] text-white border-2 border-black flex items-center justify-center font-bold text-xs shadow-[2px_2px_0px_#000] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none">3</button>
        <button class="w-9 h-9 rounded-full bg-[#3B82F6] text-white border-2 border-black flex items-center justify-center font-bold text-xs shadow-[2px_2px_0px_#000] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none">4</button>
      </div>
    </div>`
  },
  {
    id: "avg_02", num: "02", name: "Kyoto Imperial Wabi-Sabi Hanko Scroll", archetype: "Japanese Zen",
    tags: ["#wabi-sabi", "#japan", "#hanko", "#editorial"],
    desc: "Composición vertical japonesa con tipografía serifa tradicional, sello de lacre bermellón (Hanko) y serenidad monástica.",
    html: `<div class="p-5 bg-[#FAF7F0] text-black border border-[#DCD5C5] rounded-lg shadow-md max-w-sm flex justify-between items-start">
      <div class="space-y-2">
        <div class="text-[10px] font-mono tracking-widest text-slate-500 uppercase">KYOTO IMPERIAL PROTOCOL</div>
        <h4 class="font-serif text-lg font-bold text-slate-900 leading-snug">Soberanía del Silencio y la Paciencia</h4>
        <p class="text-xs text-slate-600 font-serif italic">La belleza que emerge de la imperfección natural del tiempo.</p>
        <div class="pt-2 text-[10px] font-mono text-slate-500">AÑO REIWA VIII // REGISTRO 042</div>
      </div>
      <div class="w-10 h-10 border-2 border-[#D9381E] text-[#D9381E] flex flex-col items-center justify-center font-serif text-[10px] font-bold p-1 shadow-sm rotate-3 ml-3 flex-shrink-0">
        <span>金</span>
        <span>澤</span>
      </div>
    </div>`
  },
  {
    id: "avg_03", num: "03", name: "Haute Horlogerie Celestial Moonphase", archetype: "Luxury Horology",
    tags: ["#horology", "#moonphase", "#watches", "#gold"],
    desc: "Esfera de reloj mecánico de alta complicación con fase lunar en cielo estrellado azul ultramar, índices dorados y bisel guilloché.",
    html: `<div class="p-5 bg-[#070B16] border-2 border-[#D4AF37]/50 rounded-2xl shadow-xl max-w-sm text-center relative overflow-hidden">
      <div class="flex justify-between items-center text-[10px] font-mono text-[#D4AF37] mb-3">
        <span>GENÈVE MANUFACTURE</span>
        <span>CALIBRE 59M</span>
      </div>
      <div class="relative w-28 h-28 mx-auto rounded-full bg-gradient-to-b from-[#0A122A] to-[#040710] border-2 border-[#D4AF37] flex items-center justify-center shadow-inner">
        <div class="w-16 h-16 rounded-full bg-[#F5E6BE] shadow-[0_0_20px_#F5E6BE] flex items-center justify-center overflow-hidden relative">
          <div class="absolute inset-y-0 right-0 w-8 bg-[#0A122A] rounded-l-full"></div>
        </div>
        <div class="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div class="w-1 h-12 bg-[#D4AF37] -rotate-45 origin-bottom rounded-full shadow"></div>
        </div>
      </div>
      <div class="font-serif text-sm font-bold text-white mt-3">LUNA LLENA EN PISCIS</div>
      <div class="text-[10px] font-mono text-slate-400">FASE 29.53 DÍAS // ERROR 1 DÍA / 122 AÑOS</div>
    </div>`
  },
  {
    id: "avg_04", num: "04", name: "Nixie Tube Gas-Discharge Display", archetype: "Retro Nixie",
    tags: ["#nixie", "#vacuum-tube", "#retro", "#glow"],
    desc: "Tubos de vacío de descarga de gas neón caliente con filamentos numéricos anaranjados brillantes y base de baquelita.",
    html: `<div class="p-5 bg-[#0F0C08] border border-amber-900/60 rounded-xl max-w-sm text-center space-y-3 shadow-2xl">
      <div class="text-[10px] font-mono text-amber-500 uppercase tracking-widest">IN-14 GLOW TUBES</div>
      <div class="flex justify-center gap-2">
        <div class="px-3 py-4 rounded-lg bg-black/80 border border-amber-500/40 shadow-[0_0_15px_#F97316] font-mono text-2xl font-black text-[#FF6A00]">5</div>
        <div class="px-3 py-4 rounded-lg bg-black/80 border border-amber-500/40 shadow-[0_0_15px_#F97316] font-mono text-2xl font-black text-[#FF6A00]">0</div>
        <div class="px-3 py-4 rounded-lg bg-black/80 border border-amber-500/40 shadow-[0_0_15px_#F97316] font-mono text-2xl font-black text-[#FF6A00]">0</div>
      </div>
      <div class="text-xs font-mono text-amber-400">VOLTAJE ANÓDICO: 170V DC // GAS NEÓN</div>
    </div>`
  },
  {
    id: "avg_05", num: "05", name: "1968 Swiss International Graphic Poster", archetype: "Swiss Constructivism",
    tags: ["#swiss", "#poster", "#red", "#bold"],
    desc: "Homenaje a Josef Müller-Brockmann: número monumental en rojo bermellón, grilla geométrica asimétrica y tipografía Helvetica stark.",
    html: `<div class="p-6 bg-[#FFFFFF] text-black border-4 border-black rounded-none shadow-xl max-w-sm space-y-3 font-sans">
      <div class="flex justify-between text-xs font-bold font-mono tracking-widest border-b-2 border-black pb-2">
        <span>ZÜRICH TONHALLE</span>
        <span>1968</span>
      </div>
      <div class="flex items-baseline justify-between">
        <div class="text-6xl font-black text-[#E11D48] tracking-tighter leading-none">84</div>
        <div class="text-right text-xs font-bold uppercase leading-tight">
          CONCIERTO<br>DE PRIMAVERA<br>SERIES V
        </div>
      </div>
      <p class="text-xs font-medium leading-relaxed pt-2 border-t border-black text-neutral-800">
        Estructura modal basada en proporciones matemáticas universales sin ornamentos superficiales.
      </p>
    </div>`
  },
  {
    id: "avg_06", num: "06", name: "Cockpit Master Caution Annunciator", archetype: "Aviation Caution",
    tags: ["#aviation", "#cockpit", "#caution", "#tactical"],
    desc: "Panel de anunciadores de cabina de avión de combate con luces de emergencia retroiluminadas y botón de rearme.",
    html: `<div class="p-4 bg-[#141619] border-2 border-slate-700 rounded-lg max-w-sm space-y-3 shadow-2xl font-mono text-xs">
      <div class="flex justify-between items-center">
        <span class="text-[10px] text-slate-400">ANNUNCIATOR PANEL</span>
        <button class="px-2.5 py-1 bg-amber-500 text-black font-black uppercase text-[10px] rounded shadow-[0_0_10px_#F59E0B]">MASTER CAUTION</button>
      </div>
      <div class="grid grid-cols-2 gap-1.5 font-bold text-[10px] text-center">
        <div class="p-2 bg-black border border-amber-500/80 text-amber-400 shadow-[inset_0_0_8px_#F59E0B]">CABIN PRESS</div>
        <div class="p-2 bg-black border border-slate-800 text-slate-600">ENG 1 FIRE</div>
        <div class="p-2 bg-black border border-emerald-500/80 text-emerald-400 shadow-[inset_0_0_8px_#10B981]">HYD PUMP OK</div>
        <div class="p-2 bg-black border border-slate-800 text-slate-600">OXY LOW</div>
      </div>
    </div>`
  },
  {
    id: "avg_07", num: "07", name: "Vinyl Record Turntable Deck", archetype: "Vinyl Analog",
    tags: ["#vinyl", "#turntable", "#analog", "#audio"],
    desc: "Plato giradiscos con disco de vinilo estriado, brazo fonocaptor con aguja de diamante y selector de 33/45 RPM.",
    html: `<div class="p-5 bg-[#171717] border border-neutral-700 rounded-2xl max-w-sm flex items-center justify-between shadow-2xl">
      <div class="relative w-24 h-24 rounded-full bg-black border-4 border-neutral-800 flex items-center justify-center shadow-lg">
        <div class="w-10 h-10 rounded-full bg-[#E11D48] flex items-center justify-center text-[8px] font-mono font-bold text-white shadow">
          45 RPM
        </div>
      </div>
      <div class="space-y-1.5 text-xs text-right font-mono">
        <div class="text-[10px] text-amber-400 font-bold">ORTOFON CONCORDE</div>
        <div class="text-white font-bold text-sm">LP: MASTER SESSION</div>
        <div class="flex justify-end gap-1 pt-1">
          <span class="px-2 py-0.5 bg-neutral-800 text-white rounded text-[10px]">33</span>
          <span class="px-2 py-0.5 bg-amber-400 text-black font-bold rounded text-[10px]">45</span>
        </div>
      </div>
    </div>`
  },
  {
    id: "avg_08", num: "08", name: "Classified Top-Secret Dossier", archetype: "Secret Dossier",
    tags: ["#classified", "#dossier", "#top-secret", "#archive"],
    desc: "Carpeta manila de documento confidencial con barras negras de texto censurado y sello 'TOP SECRET // NOFORN'.",
    html: `<div class="p-5 bg-[#C9B896] text-black border-2 border-[#8A7958] rounded-md max-w-sm space-y-2.5 font-mono text-xs shadow-xl relative">
      <div class="flex justify-between items-start border-b border-black/30 pb-1.5">
        <span class="text-[9px] font-bold text-red-700 border-2 border-red-700 px-1 py-0.5 rotate-[-4deg]">TOP SECRET</span>
        <span class="text-[10px] text-neutral-700">FOLIO #04-ALPHA</span>
      </div>
      <h5 class="font-serif font-bold text-sm text-neutral-900">Proyecto Bóveda Cuántica</h5>
      <p class="text-[11px] leading-relaxed text-neutral-800">
        El protocolo <span class="bg-black text-black select-none px-2">CENSURADO</span> ha sido aprobado por el comité <span class="bg-black text-black select-none px-3">CENSURADO</span> en Ginebra.
      </p>
      <div class="text-[9px] text-red-900 font-bold pt-1">DISTRIBUCIÓN ESTRICTAMENTE RESTRINGIDA</div>
    </div>`
  },
  {
    id: "avg_09", num: "09", name: "Holographic Security Pass ID Badge", archetype: "Holographic Badge",
    tags: ["#hologram", "#security", "#badge", "#id"],
    desc: "Pase de seguridad con lámina holográfica de arcoíris iridiscente, código de barras y chip inteligente embutido.",
    html: `<div class="p-5 bg-gradient-to-tr from-violet-900 via-indigo-950 to-cyan-900 border-2 border-cyan-400/60 rounded-xl max-w-sm text-xs font-mono shadow-[0_0_25px_rgba(6,182,212,0.3)] space-y-3">
      <div class="flex justify-between items-center text-[10px] text-cyan-300">
        <span class="font-bold">CONSEJO SOBERANO // NIVEL 5</span>
        <i class="ph-bold ph-shield-check text-base"></i>
      </div>
      <div class="flex gap-3 items-center">
        <div class="w-12 h-14 bg-gradient-to-br from-amber-400 to-rose-500 rounded border border-white/40 flex items-center justify-center font-bold text-black text-lg">AP</div>
        <div>
          <div class="font-bold text-white text-sm">Alexander Pierce</div>
          <div class="text-[10px] text-slate-300">CUSTODIO FIDUCIARIO</div>
          <div class="text-[9px] text-cyan-400 mt-1">ID: #CH-9042-X</div>
        </div>
      </div>
      <div class="pt-1 border-t border-white/20 flex justify-between items-center text-[9px] text-slate-400">
        <span>CHIP CRIPTOGRÁFICO: ACTIVO</span>
        <span>ACCESO VÁLIDO 2026</span>
      </div>
    </div>`
  },
  {
    id: "avg_10", num: "10", name: "Analog Reel-to-Reel Tape Recorder", archetype: "Tape Recorder",
    tags: ["#tape", "#analog", "#reel-to-reel", "#audio"],
    desc: "Cinta magnética de carrete abierto girando con medidores VU analógicos y cinta de óxido de hierro.",
    html: `<div class="p-5 bg-[#1A1A1A] border-2 border-slate-700 rounded-xl max-w-sm space-y-3 font-mono text-xs shadow-2xl">
      <div class="flex justify-between text-slate-400 text-[10px]">
        <span>STUDER A800 // 15 IPS</span>
        <span class="text-rose-500 font-bold animate-pulse">● GRABANDO</span>
      </div>
      <div class="flex justify-around py-2">
        <div class="w-14 h-14 rounded-full border-4 border-slate-500 flex items-center justify-center text-slate-400 font-bold text-[10px] animate-spin">
          <i class="ph-bold ph-asterisk"></i>
        </div>
        <div class="w-14 h-14 rounded-full border-4 border-slate-500 flex items-center justify-center text-slate-400 font-bold text-[10px] animate-spin">
          <i class="ph-bold ph-asterisk"></i>
        </div>
      </div>
      <div class="flex justify-between items-center text-slate-300 text-[11px] pt-1 border-t border-slate-800">
        <span>TIEMPO: 01:42:18</span>
        <span class="text-amber-400">MASTER DOLBY A</span>
      </div>
    </div>`
  },
  {
    id: "avg_11", num: "11", name: "Braun T1000 Radio Tuner (Dieter Rams)", archetype: "Braun Minimalist",
    tags: ["#braun", "#dieter-rams", "#german", "#minimalist"],
    desc: "Aluminio anodizado puro, escala de sintonización horizontal con cursor deslizante, botones de goma suave.",
    html: `<div class="p-5 bg-[#ECEAE4] text-black border-2 border-black rounded-xl max-w-sm space-y-3 font-sans shadow-[4px_4px_0px_#000]">
      <div class="flex justify-between text-xs font-bold uppercase tracking-wider font-mono">
        <span>BRAUN T1000</span>
        <span class="w-2.5 h-2.5 rounded-full bg-[#FF5500]"></span>
      </div>
      <div class="p-2 bg-white border border-black rounded font-mono text-[10px] space-y-1">
        <div class="flex justify-between text-slate-500"><span>MW</span><span>SW1</span><span>SW2</span><span>FM</span></div>
        <div class="h-1 bg-black relative"><div class="w-2 h-3 bg-[#FF5500] absolute -top-1 left-2/3"></div></div>
        <div class="text-right font-bold text-xs">104.2 MHz</div>
      </div>
      <div class="flex justify-between items-center text-xs font-bold pt-1">
        <span class="uppercase">SINTONÍA FINA</span>
        <button class="px-3 py-1 bg-black text-white rounded text-[10px] uppercase">ENCENDIDO</button>
      </div>
    </div>`
  },
  {
    id: "avg_12", num: "12", name: "Vintage Western Union Telegram", archetype: "Telegram Vintage",
    tags: ["#telegram", "#western-union", "#vintage", "#typewriter"],
    desc: "Cablegrama de papel marfil con cinta adhesiva de teletipo, mayúsculas mecanografiadas y la palabra STOP.",
    html: `<div class="p-5 bg-[#F6F1E3] text-black border-2 border-amber-900/40 rounded shadow-md max-w-sm font-mono text-xs space-y-2">
      <div class="text-center font-bold tracking-widest text-[11px] pb-1 border-b border-black">WESTERN UNION TELEGRAM</div>
      <div class="text-[10px] text-slate-700">AURELIUS GENEVA VIA CABLE // 27 SEP 2026</div>
      <p class="text-xs uppercase font-bold tracking-wide leading-relaxed">
        OPERACIÓN SERIE B AUTORIZADA POR CONSEJO STOP TRANSFERIR FONDOS A BÓVEDA CENTRAL INMEDIATAMENTE STOP
      </p>
      <div class="text-right text-[10px] text-slate-600 font-bold">— PIERCE STOP</div>
    </div>`
  },
  {
    id: "avg_13", num: "13", name: "Retro CRT Terminal Curved Glass & Scanlines", archetype: "CRT Phosphor",
    tags: ["#crt", "#phosphor", "#terminal", "#scanlines"],
    desc: "Pantalla abombada con líneas de exploración de fósforo verde ámbar y reflejo de cristal catódico.",
    html: `<div class="p-5 bg-[#001004] text-[#00FF66] border-4 border-slate-800 rounded-2xl max-w-sm font-mono text-xs space-y-2 shadow-[0_0_20px_rgba(0,255,102,0.25)]">
      <div class="flex justify-between text-[10px] text-green-700">
        <span>VT100 EMULATOR</span>
        <span>BAUD: 9600</span>
      </div>
      <div class="space-y-1">
        <div>> MEMORY TEST: 640K OK</div>
        <div>> BOOTING CHRONOS_OS v2.4...</div>
        <div class="text-white font-bold">> ENCLAVE KERNEL LOADED [PASS]</div>
      </div>
      <div class="animate-pulse font-bold text-green-400 mt-2">$ READY _</div>
    </div>`
  },
  {
    id: "avg_14", num: "14", name: "Solari di Udine Split-Flap Airport Board", archetype: "Split Flap",
    tags: ["#split-flap", "#airport", "#mechanical", "#vintage"],
    desc: "Láminas mecánicas de aeropuerto que giran con clics audibles para mostrar destinos y horas.",
    html: `<div class="p-4 bg-black border-2 border-neutral-700 rounded-xl max-w-sm font-mono text-xs text-white space-y-2 shadow-2xl">
      <div class="text-[10px] text-amber-400 font-bold uppercase tracking-widest pb-1 border-b border-neutral-800">TABLERO DE VUELOS EJECUTIVOS</div>
      <div class="space-y-1">
        <div class="flex justify-between bg-neutral-900 p-1.5 rounded">
          <span class="font-bold text-amber-300">GVA → JFK</span>
          <span class="text-emerald-400 font-bold">EMBARQUE 18:30</span>
        </div>
        <div class="flex justify-between bg-neutral-900 p-1.5 rounded">
          <span class="font-bold text-white">GVA → LHR</span>
          <span class="text-slate-400">PUNTUAL 19:15</span>
        </div>
      </div>
    </div>`
  },
  {
    id: "avg_15", num: "15", name: "Bauhaus 1925 Primary Color Geometry", archetype: "Bauhaus Core",
    tags: ["#bauhaus", "#geometry", "#primary", "#art"],
    desc: "Círculo azul cobalto, cuadrado rojo carmesí y triángulo amarillo cadmio sobre lienzo marfil.",
    html: `<div class="p-5 bg-[#FAF6EE] text-black border-2 border-black rounded-none max-w-sm font-sans space-y-3 shadow-lg">
      <div class="text-xs font-mono font-bold tracking-widest uppercase">BAUHAUS DESSAU</div>
      <div class="flex items-center justify-around py-3">
        <div class="w-10 h-10 rounded-full bg-[#1D4ED8]"></div>
        <div class="w-10 h-10 bg-[#DC2626]"></div>
        <div class="w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-b-[35px] border-b-[#FACC15]"></div>
      </div>
      <div class="text-xs font-bold text-center">FORMA Y FUNCIÓN SON UNA SOLA COSA</div>
    </div>`
  },
  {
    id: "avg_16", num: "16", name: "Tactical Drone Thermal FLIR Cam", archetype: "FLIR Thermal",
    tags: ["#drone", "#thermal", "#flir", "#tactical"],
    desc: "Cámara térmica de visión nocturna con gradiente infrarrojo falso color, punto de mira y telémetro láser.",
    html: `<div class="p-4 bg-[#0B0912] border-2 border-amber-500/60 rounded-xl max-w-sm font-mono text-xs text-amber-300 space-y-2">
      <div class="flex justify-between text-[10px]">
        <span>FLIR IR // WHITE-HOT</span>
        <span class="text-rose-500 font-bold">OBJETIVO EN MIRA</span>
      </div>
      <div class="h-20 bg-gradient-to-r from-blue-900 via-purple-700 to-amber-500 rounded flex items-center justify-center relative">
        <div class="w-10 h-10 border border-white flex items-center justify-center">
          <div class="w-1 h-1 bg-white"></div>
        </div>
        <span class="absolute bottom-1 right-2 text-[10px] text-white font-bold">TEMP: 37.4°C</span>
      </div>
      <div class="flex justify-between text-[10px] text-slate-400">
        <span>RANGO: 1,420 M</span>
        <span>AZIMUT: 184° S</span>
      </div>
    </div>`
  },
  {
    id: "avg_17", num: "17", name: "Vogue / Kinfolk Haute Couture Magazine Spread", archetype: "Haute Editorial",
    tags: ["#editorial", "#vogue", "#kinfolk", "#serif"],
    desc: "Gran capitular de 72px en serifa cursiva, texto en dos columnas con línea divisoria y número de página dorado.",
    html: `<div class="p-6 bg-[#FDFBF7] text-black border border-[#E8E2D5] rounded-lg max-w-sm font-serif space-y-3 shadow-md">
      <div class="flex justify-between text-[10px] font-mono tracking-widest text-slate-500 uppercase border-b border-black/10 pb-1">
        <span>L'ART DE VIVRE</span>
        <span>FOLIO 142</span>
      </div>
      <div class="flex gap-3 items-start">
        <span class="font-serif text-5xl font-bold text-[#AA771C] leading-none">L</span>
        <p class="text-xs text-slate-800 leading-relaxed font-serif pt-1">
          a arquitectura del espacio fiduciario exige una serenidad que trascienda la urgencia cotidiana del mercado.
        </p>
      </div>
    </div>`
  },
  {
    id: "avg_18", num: "18", name: "Japanese Karesansui Raked Stone Garden", archetype: "Zen Garden",
    tags: ["#zen", "#karesansui", "#stone", "#japan"],
    desc: "Surcos concéntricos de grava blanca rastrillada alrededor de una roca volcánica con cita poética.",
    html: `<div class="p-5 bg-[#EAE6DF] text-slate-900 border border-[#D5CFC5] rounded-xl max-w-sm space-y-3 font-serif">
      <div class="flex justify-between text-[10px] font-mono text-slate-600">
        <span>KARESANSUI // 枯山水</span>
        <span>PENSAMIENTO ZEN</span>
      </div>
      <div class="h-14 bg-gradient-to-r from-[#DFDACF] via-[#ECE8E1] to-[#DFDACF] rounded-lg border border-black/10 flex items-center justify-center">
        <div class="w-7 h-7 rounded-full bg-[#2C2B29] shadow-md"></div>
      </div>
      <p class="text-xs italic text-slate-700 text-center leading-relaxed">
        "En la roca quieta descansa el flujo de todo el universo."
      </p>
    </div>`
  },
  {
    id: "avg_19", num: "19", name: "Flyback Chronograph Precision Stopwatch", archetype: "Precision Stopwatch",
    tags: ["#stopwatch", "#flyback", "#chronograph", "#watch"],
    desc: "Caja de acero inoxidable con pulsador de corona dentada y aguja de split-second roja sobre escala de 60 segundos.",
    html: `<div class="p-5 bg-slate-950 border-2 border-slate-600 rounded-2xl max-w-sm text-center space-y-2 shadow-2xl">
      <div class="text-[10px] font-mono text-slate-400 uppercase">HEUER FLYBACK 1/100S</div>
      <div class="text-3xl font-mono font-bold text-white tracking-widest">00:42.<span class="text-rose-500">84</span></div>
      <div class="flex justify-center gap-3 pt-2">
        <button class="px-3 py-1 bg-rose-600 text-white font-bold rounded text-xs">STOP</button>
        <button class="px-3 py-1 bg-slate-800 text-slate-300 font-bold rounded text-xs">RESET</button>
      </div>
    </div>`
  },
  {
    id: "avg_20", num: "20", name: "Risograph DIY Halftone Art Print", archetype: "Risograph Zine",
    tags: ["#risograph", "#halftone", "#zine", "#diy"],
    desc: "Trama de puntos de semitono con tintas superpuestas fucsia y turquesa desalineadas.",
    html: `<div class="p-5 bg-[#FFFDF0] text-black border-2 border-black rounded-none max-w-sm space-y-2 font-mono text-xs shadow-[3px_3px_0px_#EC4899]">
      <div class="flex justify-between font-bold text-[10px]">
        <span class="text-[#EC4899]">INK: FLUO PINK</span>
        <span class="text-[#06B6D4]">INK: TEAL</span>
      </div>
      <div class="text-lg font-black uppercase text-black tracking-tight leading-tight">
        AUTONOMÍA VISUAL CONTRA LA UNIFORMIDAD
      </div>
      <p class="text-[11px] text-slate-700 leading-normal">
        Edición limitada a 50 copias impresas en papel de caña de azúcar sin cloro.
      </p>
    </div>`
  },
  {
    id: "avg_21", num: "21", name: "Space Shuttle Circuit Breakers Matrix", archetype: "Circuit Breakers",
    tags: ["#space", "#shuttle", "#nasa", "#breakers"],
    desc: "Matriz de disyuntores de aviónica espacial con cabezales mecánicos cilíndricos y tiras de seguridad.",
    html: `<div class="p-4 bg-[#23272D] border-2 border-slate-600 rounded-lg max-w-sm space-y-2 font-mono text-xs">
      <div class="flex justify-between text-slate-400 text-[10px]">
        <span>AVIONICS BUS 01</span>
        <span>28V DC</span>
      </div>
      <div class="grid grid-cols-4 gap-2 text-center text-[10px] font-bold">
        <div class="p-2 bg-slate-900 border border-slate-500 rounded text-emerald-400">NAV-1<br>IN</div>
        <div class="p-2 bg-slate-900 border border-slate-500 rounded text-emerald-400">COMM<br>IN</div>
        <div class="p-2 bg-slate-900 border border-amber-500 rounded text-amber-300">RADAR<br>PULL</div>
        <div class="p-2 bg-slate-900 border border-slate-500 rounded text-emerald-400">O2-V<br>IN</div>
      </div>
    </div>`
  },
  {
    id: "avg_22", num: "22", name: "Leica M3 Rangefinder Viewfinder", archetype: "Rangefinder Optical",
    tags: ["#leica", "#camera", "#optics", "#lens"],
    desc: "Marco óptico del visor de una cámara telemétrica con parche de enfoque amarillo y escala de apertura.",
    html: `<div class="p-5 bg-black text-white border-2 border-slate-600 rounded-xl max-w-sm font-mono text-xs space-y-2">
      <div class="flex justify-between text-[10px] text-slate-400">
        <span>LEICA M3 // 50MM</span>
        <span>f/1.4 SUMMILUX</span>
      </div>
      <div class="h-16 border border-white/40 rounded flex items-center justify-center relative">
        <div class="w-8 h-8 bg-amber-400/30 border border-amber-400"></div>
        <span class="absolute bottom-1 text-[9px] text-slate-400">ENFOQUE: 1.5 M</span>
      </div>
      <div class="flex justify-between text-[10px] text-slate-300">
        <span>ISO 400</span>
        <span>1/1000s</span>
      </div>
    </div>`
  },
  {
    id: "avg_23", num: "23", name: "Bioluminescent Deep-Sea Trench HUD", archetype: "Abyssal Bio",
    tags: ["#bioluminescent", "#ocean", "#abyss", "#cyan"],
    desc: "Criaturas marinas emitiendo luz en la penumbra del fondo oceánico con medidor de presión en brazas.",
    html: `<div class="p-5 bg-[#010814] border border-cyan-400/40 rounded-xl max-w-sm font-mono text-xs space-y-2 shadow-[0_0_20px_rgba(6,182,212,0.2)]">
      <div class="flex justify-between text-cyan-300 text-[10px]">
        <span>BATHYSCAPHE TRIESTE</span>
        <span>PROFUNDIDAD 8,240 M</span>
      </div>
      <div class="p-3 bg-cyan-950/30 border border-cyan-500/30 rounded text-center">
        <div class="text-xl font-bold text-cyan-200">820 BAR</div>
        <div class="text-[9px] text-cyan-400">BIOLUMINISCENCIA DETECTADA</div>
      </div>
    </div>`
  },
  {
    id: "avg_24", num: "24", name: "Antique Letterpress Lead Type Chase", archetype: "Letterpress Lead",
    tags: ["#letterpress", "#lead-type", "#ink", "#antique"],
    desc: "Tipos de plomo colocados a mano sobre la platina de imprenta Gutenberguiana.",
    html: `<div class="p-5 bg-[#1F1C18] text-[#E8DFD0] border-2 border-amber-900/60 rounded max-w-sm font-serif text-xs space-y-2 shadow-inner">
      <div class="text-[10px] font-mono text-amber-500 uppercase">TALLER TIPOGRÁFICO DE MAGUNCIA</div>
      <div class="text-lg font-bold tracking-widest text-center border-y border-amber-800/40 py-2">
        VERBUM VOLAT SCRIPTA MANENT
      </div>
      <div class="text-right text-[10px] text-amber-600 font-mono">TINTA NEGRA DE HULLA</div>
    </div>`
  },
  {
    id: "avg_25", num: "25", name: "Cyberpunk Techwear Reflective Strap", archetype: "Techwear Strap",
    tags: ["#techwear", "#strap", "#cyberpunk", "#buckle"],
    desc: "Cinta de mochila técnica con hebilla militar Cobra y coordenadas reflectantes en plata.",
    html: `<div class="p-4 bg-black border border-neutral-700 rounded-lg max-w-sm space-y-2 font-mono text-xs">
      <div class="flex justify-between items-center bg-neutral-900 p-2 rounded border border-neutral-800">
        <span class="text-white font-bold tracking-wider">// SPEC-OPS STRAP</span>
        <span class="px-2 py-0.5 bg-[#FACC15] text-black font-black text-[9px]">COBRA CLASP</span>
      </div>
      <div class="text-neutral-400 text-[10px]">CORDURA 1000D // RESISTENCIA 24 kN</div>
    </div>`
  },
  {
    id: "avg_26", num: "26", name: "Oscilloscope Lissajous Waveform", archetype: "Oscilloscope Lissajous",
    tags: ["#oscilloscope", "#waveform", "#physics", "#audio"],
    desc: "Curvas sinusoidales armónicas entrelazadas dibujadas con haz catódico verde neón.",
    html: `<div class="p-5 bg-[#001006] border-2 border-green-600/50 rounded-2xl max-w-sm text-center font-mono text-xs space-y-2 shadow-[0_0_20px_rgba(34,197,94,0.25)]">
      <div class="text-[10px] text-green-500 font-bold">TEKTRONIX 465 // X-Y MODE</div>
      <div class="h-16 flex items-center justify-center">
        <svg class="w-32 h-16" viewBox="0 0 100 50">
          <ellipse cx="50" cy="25" rx="35" ry="18" fill="none" stroke="#22C55E" stroke-width="2" class="animate-pulse"/>
        </svg>
      </div>
      <div class="text-[10px] text-green-400">FASE: 90° // RELACIÓN 1:1 ARMÓNICA</div>
    </div>`
  },
  {
    id: "avg_27", num: "27", name: "Cyanotype Architectural Drafting Linen", archetype: "Cyanotype Blueprint",
    tags: ["#cyanotype", "#blueprint", "#drafting", "#architectural"],
    desc: "Plano arquitectónico sobre papel cianotipo azul de Prusia profundo con cotas técnicas blancas.",
    html: `<div class="p-5 bg-[#08203E] text-white border-2 border-cyan-400/50 rounded-lg max-w-sm font-mono text-xs space-y-2 shadow-xl">
      <div class="flex justify-between text-cyan-300 text-[10px] pb-1 border-b border-cyan-400/30">
        <span>CIANOTIPO Nº 08</span>
        <span>PLANO SECCIÓN B</span>
      </div>
      <div class="text-sm font-bold tracking-wide">PABELLÓN DE CRISTAL Y HORMIGÓN</div>
      <div class="text-[10px] text-cyan-200/70">COTA CORONACIÓN: +18.40 M // ESCALA 1:100</div>
    </div>`
  },
  {
    id: "avg_28", num: "28", name: "SSL Console Channel Strip Fader", archetype: "Studio Fader",
    tags: ["#fader", "#ssl", "#console", "#studio"],
    desc: "Potenciómetro deslizante motorizado de mesa de mezclas Solid State Logic con botones SOLO y MUTE.",
    html: `<div class="p-4 bg-[#20242B] border border-slate-700 rounded-xl max-w-sm space-y-3 font-mono text-xs">
      <div class="flex justify-between items-center text-slate-300 text-[10px]">
        <span>CH 04 // VOCAL LEAD</span>
        <span class="text-emerald-400 font-bold">0.0 dB</span>
      </div>
      <div class="h-6 bg-black rounded flex items-center px-2 relative">
        <div class="w-full h-1 bg-slate-700"></div>
        <div class="w-6 h-4 bg-slate-300 rounded shadow-md border border-black absolute left-2/3"></div>
      </div>
      <div class="flex gap-2 justify-end">
        <button class="px-2 py-0.5 bg-yellow-500 text-black font-bold text-[9px] rounded">SOLO</button>
        <button class="px-2 py-0.5 bg-red-600 text-white font-bold text-[9px] rounded">MUTE</button>
      </div>
    </div>`
  },
  {
    id: "avg_29", num: "29", name: "Polaroid SX-70 Instant Photo with Note", archetype: "Polaroid Instant",
    tags: ["#polaroid", "#photo", "#instant", "#analog"],
    desc: "Fotografía instantánea cuadrada con borde ancho inferior de cartón y nota manuscrita.",
    html: `<div class="p-4 pb-6 bg-[#FAF7F0] text-black border border-neutral-300 rounded shadow-2xl max-w-xs space-y-3">
      <div class="w-full h-32 bg-gradient-to-tr from-amber-800 to-indigo-900 rounded-xs flex items-center justify-center text-white/40 font-mono text-[10px]">
        [FOTOGRAFÍA ARCHIVADA GINEBRA]
      </div>
      <div class="font-serif italic text-xs text-blue-900 text-center font-bold">
        "Firma de la Serie B — 27 Sep 2026"
      </div>
    </div>`
  },
  {
    id: "avg_30", num: "30", name: "Medieval Illuminated Manuscript Initial", archetype: "Illuminated Manuscript",
    tags: ["#illuminated", "#manuscript", "#gothic", "#gold"],
    desc: "Letra capitular gótica dorada rodeada de filigranas florales en bermellón y lapislázuli.",
    html: `<div class="p-5 bg-[#F4EEDC] text-black border-2 border-[#8A7958] rounded-lg max-w-sm space-y-2 font-serif text-xs shadow-md">
      <div class="flex gap-3 items-center">
        <div class="w-12 h-12 bg-[#8B1E2F] border-2 border-[#D4AF37] text-[#D4AF37] flex items-center justify-center font-serif text-2xl font-bold shadow">
          ℭ
        </div>
        <div>
          <div class="font-bold text-sm">Chronica Fiduciaria</div>
          <div class="text-[10px] text-neutral-600 font-mono">LIBER SECUNDUS</div>
        </div>
      </div>
    </div>`
  },
  {
    id: "avg_31", num: "31", name: "Victorian Brass Mechanical Cash Register", archetype: "Victorian Brass",
    tags: ["#brass", "#victorian", "#cash-register", "#antique"],
    desc: "Relieve de latón dorado labrado victoriano con banderola metálica de precio emergente.",
    html: `<div class="p-5 bg-[#2B1F0E] text-[#F3E5AB] border-2 border-[#D4AF37] rounded-xl max-w-sm text-center font-serif space-y-2 shadow-2xl">
      <div class="text-[10px] font-mono tracking-widest text-[#D4AF37]">NATIONAL CASH REGISTER CO.</div>
      <div class="p-2 bg-black border border-[#D4AF37] text-2xl font-bold font-mono text-[#D4AF37]">
        $ 25,000.00
      </div>
      <div class="text-[10px] text-amber-200/70">TIMBRE MECÁNICO DE AUDITORÍA</div>
    </div>`
  },
  {
    id: "avg_32", num: "32", name: "Submarine Sonar Ping Hydrophone", archetype: "Submarine Sonar",
    tags: ["#sonar", "#submarine", "#hydrophone", "#radar"],
    desc: "Ondas acústicas circulares en agua profunda con eco de retorno de contacto submarino.",
    html: `<div class="p-5 bg-[#001018] border-2 border-teal-500/50 rounded-2xl max-w-sm text-center font-mono text-xs space-y-2 shadow-[0_0_20px_rgba(20,184,166,0.3)]">
      <div class="text-[10px] text-teal-400 font-bold">SONAR ACTIVO 4.2 kHz</div>
      <div class="relative w-20 h-20 mx-auto rounded-full border border-teal-500/40 flex items-center justify-center">
        <div class="w-12 h-12 rounded-full border border-teal-500/60 animate-ping"></div>
        <div class="w-2 h-2 rounded-full bg-teal-400 shadow-[0_0_8px_#2DD4BF]"></div>
      </div>
      <div class="text-[10px] text-teal-300">CONTACTO: 14 KNOTS // RUMBO 280°</div>
    </div>`
  },
  {
    id: "avg_33", num: "33", name: "Kraft Luggage Tag with Natural Twine & Wax", archetype: "Luggage Tag",
    tags: ["#tag", "#kraft", "#twine", "#wax"],
    desc: "Etiqueta de equipaje en cartón kraft con ojal reforzado, cuerda de cáñamo y sello de lacre rojo.",
    html: `<div class="p-5 bg-[#D2B48C] text-black border border-[#8B7355] rounded-r-xl max-w-sm font-mono text-xs space-y-2 shadow-xl relative clip-bevel-sm">
      <div class="flex justify-between items-center text-[10px] text-neutral-800">
        <span>GVA CARGO AIRPORT</span>
        <div class="w-3 h-3 rounded-full bg-black"></div>
      </div>
      <div class="text-sm font-bold uppercase font-serif">DESTINO: ZÚRICH BÓVEDA</div>
      <div class="text-[10px] text-neutral-700">PESO: 12.4 KG ORO PURO</div>
    </div>`
  },
  {
    id: "avg_34", num: "34", name: "Retro Arcade Coin Slot 25 Cents", archetype: "Arcade Coin",
    tags: ["#arcade", "#coin-slot", "#retro", "#gaming"],
    desc: "Ranura metálica de monedas iluminada en naranja con pulsador de expulsión de 25 centavos.",
    html: `<div class="p-4 bg-[#1A1A1A] border-2 border-black rounded-lg max-w-sm space-y-2 font-mono text-xs text-center shadow-2xl">
      <div class="p-2.5 bg-[#FF5500] border-2 border-black rounded text-black font-black text-xs shadow-inner flex items-center justify-between">
        <span>INSERT COIN</span>
        <div class="w-1.5 h-6 bg-black"></div>
        <span>25¢</span>
      </div>
      <div class="text-[10px] text-slate-400">PÉRDIDA DE MONEDA: PULSAR RECHAZO</div>
    </div>`
  },
  {
    id: "avg_35", num: "35", name: "Civil Defense Geiger Radiation Meter", archetype: "Geiger Counter",
    tags: ["#geiger", "#radiation", "#nuclear", "#civil-defense"],
    desc: "Indicador analógico de radiación ionizante con logotipo trifolio y escala en micro-Sieverts.",
    html: `<div class="p-5 bg-[#C4A000] text-black border-2 border-black rounded-xl max-w-sm font-mono text-xs space-y-2 shadow-2xl">
      <div class="flex justify-between items-center text-[10px] font-bold">
        <span>CIVIL DEFENSE CDV-700</span>
        <i class="ph-fill ph-radiation text-base"></i>
      </div>
      <div class="p-2 bg-white border border-black rounded text-center">
        <div class="text-xl font-black font-mono">0.12 μSv/h</div>
        <div class="text-[9px] text-slate-600">RADIACIÓN DE FONDO NORMAL</div>
      </div>
    </div>`
  },
  {
    id: "avg_36", num: "36", name: "French Haute Parfumerie Flacon Label", archetype: "Haute Perfume",
    tags: ["#perfume", "#paris", "#luxury", "#french"],
    desc: "Etiqueta en papel verjurado con marco dorado repujado y tipografía Bodoni elegante de París.",
    html: `<div class="p-6 bg-[#FFFDF9] text-black border border-[#D5C7A3] rounded-lg max-w-sm text-center font-serif space-y-2 shadow-xl">
      <div class="text-[9px] font-mono tracking-widest text-[#AA771C] uppercase">PARIS // GRASSE</div>
      <div class="text-xl font-bold tracking-wider">AMBRE SOUVERAIN</div>
      <div class="text-[10px] italic text-slate-600 font-serif">Extrait de Parfum 100 ml</div>
    </div>`
  },
  {
    id: "avg_37", num: "37", name: "Tactical Prismatic Military Compass", archetype: "Military Compass",
    tags: ["#compass", "#military", "#tactical", "#olive"],
    desc: "Brújula prismática del ejército con cápsula de aceite amortiguada y marcas de tritio fosforescente.",
    html: `<div class="p-5 bg-[#171D15] text-[#A3E635] border-2 border-[#3F5038] rounded-2xl max-w-sm text-center font-mono text-xs space-y-2 shadow-2xl">
      <div class="text-[10px] text-lime-400">BRÚJULA PRISMÁTICA M-1950</div>
      <div class="w-16 h-16 mx-auto rounded-full border-2 border-[#A3E635] flex items-center justify-center font-bold text-sm">
        340° N
      </div>
      <div class="text-[10px] text-slate-400">DECLINACIÓN MAGNÉTICA: +2.4° W</div>
    </div>`
  },
  {
    id: "avg_38", num: "38", name: "Typewriter Dual-Color Ink Ribbon", archetype: "Typewriter Ribbon",
    tags: ["#typewriter", "#ribbon", "#red-black", "#retro"],
    desc: "Bobina bicolor de máquina de escribir mecánica con selector negro/rojo.",
    html: `<div class="p-4 bg-[#141414] border border-neutral-700 rounded-lg max-w-sm font-mono text-xs space-y-2">
      <div class="flex justify-between text-[10px] text-neutral-400">
        <span>OLIVETTI LETTERA 32</span>
        <span class="text-red-500 font-bold">CINTA ROJA</span>
      </div>
      <div class="h-2 bg-gradient-to-b from-black to-red-600 rounded"></div>
      <div class="text-white font-bold text-xs uppercase tracking-wider">REGISTRO DE SALIDA OFICIAL</div>
    </div>`
  },
  {
    id: "avg_39", num: "39", name: "Swiss Railway Station Clock (Hans Hilfiker)", archetype: "Swiss Railway",
    tags: ["#swiss", "#railway", "#clock", "#iconic"],
    desc: "El legendario reloj de las estaciones de tren suizas (SBB) con aguja segundera de piruleta roja.",
    html: `<div class="p-5 bg-white text-black border-4 border-black rounded-full max-w-xs mx-auto text-center font-sans space-y-1 shadow-2xl">
      <div class="text-[9px] font-bold font-mono tracking-widest">SBB CFF FFS</div>
      <div class="text-2xl font-black font-mono">18:24</div>
      <div class="w-3 h-3 rounded-full bg-[#E11D48] mx-auto shadow"></div>
    </div>`
  },
  {
    id: "avg_40", num: "40", name: "Translucent Cyber Cartridge with Gold Pins", archetype: "Cyber Cartridge",
    tags: ["#cartridge", "#cyberpunk", "#pcb", "#hardware"],
    desc: "Cartucho transparente de memoria flash con patillas de conexión doradas vistas y LED de actividad.",
    html: `<div class="p-4 bg-slate-900/90 border border-cyan-400/60 rounded-t-xl max-w-sm font-mono text-xs space-y-2 shadow-[0_0_15px_rgba(6,182,212,0.3)]">
      <div class="flex justify-between items-center text-cyan-300 text-[10px]">
        <span>CYBER CARTRIDGE 64MB</span>
        <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
      </div>
      <div class="text-white font-bold text-sm">ENCLAVE SECRETO // ROM 01</div>
      <div class="flex gap-1 pt-2 border-t-2 border-amber-400">
        <span class="w-2 h-3 bg-amber-400"></span><span class="w-2 h-3 bg-amber-400"></span><span class="w-2 h-3 bg-amber-400"></span><span class="w-2 h-3 bg-amber-400"></span>
      </div>
    </div>`
  },
  {
    id: "avg_41", num: "41", name: "Vintage Cardboard Matchbook Cover", archetype: "Matchbook Retro",
    tags: ["#matchbook", "#cardboard", "#retro", "#nostalgia"],
    desc: "Caja de cerillas de hotel clásico de los años 50 con raspador de azufre inferior.",
    html: `<div class="p-5 bg-[#E84A36] text-white border-2 border-black rounded-t-xl max-w-xs font-mono text-xs space-y-2 shadow-xl">
      <div class="text-[9px] uppercase tracking-widest text-amber-200">HOTEL DES BERGUES // GENÈVE</div>
      <div class="text-base font-black uppercase tracking-tight">CERILLAS DE SEGURIDAD</div>
      <div class="h-3 bg-[#422216] border-t-2 border-black rounded-b"></div>
    </div>`
  },
  {
    id: "avg_42", num: "42", name: "Seismograph Earthquake Drum Recorder", archetype: "Seismograph",
    tags: ["#seismograph", "#earthquake", "#drum", "#science"],
    desc: "Tambor de papel continuo con aguja de tinta registrando oscilaciones telúricas en la escala de Richter.",
    html: `<div class="p-4 bg-[#121212] border border-neutral-700 rounded-xl max-w-sm font-mono text-xs text-white space-y-2">
      <div class="flex justify-between text-neutral-400 text-[10px]">
        <span>ESTACIÓN SÍSMICA SUIZA</span>
        <span class="text-rose-500 font-bold">MAGNITUD: 4.8</span>
      </div>
      <div class="h-10 border-y border-neutral-800 flex items-center justify-center">
        <span class="font-mono text-rose-400 text-xs">~~~/\_/\/\__/\___</span>
      </div>
    </div>`
  },
  {
    id: "avg_43", num: "43", name: "Cardiac ECG Phosphor Pulse Monitor", archetype: "ECG Monitor",
    tags: ["#ecg", "#cardiac", "#medical", "#monitor"],
    desc: "Monitor cardíaco hospitalario con onda P-Q-R-S-T en verde esmeralda y frecuencia cardíaca.",
    html: `<div class="p-4 bg-black border-2 border-emerald-600/60 rounded-xl max-w-sm font-mono text-xs text-emerald-400 space-y-1 shadow-[0_0_15px_rgba(16,185,129,0.25)]">
      <div class="flex justify-between text-[10px]">
        <span>MONITOR CARDÍACO ICU</span>
        <span class="text-white font-bold">72 BPM</span>
      </div>
      <div class="text-base font-bold text-white tracking-widest text-center py-2">
        __/\_/\__/\_
      </div>
      <div class="text-[10px] text-emerald-500">RITMO SINUSAL NORMAL // SpO2 99%</div>
    </div>`
  },
  {
    id: "avg_44", num: "44", name: "Bespoke Savile Row Tailor Fabric Swatch", archetype: "Bespoke Tailor",
    tags: ["#tailor", "#savile-row", "#tweed", "#fabric"],
    desc: "Tarjeta de sastre de Savile Row con muestra de paño de tweed inglés y botón de cuerno cosido.",
    html: `<div class="p-5 bg-[#FAF6EE] text-black border border-neutral-400 rounded-lg max-w-sm font-serif text-xs space-y-2 shadow-md">
      <div class="flex justify-between text-[9px] font-mono text-neutral-600">
        <span>SAVILE ROW LONDON</span>
        <span>SUPER 150s WOOL</span>
      </div>
      <div class="h-12 bg-[#2D3748] rounded border border-black flex items-center justify-between px-3 text-white">
        <span class="font-sans text-[10px]">HARRIS TWEED</span>
        <div class="w-6 h-6 rounded-full bg-[#1A1A1A] border-2 border-[#D4AF37]"></div>
      </div>
    </div>`
  },
  {
    id: "avg_45", num: "45", name: "Airlock Pressure Wheel Valve", archetype: "Airlock Valve",
    tags: ["#airlock", "#valve", "#space", "#industrial"],
    desc: "Volante de cierre hermético de esclusa de descompresión con manómetro diferencial.",
    html: `<div class="p-5 bg-[#FACC15] text-black border-4 border-black rounded-2xl max-w-sm font-mono text-xs text-center space-y-2 shadow-2xl">
      <div class="text-[10px] font-black uppercase">ESCLUSA DE DESCOMPRESIÓN 04</div>
      <div class="w-16 h-16 mx-auto rounded-full border-4 border-black flex items-center justify-center font-black text-xl bg-white">
        ⚙
      </div>
      <div class="text-[10px] font-bold">PRESIÓN IGUALADA 101.3 kPa</div>
    </div>`
  },
  {
    id: "avg_46", num: "46", name: "Vintage 7-Inch Vinyl Single Paper Sleeve", archetype: "Vinyl 7-Inch",
    tags: ["#vinyl", "#single", "#retro", "#music"],
    desc: "Funda de papel de disco de vinilo de 7 pulgadas con troquel circular que deja ver la galleta central.",
    html: `<div class="p-5 bg-[#E2D9C8] text-black border-2 border-black rounded-lg max-w-xs mx-auto text-center space-y-2 shadow-xl">
      <div class="w-20 h-20 mx-auto rounded-full bg-[#E11D48] text-white flex flex-col items-center justify-center font-mono text-[8px] font-bold shadow-inner">
        <span>ISLAND</span>
        <span>45 RPM</span>
      </div>
      <div class="font-mono text-xs font-bold uppercase">LADO A: SOBERANÍA</div>
    </div>`
  },
  {
    id: "avg_47", num: "47", name: "Bakelite Rotary Telephone Dial Wheel", archetype: "Rotary Phone",
    tags: ["#rotary", "#phone", "#vintage", "#bakelite"],
    desc: "Disco marcador telefónico giratorio con 10 orificios para el dedo y tope metálico inferior.",
    html: `<div class="p-5 bg-[#121212] text-white border-2 border-neutral-700 rounded-full max-w-xs mx-auto text-center font-mono space-y-1 shadow-2xl">
      <div class="text-[9px] text-amber-400">TELÉFONO FIDUCIARIO 1948</div>
      <div class="w-20 h-20 mx-auto rounded-full bg-neutral-900 border-2 border-neutral-500 flex items-center justify-center font-bold text-sm">
        1 • 2 • 3
      </div>
    </div>`
  },
  {
    id: "avg_48", num: "48", name: "Laser-Charred Japanese Cedar Plaque", archetype: "Cedar Plaque",
    tags: ["#cedar", "#laser", "#japan", "#wood"],
    desc: "Placa de madera de cedro quemada tradicional (Shou Sugi Ban) con caligrafía grabada al láser.",
    html: `<div class="p-5 bg-[#1C1611] text-[#E8DFD0] border-2 border-[#5C452D] rounded-lg max-w-sm text-center font-serif space-y-1 shadow-2xl">
      <div class="text-[9px] font-mono text-amber-500">SHOU SUGI BAN // 焼杉</div>
      <div class="text-xl font-bold tracking-widest text-[#D4AF37]">静寂と力</div>
      <div class="text-[10px] text-neutral-400 italic">"Serenidad y Fuerza Interior"</div>
    </div>`
  },
  {
    id: "avg_49", num: "49", name: "Superconducting Quantum Chandelier Cylinder", archetype: "Quantum Chandelier",
    tags: ["#quantum", "#chandelier", "#physics", "#gold"],
    desc: "Estructura concéntrica de placas de cobre dorado y cables coaxiales criogénicos a 15 milikelvin.",
    html: `<div class="p-5 bg-black border-2 border-[#D4AF37] rounded-2xl max-w-sm font-mono text-xs text-center space-y-2 shadow-[0_0_25px_rgba(212,175,55,0.3)]">
      <div class="text-[10px] text-[#D4AF37] font-bold">IBM CRYOGENIC CHANDELIER</div>
      <div class="text-xl font-bold text-white">0.015 KELVIN</div>
      <div class="text-[10px] text-cyan-300">127 QUBITS SUPERCONDUCTORES ACTIVOS</div>
    </div>`
  },
  {
    id: "avg_50", num: "50", name: "Zero-Gravity Spatial Atmospheric Portal", archetype: "Spatial Portal",
    tags: ["#spatial", "#portal", "#zero-gravity", "#cosmic"],
    desc: "Portal gravitacional con anillo giroscópico flotante, distorsión óptica de lente y luz cósmica.",
    html: `<div class="p-6 bg-slate-950/90 border-2 border-cyan-400 rounded-3xl max-w-sm text-center font-serif text-xs space-y-3 shadow-[0_0_35px_rgba(6,182,212,0.4)] backdrop-blur-3xl">
      <div class="text-[10px] font-mono text-cyan-300 uppercase tracking-widest">ESPACIO SOBERANO CUÁNTICO</div>
      <div class="w-20 h-20 mx-auto rounded-full bg-gradient-to-tr from-cyan-500 to-indigo-600 flex items-center justify-center text-white text-2xl shadow-lg animate-pulse">
        ✦
      </div>
      <div class="text-sm font-bold text-white">Salto Hiperespacial Sincronizado</div>
    </div>`
  }
];
