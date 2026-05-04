/* ─────────────────────────────────────────────────────────────────────────
   GooeyTextMorph — vanilla JS port
   React component'in vanilla port'u. SVG threshold filter + CSS blur ile
   3 metin arasında akışkan ("gooey") morph geçişi.

   States: morphing → cooldown → next pair → ...
   IntersectionObserver ile görünmeyen bölümde rAF tamamen durur.
   Theme/lang değişikliklerine tepki verir.
   ───────────────────────────────────────────────────────────────────────── */
(function () {
  const wrap  = document.getElementById('gooeyWrap');
  const text1 = document.getElementById('gooeyText1');
  const text2 = document.getElementById('gooeyText2');
  if (!wrap || !text1 || !text2) return;

  // ── Config (orijinal React komponentindeki defaultlar) ──
  const morphTime    = 1.0;
  const cooldownTime = 0.25;

  // i18n key'lerinden HTML'siz düz metin türet (showcase.title düz formu)
  // Hayal et. / Tasarla. / Gerçeğe dönüştür. (TR) | Imagine. / Design. / Bring it to life. (EN)
  function getTexts() {
    const lang = (document.documentElement.lang || 'tr').toLowerCase();
    return lang.startsWith('en')
      ? ['Imagine.', 'Design.', 'Bring it to life.']
      : ['Hayal et.', 'Tasarla.', 'Gerçeğe dönüştür.'];
  }

  // ── State ──
  let texts       = getTexts();
  let textIndex   = texts.length - 1;
  let time        = performance.now();
  let morph       = 0;
  let cooldown    = cooldownTime;
  let rafId       = 0;
  let inView      = true;
  const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;

  // İlk metinleri yerleştir
  function applyText(el, t) { el.textContent = t; }
  applyText(text1, texts[textIndex % texts.length]);
  applyText(text2, texts[(textIndex + 1) % texts.length]);

  // ── Morph helpers ──
  function setMorph(fraction) {
    // text2 (sıradaki) içe doğru gelir, text1 (mevcut) dışa doğru gider
    text2.style.filter  = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
    text2.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

    const f1 = 1 - fraction;
    text1.style.filter  = `blur(${Math.min(8 / f1 - 8, 100)}px)`;
    text1.style.opacity = `${Math.pow(f1, 0.4) * 100}%`;
  }

  function doCooldown() {
    morph = 0;
    text2.style.filter  = '';
    text2.style.opacity = '100%';
    text1.style.filter  = '';
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

  // Reduced motion: blur yerine basit fade
  function doReducedFrame() {
    morph -= cooldown;
    cooldown = 0;
    let fraction = morph / morphTime;
    if (fraction > 1) {
      cooldown = cooldownTime;
      fraction = 1;
    }
    text2.style.opacity = `${fraction * 100}%`;
    text1.style.opacity = `${(1 - fraction) * 100}%`;
    text2.style.filter = '';
    text1.style.filter = '';
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
        applyText(text1, texts[textIndex % texts.length]);
        applyText(text2, texts[(textIndex + 1) % texts.length]);
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
  // Lang değişince yeni metin setine geç ve indeksi resetle
  function refreshLang() {
    const newTexts = getTexts();
    if (newTexts[0] === texts[0]) return;
    texts = newTexts;
    textIndex = texts.length - 1;
    applyText(text1, texts[textIndex % texts.length]);
    applyText(text2, texts[(textIndex + 1) % texts.length]);
    morph = 0;
    cooldown = cooldownTime;
  }
  window.__vaporRefreshLang = refreshLang; // i18n.js explicit hook (geriye dönük uyumluluk)
  new MutationObserver(refreshLang).observe(document.documentElement,
    { attributes: true, attributeFilter: ['lang'] });
  // Theme değişikliği CSS'e bağlı, JS reset gerekmez

  // Kick off (font yüklemesini bekle ki ilk frame'de doğru ölçü olsun)
  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(() => { time = performance.now(); resume(); });
  } else {
    setTimeout(() => { time = performance.now(); resume(); }, 600);
  }
})();
