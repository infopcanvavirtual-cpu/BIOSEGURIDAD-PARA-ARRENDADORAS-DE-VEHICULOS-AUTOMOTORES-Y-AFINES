"use strict";
window.INFOPNavigation = {
  titulos: { inicio: 'Inicio', bienvenida: 'Bienvenida', unidades: 'Unidades', progreso: 'Mi progreso' },
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
    const titulo = document.getElementById('topbar-title');
    if (titulo) titulo.textContent = this.titulos[destino] || destino;
    document.getElementById('sidebar')?.classList.remove('open');
    const fondo = document.getElementById('sidebar-backdrop');
    if (fondo) fondo.hidden = true;
    document.getElementById('menu-toggle')?.setAttribute('aria-expanded', 'false');
    window.scrollTo({ top: 0, behavior: 'instant' });
    document.getElementById('main-content')?.focus({ preventScroll: true });
  }
};
