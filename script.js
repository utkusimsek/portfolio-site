/* ─────────────────────────────────────────────────────────────────────────
   HALİL UTKU ŞİMŞEK PORTFOLIO — script.js
   ───────────────────────────────────────────────────────────────────────── */

/* ── Theme Toggle ── */
(function initTheme() {
  const btn   = document.getElementById('themeToggle');
  const label = btn.querySelector('.theme-label');
  const saved = localStorage.getItem('theme');

  if (saved === 'light') {
    document.body.classList.add('light');
    label.textContent = 'Koyu Mod';
  }

  btn.addEventListener('click', () => {
    const isLight = document.body.classList.toggle('light');
    label.textContent = isLight ? 'Koyu Mod' : 'Açık Mod';
    localStorage.setItem('theme', isLight ? 'light' : 'dark');

    /* Buton mini-scale animasyonu */
    btn.style.transform = 'scale(.92)';
    setTimeout(() => btn.style.transform = '', 200);
  });
})();

/* ── Birleşik scroll loop — nav --scroll-p + active link, tek rAF
   Tüm scroll-bound DOM yazımları aynı frame'de batch edilir → 0 jank. */
(function initScrollLoop() {
  const root = document.documentElement;
  const RANGE = 140;
  let ticking = false;

  function smoothstep(x) { return x * x * (3 - 2 * x); }

  // Active link tespiti için lazy section listesi (DOMContentLoaded sonrası yenilenebilir)
  let _sections = null, _navAnchors = null;
  function refs() {
    if (!_sections) _sections = document.querySelectorAll('section[id]');
    if (!_navAnchors) _navAnchors = document.querySelectorAll('.nav-links a');
    return { sections: _sections, anchors: _navAnchors };
  }

  function update() {
    const y = Math.max(0, window.scrollY);
    // 1) Nav scroll progress
    root.style.setProperty('--scroll-p', smoothstep(Math.min(y / RANGE, 1)).toFixed(4));

    // 2) Active nav link
    const { sections, anchors } = refs();
    let current = '';
    for (let i = 0; i < sections.length; i++) {
      if (y >= sections[i].offsetTop - 140) current = sections[i].id;
    }
    for (let i = 0; i < anchors.length; i++) {
      const href = anchors[i].getAttribute('href') || '';
      const matches = href === '#' + current || (current === 'work' && href.endsWith('#work'));
      anchors[i].classList.toggle('active', matches);
    }
    ticking = false;
  }

  window.addEventListener('scroll', () => {
    if (!ticking) { requestAnimationFrame(update); ticking = true; }
  }, { passive: true });

  // İlk paint sonrası ilk değeri yaz
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', update);
  } else {
    update();
  }
})();

/* ── Burger menu ── */
const burger = document.getElementById('burger');
const navLinks = document.querySelector('.nav-links');
burger.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  burger.classList.toggle('open', isOpen);
});
// Linklere tıklanınca menüyü kapat
navLinks.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    navLinks.classList.remove('open');
    burger.classList.remove('open');
  });
});

/* ── Global Particle Canvas — behind entire page ──
   Skip on small screens / reduced-motion to save CPU.
   Pause via IntersectionObserver when canvas is offscreen. */
const canvas = document.getElementById('particleCanvas');
const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
const isMobile = window.innerWidth < 768;

