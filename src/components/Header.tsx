"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, Phone, X, ArrowRight } from "lucide-react";
import { Logo } from "./Logo";
import { company, nav } from "@/lib/content";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      {/* Floating bar: inset from the edges and capped in width, like a board laid over the page */}
      <header className="pointer-events-none fixed inset-x-0 top-0 z-40 px-[max(0.75rem,env(safe-area-inset-left))] pt-3 sm:px-6 sm:pt-4">
        <div
          className={`pointer-events-auto mx-auto flex h-14 max-w-[1180px] items-center justify-between gap-6 border pl-2 pr-1.5 backdrop-blur-md transition-[background-color,border-color,box-shadow] duration-500 sm:h-16 sm:pl-2.5 sm:pr-2 ${
            scrolled
              ? "border-seam bg-espresso/85 shadow-[0_10px_30px_-12px_rgba(0,0,0,0.7)]"
              : "border-cream/10 bg-espresso/45"
          }`}
        >
          <a href="#top" aria-label="BlatyDrewniane.eu — strona główna" className="shrink-0">
            <Logo />
          </a>

          <nav aria-label="Główna nawigacja" className="hidden lg:block">
            <ul className="flex items-center gap-7">
              {nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="inline-flex min-h-11 items-center text-[0.95rem] text-sand transition-colors hover:text-brass"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={company.phones[0].href}
              className="hidden min-h-11 items-center gap-2 px-3 text-sm tabular-nums text-cream transition-colors hover:text-brass md:inline-flex"
            >
              <Phone className="size-4" aria-hidden />
              {company.phones[0].display}
            </a>
            <a
              href="#kontakt"
              className="hidden h-11 items-center bg-brass px-5 text-sm font-semibold text-espresso transition-colors hover:bg-cream sm:inline-flex"
            >
              Wycena projektu
            </a>
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Otwórz menu"
              aria-expanded={open}
              aria-controls="mobile-menu"
              className="inline-flex size-11 items-center justify-center text-cream lg:hidden"
            >
              <Menu className="size-6" aria-hidden />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-50 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <button
              type="button"
              aria-label="Zamknij menu"
              className="absolute inset-0 bg-espresso/70 backdrop-blur-sm"
              onClick={() => setOpen(false)}
            />
            <motion.div
              id="mobile-menu"
              role="dialog"
              aria-modal="true"
              aria-label="Menu"
              className="absolute inset-y-0 right-0 flex w-[min(88vw,380px)] flex-col border-l border-seam bg-umber"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex h-16 items-center justify-between px-4">
                <span className="font-display text-sm text-dust">Menu</span>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label="Zamknij menu"
                  className="inline-flex size-11 items-center justify-center text-cream"
                  autoFocus
                >
                  <X className="size-6" aria-hidden />
                </button>
              </div>

              <nav aria-label="Nawigacja mobilna" className="flex-1 overflow-y-auto px-4">
                <ul className="border-t border-seam">
                  {nav.map((item, i) => (
                    <motion.li
                      key={item.href}
                      className="border-b border-seam"
                      initial={{ opacity: 0, x: 24 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.08 + i * 0.04, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <a
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className="flex items-center justify-between py-5 font-display text-2xl text-cream active:text-brass"
                      >
                        {item.label}
                        <ArrowRight className="size-5 text-seam" aria-hidden />
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </nav>

              <div className="space-y-3 border-t border-seam p-4 pb-[max(1rem,env(safe-area-inset-bottom))]">
                <a
                  href={company.phones[0].href}
                  className="flex items-center justify-center gap-2 border border-seam py-4 text-cream"
                >
                  <Phone className="size-4" aria-hidden />
                  Zadzwoń: {company.phones[0].display}
                </a>
                <a
                  href="#kontakt"
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-center bg-brass py-4 font-semibold text-espresso"
                >
                  Wycena projektu
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
