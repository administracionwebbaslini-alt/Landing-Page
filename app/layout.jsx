/* eslint-disable @next/next/no-page-custom-font -- App Router: esta regla asume Pages Router (_document.js); acá el <link> de Google Fonts en el layout raíz es la forma correcta y solo se renderiza una vez para todo el sitio. */
import Script from 'next/script';
import './globals.css';

// Dominio confirmado por la clienta/agencia: ginecodrabaslini.com.ar
const SITE_URL = 'https://ginecodrabaslini.com.ar';

// Pedido de la agencia (Carolina Puppo) — instalar en todas las páginas.
const GTM_ID = 'GTM-M57LK7GP';

// Pedido de la agencia — verificación de dominio de Meta Business.
// Debe quedar como HTML estático en <head>, nunca inyectada por JS.
const META_DOMAIN_VERIFICATION = '9d7412y47kivpxcv8cirhb4m1qvohe';

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Dra. María Gabriela Baslini — Ginecología Funcional y Estética',
    template: '%s — Dra. María Gabriela Baslini',
  },
  description:
    'Ginecología funcional y estética en Banfield, Lomas de Zamora. Consultas sin apuro, atención integral y cercana en cada etapa de tu vida.',
  applicationName: 'Dra. María Gabriela Baslini — Ginecología',
  keywords: [
    'ginecóloga Banfield',
    'ginecología funcional',
    'ginecología estética',
    'Lomas de Zamora',
    'Dra. Gabriela Baslini',
    'ginecología integral Buenos Aires',
  ],
  authors: [{ name: 'Dra. María Gabriela Baslini' }],
  creator: 'Dra. María Gabriela Baslini',
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'es_AR',
    url: SITE_URL,
    siteName: 'Dra. María Gabriela Baslini — Ginecología',
    title: 'Dra. María Gabriela Baslini — Ginecología Funcional y Estética',
    description:
      'Ginecología funcional y estética en Banfield, Lomas de Zamora. Consultas sin apuro, atención integral y cercana en cada etapa de tu vida.',
    images: [
      {
        url: '/images/hero-doctora.webp',
        width: 1600,
        height: 900,
        alt: 'Dra. María Gabriela Baslini, ginecóloga',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dra. María Gabriela Baslini — Ginecología Funcional y Estética',
    description:
      'Ginecología funcional y estética en Banfield, Lomas de Zamora. Consultas sin apuro, atención integral y cercana en cada etapa de tu vida.',
    images: ['/images/hero-doctora.webp'],
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32' },
      { url: '/icons/icon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icons/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [{ url: '/icons/apple-touch-icon.png', sizes: '180x180' }],
  },
  manifest: '/manifest.webmanifest',
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#FBFAF6',
};

const physicianJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Physician',
  name: 'Dra. María Gabriela Baslini',
  medicalSpecialty: 'Gynecologic',
  image: `${SITE_URL}/images/hero-doctora.webp`,
  url: SITE_URL,
  telephone: '+5491158974754',
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Manuel Castro 1125',
    addressLocality: 'Banfield, Lomas de Zamora',
    addressRegion: 'Buenos Aires',
    postalCode: '1828',
    addressCountry: 'AR',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: -34.7469633,
    longitude: -58.4010445,
  },
  areaServed: ['Banfield', 'Lomas de Zamora', 'Zona Sur GBA'],
  sameAs: ['https://www.instagram.com/dra.mariagabrielabaslini/'],
  openingHoursSpecification: [
    { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Monday', opens: '12:00', closes: '18:30' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Wednesday', opens: '09:00', closes: '15:00' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Thursday', opens: '12:00', closes: '18:30' },
  ],
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '¿Atienden con obra social o prepaga?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No, la atención es particular. No se trabaja con obras sociales ni prepagas, lo que permite dedicar el tiempo necesario a cada consulta sin las limitaciones de esos convenios.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cómo agendo un turno?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Escribiendo por WhatsApp al 11 5897-4754. Coordinamos juntas el día y horario según la disponibilidad de la agenda.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Qué debo llevar a la primera consulta?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Si tenés estudios, análisis o informes previos relacionados con tu consulta, es útil traerlos. No es excluyente: si no los tenés, igual podemos avanzar en la primera cita.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Atienden en todas las etapas de la vida, incluyendo adolescencia y menopausia?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sí. El acompañamiento está pensado para cada etapa: ginecología infantojuvenil, anticoncepción, fertilidad, climaterio y menopausia, siempre con un enfoque integral y sin prejuicios.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Puedo hacer la consulta por videollamada?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sí. Además de la atención presencial en Banfield, ofrezco videoconsultas por WhatsApp, ideales si preferís comodidad o no podés trasladarte. Se coordinan de la misma forma: escribiéndome por WhatsApp.',
      },
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        {/* Google Tag Manager — pedido por la agencia (Carolina Puppo), lo más arriba posible en <head> */}
        <Script id="gtm-head" strategy="beforeInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`}
        </Script>

        {/* Verificación de dominio de Meta Business — debe quedar como HTML estático, sin JS */}
        <meta name="facebook-domain-verification" content={META_DOMAIN_VERIFICATION} />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,500;0,600;0,700;1,500&family=Noto+Serif:ital,wght@0,400;0,500;1,400;1,500&display=swap"
          rel="stylesheet"
        />
        {/* SEO local: datos estructurados para buscadores (nombre, dirección, teléfono, horarios) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(physicianJsonLd) }}
        />
        {/* SEO: datos estructurados de las preguntas frecuentes */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      </head>
      <body>
        {/* Google Tag Manager (noscript) — pedido por la agencia, inmediatamente después de <body> */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
            title="Google Tag Manager"
          />
        </noscript>
        {children}
      </body>
    </html>
  );
}
