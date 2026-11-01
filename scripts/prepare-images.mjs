// Prepares photos sourced from meblekw.pl (owner's own site) for the web build.
import sharp from "sharp";
import path from "node:path";
const src = process.argv[2];
const out = "public/images/real";
const items = [
  ["Blaty_Drewniane_eu_Dab_007.jpg", "dab"],
  ["Blaty_Drewniane_eu_Jesion_011.jpg", "jesion"],
  ["Blaty_Drewniane_eu_Orzech_006.jpg", "orzech"],
  ["Blaty_Drewniane_eu_Tatajuba_006.jpg", "tatajuba"],
  ["Blaty_Drewniane_eu_Tauari_011.jpg", "tauari"],
  ["konsola2.JPG", "konsola-jesion"],
];
for (const [f, n] of items) {
  const meta = await sharp(path.join(src, f)).rotate().metadata();
  await sharp(path.join(src, f)).rotate().resize({ width: 1600, withoutEnlargement: true })
    .webp({ quality: 82 }).withMetadata({ exif: { IFD0: { ImageDescription: `Source: http://www.meblekw.pl (BlatyDrewniane.eu own photo, ${f})` } } })
    .toFile(path.join(out, n + ".webp"));
  console.log(n, meta.width, meta.height);
}
await sharp(path.join(src, "naglowek_blaty.jpg")).extract({ left: 0, top: 0, width: 215, height: 78 }).resize({ width: 860 }).png().toFile("/private/tmp/claude-502/-Users-Natalia-blatydrewniane/dc4d2d93-d3bc-4c90-b99a-df6ffe1ef2d1/scratchpad/logo_big.png");
