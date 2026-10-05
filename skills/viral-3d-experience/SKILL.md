---
name: viral-3d-experience
description: Master skill for creating viral, Awwwards Site of the Year, and Apple Pro Launch caliber 3D web experiences using Dual-Engine architectures (Canvas frame sequence scrubbing + Three.js WebGL PBR scenes), Lumafield CT scanning lenses, fluid particle physics, and procedural Web Audio API haptics.
---

# Viral 3D Web Experience & Industrial Simulator Skill

## When to Use This Skill
Activate this skill when:
1. The user explicitly requests "3D", "secuencia", "animación tipo video", "Awwwards", or viral web experiences.
2. The product is a **physical hardware flagship, consumer electronics, automotive, luxury horology, or industrial machinery** where 3D inspection adds massive emotional and commercial value.
3. **DO NOT USE** for standard text blogs, simple administrative tables, lightweight CRUD dashboards, or basic landing pages where 3D would introduce unnecessary weight.

---

## The 4 Master Pillars of Viral 3D Experiences

```
┌────────────────────────────────────────────────────────────────────────────────────────┐
│                                DUAL-ENGINE ARCHITECTURE                                │
├──────────────────────────────────────────┬─────────────────────────────────────────────┤
│         MOTOR A: CINEMÁTICA APPLE        │         MOTOR B: WEBGL THREE.JS PBR         │
│   Scrubbing fotograma a fotograma en     │   Escena 3D procedural interactiva          │
│   Canvas 2D con GSAP ScrollTrigger       │   con OrbitControls 360°, shaders y luces   │
└──────────────────────────────────────────┴─────────────────────────────────────────────┘
                                            │
            ┌───────────────────────────────┴───────────────────────────────┐
            ▼                                                               ▼
  [ ESCÁNER LUMAFIELD CT ]                                      [ HÁPTICOS WEB AUDIO API ]
  Lente de corte tomográfico dinámico                            Osciladores procedurales:
  que revela el interior termográfico/X-Ray                      micrómetros, servos y pings
```

---

## 1. Dual Engine Visual Architecture

### A. Apple-Style Canvas Sequence Scrubbing (Motor A)
- Usado para secuencias fotorrealistas de ultra-alta definición vinculadas al scroll del usuario.
- Elemento: `<canvas id="scrub-canvas">` con `object-fit: contain`.
- Interpolación en `requestAnimationFrame` cruzando fotogramas pre-renderizados o procedurales para transiciones continuas a 60 FPS sin saltos ni tirones de red.

### B. Motor 3D Interactivo en Tiempo Real (Motor B - Three.js PBR)
- Usado para rotación libre, shaders dinámicos y desensamble manual.
- Dependencias (CDNs):
  ```html
  <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/three@0.128.0/examples/js/controls/OrbitControls.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js"></script>
  ```
- **Luz de Inspección con Cursor 3D**:
  ```javascript
  const cursorLight = new THREE.PointLight(0xfff0e6, 2.5, 30);
  scene.add(cursorLight);
  window.addEventListener('mousemove', (e) => {
    const ndcX = (e.clientX / window.innerWidth) * 2 - 1;
    const ndcY = -(e.clientY / window.innerHeight) * 2 + 1;
    cursorLight.position.x = ndcX * 90;
    cursorLight.position.y = ndcY * 65;
    cursorLight.position.z = 85;
  });
  ```

---

## 2. Escáner Tomográfico de Corte Lumafield (Interactive CT Scan)
Una herramienta interactiva donde una lente circular dinámica corta el chasis exterior revelando los componentes internos:
```css
#ct-scanner-overlay {
  clip-path: circle(150px at var(--mouse-x) var(--mouse-y));
  background: rgba(59, 130, 246, 0.08);
  backdrop-filter: sepia(80%) hue-rotate(180deg) brightness(120%) contrast(150%);
  border: 1px solid rgba(59, 130, 246, 0.5);
}
```

---

## 3. Físicas de Partículas de Fluido 3D en Tiempo Real
Simulación de refrigerante líquido o flujo energético circulando por tuberías o circuitos:
```javascript
const splineCurve = new THREE.CatmullRomCurve3(controlPoints, true);
const particleCount = 200;
const particleGeo = new THREE.BufferGeometry();
const particlePositions = new Float32Array(particleCount * 3);
const particleOffsets = new Float32Array(particleCount);
for (let i = 0; i < particleCount; i++) {
  particleOffsets[i] = i / particleCount;
  const pt = splineCurve.getPoint(particleOffsets[i]);
  particlePositions[i * 3] = pt.x;
  particlePositions[i * 3 + 1] = pt.y;
  particlePositions[i * 3 + 2] = pt.z;
}
particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
const particleMat = new THREE.PointsMaterial({
  color: 0xF59E0B,
  size: 3.0,
  transparent: true,
  opacity: 0.95,
  blending: THREE.AdditiveBlending
});
const fluidParticles = new THREE.Points(particleGeo, particleMat);
scene.add(fluidParticles);

// En el loop animate():
for (let i = 0; i < particleCount; i++) {
  particleOffsets[i] = (particleOffsets[i] + flowSpeed) % 1;
  const pt = splineCurve.getPoint(particleOffsets[i]);
  posArray[i * 3] = pt.x;
  posArray[i * 3 + 1] = pt.y;
  posArray[i * 3 + 2] = pt.z;
}
fluidParticles.geometry.attributes.position.needsUpdate = true;
```

---

## 4. Modo Deep-Focus CAD con Raycasting 3D
Al hacer clic sobre cualquier pieza tridimensional:
1. `THREE.Raycaster` detecta el componente (`userData.partName`).
2. GSAP anima suavemente la posición de la cámara y el target orbital focalizándose en macro.
3. Se despliega una ficha técnica flotante con datos de tolerancias y aleación.
4. Se reproduce un sonido háptico de confirmación tipo sónar.
5. Se permite restablecer la vista con botón o tecla `ESC`.

---

## 5. Paisaje Sonoro Procedural Háptico (Web Audio API — Cero MP3s)
Cero archivos externos pesados ni retardos de carga. Síntesis matemática directa:
- **Micrometer Tick (Scroll)**: Onda cuadrada a 1050 Hz con caída de 0.015s.
- **Pneumatic Servo (Desensamble)**: Barrido descendente de 220 Hz a 58 Hz con onda senoidal.
- **Sonar Ping (Inspección)**: Onda senoidal de 880 Hz descendiendo a 440 Hz en 0.15s.
- **Pump/Motor Hum**: Zumbido sub-grave continuo modulado a 42 Hz.
