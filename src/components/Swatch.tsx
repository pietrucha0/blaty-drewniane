import type { CSSProperties } from "react";

// Crops the plain wood area out of a sample-board photo (board sits mid-frame).
export function swatchStyle(image: string, zoom = 3.2): CSSProperties {
  return {
    backgroundImage: `url(${image})`,
    backgroundSize: `${zoom * 100}%`,
    backgroundPosition: "58% 50%",
  };
}

export function selectSpecies(id: string) {
  window.dispatchEvent(new CustomEvent("select-species", { detail: id }));
}
