/* ─────────────────────────────────────────────────────────────────────────
   glass.js — liquid-glass refraction

   Each [data-refract] element gets an SVG filter built for its exact size.
   The displacement map follows the physics of 21st.dev's Liquid Glass
   (manuarora700): a squircle-dome height field, Snell's-law bend for glass
   (n = 1.5), displacement along the field's gradient, and a small RGB split
   for chromatic fringing at the rim. Applied as
   `backdrop-filter: url(#…) blur() saturate()`.

   Chromium only; Safari and Firefox keep the frosted CSS fallback.
   ───────────────────────────────────────────────────────────────────────── */
(() => {
  const ua = navigator.userAgent;
  const safariLike = /Safari/.test(ua) && !/Chrome|Chromium|Edg|OPR/.test(ua);
  const supportsUrl = window.CSS && CSS.supports &&
    (CSS.supports('backdrop-filter', 'url(#x)') || CSS.supports('-webkit-backdrop-filter', 'url(#x)'));
  const brands = navigator.userAgentData && navigator.userAgentData.brands;
  const chromium = !!(brands && brands.some(b => /Chromium|Google Chrome|Microsoft Edge|Opera/.test(b.brand)));
  const reducedTransparency = matchMedia('(prefers-reduced-transparency: reduce)').matches;
  if (!chromium || safariLike || !supportsUrl || reducedTransparency) return;
  document.documentElement.classList.add('refract');

  // bevel: rim width in px ('r' = fraction of the short side), scale: bend in px,
  // ab: chromatic spread in px, frost: post-refraction blur
  const KINDS = {
    nav:    { bevel: 16, scale: 34, ab: 0, frost: .3 },
    pill:   { bevel: 14, scale: 28, ab: 0, frost: .3 },
    card:   { bevel: 22, scale: 40, ab: 0, frost: .4 },
    lens:   { bevel: .42, scale: 70, ab: 9, frost: .2 },
    cursor: { bevel: .46, scale: 46, ab: 6, frost: .2 }
  };

  const NS = 'http://www.w3.org/2000/svg';
  const host = document.createElementNS(NS, 'svg');
  host.setAttribute('width', '0');
  host.setAttribute('height', '0');
  host.setAttribute('aria-hidden', 'true');
  host.style.cssText = 'position:absolute;width:0;height:0;overflow:hidden;pointer-events:none';
  const defs = document.createElementNS(NS, 'defs');
  host.appendChild(defs);

  /* ── displacement map ── */
  function sdRoundedBox(px, py, hw, hh, r) {
    const qx = Math.abs(px) - hw + r, qy = Math.abs(py) - hh + r;
    return Math.min(Math.max(qx, qy), 0) + Math.hypot(Math.max(qx, 0), Math.max(qy, 0)) - r;
  }
  // squircle dome slope → refracted bend; x = 0 at the rim, 1 toward the centre
  function bend(x) {
    const u = 1 - Math.min(1, Math.max(0, x));
    const denom = Math.pow(1 - Math.pow(u, 4), .75);
    if (denom < 1e-6) return 0;
    const ti = Math.atan(Math.min(Math.pow(u, 3) / denom, 8));
    const st = Math.sin(ti) / 1.5;
    if (st >= 1) return Math.sin(ti);
    return Math.sin(ti - Math.asin(st));
  }
  function phiTable(bevel) {
    const n = Math.max(1, Math.ceil(bevel));
    const phi = new Float32Array(n + 1);
    for (let d = 1; d <= n; d++) phi[d] = phi[d - 1] + bend(d / n);
    return phi;
  }
  function samplePhi(phi, depth) {
    const max = phi.length - 1;
    if (depth <= 0) return phi[0];
    if (depth >= max) return phi[max];
    const i = Math.floor(depth), f = depth - i;
    return phi[i] * (1 - f) + phi[i + 1] * f;
  }

  const cache = new Map();
  function buildMap(w, h, radius, bevelPx) {
    const key = [w, h, radius, bevelPx].join('|');
    if (cache.has(key)) return Promise.resolve(cache.get(key));
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const W = Math.max(1, Math.round(w * dpr)), H = Math.max(1, Math.round(h * dpr));
    const hw = W / 2, hh = H / 2;
    const r = Math.min(radius * dpr, hw, hh);
    const bevel = Math.max(1, Math.min(bevelPx, Math.min(w, h) / 2) * dpr);
    const phi = phiTable(bevel);
    const field = new Float32Array(W * H);
    for (let y = 0; y < H; y++) {
      const py = y - hh + .5;
      for (let x = 0; x < W; x++) {
        const d = sdRoundedBox(x - hw + .5, py, hw, hh, r);
        field[y * W + x] = d > 0 ? 0 : samplePhi(phi, Math.min(bevel, -d));
      }
    }
    const data = new Uint8ClampedArray(W * H * 4);
    const gain = 1.35;
    for (let y = 0; y < H; y++) {
      const py = y - hh + .5;
      for (let x = 0; x < W; x++) {
        const i = (y * W + x) << 2;
        if (sdRoundedBox(x - hw + .5, py, hw, hh, r) > 0) {
          data[i] = data[i + 1] = data[i + 2] = 128; data[i + 3] = 0; continue;
        }
        const x0 = Math.max(0, x - 1), x1 = Math.min(W - 1, x + 1);
        const y0 = Math.max(0, y - 1), y1 = Math.min(H - 1, y + 1);
        const gx = (field[y * W + x1] - field[y * W + x0]) / (x1 - x0 || 1);
        const gy = (field[y1 * W + x] - field[y0 * W + x]) / (y1 - y0 || 1);
        data[i] = 128 + Math.max(-1, Math.min(1, gx * gain)) * 127;
        data[i + 1] = 128 + Math.max(-1, Math.min(1, gy * gain)) * 127;
        data[i + 2] = 128;
        data[i + 3] = 255;
      }
    }
    const cv = document.createElement('canvas');
    cv.width = W; cv.height = H;
    cv.getContext('2d').putImageData(new ImageData(data, W, H), 0, 0);
    return new Promise(res => cv.toBlob(b => {
      const url = URL.createObjectURL(b);
      cache.set(key, url);
      res(url);
    }, 'image/png'));
  }

  /* ── filter ── */
  function filterMarkup(id, url, w, h, k) {
    const pad = Math.ceil(k.scale + k.ab + 4);
    const px = pad / Math.max(1, w) * 100, py = pad / Math.max(1, h) * 100;
    const disp = (s, res) => `<feDisplacementMap in="SourceGraphic" in2="map" scale="${s}" xChannelSelector="R" yChannelSelector="G" result="${res}"/>`;
    return `<filter id="${id}" color-interpolation-filters="sRGB" x="-${px.toFixed(3)}%" y="-${py.toFixed(3)}%" width="${(100 + 2 * px).toFixed(3)}%" height="${(100 + 2 * py).toFixed(3)}%">
      <feImage href="${url}" x="0" y="0" width="${w}" height="${h}" preserveAspectRatio="none" result="map"/>
      ${k.ab <= 0 ? disp(k.scale, 'rgb') : `${disp(k.scale + k.ab, 'dR')}<feColorMatrix in="dR" type="matrix" values="1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0" result="r"/>
      ${disp(k.scale, 'dG')}<feColorMatrix in="dG" type="matrix" values="0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 1 0" result="g"/>
      ${disp(Math.max(0, k.scale - k.ab), 'dB')}<feColorMatrix in="dB" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 0 0 1 0" result="b"/>
      <feBlend in="r" in2="g" mode="screen" result="rg"/><feBlend in="rg" in2="b" mode="screen" result="rgb"/>`}
      <feGaussianBlur in="rgb" stdDeviation="${k.frost}"/>
    </filter>`;
  }

  let uid = 0;
  function attach(el) {
    if (el.__glass) return;
    el.__glass = true;
    const k = KINDS[el.dataset.refract] || KINDS.pill;
    let last = '', current = null, pending = 0;
    const update = async () => {
      const w = Math.round(el.offsetWidth), h = Math.round(el.offsetHeight);
      if (w < 2 || h < 2) return;
      const radius = Math.min(parseFloat(getComputedStyle(el).borderTopLeftRadius) || 0, w / 2, h / 2);
      const sig = w + 'x' + h + 'r' + radius;
      if (sig === last) return;
      last = sig;
      const ticket = ++pending;
      const bevel = k.bevel < 1 ? Math.min(w, h) * k.bevel : k.bevel;
      const url = await buildMap(w, h, radius, bevel);
      if (ticket !== pending) return;
      // fresh id per build: browsers cache filter output by id
      const id = 'lgf-' + (++uid);
      const wrap = document.createElementNS(NS, 'g');
      wrap.innerHTML = filterMarkup(id, url, w, h, k);
      const f = wrap.firstElementChild;
      defs.appendChild(f);
      el.style.setProperty('--lg-filter', 'url(#' + id + ')');
      if (current) setTimeout((old => () => old.remove())(current), 200);
      current = f;
    };
    let raf = 0;
    new ResizeObserver(() => { cancelAnimationFrame(raf); raf = requestAnimationFrame(update); }).observe(el);
    update();
  }

  function init() {
    document.body.appendChild(host);
    document.querySelectorAll('[data-refract]').forEach(attach);
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
  window.__glassAttach = attach;
})();
