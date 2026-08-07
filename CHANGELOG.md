# Changelog

Formato basado en [Keep a Changelog](https://keepachangelog.com/es-ES/1.1.0/).

## [2.2.0] - 2026-08-07

### Cambiado
- **Hosting: de Cloudflare Pages a Cloudflare Workers (con static assets)**.
  El proyecto real ya estaba desplegado como Worker (no Pages), y además
  Cloudflare pasó a recomendar Workers para proyectos nuevos desde que
  puede servir archivos estáticos directamente — Pages sigue funcionando
  pero quedó en modo mantenimiento. No cambia nada del resultado del sitio,
  solo la infraestructura de despliegue.
- Se agregó `wrangler.jsonc` en la raíz del repo, apuntando a `./out` con
  `not_found_handling: "404-page"` — es lo que le indica a Cloudflare qué
  carpeta servir (antes el `npx wrangler deploy` del proyecto no tenía esa
  información y probablemente re-desplegaba un Worker de ejemplo viejo en
  vez de este sitio).
- Ajuste de mobile: más margen para el ícono de Instagram del header
  (`margin-right` de 4px a 10px), a pedido explícito tras revisar en
  dispositivo real.
- README y `RESPUESTA_AGENCIA.md` actualizados para reflejar Workers en vez
  de Pages en toda la documentación (stack, instrucciones de despliegue,
  respuestas a la agencia).

## [2.1.0] - 2026-08-07

### Confirmado
- **Dominio definitivo**: `ginecodrabaslini.com.ar`, actualizado en
  `app/layout.jsx` (`SITE_URL`), `robots.txt` y `sitemap.xml`.

### Corregido
- **Logo sin fondo**: se extrajo el isologotipo directamente del archivo
  vectorial (`.ai`, formato PDF-compatible) en vez del PNG rasterizado que
  traía un fondo crema sólido. Recoloreado al verde de marca exacto
  (`#98A871`), con transparencia real y mucha mayor nitidez. Se actualizó
  también en favicons e íconos PWA.
- **Riesgo de distorsión en fotos ("alargadas")**: `.sobre-foto img` y
  `.espacio-foto img` no tenían `object-fit` ni bloqueaban el
  `aspect-ratio` que los navegadores calculan automáticamente a partir de
  los atributos `width`/`height` del HTML. Si una foto se reemplaza por
  otra de proporciones distintas sin actualizar esos atributos, el
  navegador la estira para forzarla en la caja "vieja" (comportamiento por
  defecto `object-fit:fill`). Se agregó `aspect-ratio:auto;
  object-fit:cover; height:auto;` para blindar el sitio ante ese caso, sin
  cambiar el resultado visual cuando la foto sí coincide con sus atributos.
- **Mobile — botón de Instagram muy pegado al borde**: se sumó
  `margin-right:4px` al ícono en el breakpoint mobile.
- **Mobile — tags de subespecialidad pegados al borde de la tarjeta de
  credenciales**: se sumó padding extra a `.credencial-perfil` y
  `.credencial-info` en mobile (breathing room, sin cambiar el layout).

> Nota: las capturas que motivaron estos cambios eran de un despliegue
> distinto (`administracionweb-baslini.workers.dev`), con fotos que no
> coinciden con las de este repo — no se pudo confirmar 1:1 que el mismo
> bug estuviera presente acá, pero las correcciones son válidas y
> preventivas de todos modos.

## [2.0.0] - 2026-08-06

### Base de contenido
- Se reemplazó el mockup base por **"Versión final post primer entregable —
  Sin animación"**, aprobada por el equipo, con fotos profesionales
  definitivas (ya no la foto de reemplazo manual de la versión anterior).

### Agregado
- **Google Tag Manager** instalado (contenedor `GTM-M57LK7GP`, pedido por la
  agencia — Carolina Puppo). Snippet de `<head>` vía `next/script` con
  `strategy="beforeInteractive"` y `<noscript>` inmediatamente después de
  `<body>`. Verificado en el HTML exportado: queda como HTML estático, no se
  inyecta por JavaScript.
- **Verificación de dominio de Meta Business** instalada como metaetiqueta
  estática en `<head>`.
- CSP (`public/_headers`) actualizada para permitir Google Tag Manager,
  Google Analytics 4 y Meta Pixel/CAPI.
- `RESPUESTA_AGENCIA.md`: respuestas documentadas a las 6 preguntas del PDF
  "Configuración técnica y accesos" enviado por la agencia.
- Datos estructurados (`FAQPage`) actualizados con la nueva pregunta sobre
  videoconsultas, reemplazando la pregunta de confidencialidad que ya no
  está en el sitio.

### Cambiado (contenido, heredado del nuevo mockup — no son decisiones de este repo)
- Fotos reales de alta resolución para hero, credenciales, "sobre mí" y
  "espacio" (extraídas del HTML, redimensionadas y convertidas a WebP:
  ~4 MB → ~370 KB en total).
- Nueva modalidad de atención "virtual por WhatsApp" agregada junto a la
  presencial (badges en "Sobre mí", línea de contacto, FAQ).
- Servicios renombrados/ajustados: "Consulta ginecológica funcional",
  "Modulación hormonal y colocación de pellet de testosterona", "Láser y
  HIFU genital".
- Checkmarks de la sección "Espacio" ahora son SVG en vez de texto (✔).
- Se quitó el botón de WhatsApp duplicado dentro de la tarjeta de contacto
  (ya está el flotante y el del hero).
- Animación de entrada de la foto del hero (respeta
  `prefers-reduced-motion`).

### Técnico
- Next.js actualizado a 14.2.35 (parche de seguridad).
- Mismo pipeline de verificación que en la v1.0.0: diff de texto
  carácter-por-carácter entre el mockup y el HTML exportado (0 diferencias),
  diff de CSS (0 diferencias fuera de un cambio intencional no visual).

### Pendiente antes de publicar
- Reemplazar los 5 testimonios de ejemplo por reseñas reales de Google
  Business (marcado en `Testimonios.jsx`).
- Registrar el dominio en NIC.ar y completar el despliegue en Cloudflare
  Pages (ver README > Despliegue).
- Dar de alta Search Console con acceso para la Dra. Baslini (propietaria) y
  Carolina Puppo (administradora, `cpuppo@gmail.com`).

## [1.0.0] - 2026-08-04

### Agregado
- Conversión del mockup HTML (V2, con la foto de portada de la V1) a
  proyecto Next.js con exportación estática, listo para Cloudflare Pages.
- Extracción de imágenes embebidas a WebP, favicons/íconos PWA, metadata
  SEO completa, Schema.org (`Physician` + `FAQPage`), `robots.txt`,
  `sitemap.xml`, `manifest.webmanifest`, cabeceras de seguridad (`_headers`),
  JavaScript modularizado (carrusel, tracking de WhatsApp).
