/* ─────────────────────────────────────────────────────────────────────────
   GooeyTextMorph — React komponent vanilla port
   SVG feColorMatrix threshold filter + CSS blur ile akışkan ("gooey") morph.

   Orijinal React kodunun davranışı:
     - blur: blur(min(8/f − 8, 100))px
     - opacity: pow(f, 0.4) × 100%
     - morphTime: 1 sn, cooldownTime: 0.25 sn

   iOS Safari uyumluluk:
     - filter VE webkitFilter ikisi de set edilir
     - Stage'de -webkit-filter prefix + translate3d(0,0,0) compositor'a iter
     - SVG xmlns + viewBox + 1×1 boyut + color-interpolation-filters=sRGB
     - filter elementinde x/y/width/height attribute'leri (-50%/200%)
   ───────────────────────────────────────────────────────────────────────── */
(function () {
  const wrap  = document.getElementById('gooeyWrap');
  const text1 = document.getElementById('gooeyText1');
  const text2 = document.getElementById('gooeyText2');
  if (!wrap || !text1 || !text2) return;

  // ── Config (orijinal komponent default'ları) ──
  const morphTime    = 1.0;
  const cooldownTime = 0.25;

  function getTexts() {
    const lang = (document.documentElement.lang || 'tr').toLowerCase();
    return lang.startsWith('en')
      ? ['Imagine.', 'Design.', 'Bring it to life.']
      : ['Hayal et.', 'Tasarla.', 'Gerçeğe dönüştür.'];
  }

  // Her metin kendi vurgu rengi — marka paletinden
  function getColors() {
    const isLight = document.body.classList.contains('light');
    return isLight
      ? ['#1a1a1a', '#c9a96e', '#5d4ed1']
      : ['#ffffff', '#c9a96e', '#8b7df8'];
  }

  // ── State ──
  let texts       = getTexts();
  let colors      = getColors();
  let textIndex   = texts.length - 1;
  let time        = performance.now();
  let morph       = 0;
  let cooldown    = cooldownTime;
  let rafId       = 0;
  let inView      = true;

  // ── Style helpers — iOS için filter ve webkitFilter ikisini de set ──
  function setFilter(el, value) {
    el.style.filter = value;
    el.style.webkitFilter = value;
  }

  function applyTextAt(el, idx) {
    el.textContent = texts[idx];
    el.style.color = colors[idx];
  }
  applyTextAt(text1, textIndex % texts.length);
  applyTextAt(text2, (textIndex + 1) % texts.length);

  // ── Morph helpers (React komponentinden birebir) ──
  function setMorph(fraction) {
    setFilter(text2, `blur(${Math.min(8 / fraction - 8, 100)}px)`);
    text2.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

    const f1 = 1 - fraction;
    setFilter(text1, `blur(${Math.min(8 / f1 - 8, 100)}px)`);
    text1.style.opacity = `${Math.pow(f1, 0.4) * 100}%`;
  }

  function doCooldown() {
    morph = 0;
    setFilter(text2, '');
    text2.style.opacity = '100%';
    setFilter(text1, '');
    text1.style.opacity = '0%';
  }

  function doMorph() {
    morph -= cooldown;
    cooldown = 0;
    let fraction = morph / morphTime;
    if (fraction > 1) {
      cooldown = cooldownTime;
      fraction = 1;
    }
    setMorph(fraction);
  }

  // ── Animation loop ──
  function animate() {
    if (!inView) { rafId = 0; return; }

    rafId = requestAnimationFrame(animate);
    const newTime = performance.now();
    const shouldIncrementIndex = cooldown > 0;
    const dt = (newTime - time) / 1000;
    time = newTime;
    cooldown -= dt;

    if (cooldown <= 0) {
      if (shouldIncrementIndex) {
        textIndex = (textIndex + 1) % texts.length;
        applyTextAt(text1, textIndex % texts.length);
        applyTextAt(text2, (textIndex + 1) % texts.length);
      }
      doMorph();
    } else {
      doCooldown();
    }
  }

  function resume() {
    if (rafId) return;
    time = performance.now();
    rafId = requestAnimationFrame(animate);
  }

  // ── Lifecycle: pause off-screen / hidden tab ──
  if ('IntersectionObserver' in window) {
    const obs = new IntersectionObserver(([e]) => {
      inView = e.isIntersecting;
      if (inView) resume();
    }, { threshold: 0 });
    obs.observe(wrap);
  }
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) inView = false;
    else { inView = true; resume(); }
  });

  // ── Theme / lang refresh ──
  function refreshLang() {
    const newTexts = getTexts();
    if (newTexts[0] === texts[0]) return;
    texts = newTexts;
    colors = getColors();
    textIndex = texts.length - 1;
    applyTextAt(text1, textIndex % texts.length);
    applyTextAt(text2, (textIndex + 1) % texts.length);
    morph = 0;
    cooldown = cooldownTime;
  }
  window.__vaporRefreshLang = refreshLang;
  new MutationObserver(refreshLang).observe(document.documentElement,
    { attributes: true, attributeFilter: ['lang'] });

  // Theme değişimi → renkleri yenile
  new MutationObserver(() => {
    colors = getColors();
    text1.style.color = colors[textIndex % texts.length];
    text2.style.color = colors[(textIndex + 1) % texts.length];
  }).observe(document.body, { attributes: true, attributeFilter: ['class'] });

  // Kick off (font yüklemesini bekle)
  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(() => { time = performance.now(); resume(); });
  } else {
    setTimeout(() => { time = performance.now(); resume(); }, 600);
  }
})();
