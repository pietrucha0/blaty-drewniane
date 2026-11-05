import type { CSSProperties } from "react";
import type { StaticImageData } from "next/image";

// Crops the plain wood area out of a sample-board photo (board sits mid-frame).
export function swatchStyle(image: StaticImageData, zoom = 3.2): CSSProperties {
  return {
    backgroundColor: "var(--color-board)",
    backgroundImage: `url(${image.src})`,
    backgroundSize: `${zoom * 100}%`,
    backgroundPosition: "58% 50%",
  };
}

export function selectSpecies(id: string) {
  window.dispatchEvent(new CustomEvent("select-species", { detail: id }));
}
