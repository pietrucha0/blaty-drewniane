import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { offers } from "@/lib/content";
import { Reveal, SectionHeading } from "./Reveal";
import { ZoomButton } from "./Lightbox";

export function Offer() {
  const [lead, ...rest] = offers;
  // Desktop: the first three sit beside the lead card, the rest share a row with the closing card.
  return (
    <section id="oferta" aria-labelledby="oferta-title" className="bg-umber py-24 sm:py-32">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-8">
        <Reveal>
          <SectionHeading
            id="oferta-title"
            title="Nasza oferta"
            lead="Kuchnie, zabudowy i meble na wymiar. Blaty z litego drewna to nasza specjalność."
          />
        </Reveal>

        <Reveal delay={0.05}>
        <div className="rail -mx-4 mt-10 flex snap-x snap-mandatory scroll-px-4 gap-3 overflow-x-auto px-4 pb-1 sm:mx-0 sm:mt-14 sm:grid sm:snap-none sm:gap-px sm:overflow-visible sm:bg-seam sm:px-0 sm:pb-0 lg:grid-cols-12">
          {/* Lead offer: countertops, the workshop's specialty */}
          <div className="w-[80%] shrink-0 snap-start bg-umber sm:w-auto lg:col-span-7 lg:row-span-3">
            <article className="group flex h-full flex-col">
              <div className="relative aspect-[4/5] overflow-hidden sm:aspect-[4/3] lg:aspect-auto lg:flex-1">
                <Image
                  src={lead.image}
                  placeholder="blur"
                  alt={lead.imageAlt}
                  fill
                  sizes="(min-width: 1024px) 58vw, 100vw"
                  className="object-cover transition-transform duration-[1.6s] ease-out-expo group-hover:scale-[1.04]"
                />
                <ZoomButton item={{ image: lead.image, alt: lead.imageAlt, title: lead.title, placeholder: lead.placeholder }} />
              </div>
              <div className="pt-4 sm:p-8 lg:pr-12">
                <h3 className="font-display text-xl font-semibold tracking-[-0.02em] text-cream sm:text-4xl">
                  {lead.title}
                </h3>
                <p className="mt-3 hidden max-w-[52ch] text-lg leading-relaxed text-sand sm:block">{lead.lead}</p>
                <Tags items={lead.items} />
              </div>
            </article>
          </div>

          {rest.map((o, i) => (
            <div key={o.title} className={`w-[80%] shrink-0 snap-start bg-umber sm:w-auto ${i < 3 ? "lg:col-span-5" : "lg:col-span-4"}`}>
              <article className="group grid h-full grid-cols-1 sm:grid-cols-[minmax(0,2fr)_minmax(0,3fr)]">
                <div className="relative aspect-[4/5] overflow-hidden sm:aspect-auto sm:min-h-56">
                  <Image
                    src={o.image}
                    placeholder="blur"
                    alt={o.imageAlt}
                    fill
                    sizes="(min-width: 1024px) 18vw, (min-width: 640px) 40vw, 100vw"
                    className="object-cover transition-transform duration-[1.6s] ease-out-expo group-hover:scale-[1.06]"
                  />
                  <ZoomButton item={{ image: o.image, alt: o.imageAlt, title: o.title, placeholder: o.placeholder }} />
                </div>
                <div className="pt-4 sm:p-6">
                  <h3 className="font-display text-xl font-semibold text-cream sm:text-2xl">{o.title}</h3>
                  <p className="mt-2 hidden leading-relaxed text-sand sm:block">{o.lead}</p>
                  <Tags items={o.items} />
                </div>
              </article>
            </div>
          ))}

          {/* Closing card: anything else, made to measure */}
          <div className="w-[80%] shrink-0 snap-start bg-board sm:w-auto lg:col-span-4">
            <a
              href="#kontakt"
              className="group flex aspect-[4/5] h-full w-full flex-col justify-between p-6 sm:aspect-auto sm:min-h-56 sm:p-8"
            >
              <span className="font-display text-sm font-medium uppercase tracking-[0.18em] text-brass">Na wymiar</span>
              <span>
                <span className="block font-display text-xl font-semibold leading-tight tracking-[-0.02em] text-cream sm:text-3xl">
                  Nie widzisz tu swojego mebla?
                </span>
                <span className="mt-3 block max-w-[40ch] leading-relaxed text-sand">
                  Zrobimy go na wymiar. Ławkę, parapet, półkę czy blat do biura: każdy mebel z litego drewna, dopasowany do Twojego wnętrza.
                </span>
                <span className="mt-6 inline-flex items-center gap-2 font-semibold text-brass transition-colors group-hover:text-cream">
                  Opisz swój projekt
                  <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden />
                </span>
              </span>
            </a>
          </div>
        </div>
        </Reveal>
        <p className="mt-6 text-sm text-dust sm:hidden">Przesuń, żeby zobaczyć więcej.</p>
      </div>
    </section>
  );
}

function Tags({ items }: { items: string[] }) {
  return (
    <ul className="mt-5 hidden flex-wrap gap-2 sm:flex">
      {items.map((t) => (
        <li key={t} className="border border-brass/35 px-2.5 py-1 text-sm text-brass">
          {t}
        </li>
      ))}
    </ul>
  );
}
