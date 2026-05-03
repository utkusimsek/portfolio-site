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

/* ── Nav scroll state ── */
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 40);
}, { passive: true });

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
const isSmallScreen = window.innerWidth < 768;

if (canvas && !reduceMotion && !isSmallScreen) {
  const ctx    = canvas.getContext('2d');
  let W, H, particles = [];
  let isVisible = true;
  let rafId = 0;
  const DPR = Math.min(window.devicePixelRatio || 1, 2);
  const LINE_DIST = 160;
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
      this.r  = Math.random() * 1.8 + .6;
      this.a  = Math.random() * .6 + .4;
      this.pulseOffset = Math.random() * Math.PI * 2;
    }
    update(t) {
      this.x += this.vx;
      this.y += this.vy;
      if (this.x < -20) this.x = W + 20;
      if (this.x > W + 20) this.x = -20;
      if (this.y < -20) this.y = H + 20;
      if (this.y > H + 20) this.y = -20;
      this.pulse = 0.7 + 0.3 * Math.sin(t * 0.001 + this.pulseOffset);
    }
    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.r * this.pulse, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(201,169,110,${this.a * this.pulse})`;
      ctx.fill();
    }
  }

  /* Lighter particle density — tuned for performance */
  const COUNT = Math.min(70, Math.max(30, Math.floor(W * H / 28000)));
  for (let i = 0; i < COUNT; i++) particles.push(new Particle());

  function drawLines() {
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dSq = dx * dx + dy * dy;
        if (dSq < LINE_DIST_SQ) {
          const d = Math.sqrt(dSq);
          const alpha = (1 - d / LINE_DIST) * 0.28;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(201,169,110,${alpha})`;
          ctx.lineWidth   = 0.9;
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

