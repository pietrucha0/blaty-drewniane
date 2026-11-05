"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { species } from "@/lib/content";
import heroImg from "../../public/images/stock/hero-krawedz.webp";
import { selectSpecies, swatchStyle } from "./Swatch";

const ease = [0.16, 1, 0.3, 1] as const;

export function Hero() {
  const rise = (delay: number) => ({
    initial: { opacity: 0.35, y: 18 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.9, delay, ease },
  });

  return (
    <section id="top" className="relative isolate flex min-h-[100svh] flex-col overflow-hidden">
      {/* Mobile: the solid edge owns the top of the screen; desktop: full-bleed behind the copy */}
      <div className="absolute inset-x-0 top-0 -z-20 h-[34svh] lg:inset-0 lg:h-auto">
        <Image
          src={heroImg}
          placeholder="blur"
          alt="Gruba krawędź blatu z litego drewna w ciepłym, bocznym świetle"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[70%_72%] lg:object-[80%_55%]"
        />
        <span className="absolute right-0 top-16 bg-espresso/80 px-2 py-1 text-[0.7rem] text-dust sm:top-20 lg:bottom-0 lg:top-auto">
          Zdjęcie poglądowe
        </span>
      </div>
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 -z-10 h-[34svh] bg-[linear-gradient(180deg,rgba(22,17,14,0.6)_0%,rgba(22,17,14,0)_22%,rgba(22,17,14,0)_55%,#16110e_100%)] lg:inset-0 lg:h-auto lg:bg-[linear-gradient(90deg,#16110e_0%,rgba(22,17,14,0.92)_38%,rgba(22,17,14,0.25)_72%,rgba(22,17,14,0.55)_100%)]"
      />

      <div className="mx-auto grid w-full max-w-[1440px] flex-1 grid-cols-[minmax(0,1fr)] content-end gap-6 px-4 pb-6 pt-[27svh] [@media(max-height:500px)]:pt-20 sm:px-8 lg:grid-cols-12 lg:content-center lg:items-center lg:pb-20 lg:pt-32">
        <div className="lg:col-span-7">
          <motion.h1
            {...rise(0.05)}
            className="max-w-[14ch] font-display lg:max-w-none lg:[text-wrap:wrap] text-[clamp(2.25rem,min(9vw,12svh),5.75rem)] lg:text-[clamp(3.5rem,min(6.4vw,11svh),5.75rem)] font-semibold leading-[0.98] tracking-[-0.035em] text-cream"
          >
            Meble z{"\u00a0"}litego drewna, które zostają na{"\u00a0"}pokolenia
          </motion.h1>
          <motion.p
            {...rise(0.18)}
            className="mt-4 max-w-[52ch] text-[1.05rem] [@media(max-height:500px)]:mt-2 [@media(max-height:500px)]:max-w-[72ch] [@media(max-height:500px)]:text-base leading-relaxed text-sand sm:text-lg"
          >
            Blaty, stoły i meble na wymiar. Z litego drewna, obrabiane ręcznie w naszym warsztacie.
          </motion.p>

          <motion.div {...rise(0.3)} className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row [@media(max-height:500px)]:mt-4">
            <a
              href="#realizacje"
              className="group inline-flex items-center justify-center gap-2 bg-brass px-6 py-3.5 font-semibold text-espresso transition-colors hover:bg-cream sm:py-4"
            >
              Zobacz nasze realizacje
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden />
            </a>
            <a
              href="#kontakt"
              className="hidden items-center justify-center border border-cream/40 sm:inline-flex px-6 py-3.5 font-semibold sm:py-4 text-cream transition-colors hover:border-brass hover:text-brass"
            >
              Darmowa wycena
            </a>
          </motion.div>

          <motion.ul
            {...rise(0.42)}
            className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-sm text-sand sm:mt-8"
            aria-label="Najważniejsze cechy"
          >
            {["100% lite drewno", "Polska produkcja", "Meble na wymiar"].map((b) => (
              <li key={b} className="flex items-center gap-2">
                <span aria-hidden className="h-px w-4 bg-brass" />
                {b}
              </li>
            ))}
          </motion.ul>
        </div>

        {/* Sample rack: real species boards from the workshop */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5, ease }}
          className="hidden lg:col-span-4 lg:col-start-9 lg:block"
        >
          <p className="mb-3 text-sm text-dust">Gatunki w warsztacie</p>
          <ul className="space-y-2">
            {species.map((s) => (
              <li key={s.id}>
                <a
                  href="#gatunki"
                  onClick={() => selectSpecies(s.id)}
                  className="group relative flex h-16 items-end overflow-hidden shadow-[0_6px_18px_rgba(0,0,0,0.45)] transition-transform duration-500 ease-out-expo hover:-translate-x-3"
                  style={swatchStyle(s.image)}
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-espresso/75 via-espresso/10 to-transparent" />
                  <span className="relative flex w-full items-baseline justify-between px-4 pb-2.5">
                    <span className="font-display text-lg font-medium text-cream">{s.name}</span>
                    <ArrowRight className="size-4 text-cream opacity-0 transition-opacity group-hover:opacity-100" aria-hidden />
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>

      {/* Mobile species rail */}
      <div className="pb-28 sm:pb-10 lg:hidden" aria-label="Gatunki drewna">
        <ul className="rail flex snap-x gap-2 overflow-x-auto px-4 sm:px-8">
          {species.map((s) => (
            <li key={s.id} className="snap-start">
              <a
                href="#gatunki"
                onClick={() => selectSpecies(s.id)}
                className="relative flex h-12 w-32 items-end overflow-hidden"
                style={swatchStyle(s.image, 4)}
              >
                <span className="absolute inset-0 bg-gradient-to-t from-espresso/80 to-transparent" />
                <span className="relative px-2.5 pb-1.5 text-sm font-medium text-cream">{s.name}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
