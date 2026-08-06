/* ===================== PRUEBA SOCIAL — CARRUSEL DE GOOGLE ===================== */
/* NOTA PARA LA CLIENTA: los 5 testimonios de abajo son EJEMPLOS de estilo/tono.
     Reemplazar cada texto y nombre por reseñas reales copiadas de la ficha de Google Business,
     eligiendo las que mejor hablen de escucha, tiempo y trato sin prejuicios. */
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
          <div className="rating-detalle">25 opiniones en Google</div>
        </div>
      </div>
    </div>

    <div className="carrusel-testimonios" id="carruselTestimonios">
      <div className="carrusel-pista" id="carruselPista">

        <article className="testimonio-card">
          <span className="testimonio-comillas">”</span>
          <div className="testimonio-estrellas">★★★★★</div>
          <p className="testimonio-texto">Me sentí escuchada desde el primer minuto. Explica todo con calma, sin apuro y sin juzgar. Hacía años que no tenía una consulta así.</p>
          <div className="testimonio-autor">
            <span className="testimonio-avatar">M</span>
            <div>
              <strong>Mariana G.</strong>
              <span>Reseña de Google</span>
            </div>
          </div>
        </article>

        <article className="testimonio-card">
          <span className="testimonio-comillas">”</span>
          <div className="testimonio-estrellas">★★★★★</div>
          <p className="testimonio-texto">Profesional, cálida y muy clara para explicar. Resolvió mis dudas sobre el tratamiento sin que me sintiera apurada en ningún momento.</p>
          <div className="testimonio-autor">
            <span className="testimonio-avatar">L</span>
            <div>
              <strong>Laura P.</strong>
              <span>Reseña de Google</span>
            </div>
          </div>
        </article>

        <article className="testimonio-card">
          <span className="testimonio-comillas">”</span>
          <div className="testimonio-estrellas">★★★★★</div>
          <p className="testimonio-texto">Fui con muchos prejuicios propios y me hizo sentir totalmente cómoda. Se nota la experiencia y las ganas de acompañar de verdad.</p>
          <div className="testimonio-autor">
            <span className="testimonio-avatar">C</span>
            <div>
              <strong>Carolina D.</strong>
              <span>Reseña de Google</span>
            </div>
          </div>
        </article>

        <article className="testimonio-card">
          <span className="testimonio-comillas">”</span>
          <div className="testimonio-estrellas">★★★★★</div>
          <p className="testimonio-texto">Excelente atención de principio a fin. Te explica cada estudio y opción con mucha paciencia, algo que valoro muchísimo.</p>
          <div className="testimonio-autor">
            <span className="testimonio-avatar">S</span>
            <div>
              <strong>Sofía R.</strong>
              <span>Reseña de Google</span>
            </div>
          </div>
        </article>

        <article className="testimonio-card">
          <span className="testimonio-comillas">”</span>
          <div className="testimonio-estrellas">★★★★★</div>
          <p className="testimonio-texto">La recomiendo siempre. Es muy humana, atiende con tiempo real y te da la información necesaria para decidir tranquila.</p>
          <div className="testimonio-autor">
            <span className="testimonio-avatar">V</span>
            <div>
              <strong>Valentina M.</strong>
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
