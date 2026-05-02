/* QR'ı beyaz desen + şeffaf arka plan PNG olarak üret.
   1) api.qrserver.com'dan siyah/beyaz baz QR çek
   2) Sharp ile siyah pikselleri beyaza, beyaz pikselleri transparent yap
   3) Çıktıyı assets/'e kaydet */
import sharp from 'sharp';
import { writeFile } from 'node:fs/promises';

const URL = 'https://utkusimsek.com';
const SIZE = 1000;
const apiUrl =
  'https://api.qrserver.com/v1/create-qr-code/' +
  `?size=${SIZE}x${SIZE}&data=${encodeURIComponent(URL)}` +
  '&format=png&margin=20&qzone=2&ecc=H';

const res = await fetch(apiUrl);
if (!res.ok) throw new Error(`API ${res.status}`);
const baseBuf = Buffer.from(await res.arrayBuffer());

// Raw piksel verisine eriş (RGB)
const { data, info } = await sharp(baseBuf)
  .ensureAlpha()
  .raw()
  .toBuffer({ resolveWithObject: true });

// Yeni RGBA buffer: koyu pikseller → beyaz opak, açık pikseller → tam şeffaf
const px = info.width * info.height;
const out = Buffer.alloc(px * 4);
for (let i = 0, j = 0; i < data.length; i += 4, j += 4) {
  const luminance = (data[i] + data[i + 1] + data[i + 2]) / 3;
  const isDark = luminance < 128;
  out[j]     = 255;        // R
  out[j + 1] = 255;        // G
  out[j + 2] = 255;        // B
  out[j + 3] = isDark ? 255 : 0; // alpha
}

// Varyant 1: Beyaz desen + ŞEFFAF arka plan (her yere overlay)
const transparentPath = 'assets/qr-utkusimsek-com-white.png';
await sharp(out, { raw: { width: info.width, height: info.height, channels: 4 } })
  .png({ compressionLevel: 9 })
  .toFile(transparentPath);

// Varyant 2: Beyaz desen + KOYU zemin (#0a0a0b — site bg ile uyumlu)
const darkBgPath = 'assets/qr-utkusimsek-com-white-on-dark.png';
await sharp(out, { raw: { width: info.width, height: info.height, channels: 4 } })
  .flatten({ background: { r: 10, g: 10, b: 11 } })
  .png({ compressionLevel: 9 })
  .toFile(darkBgPath);

console.log(`✓ ${transparentPath} (${info.width}×${info.height}, beyaz + şeffaf)`);
console.log(`✓ ${darkBgPath} (${info.width}×${info.height}, beyaz + #0a0a0b zemin)`);