if (canvas && !reduceMotion) {
  const ctx    = canvas.getContext('2d');
  let W, H, particles = [];
  let isVisible = true;
  let rafId = 0;
  const DPR = Math.min(window.devicePixelRatio || 1, isMobile ? 1.5 : 2);
  const LINE_DIST = isMobile ? 110 : 160;
  const LINE_DIST_SQ = LINE_DIST * LINE_DIST;

  function resize() {
    W = window.innerWidth;
    H = window.innerHeight;
    canvas.width  = W * DPR;
    canvas.height = H * DPR;
    canvas.style.width  = W + 'px';
    canvas.style.height = H + 'px';
    ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
  }
  window.addEventListener('resize', resize, { passive: true });
  resize();

  class Particle {
    constructor() { this.reset(); }
    reset() {
      this.x  = Math.random() * W;
      this.y  = Math.random() * H;
      this.vx = (Math.random() - .5) * .45;
      this.vy = (Math.random() - .5) * .45;
      this.r  = Math.random() * 1.9 + .7;
      this.a  = Math.random() * .55 + .55;   /* 0.55–1.10 — daha parlak */
      this.pulseOffset = Math.random() * Math.PI * 2;
    }
    update(t) {
      this.x += this.vx;
      this.y += this.vy;
      if (this.x < -20) this.x = W + 20;
      if (this.x > W + 20) this.x = -20;
      if (this.y < -20) this.y = H + 20;
      if (this.y > H + 20) this.y = -20;
      this.pulse = 0.75 + 0.25 * Math.sin(t * 0.001 + this.pulseOffset);
    }
    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.r * this.pulse, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(201,169,110,${Math.min(1, this.a * this.pulse)})`;
      ctx.fill();
    }
  }

  /* Particle density — yoğun + uniform, hero alanında da görünür */
  const MAX_COUNT = isMobile ? 55 : 130;
  const MIN_COUNT = isMobile ? 35 : 70;
  const DIVISOR   = isMobile ? 32000 : 16000;
  const COUNT = Math.min(MAX_COUNT, Math.max(MIN_COUNT, Math.floor(W * H / DIVISOR)));
  for (let i = 0; i < COUNT; i++) particles.push(new Particle());

  function drawLines() {
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dSq = dx * dx + dy * dy;
        if (dSq < LINE_DIST_SQ) {
          const d = Math.sqrt(dSq);
          const alpha = (1 - d / LINE_DIST) * 0.42; /* 0.28 → 0.42, daha belirgin */
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(201,169,110,${alpha})`;
          ctx.lineWidth   = 1;
          ctx.stroke();
        }
      }
    }
  }

  function animateParticles(t) {
    if (!isVisible) { rafId = 0; return; }
    ctx.clearRect(0, 0, W, H);
    particles.forEach(p => { p.update(t || 0); p.draw(); });
    drawLines();
    rafId = requestAnimationFrame(animateParticles);
  }
  rafId = requestAnimationFrame(animateParticles);

  /* Pause animation when canvas is offscreen (saves CPU during scrolling away). */
  const visObserver = new IntersectionObserver(entries => {
    isVisible = entries[0].isIntersecting;
    if (isVisible && !rafId) rafId = requestAnimationFrame(animateParticles);
  });
  visObserver.observe(canvas);

  /* Pause when tab is hidden. */
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) { isVisible = false; }
    else { isVisible = true; if (!rafId) rafId = requestAnimationFrame(animateParticles); }
  });
} else if (canvas) {
  canvas.style.display = 'none';
}

/* ── Scroll Reveal (IntersectionObserver) ── */
const revealEls = document.querySelectorAll(
  '.reveal-up, .reveal-left, .reveal-right, .reveal-card, .skill-block'
);

const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });

revealEls.forEach(el => revealObserver.observe(el));

/* Stagger cards by data-index — kategori başına sınırlı, max 240ms */
document.querySelectorAll('.project-card').forEach(card => {
  const i = parseInt(card.dataset.index) || 0;
  // Kategori içinde mod-3 ile sıfırla → her kategoride yeniden başlasın,
  // toplam stagger 0/60/120ms ile sınırlı kalsın (akış daha çevik)
  const local = i % 3;
  card.style.transitionDelay = `${local * 60}ms`;
});

