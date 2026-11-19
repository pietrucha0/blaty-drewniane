import type { CSSProperties } from "react";
import type { StaticImageData } from "next/image";

// Swatches use a clean square cut from each sample board (public/images/swatch),
// all at the same scale, so every species is framed the same way.
export function swatchUrl(swatch: StaticImageData) {
  return swatch.src;
}

export function swatchStyle(swatch: StaticImageData): CSSProperties {
  return {
    backgroundColor: "var(--color-board)",
    backgroundImage: `url(${swatch.src})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
}

export function selectSpecies(id: string) {
  window.dispatchEvent(new CustomEvent("select-species", { detail: id }));
}
