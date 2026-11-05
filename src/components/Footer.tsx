import { company, nav } from "@/lib/content";
import { Logo } from "./Logo";

function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.75" fill="currentColor" stroke="none" />
    </svg>
  );
}

function FacebookIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} {...props}>
      <path d="M14 8h3V4h-3a4 4 0 0 0-4 4v3H7v4h3v6h4v-6h3l1-4h-4V8.5a.5.5 0 0 1 .5-.5Z" strokeLinejoin="round" />
    </svg>
  );
}

const socials = [
  { label: "Instagram", href: company.social.instagram, Icon: InstagramIcon },
  { label: "Facebook", href: company.social.facebook, Icon: FacebookIcon },
];

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-seam bg-espresso pb-28 pt-16 sm:pb-12">
      <div className="mx-auto grid max-w-[1440px] gap-12 px-4 sm:px-8 md:grid-cols-2 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <Logo />
          <p className="mt-5 max-w-[36ch] leading-relaxed text-sand">
            Blaty i meble z litego drewna na wymiar. Dąb, jesion, orzech i gatunki egzotyczne.
          </p>
        </div>

        <nav aria-label="Stopka" className="lg:col-span-2 lg:col-start-6">
          <h2 className="font-display text-sm font-medium text-dust">Strona</h2>
          <ul className="mt-2">
            {nav.map((n) => (
              <li key={n.href}>
                <a href={n.href} className="inline-flex min-h-11 items-center text-sand transition-colors hover:text-brass">
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="lg:col-span-3">
          <h2 className="font-display text-sm font-medium text-dust">Godziny pracy warsztatu</h2>
          <dl className="mt-4 grid grid-cols-[auto_1fr] gap-x-6 gap-y-2 text-sand">
            {company.hours.map((h) => (
              <div key={h.days} className="contents">
                <dt>{h.days}</dt>
                <dd className="tabular-nums text-cream">{h.time}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="lg:col-span-2">
          <h2 className="font-display text-sm font-medium text-dust">Obserwuj nas</h2>
          <ul className="mt-4 flex gap-2">
            {socials.map(({ label, href, Icon }) => (
              <li key={label}>
                {href ? (
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="flex size-11 items-center justify-center border border-seam text-sand transition-colors hover:border-brass hover:text-brass"
                  >
                    <Icon className="size-5" aria-hidden />
                  </a>
                ) : (
                  <span
                    title={`${label}: link wkrótce`}
                    className="flex size-11 items-center justify-center border border-seam/60 text-dust/60"
                  >
                    <Icon className="size-5" aria-hidden />
                    <span className="sr-only">{label} (wkrótce)</span>
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-14 flex max-w-[1440px] flex-col gap-2 border-t border-seam px-4 pt-6 text-sm text-dust sm:flex-row sm:justify-between sm:px-8">
        <p>
          © {year} {company.legalName} · NIP {company.nip}
        </p>
        <p>{company.brand} — {company.tagline}</p>
      </div>
    </footer>
  );
}