/* ── Counter animation ── */
function animateCounter(el, target, duration = 1800) {
  let start = null;
  function step(ts) {
    if (!start) start = ts;
    const progress = Math.min((ts - start) / duration, 1);
    const eased    = 1 - Math.pow(1 - progress, 4); // ease-out-quart
    el.textContent = Math.round(eased * target);
    if (progress < 1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}

const statObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const numEl  = entry.target.querySelector('.stat-num');
      const target = parseInt(numEl.dataset.target);
      animateCounter(numEl, target);
      statObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll('.stat').forEach(el => statObserver.observe(el));

/* ── Parallax tilt on project cards — sadece hover-capable cihazlar (touch'ta gereksiz),
     rAF ile throttle edilir (mousemove 100+ Hz fire eder, render 60Hz yeter). */
if (matchMedia('(hover: hover) and (pointer: fine)').matches && !reduceMotion) {
  document.querySelectorAll('.project-card').forEach(card => {
    let pendingX = 0, pendingY = 0, frame = 0;
    function apply() {
      card.style.transform = `perspective(800px) rotateX(${-pendingY * 4}deg) rotateY(${pendingX * 4}deg) translateY(-6px)`;
      frame = 0;
    }
    card.addEventListener('mousemove', e => {
      const rect = card.getBoundingClientRect();
      pendingX = (e.clientX - rect.left - rect.width  / 2) / (rect.width  / 2);
      pendingY = (e.clientY - rect.top  - rect.height / 2) / (rect.height / 2);
      if (!frame) frame = requestAnimationFrame(apply);
    });
    card.addEventListener('mouseleave', () => {
      if (frame) { cancelAnimationFrame(frame); frame = 0; }
      card.style.transform = '';
    });
  });
}

/* ── Hero title letter reveal ── */
(function heroReveal() {
  document.querySelectorAll('.hero-content .reveal-up').forEach((el, i) => {
    setTimeout(() => el.classList.add('in-view'), 200 + i * 140);
  });
})();

/* ── Lazy reCAPTCHA — sadece contact bölümü viewport'a girince yükle ── */
(() => {
  const captchaHost = document.querySelector('.g-recaptcha');
  if (!captchaHost) return;
  let loaded = false;
  function loadRecaptcha() {
    if (loaded) return;
    loaded = true;
    const s = document.createElement('script');
    s.src = 'https://www.google.com/recaptcha/api.js';
    s.async = true; s.defer = true;
    document.head.appendChild(s);
  }
  if ('IntersectionObserver' in window) {
    const obs = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        loadRecaptcha();
        obs.disconnect();
      }
    }, { rootMargin: '300px 0px' });
    obs.observe(captchaHost);
  } else {
    loadRecaptcha();
  }
  // İlk form etkileşiminde de tetikle (güvenlik ağı)
  document.getElementById('contactForm')?.addEventListener('focusin', loadRecaptcha, { once: true });
})();

/* ── Contact form (Formspree + Cloudflare Turnstile) ── */
(() => {
  const form = document.getElementById('contactForm');
  if (!form) return;

  const status = document.getElementById('formStatus');
  const btn = form.querySelector('button[type=submit]');
  const btnDefaultText = btn.textContent;

  const t = (key, fallback) => {
    const lang = document.documentElement.lang === 'en' ? 'en' : 'tr';
    const dict = (typeof I18N !== 'undefined' && I18N[lang] && I18N[lang].contact) || {};
    return dict[key] || fallback;
  };

  const setStatus = (msg, type) => {
    status.textContent = msg;
    status.dataset.state = type || '';
  };

  form.addEventListener('submit', async e => {
    e.preventDefault();

    // reCAPTCHA token doğrulaması — kutu işaretlenmemişse gönderme
    const token = (typeof grecaptcha !== 'undefined' && grecaptcha.getResponse) ? grecaptcha.getResponse() : '';
    if (!token) {
      setStatus(t('captchaRequired', 'Lütfen "Ben robot değilim" kutusunu işaretleyin.'), 'err');
      return;
    }

    btn.disabled = true;
    btn.textContent = t('sending', 'Gönderiliyor...');
    setStatus('', '');

    try {
      const res = await fetch(form.action, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: new FormData(form)
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error((data.errors && data.errors[0] && data.errors[0].message) || res.statusText);
      }
      btn.textContent = t('sent', 'Gönderildi ✓');
      btn.style.background = '#2d6a4f';
      btn.style.color = '#fff';
      setStatus(t('success', 'Mesajınız iletildi. En kısa sürede dönüş yapacağım.'), 'ok');
      form.reset();
      if (typeof grecaptcha !== 'undefined') grecaptcha.reset();
      setTimeout(() => {
        btn.textContent = btnDefaultText;
        btn.style.background = '';
        btn.style.color = '';
        btn.disabled = false;
      }, 3500);
    } catch (err) {
      btn.disabled = false;
      btn.textContent = btnDefaultText;
      setStatus(t('error', 'Gönderilemedi. Lütfen tekrar deneyin veya doğrudan e-posta atın.'), 'err');
    }
  });
})();

