import { steps } from "@/lib/content";
import { Reveal, SectionHeading } from "./Reveal";

export function Process() {
  return (
    <section id="proces" aria-labelledby="proces-title" className="bg-espresso py-24 sm:py-32">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-8">
        <Reveal>
          <SectionHeading
            id="proces-title"
            title="Jak pracujemy"
            lead="Cztery kroki od rozmowy do gotowego blatu."
          />
        </Reveal>

        <Reveal delay={0.1}>
          <ol className="relative mt-16 grid gap-0 pl-5 lg:grid-cols-4 lg:gap-8 lg:pl-0">
            {steps.map((s, i) => (
              <li
                key={s.title}
                className="relative grid grid-cols-[3.5rem_1fr] border-l border-seam pb-9 pl-0 last:pb-0 sm:pb-12 lg:block lg:border-l-0 lg:border-t lg:pb-0 lg:pt-6"
              >
                <span className="relative -ml-px flex size-10 -translate-x-1/2 items-center justify-center bg-espresso font-display text-2xl font-semibold text-brass lg:ml-0 lg:size-auto lg:translate-x-0 lg:justify-start lg:pr-4">
                  {i + 1}
                </span>
                <div className="lg:mt-8">
                  <h3 className="font-display text-xl font-medium text-cream sm:text-2xl">{s.title}</h3>
                  <p className="mt-3 hidden max-w-[40ch] leading-relaxed text-sand sm:block">{s.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}
