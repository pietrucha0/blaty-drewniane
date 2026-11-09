"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, Phone, X } from "lucide-react";
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
      <header
        className={`fixed inset-x-0 top-0 z-40 transition-colors duration-500 ${
          scrolled
            ? "border-b border-seam/70 bg-espresso/80 backdrop-blur-md"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-16 max-w-[1440px] items-center justify-between gap-6 px-[max(1.25rem,env(safe-area-inset-left))] sm:h-20 sm:px-[max(2.5rem,env(safe-area-inset-left))] lg:px-14">
          <a href="#top" aria-label="BlatyDrewniane.eu — strona główna" className="shrink-0">
            <Logo />
          </a>

          <nav aria-label="Główna nawigacja" className="hidden lg:block">
            <ul className="flex items-center gap-8">
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
              className="hidden min-h-11 items-center gap-2 px-3 text-sm text-cream transition-colors hover:text-brass md:inline-flex"
            >
              <Phone className="size-4" aria-hidden />
              {company.phones[0].display}
            </a>
            <a
              href="#kontakt"
              className="btn btn-primary hidden px-5 py-3 text-sm font-semibold sm:inline-flex"
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
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Menu"
            className="fixed inset-0 z-50 flex flex-col bg-espresso lg:hidden"
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Same row as the header, so the close button sits where the menu button was */}
            <div className="flex h-16 shrink-0 items-center justify-between px-[max(1.25rem,env(safe-area-inset-left))] sm:h-20 sm:px-10">
              <a href="#top" onClick={() => setOpen(false)} aria-label="BlatyDrewniane.eu — strona główna">
                <Logo />
              </a>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Zamknij menu"
                className="-mr-2 inline-flex size-11 items-center justify-center text-cream"
                autoFocus
              >
                <X className="size-6" strokeWidth={1.5} aria-hidden />
              </button>
            </div>

            <nav aria-label="Nawigacja mobilna" className="flex flex-1 flex-col justify-center overflow-y-auto px-[max(1.25rem,env(safe-area-inset-left))] sm:px-10">
              <ul className="space-y-1">
                {nav.map((item, i) => (
                  <motion.li
                    key={item.href}
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15 + i * 0.05, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <a
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="inline-block py-1.5 font-display text-[clamp(2rem,6.5svh,2.6rem)] font-medium leading-[1.1] tracking-[-0.03em] text-cream transition-colors active:text-brass"
                    >
                      {item.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </nav>

            <motion.div
              className="shrink-0 px-[max(1.25rem,env(safe-area-inset-left))] pb-[max(1.25rem,env(safe-area-inset-bottom))] sm:px-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.45, duration: 0.5 }}
            >
              <div aria-hidden className="tick-rule w-40" />
              <div className="mt-6 flex items-end justify-between gap-4">
                <div>
                  <p className="text-sm text-dust">Zadzwoń</p>
                  <a href={company.phones[0].href} className="mt-1 block font-display text-2xl font-medium tabular-nums text-cream">
                    {company.phones[0].display}
                  </a>
                </div>
                <a href={`mailto:${company.email}`} className="pb-1 text-sm text-sand underline decoration-seam underline-offset-4">
                  E-mail
                </a>
              </div>
              <a
                href="#kontakt"
                onClick={() => setOpen(false)}
                className="btn btn-primary mt-6 flex h-12 items-center justify-center font-semibold"
              >
                Wycena projektu
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
