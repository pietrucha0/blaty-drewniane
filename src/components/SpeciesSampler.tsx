"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { otherSpecies, species } from "@/lib/content";
import { Reveal, SectionHeading } from "./Reveal";
import { swatchStyle } from "./Swatch";

function Scale({ label, value, low, high }: { label: string; value: number; low: string; high: string }) {
  return (
    <div>
      <dt className="text-sm text-dust">{label}</dt>
      <dd className="mt-2">
        <div className="flex gap-1" role="img" aria-label={`${label}: ${value} z 5`}>
          {[1, 2, 3, 4, 5].map((n) => (
            <span
              key={n}
              className={`h-2 flex-1 transition-colors duration-500 ${n <= value ? "bg-brass" : "bg-seam"}`}
            />
          ))}
        </div>
        <div className="mt-1.5 flex justify-between text-xs text-dust">
          <span>{low}</span>
          <span>{high}</span>
        </div>
      </dd>
    </div>
  );
}

export function SpeciesSampler() {
  const [activeId, setActiveId] = useState(species[0].id);
  const active = species.find((s) => s.id === activeId) ?? species[0];

  useEffect(() => {
    const onSelect = (e: Event) => {
      const id = (e as CustomEvent<string>).detail;
      if (species.some((s) => s.id === id)) setActiveId(id);
    };
    window.addEventListener("select-species", onSelect);
    return () => window.removeEventListener("select-species", onSelect);
  }, []);

  return (
    <section id="gatunki" aria-labelledby="gatunki-title" className="bg-espresso py-16 sm:py-32">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-8">
        <Reveal>
          <SectionHeading
            id="gatunki-title"
            title="Wybierz gatunek drewna"
            lead="Prawdziwe próbki z warsztatu. Wybierz gatunek, żeby porównać."
          />
        </Reveal>

        <div className="mt-12 grid grid-cols-[minmax(0,1fr)] gap-8 lg:grid-cols-12 lg:gap-12">
          {/* Picker */}
          <div className="min-w-0 lg:col-span-3" role="tablist" aria-label="Gatunki drewna" aria-orientation="vertical">
            <div className="rail -mx-4 flex gap-2 overflow-x-auto px-4 py-1 sm:mx-0 sm:px-0 lg:flex-col lg:overflow-visible lg:py-0">
              {species.map((s) => {
                const selected = s.id === activeId;
                return (
                  <button
                    key={s.id}
                    role="tab"
                    id={`tab-${s.id}`}
                    aria-selected={selected}
                    aria-controls="species-panel"
                    onClick={() => setActiveId(s.id)}
                    className={`group relative flex h-14 w-36 shrink-0 items-end overflow-hidden text-left transition-[transform,box-shadow] duration-500 ease-out-expo lg:w-full ${
                      selected
                        ? "shadow-[inset_0_0_0_2px_var(--color-brass)] lg:translate-x-3 lg:shadow-[inset_0_0_0_2px_var(--color-brass),0_8px_20px_rgba(0,0,0,0.5)]"
                        : "opacity-80 hover:opacity-100"
                    }`}
                    style={swatchStyle(s.image, 3.6)}
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-espresso/80 to-espresso/0" />
                    <span className="relative px-3 pb-2 font-display font-medium text-cream">{s.name}</span>
                  </button>
                );
              })}
            </div>
            <p className="mt-5 text-sm leading-relaxed text-dust">
              Pracujemy też z: {otherSpecies.join(", ")}.
            </p>
          </div>

          {/* Panel */}
          <div
            id="species-panel"
            role="tabpanel"
            aria-labelledby={`tab-${active.id}`}
            className="grid gap-8 lg:col-span-9 lg:grid-cols-9"
          >
            <div className="relative aspect-[4/3] overflow-hidden bg-board lg:col-span-5">
              <AnimatePresence initial={false}>
                <motion.div
                  key={active.id}
                  className="absolute inset-0"
                  initial={{ clipPath: "inset(0 100% 0 0)" }}
                  animate={{ clipPath: "inset(0 0% 0 0)" }}
                  exit={{ opacity: 1 }}
                  transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Image
                    src={active.image}
                    placeholder="blur"
                    alt={`Próbka drewna: ${active.name}`}
                    fill
                    sizes="(min-width: 1024px) 40vw, 100vw"
                    className="object-cover"
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="lg:col-span-4">
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={active.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                >
                  <h3 className="font-display text-4xl font-semibold tracking-[-0.03em] text-cream sm:text-5xl">
                    {active.name}
                  </h3>
                  <p className="mt-2 text-brass">{active.origin}</p>
                  <p className="mt-6 leading-relaxed text-sand">{active.character}</p>
                  <dl className="mt-8 space-y-6">
                    <Scale label="Twardość" value={active.hardness} low="miękkie" high="bardzo twarde" />
                    <Scale label="Odcień" value={active.tone} low="jasny" high="ciemny" />
                    <div className="hidden sm:block">
                      <dt className="text-sm text-dust">Najczęściej na</dt>
                      <dd className="mt-1 text-cream">{active.use}</dd>
                    </div>
                  </dl>
                  <a
                    href="#kontakt"
                    className="group mt-6 inline-flex min-h-11 items-center font-semibold text-brass transition-colors hover:text-cream"
                  >
                    <span className="border-b border-brass pb-1 transition-colors group-hover:border-cream">Zapytaj o ten gatunek</span>
                  </a>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
