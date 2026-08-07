/* eslint-disable @next/next/no-img-element -- <img> es intencional: imágenes ya optimizadas a mano (WebP + width/height), export estático sin next/image optimizer */
/* ===================== HEADER ===================== */
export default function Header() {
  return (
<header>
  <div className="envoltorio header-fila">
    <a href="#inicio" className="marca-header">
      <img src="/images/logo.png" alt="" width="343" height="300" loading="lazy" decoding="async" />
      <span className="marca-texto">
        <strong>DRA. GABRIELA BASLINI</strong>
        <span>Ginecología funcional y estética</span>
      </span>
    </a>
    <nav>
      <a className="enlace" href="#sobre-mi">Sobre mí</a>
      <a className="enlace" href="#servicios">Servicios</a>
      <a className="enlace" href="#testimonios">Testimonios</a>
      <a className="enlace" href="#preguntas-frecuentes">Preguntas frecuentes</a>
      <a className="enlace" href="#contacto">Contacto</a>
      <a className="header-social-icon" href="https://www.instagram.com/dra.mariagabrielabaslini/" target="_blank" rel="noopener" aria-label="Seguir en Instagram">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" stroke="none"/></svg>
      </a>
      <a className="btn btn-whatsapp" href="https://wa.me/5491158974754?text=Hola%20Dra.%20Baslini%2C%20quiero%20coordinar%20una%20consulta" target="_blank" rel="noopener">Escribime por WhatsApp</a>
    </nav>
  </div>
</header>
  );
}
