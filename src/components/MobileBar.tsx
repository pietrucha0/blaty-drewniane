"use client";

import { useEffect, useState } from "react";
import { Phone } from "lucide-react";
import { company } from "@/lib/content";

// Slim thumb-reach call/quote bar for phones.
// Stays out of the way: hidden over the hero (it has its own CTA) and the contact
// section, tucks away while scrolling down, returns when the visitor scrolls up.
export function MobileBar() {
  const [pastHero, setPastHero] = useState(false);
  const [inContact, setInContact] = useState(false);
  const [scrollingDown, setScrollingDown] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("top");
    const contact = document.getElementById("kontakt");
    const observers: IntersectionObserver[] = [];
    if (hero) {
      const io = new IntersectionObserver(([e]) => setPastHero(!e.isIntersecting), { threshold: 0 });
      io.observe(hero);
      observers.push(io);
    }
    if (contact) {
      const io = new IntersectionObserver(([e]) => setInContact(e.isIntersecting), { threshold: 0.1 });
      io.observe(contact);
      observers.push(io);
    }

    let lastY = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      if (Math.abs(y - lastY) < 8) return;
      setScrollingDown(y > lastY);
      lastY = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      observers.forEach((o) => o.disconnect());
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const visible = pastHero && !inContact && !scrollingDown;

  return (
    <div
      aria-hidden={!visible}
      className={`fixed inset-x-0 bottom-0 z-30 border-t border-seam bg-espresso/90 px-[max(0.5rem,env(safe-area-inset-left))] pb-[max(0.5rem,env(safe-area-inset-bottom))] pt-2 backdrop-blur-md transition-transform duration-500 ease-out-expo sm:hidden ${
        visible ? "translate-y-0" : "pointer-events-none translate-y-full"
      }`}
    >
      <div className="grid grid-cols-[auto_1fr] gap-2">
        <a
          href={company.phones[0].href}
          tabIndex={visible ? 0 : -1}
          aria-label={`Zadzwoń: ${company.phones[0].display}`}
          className="btn btn-outline btn-noarrow flex h-11 items-center justify-center px-4 text-sm font-semibold"
        >
          <Phone className="size-4" aria-hidden />
          Zadzwoń
        </a>
        <a
          href="#kontakt"
          tabIndex={visible ? 0 : -1}
          className="btn btn-primary flex h-11 items-center justify-center text-sm font-semibold"
        >
          Wycena projektu
        </a>
      </div>
    </div>
  );
}
