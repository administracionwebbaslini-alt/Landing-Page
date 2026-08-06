/**
 * Registra un evento de "lead" cuando alguien hace click en cualquier
 * enlace de WhatsApp. No hace nada si Meta Pixel / GA4 no están
 * instalados todavía (ver TRACKING_SETUP en el README).
 */
(function () {
  function init() {
    document.querySelectorAll('a[href*="wa.me"]').forEach(function (el) {
      if (el.dataset.trackInit === '1') return;
      el.dataset.trackInit = '1';
      el.addEventListener('click', function () {
        if (typeof window.fbq === 'function') window.fbq('track', 'Lead');
        if (typeof window.gtag === 'function') {
          window.gtag('event', 'generate_lead', { method: 'whatsapp' });
        }
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
