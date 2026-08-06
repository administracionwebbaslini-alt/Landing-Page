/* ===================== PREGUNTAS FRECUENTES ===================== */
export default function Faq() {
  return (
<section className="faq" id="preguntas-frecuentes">
  <div className="envoltorio faq-grid">
    <div className="faq-intro">
      <span className="eyebrow">Antes de agendar</span>
      <h2>Preguntas frecuentes</h2>
      <p className="serif">Las dudas más habituales antes de agendar. Si tenés otra consulta, escribime directamente por WhatsApp.</p>
    </div>
    <div className="faq-lista">
      <details className="faq-item" open>
        <summary>¿Atienden con obra social o prepaga?</summary>
        <p>No, la atención es particular. No se trabaja con obras sociales ni prepagas, lo que permite dedicar el tiempo necesario a cada consulta sin las limitaciones de esos convenios.</p>
      </details>
      <details className="faq-item">
        <summary>¿Cómo agendo un turno?</summary>
        <p>Escribiendo por WhatsApp al 11 5897-4754. Coordinamos juntas el día y horario según la disponibilidad de la agenda.</p>
      </details>
      <details className="faq-item">
        <summary>¿Qué debo llevar a la primera consulta?</summary>
        <p>Si tenés estudios, análisis o informes previos relacionados con tu consulta, es útil traerlos. No es excluyente: si no los tenés, igual podemos avanzar en la primera cita.</p>
      </details>
      <details className="faq-item">
        <summary>¿Atienden en todas las etapas de la vida, incluyendo adolescencia y menopausia?</summary>
        <p>Sí. El acompañamiento está pensado para cada etapa: ginecología infantojuvenil, anticoncepción, fertilidad, climaterio y menopausia, siempre con un enfoque integral y sin prejuicios.</p>
      </details>
      <details className="faq-item">
        <summary>¿Puedo hacer la consulta por videollamada?</summary>
        <p>Sí. Además de la atención presencial en Banfield, ofrezco videoconsultas por WhatsApp, ideales si preferís comodidad o no podés trasladarte. Se coordinan de la misma forma: escribiéndome por WhatsApp.</p>
      </details>
    </div>
  </div>
</section>
  );
}
