/* ===================== PRUEBA SOCIAL — CARRUSEL DE GOOGLE ===================== */
/* Reseñas reales tomadas de la ficha de Google Business Profile de la Dra. Baslini
     (captura de referencia: 5.0 · 32 opiniones, verificado 14/8/2026). */
export default function Testimonios() {
  return (
<section className="social" id="testimonios">
  <div className="envoltorio">
    <div className="social-header">
      <span className="eyebrow">Lo que dicen quienes ya me conocen</span>
      <h2>Reseñas reales en Google</h2>
      <div className="rating-linea">
        <span className="rating-numero">5.0</span>
        <div>
          <div className="rating-estrellas">★★★★★</div>
          <div className="rating-detalle">32 opiniones en Google</div>
        </div>
      </div>
    </div>

    <div className="carrusel-testimonios" id="carruselTestimonios">
      <div className="carrusel-pista" id="carruselPista">

        <article className="testimonio-card">
          <span className="testimonio-comillas">”</span>
          <div className="testimonio-estrellas">★★★★★</div>
          <p className="testimonio-texto">Excelente profesional! Siempre actualizada! Atenta a las necesidades del paciente.</p>
          <div className="testimonio-autor">
            <span className="testimonio-avatar"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg></span>
            <div>
              <strong>Elisa G.</strong>
              <span>Reseña de Google</span>
            </div>
          </div>
        </article>

        <article className="testimonio-card">
          <span className="testimonio-comillas">”</span>
          <div className="testimonio-estrellas">★★★★★</div>
          <p className="testimonio-texto">La Dra. Baslini, además de ser muy clara en su explicación del tratamiento, es sumamente cálida y muy atenta. Excelente atención.</p>
          <div className="testimonio-autor">
            <span className="testimonio-avatar"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg></span>
            <div>
              <strong>Valeria C.</strong>
              <span>Reseña de Google</span>
            </div>
          </div>
        </article>

        <article className="testimonio-card">
          <span className="testimonio-comillas">”</span>
          <div className="testimonio-estrellas">★★★★★</div>
          <p className="testimonio-texto">Excelente profesional, escucha invaluable, dedicación y compromiso. Seguro la recomendaría.</p>
          <div className="testimonio-autor">
            <span className="testimonio-avatar"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg></span>
            <div>
              <strong>Luciana R.</strong>
              <span>Reseña de Google</span>
            </div>
          </div>
        </article>

        <article className="testimonio-card">
          <span className="testimonio-comillas">”</span>
          <div className="testimonio-estrellas">★★★★★</div>
          <p className="testimonio-texto">Gabi es de mis personas favoritas. No solo como profesional sino como mujer. Absolutamente todo lo que hace, es desde el corazón.</p>
          <div className="testimonio-autor">
            <span className="testimonio-avatar"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg></span>
            <div>
              <strong>Na M.</strong>
              <span>Reseña de Google</span>
            </div>
          </div>
        </article>

        <article className="testimonio-card">
          <span className="testimonio-comillas">”</span>
          <div className="testimonio-estrellas">★★★★★</div>
          <p className="testimonio-texto">Excelente profesional.</p>
          <div className="testimonio-autor">
            <span className="testimonio-avatar"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg></span>
            <div>
              <strong>María Fernanda</strong>
              <span>Reseña de Google</span>
            </div>
          </div>
        </article>

      </div>

      <div className="carrusel-controles">
        <button type="button" className="carrusel-flecha" id="carruselAnterior" aria-label="Testimonio anterior">‹</button>
        <div className="carrusel-puntos" id="carruselPuntos"></div>
        <button type="button" className="carrusel-flecha" id="carruselSiguiente" aria-label="Siguiente testimonio">›</button>
      </div>
    </div>

    <a className="link-resenas link-resenas-centrado" href="https://www.google.com/maps/place/Dra.+Maria+Gabriela+Baslini/@-34.7469633,-58.4036194,17z/data=!4m8!3m7!1s0x95bcd30de3f17c6b:0x1f82ae8ae2e6ca1f!8m2!3d-34.7469633!4d-58.4010445!9m1!1b1!16s%2Fg%2F11hjly5m21" target="_blank" rel="noopener">Ver todas las reseñas en Google →</a>
  </div>
</section>
  );
}
