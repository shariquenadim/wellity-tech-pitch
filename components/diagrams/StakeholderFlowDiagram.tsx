"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import type { StakeholderFlow, FlowStep } from "@/content/flows";

interface Props {
  flow: StakeholderFlow;
  trigger?: boolean;
}

const EASE = [0.22, 1, 0.36, 1] as const;

function StepNode({ step, index, active }: { step: FlowStep; index: number; active: boolean }) {
  const shouldReduceMotion = useReducedMotion();
  return (
    <motion.div
      className="flex flex-col items-center text-center min-w-[112px] max-w-[140px] flex-shrink-0 md:min-w-[120px]"
      initial={shouldReduceMotion ? {} : { opacity: 0, y: 8 }}
      animate={active ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
      transition={{ duration: 0.4, ease: EASE, delay: 0.1 + index * 0.07 }}
    >
      <div className="relative mb-3">
        <div
          className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-mono font-medium ${
            step.isLive
              ? "bg-live/12 text-live border-2 border-live/40"
              : "bg-brand/8 text-brand border-2 border-brand/20"
          }`}
        >
          {String(step.number).padStart(2, "0")}
        </div>
        {step.isLive && (
          <div className="absolute -top-1 -right-5 flex items-center gap-0.5">
            <span className="w-1.5 h-1.5 rounded-full bg-live pulse-dot" />
            <span className="text-[8px] font-mono font-semibold tracking-wider text-live">
              LIVE
            </span>
          </div>
        )}
      </div>
      <h4 className="font-sans font-semibold text-ink text-sm mb-1.5 leading-tight">
        {step.title}
      </h4>
      <p className="text-muted text-xs leading-relaxed">{step.description}</p>
    </motion.div>
  );
}

function FlowConnector({ isLive, index, active }: { isLive?: boolean; index: number; active: boolean }) {
  const shouldReduceMotion = useReducedMotion();
  const color = isLive ? "var(--live)" : "var(--line)";
  return (
    <div className="flex items-start pt-5 flex-shrink-0 mx-1 md:mx-2">
      <svg width="36" height="12" viewBox="0 0 36 12">
        <motion.path
          d="M 0 6 L 30 6"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeDasharray={isLive ? "none" : "4 3"}
          initial={shouldReduceMotion ? {} : { pathLength: 0 }}
          animate={active ? { pathLength: 1 } : { pathLength: 0 }}
          transition={{ duration: 0.4, ease: EASE, delay: 0.08 + index * 0.08 }}
        />
        <motion.polygon
          points="26,3 32,6 26,9"
          fill={color}
          initial={{ opacity: 0 }}
          animate={active ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.2, ease: EASE, delay: 0.25 + index * 0.08 }}
        />
      </svg>
    </div>
  );
}

/* Mobile vertical connector */
function VerticalConnector({ isLive }: { isLive?: boolean }) {
  const color = isLive ? "var(--live)" : "var(--line)";
  return (
    <div className="flex justify-center my-1">
      <svg width="12" height="28" viewBox="0 0 12 28">
        <line
          x1="6" y1="0" x2="6" y2="22"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeDasharray={isLive ? "none" : "4 3"}
        />
        <polygon points="3,18 6,24 9,18" fill={color} />
      </svg>
    </div>
  );
}

export default function StakeholderFlowDiagram({ flow, trigger }: Props) {
  const shouldReduceMotion = useReducedMotion();
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (trigger !== undefined) {
      if (trigger) setActive(true);
      else setActive(false);
    }
  }, [trigger, flow.id]);

  // When trigger is undefined (scroll context), always show as active
  // (scroll reveal handled by parent ScrollReveal)
  const isActive = trigger !== undefined ? active : true;

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={flow.id}
        initial={shouldReduceMotion ? {} : { opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={shouldReduceMotion ? {} : { opacity: 0 }}
        transition={{ duration: 0.45, ease: EASE }}
      >
        {/* Desktop: horizontal pipeline */}
        <div className="hidden md:block relative">
          <div
            className="overflow-x-auto -mx-6 px-6 pb-4"
            style={{ scrollbarWidth: "thin" }}
          >
            <div className="flex items-start gap-0 min-w-max pr-6">
              {flow.steps.map((step, i) => (
                <div key={`${flow.id}-${step.number}`} className="flex items-start">
                  <StepNode step={step} index={i} active={!shouldReduceMotion && isActive} />
                  {i < flow.steps.length - 1 && (
                    <FlowConnector
                      isLive={step.isLive && flow.steps[i + 1]?.isLive}
                      index={i}
                      active={!shouldReduceMotion && isActive}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
          <div
            className="absolute right-0 top-0 bottom-0 w-12 pointer-events-none"
            style={{ background: "linear-gradient(to left, var(--paper), transparent)" }}
            aria-hidden="true"
          />
        </div>

        {/* Mobile: vertical timeline */}
        <div className="md:hidden">
          {flow.steps.map((step, i) => (
            <div key={`${flow.id}-mobile-${step.number}`}>
              <div className="flex items-start gap-4">
                <div className="flex flex-col items-center flex-shrink-0">
                  <div
                    className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-mono font-medium flex-shrink-0 ${
                      step.isLive
                        ? "bg-live/12 text-live border-2 border-live/40"
                        : "bg-brand/8 text-brand border-2 border-brand/20"
                    }`}
                  >
                    {String(step.number).padStart(2, "0")}
                  </div>
                  {i < flow.steps.length - 1 && (
                    <VerticalConnector isLive={step.isLive && flow.steps[i + 1]?.isLive} />
                  )}
                </div>
                <div className="pb-4 flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="font-sans font-semibold text-ink text-sm">{step.title}</h4>
                    {step.isLive && (
                      <span className="inline-flex items-center gap-1 text-[8px] font-mono font-semibold tracking-wider text-live">
                        <span className="w-1.5 h-1.5 rounded-full bg-live pulse-dot" />
                        LIVE
                      </span>
                    )}
                  </div>
                  <p className="text-muted text-xs leading-relaxed">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {flow.footnote && (
          <p className="mt-8 text-muted text-xs italic leading-relaxed max-w-2xl">
            {flow.footnote}
          </p>
        )}
      </motion.div>
    </AnimatePresence>
  );
}