/* Active nav link highlight — birleşik scroll loop'a taşındı (initScrollLoop). */

/* ── Showreel ContainerScroll — vanilla port of framer-motion useScroll ──
   Card'a scroll progress'ine göre rotateX (20→0), scale (1.02→1 desktop /
   0.85→1 mobile) ve header'a translateY (0→-100) uygular.
   IntersectionObserver gate: sadece section viewport'a yakınken hesaplar
   (CPU verimli). Video da görünürlüğe göre play/pause edilir. */
(function initShowreel() {
  const section = document.getElementById('showreel');
  if (!section) return;
  const card = section.querySelector('.reel-card');
  const header = section.querySelector('.reel-header'); // opsiyonel
  // Video oynatma kontrolü artık reel rotator'da — burada sadece tilt/scale.
  if (!card) return;

  const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;

  let active = false;       // section viewport civarında mı
  let ticking = false;
  let isMobile = window.innerWidth <= 768;

  function update() {
    ticking = false;
    if (!active || reduceMotion) return;
    // useScroll target ["start end", "end start"] davranışı:
    //   progress 0 → section üstü viewport altına denk gelirken
    //   progress 1 → section altı viewport üstüne çıkarken
    const rect = section.getBoundingClientRect();
    const winH = window.innerHeight;
    const raw = (winH - rect.top) / (winH + rect.height);
    const p = Math.max(0, Math.min(1, raw));

    // Ease-out cubic — kart viewport'a girer girmez hızlıca düzleşsin,
    // kalan scroll'da zaten düz dursun (linear'da uzun süre eğik kalıyordu).
    const eased = 1 - Math.pow(1 - p, 3);

    // Başlangıç açısı: desktop 12° (daha rafine), mobile 18° (daha dramatik)
    const rotateFrom = isMobile ? 18 : 12;
    const rotate = rotateFrom * (1 - eased);
    // Desktop: 1.02 → 1 (hafif zoom-out), Mobile: 0.88 → 1 (zoom-in)
    const sFrom = isMobile ? 0.88 : 1.02;
    const sTo   = 1;
    const scale = sFrom + (sTo - sFrom) * eased;
    const translate = -100 * eased;              // header 0 → -100px

    card.style.setProperty('--reel-rotate', rotate.toFixed(2) + 'deg');
    card.style.setProperty('--reel-scale', scale.toFixed(4));
    if (header) header.style.setProperty('--reel-translate', translate.toFixed(1) + 'px');
  }

  function onScroll() {
    if (!ticking) {
      requestAnimationFrame(update);
      ticking = true;
    }
  }

  // Section viewport'a yakınken handler aktif, dışarıda CPU yakmasın
  if ('IntersectionObserver' in window) {
    const obs = new IntersectionObserver(([e]) => {
      active = e.isIntersecting;
      if (active) update();
    }, { rootMargin: '200px 0px' });
    obs.observe(section);
  } else {
    active = true;
    update();
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', () => {
    isMobile = window.innerWidth <= 768;
    update();
  }, { passive: true });
})();

