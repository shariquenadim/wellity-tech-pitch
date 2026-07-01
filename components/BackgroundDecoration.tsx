"use client";

import { motion, useReducedMotion } from "framer-motion";

export default function BackgroundDecoration() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      aria-hidden="true"
    >
      <svg
        className="absolute inset-0 h-full w-full opacity-[0.035]"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <defs>
          <pattern id="site-grid" width="3.2" height="3.2" patternUnits="userSpaceOnUse">
            <path d="M 3.2 0 L 0 0 0 3.2" fill="none" stroke="var(--ink)" strokeWidth="0.06" />
          </pattern>
        </defs>
        <rect width="100" height="100" fill="url(#site-grid)" />
      </svg>

      <motion.div
        className="absolute -left-[15%] -top-[10%] h-[45vw] w-[45vw] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(0,119,182,0.06) 0%, rgba(0,119,182,0) 70%)",
        }}
        animate={shouldReduceMotion ? {} : { x: [0, 30, 0], y: [0, 18, 0] }}
        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute right-[-12%] top-[35%] h-[38vw] w-[38vw] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(232,131,58,0.05) 0%, rgba(232,131,58,0) 70%)",
        }}
        animate={shouldReduceMotion ? {} : { x: [0, -22, 0], y: [0, 16, 0] }}
        transition={{ duration: 34, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute bottom-[-15%] left-[20%] h-[42vw] w-[42vw] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(72,169,220,0.06) 0%, rgba(72,169,220,0) 70%)",
        }}
        animate={shouldReduceMotion ? {} : { x: [0, 20, 0], y: [0, -20, 0] }}
        transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
