import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { company } from "@/lib/content";
import { QuoteForm } from "./QuoteForm";
import { Reveal, SectionHeading } from "./Reveal";

export function Contact() {
  return (
    <section id="kontakt" aria-labelledby="kontakt-title" className="bg-umber py-24 sm:py-32">
      <div className="mx-auto grid max-w-[1440px] gap-14 px-4 sm:px-8 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-5">
          <Reveal>
            <SectionHeading
              id="kontakt-title"
              title="Skontaktuj się z nami"
              lead="Zadzwoń albo opisz projekt w formularzu. Wystarczą przybliżone wymiary i gatunek, który Ci się podoba — resztę ustalimy w rozmowie."
            />
          </Reveal>

          <Reveal delay={0.08}>
            <ul className="mt-12 border-t border-seam">
              {company.phones.map((p) => (
                <li key={p.href} className="border-b border-seam">
                  <a href={p.href} className="group flex items-center gap-4 py-5">
                    <Phone className="size-5 text-brass" strokeWidth={1.5} aria-hidden />
                    <span className="font-display text-2xl font-medium tabular-nums text-cream transition-colors group-hover:text-brass sm:text-3xl">
                      {p.display}
                    </span>
                  </a>
                </li>
              ))}
              {company.whatsapp && (
                <li className="border-b border-seam">
                  <a href={company.whatsapp} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 py-5">
                    <MessageCircle className="size-5 text-brass" strokeWidth={1.5} aria-hidden />
                    <span className="text-cream transition-colors group-hover:text-brass">Napisz na WhatsApp</span>
                  </a>
                </li>
              )}
              <li className="border-b border-seam">
                <a href={`mailto:${company.email}`} className="group flex items-center gap-4 py-5">
                  <Mail className="size-5 text-brass" strokeWidth={1.5} aria-hidden />
                  <span className="break-all text-cream transition-colors group-hover:text-brass">{company.email}</span>
                </a>
              </li>
              <li className="flex items-start gap-4 border-b border-seam py-5">
                <MapPin className="mt-0.5 size-5 shrink-0 text-brass" strokeWidth={1.5} aria-hidden />
                <span className="text-sand">
                  {company.address ?? "Warsztat odwiedzisz po wcześniejszym umówieniu — adres podamy telefonicznie."}
                </span>
              </li>
              <li className="flex items-start gap-4 py-5">
                <Clock className="mt-0.5 size-5 shrink-0 text-brass" strokeWidth={1.5} aria-hidden />
                <dl className="grid grid-cols-[auto_1fr] gap-x-6 gap-y-1 text-sand">
                  {company.hours.map((h) => (
                    <div key={h.days} className="contents">
                      <dt>{h.days}</dt>
                      <dd className="tabular-nums text-cream">{h.time}</dd>
                    </div>
                  ))}
                </dl>
              </li>
            </ul>
          </Reveal>
        </div>

        <Reveal delay={0.12} className="lg:col-span-6 lg:col-start-7 lg:pt-4">
          <h3 className="mb-5 font-display text-2xl font-semibold text-cream">Zapytanie o wycenę</h3>
          <QuoteForm />
        </Reveal>
      </div>
    </section>
  );
}
