# Changelog

Formato basado en [Keep a Changelog](https://keepachangelog.com/es-ES/1.1.0/).

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
- **Confirmar el dominio real** — el código usa `basliniginecologia.com.ar`,
  pero el PDF de la agencia sugiere `ginecodrabaslini.com.ar` en su nombre
  de archivo. Ver aviso en `README.md` y `RESPUESTA_AGENCIA.md`.
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
