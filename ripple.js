/* ─────────────────────────────────────────────────────────────────────────
   ripple.js — Adaptive Click Feedback (v2)

   Element boyut + tipine göre 3 farklı tepki:

   1. SMALL (icons, toggles, sosyal ikonlar):
      iOS SF Symbols tarzı bounce press — scale(0.88) → elastic bounce(1.0)
      Hızlı (280ms), no ripple circle, profesyonel ve temiz hissiyat

   2. MEDIUM (butonlar):
      Refined MD3 ripple + scale(0.98) press
      Accent color tint (altın), subtle opacity, hızlı fade

   3. LARGE (galeri/feature kartları):
      Düşük opacity MD3 ripple, scale yok (kartlar küçülmemeli)

   prefers-reduced-motion: tüm efektler devre dışı
   ───────────────────────────────────────────────────────────────────────── */
(() => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  // Selector grupları
  const SMALL = [
    '.theme-toggle', '.lang-toggle', '.nav-logo',
    '.footer-socials a', '.lightbox-close', '.burger',
    '.proj-3d-ar-btn', '.lang-toggle .lang-current',
    '[data-press="icon"]'
  ].join(',');

  const MEDIUM = [
    '.btn', '.proj-back-btn', '.footer-legal',
    '[data-press="button"]'
  ].join(',');

  const LARGE = [
    '.gallery-item', '.proj-feature',
    '[data-press="card"]'
  ].join(',');

  const ALL = `${SMALL}, ${MEDIUM}, ${LARGE}, [data-ripple]`;

  // ── CSS injection ───────────────────────────────────────────────────────
  const style = document.createElement('style');
  style.textContent = `
    /* SMALL — iOS SF Symbols tarzı bounce press */
    .press-icon {
      transition: transform .3s cubic-bezier(0.34, 1.56, 0.64, 1),
                  filter .15s ease;
      transform-origin: center;
    }
    .press-icon.is-pressed {
      transform: scale(0.88);
      transition: transform .08s cubic-bezier(0.4, 0, 1, 1),
                  filter .08s ease;
      filter: brightness(1.15);
    }

    /* MEDIUM — buton press feel + refined MD3 ripple */
    .press-btn {
      transition: transform .25s cubic-bezier(0.34, 1.56, 0.64, 1) !important;
    }
    .press-btn.is-pressed {
      transform: translateY(1px) scale(0.985) !important;
      transition: transform .08s cubic-bezier(0.4, 0, 1, 1) !important;
    }

    /* MD3 ripple — accent color, subtle, hızlı fade */
    .mdui-ripple {
      position: absolute;
      pointer-events: none;
      border-radius: 50%;
      background: radial-gradient(
        closest-side,
        currentColor max(calc(100% - 60px), 60%),
        transparent 100%
      );
      will-change: transform, opacity;
      transition: opacity .35s ease-out;
      mix-blend-mode: plus-lighter;
      z-index: 0;
    }
    body.light .mdui-ripple { mix-blend-mode: multiply; }
    .mdui-ripple-host { position: relative; overflow: hidden; }
  `;
  document.head.appendChild(style);

  // ── Helpers ─────────────────────────────────────────────────────────────
  function ensureHost(el) {
    if (el.classList.contains('mdui-ripple-host')) return;
    const cs = getComputedStyle(el);
    if (cs.position === 'static') el.style.position = 'relative';
    if (cs.overflow === 'visible') el.style.overflow = 'hidden';
    el.classList.add('mdui-ripple-host');
  }

  // ── EFFECT 1: Icon bounce press ─────────────────────────────────────────
  function applyIconPress(el) {
    el.classList.add('press-icon', 'is-pressed');
    const release = () => {
      el.classList.remove('is-pressed');
      window.removeEventListener('pointerup', release);
      window.removeEventListener('pointercancel', release);
    };
    window.addEventListener('pointerup', release, { once: true });
    window.addEventListener('pointercancel', release, { once: true });
  }

  // ── EFFECT 2 & 3: MD3 ripple (buton/kart) ───────────────────────────────
  function applyRipple(el, e, opts) {
    ensureHost(el);
    const rect = el.getBoundingClientRect();
    const w = rect.width, h = rect.height;
    if (w === 0 || h === 0) return;

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const maxDim     = Math.max(w, h);
    const hypotenuse = Math.sqrt(w * w + h * h);
    const initialSize= Math.floor(maxDim * 0.2) || 4;
    const softEdge   = Math.max(0.35 * maxDim, 75);
    const finalScale = (hypotenuse + 10 + softEdge) / initialSize;
    // Kısa süreli, hafif buton hissi
    const duration   = Math.min(Math.max(350, hypotenuse * 1.2), 850);

    const ripple = document.createElement('span');
    ripple.className = 'mdui-ripple';
    ripple.setAttribute('aria-hidden', 'true');
    ripple.style.width   = initialSize + 'px';
    ripple.style.height  = initialSize + 'px';
    ripple.style.left    = (x - initialSize / 2) + 'px';
    ripple.style.top     = (y - initialSize / 2) + 'px';
    ripple.style.opacity = String(opts.opacity);
    if (opts.color) ripple.style.color = opts.color;

    el.appendChild(ripple);

    ripple.animate(
      [{ transform: 'scale(1)' }, { transform: `scale(${finalScale})` }],
      { duration, easing: 'cubic-bezier(0.2, 0, 0, 1)', fill: 'forwards' }
    );

    // Buton scale press ekle
    if (opts.scalePress) {
      el.classList.add('press-btn', 'is-pressed');
    }

    const startedAt = performance.now();
    const release = () => {
      const elapsed = performance.now() - startedAt;
      const wait = Math.max(0, 200 - elapsed);
      setTimeout(() => {
        ripple.style.opacity = '0';
        if (opts.scalePress) el.classList.remove('is-pressed');
        setTimeout(() => ripple.remove(), 380);
      }, wait);
      window.removeEventListener('pointerup', release);
      window.removeEventListener('pointercancel', release);
    };
    window.addEventListener('pointerup', release, { once: true });
    window.addEventListener('pointercancel', release, { once: true });
  }

  // ── Global delegated handler — element tipine göre efekt seçer ───────────
  document.addEventListener('pointerdown', (e) => {
    if (!e.isPrimary) return;
    const el = e.target.closest(ALL);
    if (!el) return;
    if (el.disabled || el.getAttribute('aria-disabled') === 'true') return;

    // Tip belirleme — selector öncelikli, sonra boyuta bakar
    const isSmallSelector  = el.matches(SMALL);
    const isMediumSelector = el.matches(MEDIUM);
    const isLargeSelector  = el.matches(LARGE);

    if (isSmallSelector) {
      applyIconPress(el);
    } else if (isMediumSelector) {
      applyRipple(el, e, { opacity: 0.16, scalePress: true });
    } else if (isLargeSelector) {
      applyRipple(el, e, { opacity: 0.08, scalePress: false });
    } else {
      // Generic [data-ripple] — boyuta göre karar
      const rect = el.getBoundingClientRect();
      const small = Math.max(rect.width, rect.height) < 60;
      if (small) applyIconPress(el);
      else applyRipple(el, e, { opacity: 0.12, scalePress: true });
    }
  }, { passive: true });
})();
