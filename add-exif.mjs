/* Tüm görsellere copyright EXIF/IPTC/XMP metadata göm.
   exiftool-vendored bundled binary kullanır — sistem geneli kurulum gerekmez.

   Eklenen alanlar:
   - EXIF: Artist, Copyright
   - IPTC: By-line, CopyrightNotice, Credit, UsageTerms (sosyal media için)
   - XMP-dc: Creator, Rights
   - XMP-xmpRights: Marked (true), WebStatement (telif sayfası URL'i)
*/
import { exiftool } from 'exiftool-vendored';
import { readdir } from 'node:fs/promises';
import { join } from 'node:path';

const ASSETS = 'assets';
const EXCLUDE = /^(logo|qr-)/;
const YEAR = new Date().getFullYear();

const COMMON_TAGS = {
  Artist: 'Halil Utku Şimşek',
  Copyright: `© ${YEAR} Halil Utku Şimşek — All Rights Reserved`,
  // IPTC
  'XMP-dc:Creator': 'Halil Utku Şimşek',
  'XMP-dc:Rights': `© ${YEAR} Halil Utku Şimşek — All Rights Reserved`,
  'XMP-xmpRights:Marked': true,
  'XMP-xmpRights:WebStatement': 'https://utkusimsek.com/telif.html',
  'XMP-xmpRights:UsageTerms': 'No reproduction, distribution or modification without written permission. Contact: utkusimsek65@gmail.com',
  'IPTC:By-line': 'Halil Utku Şimşek',
  'IPTC:CopyrightNotice': `© ${YEAR} Halil Utku Şimşek — All Rights Reserved`,
  'IPTC:Credit': 'utkusimsek.com',
  'IPTC:Source': 'utkusimsek.com',
};

const files = (await readdir(ASSETS))
  .filter(f => /\.(webp|png|jpg|jpeg)$/i.test(f))
  .filter(f => !EXCLUDE.test(f));

console.log(`İşlenecek: ${files.length} görsel`);
let ok = 0, fail = 0;
for (const f of files) {
  const filePath = join(ASSETS, f);
  try {
    await exiftool.write(filePath, COMMON_TAGS, {
      writeArgs: ['-overwrite_original']  // _original yedek dosyası oluşturma
    });
    console.log(`✓ ${f}`);
    ok++;
  } catch (err) {
    console.error(`✗ ${f}: ${err.message}`);
    fail++;
  }
}

await exiftool.end();
console.log(`\nBitti: ${ok} başarılı, ${fail} hatalı`);
