/* ─────────────────────────────────────────────────────────────────────────
   Slogan Crossfade — universal smooth animation
   3 metin arasında akışkan geçiş: opacity + hafif blur + subtle scale + ease.
   SVG threshold filter dependency YOK — iOS dahil tüm platformlarda çalışır.

   States: morphing → cooldown → next pair → ...
   IntersectionObserver ile görünmeyen bölümde rAF tamamen durur.
   Theme/lang değişikliklerine tepki verir.
   ───────────────────────────────────────────────────────────────────────── */
(function () {
  const wrap  = document.getElementById('gooeyWrap');
  const text1 = document.getElementById('gooeyText1');
  const text2 = document.getElementById('gooeyText2');
  if (!wrap || !text1 || !text2) return;

  // ── Config ──
  const morphTime    = 1.0;   // saniye, geçiş süresi
  const cooldownTime = 0.45;  // saniye, geçiş sonrası bekleme (smooth ritim)
  const MAX_BLUR     = 6;     // px, geçişte uygulanan max blur (subtle)
  const SCALE_DELTA  = 0.04;  // 0.96 → 1.00 → 1.04 scale aralığı

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
  const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;

  // ── Style helpers — webkit prefix dahil ──
  function setStyle(el, opacity, blur, scale) {
    el.style.opacity = opacity;
    const f = blur > 0.05 ? `blur(${blur.toFixed(2)}px)` : '';
    el.style.filter = f;
    el.style.webkitFilter = f;
    const t = `translate(-50%, -50%) scale(${scale.toFixed(4)}) translateZ(0)`;
    el.style.transform = t;
    el.style.webkitTransform = t;
  }

  function applyTextAt(el, idx) {
    el.textContent = texts[idx];
    el.style.color = colors[idx];
  }
  applyTextAt(text1, textIndex % texts.length);
  applyTextAt(text2, (textIndex + 1) % texts.length);
  // İlk durum: text1 gizli, text2 tam görünür (sıradaki gelecek)
  setStyle(text1, 0, 0, 1);
  setStyle(text2, 1, 0, 1);

  // ── Easing ──
  // easeInOutCubic — başta yavaş, ortada hızlı, sonda yavaş (silky smooth)
  function easeInOutCubic(t) {
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  }

  // ── Morph helpers ──
  // fraction: 0 → 1 morph progress
  //   text1 (mevcut, çıkıyor):  opacity 1→0, blur 0→MAX, scale 1→1+Δ
  //   text2 (sıradaki, geliyor): opacity 0→1, blur MAX→0, scale 1−Δ→1
  function setMorph(fraction) {
    const f = easeInOutCubic(fraction);
    setStyle(text1, 1 - f, f * MAX_BLUR,         1 + SCALE_DELTA * f);
    setStyle(text2,     f, (1 - f) * MAX_BLUR,   1 - SCALE_DELTA * (1 - f));
  }

  function doCooldown() {
    morph = 0;
    setStyle(text1, 0, 0, 1);
    setStyle(text2, 1, 0, 1);
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

  // Reduced motion: blur ve scale yok, sadece opacity crossfade
  function doReducedFrame() {
    morph -= cooldown;
    cooldown = 0;
    let fraction = morph / morphTime;
    if (fraction > 1) {
      cooldown = cooldownTime;
      fraction = 1;
    }
    setStyle(text1, 1 - fraction, 0, 1);
    setStyle(text2, fraction, 0, 1);
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
      reduceMotion ? doReducedFrame() : doMorph();
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

  // Theme değişimi → renkleri yenile, mevcut indekslere göre
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
