# HK Vision

Sitio corporativo multipagina para captar clientes en Santiago para instalacion de camaras, CCTV, ciberseguridad y desarrollo de software.

## Idioma del Proyecto

- Toda documentacion, comentarios de producto, textos visibles y archivos de planificacion deben escribirse en espanol por defecto.
- Usar ingles solo cuando sea necesario por nombres tecnicos, APIs, paquetes o convenciones del framework.

## Commands

- `npm run dev` - Iniciar el servidor de desarrollo cuando exista el proyecto Astro.
- `npm run build` - Ejecutar build de produccion.
- `npm run preview` - Previsualizar el build.
- `npm run lint` - Ejecutar lint si esta configurado.
- `npm test` - Ejecutar tests si estan configurados.

## Tech Stack

Astro 7 + TypeScript + Tailwind CSS v4 + Three.js + React islands + Vercel/Cloudflare Pages.

## Architecture

### Directory Structure

- `src/pages/` - Rutas publicas del sitio.
- `src/components/layout/` - Layout base, header y footer.
- `src/components/sections/` - Secciones principales del sitio.
- `src/components/ui/` - Componentes reutilizables de presentacion.
- `src/forms/` - Formulario interactivo.
- `src/data/` - Contenido estatico de servicios, sectores y SEO.
- `src/assets/3d/` - Logica de Three.js.
- `public/` - Imagenes, favicon y assets publicos.
- `outputs/` - Documentacion y blueprint del proyecto.

## Key Patterns

- Usar Astro para UI estatica y rapida.
- Usar React solo para islands con interactividad real.
- Mantener Three.js aislado, optimizado y con fallback.
- Centralizar textos repetidos en archivos de datos.
- Priorizar SEO local para Santiago.
- Mantener el sitio estatico hasta que exista una integracion real y segura para envio de formularios.

## Design System

- Colores: primary `#1B4F72`, primary-mid `#2E86C1`, accent `#3AAED8`, text `#2C3E50`, background `#FFFFFF`.
- Tipografia: Lexend para titulares, Source Sans 3 para cuerpo.
- Estilo: corporativo, elegante, tecnico y confiable.
- Animacion: sobria, intencional, respetando `prefers-reduced-motion`.

## Non-Negotiable Rules

1. El sitio debe mantenerse rapido y SEO-friendly.
2. Cada pagina debe tener un CTA claro para contactar a HK Vision.
3. La paleta HK debe mantenerse consistente.
4. El 3D debe reforzar seguridad y tecnologia; nunca bloquear contenido.
5. Mobile es prioridad para captacion de leads.
