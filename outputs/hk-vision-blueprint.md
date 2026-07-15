# HK Vision - Codex Blueprint

> Generado por The Architect el 2026-07-06  
> Arquetipo: Marketing / Landing Page corporativa multipagina

## 1. Project Overview

### Vision
HK Vision sera un sitio corporativo en espanol para captar clientes en Santiago que necesiten instalacion de camaras de seguridad, CCTV, ciberseguridad y desarrollo de software. La web debe comunicar confianza, capacidad tecnica y respuesta rapida para casas, condominios, empresas y bodegas.

### Goals
- Convertir visitantes en consultas por WhatsApp, telefono, correo y formulario.
- Posicionar a HK Vision en Santiago para busquedas de camaras de seguridad, CCTV, ciberseguridad y software.
- Presentar los servicios con una imagen corporativa elegante, tecnologica y creible.
- Usar animaciones 3D de forma sobria para elevar percepcion de marca sin afectar rendimiento.

### Success Metrics
- Clicks en WhatsApp, telefono y correo.
- Formularios enviados correctamente.
- Buen rendimiento movil: Lighthouse Performance 90+, SEO 90+, Accessibility 90+.
- Indexacion correcta de las paginas principales en Google Search Console.

## 2. Tech Stack

| Layer | Technology | Why |
| --- | --- | --- |
| Framework | Astro 7 | Excelente para sitios corporativos rapidos, SEO, paginas estaticas y bajo JavaScript inicial. Se actualizo desde Astro 5 por alertas de seguridad en dependencias. |
| Language | TypeScript | Seguridad de tipos y mantenimiento mas claro. |
| Styling | Tailwind CSS v4 | Design tokens consistentes, responsive rapido y buen control visual. |
| Components | Astro components + React islands puntuales | Astro para paginas estaticas; React solo donde haya interactividad real. |
| 3D | Three.js en una island React o vanilla module | Permite hero 3D premium con carga controlada y fallback. |
| Forms | Formulario estatico con mailto en v1 | Evita backend simulado y dependencias server innecesarias hasta configurar un proveedor real. |
| Database | N/A en v1 | El sitio no necesita persistencia propia al inicio. |
| ORM | N/A | Sin base de datos en v1. |
| Auth | N/A | No hay login ni panel privado. |
| Payments | N/A | No se vendera online en v1. |
| Hosting | Vercel o Cloudflare Pages | Deploy estatico simple, CDN, preview deployments y dominio personalizado. |
| Package Manager | npm | Suficiente y simple para este proyecto. |

## 3. Directory Structure

```text
hk-vision/
  AGENTS.md
  astro.config.mjs
  package.json
  tsconfig.json
  public/
    favicon.svg
    images/
      logo-hk-vision.svg
      og-image.jpg
      service-cctv.webp
      service-cybersecurity.webp
      service-software.webp
  src/
    assets/
      3d/
        security-scene.ts
    components/
      layout/
        BaseLayout.astro
        Header.astro
        Footer.astro
      sections/
        Hero3D.astro
        ServicesOverview.astro
        SectorGrid.astro
        ProcessSteps.astro
        TrustBand.astro
        ContactCTA.astro
      ui/
        Button.astro
        ContactCard.astro
        ServiceCard.astro
        SectionHeader.astro
      forms/
        ContactForm.tsx
      contact/
        FloatingWhatsApp.astro
    data/
      services.ts
      sectors.ts
      seo.ts
    pages/
      index.astro
      servicios.astro
      instalacion-camaras-cctv.astro
      ciberseguridad.astro
      desarrollo-software.astro
      sectores.astro
      nosotros.astro
      contacto.astro
      404.astro
    styles/
      globals.css
```

## 4. Data Model

No hay base de datos en la primera version. El contenido sera estatico y versionado en el repositorio.

### Content Entities

**Service**

