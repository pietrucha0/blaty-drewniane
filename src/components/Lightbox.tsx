"use client";

import Image, { type StaticImageData } from "next/image";
import { useEffect, useRef, useState } from "react";
import { X } from "lucide-react";

export type LightboxItem = {
  image: StaticImageData;
  alt: string;
  title: string;
  wood?: string;
  placeholder?: boolean;
};

export function openLightbox(item: LightboxItem) {
  window.dispatchEvent(new CustomEvent<LightboxItem>("open-lightbox", { detail: item }));
}

/** Overlay button that turns a photo into a "Zobacz" target and opens the lightbox. */
export function ZoomButton({ item }: { item: LightboxItem }) {
  return (
    <button
      type="button"
      data-cursor="look"
      aria-label={`Powiększ: ${item.title}`}
      onClick={() => openLightbox(item)}
      className="absolute inset-0 z-[1] block text-left"
    />
  );
}

export function Lightbox() {
  const ref = useRef<HTMLDialogElement>(null);
  const opener = useRef<HTMLElement | null>(null);
  const [item, setItem] = useState<LightboxItem | null>(null);

  useEffect(() => {
    const onOpen = (e: Event) => {
      opener.current = document.activeElement as HTMLElement | null;
      setItem((e as CustomEvent<LightboxItem>).detail);
    };
    window.addEventListener("open-lightbox", onOpen);
    return () => window.removeEventListener("open-lightbox", onOpen);
  }, []);

  useEffect(() => {
    const d = ref.current;
    if (!d) return;
    if (item && !d.open) {
      d.showModal();
      document.documentElement.style.overflow = "hidden";
    }
  }, [item]);

  const onClose = () => {
    document.documentElement.style.overflow = "";
    setItem(null);
    opener.current?.focus();
  };

  return (
    <dialog
      ref={ref}
      onClose={onClose}
      onClick={(e) => {
        // A click on the backdrop (the dialog itself, not its content) closes it
        if (e.target === ref.current) ref.current?.close();
      }}
      aria-label={item ? item.title : "Podgląd zdjęcia"}
      className="m-auto max-h-[100svh] w-[min(92vw,1100px)] max-w-none overflow-visible bg-transparent p-0 text-sand backdrop:bg-espresso/85 backdrop:backdrop-blur-sm"
    >
      {item && (
        <figure className="relative">
          <button
            type="button"
            onClick={() => ref.current?.close()}
            aria-label="Zamknij podgląd"
            className="absolute -top-12 right-0 inline-flex size-11 items-center justify-center text-cream"
            autoFocus
          >
            <X className="size-6" strokeWidth={1.5} aria-hidden />
          </button>
          <div className="relative h-[min(72svh,760px)] w-full bg-board">
            <Image src={item.image} alt={item.alt} fill sizes="92vw" placeholder="blur" className="object-contain" />
          </div>
          <figcaption className="mt-4 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
            <span className="font-display text-xl font-medium text-cream sm:text-2xl">{item.title}</span>
            <span className="text-sm text-dust">
              {[item.wood, item.placeholder ? "Zdjęcie poglądowe" : null].filter(Boolean).join(" · ")}
            </span>
          </figcaption>
        </figure>
      )}
    </dialog>
  );
}
