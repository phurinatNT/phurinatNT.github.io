'use strict';
document.getElementById('year').textContent = new Date().getFullYear();
const gallery = document.getElementById('gallery');
const galleryImage = document.getElementById('gallery-image');
const caption = document.getElementById('gallery-caption');
document.querySelectorAll('[data-image]').forEach(button => {
  button.addEventListener('click', () => {
    galleryImage.src = button.dataset.image;
    galleryImage.alt = button.dataset.caption;
    caption.textContent = button.dataset.caption;
    gallery.showModal();
    document.body.classList.add('modal-open');
  });
});
gallery.querySelector('.close-gallery').addEventListener('click', () => gallery.close());
gallery.addEventListener('click', event => { if (event.target === gallery) { const r = gallery.getBoundingClientRect(); if(event.clientX < r.left || event.clientX > r.right || event.clientY < r.top || event.clientY > r.bottom) gallery.close(); } });
gallery.addEventListener('close', () => document.body.classList.remove('modal-open'));
const links = [...document.querySelectorAll('nav a')];
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => { if(entry.isIntersecting) links.forEach(link => {
      const active = link.hash === '#' + entry.target.id;
      link.classList.toggle('active', active);
      if(active) link.setAttribute('aria-current', 'location'); else link.removeAttribute('aria-current');
    }); });
  }, { rootMargin: '-15% 0px -60% 0px' });
  document.querySelectorAll('main section[id]').forEach(section => observer.observe(section));
}