| Field | Type | Notes |
| --- | --- | --- |
| slug | string | URL interna del servicio. |
| title | string | Nombre visible del servicio. |
| summary | string | Resumen para tarjetas y SEO. |
| benefits | string[] | Beneficios principales. |
| sectors | string[] | Sectores donde aplica. |
| ctaLabel | string | Texto del CTA. |

**Sector**

| Field | Type | Notes |
| --- | --- | --- |
| slug | string | Identificador. |
| title | string | Casas, condominios, empresas, bodegas. |
| painPoints | string[] | Problemas comunes del cliente. |
| recommendedServices | string[] | Servicios relacionados. |

### Schema

No aplica SQL/ORM. Usar archivos TypeScript en `src/data/`.

## 5. API Design

| Method | Path | Description | Auth |
| --- | --- | --- | --- |
| N/A | N/A | En v1 no hay API. El formulario prepara un correo `mailto:` y se debe conectar a un proveedor real antes de prometer envio automatico. | Public |

### Critical Endpoint Details

Request body:

```json
{
  "name": "Nombre",
  "email": "cliente@dominio.cl",
  "phone": "+569...",
  "service": "CCTV",
  "message": "Necesito cotizar..."
}
```

Validation:
- `name`: requerido, 2-80 caracteres.
- `email`: requerido si no hay telefono.
- `phone`: requerido si no hay email.
- `service`: requerido, valor permitido.
- `message`: requerido, 10-1000 caracteres.
- Honeypot oculto para spam.

Response:
- `200`: mensaje enviado.
- `400`: datos invalidos.
- `429`: demasiados intentos si se agrega rate limiting.
- `500`: error de envio.

## 6. Frontend Architecture

### Routes

| Route | Page | Description |
| --- | --- | --- |
| / | Inicio | Hero 3D, propuesta de valor, servicios, sectores, proceso y CTA. |
| /servicios | Servicios | Vista general de servicios. |
| /instalacion-camaras-cctv | Instalacion Camaras/CCTV | Pagina SEO para camaras y CCTV en Santiago. |
| /ciberseguridad | Ciberseguridad | Servicios de proteccion digital para empresas. |
| /desarrollo-software | Desarrollo Software | Desarrollo de software a medida e integraciones. |
| /sectores | Sectores | Casas, condominios, empresas y bodegas. |
| /nosotros | Nosotros | Historia, enfoque, confianza y forma de trabajo. |
| /contacto | Contacto | Formulario, WhatsApp, telefono, correo y zona de atencion. |

### Component Hierarchy

```text
BaseLayout
  Header
  main
    Page sections
  Footer
  FloatingWhatsApp

index.astro
  Hero3D
  ServicesOverview
  SectorGrid
  ProcessSteps
  TrustBand
  ContactCTA

contacto.astro
  SectionHeader
  ContactForm
  ContactCard list
```

### State Management

- No estado global.
- Formulario con React Hook Form + validacion local.
- El hero 3D debe hidratarse solo en cliente y solo cuando entre en viewport.
- Respetar `prefers-reduced-motion`: mostrar fallback estatico y reducir animaciones.

## 7. Design System

### Colors

| Role | Hex | Usage |
| --- | --- | --- |
| Primary | `#1B4F72` | Autoridad, headers, fondos fuertes, elementos de confianza. |
| Primary Mid | `#2E86C1` | Botones primarios, links activos, CTAs. |
| Accent | `#3AAED8` | Brillos tecnologicos, detalles 3D, estados hover. |
| Text | `#2C3E50` | Texto principal. |
| Background | `#FFFFFF` | Fondo base. |
| Surface | `#F6FAFD` | Secciones alternadas y superficies suaves. |
| Border | `#D8E6EF` | Separadores, tarjetas, campos. |
| Muted Text | `#5D6D7E` | Texto secundario. |
| Success | `#1E8E5A` | Confirmaciones de formulario. |
| Destructive | `#C0392B` | Errores de formulario. |

### Typography

Recomendacion principal: **Lexend para titulares + Source Sans 3 para cuerpo**.