/* ── Showreel Reel — 6 video crossfade rotator ───────────────────────────
   Tablet kartının içinde 6 proje videosu sırayla oynar; her birinin doğal
   süresine göre advance eder, sıradakini ~1.2 sn önceden buffer'a alır,
   böylece geçişler donmasız ve cinematic olur. */
(function initShowreelRotator() {
  const deck = document.getElementById('reelDeck');
  const barEl = document.getElementById('reelProgressBar');
  if (!deck) return;

  const layers = Array.from(deck.querySelectorAll('.reel-video'));
  if (!layers.length) return;

  const SAFETY_MS    = 9000;
  const FADE_MS      = 1400;
  const PRELOAD_LEAD = 1200;

  layers.forEach(v => {
    if (!v.src && v.dataset.src) v.src = v.dataset.src;
    v.muted = true;
    v.playsInline = true;
    v.loop = false;
    v.setAttribute('disablepictureinpicture', '');
    v.setAttribute('disableremoteplayback', '');
  });

  let current = 0, timer = null, raf = null;
  let inView = false;

  function startProgress(durationMs) {
    cancelAnimationFrame(raf);
    if (!barEl) return;
    const start = performance.now();
    (function step(t) {
      const p = Math.min(((t || performance.now()) - start) / durationMs, 1);
      barEl.style.width = (p * 100) + '%';
      if (p < 1) raf = requestAnimationFrame(step);
    })();
  }

  function preload(idx) {
    const v = layers[idx];
    if (!v) return;
    if (v.preload !== 'auto') v.preload = 'auto';
    try { v.load(); } catch (e) { /* noop */ }
  }

  function advance() { show((current + 1) % layers.length); }

  function show(idx) {
    clearTimeout(timer);
    const prev = current;
    current = idx;
    const prevLayer = layers[prev];
    const nextLayer = layers[idx];

    nextLayer.currentTime = 0;
    if (inView) {
      const p = nextLayer.play();
      if (p && p.catch) p.catch(() => {});
    }

    nextLayer.classList.add('is-active');
    if (prev !== idx) {
      setTimeout(() => {
        prevLayer.classList.remove('is-active');
        setTimeout(() => { try { prevLayer.pause(); } catch (e) {} }, FADE_MS + 60);
      }, 20);
    }

    preload((idx + 1) % layers.length);

    function scheduleNext() {
      const dur = isFinite(nextLayer.duration) && nextLayer.duration > 0
        ? nextLayer.duration * 1000
        : SAFETY_MS;
      const wait = Math.max(2200, dur - PRELOAD_LEAD);
      startProgress(wait);
      timer = setTimeout(advance, wait);
    }

    if (nextLayer.readyState >= 1 && isFinite(nextLayer.duration)) {
      scheduleNext();
    } else {
      const onMeta = () => { nextLayer.removeEventListener('loadedmetadata', onMeta); scheduleNext(); };
      nextLayer.addEventListener('loadedmetadata', onMeta);
      timer = setTimeout(() => {
        nextLayer.removeEventListener('loadedmetadata', onMeta);
        advance();
      }, SAFETY_MS);
      startProgress(SAFETY_MS);
    }
  }

  if ('IntersectionObserver' in window) {
    const obs = new IntersectionObserver(([e]) => {
      inView = e.isIntersecting;
      const v = layers[current];
      if (!v) return;
      if (inView) v.play().catch(() => {});
      else v.pause();
    }, { rootMargin: '200px 0px' });
    obs.observe(deck);
  } else {
    inView = true;
  }

  document.addEventListener('visibilitychange', () => {
    const v = layers[current];
    if (!v) return;
    if (document.hidden) v.pause();
    else if (inView) v.play().catch(() => {});
  });

  show(0);
})();

