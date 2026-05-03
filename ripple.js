/* ─────────────────────────────────────────────────────────────────────────
   ripple.js — Material Design 3 Ripple effect (vanilla JS port)

   Verilen React component'inin algoritması birebir korundu:
   - Dinamik süre: clamp(400, hypotenuse * 1.5, 1000) ms
   - Easing: cubic-bezier(0.2, 0, 0, 1) — MD3 standard
   - Soft-edge radial gradient (closest-side, max(100%-70px, 65%))
   - INITIAL_ORIGIN_SCALE 0.2, PADDING 10
   - Minimum 300ms press (hızlı tıkta bile efekt görünür)
   - prefers-reduced-motion'da devre dışı

   Otomatik bağlanan selectorlar (HTML değişikliği gerektirmez):
   .btn, .proj-back-btn, .theme-toggle, .lang-toggle, .footer-legal,
   .gallery-item, .proj-feature, .footer-socials a, [data-ripple]
   ───────────────────────────────────────────────────────────────────────── */
(() => {
  // Reduced-motion kullanıcılarına ripple yok
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const SELECTOR = '.btn, .proj-back-btn, .theme-toggle, .lang-toggle, ' +
                   '.footer-legal, .gallery-item, .proj-feature, ' +
                   '.footer-socials a, [data-ripple]';

  const INITIAL_ORIGIN_SCALE      = 0.2;
  const PADDING                   = 10;
  const SOFT_EDGE_MIN             = 75;
  const SOFT_EDGE_RATIO           = 0.35;
  const MIN_PRESS_MS              = 300;
  const EASING                    = 'cubic-bezier(0.2, 0, 0, 1)';
  const DEFAULT_OPACITY           = 0.14;

  // CSS bir kez inject edilir (her sayfa için ayrı CSS dosyası eklemek yerine)
  const style = document.createElement('style');
  style.textContent = `
    .mdui-ripple {
      position: absolute;
      pointer-events: none;
      border-radius: 50%;
      background: radial-gradient(closest-side, currentColor max(calc(100% - 70px), 65%), transparent 100%);
      will-change: transform, opacity;
      transition: opacity .375s linear;
      mix-blend-mode: plus-lighter;
      z-index: 0;
    }
    /* Light mode: plus-lighter koyu zemin için tasarlandı, light'ta multiply daha doğru */
    body.light .mdui-ripple { mix-blend-mode: multiply; }
    /* Hedef element'ler (ripple barındıran) için stacking ve clipping garantileri */
    .mdui-ripple-host { position: relative; overflow: hidden; isolation: isolate; }
  `;
  document.head.appendChild(style);

  function ensureHost(el) {
    if (el.classList.contains('mdui-ripple-host')) return;
    const cs = getComputedStyle(el);
    // Position: static ise relative yap (ripple absolute pozisyonlamak için)
    if (cs.position === 'static') el.style.position = 'relative';
    // Overflow visible ise hidden yap (ripple kart dışına taşmasın)
    if (cs.overflow === 'visible') el.style.overflow = 'hidden';
    el.classList.add('mdui-ripple-host');
  }

  function spawnRipple(el, e) {
    ensureHost(el);
    const rect = el.getBoundingClientRect();
    const w = rect.width, h = rect.height;
    if (w === 0 || h === 0) return;

    const x = (e.clientX || rect.left + w / 2) - rect.left;
    const y = (e.clientY || rect.top + h / 2) - rect.top;

    const maxDim       = Math.max(w, h);
    const hypotenuse   = Math.sqrt(w * w + h * h);
    const initialSize  = Math.floor(maxDim * INITIAL_ORIGIN_SCALE) || 4;
    const softEdge     = Math.max(SOFT_EDGE_RATIO * maxDim, SOFT_EDGE_MIN);
    const maxRadius    = hypotenuse + PADDING;
    const finalScale   = (maxRadius + softEdge) / initialSize;
    const duration     = Math.min(Math.max(400, hypotenuse * 1.5), 1000);

    // Color override desteği: data-ripple-color="rgba(...)" veya inherit
    const colorAttr = el.getAttribute('data-ripple-color');
    const opacityAttr = parseFloat(el.getAttribute('data-ripple-opacity')) || DEFAULT_OPACITY;

    const ripple = document.createElement('span');
    ripple.className = 'mdui-ripple';
    ripple.setAttribute('aria-hidden', 'true');
    ripple.style.width  = initialSize + 'px';
    ripple.style.height = initialSize + 'px';
    ripple.style.left   = (x - initialSize / 2) + 'px';
    ripple.style.top    = (y - initialSize / 2) + 'px';
    ripple.style.opacity = String(opacityAttr);
    if (colorAttr) ripple.style.color = colorAttr;

    el.appendChild(ripple);

    const anim = ripple.animate(
      [
        { transform: 'scale(1)' },
        { transform: `scale(${finalScale})` }
      ],
      { duration, easing: EASING, fill: 'forwards' }
    );

    const startedAt = performance.now();
    const release = () => {
      const elapsed = performance.now() - startedAt;
      const wait = Math.max(0, MIN_PRESS_MS - elapsed);
      setTimeout(() => {
        ripple.style.opacity = '0';
        // Animation bitmesini bekle, sonra DOM'dan kaldır
        setTimeout(() => ripple.remove(), 420);
      }, wait);
      window.removeEventListener('pointerup', release);
      window.removeEventListener('pointercancel', release);
    };
    window.addEventListener('pointerup', release, { once: false });
    window.addEventListener('pointercancel', release, { once: false });
  }

  // Tek global delegated handler — yeni eklenen elementler de otomatik yakalanır
  document.addEventListener('pointerdown', (e) => {
    if (!e.isPrimary) return;
    const el = e.target.closest(SELECTOR);
    if (!el) return;
    if (el.disabled || el.getAttribute('aria-disabled') === 'true') return;
    spawnRipple(el, e);
  }, { passive: true });
})();
