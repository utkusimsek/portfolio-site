/* Galeri görsellerine "©utkusimsekdesign" watermark bake et.
   Sağ alt köşe, modest visibility, drop shadow ile koyu/açık zeminde okunur.
   Logo ve QR dosyaları hariç tutulur. */
import sharp from 'sharp';
import { readdir, readFile, writeFile } from 'node:fs/promises';
import { join, basename } from 'node:path';

const ASSETS = 'assets';
const WATERMARK = '©utkusimsekdesign';
const EXCLUDE = /^(logo|qr-)/;

// Görseli boyuta göre ölçeklenmiş SVG watermark üret
function makeWatermarkSvg(imgWidth, imgHeight) {
  // Watermark boyutu: görsel genişliğinin ~%2.5'i (min 14, max 28)
  const fontSize = Math.max(14, Math.min(28, Math.round(imgWidth * 0.022)));
  const padding = Math.round(fontSize * 1.4);
  const textWidth = WATERMARK.length * fontSize * 0.55; // monospace olmadığı için yaklaşık
  const text = WATERMARK
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;');

  return `<svg width="${imgWidth}" height="${imgHeight}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur in="SourceAlpha" stdDeviation="2"/>
        <feOffset dx="0" dy="1" result="offsetblur"/>
        <feComponentTransfer><feFuncA type="linear" slope="0.7"/></feComponentTransfer>
        <feMerge><feMergeNode/><feMergeNode in="SourceGraphic"/></feMerge>
      </filter>
    </defs>
    <text x="${imgWidth - padding}" y="${imgHeight - padding}"
          font-family="Inter, Arial, sans-serif"
          font-size="${fontSize}"
          font-weight="500"
          letter-spacing="0.04em"
          fill="rgba(255,255,255,0.42)"
          text-anchor="end"
          filter="url(#shadow)">${text}</text>
  </svg>`;
}

async function watermarkImage(filePath) {
  // Önce dosyayı tamamen buffer'a oku — aynı path'e yazarken lock sorunu olmasın
  const buf = await readFile(filePath);
  const meta = await sharp(buf).metadata();
  const svg = Buffer.from(makeWatermarkSvg(meta.width, meta.height));

  // sharp pipeline: buffer → watermark composite → webp out
  const out = await sharp(buf)
    .composite([{ input: svg, top: 0, left: 0 }])
    .webp({ quality: 88, effort: 5 })
    .toBuffer();

  await writeFile(filePath, out);
  return { width: meta.width, height: meta.height, size: out.length };
}

const files = (await readdir(ASSETS))
  .filter(f => f.endsWith('.webp'))
  .filter(f => !EXCLUDE.test(f));

console.log(`İşlenecek: ${files.length} görsel`);
let ok = 0, fail = 0;
for (const f of files) {
  try {
    const r = await watermarkImage(join(ASSETS, f));
    console.log(`✓ ${f.padEnd(28)} ${r.width}×${r.height}  ${(r.size / 1024).toFixed(1)} KB`);
    ok++;
  } catch (err) {
    console.error(`✗ ${f}: ${err.message}`);
    fail++;
  }
}
console.log(`\nBitti: ${ok} başarılı, ${fail} hatalı`);