Razon:
- Lexend transmite claridad, seguridad y accesibilidad.
- Source Sans 3 es sobria, legible y profesional para textos largos.
- La combinacion se siente mas corporativa y menos generica que Poppins/Open Sans.

CSS import:

```css
@import url('https://fonts.googleapis.com/css2?family=Lexend:wght@400;500;600;700&family=Source+Sans+3:wght@400;500;600;700&display=swap');
```

Scale:

| Role | Size | Weight | Line Height |
| --- | --- | --- | --- |
| Hero | clamp(2.5rem, 5vw, 4.75rem) | 700 | 1.05 |
| h1 | clamp(2.25rem, 4vw, 4rem) | 700 | 1.1 |
| h2 | clamp(1.875rem, 3vw, 3rem) | 600 | 1.15 |
| h3 | 1.5rem | 600 | 1.3 |
| Body | 1rem | 400 | 1.65 |
| Small | 0.875rem | 500 | 1.5 |

Alternative if a more familiar look is desired:
- Poppins headings + Open Sans body.

Avoid:
- Monospace como fuente principal.
- Estilo hacker verde/negro.
- Serif de lujo tipo editorial para este rubro.

### Layout and Components

- Estilo: Swiss Modernism 2.0 adaptado a seguridad corporativa.
- Layout: grillas limpias, mucho aire, secciones con jerarquia clara.
- Radius: 8px maximo en tarjetas y botones.
- Shadows: sutiles, no decorativas.
- Buttons: primario azul medio, secundario outline azul oscuro.
- Icons: Lucide o SVG consistentes; no emojis.
- Animacion UI: 150-300ms, transform/opacity, sin animar width/height.
- 3D: hero abstracto con escudo/red/cobertura, usando azules HK.

## 8. Authentication and Authorization

No aplica en v1. El sitio es publico y sin cuentas de usuario.

### Roles and Permissions

| Role | Can Do |
| --- | --- |
| Visitante | Navegar, hacer clic en canales de contacto y enviar formulario. |
| Administrador tecnico | Editar contenido desde el repositorio y desplegar cambios. |

## 9. Build Order

**Step 1: Project Scaffolding**

```bash
npm create astro@latest . -- --template basics --typescript strict
npm install
npm run dev
```

Verification:
- El sitio abre localmente.
- TypeScript estricto activo.

**Step 2: Tailwind and Global Styles**

```bash
npx astro add tailwind
```

Crear `src/styles/globals.css` con tokens de color, tipografia, spacing y focus states.

Verification:
- Los estilos globales cargan en `BaseLayout`.

**Step 3: Base Layout**

Crear:
- `src/components/layout/BaseLayout.astro`
- `src/components/layout/Header.astro`
- `src/components/layout/Footer.astro`
- `src/components/contact/FloatingWhatsApp.astro`

Verification:
- Navegacion visible en desktop y mobile.
- Footer contiene telefono, correo, WhatsApp, servicios y zona Santiago.

**Step 4: Content Data**

Crear:
- `src/data/services.ts`
- `src/data/sectors.ts`
- `src/data/seo.ts`

Verification:
- Las paginas consumen datos compartidos sin duplicar textos criticos.

**Step 5: Landing Page**

Crear secciones:
- `Hero3D`
- `ServicesOverview`
- `SectorGrid`
- `ProcessSteps`
- `TrustBand`
- `ContactCTA`

Verification:
- La home comunica en 5 segundos: que hace HK Vision, para quien y como contactar.

**Step 6: 3D Hero**

Instalar:

```bash
npm install three
npm install -D @types/three
```

Implementar una escena liviana:
- Fondo claro.
- Escudo abstracto o red de nodos.
- Lineas de cobertura y puntos conectados.
- Movimiento lento y elegante.
- Pausar/reducir con `prefers-reduced-motion`.
- Fallback estatico si WebGL falla.

Verification:
- No hay canvas en blanco.
- La escena no tapa el texto ni los CTAs.
- En mobile no produce scroll horizontal ni jank.

**Step 7: Service Pages**

