"use client";

import { useEffect, useCallback } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { presentationSlides } from "@/content/slides";

interface PresentationModeProps {
  isActive: boolean;
  currentSlide: number;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
  onGoTo: (index: number) => void;
}

export default function PresentationMode({
  isActive,
  currentSlide,
  onClose,
  onNext,
  onPrev,
  onGoTo,
}: PresentationModeProps) {
  const shouldReduceMotion = useReducedMotion();
  const totalSlides = presentationSlides.length;
  const slide = presentationSlides[currentSlide];

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!isActive) return;
      switch (e.key) {
        case "ArrowRight":
        case " ":
          e.preventDefault();
          onNext();
          break;
        case "ArrowLeft":
          e.preventDefault();
          onPrev();
          break;
        case "Escape":
          e.preventDefault();
          onClose();
          break;
      }
    },
    [isActive, onNext, onPrev, onClose]
  );

  useEffect(() => {
    if (isActive) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
      return () => {
        document.removeEventListener("keydown", handleKeyDown);
        document.body.style.overflow = "";
      };
    }
  }, [isActive, handleKeyDown]);

  if (!isActive) return null;

  const slideVariants = shouldReduceMotion
    ? { enter: {}, center: {}, exit: {} }
    : {
        enter: (direction: number) => ({
          x: direction > 0 ? "100%" : "-100%",
          opacity: 0,
        }),
        center: {
          x: 0,
          opacity: 1,
        },
        exit: (direction: number) => ({
          x: direction > 0 ? "-100%" : "100%",
          opacity: 0,
        }),
      };

  return (
    <motion.div
      className="fixed inset-0 z-50 bg-ink"
      initial={shouldReduceMotion ? {} : { opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={shouldReduceMotion ? {} : { opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 z-50 text-paper/60 hover:text-paper transition-colors p-2 rounded-lg focus-visible:ring-2 focus-visible:ring-primary"
        aria-label="Exit presentation mode"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <path d="M18 6L6 18M6 6l12 12" />
        </svg>
      </button>

      {/* Slide content */}
      <AnimatePresence mode="wait" custom={1}>
        <motion.div
          key={slide.id}
          custom={1}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="h-full w-full flex items-center justify-center px-8 md:px-16 lg:px-24"
        >
          <div className="max-w-4xl w-full">
            {/* Slide number */}
            <p className="font-mono text-xs text-accent/60 tracking-[0.15em] mb-8 uppercase">
              {String(currentSlide + 1).padStart(2, "0")} / {String(totalSlides).padStart(2, "0")}
            </p>

            {/* Headline */}
            <h2
              className="font-display text-paper mb-10 max-w-3xl"
              style={{
                fontSize: "clamp(2rem, 5vw, 3.5rem)",
                fontWeight: 400,
                lineHeight: 1.15,
                fontOpticalSizing: "auto",
              }}
            >
              {slide.headline}
            </h2>

            {/* Points */}
            <ul className="space-y-4">
              {slide.points.map((point, i) => (
                <motion.li
                  key={i}
                  initial={shouldReduceMotion ? {} : { opacity: 0, x: 16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + i * 0.08, duration: 0.4 }}
                  className="flex items-start gap-4 text-paper/80"
                >
                  <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                  <span
                    className="font-sans text-lg md:text-xl leading-relaxed"
                    style={{ fontSize: "clamp(1rem, 2vw, 1.25rem)" }}
                  >
                    {point}
                  </span>
                </motion.li>
              ))}
            </ul>

            {/* Footnote */}
            {slide.footnote && (
              <p className="mt-8 text-paper/40 text-sm font-mono italic">
                {slide.footnote}
              </p>
            )}
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation */}
      <div className="absolute bottom-6 left-0 right-0 flex items-center justify-between px-8">
        {/* Previous */}
        <button
          onClick={onPrev}
          disabled={currentSlide === 0}
          className="text-paper/40 hover:text-paper disabled:opacity-20 disabled:cursor-not-allowed transition-colors p-3 rounded-lg focus-visible:ring-2 focus-visible:ring-primary"
          aria-label="Previous slide"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>

        {/* Progress dots */}
        <div className="flex items-center gap-1.5">
          {presentationSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => onGoTo(i)}
              className={`w-2 h-2 rounded-full transition-all focus-visible:ring-2 focus-visible:ring-primary ${
                i === currentSlide
                  ? "bg-accent w-6"
                  : "bg-paper/20 hover:bg-paper/40"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        {/* Next */}
        <button
          onClick={onNext}
          disabled={currentSlide === totalSlides - 1}
          className="text-paper/40 hover:text-paper disabled:opacity-20 disabled:cursor-not-allowed transition-colors p-3 rounded-lg focus-visible:ring-2 focus-visible:ring-primary"
          aria-label="Next slide"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </div>

      {/* Slide counter (bottom-right, mono) */}
      <div className="absolute bottom-6 right-8 font-mono text-sm text-paper/30 tracking-wide">
        {String(currentSlide + 1).padStart(2, "0")} / {String(totalSlides).padStart(2, "0")}
      </div>
    </motion.div>
  );
}
