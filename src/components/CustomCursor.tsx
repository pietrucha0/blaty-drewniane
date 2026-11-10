"use client";

import { useEffect, useRef, useState } from "react";

type Kind = "wood" | "look" | null;

/**
 * Two small, local cursors, mouse only:
 * - over a species swatch ([data-cursor="wood"]) a round slice of that swatch's wood,
 * - over a zoomable photo ([data-cursor="look"]) a small cream "Zobacz" disc.
 * Everywhere else the system cursor is untouched. Touch devices never see either.
 */
export function CustomCursor() {
  const ref = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);
  const [kind, setKind] = useState<Kind>(null);
  const [wood, setWood] = useState<string | null>(null);

  useEffect(() => {
    const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
    const sync = () => setEnabled(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (!enabled) {
      root.classList.remove("has-custom-cursor");
      return;
    }
    root.classList.add("has-custom-cursor");

    let x = -100;
    let y = -100;
    let frame = 0;

    const resolve = (target: Element | null) => {
      // Never draw over the open lightbox or the phone menu
      if (document.querySelector("dialog[open], #mobile-menu")) {
        setKind(null);
        return;
      }
      const el = target?.closest<HTMLElement>("[data-cursor]");
      const k = (el?.dataset.cursor as Kind) ?? null;
      setKind(k);
      if (k === "wood") setWood(el?.dataset.wood ?? null);
    };

    const paint = () => {
      frame = 0;
      if (ref.current) ref.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    };

    const onMove = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      x = e.clientX;
      y = e.clientY;
      resolve(e.target as Element);
      if (!frame) frame = requestAnimationFrame(paint);
    };
    // Content can slide under a still mouse while the page scrolls
    const onScroll = () => resolve(document.elementFromPoint(x, y));
    const onLeave = () => setKind(null);

    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });
    document.documentElement.addEventListener("pointerleave", onLeave);
    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("scroll", onScroll);
      document.documentElement.removeEventListener("pointerleave", onLeave);
      if (frame) cancelAnimationFrame(frame);
      root.classList.remove("has-custom-cursor");
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div ref={ref} aria-hidden className="pointer-events-none fixed left-0 top-0 z-[60]">
      <div
        className={`flex size-[30px] -translate-x-1/2 -translate-y-1/2 rounded-full shadow-[0_0_0_1.5px_var(--color-cream),0_4px_12px_rgba(0,0,0,0.55)] transition-[opacity,transform] duration-300 ease-out-expo motion-reduce:transition-none ${
          kind === "wood" ? "scale-100 opacity-100" : "scale-50 opacity-0"
        }`}
        style={{
          backgroundImage: wood ? `url(${wood})` : undefined,
          backgroundSize: "420%",
          backgroundPosition: "58% 50%",
        }}
      />
      <div
        className={`absolute left-0 top-0 flex size-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-cream text-[0.75rem] font-semibold text-espresso shadow-[0_6px_18px_rgba(0,0,0,0.4)] transition-[opacity,transform] duration-300 ease-out-expo motion-reduce:transition-none ${
          kind === "look" ? "scale-100 opacity-100" : "scale-50 opacity-0"
        }`}
      >
        Zobacz
      </div>
    </div>
  );
}
