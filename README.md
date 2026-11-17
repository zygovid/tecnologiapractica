# Tecnología Práctica

Web estática para `tecnologiapractica.com`, construida con Astro 5.

## Estructura

```
src/
  content/blog/        → 10 artículos del silo de automatización
  content.config.ts    → esquema de la colección (Astro 5 + glob loader)
  layouts/             → BaseLayout (SEO, GA4, Consent Mode) y ArticleLayout
  components/          → Header, Footer, CookieBanner (Consent Mode v2)
  pages/
    index.astro        → portada
    automatizacion/    → índice del silo + plantilla [...slug].astro
    servicios.astro
    sobre-mi.astro
    aviso-legal.astro
    privacidad.astro
    cookies.astro
  styles/global.css
public/
  robots.txt
  favicon.svg
```

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
   - Si no quieres Analytics todavía, deja el placeholder: con Consent Mode no envía datos hasta que el usuario acepta, pero conviene poner el ID correcto.

2. **Correo de contacto**
   - Aparece en `/servicios/`, `/aviso-legal/` y `/privacidad/`: `hola@tecnologiapractica.com`.
   - Créalo en Cloudflare (Email Routing) o redirígelo a tu Gmail.

3. **Datos del titular en el aviso legal**
   - Revisa `src/pages/aviso-legal.astro` y añade tus datos reales (nombre/NIF o la información que exija tu jurisdicción). **No es asesoramiento legal**: revisa la normativa aplicable.

## Revisión técnica de los artículos

Los 10 artículos están escritos, pero **revísalos antes de publicarlos**, especialmente:

- `03-cablear-sensor-pnp-npn-plc.md` (esquemas de cableado)
- `04-variadores-frecuencia-configuracion.md` (parámetros y seguridad)
- `05-modbus-rtu-explicado.md` (tramas y cableado RS-485)

Corrige cualquier dato que no coincida con tu experiencia y añade ejemplos reales si tienes.

## Despliegue en Cloudflare Pages

### Opción A: desde el dashboard (la más fácil)

1. Sube el proyecto a un repo de GitHub (por ejemplo `tecnologiapractica`).
2. En Cloudflare: **Workers & Pages → Create application → Pages → Connect to Git**.
3. Selecciona el repo y configura:
   - Build command: `npm run build`
   - Build output directory: `dist`
   - Node version: 22 o superior (añade variable `NODE_VERSION=22` si hace falta).
4. Despliega.

### Opción B: con Wrangler desde la terminal

```sh
npm install -D wrangler
npx wrangler pages deploy dist --project-name=tecnologiapractica
```

## Conectar el dominio `tecnologiapractica.com`

En el proyecto de Pages, pestaña **Custom domains → Add custom domain**:

1. Escribe `tecnologiapractica.com`.
2. Cloudflare te dará un registro CNAME (o lo configura automáticamente al ser el dominio gestionado en la misma cuenta).
3. Si te pide añadir el CNAME manualmente, ve a **DNS → Records** del dominio y crea:
   - Tipo: `CNAME`
   - Name: `@` (o `www`, según te indique)
   - Target: el valor que te da Pages (tipo `tecnologiapractica.pages.dev`).

Espera la propagación (minutos u horas). La web estará en `https://tecnologiapractica.com`.

## Google Search Console y AdSense

Una vez la web esté online:

1. Añade `tecnologiapractica.com` en Search Console (verificación por registro DNS o por archivo HTML).
2. Solicita AdSense cuando tengas las páginas legales y suficiente contenido.
3. Inserta el código de AdSense en `BaseLayout.astro` **solo después** de que el banner de consentimiento esté funcionando (ya está implementado Consent Mode v2).

## MCP configurados

El archivo `~/.config/opencode/opencode.jsonc` incluye los servidores MCP de GitHub y Cloudflare. Tras reiniciar OpenCode, ejecuta `/mcps` y haz login en ambos.
