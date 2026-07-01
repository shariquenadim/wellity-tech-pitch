"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import type { StakeholderFlow } from "@/content/flows";

interface Props {
  flows: StakeholderFlow[];
  trigger?: boolean;
  dark?: boolean;
}

const EASE = [0.22, 1, 0.36, 1] as const;

function RoleRow({
  flow,
  index,
  active,
  dark,
}: {
  flow: StakeholderFlow;
  index: number;
  active: boolean;
  dark?: boolean;
}) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={shouldReduceMotion ? {} : { opacity: 0, y: 14 }}
      animate={active ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
      transition={{ duration: 0.42, ease: EASE, delay: 0.1 + index * 0.1 }}
      className={`rounded-[16px] border p-4 sm:p-5 ${
        dark ? "border-paper/12 bg-paper/[0.05]" : "border-line bg-surface"
      }`}
    >
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <div className="shrink-0 sm:w-32">
          <p
            className={`font-mono text-[10px] uppercase tracking-[0.14em] ${
              dark ? "text-brand-soft" : "text-brand"
            }`}
          >
            {flow.label}
          </p>
          <p className={`text-[11px] leading-snug ${dark ? "text-paper/40" : "text-muted"}`}>
            {flow.subtitle}
          </p>
        </div>

        <div className="grid flex-1 grid-cols-1 items-center gap-2 sm:grid-cols-[1fr_auto_1fr_auto_1fr]">
          {flow.summary
            .map((label, stepIndex) => (
              <div
                key={`${flow.id}-${label}`}
                className={`min-h-9 rounded-full border px-3 py-1.5 flex items-center justify-center text-center font-mono text-[10px] tracking-[0.08em] uppercase ${
                  stepIndex === 1
                    ? "border-live/45 bg-live/10 text-live"
                    : dark
                    ? "border-paper/15 bg-paper/[0.06] text-paper/70"
                    : "border-line bg-white text-muted"
                }`}
              >
                {label}
              </div>
            ))
            .flatMap((node, i, arr) =>
              i < arr.length - 1
                ? [
                    node,
                    <div
                      key={`${flow.id}-arrow-${i}`}
                      className="hidden items-center justify-center sm:flex"
                      aria-hidden="true"
                    >
                      <svg width="20" height="8" viewBox="0 0 20 8" fill="none">
                        <path
                          d="M1 4h15"
                          stroke={dark ? "rgba(247,250,252,0.3)" : "var(--muted)"}
                          strokeWidth="1.2"
                          strokeLinecap="round"
                        />
                        <path
                          d="m13 1 4 3-4 3"
                          stroke={dark ? "rgba(247,250,252,0.3)" : "var(--muted)"}
                          strokeWidth="1.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>,
                  ]
                : [node]
            )}
        </div>
      </div>
    </motion.div>
  );
}

export default function FlowOverviewGrid({ flows, trigger, dark = false }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(containerRef, { once: true, amount: 0.2 });
  const shouldReduceMotion = useReducedMotion();
  const isActive = trigger !== undefined ? trigger : inView;
  const displayActive = shouldReduceMotion ? true : isActive;

  return (
    <div ref={containerRef} className="w-full space-y-3">
      {flows.map((flow, index) => (
        <RoleRow key={flow.id} flow={flow} index={index} active={displayActive} dark={dark} />
      ))}
    </div>
  );
}
