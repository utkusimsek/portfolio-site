import fetch from 'node-fetch';
import fs from 'fs';
import path from 'path';
import { pipeline } from 'stream/promises';

const FAL_KEY = 'd3743376-9dea-44e4-b900-379c39221809:7223b11fbdcd2d6de68dbe34fcc52786';
const HEADERS = {
  'Authorization': `Key ${FAL_KEY}`,
  'Content-Type': 'application/json'
};

const PROMPT_NANO = `A premium futuristic landing page hero visual for an industrial designer's personal website. A beautifully designed product object placed in the center of a dark minimal studio environment, blending product design, architecture, and advanced industrial aesthetics. The object should feel like a conceptual designer piece, smooth parametric surfaces, refined curvature, precise edges, matte black, brushed aluminum, smoked glass, soft reflections, elegant engineering details. Behind and around the object, subtle blueprint lines, wireframe geometry, technical sketch layers, construction curves, exploded design hints, and minimal interface grid overlays. Cinematic composition, ultra clean background, high-end visual identity, minimal luxury, soft volumetric light, dramatic contrast, premium art direction, sophisticated shadows, centered composition, highly detailed, photorealistic, modern portfolio website style, sleek, iconic, emotionally powerful, award-winning industrial design presentation. No people, no text, no logo, no clutter, no colorful elements, no busy background, no extra objects.`;

const PROMPT_KLING_1 = `A cinematic website intro animation for an industrial designer portfolio. The scene begins in near darkness with faint technical blueprint lines and sketch strokes appearing softly in space. An object starts as a minimal pencil sketch, then transforms into a wireframe 3D model, then smooth parametric surfaces grow over it, and finally it becomes a fully materialized premium industrial design object. Camera performs a slow cinematic dolly-in with subtle orbit movement. Soft volumetric lighting reveals the form gradually. Fine engineering details, spline curves, CAD construction lines, and exploded design fragments animate elegantly around the object. The final object settles in the center in a luxury black studio environment with matte black, brushed aluminum, and smoked glass materials. Very minimal, sophisticated, premium, modern, emotionally powerful, clean, no chaos, no fast motion, no unnecessary elements. Smooth transitions, high-end motion design, elegant timing, luxury portfolio aesthetic, award-winning industrial design presentation.`;

const PROMPT_KLING_2 = `An ultra-premium product reveal animation for an industrial designer portfolio website. A sleek conceptual object slowly rotates in a dark luxury studio under dramatic directional lighting. Photorealistic matte black and brushed aluminum surfaces catch soft rimlight, revealing perfect surface curvature and precision engineering details. Subtle depth-of-field, elegant shadow play, volumetric atmosphere. The camera performs a slow cinematic orbit — smooth, controlled, unhurried. Technical blueprint overlays briefly ghost in and dissolve, hinting at the design process behind the form. Minimal, award-winning, emotionally refined. No people, no text, no clutter.`;

async function submitQueue(modelId, body) {
  const res = await fetch(`https://queue.fal.run/${modelId}`, {
    method: 'POST',
    headers: HEADERS,
    body: JSON.stringify(body)
  });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Submit failed ${res.status}: ${text}`);
  }
  return res.json();
}

async function pollResult(modelId, requestId, label) {
  const statusUrl = `https://queue.fal.run/${modelId}/requests/${requestId}/status`;
  const resultUrl = `https://queue.fal.run/${modelId}/requests/${requestId}`;
  let dots = 0;
  while (true) {
    await new Promise(r => setTimeout(r, 8000));
    const sr = await fetch(statusUrl, { headers: HEADERS });
    if (!sr.ok) { process.stdout.write('.'); continue; }
    const status = await sr.json();
    const st = status.status || '';
    process.stdout.write(`\r  [${label}] Status: ${st}${'.'.repeat(++dots % 4)}   `);
    if (st === 'COMPLETED') {
      console.log(`\n  [${label}] Done!`);
      const rr = await fetch(resultUrl, { headers: HEADERS });
      return rr.json();
    }
    if (st === 'FAILED') throw new Error(`[${label}] Generation FAILED`);
  }
}