/* Stagger cards by data-index */
document.querySelectorAll('.project-card').forEach(card => {
  const i = parseInt(card.dataset.index) || 0;
  card.style.transitionDelay = `${i * 80}ms`;
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

/* ── Parallax tilt on project cards ── */
document.querySelectorAll('.project-card').forEach(card => {
  card.addEventListener('mousemove', e => {
    const rect   = card.getBoundingClientRect();
    const cx     = rect.left + rect.width  / 2;
    const cy     = rect.top  + rect.height / 2;
    const dx     = (e.clientX - cx) / (rect.width  / 2);
    const dy     = (e.clientY - cy) / (rect.height / 2);
    card.style.transform = `perspective(800px) rotateX(${-dy * 4}deg) rotateY(${dx * 4}deg) translateY(-6px)`;
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = '';
  });
});

/* ── Hero title letter reveal ── */
(function heroReveal() {
  document.querySelectorAll('.hero-content .reveal-up').forEach((el, i) => {
    setTimeout(() => el.classList.add('in-view'), 200 + i * 140);
  });
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

/* ── Smooth active link highlight ── */
const sections = document.querySelectorAll('section[id]');
const navAnchors = document.querySelectorAll('.nav-links a');

// Scroll position'a göre active section tespit + .active class toggle
// (raised + bold + text-shadow CSS'te tanımlı — 3D adaptive nav indicator)
function updateActiveNavLink() {
  let current = '';
  sections.forEach(s => {
    if (window.scrollY >= s.offsetTop - 140) current = s.id;
  });
  navAnchors.forEach(a => {
    const href = a.getAttribute('href') || '';
    const matches = href === '#' + current || (current === 'work' && href.endsWith('#work'));
    a.classList.toggle('active', matches);
  });
}
window.addEventListener('scroll', updateActiveNavLink, { passive: true });
updateActiveNavLink(); // İlk yüklemede de çalıştır

/* ─────────────────────────────────────────────────────────────────────────
   Hero: DottedSurface — Three.js sin dalga grid animasyonu
   React component'in vanilla JS port'u. Mobil + PC'de stabil çalışır.
   - Tema değişimini izler (body.light), nokta renklerini günceller
   - Mobile'da partikül sayısını ve pixel ratio'yu düşürür
   - Section görünür değilken animasyonu duraklatır (battery save)
   - Resize'da renderer'ı yeniden boyutlandırır
   ───────────────────────────────────────────────────────────────────────── */
(function initDottedSurface() {
  const container = document.getElementById('dottedSurface');
  if (!container) return;
  if (typeof THREE === 'undefined') {
    console.warn('[DottedSurface] Three.js yüklü değil — atlanıyor');
    return;
  }

  // ── Cihaza göre yoğunluk ayarı ──
  const isMobile = window.matchMedia('(max-width: 768px)').matches;
  const isCoarse = window.matchMedia('(pointer: coarse)').matches;
  const SEPARATION = isMobile ? 130 : 150;
  const AMOUNTX    = isMobile ? 22 : 40;
  const AMOUNTY    = isMobile ? 32 : 60;
  const DPR_CAP    = isMobile ? 1.5 : 2;

  const W = () => container.clientWidth  || window.innerWidth;
  const H = () => container.clientHeight || window.innerHeight;

  // ── Scene ──
  const scene = new THREE.Scene();
  scene.fog = new THREE.Fog(0x000000, 2000, 10000);

  const camera = new THREE.PerspectiveCamera(60, W() / H(), 1, 10000);
  camera.position.set(0, 355, 1220);

  const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: !isMobile });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, DPR_CAP));
  renderer.setSize(W(), H());
  renderer.setClearColor(0x000000, 0);
  container.appendChild(renderer.domElement);

  // ── Geometry + colors ──
  const positions = [];
  const colors    = [];
  const total     = AMOUNTX * AMOUNTY;

  for (let ix = 0; ix < AMOUNTX; ix++) {
    for (let iy = 0; iy < AMOUNTY; iy++) {
      const x = ix * SEPARATION - (AMOUNTX * SEPARATION) / 2;
      const z = iy * SEPARATION - (AMOUNTY * SEPARATION) / 2;
      positions.push(x, 0, z);
      // Renkler theme'e göre setColors() içinde set edilir
      colors.push(0.78, 0.78, 0.78);
    }
  }

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
  geometry.setAttribute('color',    new THREE.Float32BufferAttribute(colors,    3));

  const material = new THREE.PointsMaterial({
    size: isMobile ? 6 : 8,
    vertexColors: true,
    transparent: true,
    opacity: 0.8,
    sizeAttenuation: true
  });

  const points = new THREE.Points(geometry, material);
  scene.add(points);

  // ── Tema renkleri ──
  function applyThemeColors() {
    const isLight = document.body.classList.contains('light');
    const colorAttr = geometry.attributes.color;
    const arr = colorAttr.array;
    // Dark: açık gri (0.78), Light: koyu gri (0.10)
    const v = isLight ? 0.10 : 0.78;
    for (let i = 0; i < arr.length; i++) arr[i] = v;
    colorAttr.needsUpdate = true;
    // Light mode'da opacity biraz daha yüksek (kontrast için)
    material.opacity = isLight ? 0.6 : 0.8;
    material.needsUpdate = true;
  }
  applyThemeColors();

  // body class değiştiğinde renkleri güncelle
  const themeObserver = new MutationObserver(() => applyThemeColors());
  themeObserver.observe(document.body, { attributes: true, attributeFilter: ['class'] });

  // ── Animation ──
  let count = 0;
  let animationId = null;
  let isVisible = true;

  function animate() {
    animationId = requestAnimationFrame(animate);
    if (!isVisible) return;

    const positionAttribute = geometry.attributes.position;
    const arr = positionAttribute.array;

    let i = 0;
    for (let ix = 0; ix < AMOUNTX; ix++) {
      for (let iy = 0; iy < AMOUNTY; iy++) {
        const idx = i * 3;
        arr[idx + 1] =
          Math.sin((ix + count) * 0.3) * 50 +
          Math.sin((iy + count) * 0.5) * 50;
        i++;
      }
    }
    positionAttribute.needsUpdate = true;

    renderer.render(scene, camera);
    count += isMobile ? 0.07 : 0.1; // Mobile'da daha yavaş (perf + estetik)
  }
  animate();

  // ── Görünürlük tabanlı duraklatma (battery save + perf) ──
  const visObs = new IntersectionObserver(
    entries => { isVisible = entries[0].isIntersecting; },
    { threshold: 0 }
  );
  visObs.observe(container);

  // Tab arkaplanda ise tamamen durdur
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      cancelAnimationFrame(animationId);
      animationId = null;
    } else if (!animationId) {
      animate();
    }
  });

  // ── Resize handler ──
  let resizeTimer;
  function handleResize() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      camera.aspect = W() / H();
      camera.updateProjectionMatrix();
      renderer.setSize(W(), H());
    }, 100);
  }
  window.addEventListener('resize', handleResize, { passive: true });

  // Cleanup (sayfa kapatma — pratikte gerekmiyor ama temiz olsun)
  window.addEventListener('beforeunload', () => {
    cancelAnimationFrame(animationId);
    geometry.dispose();
    material.dispose();
    renderer.dispose();
    themeObserver.disconnect();
    visObs.disconnect();
  });

  console.log(`[DottedSurface] ${total} nokta render ediliyor (${isMobile ? 'mobile' : 'desktop'})`);
})();
