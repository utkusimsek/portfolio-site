/* ─────────────────────────────────────────────────────────────────────────
   drag.js — Elastic drag with spring back (vanilla port of motion's drag)

   Verilen "liquid-weather-glass" React component'inin drag davranışı
   birebir port edildi:
   - dragConstraints: { left:0, right:0, top:0, bottom:0 } (origin'e snap)
   - dragElastic: 0.3 (delta * 0.3 — direnen hareket)
   - bounceStiffness: 300, bounceDamping: 10 (cubic-bezier overshoot)
   - whileDrag: scale(1.02)
   - Click vs drag ayrımı (5px eşiği)

   Auto-attach: .project-card (ana sayfadaki proje grid kartları)
   prefers-reduced-motion'da devre dışı.
   ───────────────────────────────────────────────────────────────────────── */
(() => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const SELECTOR = '.project-card, [data-drag]';
  const ELASTIC = 0.3;            // dragElastic
  const SCALE_DRAG = 1.02;        // whileDrag scale
  const CLICK_THRESHOLD = 5;      // px — bu mesafenin altında "click" sayılır
  const SPRING = 'cubic-bezier(0.34, 1.56, 0.64, 1)'; // overshoot easing
  const SPRING_DURATION = 700;    // ms

  // Global stil — drag sırasında cursor + hover override
  const style = document.createElement('style');
  style.textContent = `
    .is-dragging,
    .is-dragging * { cursor: grabbing !important; user-select: none !important; }
    /* Drag aktifken hover transform override — JS inline transform'u CSS hover ile çakışmasın */
    ${SELECTOR.split(',').map(s => s.trim() + '.is-dragging:hover').join(', ')} {
      transform: none;
    }
    ${SELECTOR.split(',').map(s => s.trim()).join(', ')} { will-change: transform; }
  `;
  document.head.appendChild(style);

  // Bir element için drag state
  function attachDrag(el) {
    if (el.dataset.dragAttached) return;
    el.dataset.dragAttached = '1';
    el.style.touchAction = 'pan-y'; // dikey scroll rahat çalışsın

    let startX = 0, startY = 0;
    let dragging = false;
    let moved = false;
    let pointerId = null;
    let rafId = null;
    let lastDx = 0, lastDy = 0;

    function updateTransform() {
      el.style.transform = `translate(${lastDx}px, ${lastDy}px) scale(${SCALE_DRAG})`;
      rafId = null;
    }

    function onPointerDown(e) {
      if (!e.isPrimary) return;
      // Interactive element (anchor/button) tıklamasında drag tetikleme
      // ama biz click vs drag'ı movement threshold ile ayırıyoruz, yine de
      // başlatmaya izin verelim — sadece moved=true olursa click suppress edilir
      pointerId = e.pointerId;
      startX = e.clientX;
      startY = e.clientY;
      dragging = true;
      moved = false;
      lastDx = 0; lastDy = 0;

      // Pointer capture: pointer element dışına çıksa bile move/up alırız
      try { el.setPointerCapture(pointerId); } catch (_) {}

      // Geçişi anlık kapat (drag sırasında smooth değil, anlık responsive)
      el.style.transition = 'none';
    }

    function onPointerMove(e) {
      if (!dragging || e.pointerId !== pointerId) return;
      const dx = e.clientX - startX;
      const dy = e.clientY - startY;
      const dist = Math.hypot(dx, dy);

      if (!moved && dist > CLICK_THRESHOLD) {
        moved = true;
        el.classList.add('is-dragging');
      }
      if (!moved) return;

      // Elastic resistance — dragConstraints {0,0,0,0} + dragElastic 0.3
      lastDx = dx * ELASTIC;
      lastDy = dy * ELASTIC;
      if (!rafId) rafId = requestAnimationFrame(updateTransform);
    }

    function onPointerUp(e) {
      if (!dragging || (pointerId !== null && e.pointerId !== pointerId)) return;
      dragging = false;
      try { el.releasePointerCapture(pointerId); } catch (_) {}
      pointerId = null;

      if (moved) {
        // Spring back to origin with overshoot easing
        el.style.transition = `transform ${SPRING_DURATION}ms ${SPRING}`;
        el.style.transform = 'translate(0, 0) scale(1)';
        // Geçiş bitince inline style'ları temizle, hover CSS devreye girsin
        const cleanup = () => {
          el.style.transition = '';
          el.style.transform = '';
          el.classList.remove('is-dragging');
          el.removeEventListener('transitionend', cleanup);
        };
        el.addEventListener('transitionend', cleanup);
        // Güvenlik ağı: transitionend tetiklenmezse manuel cleanup
        setTimeout(cleanup, SPRING_DURATION + 50);
      } else {
        // Hareket olmadı — click sayılır, inline temizle
        el.style.transition = '';
        el.style.transform = '';
      }
    }

    function onClick(e) {
      // moved=true ise click iptal — drag oldu, link açılmasın
      if (moved) {
        e.preventDefault();
        e.stopPropagation();
      }
    }

    el.addEventListener('pointerdown', onPointerDown);
    el.addEventListener('pointermove', onPointerMove);
    el.addEventListener('pointerup', onPointerUp);
    el.addEventListener('pointercancel', onPointerUp);
    el.addEventListener('lostpointercapture', onPointerUp);
    // Click capture phase — drag tespit edilirse link click engellenir
    el.addEventListener('click', onClick, true);
  }

  // İlk yükleme + dinamik eklenenleri yakala
  function scan() {
    document.querySelectorAll(SELECTOR).forEach(attachDrag);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', scan);
  } else {
    scan();
  }

  // Statik içerik için subtree-wide observer'a gerek yok — load sonrası 1 tarama yeter.
  // (i18n innerHTML değiştirir ama element kimliği aynı kaldığı için listener'lar korunur.)
  window.addEventListener('load', scan, { once: true });
})();
