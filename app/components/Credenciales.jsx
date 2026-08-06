/* eslint-disable @next/next/no-img-element -- <img> es intencional: imágenes ya optimizadas a mano (WebP + width/height), export estático sin next/image optimizer */
/* ===================== CREDENCIALES ===================== */
export default function Credenciales() {
  return (
<section className="credenciales">
  <div className="envoltorio">
    <div className="credencial-perfil">
      <div className="credencial-foto">
        <img src="/images/credencial-doctora.webp" alt="Dra. Gabriela Baslini" width="900" height="506" loading="lazy" decoding="async" />
      </div>
      <div className="credencial-info">
        <strong className="credencial-titulo">Ginecología funcional, Estética y Regenerativa</strong>
        <span className="credencial-subtitulo">Diplomatura en Longevidad Saludable y Calidad de Vida</span>
        <span className="credencial-especialidades-label">Subespecialidades</span>
        <div className="credencial-especialidades">
          <span className="tag-especialidad">Patología del tracto genital inferior</span>
          <span className="tag-especialidad">Ginecología infantojuvenil</span>
          <span className="tag-especialidad">Anticoncepción</span>
        </div>
      </div>
      <div className="credencial-footer">
        <div className="dato"><strong>MN 111.324</strong><span>Matrícula Nacional</span></div>
        <div className="dato"><strong>MP 227.202</strong><span>Matrícula Provincial</span></div>
      </div>
      <div className="credencial-foto-secundaria">
        <img src="/images/credencial-secundaria.webp" alt="Dra. Gabriela Baslini en su consultorio" width="900" height="600" loading="lazy" decoding="async" />
      </div>
    </div>
  </div>
</section>
  );
}
