// Prepares the workshop's own project photos (iPhone HEIC, converted to JPEG with `sips`)
// for the web build: EXIF rotation, optional crop (fractions of the rotated image), resize, WebP.
// Usage: node scripts/prepare-own-photos.mjs <folder with IMG_xxxx.jpg>
import sharp from "sharp";
import path from "node:path";
const src = process.argv[2];
const out = "public/images/real";
// [source, output name, crop {l,t,w,h} as fractions or null]
const items = [
  ["IMG_7061", "kuchnia-orzech-wyspa", null],
  ["IMG_7060", "kuchnia-orzech-detal", null],
  ["IMG_7056", "kuchnia-orzech-jadalnia", null],
  ["IMG_7064", "sypialnia-zabudowa", null],
  ["IMG_7069", "lazienka-szafka", { l: 0.27, t: 0.22, w: 0.45, h: 0.56 }],
  ["IMG_5935", "kuchnia-kremowa", null],
  ["IMG_5933", "kuchnia-kremowa-front", null],
  ["IMG_4092", "komoda-dab", { l: 0, t: 0.06, w: 0.83, h: 0.94 }],
  ["IMG_3408", "sypialnia-panel", { l: 0, t: 0, w: 1, h: 0.62 }],
  ["IMG_3044", "szafa-skos", { l: 0.3, t: 0.05, w: 0.7, h: 0.95 }],
];
for (const [f, name, crop] of items) {
  const file = path.join(src, f + ".jpg");
  const rotated = await sharp(file).rotate().toBuffer({ resolveWithObject: true });
  let img = sharp(rotated.data);
  if (crop) {
    const { width: W, height: H } = rotated.info;
    img = img.extract({ left: Math.round(crop.l * W), top: Math.round(crop.t * H), width: Math.round(crop.w * W), height: Math.round(crop.h * H) });
  }
  const info = await img.resize({ width: 2000, height: 2000, fit: "inside", withoutEnlargement: true })
    .modulate({ brightness: 1.02 }).webp({ quality: 80 })
    .withMetadata({ exif: { IFD0: { ImageDescription: `BlatyDrewniane.eu own project photo (${f})` } } })
    .toFile(path.join(out, name + ".webp"));
  console.log(name, info.width, info.height, Math.round(info.size / 1024) + " KB");
}
