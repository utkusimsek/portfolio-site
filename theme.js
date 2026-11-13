/* theme.js — day / night (dark navy) theme.
   The first paint is decided by the inline <head> script on every page
   (saved choice, else the system setting). This file wires the toggle and
   plays the switch: with View Transitions the new theme opens as a circle
   from the button; elsewhere colours cross-fade. */
(() => {
  const KEY = 'hus-theme';
  const root = document.documentElement;
  const meta = document.querySelector('meta[name="theme-color"]');
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const system = matchMedia('(prefers-color-scheme: dark)');

  const saved = () => { try { return localStorage.getItem(KEY); } catch (e) { return null; } };
  const current = () => (root.dataset.theme === 'dark' ? 'dark' : 'light');

  const apply = (theme) => {
    root.dataset.theme = theme;
    root.style.colorScheme = theme;
    if (meta) meta.content = theme === 'dark' ? '#0C1726' : '#EDF1F4';
    document.querySelectorAll('.theme-toggle').forEach(b => b.setAttribute('aria-pressed', String(theme === 'dark')));
    document.dispatchEvent(new CustomEvent('themechange', { detail: theme }));
  };

  const play = (theme, x, y) => {
    if (theme === current()) return;
    if (reduced.matches) { apply(theme); return; }

    if (typeof document.startViewTransition === 'function') {
      const r = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y));
      root.classList.add('vt-theme');
      const vt = document.startViewTransition(() => apply(theme));
      vt.ready.then(() => {
        root.animate(
          { clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${r}px at ${x}px ${y}px)`] },
          { duration: 1000, easing: 'cubic-bezier(.19, 1, .22, 1)', pseudoElement: '::view-transition-new(root)' }
        );
      }).catch(() => {});
      vt.finished.finally(() => root.classList.remove('vt-theme'));
      return;
    }

    root.classList.add('theme-fade');
    apply(theme);
    setTimeout(() => root.classList.remove('theme-fade'), 650);
  };

  apply(current());

  document.addEventListener('click', (e) => {
    const btn = e.target.closest('.theme-toggle');
    if (!btn) return;
    const next = current() === 'dark' ? 'light' : 'dark';
    try { localStorage.setItem(KEY, next); } catch (err) {}
    const r = btn.getBoundingClientRect();
    play(next, r.left + r.width / 2, r.top + r.height / 2);
  });

  // follow the system only while the visitor has not chosen
  const onSystem = (e) => {
    if (saved()) return;
    const btn = document.querySelector('.theme-toggle');
    const r = btn ? btn.getBoundingClientRect() : { left: innerWidth - 60, top: 20, width: 40, height: 40 };
    play(e.matches ? 'dark' : 'light', r.left + r.width / 2, r.top + r.height / 2);
  };
  if (system.addEventListener) system.addEventListener('change', onSystem);
})();
