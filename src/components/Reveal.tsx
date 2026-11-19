"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

// Content stays fully opaque (keeps text contrast intact); motion only adds a short settle as it enters.
export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      data-reveal
      className={className}
      initial={{ y: 18 }}
      whileInView={{ y: 0 }}
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function SectionHeading({
  id,
  title,
  lead,
  className = "",
}: {
  id?: string;
  title: string;
  lead?: string;
  className?: string;
}) {
  return (
    <div className={className}>
      <h2
        id={id}
        className="font-display text-[clamp(2rem,5.5vw,3.75rem)] font-semibold leading-[1.02] tracking-[-0.03em] text-cream"
      >
        {title}
      </h2>
      <div aria-hidden className="tick-rule mt-5 w-40" />
      {lead && <p className="mt-4 max-w-[58ch] leading-relaxed text-sand sm:mt-5 sm:text-lg">{lead}</p>}
    </div>
  );
}
