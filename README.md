# Dra. María Gabriela Baslini — Landing Page

Landing page de la Dra. María Gabriela Baslini (ginecología funcional y
estética, Banfield, Buenos Aires). Proyecto Next.js con **exportación
estática**, pensado para desplegarse en **Cloudflare Pages**.

> **Sobre el diseño**: este proyecto convierte el mockup HTML **"Versión
> final post primer entregable"** (aprobado por el equipo/clienta, con
> fotos reales definitivas y sin la animación de scroll de una variante
> anterior) a un proyecto de producción. El diseño visual, textos, colores,
> tipografías y layout **no fueron modificados** — todos los cambios son de
> ingeniería (estructura, rendimiento, SEO, seguridad, accesibilidad
> técnica, e instalación de las herramientas de medición pedidas por la
> agencia). Si notás cualquier diferencia visual respecto al mockup, es un
> bug y hay que reportarlo. Verificado con diff automatizado: el texto
> visible del HTML final exportado es carácter por carácter idéntico al
> mockup original.

> **Dominio**: `ginecodrabaslini.com.ar` (confirmado por la clienta/agencia).
> Usado en `SITE_URL` (`app/layout.jsx`), `robots.txt` y `sitemap.xml`.

---

## Stack técnico

| Área | Tecnología |
|---|---|
| Framework | Next.js 14 (App Router, `output: 'export'`) |
| UI | React + CSS puro (mismo CSS del mockup, sin Tailwind) |
| Hosting | Cloudflare Pages (plan gratuito) |
| Dominio | `ginecodrabaslini.com.ar` (NIC.ar) |
| Imágenes | WebP, servidas como archivos estáticos (`next/image` no se usa: con export estático y sin proveedor de optimización, `unoptimized: true` es la config correcta) |

**¿Por qué no Tailwind?** El mockup ya trae un CSS a medida, muy acotado
(~400 líneas) y limpio. Migrarlo a Tailwind implicaría reescribir cada clase
y arriesgar diferencias visuales sutiles (espaciados, breakpoints), algo que
la consigna del proyecto prohíbe explícitamente. Se mantuvo el CSS original
tal cual, solo movido a `app/globals.css`. Si más adelante se agregan páginas
nuevas, Tailwind puede sumarse sin tocar este archivo.

---

## Estructura del proyecto

```
├── app/
│   ├── layout.jsx          # metadata SEO, JSON-LD, fuentes
│   ├── page.jsx            # ensambla las secciones en orden
│   ├── globals.css         # CSS del sitio (idéntico al mockup)
│   └── components/         # una sección = un componente
│       ├── Header.jsx
│       ├── Hero.jsx
│       ├── Credenciales.jsx
│       ├── SobreMi.jsx
│       ├── Porque.jsx
│       ├── Servicios.jsx
│       ├── Espacio.jsx
│       ├── Testimonios.jsx     # ⚠️ testimonios de ejemplo, ver abajo
│       ├── Faq.jsx
│       ├── Contacto.jsx
│       ├── Cierre.jsx
│       ├── Footer.jsx
│       └── WhatsAppFlotante.jsx
├── public/
│   ├── images/              # fotos en WebP
│   ├── icons/                # favicons / íconos PWA
│   ├── scripts/               # JS modular (carrusel, tracking)
│   ├── _headers               # cabeceras de seguridad (Cloudflare Pages)
│   ├── _redirects              # reglas de redirect (Cloudflare Pages)
│   ├── robots.txt
│   ├── sitemap.xml
│   ├── manifest.webmanifest
│   └── favicon.ico
├── next.config.js
├── package.json
├── LICENSE
├── CHANGELOG.md
├── RESPUESTA_AGENCIA.md    # respuestas al PDF de "Configuración técnica y accesos"
└── README.md
```

---

## Instalación local

Requisitos: Node.js 18.18+ (recomendado 20 LTS).

```bash
npm install
npm run dev
```

Abrí `http://localhost:3000`.

---

## Build de producción

```bash
npm run build
```

Esto genera el sitio estático en la carpeta `out/` (HTML, CSS, JS e imágenes
listos para servir desde cualquier hosting estático).

---

## Despliegue en Cloudflare Pages

Orden recomendado para minimizar downtime (ya que el dominio se registra
en NIC.ar y hoy no apunta a ningún hosting):

1. **Crear el proyecto en Cloudflare Pages** conectado a este repositorio de
   GitHub.
   - Build command: `npm run build`
   - Build output directory: `out`
   - Variables de entorno: ninguna requerida.
2. **Verificar que el sitio funciona** en la URL temporal `*.pages.dev`.
3. Recién ahí, **delegar el dominio** `ginecodrabaslini.com.ar` desde
   NIC.ar hacia los nameservers de Cloudflare, y agregar el dominio custom en
   el proyecto de Pages.

Cloudflare Pages sirve automáticamente los archivos de `out/`, respeta
`_headers` y `_redirects` sin configuración adicional, y aplica compresión
Brotli/Gzip a nivel de CDN (no requiere configuración extra en el proyecto).

---

## SEO y Analítica

