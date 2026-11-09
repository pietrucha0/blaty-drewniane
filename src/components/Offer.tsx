import Image from "next/image";
import { offers } from "@/lib/content";
import { Reveal, SectionHeading } from "./Reveal";

export function Offer() {
  const [lead, ...rest] = offers;
  return (
    <section id="oferta" aria-labelledby="oferta-title" className="bg-umber py-24 sm:py-32">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-8">
        <Reveal>
          <SectionHeading
            id="oferta-title"
            title="Nasza oferta"
            lead="Blaty to nasza specjalność. Z tego samego drewna robimy też meble."
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
                {lead.placeholder && <Placeholder />}
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
            <div key={o.title} className="w-[80%] shrink-0 snap-start bg-umber sm:w-auto lg:col-span-5">
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
                  {o.placeholder && <Placeholder />}
                </div>
                <div className="pt-4 sm:p-6">
                  <h3 className="font-display text-xl font-semibold text-cream sm:text-2xl">{o.title}</h3>
                  <p className="mt-2 hidden leading-relaxed text-sand sm:block">{o.lead}</p>
                  <Tags items={o.items} />
                </div>
              </article>
            </div>
          ))}
        </div>
        </Reveal>
        <p className="mt-6 text-sm text-dust sm:hidden">Przesuń, żeby zobaczyć więcej. Część zdjęć jest poglądowa.</p>
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

function Placeholder() {
  return (
    <span className="absolute left-0 top-0 hidden bg-espresso/85 px-2.5 py-1 text-xs text-dust sm:block">
      Zdjęcie poglądowe
    </span>
  );
}
