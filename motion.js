/* ─────────────────────────────────────────────────────────────────────────
   motion.js — shared motion layer (home + project pages)

   · Lenis smooth scroll (vendor/lenis.min.js, v1.3.27)
   · Masked line reveal for headings — timing after 21st.dev "Text Reveal
     (Mask)" by soralabs: lines slide up from 110% under a mask, expo-out,
     0.8s, 80ms stagger, triggered when the line reaches 75% of the viewport
   · Curtain reveal for media frames (clip-path + settling scale)
   · Liquid-glass cursor lens over project cards
   · Magnetic primary buttons, count-up stats
   All of it is skipped under prefers-reduced-motion.
   ───────────────────────────────────────────────────────────────────────── */
(() => {
  const root = document.documentElement;
  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const fine = matchMedia('(hover: hover) and (pointer: fine)').matches;
  const $$ = (s, c = document) => Array.from(c.querySelectorAll(s));
  const lang = () => (root.lang === 'en' ? 'en' : 'tr');
  const tr = (path, fb) => {
    const d = typeof I18N !== 'undefined' ? I18N[lang()] : null;
    return (d && path.split('.').reduce((o, k) => (o ? o[k] : undefined), d)) || fb;
  };

  if (reduced) { root.classList.add('motion-off'); return; }
  root.classList.add('motion-on');

  /* ── smooth scroll ── */
  let lenis = null;
  if (typeof Lenis !== 'undefined') {
    lenis = new Lenis({ lerp: 0.095, wheelMultiplier: 1, smoothWheel: true, anchors: { offset: -90 } });
    const raf = t => { lenis.raf(t); requestAnimationFrame(raf); };
    requestAnimationFrame(raf);
    window.__lenis = lenis;
  }

  /* ── one shared in-view observer: adds .is-in once ── */
  const io = new IntersectionObserver(es => es.forEach(e => {
    if (!e.isIntersecting) return;
    e.target.classList.add('is-in');
    io.unobserve(e.target);
    const fn = e.target.__onIn; if (fn) fn();
  }), { rootMargin: '0px 0px -18% 0px', threshold: 0 });

  /* ── masked line reveal ── */
  const HEADINGS = '.h-section, .h-display, .about-lead, .proj-section-title, html body .proj-3d-title, .proj-overview-text > strong:first-child';
  const esc = s => s.replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

  function split(el) {
    const text = el.textContent.replace(/\s+/g, ' ').trim();
    if (!text) return;
    el.__text = text;
    el.setAttribute('aria-label', text);
    el.innerHTML = text.split(' ').map(w => `<span class="rw" aria-hidden="true">${esc(w)}</span>`).join(' ');
    const lines = [];
    let top = null;
    $$('.rw', el).forEach(w => {
      const t = w.offsetTop;
      if (top === null || t > top + 2) { lines.push([]); top = t; }
      lines[lines.length - 1].push(w.textContent);
    });
    el.innerHTML = lines.map((ws, i) =>
      `<span class="rl" aria-hidden="true"><span class="rl-i" style="--li:${i}">${ws.map(esc).join(' ')}</span></span>`
    ).join(' ');   // keep a real space between lines so textContent stays intact
    el.classList.add('is-split');
  }
  function resplit(el) {
    // after a language switch i18n.js has replaced the markup with fresh text
    el.classList.remove('is-split');
    split(el);
  }

  const heads = $$(HEADINGS).filter(el => !el.closest('.hero-frame'));
  heads.forEach(el => el.setAttribute('data-reveal', 'lines'));
  const prime = () => {
    heads.forEach(el => { split(el); io.observe(el); });
  };
  (document.fonts ? Promise.race([document.fonts.ready, new Promise(r => setTimeout(r, 1500))]) : Promise.resolve())
    .then(() => requestAnimationFrame(prime));

  // language switch: i18n.js rewrites innerHTML, so split the new text again
  new MutationObserver(() => requestAnimationFrame(() => heads.forEach(resplit)))
    .observe(root, { attributes: true, attributeFilter: ['lang'] });
  // width change re-flows lines
  let lastW = innerWidth, rt = 0;
  addEventListener('resize', () => {
    if (innerWidth === lastW) return;
    lastW = innerWidth;
    clearTimeout(rt);
    rt = setTimeout(() => heads.forEach(el => { if (el.__text) { el.textContent = el.__text; resplit(el); } }), 180);
  });

  /* ── media curtain reveal ── */
  $$('.work-media, .about-portrait, .gallery-item, .skill-col, .certs li').forEach((el, i) => {
    el.classList.add('m-reveal');
    io.observe(el);
  });

  /* ── stats count-up ── */
  $$('[data-count]').forEach(el => {
    const to = +el.dataset.count || 0;
    el.textContent = '0';
    const host = el.closest('dl') || el;
    const run = () => {
      const t0 = performance.now(), dur = 1400;
      const step = now => {
        const p = Math.min(1, (now - t0) / dur);
        el.textContent = Math.round(to * (1 - Math.pow(1 - p, 4)));
        if (p < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    };
    if (host.classList.contains('is-in')) run();
    else { const prev = host.__onIn; host.__onIn = () => { prev && prev(); run(); }; io.observe(host); }
  });

  if (!fine) return;

  /* ── magnetic buttons ── */
  $$('.nav-cta, .btn-primary, .reel-play, .proj-back-btn, .hero-card .arrow-dot').forEach(el => {
    const strength = el.classList.contains('arrow-dot') ? .45 : .22;
    el.classList.add('magnetic');
    el.addEventListener('pointermove', e => {
      const r = el.getBoundingClientRect();
      const dx = e.clientX - (r.left + r.width / 2), dy = e.clientY - (r.top + r.height / 2);
      el.style.translate = `${(dx * strength).toFixed(1)}px ${(dy * strength * 1.3).toFixed(1)}px`;
    });
    el.addEventListener('pointerleave', () => { el.style.translate = ''; });
  });

  /* ── liquid-glass cursor lens over project cards ── */
  const cards = $$('.work-card');
  if (cards.length) {
    const lens = document.createElement('div');
    lens.className = 'cursor-lens lg';
    lens.dataset.refract = 'cursor';
    lens.setAttribute('aria-hidden', 'true');
    lens.innerHTML = '<span></span>';
    document.body.appendChild(lens);
    if (window.__glassAttach) window.__glassAttach(lens);
    const label = lens.firstChild;
    const setLabel = () => { label.textContent = tr('v2.work.view', 'Aç'); };
    setLabel();
    new MutationObserver(setLabel).observe(root, { attributes: true, attributeFilter: ['lang'] });

    let x = innerWidth / 2, y = innerHeight / 2, tx = x, ty = y, s = 0, ts = 0, raf = 0;
    const loop = () => {
      x += (tx - x) * .2; y += (ty - y) * .2; s += (ts - s) * .16;
      lens.style.transform = `translate3d(${(x - 52).toFixed(1)}px, ${(y - 52).toFixed(1)}px, 0) scale(${s.toFixed(3)})`;
      raf = (Math.abs(tx - x) + Math.abs(ty - y) > .3 || Math.abs(ts - s) > .003) ? requestAnimationFrame(loop) : 0;
    };
    const kick = () => { if (!raf) raf = requestAnimationFrame(loop); };
    addEventListener('pointermove', e => { tx = e.clientX; ty = e.clientY; if (ts > 0) kick(); }, { passive: true });
    cards.forEach(c => {
      const media = c.querySelector('.work-media');
      media.addEventListener('pointerenter', e => { tx = e.clientX; ty = e.clientY; if (s < .05) { x = tx; y = ty; } ts = 1; lens.classList.add('is-on'); kick(); });
      media.addEventListener('pointerleave', () => { ts = 0; lens.classList.remove('is-on'); kick(); });
    });
    // content moves under a still pointer while scrolling: re-check what's below it
    const grid = document.getElementById('workGrid');
    let nearGrid = false;
    if (grid) {
      grid.addEventListener('pointerenter', () => { nearGrid = true; });
      grid.addEventListener('pointerleave', () => { nearGrid = false; });
    }
    addEventListener('scroll', () => {
      if (!nearGrid && !ts) return;
      const over = document.elementFromPoint(tx, ty);
      const on = !!(over && over.closest('.work-media'));
      if (on !== (ts === 1)) { ts = on ? 1 : 0; lens.classList.toggle('is-on', on); kick(); }
    }, { passive: true });
  }
})();
