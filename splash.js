/* Splash screen — coordinates min-display time + window load, then fades out.
   Also primes the saved theme synchronously to avoid splash flash in wrong color. */
(function(){
  // Apply saved theme ASAP so splash bg matches it (no light/dark flash)
  try {
    if (localStorage.getItem('theme') === 'light') {
      document.documentElement.classList.add('pre-light');
    }
  } catch (_) {}

  var MIN_MS = 1100; // logo finishes its reveal animation around ~1.0s
  var MAX_MS = 4000; // safety cap if window load is very slow
  var startedAt = performance.now();
  var faded = false;

  function fadeOut() {
    if (faded) return; faded = true;
    var splash = document.getElementById('splash');
    if (!splash) return;
    splash.classList.add('splash-out');
    setTimeout(function(){
      if (splash.parentNode) splash.parentNode.removeChild(splash);
    }, 700);
  }

  function scheduleFade() {
    var elapsed = performance.now() - startedAt;
    var wait = Math.max(0, MIN_MS - elapsed);
    setTimeout(fadeOut, wait);
  }

  if (document.readyState === 'complete') {
    scheduleFade();
  } else {
    window.addEventListener('load', scheduleFade);
    // Hard cap so a stuck resource never traps the splash
    setTimeout(fadeOut, MAX_MS);
  }
})();
