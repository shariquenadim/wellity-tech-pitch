"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

interface Props {
  trigger?: boolean;
  className?: string;
}

const EASE = [0.22, 1, 0.36, 1] as const;

export default function SystemOverviewDiagram({ trigger, className = "" }: Props) {
  const ref = useRef<SVGSVGElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });
  const shouldReduceMotion = useReducedMotion();

  const shouldAnimate = shouldReduceMotion
    ? false
    : trigger !== undefined
    ? trigger
    : inView;

  const fadeIn = (delay: number) => ({
    initial: { opacity: 0 },
    animate: { opacity: shouldAnimate ? 1 : 0 },
    transition: { duration: 0.5, ease: EASE, delay },
  });

  return (
    <div className={`w-full overflow-x-auto ${className}`}>
      <svg
        ref={ref}
        viewBox="0 0 640 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full max-w-[640px] mx-auto"
        role="img"
        aria-label="System overview: Patient visits pharmacy hub, which connects live to a verified specialist doctor"
      >
        {/* ——— Patient node ——— */}
        <motion.g {...fadeIn(0)}>
          <circle cx="80" cy="110" r="36" fill="var(--brand-soft)" fillOpacity="0.12" stroke="var(--brand-soft)" strokeWidth="1.5" />
          <text x="80" y="107" textAnchor="middle" fill="var(--brand)" fontSize="9" fontFamily="var(--font-ibm-plex-mono), monospace" letterSpacing="0.08em" fontWeight="600">PATIENT</text>
          <text x="80" y="122" textAnchor="middle" fill="var(--muted)" fontSize="9" fontFamily="var(--font-ibm-plex-mono), monospace">walks in</text>
        </motion.g>

        {/* ——— Left connector (Patient → Pharmacy) ——— */}
        <motion.path
          d="M 116 110 L 198 110"
          stroke="var(--line)"
          strokeWidth="1.5"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: shouldAnimate ? 1 : 0 }}
          transition={{ duration: 0.4, ease: EASE, delay: 0.2 }}
        />
        <motion.polygon
          points="194,106 200,110 194,114"
          fill="var(--line)"
          {...fadeIn(0.2)}
        />

        {/* ——— Pharmacy node (hub — largest) ——— */}
        <motion.g
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: shouldAnimate ? 1 : 0, scale: shouldAnimate ? 1 : 0.9 }}
          transition={{ duration: 0.5, ease: EASE, delay: 0.5 }}
          style={{ transformOrigin: "320px 110px" }}
        >
          <circle cx="320" cy="110" r="62" fill="var(--brand)" fillOpacity="0.09" stroke="var(--brand)" strokeWidth="1.5" />
          <text x="320" y="103" textAnchor="middle" fill="var(--brand)" fontSize="10" fontFamily="var(--font-ibm-plex-mono), monospace" letterSpacing="0.08em" fontWeight="700">PHARMACY</text>
          <text x="320" y="119" textAnchor="middle" fill="var(--ink)" fontSize="9" fontFamily="var(--font-ibm-plex-mono), monospace">hub &amp; intake</text>
          <text x="320" y="133" textAnchor="middle" fill="var(--muted)" fontSize="8" fontFamily="var(--font-ibm-plex-mono), monospace">ABHA · consent · Rx</text>
        </motion.g>

        {/* ——— Right connector (Pharmacy → Doctor) — carries the pulse ——— */}
        <motion.path
          d="M 382 110 L 464 110"
          stroke="var(--live)"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeOpacity="0.5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: shouldAnimate ? 1 : 0 }}
          transition={{ duration: 0.4, ease: EASE, delay: 0.8 }}
        />
        <motion.polygon
          points="460,106 466,110 460,114"
          fill="var(--live)"
          fillOpacity="0.7"
          {...fadeIn(0.8)}
        />

        {/* ——— LIVE label on connector ——— */}
        <motion.text
          x="424" y="99"
          textAnchor="middle"
          fill="var(--live)"
          fontSize="8"
          fontFamily="var(--font-ibm-plex-mono), monospace"
          letterSpacing="0.12em"
          fontWeight="600"
          {...fadeIn(1.0)}
        >
          LIVE
        </motion.text>

        {/* ——— Pulse dot at midpoint — static amber indicator after draw ——— */}
        <motion.circle
          cx="424"
          cy="110"
          r="3"
          fill="var(--live)"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: shouldAnimate ? 0.9 : 0, scale: shouldAnimate ? 1 : 0.5 }}
          transition={{ duration: 0.4, ease: EASE, delay: 1.1 }}
        />

        {/* ——— Doctor node ——— */}
        <motion.g {...fadeIn(1.0)}>
          {/* Subtle ring that fades in once */}
          <motion.circle
            cx="560"
            cy="110"
            r="44"
            stroke="var(--live)"
            strokeWidth="1"
            fill="none"
            initial={{ opacity: 0 }}
            animate={{ opacity: shouldAnimate ? 0.25 : 0 }}
            transition={{ duration: 0.6, ease: EASE, delay: 1.2 }}
          />
          <circle cx="560" cy="110" r="36" fill="var(--brand-soft)" fillOpacity="0.12" stroke="var(--brand-soft)" strokeWidth="1.5" />
          <text x="560" y="107" textAnchor="middle" fill="var(--brand)" fontSize="9" fontFamily="var(--font-ibm-plex-mono), monospace" letterSpacing="0.08em" fontWeight="600">DOCTOR</text>
          <text x="560" y="122" textAnchor="middle" fill="var(--muted)" fontSize="9" fontFamily="var(--font-ibm-plex-mono), monospace">verified</text>
        </motion.g>

        {/* ——— Record flows back label ——— */}
        <motion.path
          d="M 382 130 Q 320 165 258 130"
          stroke="var(--brand-soft)"
          strokeWidth="1"
          strokeDasharray="4 3"
          strokeOpacity="0.5"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: shouldAnimate ? 1 : 0 }}
          transition={{ duration: 0.6, ease: EASE, delay: 1.2 }}
        />
        <motion.text
          x="320" y="175"
          textAnchor="middle"
          fill="var(--muted)"
          fontSize="8"
          fontFamily="var(--font-ibm-plex-mono), monospace"
          letterSpacing="0.06em"
          {...fadeIn(1.4)}
        >
          signed Rx · record · follow-up
        </motion.text>
      </svg>
    </div>
  );
}