Crear:
- `/servicios`
- `/instalacion-camaras-cctv`
- `/ciberseguridad`
- `/desarrollo-software`

Verification:
- Cada pagina tiene h1 unico, descripcion SEO, CTA visible y contenido orientado a Santiago.

**Step 8: Sector and About Pages**

Crear:
- `/sectores`
- `/nosotros`

Verification:
- Sectores explica casos para casas, condominios, empresas y bodegas.
- Nosotros refuerza confianza, metodologia y cercania.

**Step 9: Contact Page and Form**

Instalar:

```bash
npm install react react-dom @astrojs/react react-hook-form zod
npx astro add react
```

Crear:
- `src/forms/ContactForm.tsx`

Verification:
- Validacion clara.
- Estados success/error.
- Inputs con labels visibles.
- Botones de WhatsApp, telefono y correo funcionando.

**Step 10: Email Delivery futura**

No implementar backend simulado. Cuando existan dominio y correo real, agregar proveedor de email.

Opcion recomendada futura:

```bash
npm install resend
```

Variables:
- `RESEND_API_KEY`
- `CONTACT_TO_EMAIL`
- `CONTACT_FROM_EMAIL`

Verification futura:
- Formulario envia correo de prueba.
- No se exponen secretos al cliente.

**Step 11: SEO**

Agregar:
- Titles y descriptions por pagina.
- Open Graph.
- Canonical.
- Sitemap con `@astrojs/sitemap`.
- JSON-LD `LocalBusiness` / `ProfessionalService`.

Command:

```bash
npx astro add sitemap
```

Verification:
- Metadatos correctos por ruta.
- Sitemap generado en build.

**Step 12: Accessibility and Motion**

Verificar:
- Contraste AA.
- Focus visible.
- Navegacion por teclado.
- `prefers-reduced-motion`.
- Alt text en imagenes.

Verification:
- No hay icon-only buttons sin `aria-label`.
- Formularios tienen labels y mensajes asociados.

**Step 13: Responsive QA**

Probar en:
- 375px mobile.
- 768px tablet.
- 1024px laptop.
- 1440px desktop.

Verification:
- Sin horizontal scroll.
- Textos no se superponen.
- Header y CTAs son usables con touch.

**Step 14: Production Build**

```bash
npm run build
npm run preview
```

Verification:
- Build sin errores.
- Preview muestra todas las rutas.

**Step 15: Deploy**

Vercel:

```bash
npm install -g vercel
vercel
vercel --prod
```

Cloudflare Pages:
- Conectar repo.
- Build command: `npm run build`.
- Output directory: `dist`.

Verification:
- Dominio configurado.
- HTTPS activo.
- Formulario funciona en produccion.

## 10. Environment Setup

### Prerequisites
- Node.js 20+.
- npm 10+.
- Cuenta en Vercel o Cloudflare Pages.
- Dominio propio si ya existe.
- Cuenta Resend si se usara formulario con email.

### Environment Variables

| Variable | Description | Where to Get |
| --- | --- | --- |
| `PUBLIC_SITE_URL` | URL publica del sitio para canonical/OG. | Dominio final. |
| `RESEND_API_KEY` | API key para envio de correos. | Resend dashboard. |
| `CONTACT_TO_EMAIL` | Correo receptor de leads. | HK Vision. |
| `CONTACT_FROM_EMAIL` | Correo remitente validado. | Dominio verificado en Resend. |
| `PUBLIC_WHATSAPP_NUMBER` | Numero WhatsApp en formato internacional. | HK Vision. |
| `PUBLIC_PHONE_NUMBER` | Telefono visible. | HK Vision. |
| `PUBLIC_CONTACT_EMAIL` | Correo visible. | HK Vision. |

### Initial Commands

```bash
npm install
npm run dev
npm run build
```

## 11. Dependencies

