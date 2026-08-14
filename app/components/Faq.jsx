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
        <p>No. La <strong>Dra. Gabriela Baslini</strong> atiende de forma <strong>particular</strong>, sin convenios con obras sociales ni prepagas. Esto permite dedicar el tiempo necesario a cada consulta, sin las limitaciones de tiempo o de prácticas que suelen imponer esos convenios.</p>
      </details>
      <details className="faq-item">
        <summary>¿Puedo hacer la consulta por videollamada?</summary>
        <p>Sí. Además de la atención <strong>presencial en Banfield</strong>, la Dra. Baslini ofrece <strong>consultas virtuales por WhatsApp</strong>, ideales si preferís comodidad o no podés trasladarte. Se coordinan del mismo modo que un turno presencial: escribiendo al <strong>11 5897-4754</strong>.</p>
      </details>
      <details className="faq-item">
        <summary>¿Cómo agendo un turno?</summary>
        <p>Escribiendo por <strong>WhatsApp al 11 5897-4754</strong>. Ahí coordinamos juntas el día y el horario según la disponibilidad de la agenda, ya sea para una consulta presencial en Banfield o una consulta virtual.</p>
      </details>
      <details className="faq-item">
        <summary>¿Qué debo llevar a la primera consulta?</summary>
        <p>Si tenés <strong>estudios, análisis o informes previos</strong> relacionados con tu consulta, es útil traerlos. No es excluyente: si no los tenés, igual podemos avanzar en la primera cita.</p>
      </details>
      <details className="faq-item">
        <summary>¿Atienden en todas las etapas de la vida, incluyendo adolescencia y menopausia?</summary>
        <p>Sí. El acompañamiento de la Dra. Baslini está pensado para <strong>cada etapa de la vida</strong>: ginecología infantojuvenil, anticoncepción, fertilidad, climaterio y menopausia, siempre con un <strong>enfoque integral y sin prejuicios</strong>.</p>
      </details>
    </div>
  </div>
</section>
  );
}
