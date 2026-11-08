/* ─────────────────────────────────────────────────────────────────────────
   glass.js — liquid-glass refraction

   Every element with [data-refract] gets its own SVG displacement filter,
   generated for its exact size and corner radius. The map pushes the
   backdrop inward near the rim, the way a thick convex glass edge bends
   light, and is applied as `backdrop-filter: url(#…) blur() saturate()`.

   Only Chromium renders SVG filters inside backdrop-filter, so other
   browsers keep the CSS-only frosted fallback from style.css.
   ───────────────────────────────────────────────────────────────────────── */
(() => {
  const brands = navigator.userAgentData && navigator.userAgentData.brands;
  const isChromium = !!(brands && brands.some(b => /Chromium|Google Chrome|Microsoft Edge/.test(b.brand)));
  if (!isChromium) return;
  document.documentElement.classList.add('refract');

  // per-kind tuning: band = rim width (px, or 'full' for a whole-lens bend), scale = strength
  const KINDS = {
    nav:  { band: 18, scale: -38 },
    pill: { band: 14, scale: -30 },
    card: { band: 22, scale: -44 },
    lens: { band: 'full', scale: -64 }
  };

  const NS = 'http://www.w3.org/2000/svg';
  const host = document.createElementNS(NS, 'svg');
  host.setAttribute('width', '0');
  host.setAttribute('height', '0');
  host.setAttribute('aria-hidden', 'true');
  host.style.cssText = 'position:absolute;width:0;height:0;overflow:hidden;pointer-events:none';
  const defs = document.createElementNS(NS, 'defs');
  host.appendChild(defs);

  const cache = new Map(); // "w|h|r|kind" -> dataURL

  function buildMap(w, h, r, kind) {
    const key = w + '|' + h + '|' + r + '|' + kind;
    if (cache.has(key)) return cache.get(key);
    const cfg = KINDS[kind] || KINDS.pill;
    const cw = Math.max(2, Math.round(w)), ch = Math.max(2, Math.round(h));
    const cv = document.createElement('canvas');
    cv.width = cw; cv.height = ch;
    const ctx = cv.getContext('2d');
    const img = ctx.createImageData(cw, ch);
    const d = img.data;
    const rr = Math.min(r, cw / 2, ch / 2);
    const hx = cw / 2 - rr, hy = ch / 2 - rr;
    const band = cfg.band === 'full' ? Math.min(cw, ch) / 2 : cfg.band;

    for (let y = 0; y < ch; y++) {
      const py = y + .5 - ch / 2;
      for (let x = 0; x < cw; x++) {
        const px = x + .5 - cw / 2;
        const qx = Math.abs(px) - hx, qy = Math.abs(py) - hy;
        const ox = Math.max(qx, 0), oy = Math.max(qy, 0);
        const outside = Math.hypot(ox, oy);
        const sdf = outside + Math.min(Math.max(qx, qy), 0) - rr; // <0 inside
        const inset = -sdf;
        let dx = 0, dy = 0;
        if (inset >= 0 && inset < band) {
          let nx, ny;
          if (qx > 0 && qy > 0) { nx = ox / (outside || 1); ny = oy / (outside || 1); }
          else if (qx > qy) { nx = 1; ny = 0; }
          else { nx = 0; ny = 1; }
          nx *= Math.sign(px) || 1;
          ny *= Math.sign(py) || 1;
          const t = 1 - inset / band;           // 0 inside → 1 at the rim
          const m = t * t * (cfg.band === 'full' ? 1 : (3 - 2 * t) * .5 + .5);
          dx = nx * m; dy = ny * m;
        }
        const i = (y * cw + x) * 4;
        d[i]     = Math.round(128 + dx * 127);
        d[i + 1] = Math.round(128 + dy * 127);
        d[i + 2] = 128;
        d[i + 3] = 255;
      }
    }
    ctx.putImageData(img, 0, 0);
    const url = cv.toDataURL();
    cache.set(key, url);
    return url;
  }

  let uid = 0;
  function attach(el) {
    const kind = el.dataset.refract || 'pill';
    const id = 'lgf-' + (++uid);
    const f = document.createElementNS(NS, 'filter');
    f.setAttribute('id', id);
    f.setAttribute('x', '0'); f.setAttribute('y', '0');
    f.setAttribute('width', '100%'); f.setAttribute('height', '100%');
    f.setAttribute('color-interpolation-filters', 'sRGB');
    const im = document.createElementNS(NS, 'feImage');
    im.setAttribute('x', '0'); im.setAttribute('y', '0');
    im.setAttribute('preserveAspectRatio', 'none');
    im.setAttribute('result', 'map');
    const dm = document.createElementNS(NS, 'feDisplacementMap');
    dm.setAttribute('in', 'SourceGraphic');
    dm.setAttribute('in2', 'map');
    dm.setAttribute('xChannelSelector', 'R');
    dm.setAttribute('yChannelSelector', 'G');
    dm.setAttribute('scale', String((KINDS[kind] || KINDS.pill).scale));
    f.append(im, dm);
    defs.appendChild(f);

    let last = '';
    const update = () => {
      const w = Math.round(el.offsetWidth), h = Math.round(el.offsetHeight);
      if (!w || !h) return;
      const r = parseFloat(getComputedStyle(el).borderTopLeftRadius) || 0;
      const sig = w + 'x' + h + 'r' + r;
      if (sig === last) return;
      last = sig;
      im.setAttribute('width', w);
      im.setAttribute('height', h);
      im.setAttribute('href', buildMap(w, h, Math.min(r, h / 2, w / 2), kind));
      el.style.setProperty('--lg-filter', 'url(#' + id + ')');
    };
    let raf = 0;
    const ro = new ResizeObserver(() => { cancelAnimationFrame(raf); raf = requestAnimationFrame(update); });
    ro.observe(el);
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
