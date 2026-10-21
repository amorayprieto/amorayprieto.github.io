// Portfolio : saisie de la requête au chargement + visionneuse d'images.
(function () {
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // La requête se tape une seule fois au chargement.
  var q = document.querySelector('.query[data-query]');
  if (q && !reduce) {
    var text = q.getAttribute('data-query'), i = 0;
    q.textContent = '';
    (function type() {
      q.textContent = text.slice(0, ++i);
      if (i < text.length) setTimeout(type, 38 + Math.random() * 45);
    })();
  }

  // Visionneuse des extraits de projet.
  var dlg = document.querySelector('.lightbox');
  if (!dlg || typeof dlg.showModal !== 'function') return;
  var img = dlg.querySelector('img');
  document.querySelectorAll('.shot').forEach(function (b) {
    b.addEventListener('click', function () {
      img.src = b.getAttribute('data-full');
      dlg.showModal();
    });
  });
  dlg.querySelector('.lb-close').addEventListener('click', function () { dlg.close(); });
  dlg.addEventListener('click', function (ev) { if (ev.target === dlg) dlg.close(); });
})();
