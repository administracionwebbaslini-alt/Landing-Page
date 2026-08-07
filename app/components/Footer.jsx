/* eslint-disable @next/next/no-img-element -- <img> es intencional: imágenes ya optimizadas a mano (WebP + width/height), export estático sin next/image optimizer */
/* ===================== FOOTER ===================== */
export default function Footer() {
  return (
<footer>
  <div className="envoltorio footer-top">
    <a href="#inicio" className="marca-header">
      <img src="/images/logo.png" alt="" width="343" height="300" loading="lazy" decoding="async" />
      <span className="marca-texto">
        <strong>Dra. María Gabriela Baslini</strong>
        <span>MN 111.324 · MP 227.202</span>
      </span>
    </a>
    <a className="footer-social-icon" href="https://www.instagram.com/dra.mariagabrielabaslini/" target="_blank" rel="noopener" aria-label="Seguir en Instagram">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" stroke="none"/></svg>
    </a>
  </div>
  <div className="envoltorio footer-bottom">
    <span>© 2026 — Todos los derechos reservados</span>
  </div>
</footer>
  );
}
