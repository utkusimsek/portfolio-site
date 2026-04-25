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

/* ── Custom Cursor ── */
const cursor         = document.getElementById('cursor');
const cursorFollower = document.getElementById('cursor-follower');
let mouseX = 0, mouseY = 0;
let followerX = 0, followerY = 0;

document.addEventListener('mousemove', e => {
  mouseX = e.clientX; mouseY = e.clientY;
  cursor.style.left = mouseX + 'px';
  cursor.style.top  = mouseY + 'px';
});

(function animateCursor() {
  followerX += (mouseX - followerX) * 0.12;
  followerY += (mouseY - followerY) * 0.12;
  cursorFollower.style.left = followerX + 'px';
  cursorFollower.style.top  = followerY + 'px';
  requestAnimationFrame(animateCursor);
})();

document.querySelectorAll('a, button, .project-card').forEach(el => {
  el.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover'));
  el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hover'));
});

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

/* ── Global Particle Canvas — behind entire page ── */
const canvas = document.getElementById('particleCanvas');
const ctx    = canvas.getContext('2d');
let W, H, particles = [];
const DPR = Math.min(window.devicePixelRatio || 1, 2);
const LINE_DIST = 160;

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
  constructor() { this.reset(true); }
  reset(initial) {
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
    ctx.shadowBlur = 10;
    ctx.shadowColor = 'rgba(201,169,110,.6)';
    ctx.fill();
    ctx.shadowBlur = 0;
  }
}

/* Higher particle density */
const COUNT = Math.min(150, Math.max(60, Math.floor(W * H / 12000)));
for (let i = 0; i < COUNT; i++) particles.push(new Particle());

function drawLines() {
  for (let i = 0; i < particles.length; i++) {
    for (let j = i + 1; j < particles.length; j++) {
      const dx = particles[i].x - particles[j].x;
      const dy = particles[i].y - particles[j].y;
      const d  = Math.sqrt(dx * dx + dy * dy);
      if (d < LINE_DIST) {
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
  ctx.clearRect(0, 0, W, H);
  particles.forEach(p => { p.update(t || 0); p.draw(); });
  drawLines();
  requestAnimationFrame(animateParticles);
}
animateParticles();

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

/* ── Contact form ── */
document.getElementById('contactForm').addEventListener('submit', e => {
  e.preventDefault();
  const btn = e.target.querySelector('button[type=submit]');
  btn.textContent = 'Gönderildi ✓';
  btn.style.background = '#2d6a4f';
  btn.style.color = '#fff';
  setTimeout(() => {
    btn.textContent = 'Mesaj Gönder';
    btn.style.background = '';
    btn.style.color = '';
    e.target.reset();
  }, 3000);
});

/* ── Smooth active link highlight ── */
const sections = document.querySelectorAll('section[id]');
const navAnchors = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(s => {
    if (window.scrollY >= s.offsetTop - 140) current = s.id;
  });
  navAnchors.forEach(a => {
    a.style.color = a.getAttribute('href') === '#' + current ? 'var(--white)' : '';
  });
}, { passive: true });
