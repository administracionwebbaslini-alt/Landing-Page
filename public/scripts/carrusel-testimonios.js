/**
 * Carrusel de testimonios: puntos + flechas, con scroll nativo
 * (funciona también con swipe en mobile).
 * Sin dependencias externas. Se auto-inicializa si encuentra los nodos.
 */
(function () {
  function init() {
    var pista = document.getElementById('carruselPista');
    var puntosCont = document.getElementById('carruselPuntos');
    var btnAnterior = document.getElementById('carruselAnterior');
    var btnSiguiente = document.getElementById('carruselSiguiente');
    if (!pista || !puntosCont) return;
    if (puntosCont.dataset.init === '1') return; // evita doble init (navegación cliente)
    puntosCont.dataset.init = '1';

    var tarjetas = Array.prototype.slice.call(pista.children);

    tarjetas.forEach(function (_, i) {
      var b = document.createElement('button');
      b.type = 'button';
      b.setAttribute('aria-label', 'Ir al testimonio ' + (i + 1));
      if (i === 0) b.classList.add('activo');
      b.addEventListener('click', function () {
        tarjetas[i].scrollIntoView({ behavior: 'smooth', inline: 'start', block: 'nearest' });
      });
      puntosCont.appendChild(b);
    });

    var puntos = Array.prototype.slice.call(puntosCont.children);

    function indiceActual() {
      var centro = pista.scrollLeft;
      var masCercano = 0;
      var distMin = Infinity;
      tarjetas.forEach(function (t, i) {
        var dist = Math.abs(t.offsetLeft - centro);
        if (dist < distMin) {
          distMin = dist;
          masCercano = i;
        }
      });
      return masCercano;
    }

    function actualizarPuntos() {
      var i = indiceActual();
      puntos.forEach(function (p, j) {
        p.classList.toggle('activo', j === i);
      });
    }

    pista.addEventListener(
      'scroll',
      function () {
        window.requestAnimationFrame(actualizarPuntos);
      },
      { passive: true }
    );

    function mover(delta) {
      var i = Math.max(0, Math.min(tarjetas.length - 1, indiceActual() + delta));
      tarjetas[i].scrollIntoView({ behavior: 'smooth', inline: 'start', block: 'nearest' });
    }

    if (btnAnterior) btnAnterior.addEventListener('click', function () { mover(-1); });
    if (btnSiguiente) btnSiguiente.addEventListener('click', function () { mover(1); });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
