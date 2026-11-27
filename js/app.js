"use strict";
document.addEventListener('DOMContentLoaded', () => {
  // El progreso sigue siendo de demostración hasta integrar Moodle.
  window.INFOPProgress?.renderizar?.();

  document.querySelectorAll('[data-view], [data-go]').forEach(el => {
    el.addEventListener('click', () => {
      window.INFOPNavigation?.ir(el.dataset.view || el.dataset.go);
    });
  });

  const sidebar = document.getElementById('sidebar');
  const toggle = document.getElementById('menu-toggle');
  const fondo = document.getElementById('sidebar-backdrop');
  const cerrarMenu = () => {
    sidebar?.classList.remove('open');
    if (fondo) fondo.hidden = true;
    toggle?.setAttribute('aria-expanded', 'false');
  };
  toggle?.addEventListener('click', () => {
    const abierto = sidebar?.classList.toggle('open') ?? false;
    if (fondo) fondo.hidden = !abierto;
    toggle.setAttribute('aria-expanded', String(abierto));
  });
  fondo?.addEventListener('click', cerrarMenu);
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') cerrarMenu();
  });

  // Ocultar imágenes oficiales solo cuando falte su archivo.
  document.querySelectorAll('[data-official-logo]').forEach(img => {
    const ocultar = () => img.classList.add('missing');
    img.addEventListener('error', ocultar);
    if (img.complete && img.naturalWidth === 0) ocultar();
  });
  const banner = document.getElementById('official-banner');
  const contenedor = document.getElementById('hero-banner');
  if (banner && contenedor) {
    const ocultar = () => {
      banner.style.display = 'none';
      contenedor.classList.add('missing');
    };
    banner.addEventListener('error', ocultar);
    if (banner.complete && banner.naturalWidth === 0) ocultar();
  }
});
