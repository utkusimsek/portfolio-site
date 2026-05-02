/* ─────────────────────────────────────────────────────────────────────────
   protect.js — İçerik koruma katmanı (caydırıcı seviyesi)

   NE YAPAR:
   - Sağ tık menüsünü engeller (görsel, video, model-viewer)
   - Görselleri sürükle-bırakla kaydetmeyi engeller
   - iOS Safari long-press menüsünü engeller
   - Ctrl/Cmd+S (sayfa kaydet) ve Ctrl/Cmd+U (kaynak görüntüle) engeller
   - Tetiklendiğinde kullanıcıya kibarca telif uyarısı gösterir

   NE YAPMAZ (ve yapamaz — tarayıcının tasarımı gereği):
   - DevTools'u kalıcı engelleyemez (kullanıcı isterse JS kapatır)
   - Network sekmesinden asset URL'i bulup direkt indirmeyi engelleyemez
   - Ekran görüntüsü almayı engelleyemez (sistem seviyesi)

   AMAÇ: Casual kopyalayanların %95'ini caydırmak. Kasıtlı ihlal için telif
   hukuku ve görsellerdeki imza/watermark devreye girer.
   ───────────────────────────────────────────────────────────────────────── */

(() => {
  // ── i18n-uyumlu mesajlar ────────────────────────────────────────────────
  const MSG = {
    tr: {
      copyright: '© Halil Utku Şimşek — Tüm hakları saklıdır',
      noRightClick: 'Bu içerik telif hakkı ile korunmaktadır.',
      noSave: 'Bu sayfa indirilemez. İletişim için: utkusimsek65@gmail.com',
    },
    en: {
      copyright: '© Halil Utku Şimşek — All rights reserved',
      noRightClick: 'This content is protected by copyright.',
      noSave: 'This page cannot be saved. Contact: utkusimsek65@gmail.com',
    }
  };
  const t = (key) => {
    const lang = document.documentElement.lang === 'en' ? 'en' : 'tr';
    return (MSG[lang] && MSG[lang][key]) || MSG.tr[key];
  };

  // ── Toast bildirimi ─────────────────────────────────────────────────────
  let toastEl, toastTimer;
  function showToast(msg) {
    if (!toastEl) {
      toastEl = document.createElement('div');
      toastEl.className = 'protect-toast';
      document.body.appendChild(toastEl);
    }
    toastEl.textContent = msg;
    toastEl.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toastEl.classList.remove('show'), 2400);
  }

  // ── Korumalı element seçici ─────────────────────────────────────────────
  // Tüm <img>, <video>, <model-viewer> ve .protected sınıflı elementler
  const PROTECTED_SELECTOR = 'img, video, model-viewer, .protected';

  // ── 1. Sağ tık (context menu) ──────────────────────────────────────────
  document.addEventListener('contextmenu', (e) => {
    if (e.target.matches && e.target.matches(PROTECTED_SELECTOR)) {
      e.preventDefault();
      showToast(t('noRightClick'));
    }
  }, { capture: true });

  // ── 2. Sürükle-bırak (görsel kaydetme yöntemi) ──────────────────────────
  document.addEventListener('dragstart', (e) => {
    if (e.target.tagName === 'IMG' || e.target.tagName === 'VIDEO') {
      e.preventDefault();
    }
  }, { capture: true });

  // ── 3. Kopyalama (görsel/element seçimi sırasında) ──────────────────────
  // Not: Metin kopyalamayı blok etmiyoruz — kullanıcı dostu kalsın
  document.addEventListener('copy', (e) => {
    const sel = window.getSelection();
    if (sel && sel.toString().length > 100) {
      // 100 karakterden uzun seçimlere copyright suffix ekle
      try {
        e.clipboardData.setData('text/plain',
          sel.toString() + '\n\n' + t('copyright') + ' — utkusimsek.com');
        e.preventDefault();
      } catch (_) { /* clipboardData yoksa sessizce geç */ }
    }
  });

  // ── 4. Klavye kısayolları ───────────────────────────────────────────────
  document.addEventListener('keydown', (e) => {
    const isMod = e.ctrlKey || e.metaKey;
    if (!isMod) return;
    const key = e.key.toLowerCase();
    // Ctrl/Cmd+S (sayfa kaydet), Ctrl/Cmd+U (kaynak görüntüle)
    if (key === 's' || key === 'u') {
      e.preventDefault();
      showToast(t('noSave'));
    }
    // Not: F12 / Ctrl+Shift+I bilerek engellenmedi — kararlı bir kişiyi
    // durdurmaz, dürüst tasarım inceleyenleri ise gereksiz rahatsız eder.
  });

  // ── 5. CSS koruması (user-select, drag, iOS long-press) ─────────────────
  // JS yüklendi sinyali — CSS bu sınıfa göre koruma uygular
  document.documentElement.classList.add('protect-on');
})();
