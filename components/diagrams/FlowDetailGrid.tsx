"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import type { StakeholderFlow } from "@/content/flows";
import { StepIcon } from "@/components/diagrams/StakeholderFlowDiagram";

interface Props {
  flow: StakeholderFlow;
  trigger?: boolean;
  dark?: boolean;
}

const EASE = [0.22, 1, 0.36, 1] as const;

export default function FlowDetailGrid({ flow, trigger, dark = false }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(containerRef, { once: true, amount: 0.2 });
  const shouldReduceMotion = useReducedMotion();
  const isActive = trigger !== undefined ? trigger : inView;
  const displayActive = shouldReduceMotion ? true : isActive;

  return (
    <div ref={containerRef} className="w-full">
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {flow.steps.map((step, index) => (
          <motion.div
            key={`${flow.id}-detail-${step.number}`}
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 12 }}
            animate={displayActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
            transition={{ duration: 0.4, ease: EASE, delay: 0.06 + index * 0.05 }}
            className={`relative flex flex-col gap-2 rounded-[12px] border p-3 sm:p-3.5 ${
              dark
                ? "border-paper/12 bg-paper/[0.05]"
                : "border-line bg-surface"
            }`}
          >
            <div className="flex items-center justify-between">
              <span
                className={`font-mono text-[10px] tracking-[0.12em] ${
                  step.isLive ? "text-live" : dark ? "text-brand-soft" : "text-brand"
                }`}
              >
                {String(step.number).padStart(2, "0")}
              </span>
              <div
                className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border ${
                  step.isLive
                    ? "border-live/35 bg-live/10"
                    : dark
                    ? "border-brand-soft/25 bg-brand-soft/10"
                    : "border-brand/20 bg-brand/8"
                }`}
              >
                <StepIcon icon={step.icon} live={step.isLive} dark={dark} />
              </div>
            </div>
            <h4
              className={`font-sans text-xs font-semibold leading-snug sm:text-sm ${
                dark ? "text-paper" : "text-ink"
              }`}
            >
              {step.title}
            </h4>
            {step.isLive && (
              <span className="inline-flex w-fit items-center gap-1.5 rounded-full border border-live/30 bg-live/10 px-2 py-0.5 font-mono text-[8px] font-semibold tracking-[0.1em] text-live">
                <span className="h-1.5 w-1.5 rounded-full bg-live pulse-dot" />
                REAL-TIME
              </span>
            )}
          </motion.div>
        ))}
      </div>

      {flow.footnote && (
        <p
          className={`mx-auto mt-6 max-w-[720px] text-xs italic leading-relaxed ${
            dark ? "text-paper/45" : "text-muted"
          }`}
        >
          {flow.footnote}
        </p>
      )}
    </div>
  );
}
