// Observa cuándo el Hero entra o sale de la pantalla
const hero = document.querySelector('#hero');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Estamos en el Hero — ocultamos el header
      document.querySelector('header').classList.remove('visible');
    } else {
      // Salimos del Hero — mostramos el header
      document.querySelector('header').classList.add('visible');
    }
  });
}, { threshold: 0.1 });

observer.observe(hero);