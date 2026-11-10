"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Hammer, Images, LayoutGrid, Menu, MessageCircle, Phone, TreeDeciduous, X } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Logo } from "./Logo";
import { company, nav } from "@/lib/content";

// One quiet line icon per section in the phone menu
const navIcons: Record<string, LucideIcon> = {
  "#o-nas": TreeDeciduous,
  "#oferta": LayoutGrid,
  "#realizacje": Images,
  "#proces": Hammer,
  "#kontakt": MessageCircle,
};

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
            className="fixed inset-0 z-50 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* The page stays visible, dimmed, below the panel */}
            <button
              type="button"
              aria-label="Zamknij menu"
              tabIndex={-1}
              className="absolute inset-0 bg-espresso/60 backdrop-blur-sm"
              onClick={() => setOpen(false)}
            />

            <motion.div
              id="mobile-menu"
              role="dialog"
              aria-modal="true"
              aria-label="Menu"
              className="absolute inset-x-0 top-0 max-h-[100svh] overflow-y-auto border-b border-seam bg-umber shadow-[0_24px_60px_-20px_rgba(0,0,0,0.8)]"
              initial={{ clipPath: "inset(0 0 100% 0)" }}
              animate={{ clipPath: "inset(0 0 0% 0)" }}
              exit={{ clipPath: "inset(0 0 100% 0)" }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Same row as the header, so the close button sits where the menu button was */}
              <div className="flex h-16 items-center justify-between px-[max(1.25rem,env(safe-area-inset-left))] sm:h-20 sm:px-10">
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

              <nav aria-label="Nawigacja mobilna" className="px-[max(1.25rem,env(safe-area-inset-left))] pb-2 pt-2 sm:px-10">
                <ul>
                  {nav.map((item, i) => {
                    const Icon = navIcons[item.href] ?? LayoutGrid;
                    return (
                      <motion.li
                        key={item.href}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.12 + i * 0.04, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                      >
                        <a
                          href={item.href}
                          onClick={() => setOpen(false)}
                          className="group flex items-center gap-4 py-2.5 text-cream transition-colors active:text-brass"
                        >
                          <span className="flex size-10 shrink-0 items-center justify-center border border-seam text-brass transition-colors group-active:border-brass">
                            <Icon className="size-[18px]" strokeWidth={1.5} aria-hidden />
                          </span>
                          <span className="font-display text-[1.375rem] font-medium tracking-[-0.02em]">{item.label}</span>
                        </a>
                      </motion.li>
                    );
                  })}
                </ul>
              </nav>

              <motion.div
                className="border-t border-seam px-[max(1.25rem,env(safe-area-inset-left))] pb-[max(1.25rem,env(safe-area-inset-bottom))] pt-5 sm:px-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.35, duration: 0.4 }}
              >
                <div className="grid grid-cols-2 gap-2">
                  <a
                    href={company.phones[0].href}
                    className="btn btn-outline btn-noarrow flex h-12 items-center justify-center text-sm font-semibold"
                  >
                    <Phone className="size-4" aria-hidden />
                    Zadzwoń
                  </a>
                  <a
                    href="#kontakt"
                    onClick={() => setOpen(false)}
                    className="btn btn-primary btn-noarrow flex h-12 items-center justify-center text-sm font-semibold"
                  >
                    Wycena projektu
                  </a>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
