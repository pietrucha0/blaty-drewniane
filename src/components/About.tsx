import Image from "next/image";
import { Droplets, Handshake, Ruler, Trees } from "lucide-react";
import { reasons } from "@/lib/content";
import { Reveal, SectionHeading } from "./Reveal";

const icons = { trees: Trees, ruler: Ruler, droplets: Droplets, handshake: Handshake };

export function About() {
  return (
    <section id="o-nas" aria-labelledby="o-nas-title" className="bg-espresso py-24 sm:py-32">
      <div className="mx-auto grid max-w-[1440px] gap-14 px-4 sm:px-8 lg:grid-cols-12 lg:gap-10">
        <Reveal className="lg:col-span-5">
          <figure className="relative aspect-[4/5] overflow-hidden lg:sticky lg:top-28">
            <Image
              src="/images/stock/warsztat-olowek.webp"
              alt="Stolarz zaznacza ołówkiem linię cięcia na desce"
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
            <figcaption className="absolute bottom-0 left-0 bg-espresso/85 px-3 py-1.5 text-xs text-dust">
              Zdjęcie poglądowe
            </figcaption>
          </figure>
        </Reveal>

        <div className="lg:col-span-6 lg:col-start-7">
          <Reveal>
            <SectionHeading
              id="o-nas-title"
              title="Dlaczego my?"
              lead="Jesteśmy małym warsztatem, w którym drewno wybiera się deska po desce. Nie mamy katalogu gotowych wymiarów: każdy blat i każdy mebel powstaje pod konkretne wnętrze, z jednego gatunku i z myślą o latach codziennego używania."
            />
          </Reveal>

          <Reveal delay={0.1}>
            <ul className="mt-14 border-t border-seam">
              {reasons.map((r) => {
                const Icon = icons[r.icon];
                return (
                  <li
                    key={r.title}
                    className="grid grid-cols-[2.5rem_1fr] gap-x-4 border-b border-seam py-7 sm:grid-cols-[3rem_1fr]"
                  >
                    <Icon className="mt-1 size-6 text-brass" strokeWidth={1.5} aria-hidden />
                    <div>
                      <h3 className="font-display text-xl font-medium text-cream sm:text-2xl">{r.title}</h3>
                      <p className="mt-2 max-w-[60ch] leading-relaxed text-sand">{r.body}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
