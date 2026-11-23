"use strict";
window.INFOPNavigation = {
  ir(destino) {
    const vista = document.getElementById(`view-${destino}`);
    if (!vista) return;
    document.querySelectorAll('.view').forEach(el => {
      const activo = el === vista;
      el.hidden = !activo;
      el.classList.toggle('active', activo);
    });
    document.querySelectorAll('.nav-link').forEach(el => {
      const activo = el.dataset.view === destino;
      el.classList.toggle('active', activo);
      if (activo) el.setAttribute('aria-current', 'page');
      else el.removeAttribute('aria-current');
    });
    document.getElementById('sidebar')?.classList.remove('open');
    document.getElementById('menu-toggle')?.setAttribute('aria-expanded', 'false');
    window.scrollTo({ top: 0, behavior: 'instant' });
    document.getElementById('main-content')?.focus({ preventScroll: true });
  }
};
