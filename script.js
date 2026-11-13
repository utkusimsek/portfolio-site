/* ─────────────────────────────────────────────────────────────────────────
   script.js — home page behaviour
   One orchestrated load moment (hero), everything else answers the user:
   filter, lens, reel controls, menu. Scroll work is batched into one rAF.
   ───────────────────────────────────────────────────────────────────────── */
(() => {
  const root = document.documentElement;
  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const finePointer = matchMedia('(hover: hover) and (pointer: fine)').matches;
  const $ = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => Array.from(c.querySelectorAll(s));
  const lang = () => (root.lang === 'en' ? 'en' : 'tr');
  const tr = (path, fallback) => {
    const dict = typeof I18N !== 'undefined' ? I18N[lang()] : null;
    const v = dict && path.split('.').reduce((o, k) => (o ? o[k] : undefined), dict);
    return v || fallback;
  };

  /* ── hero name: split into characters for the load sequence ── */
  let chIndex = 0;
  $$('[data-split]').forEach(el => {
    const text = el.textContent.trim();
    el.textContent = '';
    [...text].forEach(c => {
      const i = chIndex++;
      const s = document.createElement('span');
      s.className = c === ' ' ? 'ch ch-sp' : 'ch';
      s.textContent = c === ' ' ? ' ' : c;
      s.style.setProperty('--i', i);
      s.setAttribute('aria-hidden', 'true');
      el.appendChild(s);
    });
  });

  /* ── load choreography: start once the hero image is decoded ── */
  const heroImg = $('.hero-media img');
  let started = false;
  const start = () => {
    if (started) return;
    started = true;
    requestAnimationFrame(() => requestAnimationFrame(() => root.classList.add('is-loaded')));
  };
  if (reduced) start();
  else if (heroImg) {
    if (heroImg.complete) start();
    else { heroImg.addEventListener('load', start, { once: true }); heroImg.addEventListener('error', start, { once: true }); }
    setTimeout(start, 2200);
  } else start();

  /* ── nav: light/dark state, active link, mobile menu ── */
  const navWrap = $('#nav');
  const heroFrame = $('#heroFrame');
  const burger = $('#burger');
  const menu = $('#mobileMenu');
  if (burger && menu) {
    const close = () => { burger.setAttribute('aria-expanded', 'false'); menu.hidden = true; };
    burger.addEventListener('click', () => {
      const open = burger.getAttribute('aria-expanded') !== 'true';
      burger.setAttribute('aria-expanded', String(open));
      menu.hidden = !open;
    });
    $$('a', menu).forEach(a => a.addEventListener('click', close));
    document.addEventListener('keydown', e => { if (e.key === 'Escape') close(); });
  }

  const sections = $$('main section[id]');
  const links = $$('.nav-links a');

  /* ── reel scale target ── */
  const reelFrame = $('#reelFrame');

  /* ── single scroll loop ── */
  let ticking = false;
  const onScroll = () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      ticking = false;
      const vh = innerHeight;
      if (heroFrame && navWrap) {
        const b = heroFrame.getBoundingClientRect().bottom;
        navWrap.classList.toggle('is-light', b < 80);
        if (!reduced && b > 0) {
          const y = Math.max(0, -heroFrame.getBoundingClientRect().top);
          heroFrame.style.setProperty('--hero-shift', (y * 0.18).toFixed(1) + 'px');
        }
      }
      if (reelFrame && !reduced) {
        const r = reelFrame.getBoundingClientRect();
        const p = Math.min(1, Math.max(0, (vh - r.top) / (vh * 0.8)));
        reelFrame.style.setProperty('--reel-scale', (0.94 + 0.06 * p).toFixed(4));
      }
      let current = null;
      sections.forEach(s => { if (s.getBoundingClientRect().top < vh * 0.4) current = s.id; });
      links.forEach(a => a.classList.toggle('is-active', a.getAttribute('href') === '#' + current));
    });
  };
  addEventListener('scroll', onScroll, { passive: true });
  addEventListener('resize', onScroll, { passive: true });
  onScroll();

  /* ── hero lens: a drop of glass that trails the pointer ── */
  const lens = $('#heroLens');
  if (lens && heroFrame && finePointer && !reduced) {
    const size = 190;
    let tx = 0, ty = 0, x = 0, y = 0, s = .6, ts = .6, raf = 0, inside = false;
    const place = () => {
      x += (tx - x) * 0.14;
      y += (ty - y) * 0.14;
      s += (ts - s) * 0.12;
      lens.style.transform = `translate3d(${(x - size / 2).toFixed(1)}px, ${(y - size / 2).toFixed(1)}px, 0) scale(${s.toFixed(3)})`;
      if (Math.abs(tx - x) > .2 || Math.abs(ty - y) > .2 || Math.abs(ts - s) > .002) raf = requestAnimationFrame(place);
      else raf = 0;
    };
    const kick = () => { if (!raf) raf = requestAnimationFrame(place); };
    heroFrame.addEventListener('pointermove', e => {
      const r = heroFrame.getBoundingClientRect();
      tx = e.clientX - r.left; ty = e.clientY - r.top;
      if (!inside) { inside = true; x = tx; y = ty; ts = 1; lens.classList.add('is-on'); }
      kick();
    });
    heroFrame.addEventListener('pointerleave', () => { inside = false; ts = .6; lens.classList.remove('is-on'); kick(); });
    // grows over interactive glass so the two lenses don't fight
    $$('.hero-card, .hero-status', heroFrame).forEach(el => {
      el.addEventListener('pointerenter', () => { ts = .35; kick(); });
      el.addEventListener('pointerleave', () => { ts = 1; kick(); });
    });
  }

  /* ── work filter ── */
  const grid = $('#workGrid');
  const seg = $('#workFilter');
  if (grid && seg) {
    const cards = $$('.work-card', grid);
    const thumb = $('.seg-thumb', seg);
    const buttons = $$('button', seg);
    const pattern = ['span-7', 'span-5', 'span-5', 'span-7'];

    const layout = () => {
      let k = 0;
      cards.forEach(c => {
        c.classList.remove('span-7', 'span-5', 'span-full');
        if (c.hidden) return;
        c.classList.add(pattern[k % 4]);
        k++;
      });
      // an odd last card gets the whole row, as a wide panorama
      const vis = cards.filter(c => !c.hidden);
      if (vis.length % 2 === 1) vis[vis.length - 1].classList.add('span-full');
    };
    const moveThumb = btn => {
      seg.style.setProperty('--tx', btn.offsetLeft + 'px');
      seg.style.setProperty('--tw', btn.offsetWidth + 'px');
    };
    const apply = (filter, btn) => {
      buttons.forEach(b => b.setAttribute('aria-selected', String(b === btn)));
      moveThumb(btn);
      let k = 0;
      cards.forEach(c => {
        const show = filter === 'all' || c.dataset.cat === filter;
        c.hidden = !show;
        c.classList.remove('is-entering');
        if (show && !reduced) { void c.offsetWidth; c.style.setProperty('--k', k++); c.classList.add('is-entering'); }
      });
      layout();
    };
    buttons.forEach(b => b.addEventListener('click', () => apply(b.dataset.filter, b)));
    seg.addEventListener('keydown', e => {
      const i = buttons.findIndex(b => b.getAttribute('aria-selected') === 'true');
      const n = e.key === 'ArrowRight' ? i + 1 : e.key === 'ArrowLeft' ? i - 1 : null;
      if (n === null) return;
      const b = buttons[(n + buttons.length) % buttons.length];
      b.focus(); b.click();
    });
    layout();
    const sync = () => moveThumb(buttons.find(b => b.getAttribute('aria-selected') === 'true'));
    // thumb needs the final font metrics
    (document.fonts ? document.fonts.ready : Promise.resolve()).then(sync);
    new ResizeObserver(sync).observe(seg);
  }

  /* ── showreel: crossfading clips with story-style steps ── */
  (function reel() {
    const deck = $('#reelDeck');
    const stepsHost = $('#reelSteps');
    const playBtn = $('#reelPlay');
    if (!deck || !stepsHost) return;
    const vids = $$('video', deck);
    let idx = 0, playing = !reduced, visible = false;

    const steps = vids.map((v, i) => {
      const s = document.createElement('button');
      s.className = 'reel-step';
      s.type = 'button';
      s.setAttribute('aria-label', tr('v2.reel.clip', 'Klip') + ' ' + (i + 1));
      s.appendChild(document.createElement('i'));
      s.addEventListener('click', () => go(i));
      stepsHost.appendChild(s);
      return s;
    });
    const ensureSrc = v => { if (!v.src && v.dataset.src) { v.src = v.dataset.src; v.preload = 'auto'; } };
    const paint = () => steps.forEach((s, i) => { s.classList.toggle('is-done', i < idx); if (i !== idx) s.style.setProperty('--p', 0); });
    const go = i => {
      const prev = vids[idx];
      idx = (i + vids.length) % vids.length;
      const v = vids[idx];
      ensureSrc(v);
      ensureSrc(vids[(idx + 1) % vids.length]);
      vids.forEach(x => x.classList.toggle('is-active', x === v));
      if (prev !== v) { prev.pause(); }
      try { v.currentTime = 0; } catch (_) {}
      paint();
      if (playing && visible) v.play().catch(() => {});
    };
    vids.forEach((v, i) => {
      v.addEventListener('timeupdate', () => {
        if (i !== idx || !v.duration) return;
        steps[i].style.setProperty('--p', (v.currentTime / v.duration).toFixed(3));
      });
      v.addEventListener('ended', () => { if (i === idx) go(idx + 1); });
    });
    const setPlaying = p => {
      playing = p;
      playBtn.classList.toggle('is-paused', !p);
      const key = p ? 'v2.reel.pause' : 'v2.reel.play';
      playBtn.setAttribute('data-i18n-aria', key);
      playBtn.setAttribute('aria-label', tr(key, p ? 'Duraklat' : 'Oynat'));
      const v = vids[idx];
      if (p && visible) v.play().catch(() => {}); else v.pause();
    };
    playBtn && playBtn.addEventListener('click', () => setPlaying(!playing));
    setPlaying(playing);
    new IntersectionObserver(([e]) => {
      visible = e.isIntersecting;
      if (visible) { ensureSrc(vids[idx]); if (playing) vids[idx].play().catch(() => {}); }
      else vids[idx].pause();
    }, { threshold: 0.25 }).observe(deck);
    paint();
  })();

  /* ── skill meters: ten segments, filled once when seen ── */
  const meters = $$('.meter');
  meters.forEach(m => {
    const lvl = +m.dataset.level || 0;
    m.setAttribute('role', 'img');
    m.setAttribute('aria-label', lvl + '/10');
    for (let i = 0; i < 10; i++) {
      const b = document.createElement('b');
      b.style.setProperty('--d', i);
      b.dataset.on = i < lvl ? '1' : '';
      m.appendChild(b);
    }
  });
  const fill = m => $$('b', m).forEach(b => b.dataset.on && b.classList.add('on'));
  if (reduced || !('IntersectionObserver' in window)) meters.forEach(fill);
  else {
    const io = new IntersectionObserver(es => es.forEach(e => {
      if (e.isIntersecting) { $$('.meter', e.target).forEach(fill); io.unobserve(e.target); }
    }), { threshold: 0.35 });
    $$('.skill-col').forEach(c => io.observe(c));
  }

  /* ── lazy reCAPTCHA ── */
  (() => {
    const host = $('.g-recaptcha');
    if (!host) return;
    let loaded = false;
    const load = () => {
      if (loaded) return;
      loaded = true;
      host.setAttribute('data-theme', document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light');
      const s = document.createElement('script');
      s.src = 'https://www.google.com/recaptcha/api.js';
      s.async = true; s.defer = true;
      document.head.appendChild(s);
    };
    new IntersectionObserver((es, o) => { if (es[0].isIntersecting) { load(); o.disconnect(); } }, { rootMargin: '400px 0px' }).observe(host);
    $('#contactForm')?.addEventListener('focusin', load, { once: true });
  })();

  /* ── contact form (Formspree) ── */
  (() => {
    const form = $('#contactForm');
    if (!form) return;
    const status = $('#formStatus');
    const btn = form.querySelector('button[type=submit]');
    const label = btn.querySelector('.btn-label');
    const t = (k, f) => tr('contact.' + k, f);
    const setStatus = (msg, type) => { status.textContent = msg; status.dataset.state = type || ''; };

    form.addEventListener('submit', async e => {
      e.preventDefault();
      const token = (typeof grecaptcha !== 'undefined' && grecaptcha.getResponse) ? grecaptcha.getResponse() : '';
      if (!token) { setStatus(t('captchaRequired', 'Lütfen "Ben robot değilim" kutusunu işaretleyin.'), 'err'); return; }
      btn.disabled = true;
      label.textContent = t('sending', 'Gönderiliyor...');
      setStatus('', '');
      try {
        const res = await fetch(form.action, { method: 'POST', headers: { Accept: 'application/json' }, body: new FormData(form) });
        if (!res.ok) throw new Error(res.statusText);
        label.textContent = t('sent', 'Gönderildi');
        btn.classList.add('is-sent');
        setStatus(t('success', 'Mesajınız iletildi. En kısa sürede dönüş yapacağım.'), 'ok');
        form.reset();
        if (typeof grecaptcha !== 'undefined') grecaptcha.reset();
        setTimeout(() => { label.textContent = t('submit', 'Mesaj Gönder'); btn.classList.remove('is-sent'); btn.disabled = false; }, 3500);
      } catch (_) {
        btn.disabled = false;
        label.textContent = t('submit', 'Mesaj Gönder');
        setStatus(t('error', 'Gönderilemedi. Lütfen tekrar deneyin veya doğrudan e-posta atın.'), 'err');
      }
    });
  })();
})();
