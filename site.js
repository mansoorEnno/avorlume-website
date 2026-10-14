document.documentElement.classList.add('js');
document.getElementById('year').textContent = new Date().getFullYear();
const toggle = document.getElementById('menu-toggle');
const links = document.getElementById('nav-links');
function closeMenu(returnFocus = false) {
  links.classList.remove('open');
  toggle.setAttribute('aria-expanded', 'false');
  toggle.textContent = 'Menu ☰';
  if (returnFocus) toggle.focus();
}
toggle.addEventListener('click', () => {
  const open = links.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(open));
  toggle.textContent = open ? 'Close ✕' : 'Menu ☰';
});
links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => closeMenu()));
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && links.classList.contains('open')) closeMenu(true);
});
document.addEventListener('click', e => {
  if (!e.target.closest('header')) closeMenu();
});
matchMedia('(min-width: 851px)').addEventListener('change', () => closeMenu());
const mobileCta = document.querySelector('.mobile-cta');
if ('IntersectionObserver' in window) {
  new IntersectionObserver(entries => {
    mobileCta.hidden = entries.some(entry => entry.isIntersecting);
  }).observe(document.getElementById('contact'));
}
const form = document.getElementById('enquiry-form');
const submit = form.querySelector('button[type="submit"]');
const status = document.getElementById('form-status');
for (const name of ['name', 'details']) {
  const field = form.elements[name];
  field.addEventListener('input', () => field.setCustomValidity(''));
  field.addEventListener('change', () => {
    field.value = field.value.trim();
    const minimum = name === 'details' ? 15 : 1;
    field.setCustomValidity(field.value.length < minimum ?
      (name === 'details' ? 'Please describe your project in at least 15 characters.' : 'Please enter your name.') : '');
  });
}
form.addEventListener('submit', () => {
  submit.disabled = true;
  status.hidden = false;
  status.textContent = 'Opening the form provider’s spam check. If it cannot complete, email hello@avorlume.com.';
});
window.addEventListener('pageshow', () => {
  submit.disabled = false;
  status.hidden = true;
});

// Useful service links preselect the matching enquiry topic without submitting data.
document.querySelectorAll('[data-service]').forEach(link => {
  link.addEventListener('click', () => {
    form.elements.service.value = link.dataset.service;
  });
});
