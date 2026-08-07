# Respuestas a "Configuración técnica y accesos" — para la agencia (Carolina Puppo)

Este documento responde, punto por punto, el PDF que envió la agencia. No es
código — es para copiar/pegar (o adaptar) en la respuesta por mail.

> ✅ **Dominio confirmado**: `ginecodrabaslini.com.ar`. Ya está actualizado
> en todo el proyecto (metadata, JSON-LD, `sitemap.xml`, `robots.txt`).

---

## 1. Infraestructura y administración

**A. ¿En qué proveedor estará alojado el sitio?**
Cloudflare Pages (plan gratuito).

**B. ¿HTML estático o backend/panel de administración?**
Es un sitio estático (Next.js con exportación estática — `output: export`).
No tiene backend, base de datos ni panel de administración tipo CMS. Los
textos, imágenes y contenidos se modifican directamente en el código del
sitio (componentes React) y se despliegan mediante Git.

**C. Backend — URL / sistema / usuario administrador**
No aplica (ver punto B).

**D. Acceso SFTP/FTP**
No vamos a poder dar un acceso SFTP/FTP tradicional, porque Cloudflare Pages
no funciona así: no hay un servidor con sistema de archivos al que conectarse
por FTP. El despliegue es vía integración con un repositorio de GitHub — cada
cambio se sube al repositorio y Cloudflare Pages reconstruye y publica el
sitio automáticamente. Si la agencia necesita un acceso de solo lectura para
auditar el código o el sitio publicado, podemos:
- dar acceso de colaborador al repositorio de GitHub, y/o
- dar acceso de "Member" (solo lectura) al proyecto en el dashboard de
  Cloudflare Pages.

---

## 2. Dominio

**A. ¿Dónde está registrado el dominio?**
NIC.ar (los dominios `.com.ar` solo pueden registrarse ahí, no en
registradores internacionales).

**B. ¿Lo registra la Dra. Baslini directamente o lo gestionan ustedes?**
Lo registra la Dra. Baslini directamente en NIC.ar, con su CUIT y Clave
Fiscal Nivel 2. La acompañamos en una videollamada guiada para hacerlo juntas,
pero el registro y el pago quedan a su nombre.

**C. ¿Quién será el titular registrante?**
La Dra. María Gabriela Baslini.

**D. ¿Renovación automática o manual?**
[Confirmar al momento del registro — NIC.ar históricamente requiere gestión
manual de la renovación, salvo que se contrate un servicio de auto-renovación
de un revendedor. Lo confirmamos apenas esté registrado.]

**E. ¿Fecha de vencimiento?**
Todavía no está registrado — es uno de los últimos pasos antes de publicar
(se hace después de validar el sitio en la URL temporal de Cloudflare Pages,
para minimizar el tiempo de inactividad). Avisamos la fecha de vencimiento en
cuanto se registre.

---

## 3. Certificado SSL

**A. ¿Tendrá SSL activo (https)?**
Sí.

**B. ¿Qué tipo de certificado?**
Certificado gestionado automáticamente por Cloudflare (Universal SSL),
incluido sin costo en el plan gratuito de Cloudflare Pages.

**C. ¿Renovación automática o manual?**
Automática — la gestiona Cloudflare por completo, sin intervención manual.

---

## 4. Google Search Console

**A. ¿Se dará de alta el dominio en Search Console?**
Sí. El sitio ya tiene `sitemap.xml` y `robots.txt` listos para enviar apenas
esté publicado.

**B. Accesos**
La damos de alta nosotros y configuramos:
- **Propietaria**: Dra. María Gabriela Baslini (con la cuenta de Gmail de
  administración del proyecto).
- **Administradora**: Carolina Puppo (`cpuppo@gmail.com`), tal como pidió.

---

## 5. Google Tag Manager

Instalado. Contenedor `GTM-M57LK7GP` integrado en el código:
- El snippet de `<head>` va lo más arriba posible dentro de `<head>`, vía
  `app/layout.jsx`.
- El `<noscript>` va inmediatamente después de la apertura de `<body>`, en el
  mismo archivo.
- Verificado en el HTML final exportado: ambos quedan como HTML estático
  (no se inyectan por JavaScript del lado del cliente).

**Un tema para tener en cuenta a futuro**: el sitio tiene una política de
seguridad (Content-Security-Policy) bastante estricta. Ya la actualizamos
para permitir Google Tag Manager, Google Analytics y Meta Pixel/CAPI. Si más
adelante agregan en GTM algún tag de un proveedor nuevo (otro píxel, otra
herramienta), puede que haya que sumar su dominio a esa política para que no
quede bloqueado por el navegador — es un ajuste de un minuto de nuestro lado,
pero hay que avisarnos cuando agreguen tags nuevos.

---

## 6. Verificación de dominio de Meta

Instalada. La metaetiqueta quedó en `<head>` como HTML estático (no vía
JavaScript), tal como pidieron:

```html
<meta name="facebook-domain-verification" content="9d7412y47kivpxcv8cirhb4m1qvohe" />
```

Verificado en el HTML final exportado.

---

## Pendientes de nuestro lado antes de publicar

- [x] Confirmar el dominio real — `ginecodrabaslini.com.ar` ✅
- [ ] Registrar el dominio en NIC.ar (Dra. Baslini + videollamada guiada).
- [ ] Dar de alta el proyecto en Cloudflare Pages y validar en `.pages.dev`.
- [ ] Delegar el dominio a Cloudflare recién después de validar.
- [ ] Dar de alta Search Console con los dos accesos (Dra. Baslini + Carolina).
- [ ] Reemplazar los testimonios de ejemplo por reseñas reales de Google.
