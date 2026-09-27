// 50 Modales, Overlays, Toasts & Drawers
export const modals = [
  {
    id: "mod_01", num: "01", name: "Command Palette Spotlight / Raycast", archetype: "Spotlight Palette",
    tags: ["#spotlight", "#raycast", "#command", "#palette"],
    desc: "Buscador flotante central con fondo oscurecido, atajo de teclado ⌘K e historial reciente.",
    html: `<div class="p-4 bg-slate-950 border border-slate-800 rounded-2xl shadow-2xl w-full max-w-sm space-y-3 text-xs"><div class="flex items-center gap-2 pb-2 border-b border-slate-800"><i class="ph-bold ph-magnifying-glass text-amber-400 text-sm"></i><input type="text" placeholder="Escribe un comando..." class="bg-transparent text-white outline-none w-full"></div><div class="space-y-1"><div class="p-2 rounded bg-slate-900 text-white flex justify-between font-mono text-[11px]"><span>> Crear Nueva Tarea de Foco</span><span class="text-slate-500">↵</span></div><div class="p-2 rounded hover:bg-slate-900 text-slate-400 flex justify-between font-mono text-[11px]"><span>> Conmutar Modo Privacidad</span><span class="text-slate-500">⌘P</span></div></div></div>`
  },
  {
    id: "mod_02", num: "02", name: "Sovereign Sliding Right Sheet Drawer", archetype: "Sliding Drawer",
    tags: ["#drawer", "#sheet", "#slide", "#sovereign"],
    desc: "Panel lateral derecho deslizante para edición de expedientes fiduciarios.",
    html: `<div class="p-5 bg-[#0A0D14] border-l-2 border-l-amber-400 border border-slate-800 rounded-xl shadow-2xl w-full max-w-sm space-y-3 text-xs"><div class="flex justify-between items-center pb-2 border-b border-slate-800"><h5 class="font-serif font-bold text-white text-sm">Expediente de Custodia #04</h5><i class="ph-bold ph-x text-slate-400 cursor-pointer"></i></div><p class="text-slate-400 text-[11px]">Modifica los parámetros de asignación de capital.</p><button class="w-full py-2 rounded bg-amber-400 text-black font-bold font-mono text-xs">GUARDAR CAMBIOS</button></div>`
  },
  {
    id: "mod_03", num: "03", name: "Animated Toast Beacon con Barra de Vida", archetype: "Toast Lifespan",
    tags: ["#toast", "#beacon", "#lifespan", "#alert"],
    desc: "Notificación flotante en esquina superior derecha con barra de progreso de caducidad.",
    html: `<div class="p-3 bg-slate-900 border border-emerald-500/40 rounded-xl shadow-xl w-full max-w-sm space-y-2 text-xs relative overflow-hidden"><div class="flex items-center gap-2.5"><i class="ph-fill ph-check-circle text-emerald-400 text-base"></i><span class="text-white font-medium">Asignación aprobada correctamente</span></div><div class="h-1 bg-slate-800 rounded-full overflow-hidden"><div class="bg-emerald-400 h-full w-2/3"></div></div></div>`
  },
  {
    id: "mod_04", num: "04", name: "Fullscreen Immersion Focus Modal", archetype: "Fullscreen Focus",
    tags: ["#fullscreen", "#immersion", "#focus", "#timer"],
    desc: "Pantalla completa de inmersión para sprints de trabajo profundo sin distracciones.",
    html: `<div class="p-6 bg-slate-950 border border-amber-500/40 rounded-2xl shadow-2xl text-center space-y-3 w-full max-w-sm"><div class="text-xs font-mono text-amber-400 uppercase tracking-widest">INMERSIÓN TOTAL</div><div class="text-3xl font-mono font-bold text-white">45:00</div><div class="text-xs text-slate-400">Revisión de arquitectura enclave</div><div class="flex gap-2 justify-center pt-2"><button class="px-4 py-1.5 rounded bg-amber-400 text-black font-bold text-xs">Pausar</button><button class="px-4 py-1.5 rounded bg-slate-800 text-slate-300 text-xs">Concluir</button></div></div>`
  },
  {
    id: "mod_05", num: "05", name: "Brutalist Warning Danger Stamp", archetype: "Warning Stamp",
    tags: ["#brutalist", "#warning", "#stamp", "#danger"],
    desc: "Sello de peligro en rojo y negro con confirmación de dos pasos para acciones destructivas.",
    html: `<div class="p-5 bg-black border-2 border-red-600 text-white font-mono text-xs w-full max-w-sm space-y-3 shadow-[4px_4px_0px_#DC2626]"><div class="text-red-500 font-bold uppercase tracking-wider">⚠ ADVERTENCIA CRÍTICA</div><p class="text-neutral-300 text-[11px] leading-relaxed">Esta acción purgará de forma irreversible las llaves criptográficas de la sesión.</p><div class="flex gap-2"><button class="px-3 py-1.5 bg-red-600 text-white font-bold uppercase text-[10px]">PURGAR</button><button class="px-3 py-1.5 bg-neutral-800 text-neutral-300 text-[10px]">CANCELAR</button></div></div>`
  },
  {
    id: "mod_06", num: "06", name: "Bottom Micro-Pill Floating Toast", archetype: "Micro Pill Toast",
    tags: ["#toast", "#pill", "#bottom", "#minimal"],
    desc: "Aviso inferior ultra-compacto centrado con confirmación de guardado automático.",
    html: `<div class="inline-flex items-center gap-2 px-4 py-2 bg-slate-900 border border-slate-700 rounded-full shadow-2xl text-xs text-slate-200"><i class="ph-bold ph-check text-emerald-400"></i><span>Borrador guardado automáticamente</span></div>`
  },
  {
    id: "mod_07", num: "07", name: "Centered Confirmation Dialog", archetype: "Confirmation Modal",
    tags: ["#modal", "#dialog", "#centered", "#confirmation"],
    desc: "Diálogo emergente estándar con cabecera, cuerpo descriptivo y botones de aceptar y cancelar.",
    html: `<div class="p-5 bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl w-full max-w-sm space-y-3 text-xs"><h5 class="font-bold text-white text-sm">¿Confirmar llamada de capital?</h5><p class="text-slate-400 text-[11px] leading-relaxed">Se notificará a todos los LPs y se generará la orden bancaria SWIFT.</p><div class="flex justify-end gap-2 pt-2"><button class="px-3 py-1.5 rounded bg-slate-800 text-slate-300">Cancelar</button><button class="px-3 py-1.5 rounded bg-amber-400 text-black font-bold">Autorizar</button></div></div>`
  },
  {
    id: "mod_08", num: "08", name: "Multi-Step Onboarding Wizard Modal", archetype: "Wizard Modal",
    tags: ["#wizard", "#onboarding", "#stepper", "#modal"],
    desc: "Ventana de configuración inicial con barra de avance paso a paso.",
    html: `<div class="p-5 bg-slate-950 border border-slate-800 rounded-2xl w-full max-w-sm space-y-3 text-xs"><div class="flex justify-between items-center text-slate-500 font-mono text-[10px]"><span>PASO 2 DE 4</span><span>50%</span></div><h5 class="font-bold text-white text-sm">Configuración de Seguridad</h5><p class="text-slate-400 text-[11px]">Vincula tu llave de seguridad hardware o dispositivo YubiKey.</p><button class="w-full py-2 bg-amber-400 text-black font-bold rounded">Continuar →</button></div>`
  },
  {
    id: "mod_09", num: "09", name: "Floating Audio / Media Player Bar", archetype: "Media Dock",
    tags: ["#player", "#audio", "#media", "#dock"],
    desc: "Barra flotante inferior con controles de reproducción de audio o briefing ejecutivo.",
    html: `<div class="p-3 bg-slate-900 border border-slate-800 rounded-full flex items-center justify-between text-xs w-full max-w-sm shadow-xl"><div class="flex items-center gap-2.5"><button class="w-7 h-7 rounded-full bg-amber-400 text-black flex items-center justify-center font-bold"><i class="ph-bold ph-play"></i></button><span class="text-white font-medium">Briefing Matinal Ginebra</span></div><span class="text-slate-400 font-mono text-[10px]">04:18</span></div>`
  },
  {
    id: "mod_10", num: "10", name: "GDPR Sovereign Cookie Consent Ribbon", archetype: "Cookie Ribbon",
    tags: ["#cookies", "#gdpr", "#ribbon", "#legal"],
    desc: "Cinta de consentimiento estricto que no almacena rastreadores de terceros.",
    html: `<div class="p-4 bg-slate-950 border-t border-slate-800 flex justify-between items-center text-xs w-full max-w-sm"><p class="text-slate-400 text-[11px] leading-tight">Cero cookies de rastreo comercial. Solo sesión criptográfica.</p><button class="px-3 py-1 bg-slate-800 text-white rounded font-bold text-[10px]">ENTENDIDO</button></div>`
  },
  {
    id: "mod_11", num: "11", name: "Danger Zone Account Deletion Prompt", archetype: "Danger Zone",
    tags: ["#danger", "#delete", "#account", "#destructive"],
    desc: "Cuadro de diálogo de confirmación que solicita escribir la palabra 'CONFIRMAR'.",
    html: `<div class="p-5 bg-slate-950 border border-rose-500/50 rounded-2xl w-full max-w-sm space-y-3 text-xs"><div class="text-rose-400 font-bold">ZONA DE PELIGRO</div><p class="text-slate-400 text-[11px]">Escribe CONFIRMAR para eliminar la bóveda permanentemente.</p><input type="text" placeholder="CONFIRMAR" class="w-full bg-slate-900 border border-slate-700 rounded p-2 text-white font-mono text-xs outline-none"><button class="w-full py-2 bg-rose-600 text-white font-bold rounded">ELIMINAR DEFINITIVAMENTE</button></div>`
  },
  {
    id: "mod_12", num: "12", name: "Session Expiry Countdown Banner", archetype: "Session Expiry",
    tags: ["#session", "#timeout", "#security", "#banner"],
    desc: "Aviso de cierre inminente de sesión por inactividad con temporizador.",
    html: `<div class="p-3 bg-amber-950/40 border border-amber-500/50 rounded-xl flex items-center justify-between text-xs w-full max-w-sm"><span class="text-amber-300 font-medium">Sesión expira en 01:59</span><button class="px-2.5 py-1 bg-amber-400 text-black font-bold rounded text-[10px]">Extender</button></div>`
  },
  {
    id: "mod_13", num: "13", name: "Quick Task Entry Modal Popover", archetype: "Quick Task",
    tags: ["#task", "#modal", "#popover", "#entry"],
    desc: "Ventana compacta para agregar una tarea rápida sin salir de la vista actual.",
    html: `<div class="p-4 bg-slate-900 border border-slate-800 rounded-2xl w-full max-w-sm space-y-3 text-xs"><h5 class="font-bold text-white">Nueva Tarea de Foco</h5><input type="text" placeholder="¿Qué vas a completar?" class="w-full bg-slate-950 border border-slate-700 rounded p-2 text-white outline-none"><div class="flex justify-end gap-2"><button class="px-3 py-1 bg-slate-800 rounded text-slate-300">Cancelar</button><button class="px-3 py-1 bg-amber-400 text-black font-bold rounded">Crear</button></div></div>`
  },
  {
    id: "mod_14", num: "14", name: "Confetti Achievement Success Overlay", archetype: "Achievement Reward",
    tags: ["#achievement", "#success", "#reward", "#confetti"],
    desc: "Ventana de celebración tras completar el sprint de foco con récord personal.",
    html: `<div class="p-5 bg-gradient-to-br from-slate-900 to-amber-950/30 border border-amber-500/50 rounded-2xl text-center space-y-2 w-full max-w-sm"><i class="ph-fill ph-trophy text-amber-400 text-3xl"></i><h4 class="font-bold text-white text-base">¡Sprint Completado!</h4><p class="text-slate-400 text-xs">Has completado 150 minutos de trabajo profundo continuo.</p></div>`
  },
  {
    id: "mod_15", num: "15", name: "Floating Micro Feedback Survey", archetype: "Feedback Survey",
    tags: ["#survey", "#feedback", "#rating", "#floating"],
    desc: "Encuesta discreta en esquina inferior para calificar la velocidad de la plataforma.",
    html: `<div class="p-3 bg-slate-900 border border-slate-800 rounded-xl space-y-2 text-xs w-full max-w-xs shadow-xl"><div class="text-white font-medium">¿Cómo evalúas esta interfaz?</div><div class="flex justify-between text-base cursor-pointer"><span>😡</span><span>😐</span><span>😊</span><span>🚀</span></div></div>`
  },
  {
    id: "mod_16", num: "16", name: "System Update Maintenance Alert", archetype: "Maintenance Alert",
    tags: ["#maintenance", "#system", "#update", "#alert"],
    desc: "Notificación de actualización de software con hora estimada de reinicio.",
    html: `<div class="p-3 bg-blue-950/40 border border-blue-500/40 rounded-xl text-xs w-full max-w-sm flex items-center gap-3"><i class="ph-bold ph-arrow-clockwise text-blue-400 text-lg animate-spin"></i><div><div class="font-bold text-white">Actualización v2.1 en curso</div><div class="text-[10px] text-slate-400">Reinicio programado a las 02:00 GMT</div></div></div>`
  },
  {
    id: "mod_17", num: "17", name: "Export Data Options Modal", archetype: "Export Modal",
    tags: ["#export", "#json", "#csv", "#pdf"],
    desc: "Selector para exportar los datos del proyecto en formato JSON, CSV o PDF.",
    html: `<div class="p-5 bg-slate-950 border border-slate-800 rounded-2xl w-full max-w-sm space-y-3 text-xs"><h5 class="font-bold text-white text-sm">Exportar Expediente</h5><div class="space-y-1.5"><div class="p-2 bg-slate-900 rounded flex justify-between cursor-pointer hover:border hover:border-amber-400"><span>JSON Completo</span><span class="text-slate-500 font-mono">.json</span></div><div class="p-2 bg-slate-900 rounded flex justify-between cursor-pointer hover:border hover:border-amber-400"><span>Informe Ejecutivo PDF</span><span class="text-slate-500 font-mono">.pdf</span></div></div></div>`
  },
  {
    id: "mod_18", num: "18", name: "Password Reset Sent Toast", archetype: "Success Toast",
    tags: ["#toast", "#success", "#email", "#password"],
    desc: "Aviso de confirmación de envío de enlace de restablecimiento al correo fiduciario.",
    html: `<div class="p-3 bg-slate-900 border border-emerald-500/40 rounded-xl flex items-center gap-2.5 text-xs text-white max-w-sm shadow-lg"><i class="ph-fill ph-envelope-simple text-emerald-400 text-base"></i><span>Enlace de acceso enviado a tu correo</span></div>`
  },
  {
    id: "mod_19", num: "19", name: "Biometric Hardware Key Prompt Modal", archetype: "YubiKey Prompt",
    tags: ["#yubikey", "#hardware", "#fido2", "#modal"],
    desc: "Instrucción en pantalla para tocar la llave de seguridad física YubiKey.",
    html: `<div class="p-6 bg-slate-950 border border-cyan-500/40 rounded-2xl text-center space-y-3 w-full max-w-sm"><i class="ph-bold ph-key text-cyan-400 text-3xl animate-bounce"></i><h5 class="font-bold text-white text-sm">Toca tu Llave de Seguridad</h5><p class="text-slate-400 text-xs">Inserta tu llave FIDO2 y pulsa el botón metálico para autenticar.</p></div>`
  },
  {
    id: "mod_20", num: "20", name: "Invite Team Member Modal Sheet", archetype: "Invite Sheet",
    tags: ["#invite", "#team", "#modal", "#members"],
    desc: "Formulario para añadir un nuevo fiduciario o socio al espacio de trabajo.",
    html: `<div class="p-5 bg-slate-900 border border-slate-800 rounded-2xl w-full max-w-sm space-y-3 text-xs"><h5 class="font-bold text-white text-sm">Invitar Fiduciario</h5><input type="email" placeholder="correo@banca-suiza.ch" class="w-full bg-slate-950 border border-slate-700 rounded p-2 text-white outline-none"><button class="w-full py-2 bg-amber-400 text-black font-bold rounded">Enviar Invitación</button></div>`
  },
  {
    id: "mod_21", num: "21", name: "Network Disconnected Warning Banner", archetype: "Network Warning",
    tags: ["#offline", "#network", "#disconnected", "#banner"],
    desc: "Franja de aviso en la parte superior advirtiendo de trabajo en modo local sin conexión.",
    html: `<div class="p-2.5 bg-rose-950/80 border border-rose-500 rounded-lg text-xs font-mono flex items-center justify-between text-rose-200 w-full max-w-sm"><span>⚡ MODO SIN CONEXIÓN (OFFLINE)</span><span class="text-[10px]">CACHE LOCAL OK</span></div>`
  },
  {
    id: "mod_22", num: "22", name: "File Import Progress Floating Dialog", archetype: "Import Progress",
    tags: ["#import", "#progress", "#dialog", "#loading"],
    desc: "Barra de progreso de carga de archivo masivo con porcentaje numérico.",
    html: `<div class="p-4 bg-slate-900 border border-slate-800 rounded-xl space-y-2 text-xs w-full max-w-sm shadow-xl"><div class="flex justify-between"><span class="text-white font-medium">Procesando archivo ledger.json</span><span class="text-amber-400 font-mono">68%</span></div><div class="h-1.5 bg-slate-800 rounded-full overflow-hidden"><div class="bg-amber-400 h-full w-[68%]"></div></div></div>`
  },
  {
    id: "mod_23", num: "23", name: "Live Chat Support Slideover", archetype: "Support Chat",
    tags: ["#support", "#chat", "#slideover", "#concierge"],
    desc: "Canal de mensajería directa con el conserje fiduciario asignado.",
    html: `<div class="p-4 bg-slate-950 border border-slate-800 rounded-2xl w-full max-w-sm space-y-3 text-xs"><div class="flex items-center gap-2 pb-2 border-b border-slate-800"><span class="w-2 h-2 rounded-full bg-emerald-400"></span><span class="font-bold text-white">Mayordomía Fiduciaria</span></div><div class="p-2 bg-slate-900 rounded text-slate-300">Buenas tardes Sr. Pierce. Su llamada de capital está lista.</div></div>`
  },
  {
    id: "mod_24", num: "24", name: "Filter Reset Confirmation Modal", archetype: "Filter Reset",
    tags: ["#filters", "#reset", "#confirm", "#modal"],
    desc: "Aviso de confirmación antes de limpiar los filtros guardados.",
    html: `<div class="p-4 bg-slate-900 border border-slate-800 rounded-xl space-y-2 text-xs w-full max-w-xs"><div class="font-bold text-white">¿Restablecer filtros?</div><p class="text-slate-400 text-[11px]">Se recuperará la vista inicial predeterminada.</p><div class="flex justify-end gap-2 pt-1"><button class="px-2.5 py-1 rounded bg-amber-400 text-black font-bold">Sí, restablecer</button></div></div>`
  },
  {
    id: "mod_25", num: "25", name: "Multi-Currency Switcher Modal", archetype: "Currency Switcher",
    tags: ["#currency", "#rates", "#modal", "#switch"],
    desc: "Selector para cambiar la divisa de visualización entre USD, EUR, CHF y GBP.",
    html: `<div class="p-4 bg-slate-950 border border-slate-800 rounded-xl w-full max-w-xs space-y-2 text-xs font-mono"><div class="text-slate-400 text-[10px]">SELECCIONA DIVISA BASE</div><div class="grid grid-cols-2 gap-2"><button class="p-2 rounded bg-amber-400 text-black font-bold">USD ($)</button><button class="p-2 rounded bg-slate-900 text-slate-300">CHF (Fr)</button></div></div>`
  },
  {
    id: "mod_26", num: "26", name: "API Key Generated Success Dialog", archetype: "API Key Dialog",
    tags: ["#api", "#keys", "#token", "#dialog"],
    desc: "Cuadro con clave de API recién generada con advertencia de guardado único.",
    html: `<div class="p-5 bg-slate-950 border border-emerald-500/40 rounded-2xl w-full max-w-sm space-y-3 text-xs font-mono"><div class="text-emerald-400 font-bold">NUEVA CLAVE API GENERADA</div><div class="p-2 bg-slate-900 rounded text-slate-300 text-[10px] break-all">api_token_vault_9042819042abcdef0123456789</div><div class="text-slate-500 text-[9px]">Copia esta clave ahora. No se volverá a mostrar.</div></div>`
  },
  {
    id: "mod_27", num: "27", name: "Report Bug / Feedback Form Sheet", archetype: "Bug Report",
    tags: ["#bug", "#report", "#feedback", "#sheet"],
    desc: "Formulario emergente para reportar incidencias con captura de pantalla.",
    html: `<div class="p-4 bg-slate-900 border border-slate-800 rounded-xl w-full max-w-sm space-y-2 text-xs"><div class="font-bold text-white">Reportar Incidencia</div><textarea rows="2" placeholder="Describe lo que ocurrió..." class="w-full bg-slate-950 border border-slate-700 rounded p-2 text-white outline-none"></textarea><button class="w-full py-1.5 bg-slate-800 text-white font-bold rounded">Enviar Reporte</button></div>`
  },
  {
    id: "mod_28", num: "28", name: "Contract Approved Hologram Stamp", archetype: "Hologram Stamp",
    tags: ["#hologram", "#contract", "#approved", "#stamp"],
    desc: "Estampación holográfica de visto bueno sobre un documento legal digital.",
    html: `<div class="p-5 bg-emerald-950/30 border-2 border-emerald-400 rounded-2xl text-center space-y-1 w-full max-w-xs font-mono"><div class="text-emerald-400 font-bold text-base">CONTRATO VALIDADO</div><div class="text-slate-300 text-[10px]">CUSTODIA SEGURA CH-GVA</div></div>`
  },
  {
    id: "mod_29", num: "29", name: "Quick Notes Floating Drawer", archetype: "Quick Notes",
    tags: ["#notes", "#scratchpad", "#drawer", "#quick"],
    desc: "Bloc de notas rápido accesible desde cualquier punto de la aplicación.",
    html: `<div class="p-4 bg-slate-950 border border-slate-800 rounded-xl w-full max-w-xs space-y-2 text-xs"><div class="flex justify-between items-center text-slate-400"><span class="font-mono text-[10px]">BLOC DE NOTAS</span><i class="ph-bold ph-x cursor-pointer"></i></div><textarea rows="3" class="w-full bg-transparent text-white outline-none text-xs">Recordar enviar confirmación a Ginebra antes de las 18:00...</textarea></div>`
  },
  {
    id: "mod_30", num: "30", name: "Battery Saver Mode Activated Toast", archetype: "Power Toast",
    tags: ["#battery", "#power", "#toast", "#saver"],
    desc: "Aviso de reducción de animaciones para conservar energía en portátiles.",
    html: `<div class="p-2.5 bg-slate-900 border border-slate-700 rounded-lg flex items-center gap-2 text-xs text-slate-300 max-w-xs"><i class="ph-bold ph-battery-charging text-amber-400"></i><span>Modo ahorro activado: animaciones a 30fps</span></div>`
  },
  {
    id: "mod_31", num: "31", name: "Keyboard Shortcuts Helper Sheet", archetype: "Shortcuts Sheet",
    tags: ["#shortcuts", "#keyboard", "#sheet", "#help"],
    desc: "Guía de todos los atajos de teclado disponibles en la plataforma.",
    html: `<div class="p-4 bg-slate-950 border border-slate-800 rounded-xl w-full max-w-sm space-y-2 text-xs font-mono"><div class="font-bold text-white mb-2">ATAJOS DE TECLADO</div><div class="flex justify-between py-1 border-b border-slate-900"><span>Abrir Comandos</span><span class="text-amber-400">⌘K</span></div><div class="flex justify-between py-1"><span>Modo Privacidad</span><span class="text-amber-400">⌘P</span></div></div>`
  },
  {
    id: "mod_32", num: "32", name: "Vault Access Unlocked Notification", archetype: "Vault Notification",
    tags: ["#vault", "#unlocked", "#security", "#toast"],
    desc: "Aviso de apertura segura de bóveda con registro de auditoría asociado.",
    html: `<div class="p-3 bg-slate-900 border border-amber-500/40 rounded-xl flex items-center gap-3 text-xs max-w-sm"><i class="ph-fill ph-lock-key-open text-amber-400 text-lg"></i><div><div class="font-bold text-white">Bóveda Ginebra Desbloqueada</div><div class="text-[10px] text-slate-400">Acceso autorizado por Alexander Pierce</div></div></div>`
  },
  {
    id: "mod_33", num: "33", name: "Cloud Sync Conflict Resolution Dialog", archetype: "Conflict Dialog",
    tags: ["#sync", "#conflict", "#cloud", "#diff"],
    desc: "Diálogo para elegir entre la versión local y la versión del servidor en conflicto.",
    html: `<div class="p-5 bg-slate-950 border border-amber-500/40 rounded-2xl w-full max-w-sm space-y-3 text-xs"><div class="font-bold text-white">Conflicto de Versiones</div><p class="text-slate-400 text-[11px]">El documento fue editado en otro dispositivo.</p><div class="grid grid-cols-2 gap-2"><button class="p-2 rounded bg-slate-900 text-slate-300">Mantener Local</button><button class="p-2 rounded bg-amber-400 text-black font-bold">Usar Servidor</button></div></div>`
  },
  {
    id: "mod_34", num: "34", name: "Database Backup Completed Toast", archetype: "Backup Toast",
    tags: ["#backup", "#database", "#toast", "#success"],
    desc: "Confirmación de creación de copia de seguridad íntegra de la base de datos.",
    html: `<div class="p-3 bg-slate-900 border border-emerald-500/40 rounded-xl flex items-center gap-2.5 text-xs text-white max-w-sm"><i class="ph-bold ph-database text-emerald-400 text-base"></i><span>Copia de seguridad completada (14.2 MB)</span></div>`
  },
  {
    id: "mod_35", num: "35", name: "Sprint Completed Summary Modal", archetype: "Sprint Summary",
    tags: ["#sprint", "#summary", "#metrics", "#modal"],
    desc: "Resumen detallado de las métricas logradas durante el sprint de foco.",
    html: `<div class="p-5 bg-slate-950 border border-slate-800 rounded-2xl w-full max-w-sm space-y-3 text-xs"><h5 class="font-bold text-white text-sm">Resumen de Sesión</h5><div class="grid grid-cols-2 gap-2 font-mono"><div class="p-2 bg-slate-900 rounded"><span class="text-[10px] text-slate-400">TIEMPO</span><div class="text-white font-bold">50m 00s</div></div><div class="p-2 bg-slate-900 rounded"><span class="text-[10px] text-slate-400">FOCO</span><div class="text-emerald-400 font-bold">100%</div></div></div></div>`
  },
  {
    id: "mod_36", num: "36", name: "Subscription Plan Upgrade Sheet", archetype: "Upgrade Sheet",
    tags: ["#upgrade", "#subscription", "#plan", "#sheet"],
    desc: "Panel para actualizar al plan Soberano con funciones ilimitadas.",
    html: `<div class="p-5 bg-gradient-to-br from-slate-900 to-amber-950/30 border border-amber-500/40 rounded-2xl w-full max-w-sm space-y-3 text-xs"><div class="text-amber-400 font-mono text-[10px] font-bold">PLAN SOBERANO</div><div class="text-lg font-bold text-white">Desbloquea Bóvedas Ilimitadas</div><button class="w-full py-2 bg-amber-400 text-black font-bold rounded">Actualizar por $499/mes</button></div>`
  },
  {
    id: "mod_37", num: "37", name: "Biometric Fingerprint Match Toast", archetype: "Fingerprint Toast",
    tags: ["#fingerprint", "#biometric", "#auth", "#toast"],
    desc: "Aviso de huella dactilar reconocida para firma de transferencias.",
    html: `<div class="p-3 bg-slate-900 border border-emerald-500/40 rounded-xl flex items-center gap-2.5 text-xs text-white max-w-sm"><i class="ph-bold ph-fingerprint text-emerald-400 text-base"></i><span>Huella dactilar validada con éxito</span></div>`
  },
  {
    id: "mod_38", num: "38", name: "IP Whitelist Access Added Notification", archetype: "IP Whitelist",
    tags: ["#ip", "#whitelist", "#security", "#toast"],
    desc: "Notificación de inclusión de nueva dirección IP en la lista de confianza.",
    html: `<div class="p-3 bg-slate-950 border border-slate-800 rounded-xl font-mono text-xs flex justify-between items-center max-w-sm"><div><span class="text-slate-400 text-[10px]">NUEVA IP AUTORIZADA</span><div class="text-white font-bold">84.112.90.14</div></div><span class="text-emerald-400">ACTIVA</span></div>`
  },
  {
    id: "mod_39", num: "39", name: "Terms of Service Agreement Modal", archetype: "Terms Modal",
    tags: ["#terms", "#legal", "#compliance", "#modal"],
    desc: "Ventana con texto legal deslizable y botón de aceptación obligatoria.",
    html: `<div class="p-5 bg-slate-950 border border-slate-800 rounded-2xl w-full max-w-sm space-y-3 text-xs"><h5 class="font-bold text-white text-sm">Términos Fiduciarios</h5><div class="h-20 bg-slate-900 border border-slate-800 rounded p-2 text-[10px] text-slate-400 overflow-y-auto">El usuario acepta los protocolos de custodia segura de la confederación...</div><button class="w-full py-2 bg-slate-800 text-white font-bold rounded">Aceptar Términos</button></div>`
  },
  {
    id: "mod_40", num: "40", name: "Two-Factor Auth QR Setup Modal", archetype: "2FA Setup",
    tags: ["#2fa", "#qr", "#authenticator", "#setup"],
    desc: "Modal de configuración con código QR para escanear con Google Authenticator.",
    html: `<div class="p-5 bg-slate-950 border border-slate-800 rounded-2xl text-center space-y-3 w-full max-w-sm text-xs"><h5 class="font-bold text-white text-sm">Configurar Autenticador</h5><div class="w-24 h-24 bg-white p-2 mx-auto rounded"><i class="ph-bold ph-qr-code text-6xl text-black"></i></div><p class="text-slate-400 text-[11px]">Escanea este código con tu aplicación 2FA.</p></div>`
  },
  {
    id: "mod_41", num: "41", name: "Flight Schedule Change Alert", archetype: "Flight Alert",
    tags: ["#flight", "#schedule", "#alert", "#travel"],
    desc: "Alerta de cambio de puerta de embarque o ajuste horario de jet privado.",
    html: `<div class="p-3 bg-slate-900 border border-amber-500/40 rounded-xl flex items-center gap-3 text-xs max-w-sm"><i class="ph-bold ph-airplane text-amber-400 text-lg"></i><div><div class="font-bold text-white">Vuelo GVA-LHR: Puerta 04</div><div class="text-[10px] text-slate-400">Embarque puntual a las 08:15</div></div></div>`
  },
  {
    id: "mod_42", num: "42", name: "Database Seed Reset Toast", archetype: "Seed Reset",
    tags: ["#seed", "#reset", "#database", "#toast"],
    desc: "Aviso de restauración de datos de prueba PRD completada con éxito.",
    html: `<div class="p-3 bg-slate-900 border border-cyan-500/40 rounded-xl flex items-center gap-2.5 text-xs text-white max-w-sm"><i class="ph-bold ph-arrow-counter-clockwise text-cyan-400 text-base"></i><span>Datos de prueba PRD restaurados</span></div>`
  },
  {
    id: "mod_43", num: "43", name: "High Memory Warning Notification", archetype: "Memory Warning",
    tags: ["#memory", "#ram", "#warning", "#server"],
    desc: "Aviso de uso de memoria superior al 85% con recomendación de purga.",
    html: `<div class="p-3 bg-amber-950/40 border border-amber-500/40 rounded-xl flex justify-between items-center text-xs max-w-sm font-mono"><span class="text-amber-300">USO DE RAM: 88%</span><button class="px-2 py-0.5 bg-amber-400 text-black font-bold rounded text-[10px]">Liberar</button></div>`
  },
  {
    id: "mod_44", num: "44", name: "Audit Hash Verified Seal Modal", archetype: "Verified Seal",
    tags: ["#audit", "#seal", "#hash", "#verified"],
    desc: "Sello de verificación matemática formal de integridad del registro contable.",
    html: `<div class="p-5 bg-slate-950 border border-emerald-500/40 rounded-2xl text-center space-y-2 w-full max-w-xs font-mono text-xs"><i class="ph-fill ph-seal-check text-emerald-400 text-3xl"></i><div class="text-white font-bold">INTEGRIDAD MATEMÁTICA 100%</div><div class="text-slate-500 text-[10px]">HASH: 0x9f4a...e12d VALIDADO</div></div>`
  },
  {
    id: "mod_45", num: "45", name: "Timezone Switched Success Banner", archetype: "Timezone Banner",
    tags: ["#timezone", "#clock", "#success", "#banner"],
    desc: "Banner confirmando el cambio de zona horaria activa a Londres o Nueva York.",
    html: `<div class="p-2.5 bg-slate-900 border border-slate-700 rounded-lg text-xs font-mono text-slate-300 flex items-center gap-2 max-w-sm"><i class="ph-bold ph-globe text-amber-400"></i><span>Zona horaria ajustada a LON (GMT+0)</span></div>`
  },
  {
    id: "mod_46", num: "46", name: "Download Completed Notification Toast", archetype: "Download Toast",
    tags: ["#download", "#file", "#toast", "#complete"],
    desc: "Aviso emergente confirmando que la descarga del archivo ha finalizado.",
    html: `<div class="p-3 bg-slate-900 border border-emerald-500/40 rounded-xl flex items-center gap-2.5 text-xs text-white max-w-sm"><i class="ph-bold ph-file-arrow-down text-emerald-400 text-base"></i><span>informe_q3.pdf descargado</span></div>`
  },
  {
    id: "mod_47", num: "47", name: "Hardware Security Token Removed Alert", archetype: "Token Removed",
    tags: ["#hardware", "#token", "#removed", "#alert"],
    desc: "Alerta de extracción de token de seguridad físico con bloqueo preventivo de pantalla.",
    html: `<div class="p-4 bg-rose-950/40 border border-rose-500/60 rounded-xl text-xs text-rose-200 flex items-center gap-3 max-w-sm"><i class="ph-bold ph-warning-octagon text-rose-400 text-xl"></i><div><div class="font-bold">Token Hardware Retirado</div><div class="text-[10px]">Pantalla bloqueada por seguridad</div></div></div>`
  },
  {
    id: "mod_48", num: "48", name: "Sovereign Gold Crest VIP Welcome Modal", archetype: "VIP Welcome",
    tags: ["#vip", "#welcome", "#sovereign", "#gold"],
    desc: "Bienvenida institucional para titulares de cuentas fiduciarias patrimoniales.",
    html: `<div class="p-6 bg-gradient-to-br from-[#121824] to-[#0A0D14] border border-amber-500/40 rounded-2xl text-center space-y-3 w-full max-w-sm"><div class="w-10 h-10 rounded-full bg-amber-400/20 border border-amber-400 text-amber-300 mx-auto flex items-center justify-center font-serif font-bold text-sm">S</div><h4 class="font-serif font-bold text-white text-base">Bienvenido a Chronos Sovereign</h4><p class="text-xs text-slate-400">Su sesión está protegida mediante enclave criptográfico suizo.</p></div>`
  },
  {
    id: "mod_49", num: "49", name: "Monolithic Blackout Notification Stamp", archetype: "Monolith Notification",
    tags: ["#monolith", "#blackout", "#stark", "#stamp"],
    desc: "Aviso sobrio sobre negro puro sin sombras ni desenfoques decorativos.",
    html: `<div class="p-3 bg-black border border-neutral-700 text-xs font-mono text-white flex justify-between items-center max-w-sm"><span>ORDEN #0942 PROCESADA</span><span class="text-neutral-500">OK</span></div>`
  },
  {
    id: "mod_50", num: "50", name: "Zero-Gravity Quantum Portal Overlay", archetype: "Quantum Portal",
    tags: ["#quantum", "#portal", "#cosmic", "#zero-gravity"],
    desc: "Ventana de portal cuántico con halo violeta y cian para inicialización de sesión cósmica.",
    html: `<div class="p-6 bg-slate-950/80 border border-cyan-400/40 rounded-2xl shadow-[0_20px_50px_rgba(6,182,212,0.25)] text-center space-y-3 w-full max-w-sm backdrop-blur-2xl"><div class="w-12 h-12 rounded-full border-2 border-cyan-400 mx-auto flex items-center justify-center text-cyan-400 text-xl"><i class="ph-fill ph-atom animate-spin"></i></div><h4 class="font-serif font-bold text-white text-base">Enlace Cuántico Sincronizado</h4><p class="text-xs text-cyan-200/80 font-mono">Telemetría de grado cero Kelvin activa.</p></div>`
  }
];
