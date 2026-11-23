"use strict";
document.addEventListener("DOMContentLoaded",()=>{window.INFOPProgress.renderizar();document.querySelectorAll("[data-view],[data-go]").forEach(el=>el.addEventListener("click",()=>window.INFOPNavigation.ir(el.dataset.view||el.dataset.go)));const toggle=document.getElementById("menu-toggle");toggle?.addEventListener("click",()=>{const abierto=document.getElementById("sidebar").classList.toggle("open");toggle.setAttribute("aria-expanded",String(abierto));});document.addEventListener("keydown",e=>{if(e.key==="Escape"){document.getElementById("sidebar")?.classList.remove("open");toggle?.setAttribute("aria-expanded","false");}});});

// No mostrar imágenes rotas: se usarán los archivos oficiales al incorporarlos.
document.addEventListener('DOMContentLoaded',()=>{
 document.querySelectorAll('[data-official-logo]').forEach(img=>{const hide=()=>img.classList.add('missing');img.addEventListener('error',hide);if(img.complete && img.naturalWidth===0)hide();});
 const banner=document.getElementById('official-banner');const wrap=document.getElementById('hero-banner');if(banner&&wrap){const missing=()=>{banner.style.display='none';wrap.classList.add('missing');};banner.addEventListener('error',missing);if(banner.complete&&banner.naturalWidth===0)missing();}
});