| Package | Type | Purpose |
| --- | --- | --- |
| `astro` | runtime | Framework principal. |
| `typescript` | dev | Tipado estricto. |
| `tailwindcss` | runtime/dev | Estilos y tokens. |
| `three` | runtime | Animacion 3D del hero. |
| `@types/three` | dev | Tipos para Three.js. |
| `@astrojs/react` | runtime | Island interactiva del formulario. |
| `react` | runtime | Formulario interactivo. |
| `react-dom` | runtime | Render React island. |
| `react-hook-form` | runtime | Manejo del formulario. |
| `zod` | runtime | Validacion de datos. |
| `resend` | runtime | Envio de correo. |
| `@astrojs/sitemap` | runtime | Sitemap SEO. |

## 12. Deployment Strategy

Recommended path:
- Deploy inicial en Vercel por simplicidad y previews.
- Produccion desde branch `main`.
- Preview deployments para cada branch/PR.
- Variables de entorno gestionadas desde dashboard.
- Dominio personalizado con HTTPS automatico.

Rollback:
- Usar historial de deployments de Vercel/Cloudflare.
- Mantener cambios pequenos y verificables.

Security headers:
- Agregar headers de seguridad si la plataforma lo permite.
- No exponer API keys al cliente.
- Validar y sanitizar formulario.

## 13. Testing Strategy

### Build and Static Checks
- `npm run build` antes de considerar listo.
- Revisar consola del navegador sin errores.

### Manual E2E
- Home carga y CTA WhatsApp abre link correcto.
- Telefono inicia llamada en mobile.
- Correo abre mailto.
- Formulario valida campos y envia.
- Todas las rutas del menu funcionan.

### Visual QA
- Revisar 375px, 768px, 1024px, 1440px.
- Verificar que el 3D no tape contenido.
- Verificar fallback/reduced-motion.

### Accessibility
- Navegar con teclado.
- Focus visible.
- Labels en formulario.
- Contraste AA.

### SEO
- H1 unico por pagina.
- Titles y descriptions especificos.
- Sitemap generado.
- JSON-LD valido.
- OG image definida.

## 14. Codex Skills and Tools to Use During Build

| Capability | When to Use | Why |
| --- | --- | --- |
| `the-architect` | Ya usado para blueprint y decisiones iniciales. | Evita improvisar arquitectura y scope. |
| `ui-ux-pro-max` | Al definir sistema visual, tipografia, accesibilidad y responsive. | Mantiene una UI profesional y consistente. |
| `design-taste-frontend` | Durante implementacion visual de paginas y secciones. | Ayuda a evitar una landing generica. |
| `emil-design-eng` | Al pulir microinteracciones y motion. | Eleva detalles de interaccion y transiciones. |
| `vercel:agent-browser-verify` or `browser:control-in-app-browser` if available | Despues de levantar dev server. | Verificar visualmente layout, consola y responsive. |
| `vercel:deployments-cicd` if using Vercel | Al preparar deploy. | Mantener buenas practicas de despliegue. |
| `codex-security:security-scan` if authorized | Antes de agregar backend real o integraciones de correo. | Revisar riesgos de formularios, secretos y validacion. |

## 15. AGENTS.md for Target Project

