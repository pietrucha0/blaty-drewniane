import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Gallery } from "@/components/Gallery";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { MobileBar } from "@/components/MobileBar";
import { Offer } from "@/components/Offer";
import { Process } from "@/components/Process";
import { SpeciesSampler } from "@/components/SpeciesSampler";

export default function Home() {
  return (
    <>
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
    </>
  );
}
