import fs from 'fs';

const NAMES = [
  'Figma', 'Twinmotion', 'Procreate', 'Photoshop',
  'KeyShot', 'V-Ray', 'AutoCAD', '3ds Max', 'Rhino 3D', 'Fusion 360'
];

const separator = `      <span class="mq-sep">✦</span>`;

function item(name) {
  return `      <span class="mq-item">${name}</span>`;
}

// Build one set: name · sep · name · sep ...
const set = NAMES.map(n => `${item(n)}\n${separator}`).join('\n');

const marqueeBlock =
`  <!-- ─── LOGO MARQUEE ─── -->
  <div class="marquee-wrap text-marquee-wrap">
    <div class="marquee-fade marquee-fade-l"></div>
    <div class="marquee-fade marquee-fade-r"></div>
    <div class="text-marquee-track">

      <!-- SET 1 -->
${set}

      <!-- SET 2 (duplicate for infinite loop) -->
${set}

    </div>
  </div>

  `;

// ── Splice into index.html ────────────────────────────────────────────────
let html = fs.readFileSync('C:/Users/utkus/portfolio-site/index.html', 'utf8');
const startMark = '  <!-- ─── LOGO MARQUEE ─── -->';
const endMark   = '  <!-- ─── WORK ─── -->';
const s = html.indexOf(startMark);
const e = html.indexOf(endMark);
if (s === -1 || e === -1) { console.error('Markers not found'); process.exit(1); }
html = html.slice(0, s) + marqueeBlock + html.slice(e);
fs.writeFileSync('C:/Users/utkus/portfolio-site/index.html', html, 'utf8');
console.log('Done — text marquee rebuilt with', NAMES.length, 'items (x2 sets)');
