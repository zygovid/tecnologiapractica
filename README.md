# Tecnología Práctica

Web estática para `tecnologiapractica.com`, construida con Astro 5.

## Estado actual

- Web publicada en https://tecnologiapractica.com
- Repo público: https://github.com/zygovid/tecnologiapractica
- Cloudflare Pages: proyecto `tecnologiapractica` (Direct Upload), dominio principal activo.
- `www` redirige con 301 al dominio principal.
- Silo visible: **Electrónica básica** con 12 guías para principiantes y una ruta de aprendizaje.
- Los 10 artículos anteriores de automatización están como `draft: true` y fuera del sitemap; sus plantillas se conservan en `src/_archived/`.
- Las rutas antiguas `/automatizacion/*` redirigen a una página `noindex` mediante `public/_redirects`.
- Auto-deploy con GitHub Actions (`.github/workflows/deploy.yml`). Cloudflare Pages sigue siendo un proyecto Direct Upload; el workflow compila y despliega con Wrangler.
- GA4 activo con el ID de medición `G-C0MP2F89KS` y Consent Mode v2 (denegado hasta aceptar cookies).
- El consentimiento se puede reabrir desde el footer y desde la política de cookies para cambiar la elección.
- SEO técnico: `WebSite`/`BlogPosting`/`BreadcrumbList` JSON-LD, 404 personalizada, cabeceras de seguridad en `public/_headers` y enlazado interno entre guías.
- Correo `hola@tecnologiapractica.com` activo con Cloudflare Email Routing: reenvía a un correo privado. Solo recepción; las respuestas salen desde esa cuenta personal.

## Estructura

```
src/
  content/blog/           → artículos Markdown (12 visibles + 10 borradores)
  content.config.ts       → esquema con section, cover, coverAlt y draft
  lib/
    legal.ts              → datos del titular usados en las páginas legales
    sections.ts           → configuración central de silos y navegación
    reading-time.ts       → cálculo de minutos de lectura
  assets/covers/          → portadas WebP originales
  layouts/                → BaseLayout (SEO, OG, JSON-LD) y ArticleLayout
  components/             → Header, Footer, CookieBanner, PostCard, Breadcrumbs
  pages/
    404.astro             → página no encontrada
    index.astro           → portada agrupada por sección
    electronica-basica/   → índice con ruta de aprendizaje y plantilla [...slug].astro
    servicios.astro
    sobre-mi.astro
    contacto.astro
    aviso-legal.astro
    privacidad.astro
    cookies.astro
  _archived/              → plantillas antiguas de automatización (fuera de rutas)
  styles/global.css
public/
  images/diagrams/        → diagramas SVG originales
  _headers                → cabeceras de seguridad de Cloudflare Pages
  robots.txt
  favicon.svg
```

## Contenido e imágenes

- Cada artículo visible usa `section: "electronica-basica"`, portada WebP y `coverAlt`.
- Las portadas se generan en `src/assets/covers/` y Astro las convierte a AVIF/WebP con `srcset`.
- Los diagramas SVG viven en `public/images/diagrams/` y se insertan con `<figure>` y `<figcaption>`.
- Todos los artículos incluyen JSON-LD `BlogPosting`, canonical, `og:image` y enlaces de retorno.
- La analítica solo se activa después de aceptar las cookies (Consent Mode v2).

## Comandos

```sh
npm install      # instalar dependencias
npm run dev      # servidor local en http://localhost:4321
npm run build    # genera la web en dist/
npm run preview  # ver el build localmente
```

## Configuración pendiente

1. **Datos del titular**
   - Rellena `src/lib/legal.ts` con nombre o razón social, NIF/CIF, domicilio y, opcionalmente, teléfono. Se usan en `aviso-legal.astro` y `privacidad.astro`.
   - Mientras estén vacíos, el aviso legal mantiene un texto genérico y no cumple por completo el artículo 10 de la LSSI.
2. **Search Console**
   - Crear la propiedad de dominio `tecnologiapractica.com` y verificar con un TXT en Cloudflare.
   - Enviar `https://tecnologiapractica.com/sitemap-index.xml`.
