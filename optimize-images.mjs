/* One-shot script: convert PNG/JPG in assets/ to WebP, resize > MAX_W to MAX_W.
   Keeps originals; emits .webp alongside. Skips logos/ subdir for safety. */
import sharp from 'sharp';
import { readdir, stat } from 'node:fs/promises';
import path from 'node:path';

const ASSETS = path.resolve('assets');
const MAX_W = 1920;
const QUALITY = 82;

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const out = [];
  for (const e of entries) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) out.push(...await walk(full));
    else out.push(full);
  }
  return out;
}

const files = (await walk(ASSETS)).filter(f =>
  /\.(png|jpe?g)$/i.test(f) && !f.toLowerCase().includes(`${path.sep}logos${path.sep}`)
);

let totalIn = 0, totalOut = 0, count = 0;
for (const f of files) {
  const out = f.replace(/\.(png|jpe?g)$/i, '.webp');
  const meta = await sharp(f).metadata();
  let pipeline = sharp(f);
  if (meta.width && meta.width > MAX_W) {
    pipeline = pipeline.resize({ width: MAX_W, withoutEnlargement: true });
  }
  await pipeline.webp({ quality: QUALITY, effort: 5 }).toFile(out);

  const inSize = (await stat(f)).size;
  const outSize = (await stat(out)).size;
  totalIn += inSize;
  totalOut += outSize;
  count++;
  const reduction = ((1 - outSize / inSize) * 100).toFixed(0);
  console.log(`${path.basename(f).padEnd(32)} ${(inSize / 1024 / 1024).toFixed(2).padStart(6)} MB -> ${(outSize / 1024 / 1024).toFixed(2).padStart(6)} MB  (-${reduction}%)`);
}

console.log('---');
console.log(`${count} files: ${(totalIn / 1024 / 1024).toFixed(1)} MB -> ${(totalOut / 1024 / 1024).toFixed(1)} MB  (saved ${((totalIn - totalOut) / 1024 / 1024).toFixed(1)} MB, -${((1 - totalOut / totalIn) * 100).toFixed(0)}%)`);
