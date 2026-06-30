"use client";

import { motion, useReducedMotion } from "framer-motion";
import { heroContent } from "@/content/hero";
import ConsultationPulse from "@/components/ConsultationPulse";

interface HeroSectionProps {
  onPresentationMode: () => void;
}

export default function HeroSection({ onPresentationMode }: HeroSectionProps) {
  const shouldReduceMotion = useReducedMotion();

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.06,
      },
    },
  };

  const item = shouldReduceMotion
    ? { hidden: {}, show: {} }
    : {
        hidden: { opacity: 0, y: 16 },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const },
        },
      };

  return (
    <section
      id="hero"
      className="min-h-[90vh] flex items-center py-20 md:py-28"
    >
      <div className="section-container w-full">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-3xl"
        >
          <motion.p
            variants={item}
            className="font-mono text-xs tracking-[0.15em] text-muted mb-6 uppercase"
          >
            {heroContent.eyebrow}
          </motion.p>

          <motion.h1
            variants={item}
            className="font-display text-ink leading-[1.1] mb-6"
            style={{
              fontSize: "clamp(2.75rem, 6vw, 5rem)",
              fontWeight: 420,
              fontOpticalSizing: "auto",
            }}
          >
            {heroContent.headline}
          </motion.h1>

          <motion.p
            variants={item}
            className="text-muted text-base md:text-lg leading-relaxed max-w-2xl mb-8"
          >
            {heroContent.sub}
          </motion.p>

          <motion.div variants={item} className="mb-10">
            <ConsultationPulse size="lg" />
          </motion.div>

          <motion.div
            variants={item}
            className="flex flex-wrap gap-4 items-center"
          >
            <a
              href="#flows"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg font-sans text-sm font-medium hover:bg-primary-ink transition-colors focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            >
              {heroContent.ctaPrimary}
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                className="mt-px"
              >
                <path
                  d="M3 8h10m0 0L9 4m4 4L9 12"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
            <button
              onClick={onPresentationMode}
              className="inline-flex items-center gap-2 px-6 py-3 border border-line text-ink rounded-lg font-sans text-sm font-medium hover:border-primary hover:text-primary transition-colors focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                className="mt-px"
              >
                <rect
                  x="1"
                  y="2"
                  width="14"
                  height="10"
                  rx="1.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <path
                  d="M5 14h6"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
              {heroContent.ctaSecondary}
            </button>
          </motion.div>

          <motion.p
            variants={item}
            className="mt-12 text-xs text-muted font-sans"
          >
            {heroContent.founderLine}
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
