// ── HEADER — visible/oculto según sección ──────────────────────
// IntersectionObserver detecta cuándo el Hero entra o sale de pantalla.
// Cuando el Hero deja de ser visible, JS agrega .visible al header.
// Cuando el Hero vuelve a ser visible, la quita.
// threshold: 0.1 — se activa cuando el Hero tiene menos del 10% visible,
// evitando el retraso en la transición al pasar a Bio.

const hero = document.querySelector('#hero');

const headerObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      document.querySelector('header').classList.remove('visible');
    } else {
      document.querySelector('header').classList.add('visible');
    }
  });
}, { threshold: 0.1 });

headerObserver.observe(hero);

// ── FOOTER — visible solo en la sección Contacto ───────────────
// Mismo patrón que el header: IntersectionObserver sobre #contacto.
// El footer está en position: fixed en el CSS — oculto por defecto.
// Cuando Contacto es visible, JS agrega .visible al footer y aparece
// pegado al fondo de esa sección. Al salir de Contacto desaparece.

const contacto = document.querySelector('#contacto');

const footerObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      document.querySelector('footer').classList.add('visible');
    } else {
      document.querySelector('footer').classList.remove('visible');
    }
  });
}, { threshold: 0.1 });

footerObserver.observe(contacto);

// ── DARK / LIGHT MODE TOGGLE ────────────────────────────────────
// Al hacer click alterna la clase light-mode en el body.
// CSS se encarga de todos los cambios de color automáticamente
// a través de las variables definidas en body.light-mode en :root.
// El texto del botón cambia entre DARK y LIGHT según el modo activo.

const themeToggle = document.getElementById('theme-toggle');

themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('light-mode');
  const isLight = document.body.classList.contains('light-mode');
  themeToggle.textContent = isLight ? '○ LIGHT' : '● DARK';
});

// ================================
// CARRUSEL DE STACK — generado dinámicamente
// ================================

/*
  Lista curada de tecnologías para el carrusel decorativo.
  Para agregar o sacar una tecnología, solo hay que editar este array —
  no hace falta tocar el HTML ni repetir bloques a mano.
*/
const STACK_CARRUSEL_ITEMS = [
  "LangChain",
  "LangGraph",
  "Agentic AI",
  "Prompt Engineering",
  "REST API",
  "JWT",
  "Zod",
  "OOP",
  "MVC",
  "SQLite",
  "NumPy",
  "Pandas",
  "Vite",
  "Postman",
];

/*
  Genera el track del carrusel duplicando la lista en 2 bloques idénticos.
  En vez de usar un porcentaje fijo (-50%) para la animación, medimos
  el ancho real en píxeles de un bloque con JS — esto evita saltos
  causados por redondeo de sub-píxeles del navegador al medir texto.
*/
function buildStackCarrusel() {
  const track = document.getElementById("stack-carrusel-track");
  if (!track) return;

  const oneBlock = STACK_CARRUSEL_ITEMS.map(
    (item) =>
      `<span class="stack-carrusel-item">${item}</span><span class="stack-carrusel-item">·</span>`
  ).join("");

  // 2 bloques idénticos pegados
  track.innerHTML = oneBlock.repeat(2);

  // En vez de calcular la mitad matemáticamente (scrollWidth / 2),
  // medimos DÓNDE arranca realmente el segundo bloque en el DOM —
  // esto evita cualquier error de redondeo por el gap entre elementos
  const children = track.children;
  const secondBlockStart = children[children.length / 2];
  const distance =
    secondBlockStart.getBoundingClientRect().left -
    track.getBoundingClientRect().left;

  track.style.setProperty("--carrusel-distance", `-${distance}px`);
}

buildStackCarrusel();

// Recalcula el ancho si la ventana cambia de tamaño —
// el texto puede re-flowear y el ancho en px cambia
window.addEventListener("resize", buildStackCarrusel);