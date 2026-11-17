# Tecnología Práctica

Web estática para `tecnologiapractica.com`, construida con Astro 5.

## Estado actual

- Web publicada en https://tecnologiapractica.com
- Repo público: https://github.com/zygovid/tecnologiapractica
- Cloudflare Pages: proyecto `tecnologiapractica`, despliegue activo https://6ac541c2.tecnologiapractica.pages.dev
- `www` redirige con 301 al dominio principal.
- Auto-deploy por Git no configurado: Cloudflare Pages devolvió el error `8000011` al conectar el repo. Los cambios se despliegan con Wrangler.

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
