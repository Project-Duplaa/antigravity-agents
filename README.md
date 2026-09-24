# Antigravity Multi-Agent & Skills Configuration

Este repositorio contiene la configuración completa del sistema multi-agente para **Antigravity**:

- **Reglas Globales (`AGENTS.md` / `GEMINI.md`)**: Protocolo de orquestación, reglas anti-slop, mandatos de realismo operativo y estándares visuales.
- **Agentes Especializados (`agents/`)**:
  - `orchestrator`: Orquestador principal.
  - `product`: Product Manager & UX Strategist.
  - `creative`: Director Creativo & Visual Discovery.
  - `designer`: UI/UX Designer & Motion Art Director.
  - `developer`: Senior Fullstack & AI Dev.
  - `architect`: Software Architect & ADRs.
  - `security`: DevSecOps & Threat Modeling.
  - `qa`: Lead QA & SDET.
  - `enhancer`: Code Reviewer & Quality Gate.
  - `documentation`: Knowledge Architect & Obsidian Curator.
- **Skills Especializadas (`skills/`)**:
  - `visual-craft-recipes`: Diccionarios de tokens CSS, blueprints de componentes y recetas de profundidad.
  - `design-brief-template`: Plantilla mandatoria pre-desarrollo.
  - `taste-skill`: Anti-slop frontend y reglas de layout/tipografía.
  - `anti-generic-premium-web-design`: Dirección de arte desde primeros principios.
  - `chameleon-motion-design`: 7 arquetipos visuales y coreografía de movimiento.
  - `senior-ui-rescue-anti-ai`: Rescate de interfaces genéricas.
  - `ultra-premium-web-experience`: Profundidad atmosférica y glassmorphism.
  - `antigravity-design-expert`: Animaciones espaciales y 3D CSS.
  - `obsidian-vault-craft`: Gestión de conocimiento en Obsidian.
  - Y más.
- **Integraciones (`mcp_config.json`)**: Servidores MCP (Iconify, etc.).

---

## Cómo restaurar en otro PC

1. Instalar Antigravity en la nueva máquina.
2. Clonar este repositorio dentro de la carpeta de configuración global de Gemini/Antigravity:
   - **Windows**: `C:\Users\<tu-usuario>\.gemini\config` (o la ruta correspondiente en tu disco).
   - **Linux / Mac**: `~/.gemini/config`.

```bash
git clone <URL_DEL_REPOSITORIO> ~/.gemini/config
```

3. Abrir Antigravity. El sistema detectará automáticamente todas las skills, agentes y reglas.
