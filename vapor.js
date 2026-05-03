/* ─────────────────────────────────────────────────────────────────────────
   VaporizeTextCycle — vanilla JS port
   React component'in port'u: 3 metin arasında döngü kuran particle
   vaporize animasyonu. Per-text color desteği var.

   States: static → vaporizing → fadingIn → waiting → ...
   ───────────────────────────────────────────────────────────────────────── */
(function () {
  const wrap   = document.getElementById('vaporWrap');
  const canvas = document.getElementById('vaporCanvas');
  if (!wrap || !canvas) return;

  const ctx = canvas.getContext('2d');

  // ── Config ──
  function getTexts() {
    // i18n script body class veya html lang ile değiştirir
    const lang = (document.documentElement.lang || 'tr').toLowerCase();
    return lang.startsWith('en')
      ? ['Imagine.', 'Design.', 'Bring it to life.']
      : ['Hayal et.', 'Tasarla.', 'Gerçeğe dönüştür.'];
  }

  // Her metnin kendi rengi (Tasarla/Design altın, diğerleri beyaz)
  // Light mode'da beyaz → koyu, altın aynı
  function getColors() {
    const isLight = document.body.classList.contains('light');
    const main = isLight ? 'rgb(26, 26, 26)' : 'rgb(255, 255, 255)';
    const accent = 'rgb(201, 169, 110)';
    return [main, accent, main];
  }

  function getBaseFontSize() {
    const w = window.innerWidth;
    if (w < 480) return 48;
    if (w < 768) return 68;
    if (w < 1100) return 96;
    return 140;
  }

  /* En uzun metin canvas'a sığsın diye dinamik ölçek.
     Tüm metinler için ölçüm yapıp en geniş olana göre font-size'ı clamp eder. */
  function calculateFitFontSize(canvasWidthCss) {
    const base = getBaseFontSize();
    if (!texts || !texts.length) return base;
    const padding = 32; // soldan/sağdan minimum boşluk (px, css)
    const maxWidth = Math.max(120, canvasWidthCss - padding * 2);

    // Geçici olarak ölç (DPR çarpansız, css px cinsinden)
    ctx.save();
    let widest = 0;
    for (let i = 0; i < texts.length; i++) {
      ctx.font = `${FONT_WEIGHT} ${base}px ${FONT_FAMILY}`;
      const w = ctx.measureText(texts[i]).width;
      if (w > widest) widest = w;
    }
    ctx.restore();
    if (widest <= maxWidth) return base;
    return Math.max(20, Math.floor(base * (maxWidth / widest)));
  }

  const FONT_FAMILY = '"Playfair Display", serif';
  const FONT_WEIGHT = 700;
  const SPREAD      = 5;
  const DENSITY     = 5;
  const VAPORIZE_DURATION = 2200;
  const FADE_IN_DURATION  = 1100;
  const WAIT_DURATION     = 900;
  const DIRECTION   = 'left-to-right';
  const ALIGNMENT   = 'center';

  // ── Helpers ──
  function transformValue(input, [iMin, iMax], [oMin, oMax], clamp = false) {
    const p = (input - iMin) / (iMax - iMin);
    let r = oMin + p * (oMax - oMin);
    if (clamp) r = oMax > oMin
      ? Math.min(Math.max(r, oMin), oMax)
      : Math.min(Math.max(r, oMax), oMin);
    return r;
  }

  function calculateVaporizeSpread(fontSize) {
    const points = [
      { size: 20, spread: 0.2 },
      { size: 50, spread: 0.5 },
      { size: 100, spread: 1.5 }
    ];
    if (fontSize <= points[0].size) return points[0].spread;
    if (fontSize >= points[points.length - 1].size) return points[points.length - 1].spread;
    let i = 0;
    while (i < points.length - 1 && points[i + 1].size < fontSize) i++;
    const p1 = points[i], p2 = points[i + 1];
    return p1.spread + (fontSize - p1.size) * (p2.spread - p1.spread) / (p2.size - p1.size);
  }

  function parseColor(color) {
    const rgba = color.match(/rgba\((\d+),\s*(\d+),\s*(\d+),\s*([\d.]+)\)/);
    const rgb  = color.match(/rgb\((\d+),\s*(\d+),\s*(\d+)\)/);
    if (rgba) return `rgba(${rgba[1]}, ${rgba[2]}, ${rgba[3]}, ${rgba[4]})`;
    if (rgb)  return `rgba(${rgb[1]}, ${rgb[2]}, ${rgb[3]}, 1)`;
    return 'rgba(255, 255, 255, 1)';
  }

  // ── State ──
  const DPR = Math.min(window.devicePixelRatio || 1, 2) * 1.5;
  let texts = getTexts();
  let colors = getColors();
  let fontSize = getBaseFontSize(); // createParticles içinde fit hesaplanır
  let transformedDensity = transformValue(DENSITY, [0, 10], [0.3, 1], true);

  let particles = [];
  let textBoundaries = null;
  let currentTextIndex = 0;
  let animationState = 'static'; // static | vaporizing | fadingIn | waiting
  let vaporizeProgress = 0;
  let fadeOpacity = 0;
  let lastTime = 0;
  let rafId = 0;
  let isInView = true;

  // ── Particle creation: text → pixel sample → particles ──
  function createParticles() {
    if (!canvas.clientWidth || !canvas.clientHeight) return;

    const W = canvas.clientWidth;
    const H = canvas.clientHeight;
    canvas.style.width  = W + 'px';
    canvas.style.height = H + 'px';
    canvas.width  = Math.floor(W * DPR);
    canvas.height = Math.floor(H * DPR);

    // Tüm metinler canvas'a sığsın diye dinamik fit
    fontSize = calculateFitFontSize(W);

    const text  = texts[currentTextIndex];
    const color = parseColor(colors[currentTextIndex] || colors[0]);
    const font  = `${FONT_WEIGHT} ${fontSize * DPR}px ${FONT_FAMILY}`;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = color;
    ctx.font = font;
    ctx.textAlign = ALIGNMENT;
    ctx.textBaseline = 'middle';
    ctx.imageSmoothingQuality = 'high';
    ctx.imageSmoothingEnabled = true;
    if ('fontKerning' in ctx) ctx.fontKerning = 'normal';
    if ('textRendering' in ctx) ctx.textRendering = 'geometricPrecision';

    const textX = canvas.width / 2;
    const textY = canvas.height / 2;

    const metrics = ctx.measureText(text);
    const textWidth = metrics.width;
    const textLeft = textX - textWidth / 2;
    textBoundaries = { left: textLeft, right: textLeft + textWidth, width: textWidth };

    ctx.fillText(text, textX, textY);
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const data = imageData.data;

    // Sampling rate
    const baseDPR = 3;
    const currentDPR = canvas.width / parseInt(canvas.style.width);
    const sampleRate = Math.max(1, Math.round(currentDPR / baseDPR));

    particles = [];
    for (let y = 0; y < canvas.height; y += sampleRate) {
      for (let x = 0; x < canvas.width; x += sampleRate) {
        const idx = (y * canvas.width + x) * 4;
        const a = data[idx + 3];
        if (a > 0) {
          const oa = (a / 255) * (sampleRate / currentDPR);
          particles.push({
            x, y,
            originalX: x, originalY: y,
            color: `rgba(${data[idx]}, ${data[idx + 1]}, ${data[idx + 2]}, ${oa})`,
            opacity: oa,
            originalAlpha: oa,
            velocityX: 0, velocityY: 0,
            angle: 0, speed: 0,
            shouldFadeQuickly: false
          });
        }
      }
    }
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }

  // ── Particle physics ──
  function updateParticles(vaporizeX, dt) {
    const fontSpread = calculateVaporizeSpread(fontSize);
    const SPREAD_MULT = fontSpread * SPREAD;
    let allDone = true;

    for (let i = 0, len = particles.length; i < len; i++) {
      const p = particles[i];
      const shouldVap = DIRECTION === 'left-to-right'
        ? p.originalX <= vaporizeX
        : p.originalX >= vaporizeX;

      if (shouldVap) {
        if (p.speed === 0) {
          p.angle = Math.random() * Math.PI * 2;
          p.speed = (Math.random() * 1 + 0.5) * SPREAD_MULT;
          p.velocityX = Math.cos(p.angle) * p.speed;
          p.velocityY = Math.sin(p.angle) * p.speed;
          p.shouldFadeQuickly = Math.random() > transformedDensity;
        }

        if (p.shouldFadeQuickly) {
          p.opacity = Math.max(0, p.opacity - dt);
        } else {
          const dx = p.originalX - p.x;
          const dy = p.originalY - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const damping = Math.max(0.95, 1 - dist / (100 * SPREAD_MULT));
          const randSpread = SPREAD_MULT * 3;
          const sx = (Math.random() - 0.5) * randSpread;
          const sy = (Math.random() - 0.5) * randSpread;

          p.velocityX = (p.velocityX + sx + dx * 0.002) * damping;
          p.velocityY = (p.velocityY + sy + dy * 0.002) * damping;

          const maxV = SPREAD_MULT * 2;
          const v = Math.sqrt(p.velocityX * p.velocityX + p.velocityY * p.velocityY);
          if (v > maxV) {
            const s = maxV / v;
            p.velocityX *= s;
            p.velocityY *= s;
          }

          p.x += p.velocityX * dt * 20;
          p.y += p.velocityY * dt * 10;

          const fadeRate = 0.25 * (2000 / VAPORIZE_DURATION);
          p.opacity = Math.max(0, p.opacity - dt * fadeRate);
        }

        if (p.opacity > 0.01) allDone = false;
      } else {
        allDone = false;
      }
    }
    return allDone;
  }

  // ── Render ──
  function renderParticles() {
    ctx.save();
    ctx.scale(DPR, DPR);
    for (let i = 0, len = particles.length; i < len; i++) {
      const p = particles[i];
      if (p.opacity > 0) {
        const c = p.color.replace(/[\d.]+\)$/, p.opacity + ')');
        ctx.fillStyle = c;
        ctx.fillRect(p.x / DPR, p.y / DPR, 1, 1);
      }
    }
    ctx.restore();
  }

  function resetParticles() {
    for (let i = 0, len = particles.length; i < len; i++) {
      const p = particles[i];
      p.x = p.originalX;
      p.y = p.originalY;
      p.opacity = p.originalAlpha;
      p.speed = 0;
      p.velocityX = 0;
      p.velocityY = 0;
      p.shouldFadeQuickly = false;
    }
  }

  // ── Animation loop ──
  function animate(currentTime) {
    if (!isInView) {
      rafId = requestAnimationFrame(animate);
      return;
    }
    const dt = Math.min(0.05, (currentTime - lastTime) / 1000); // clamp dt
    lastTime = currentTime;

    if (!particles.length) {
      rafId = requestAnimationFrame(animate);
      return;
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if (animationState === 'static') {
      renderParticles();
    } else if (animationState === 'vaporizing') {
      vaporizeProgress += (dt * 100) / (VAPORIZE_DURATION / 1000);
      if (textBoundaries) {
        const prog = Math.min(100, vaporizeProgress);
        const vx = DIRECTION === 'left-to-right'
          ? textBoundaries.left + textBoundaries.width * prog / 100
          : textBoundaries.right - textBoundaries.width * prog / 100;
        const allDone = updateParticles(vx, dt);
        renderParticles();
        if (vaporizeProgress >= 100 && allDone) {
          currentTextIndex = (currentTextIndex + 1) % texts.length;
          createParticles(); // yeni metin için particles
          animationState = 'fadingIn';
          fadeOpacity = 0;
        }
      }
    } else if (animationState === 'fadingIn') {
      fadeOpacity += (dt * 1000) / FADE_IN_DURATION;
      ctx.save();
      ctx.scale(DPR, DPR);
      for (let i = 0, len = particles.length; i < len; i++) {
        const p = particles[i];
        p.x = p.originalX;
        p.y = p.originalY;
        const o = Math.min(fadeOpacity, 1) * p.originalAlpha;
        const c = p.color.replace(/[\d.]+\)$/, o + ')');
        ctx.fillStyle = c;
        ctx.fillRect(p.x / DPR, p.y / DPR, 1, 1);
      }
      ctx.restore();
      if (fadeOpacity >= 1) {
        animationState = 'waiting';
        setTimeout(() => {
          animationState = 'vaporizing';
          vaporizeProgress = 0;
          resetParticles();
        }, WAIT_DURATION);
      }
    } else if (animationState === 'waiting') {
      renderParticles();
    }

    rafId = requestAnimationFrame(animate);
  }

  // ── Init + lifecycle ──
  function init() {
    texts = getTexts();
    colors = getColors();
    currentTextIndex = 0;
    createParticles(); // calculateFitFontSize otomatik çağrılır
    animationState = 'vaporizing';
    vaporizeProgress = 0;
  }

  // Font yüklenmesini bekle (Playfair Display)
  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(() => {
      init();
      lastTime = performance.now();
      rafId = requestAnimationFrame(animate);
    });
  } else {
    setTimeout(() => {
      init();
      lastTime = performance.now();
      rafId = requestAnimationFrame(animate);
    }, 600);
  }

  // Resize handler
  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      // Sabit metni göstererek yeniden başlat
      const wasIndex = currentTextIndex;
      createParticles();
      currentTextIndex = wasIndex;
      animationState = 'static';
      // Kısa süre sonra animasyona devam et
      setTimeout(() => { animationState = 'vaporizing'; vaporizeProgress = 0; }, 400);
    }, 200);
  }, { passive: true });

  // Theme değişimini izle (renkler güncellensin)
  const themeObs = new MutationObserver(() => {
    colors = getColors();
    // Yeniden render — particles renkleri yenilenir
    createParticles();
    animationState = 'vaporizing';
    vaporizeProgress = 0;
  });
  themeObs.observe(document.body, { attributes: true, attributeFilter: ['class'] });

  // Dil yenileme — hem MutationObserver (otomatik) hem explicit window hook
  // (i18n.js applyLang() doğrudan çağırır → race condition yok, anında çalışır)
  function refreshLang() {
    const newTexts = getTexts();
    if (texts && newTexts[0] === texts[0]) return; // değişiklik yoksa atla
    texts = newTexts;
    colors = getColors();
    currentTextIndex = 0;
    createParticles();
    animationState = 'vaporizing';
    vaporizeProgress = 0;
  }
  window.__vaporRefreshLang = refreshLang;
  const langObs = new MutationObserver(refreshLang);
  langObs.observe(document.documentElement, { attributes: true, attributeFilter: ['lang'] });

  // Görünürlük tabanlı duraklatma (battery save)
  if ('IntersectionObserver' in window) {
    const visObs = new IntersectionObserver(
      ([e]) => { isInView = e.isIntersecting; },
      { threshold: 0 }
    );
    visObs.observe(wrap);
  }

  // Tab arkaplanda → durdur
  document.addEventListener('visibilitychange', () => {
    isInView = !document.hidden;
  });
})();
