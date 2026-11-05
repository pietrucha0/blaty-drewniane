"use client";

import { useEffect, useState } from "react";
import { Phone } from "lucide-react";
import { company } from "@/lib/content";

// Thumb-reach call/quote bar for phones. Steps aside while the contact form is on screen.
export function MobileBar() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const target = document.getElementById("kontakt");
    if (!target) return;
    const io = new IntersectionObserver(([e]) => setHidden(e.isIntersecting), { threshold: 0.15 });
    io.observe(target);
    return () => io.disconnect();
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-30 border-t border-seam bg-espresso/90 px-[max(0.75rem,env(safe-area-inset-left))] pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3 backdrop-blur-md transition-transform duration-500 ease-out-expo sm:hidden ${
        hidden ? "translate-y-full" : "translate-y-0"
      }`}
    >
      <div className="grid grid-cols-2 gap-2">
        <a
          href={company.phones[0].href}
          className="flex items-center justify-center gap-2 border border-cream/30 py-3.5 font-semibold text-cream active:bg-board"
        >
          <Phone className="size-4" aria-hidden />
          Zadzwoń teraz
        </a>
        <a href="#kontakt" className="flex items-center justify-center bg-brass py-3.5 font-semibold text-espresso active:bg-cream">
          Wycena projektu
        </a>
      </div>
    </div>
  );
}
