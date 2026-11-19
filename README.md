# Tecnología Práctica

Sitio web de divulgación técnica en español sobre electrónica básica, montado con Astro y desplegado como sitio estático.

## Dominio y despliegue

- Dominio de producción: https://tecnologiapractica.com
- Repositorio: https://github.com/zygovid/tecnologiapractica
- Hosting: Cloudflare Pages (proyecto `tecnologiapractica`)
- Salida: estática (`dist/`)
- Deploy: automático con cada push a `master` mediante GitHub Actions (Direct Upload)

## Stack

- [Astro 5](https://astro.build)
- [@astrojs/sitemap](https://docs.astro.build/en/guides/integrations-guide/sitemap/)
- [sharp](https://sharp.pixelplumbing.com/) para optimización de imágenes
- Node.js 20 en CI

## Estructura

```
src/
  assets/covers/          Portadas de artículos (WebP 1200×630)
  components/             Header, Footer, SEO, Breadcrumbs, CookieBanner, ArticleRow
  content/blog/           Artículos en Markdown con frontmatter tipado
  layouts/                Plantillas base y de artículo
  lib/                    Utilidades (fechas, secciones, lectura, formularios)
  pages/                  Rutas del sitio
  styles/global.css       Estilos globales
public/                   Favicon, robots.txt, imágenes y diagramas
.github/workflows/        Pipeline de deploy
astro.config.mjs
```

## Contenido

- **30 artículos visibles** (24 guías + 6 proyectos) en la categoría Electrónica básica.
- 10 borradores (`draft: true`) no publicados, excluidos de rutas, colecciones y sitemap.
- **Portada de sección** (`/electronica-basica/`): acceso rápido (3 guías esenciales), ruta de aprendizaje por 4 módulos, proyectos agrupados y exploración por temas.
- **Índice por temas** (`/electronica-basica/articulos/`): listado agrupado en herramientas y medida, fundamentos, componentes, montaje y control, alimentación y energía, y proyectos.
- Páginas estáticas: inicio, sobre mí, servicios, contacto (formulario + correo + WhatsApp), privacidad, cookies, aviso legal, 404.

## Comandos

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # genera dist/
npm run preview  # previsualiza dist/
```

## SEO y cumplimiento

- Meta description, canonical, Open Graph, Twitter Card y JSON-LD por página/artículo.
- `BreadcrumbList` y `Article` en artículos, `ContactPage` en contacto.
- `sitemap-index.xml` generado en build.
- `robots.txt` con referencia al sitemap.
- Páginas legales enlazadas en el pie.
- Banner de cookies informativo (almacenamiento local de preferencias).
- Sin analítica de terceros ni AdSense activos.

## Despliegue

El workflow `.github/workflows/deploy.yml` ejecuta en cada push a `master`:

1. Checkout del repositorio
2. Setup Node.js 20 con caché npm
3. `npm ci`
4. `npm run build`
5. `wrangler pages deploy dist` al proyecto `tecnologiapractica`

Secrets requeridos en GitHub: `CLOUDFLARE_API_TOKEN`, `CLOUDFLARE_ACCOUNT_ID`.

## Notas

- `dist/` está ignorado; siempre se regenera en build/CI.
- Para añadir un artículo: crear `src/content/blog/NN-slug.md` con el frontmatter del schema y `draft: false`.
- Las portadas de artículos viven en `src/assets/covers/` y se procesan con `<Picture>` (AVIF/WebP).
