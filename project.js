/* project.js — shared nav behaviour for project detail pages */
(() => {
  const wrap = document.getElementById('nav');
  if (!wrap) return;
  // project covers range from studio-white to night renders, so the nav
  // keeps its light glass everywhere instead of switching over the hero
  wrap.classList.add('is-light');
  requestAnimationFrame(() => document.documentElement.classList.add('is-loaded'));

  const burger = document.getElementById('burger');
  const menu = document.getElementById('mobileMenu');
  if (burger && menu) {
    const close = () => { burger.setAttribute('aria-expanded', 'false'); menu.hidden = true; };
    burger.addEventListener('click', () => {
      const open = burger.getAttribute('aria-expanded') !== 'true';
      burger.setAttribute('aria-expanded', String(open));
      menu.hidden = !open;
    });
    menu.querySelectorAll('a').forEach(a => a.addEventListener('click', close));
    document.addEventListener('keydown', e => { if (e.key === 'Escape') close(); });
  }
})();
