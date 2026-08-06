/* eslint-disable @next/next/no-img-element -- <img> es intencional: imágenes ya optimizadas a mano (WebP + width/height), export estático sin next/image optimizer */
/* ===================== ESTE ES TU ESPACIO ===================== */
export default function Espacio() {
  return (
<section className="espacio">
  <div className="envoltorio espacio-grid">
    <div>
      <h2>Tu salud merece<span className="destacado">una atención diferente</span></h2>
      <p className="serif">Sentite escuchada y acompañada en cada etapa de tu vida.</p>
      <ul className="espacio-lista">
        <li><span className="check"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12.5 9.5 17 19 7"/></svg></span>Un enfoque integral adaptado a tus necesidades.</li>
        <li><span className="check"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12.5 9.5 17 19 7"/></svg></span>Consultas sin apuro y con tiempo para vos.</li>
        <li><span className="check"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12.5 9.5 17 19 7"/></svg></span>Atención respetuosa, sin prejuicios.</li>
        <li><span className="check"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12.5 9.5 17 19 7"/></svg></span>Información clara para que tomes decisiones con confianza.</li>
      </ul>
      <a className="btn btn-whatsapp" href="https://wa.me/5491158974754?text=Hola%20Dra.%20Baslini%2C%20quiero%20coordinar%20una%20consulta" target="_blank" rel="noopener">Quiero agendar mi consulta</a>
    </div>
    <div className="espacio-foto">
      <img src="/images/espacio-paciente.webp" alt="Dra. Gabriela Baslini con una paciente" width="1600" height="1067" loading="lazy" decoding="async" />
    </div>
  </div>
</section>
  );
}