3. **AdSense**
   - No hay código de AdSense, `ads.txt` ni CMP certificada todavía.
   - Solicitar AdSense cuando estén completos los datos legales y haya más contenido.
4. **CMP y cookies**
   - El banner actual usa Consent Mode v2, pero no es una CMP certificada por Google para tráfico del EEE/Reino Unido. Habrá que integrar una antes de servir anuncios en esas regiones.

## Revisión de artículos

Los 12 artículos visibles están pensados para principiantes:

- `11-multimetro-digital.md`
- `12-codigo-colores-resistencias.md`
- `13-soldadura-basica.md`
- `14-led-resistencia.md`
- `15-componentes-multimetro.md`
- `16-conectores-basicos.md`
- `17-ley-de-ohm.md`
- `18-resistencias-serie-paralelo.md`
- `19-protoboard.md`
- `20-medir-corriente-multimetro.md`
- `21-condensadores.md`
- `22-pulsadores-pull-up-pull-down.md`

Los 10 artículos de automatización siguen en `src/content/blog/` como borradores (`draft: true`). No se muestran ni entran en el sitemap. Para volver a publicarlos, cambia `draft` a `false`, devuelve las plantillas desde `src/_archived/automatizacion/` a `src/pages/automatizacion/` y añade `automatizacion` a `visibleSectionIds` en `src/lib/sections.ts`.

## Despliegue en Cloudflare Pages

### Auto-deploy con GitHub Actions

El despliegue se ejecuta con `.github/workflows/deploy.yml` en cada push a `master`:

- Node 22 y `npm ci`.
- `npm run build`.
- `npx wrangler pages deploy dist --project-name=tecnologiapractica --branch=master`.

Requiere el secreto de repositorio `CLOUDFLARE_API_TOKEN` con permiso **Cuenta → Cloudflare Pages → Editar**. El `account_id` va en el workflow.

### Despliegue manual (fallback)

```sh
npm run build
npx wrangler pages deploy dist --project-name=tecnologiapractica --branch=master
```

La primera vez habrá que autenticarse con `wrangler login`.

### Git integration

El proyecto actual se creó con Direct Upload y Cloudflare no permite convertirlo a Git integration. No hay que recrear el proyecto ni mover el dominio: el auto-deploy queda cubierto con GitHub Actions.

### Dominio y DNS

Ya configurado en Cloudflare:

- `tecnologiapractica.com` → `tecnologiapractica.pages.dev` (CNAME proxied).
- `www.tecnologiapractica.com` → `tecnologiapractica.pages.dev` (CNAME proxied).
- Page Rule de HTTPS forzado en `tecnologiapractica.com/*`.
- Page Rule 301 de `www.tecnologiapractica.com/*` a `https://tecnologiapractica.com/$1`.

## Google Search Console y AdSense

Estado actual: la web está online, el sitemap responde 200 y `robots.txt` lo referencia. Search Console sigue pendiente de verificación y AdSense no está integrado.

1. Añade `tecnologiapractica.com` en Search Console como propiedad de dominio y verifica con el TXT que proporcione Google.
2. Envía `https://tecnologiapractica.com/sitemap-index.xml`.
3. Completa `src/lib/legal.ts` y revisa las páginas legales antes de solicitar AdSense.
4. Solicita AdSense cuando haya suficiente contenido original.
5. Antes de activar anuncios: añade `public/ads.txt` con el ID de editor, integra una CMP certificada y coloca el código de AdSense solo después del consentimiento.

## MCP configurados

El archivo `~/.config/opencode/opencode.jsonc` incluye los servidores MCP de GitHub y Cloudflare.

- Cloudflare MCP: conectado (OAuth).
- GitHub MCP: conectado mediante un token de GitHub en la variable `GITHUB_PERSONAL_ACCESS_TOKEN`, enviado en la cabecera `Authorization` y con `oauth: false`, porque el servidor remoto no admite registro dinámico de clientes.
