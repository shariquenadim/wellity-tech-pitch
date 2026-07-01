"use client";

import { motion, useReducedMotion } from "framer-motion";

export default function PresentationBackground() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
      <svg
        className="absolute inset-0 h-full w-full opacity-[0.05]"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <defs>
          <pattern id="presentation-grid" width="4" height="4" patternUnits="userSpaceOnUse">
            <path d="M 4 0 L 0 0 0 4" fill="none" stroke="var(--paper)" strokeWidth="0.08" />
          </pattern>
        </defs>
        <rect width="100" height="100" fill="url(#presentation-grid)" />
      </svg>

      <motion.div
        className="absolute -left-[10%] -top-[15%] h-[55vw] w-[55vw] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(72,169,220,0.16) 0%, rgba(72,169,220,0) 70%)",
        }}
        animate={
          shouldReduceMotion
            ? {}
            : { x: [0, 40, 0], y: [0, 24, 0] }
        }
        transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute -bottom-[20%] -right-[10%] h-[60vw] w-[60vw] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(232,131,58,0.10) 0%, rgba(232,131,58,0) 70%)",
        }}
        animate={
          shouldReduceMotion
            ? {}
            : { x: [0, -30, 0], y: [0, -20, 0] }
        }
        transition={{ duration: 32, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute right-[8%] top-[10%] h-[30vw] w-[30vw] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(0,119,182,0.12) 0%, rgba(0,119,182,0) 70%)",
        }}
        animate={
          shouldReduceMotion
            ? {}
            : { x: [0, -18, 0], y: [0, 22, 0] }
        }
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
