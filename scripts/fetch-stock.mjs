// Downloads Unsplash placeholder photos (free license) and records provenance in EXIF.
import sharp from "sharp";
const list = {
  "hero-krawedz": "1782914701565-ab51d55e1479", // fetched at w=2600 for wide screens
  "blat-kuchnia": "1786462543690-71b19c0d5321",
  "stol-orzech": "1576249720336-35b043fce96d",
  "regal": "1580628881159-4eae247a6bf5",
  "wyspa": "1790924083649-146d1f683b1a",
  "blat-wyspa-jasny": "1788217158679-5f7a52049ecc",
  "lazienka": "1604769319166-010643ace337",
  "stol-live-edge": "1785059938231-6ff13482c994",
  "stol-jadalnia": "1615066390971-03e4e1c36ddf",
  "stol-detal": "1672678437993-8e14a6ccd38e",
  "komoda": "1767963758785-b9def36c13e3",
  "warsztat-olowek": "1659930087003-2d64e33181f7",
  "warsztat-dluto": "1631396326838-de37e5f8bcbc",
};
for (const [name, id] of Object.entries(list)) {
  const url = `https://images.unsplash.com/photo-${id}?w=1800&q=80`;
  const res = await fetch(url);
  if (!res.ok) { console.log("FAIL", name, res.status); continue; }
  const buf = Buffer.from(await res.arrayBuffer());
  const info = await sharp(buf).resize({ width: 1600, withoutEnlargement: true }).webp({ quality: 78 })
    .withMetadata({ exif: { IFD0: { ImageDescription: `Placeholder. Source: Unsplash photo-${id} (Unsplash License). Replace with own project photo.` } } })
    .toFile(`public/images/stock/${name}.webp`);
  console.log(name, info.width, info.height);
}
