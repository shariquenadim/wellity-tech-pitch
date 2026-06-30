"use client";

import { useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { presentationSlides } from "@/content/slides";
import { stakeholderFlows } from "@/content/flows";
import SystemOverviewDiagram from "@/components/diagrams/SystemOverviewDiagram";
import StakeholderFlowDiagram from "@/components/diagrams/StakeholderFlowDiagram";
import ArchitectureDiagram from "@/components/diagrams/ArchitectureDiagram";

interface PresentationModeProps {
  isActive: boolean;
  currentSlide: number;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
  onGoTo: (index: number) => void;
}

const EASE = [0.22, 1, 0.36, 1] as const;

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
  const directionRef = useRef(1);
  const prevSlideRef = useRef(currentSlide);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!isActive) return;
      switch (e.key) {
        case "ArrowRight":
        case " ":
          e.preventDefault();
          directionRef.current = 1;
          onNext();
          break;
        case "ArrowLeft":
          e.preventDefault();
          directionRef.current = -1;
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
    if (currentSlide > prevSlideRef.current) directionRef.current = 1;
    else if (currentSlide < prevSlideRef.current) directionRef.current = -1;
    prevSlideRef.current = currentSlide;
  }, [currentSlide]);

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
          x: direction > 0 ? "60%" : "-60%",
          opacity: 0,
        }),
        center: {
          x: 0,
          opacity: 1,
        },
        exit: (direction: number) => ({
          x: direction > 0 ? "-60%" : "60%",
          opacity: 0,
        }),
      };

  const pharmacyFlow = stakeholderFlows[0];

  return (
    <motion.div
      className="fixed inset-0 z-50 bg-ink presentation-mode"
      initial={shouldReduceMotion ? {} : { opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={shouldReduceMotion ? {} : { opacity: 0 }}
      transition={{ duration: 0.3, ease: EASE }}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 z-50 text-paper/50 hover:text-paper transition-colors p-2 rounded-lg focus-visible:ring-2 focus-visible:ring-brand-soft"
        aria-label="Exit presentation mode (Esc)"
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
          <path d="M18 6L6 18M6 6l12 12" />
        </svg>
      </button>

      {/* Slide content */}
      <AnimatePresence mode="wait" custom={directionRef.current}>
        <motion.div
          key={slide.id}
          custom={directionRef.current}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.45, ease: EASE }}
          className="h-full w-full flex items-center justify-center px-8 md:px-14 lg:px-20 overflow-y-auto"
        >
          <div className="max-w-4xl w-full py-16">
            {/* Headline */}
            <h2
              className="font-display text-paper mb-8 max-w-3xl"
              style={{
                fontSize: "clamp(1.75rem, 4.5vw, 3.25rem)",
                fontWeight: 400,
                lineHeight: 1.15,
                fontOpticalSizing: "auto",
              }}
            >
              {slide.headline}
            </h2>

            {/* Points */}
            {slide.points.length > 0 && (
              <ul className="space-y-3 mb-8">
                {slide.points.map((point, i) => (
                  <motion.li
                    key={i}
                    initial={shouldReduceMotion ? {} : { opacity: 0, x: 12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.15 + i * 0.07, duration: 0.4, ease: EASE }}
                    className="flex items-start gap-3 text-paper/80"
                  >
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-soft flex-shrink-0" />
                    <span
                      className="font-sans leading-relaxed"
                      style={{ fontSize: "clamp(0.95rem, 1.8vw, 1.15rem)" }}
                    >
                      {point}
                    </span>
                  </motion.li>
                ))}
              </ul>
            )}

            {/* Credibility tags (founder slide) */}
            {slide.tags && slide.tags.length > 0 && (
              <motion.div
                className="flex flex-wrap gap-2 mb-8"
                initial={shouldReduceMotion ? {} : { opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.4, ease: EASE }}
              >
                {slide.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-[10px] tracking-[0.12em] text-brand-soft border border-brand-soft/30 px-2.5 py-1 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </motion.div>
            )}

            {/* Diagram */}
            {slide.diagram && (
              <motion.div
                className="mt-6"
                initial={shouldReduceMotion ? {} : { opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5, ease: EASE }}
              >
                {slide.diagram === "systemOverview" && (
                  <SystemOverviewDiagram trigger={true} />
                )}
                {slide.diagram === "stakeholderFlow" && (
                  <StakeholderFlowDiagram flow={pharmacyFlow} trigger={true} />
                )}
                {slide.diagram === "architecture" && (
                  <ArchitectureDiagram dark trigger={true} />
                )}
              </motion.div>
            )}

            {/* Footnote */}
            {slide.footnote && (
              <p className="mt-6 text-paper/35 text-sm font-mono italic leading-relaxed">
                {slide.footnote}
              </p>
            )}
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation */}
      <div className="absolute bottom-6 left-0 right-0 flex items-center justify-between px-8">
        <button
          onClick={() => { directionRef.current = -1; onPrev(); }}
          disabled={currentSlide === 0}
          className="text-paper/40 hover:text-paper disabled:opacity-20 disabled:cursor-not-allowed transition-colors p-3 rounded-lg focus-visible:ring-2 focus-visible:ring-brand-soft"
          aria-label="Previous slide"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>

        {/* Mono progress counter */}
        <span className="font-mono text-xs text-paper/40 tracking-[0.12em]">
          {String(currentSlide + 1).padStart(2, "0")} / {String(totalSlides).padStart(2, "0")}
        </span>

        <button
          onClick={() => { directionRef.current = 1; onNext(); }}
          disabled={currentSlide === totalSlides - 1}
          className="text-paper/40 hover:text-paper disabled:opacity-20 disabled:cursor-not-allowed transition-colors p-3 rounded-lg focus-visible:ring-2 focus-visible:ring-brand-soft"
          aria-label="Next slide"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </div>
    </motion.div>
  );
}