async function downloadFile(url, dest) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Download failed: ${res.status}`);
  await pipeline(res.body, fs.createWriteStream(dest));
}

async function main() {
  fs.mkdirSync('./assets', { recursive: true });

  console.log('\n🚀 Submitting 3 jobs to fal.ai...\n');

  // 1. Nano Banana 2 — image
  console.log('  [1] Submitting Nano Banana 2 (image)...');
  const nanoJob = await submitQueue('fal-ai/nano-banana-2', {
    prompt: PROMPT_NANO,
    image_size: 'landscape_16_9',
    num_images: 1
  });
  console.log(`      Request ID: ${nanoJob.request_id}`);

  // 2. Kling 3.0 Pro — cinematic intro video
  console.log('  [2] Submitting Kling 3.0 Pro (cinematic intro)...');
  const kling1Job = await submitQueue('fal-ai/kling-video/v3/pro/text-to-video', {
    prompt: PROMPT_KLING_1,
    duration: '5',
    aspect_ratio: '16:9'
  });
  console.log(`      Request ID: ${kling1Job.request_id}`);

  // 3. Kling 3.0 Standard — product orbit video
  console.log('  [3] Submitting Kling 3.0 Standard (product orbit)...');
  const kling2Job = await submitQueue('fal-ai/kling-video/v3/standard/text-to-video', {
    prompt: PROMPT_KLING_2,
    duration: '5',
    aspect_ratio: '16:9'
  });
  console.log(`      Request ID: ${kling2Job.request_id}`);

  console.log('\n⏳ Polling for results (videos take 3-8 min)...\n');

  const [nanoRes, kling1Res, kling2Res] = await Promise.all([
    pollResult('fal-ai/nano-banana-2', nanoJob.request_id, 'NanoBanana2'),
    pollResult('fal-ai/kling-video/v3/pro/text-to-video', kling1Job.request_id, 'Kling3-Pro'),
    pollResult('fal-ai/kling-video/v3/standard/text-to-video', kling2Job.request_id, 'Kling3-Std')
  ]);

  console.log('\n📥 Downloading assets...\n');

  // Save nano image
  const nanoImgUrl = nanoRes?.images?.[0]?.url || nanoRes?.image?.url || nanoRes?.url;
  if (nanoImgUrl) {
    await downloadFile(nanoImgUrl, './assets/hero-image.webp');
    console.log('  ✓ hero-image.webp saved');
  } else {
    console.log('  ⚠ Nano Banana result:', JSON.stringify(nanoRes).slice(0,200));
  }

  // Save kling1 video
  const k1Url = kling1Res?.video?.url || kling1Res?.videos?.[0]?.url || kling1Res?.url;
  if (k1Url) {
    await downloadFile(k1Url, './assets/hero-intro.mp4');
    console.log('  ✓ hero-intro.mp4 saved');
  } else {
    console.log('  ⚠ Kling1 result:', JSON.stringify(kling1Res).slice(0,200));
  }

  // Save kling2 video
  const k2Url = kling2Res?.video?.url || kling2Res?.videos?.[0]?.url || kling2Res?.url;
  if (k2Url) {
    await downloadFile(k2Url, './assets/hero-orbit.mp4');
    console.log('  ✓ hero-orbit.mp4 saved');
  } else {
    console.log('  ⚠ Kling2 result:', JSON.stringify(kling2Res).slice(0,200));
  }

  // Write result URLs to JSON for reference
  fs.writeFileSync('./assets/results.json', JSON.stringify({
    nano_image: nanoImgUrl,
    kling_intro: k1Url,
    kling_orbit: k2Url
  }, null, 2));

  console.log('\n✅ All assets generated & saved to ./assets/\n');
  console.log('   Next: updating index.html with these assets...\n');
}

main().catch(err => {
  console.error('\n❌ Error:', err.message);
  process.exit(1);
});