- El `<title>`, `<meta description>`, Open Graph, Twitter Cards y el
  `canonical` están en `app/layout.jsx`.
- Datos estructurados (Schema.org): `Physician` (con dirección, geo,
  horarios, redes) y `FAQPage` (con las 5 preguntas del sitio), ambos en
  `app/layout.jsx`.
- **Google Tag Manager está instalado** (contenedor `GTM-M57LK7GP`, pedido
  por la agencia — Carolina Puppo). El snippet de `<head>` y el `<noscript>`
  de `<body>` están en `app/layout.jsx`, y quedan como HTML estático en el
  export final (no se inyectan por JS), verificado con `npm run build`.
  Google Analytics 4, Meta Pixel y cualquier otro tag se configuran **desde
  el panel de GTM** (tagmanager.google.com), sin tocar el código — para eso
  se instaló GTM en primer lugar.
- **Verificación de dominio de Meta Business instalada**: la metaetiqueta
  `facebook-domain-verification` está en `app/layout.jsx`, dentro de
  `<head>`, como HTML estático (requisito de Meta — no puede cargarse por
  JavaScript).
- **Si agregan un tag nuevo en GTM** (un píxel o herramienta que no sea
  Google Analytics o Meta), puede que su dominio no esté permitido por la
  Content-Security-Policy del sitio (`public/_headers`) y el navegador lo
  bloquee. Avisar para sumar el dominio correspondiente — es un cambio
  chico, pero hay que hacerlo cada vez que se suma un proveedor nuevo.
- El tracking de clics a WhatsApp (`public/scripts/wa-tracking.js`) ya está
  armado y espera a que `fbq`/`gtag` existan — no hace nada hasta que se
  instalen.

---

## ⚠️ Antes de publicar: testimonios

Los 5 testimonios en `app/components/Testimonios.jsx` son **textos de
ejemplo** (heredados del mockup) para mostrar el estilo y tono, no reseñas
reales. Hay que reemplazarlos por reseñas reales de la ficha de Google
Business de la Dra. Baslini antes de publicar el sitio. Está marcado con un
comentario en el propio archivo.

---

## Seguridad

`public/_headers` aplica, en cada respuesta:

- **Content-Security-Policy**: restringe scripts, estilos, fuentes e iframes
  a los orígenes necesarios (Google Fonts, Google Maps, y Meta/Google
  Tag Manager para cuando se activen). Se permite `'unsafe-inline'` en
  `script-src` porque Next.js con `output: 'export'` inyecta pequeños
  scripts inline de hidratación que no pueden evitarse sin infraestructura
  de nonces (fuera del alcance de un export 100% estático). Si en el futuro
  se migra a Cloudflare Pages Functions o SSR, se puede endurecer con nonces.
- **Strict-Transport-Security**, **X-Frame-Options**, **X-Content-Type-Options**,
  **Referrer-Policy** y **Permissions-Policy** con configuración restrictiva
  estándar.
- **Cache-Control** agresivo (`immutable`, 1 año) para imágenes, íconos,
  scripts y assets de Next.js (que ya llevan hash en el nombre de archivo).
- No hay formularios en el sitio (todo el contacto es vía WhatsApp,
  Instagram y Google Maps), por lo que no aplica sanitización de inputs del
  lado del servidor. Si en el futuro se agrega un formulario, debe ir contra
  un servicio externo (ver nota abajo) y nunca exponer credenciales en el
  código del cliente.

---

## Rendimiento

- Imágenes convertidas a WebP (ahorro ~55-60% de peso vs. los JPG
  originales, misma calidad visual).
- La imagen del hero (LCP) se carga con `fetchPriority="high"` y sin
  `loading="lazy"`; el resto de las imágenes usa `loading="lazy"`.
- Todas las imágenes declaran `width`/`height` para evitar layout shift
  (CLS).
- Fuentes cargadas con `preconnect` a Google Fonts, igual que en el mockup
  original.
- El mapa de Google usa `<iframe loading="lazy">`, como en el mockup.
- JS no crítico (carrusel, tracking) se carga con `strategy="afterInteractive"`
  de `next/script`, sin bloquear el render inicial.
- Sin dependencias de UI extra (sin librerías de componentes, sin CSS-in-JS):
  el bundle de JS se mantiene mínimo.

---

## Modificar el contenido

Cada sección vive en su propio archivo dentro de `app/components/`. Para
editar un texto, buscá la sección correspondiente (por ejemplo,
`app/components/Servicios.jsx` para la grilla de servicios) y editá el JSX
directamente — es HTML casi idéntico al original, con `className` en vez de
`class`.

Para cambiar una imagen, reemplazá el archivo en `public/images/`
manteniendo el mismo nombre (o actualizá el `src` en el componente
correspondiente si cambia el nombre de archivo).

---

## Formularios

El sitio **no tiene formularios**: toda la conversión de leads es vía
WhatsApp (`wa.me`), Instagram y el mapa de Google. Si en el futuro se agrega
un formulario de contacto, al ser un sitio 100% estático hay que conectarlo
a un servicio externo (por ejemplo Cloudflare Pages Functions, Formspree o
similar) — nunca procesar datos sensibles ni exponer credenciales en el
código del cliente.
