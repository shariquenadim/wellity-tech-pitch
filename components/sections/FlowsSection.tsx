"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { stakeholderFlows, flowsIntro } from "@/content/flows";
import type { FlowStep } from "@/content/flows";
import ScrollReveal from "@/components/ScrollReveal";

function StepNode({ step, index }: { step: FlowStep; index: number }) {
  return (
    <div className="flex flex-col items-center text-center min-w-[120px] max-w-[150px] flex-shrink-0">
      {/* Step number + live badge */}
      <div className="relative mb-3">
        <div
          className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-mono font-medium ${
            step.isLive
              ? "bg-signal/15 text-signal border-2 border-signal/30"
              : "bg-primary/10 text-primary border-2 border-primary/20"
          }`}
        >
          {String(step.number).padStart(2, "0")}
        </div>
        {step.isLive && (
          <span className="absolute -top-1 -right-3 px-1.5 py-0.5 text-[9px] font-mono font-semibold tracking-wider bg-signal text-white rounded-full pulse-dot">
            LIVE
          </span>
        )}
      </div>

      {/* Step title */}
      <h4 className="font-sans font-semibold text-ink text-sm mb-1.5">
        {step.title}
      </h4>

      {/* Step description */}
      <p className="text-muted text-xs leading-relaxed">
        {step.description}
      </p>
    </div>
  );
}

function FlowConnector({ isLive }: { isLive?: boolean }) {
  return (
    <div className="flex items-start pt-5 flex-shrink-0 mx-1">
      <div className="w-6 md:w-10 flex items-center justify-center">
        <svg width="100%" height="12" viewBox="0 0 40 12" preserveAspectRatio="none">
          <line
            x1="0"
            y1="6"
            x2="40"
            y2="6"
            stroke={isLive ? "var(--signal)" : "var(--line)"}
            strokeWidth="1.5"
            strokeDasharray={isLive ? "none" : "4 3"}
          />
          <polygon
            points="34,2 40,6 34,10"
            fill={isLive ? "var(--signal)" : "var(--line)"}
          />
        </svg>
      </div>
    </div>
  );
}

export default function FlowsSection() {
  const [activeFlow, setActiveFlow] = useState(0);
  const shouldReduceMotion = useReducedMotion();
  const currentFlow = stakeholderFlows[activeFlow];

  return (
    <section id="flows" className="py-20 md:py-28">
      <div className="section-container">
        <ScrollReveal>
          <h2
            className="font-display text-ink mb-4"
            style={{
              fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
              fontWeight: 420,
              lineHeight: 1.15,
            }}
          >
            How it works
          </h2>
          <p className="font-sans text-lg text-ink font-medium mb-8">
            {flowsIntro}
          </p>
        </ScrollReveal>

        {/* Tab navigation */}
        <ScrollReveal delay={0.06}>
          <div className="flex gap-1 mb-10 bg-surface rounded-xl p-1 w-fit border border-line">
            {stakeholderFlows.map((flow, i) => (
              <button
                key={flow.id}
                onClick={() => setActiveFlow(i)}
                className={`px-4 py-2 rounded-lg text-sm font-sans font-medium transition-all focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-1 ${
                  activeFlow === i
                    ? "bg-primary text-white shadow-sm"
                    : "text-muted hover:text-ink hover:bg-white/60"
                }`}
                aria-pressed={activeFlow === i}
              >
                {flow.label}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Flow subtitle */}
        <ScrollReveal delay={0.12}>
          <p className="text-muted text-sm font-mono mb-6 tracking-wide">
            {currentFlow.subtitle.toUpperCase()}
          </p>
        </ScrollReveal>

        {/* Flow diagram */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentFlow.id}
            initial={shouldReduceMotion ? {} : { opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={shouldReduceMotion ? {} : { opacity: 0, x: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            {/* Horizontal scroll on mobile, wrap on desktop */}
            <div className="relative">
              <div className="overflow-x-auto -mx-6 px-6 pb-4" style={{ scrollbarWidth: 'thin' }}>
                <div className="flex items-start gap-0 min-w-max pr-6">
                  {currentFlow.steps.map((step, i) => (
                    <div key={`${currentFlow.id}-${step.number}`} className="flex items-start">
                      <StepNode step={step} index={i} />
                      {i < currentFlow.steps.length - 1 && (
                        <FlowConnector
                          isLive={step.isLive && currentFlow.steps[i + 1]?.isLive}
                        />
                      )}
                    </div>
                  ))}
                </div>
              </div>
              {/* Scroll hint gradient */}
              <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-paper to-transparent pointer-events-none" aria-hidden="true" />
            </div>

            {/* Footnote */}
            {currentFlow.footnote && (
              <p className="mt-8 text-muted text-xs italic leading-relaxed max-w-2xl">
                {currentFlow.footnote}
              </p>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
