import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Gallery } from "@/components/Gallery";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { MobileBar } from "@/components/MobileBar";
import { CustomCursor } from "@/components/CustomCursor";
import { Lightbox } from "@/components/Lightbox";
import { Offer } from "@/components/Offer";
import { Process } from "@/components/Process";
import { SpeciesSampler } from "@/components/SpeciesSampler";
import { company, siteUrl } from "@/lib/content";

// Structured data so search engines can show the business (address, phone, hours).
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FurnitureStore",
  "@id": `${siteUrl}/#firma`,
  name: company.brand,
  legalName: company.legalName,
  url: `${siteUrl}/`,
  image: `${siteUrl}/opengraph-image.jpg`,
  description:
    "Blaty z litego drewna, kuchnie, szafy, zabudowy i meble na wymiar. Własny warsztat, realizacje w całej Polsce.",
  email: company.email,
  telephone: company.phones.map((p) => p.href.replace("tel:", "")),
  taxID: company.nip,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Osipy Kolonia 33",
    postalCode: "18-200",
    addressLocality: "Wysokie Mazowieckie",
    addressCountry: "PL",
  },
  areaServed: { "@type": "Country", name: "Polska" },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "16:00",
    },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "10:00", closes: "14:00" },
  ],
  ...(company.mapsUrl ? { hasMap: company.mapsUrl } : {}),
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <a
        href="#main"
        className="sr-only z-50 bg-brass px-4 py-2 font-semibold text-espresso focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Przejdź do treści
      </a>
      <Header />
      <main id="main">
        <Hero />
        <About />
        <Offer />
        <SpeciesSampler />
        <Gallery />
        <Process />
        <Contact />
      </main>
      <Footer />
      <MobileBar />
      <Lightbox />
      <CustomCursor />
    </>
  );
}
