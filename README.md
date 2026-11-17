# Tecnología Práctica

Web estática para `tecnologiapractica.com`, construida con Astro 5.

## Estado actual

- Web publicada en https://tecnologiapractica.com
- Repo público: https://github.com/zygovid/tecnologiapractica
- Cloudflare Pages: proyecto `tecnologiapractica`, despliegue activo https://6ac541c2.tecnologiapractica.pages.dev
- `www` redirige con 301 al dominio principal.
- Silo visible: **Electrónica básica** con 6 guías para principiantes.
- Los 10 artículos anteriores de automatización están como `draft: true` y fuera del sitemap; sus plantillas se conservan en `src/_archived/`.
- Las rutas antiguas `/automatizacion/*` redirigen a una página `noindex` mediante `public/_redirects`.
- Auto-deploy por Git no configurado: Cloudflare Pages devolvió el error `8000011` al conectar el repo. Los cambios se despliegan con Wrangler.

## Estructura

```
src/
  content/blog/           → artículos Markdown (6 visibles + 10 borradores)
  content.config.ts       → esquema con section, cover, coverAlt y draft
  lib/
    sections.ts           → configuración central de silos y navegación
    reading-time.ts       → cálculo de minutos de lectura
  assets/covers/          → portadas WebP originales
  layouts/                → BaseLayout (SEO, OG, JSON-LD) y ArticleLayout
  components/             → Header, Footer, CookieBanner, PostCard, Breadcrumbs
  pages/
    index.astro           → portada agrupada por sección
    electronica-basica/   → índice y plantilla [...slug].astro
    servicios.astro
    sobre-mi.astro
    aviso-legal.astro
    privacidad.astro
    cookies.astro
  _archived/              → plantillas antiguas de automatización (fuera de rutas)
  styles/global.css
public/
  images/diagrams/        → diagramas SVG originales
  robots.txt
  favicon.svg
```

## Contenido e imágenes

- Cada artículo visible usa `section: "electronica-basica"`, portada WebP y `coverAlt`.
- Las portadas se generan en `src/assets/covers/` y Astro las convierte a AVIF/WebP con `srcset`.
- Los diagramas SVG viven en `public/images/diagrams/` y se insertan con `<figure>` y `<figcaption>`.
- Todos los artículos incluyen JSON-LD `BlogPosting`, canonical, `og:image` y enlaces de retorno.
- GA4 permanece desactivado mientras `G-XXXXXXXXXX` siga sin sustituirse.

## Comandos

```sh
npm install      # instalar dependencias
npm run dev      # servidor local en http://localhost:4321
npm run build    → genera la web en dist/
npm run preview  # ver el build localmente
```

## Antes de publicar: datos que debes rellenar

 1. **Google Analytics 4**
    - Edita `src/layouts/BaseLayout.astro` y sustituye `G-XXXXXXXXXX` por tu ID real.
    - Mientras el placeholder siga ahí, el script de GA4 no se carga. Consent Mode v2 ya está preparado.


2. **Correo de contacto**
   - Aparece en `/servicios/`, `/aviso-legal/` y `/privacidad/`: `hola@tecnologiapractica.com`.
   - Créalo en Cloudflare (Email Routing) o redirígelo a tu Gmail.

3. **Datos del titular en el aviso legal**
   - Revisa `src/pages/aviso-legal.astro` y añade tus datos reales (nombre/NIF o la información que exija tu jurisdicción). **No es asesoramiento legal**: revisa la normativa aplicable.

## Revisión de artículos

Los 6 artículos visibles son nuevos y están pensados para principiantes:

- `11-multimetro-digital.md`
- `12-codigo-colores-resistencias.md`
- `13-soldadura-basica.md`
- `14-led-resistencia.md`
- `15-componentes-multimetro.md`
- `16-conectores-basicos.md`

Los 10 artículos de automatización siguen en `src/content/blog/` como borradores (`draft: true`). No se muestran ni entran en el sitemap. Para volver a publicarlos, cambia `draft` a `false`, devuelve las plantillas desde `src/_archived/automatizacion/` a `src/pages/automatizacion/` y añade `automatizacion` a `visibleSectionIds` en `src/lib/sections.ts`.

## Despliegue en Cloudflare Pages

### Estado real del despliegue

El proyecto ya está desplegado en Cloudflare Pages mediante direct upload. El intento de conectar GitHub desde Cloudflare falló con HTTP 401, código `8000011` (`There is an internal issue with your Cloudflare Pages Git installation...`), así que **no hay auto-deploy por Git** por ahora.

Para publicar cambios:

```sh
npm run build
npx wrangler pages deploy dist --project-name=tecnologiapractica --branch=master
```

Si quieres volver a intentar el auto-deploy, hazlo desde **Cloudflare → Workers & Pages → tecnologiapractica → Settings → Builds & deployments → Connect to Git** con:

- Build command: `npm run build`
- Build output directory: `dist`
- Node version: 22 o superior (variable `NODE_VERSION=22` si hace falta).

### Dominio y DNS

Ya configurado en Cloudflare:

- `tecnologiapractica.com` → `tecnologiapractica.pages.dev` (CNAME proxied).
- `www.tecnologiapractica.com` → `tecnologiapractica.pages.dev` (CNAME proxied).
- Page Rule de HTTPS forzado en `tecnologiapractica.com/*`.
- Page Rule 301 de `www.tecnologiapractica.com/*` a `https://tecnologiapractica.com/$1`.

## Google Search Console y AdSense

Una vez la web esté online:

1. Añade `tecnologiapractica.com` en Search Console (verificación por registro DNS o por archivo HTML).
2. Solicita AdSense cuando tengas las páginas legales y suficiente contenido.
3. Inserta el código de AdSense en `BaseLayout.astro` **solo después** de que el banner de consentimiento esté funcionando (ya está implementado Consent Mode v2).

## MCP configurados

El archivo `~/.config/opencode/opencode.jsonc` incluye los servidores MCP de GitHub y Cloudflare.

- Cloudflare MCP: conectado.
- GitHub MCP: falla con `Incompatible auth server: does not support dynamic client registration`; se usa GitHub CLI (`gh`) en su lugar.
