/* ===================== CONTACTO ===================== */
export default function Contacto() {
  return (
<section className="contacto" id="contacto">
  <div className="envoltorio contacto-grid">
    <div className="contacto-info">
      <div>
        <h2>Coordinemos tu consulta</h2>
        <p className="bajada">Contame qué necesitás y buscamos el mejor horario para vos.</p>
        <div className="contacto-linea">
          <span>📍</span>
          <span><strong>Espacio Ummana | Manuel Castro 1125, Banfield</strong><span>Lomas de Zamora, Buenos Aires (CP 1828)</span></span>
        </div>
        <div className="contacto-linea">
          <span>🕐</span>
          <span><strong>Horarios de atención presencial</strong><span>Lunes 12:00–18:30 · Miércoles 9:00–15:00 · Jueves 12:00–18:30</span></span>
        </div>
        <div className="contacto-linea">
          <span>💻</span>
          <span><strong>Atención virtual</strong><span>También podés coordinar una videoconsulta por WhatsApp al 11 5897-4754</span></span>
        </div>
        <div className="contacto-linea">
          <span className="contacto-icono-svg"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" stroke="none"/></svg></span>
          <span><strong>Instagram</strong><span><a href="https://www.instagram.com/dra.mariagabrielabaslini/" target="_blank" rel="noopener" className="enlace-subrayado">@dra.mariagabrielabaslini</a></span></span>
        </div>
        <p className="nota-obra-social">Atención particular. No se trabaja con obras sociales ni prepagas.</p>
      </div>
    </div>
    <div>
      <div className="mapa-marco">
        <iframe
          src="https://www.google.com/maps?q=Manuel+Castro+1125,+Banfield,+Buenos+Aires&output=embed"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Ubicación del consultorio, Manuel Castro 1125, Banfield">
        </iframe>
      </div>
      <a className="link-mapa" href="https://www.google.com/maps?q=Manuel+Castro+1125,+Banfield,+Buenos+Aires" target="_blank" rel="noopener">Ver en Google Maps →</a>
    </div>
  </div>
</section>
  );
}
