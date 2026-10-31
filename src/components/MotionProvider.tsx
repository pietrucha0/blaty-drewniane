"use client";

import { MotionConfig } from "framer-motion";
import type { ReactNode } from "react";

// Honors the visitor's reduced-motion setting without a server/client render mismatch.
export function MotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
