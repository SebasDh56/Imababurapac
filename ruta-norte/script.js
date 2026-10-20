const effectStyles = document.createElement('link');
effectStyles.rel = 'stylesheet';
effectStyles.href = 'effects.css';
document.head.append(effectStyles);

const isHomePage = /(?:^|\/)index\.html$/i.test(window.location.pathname) || window.location.pathname.endsWith('/');
if (isHomePage) {
  const loader = document.createElement('div');
  loader.className = 'page-loader';
  loader.setAttribute('aria-hidden', 'true');
  loader.innerHTML = '<div class="loader-content"><div class="loader-mark">IC</div><div class="loader-line"></div><p class="loader-caption">Imbaburapac Churimi Canchic</p></div>';
  document.body.prepend(loader);
  window.addEventListener('load', () => window.setTimeout(() => loader.classList.add('is-done'), 1200));
}

const menuButton = document.querySelector('.menu-button');
const menu = document.querySelector('#menu');

if (menuButton && menu) {
  menuButton.addEventListener('click', () => {
    const open = menu.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(open));
    menuButton.textContent = open ? '×' : '☰';
  });

  document.querySelectorAll('#menu a').forEach((link) => link.addEventListener('click', () => {
    menu.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.textContent = '☰';
  }));
}

const header = document.querySelector('.header');
const updateHeaderState = () => header?.classList.toggle('is-scrolled', window.scrollY > 12);
updateHeaderState();
window.addEventListener('scroll', updateHeaderState, { passive: true });

const revealTargets = document.querySelectorAll('.destination, .promise, .cta, .footer-grid, .benefits article');
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  }), { threshold: 0.12 });
  revealTargets.forEach((element) => { element.classList.add('reveal'); observer.observe(element); });
} else revealTargets.forEach((element) => element.classList.add('is-visible'));

const dateInput = document.querySelector('input[type="date"]');
if (dateInput) dateInput.min = new Date().toISOString().slice(0, 10);

const bookingForm = document.querySelector('#booking-form');
if (bookingForm) bookingForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const message = `Revisaremos opciones de ${data.get('origen')} a ${data.get('destino')} para el ${data.get('fecha')}. Esta demostración no procesa pagos.`;
  document.querySelector('#booking-result').textContent = message;
});
