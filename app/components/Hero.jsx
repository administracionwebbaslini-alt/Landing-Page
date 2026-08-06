/* eslint-disable @next/next/no-img-element -- <img> es intencional: imágenes ya optimizadas a mano (WebP + width/height), export estático sin next/image optimizer */
/* ===================== HERO ===================== */
export default function Hero() {
  return (
<section className="hero" id="inicio">
  <div className="envoltorio hero-grid">
    <div>
      <h1>Podés estar mejor<span className="resto">Viví con bienestar y plenitud cada etapa de tu vida</span></h1>
      <p className="hero-sub">Como ginecóloga, te ofrezco una <strong>atención integral, empática y actual</strong>. Te invito a una consulta sin apuro ni prejuicios, con la información que necesitás para tomar decisiones conscientes sobre tu cuerpo y tu salud.</p>
      <div className="hero-cta">
        <a className="btn btn-fantasma" href="#contacto">Ubicación y horarios</a>
        <a className="btn btn-whatsapp" href="https://wa.me/5491158974754?text=Hola%20Dra.%20Baslini%2C%20quiero%20coordinar%20una%20consulta" target="_blank" rel="noopener">Escribime por WhatsApp</a>
      </div>
    </div>
    <div className="hero-visual">
      <div className="mota mota-rosa"></div>
      <div className="mota mota-amarilla"></div>
      <div className="marco">
        <img src="/images/hero-doctora.webp" alt="Dra. María Gabriela Baslini, ginecóloga" width="1600" height="900" fetchPriority="high" decoding="async" />
      </div>
    </div>
  </div>
</section>
  );
}
