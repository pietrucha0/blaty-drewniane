import type { CSSProperties } from "react";
import type { StaticImageData } from "next/image";

// Small optimized copy of a sample-board photo for swatches and the wood cursor
// (the originals are ~250 KB each and would compete with the hero image).
export function swatchUrl(image: StaticImageData) {
  // FTP build: pre-rendered small copy (see scripts/build-ftp.mjs).
  if (process.env.NEXT_PUBLIC_STATIC_EXPORT) return image.src.replace(/\.(webp|jpe?g|png)$/i, ".w384.webp");
  return `/_next/image?url=${encodeURIComponent(image.src)}&w=384&q=60`;
}

// Crops the plain wood area out of a sample-board photo (board sits mid-frame).
export function swatchStyle(image: StaticImageData, zoom = 3.2): CSSProperties {
  return {
    backgroundColor: "var(--color-board)",
    backgroundImage: `url(${swatchUrl(image)})`,
    backgroundSize: `${zoom * 100}%`,
    backgroundPosition: "58% 50%",
  };
}

export function selectSpecies(id: string) {
  window.dispatchEvent(new CustomEvent("select-species", { detail: id }));
}
