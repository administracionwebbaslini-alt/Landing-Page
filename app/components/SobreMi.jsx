/* eslint-disable @next/next/no-img-element -- <img> es intencional: imágenes ya optimizadas a mano (WebP + width/height), export estático sin next/image optimizer */
/* ===================== SOBRE MI ===================== */
export default function SobreMi() {
  return (
<section className="sobre-mi" id="sobre-mi">
  <div className="envoltorio sobre-grid">
    <div className="sobre-foto">
      <img src="/images/sobre-mi-doctora.webp" alt="Dra. Gabriela Baslini en su consultorio" width="1600" height="1067" loading="lazy" decoding="async" />
    </div>
    <div>
      <span className="eyebrow">Sobre mí</span>
      <h2>Quién te va a acompañar</h2>
      <p className="serif">Soy médica egresada de la UBA, especialista en Ginecología Funcional, Estética y Regenerativa, con Diplomatura en Longevidad Saludable y Calidad de Vida. Hace 23 años acompaño a mujeres en cada etapa de su vida: no trabajo sobre síntomas aislados, sino sobre tu historia completa: tu cuerpo, tu contexto y tus emociones. Mi consulta busca que tomes decisiones informadas y conscientes sobre tu salud para que vivas con mayor bienestar y autonomía.</p>
      <span className="firma">Dra. María Gabriela Baslini</span>

      <div className="pilares">
        <div className="pilar">
          <h3>Mi experiencia</h3>
          <p>Formación de excelencia, experiencia hospitalaria y actualización permanente en congresos nacionales e internacionales.</p>
        </div>
        <div className="pilar">
          <h3>Una mirada integral</h3>
          <p>Considero tu cuerpo, tus hábitos, tu historia y tu contexto, porque tu salud es mucho más que un síntoma.</p>
        </div>
        <div className="pilar">
          <h3>Un espacio sin prejuicios</h3>
          <p>Te acompaño con respeto, sin importar tu edad, tu etapa o tu condición.</p>
        </div>
      </div>

      <div className="badges-modalidad">
        <div className="badge-zona">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 21s-6.5-5.6-6.5-11A6.5 6.5 0 0 1 18.5 10c0 5.4-6.5 11-6.5 11Z"/><circle cx="12" cy="10" r="2.3"/></svg>
          <span><strong>Presencial</strong> en Banfield</span>
        </div>
        <div className="badge-zona badge-zona--virtual">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="2.5" y="6" width="14" height="12" rx="2.5"/><path d="M16.5 10.5 21 8v8l-4.5-2.5"/></svg>
          <span><strong>Virtual</strong> por WhatsApp</span>
        </div>
      </div>
    </div>
  </div>
</section>
  );
}
