"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

// Content is visible by default; motion only adds a short settle as it enters.
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
      className={className}
      initial={{ opacity: 0.6, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
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
      {lead && <p className="mt-5 max-w-[58ch] text-lg leading-relaxed text-sand">{lead}</p>}
    </div>
  );
}
