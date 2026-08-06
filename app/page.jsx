import Script from 'next/script';

import Header from './components/Header';
import Hero from './components/Hero';
import Credenciales from './components/Credenciales';
import SobreMi from './components/SobreMi';
import Porque from './components/Porque';
import Servicios from './components/Servicios';
import Espacio from './components/Espacio';
import Testimonios from './components/Testimonios';
import Faq from './components/Faq';
import Contacto from './components/Contacto';
import Cierre from './components/Cierre';
import Footer from './components/Footer';
import WhatsAppFlotante from './components/WhatsAppFlotante';

export default function HomePage() {
  return (
    <>
      <Header />
      <Hero />
      <Credenciales />
      <SobreMi />
      <Porque />
      <Servicios />
      <Espacio />
      <Testimonios />
      <Faq />
      <Contacto />
      <Cierre />
      <Footer />
      <WhatsAppFlotante />

      {/*
        TRACKING — completar los IDs reales en public/scripts/analytics.js
        (o cargar Meta Pixel / GA4 vía Google Tag Manager) antes de publicar.
        Ver README > SEO y Analítica.
      */}
      <Script src="/scripts/carrusel-testimonios.js" strategy="afterInteractive" />
      <Script src="/scripts/wa-tracking.js" strategy="afterInteractive" />
    </>
  );
}
