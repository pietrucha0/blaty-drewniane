import { About } from "@/components/About";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Offer } from "@/components/Offer";
import { SpeciesSampler } from "@/components/SpeciesSampler";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <About />
        <Offer />
        <SpeciesSampler />
      </main>
    </>
  );
}