```markdown
# HK Vision

Sitio corporativo multipagina para captar clientes en Santiago para instalacion de camaras, CCTV, ciberseguridad y desarrollo de software.

## Commands

- `npm run dev` - Start the development server.
- `npm run build` - Run a production build.
- `npm run preview` - Preview the production build.
- `npm run lint` - Run lint checks if configured.
- `npm test` - Run the test suite if configured.

## Tech Stack

Astro 7 + TypeScript + Tailwind CSS v4 + Three.js + React islands + Vercel/Cloudflare Pages.

## Architecture

### Directory Structure

- `src/pages/` - Public routes for the site.
- `src/components/layout/` - Base layout, header and footer.
- `src/components/sections/` - Page sections such as hero, services, sectors and CTA.
- `src/components/ui/` - Reusable presentational components.
- `src/forms/` - Interactive React contact form.
- `src/data/` - Static content for services, sectors and SEO metadata.
- `src/assets/3d/` - Three.js scene logic.
- `public/` - Static images, favicon and OG assets.

### Data Flow

Most content is static and loaded from TypeScript data files. The contact form validates in the client and prepares a `mailto:` message in v1. Add a real backend/email provider only when domain and sender configuration exist.

### Key Patterns

- Use Astro components for static UI.
- Use React only for interactive islands such as the contact form.
- Keep Three.js isolated from layout and provide fallback for reduced motion or WebGL failure.
- Keep all service/sector copy reusable in `src/data/`.

## Code Organization Rules

1. Do not duplicate service names, contact data or SEO metadata across pages; use shared data files.
2. Do not add client JavaScript unless a section genuinely needs interactivity.
3. Keep 3D code isolated and lazy-loaded.
4. Prefer semantic HTML and accessible controls.
5. Keep components small, named by purpose and colocated by role.

## Design System

- Colors: primary `#1B4F72`, primary-mid `#2E86C1`, accent `#3AAED8`, text `#2C3E50`, background `#FFFFFF`, surface `#F6FAFD`.
- Typography: Lexend for headings, Source Sans 3 for body.
- Spacing: 4/8px rhythm, generous section spacing for a corporate site.
- Radius: 8px maximum for buttons/cards unless a component requires less.
- Interaction style: smooth hover/focus transitions, visible focus rings, no layout-shifting animations.
- 3D style: abstract security shield/network/camera coverage using HK blue palette, not hacker green.

## Environment Variables

| Variable | Description |
| --- | --- |
| `PUBLIC_SITE_URL` | Public production URL. |
| `RESEND_API_KEY` | Email provider API key. |
| `CONTACT_TO_EMAIL` | Recipient for leads. |
| `CONTACT_FROM_EMAIL` | Verified sender email. |
| `PUBLIC_WHATSAPP_NUMBER` | Visible WhatsApp number. |
| `PUBLIC_PHONE_NUMBER` | Visible phone number. |
| `PUBLIC_CONTACT_EMAIL` | Visible contact email. |

## Verification

- Run `npm run build` before considering work complete.
- For frontend changes, verify 375px, 768px, 1024px and 1440px.
- Inspect browser console after visual changes.
- Verify WhatsApp, phone, email and form flows.
- Test reduced motion behavior when touching 3D or animations.

## Non-Negotiable Rules

1. The site must remain fast and SEO-friendly; avoid SPA-style architecture.
2. Every page needs a clear CTA to contact HK Vision.
3. The brand palette must stay anchored in HK blues, dark gray and white.
4. 3D must be elegant, purposeful and optional; never block content or conversion.
5. Mobile experience is primary for lead capture.
```

## 16. Non-Negotiable Rules

1. No convertir el sitio en SPA pesada; Astro estatico primero.
2. Cada pagina debe tener un CTA claro a WhatsApp/formulario/telefono.
3. Mantener paleta HK: azules, gris oscuro y blanco.
4. El 3D debe reforzar seguridad/tecnologia; no debe ser decoracion lenta.
5. SEO local para Santiago debe estar presente en copy, metadata y estructura.
6. Todos los canales de contacto deben estar disponibles y probados.
7. Accesibilidad: contraste AA, teclado, labels y reduced motion.
8. No usar estetica hacker verde/negra como estilo principal.

## Acceptance Checklist

- [ ] Proyecto corre localmente con `npm run dev`.
- [ ] Build productivo funciona con `npm run build`.
- [ ] Home y paginas internas cargan sin errores.
- [ ] Hero 3D carga, tiene fallback y respeta reduced motion.
- [ ] Menu funciona en desktop y mobile.
- [ ] WhatsApp, telefono, correo y formulario funcionan.
- [ ] Cada pagina tiene title, description, h1 y CTA.
- [ ] Sitio es responsive en 375px, 768px, 1024px y 1440px.
- [ ] Lighthouse Performance, SEO y Accessibility sobre 90.
- [ ] Deploy probado con dominio y HTTPS.
