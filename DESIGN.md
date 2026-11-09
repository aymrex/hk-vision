# Sistema visual HK Vision

## Direccion

Marca corporativa técnica y serena para servicios de seguridad e informática. La paleta toma como referencia el escudo de HK de las imágenes entregadas: grafito, azul profundo y teal. Fondos blancos y gris hielo mantienen legibilidad y dan espacio al logo.

## Colores

| Token | Valor | Uso |
|---|---|---|
| `hk-primary` | `#185490` | Acciones principales, títulos y superficies de marca |
| `hk-primary-mid` | `#186C9C` | Enlaces y controles destacados |
| `hk-accent` | `#24A8B4` | Acento teal, foco y detalles tecnológicos |
| `hk-teal-bright` | `#30B4B4` | Brillos y detalles de la ilustración |
| `hk-text` | `#24303C` | Texto principal |
| `hk-muted` | `#53636D` | Texto secundario sobre fondos claros |
| `hk-surface` | `#F4FAFA` | Superficies suaves |
| `hk-border` | `#D7E5E8` | Bordes y separadores |
| `white` | `#FFFFFF` | Fondo base y contraste |

## Tipografia

- Titulares: Lexend, 600-700.
- Cuerpo: Source Sans 3, 400-600.
- Cuerpo base: 16px con interlineado amplio.
- Títulos con `text-wrap: balance` y sin tracking negativo agresivo.

## Composicion

- Contenedor principal máximo de 1120px y gutters responsivos.
- Ritmo de espaciado basado en múltiplos de 4/8px.
- Radios pequeños, hasta 8px en tarjetas y controles.
- Usar tarjetas para unidades comparables, no como envoltorio de cada sección.
- En móvil, apilar el hero y mantener visibles los CTA principales.

## Interaccion y movimiento

- Transiciones breves de color y desplazamiento sin alterar el layout.
- El hero 3D carga de forma diferida, se pausa fuera de pantalla y reduce calidad en móvil.
- Con `prefers-reduced-motion`, mostrar la escena estática sin bucle de animación.
- Mantener foco visible y controles táctiles de al menos 44px.

## Logo e imagen

- Usar `public/images/logo-hk-reference.png`, recorte derivado de la imagen de referencia recibida.
- La imagen es un mockup fotográfico recortado, no el archivo maestro del logo. Reemplazarla por el original transparente/vectorial cuando esté disponible.
- Mantener proporción, fondo blanco alrededor y espacio de protección; no recrear letras o símbolo con texto HTML.
