"use client";

import Image from "next/image";
import { useState } from "react";
import { LayoutGroup, motion } from "framer-motion";
import { galleryFilters, projects, type GalleryCategory } from "@/lib/content";
import { Reveal, SectionHeading } from "./Reveal";

export function Gallery() {
  const [filter, setFilter] = useState<"all" | GalleryCategory>("all");
  const visible = projects.filter((p) => filter === "all" || p.category === filter);

  return (
    <section id="realizacje" aria-labelledby="realizacje-title" className="bg-umber py-16 sm:py-32">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-8">
        <div className="flex min-w-0 flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <Reveal>
            <SectionHeading
              id="realizacje-title"
              title="Wybrane realizacje"
              lead="Blaty, stoły i meble z naszego warsztatu."
            />
          </Reveal>

          <LayoutGroup id="filters">
            <div
              role="group"
              aria-label="Filtruj realizacje"
              className="rail -mx-4 flex gap-1 overflow-x-auto px-4 sm:mx-0 sm:px-0"
            >
              {galleryFilters.map((f) => {
                const selected = f.id === filter;
                return (
                  <button
                    key={f.id}
                    type="button"
                    aria-pressed={selected}
                    onClick={() => setFilter(f.id)}
                    className={`relative shrink-0 px-4 py-3 text-sm font-medium transition-colors ${
                      selected ? "text-espresso" : "text-sand hover:text-cream"
                    }`}
                  >
                    {selected && (
                      <motion.span
                        layoutId="filter-pill"
                        className="absolute inset-0 bg-brass"
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      />
                    )}
                    <span className="relative">{f.label}</span>
                  </button>
                );
              })}
            </div>
          </LayoutGroup>
        </div>

        <ul
          className="mt-12 grid grid-flow-dense auto-rows-[minmax(11rem,26vw)] grid-cols-2 gap-2 sm:auto-rows-[18rem] sm:gap-3 lg:grid-cols-3 lg:auto-rows-[20rem]"
        >
            {visible.map((p) => (
              <motion.li
                key={p.title}
                layout
                initial={{ opacity: 0.3, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className={`group relative overflow-hidden bg-board ${p.tall ? "lg:row-span-2" : ""}`}
              >
                <Image
                  src={p.image}
                  placeholder="blur"
                  alt={p.alt}
                  fill
                  sizes="(min-width: 1024px) 33vw, 50vw"
                  className={`object-cover transition-transform duration-[1.4s] ease-out-expo group-hover:scale-[1.06] ${p.placeholder ? "[filter:sepia(0.2)_saturate(0.85)_brightness(0.82)]" : ""}`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-espresso/90 via-espresso/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-3 sm:p-5">
                  <span className="inline-block bg-cream px-2 py-0.5 text-xs font-semibold text-[#5a2e24] shadow-[0_2px_6px_rgba(0,0,0,0.35)]">
                    {p.wood}
                  </span>
                  <h3 className="mt-2 font-display text-base font-medium leading-tight text-cream sm:text-xl">
                    {p.title}
                  </h3>
                </div>
                {p.placeholder && (
                  <span className="absolute right-0 top-0 bg-espresso/80 px-2 py-1 text-[0.7rem] text-dust">
                    Poglądowe
                  </span>
                )}
              </motion.li>
            ))}
        </ul>
      </div>
    </section>
  );
}
