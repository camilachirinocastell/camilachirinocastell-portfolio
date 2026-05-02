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