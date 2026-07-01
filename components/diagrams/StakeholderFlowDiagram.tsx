"use client";

import { useRef, useState, useLayoutEffect } from "react";
import {
  motion,
  AnimatePresence,
  useInView,
  useReducedMotion,
} from "framer-motion";
import type { ReactNode } from "react";
import type { FlowIcon, FlowStep, StakeholderFlow } from "@/content/flows";

interface Props {
  flow: StakeholderFlow;
  trigger?: boolean;
  dark?: boolean;
}

const EASE = [0.22, 1, 0.36, 1] as const;

export function IconPath({ name }: { name: FlowIcon }) {
  const paths: Record<FlowIcon, ReactNode> = {
    "id-card": (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="M7 10h4M7 14h7M16 10h2M16 14h2" />
      </>
    ),
    "user-plus": (
      <>
        <circle cx="9" cy="8" r="3" />
        <path d="M4 19c.7-3 2.4-4.5 5-4.5 1.2 0 2.2.3 3 .9M17 8v6M14 11h6" />
      </>
    ),
    "clipboard-heart": (
      <>
        <path d="M9 4h6l1 2h2v15H6V6h2l1-2Z" />
        <path d="M9 6h6M8.8 13.2c0-1 .7-1.8 1.7-1.8.6 0 1.1.3 1.5.8.4-.5.9-.8 1.5-.8 1 0 1.7.8 1.7 1.8 0 1.7-3.2 3.8-3.2 3.8s-3.2-2.1-3.2-3.8Z" />
      </>
    ),
    radio: (
      <>
        <circle cx="12" cy="12" r="2" />
        <path d="M7.8 16.2a6 6 0 0 1 0-8.4M16.2 7.8a6 6 0 0 1 0 8.4M5 19a10 10 0 0 1 0-14M19 5a10 10 0 0 1 0 14" />
      </>
    ),
    video: (
      <>
        <rect x="3" y="7" width="12" height="10" rx="2" />
        <path d="m15 10 5-3v10l-5-3" />
      </>
    ),
    "file-signature": (
      <>
        <path d="M7 3h7l4 4v14H7V3Z" />
        <path d="M14 3v5h4M9 17c1.4-2 2.6-2 3.4 0 .6 1.4 1.6 1.3 3.1-.3" />
      </>
    ),
    send: (
      <>
        <path d="M21 4 10 15" />
        <path d="m21 4-7 17-4-6-6-4 17-7Z" />
      </>
    ),
    "upload-cloud": (
      <>
        <path d="M7 18a4 4 0 0 1 .5-8 5.5 5.5 0 0 1 10.8 1.4A3.4 3.4 0 0 1 17 18" />
        <path d="M12 12v8M9 15l3-3 3 3" />
      </>
    ),
    footprints: (
      <>
        <path d="M8 7c.8-2.5 3.4-2 3.1.4-.2 1.5-1.2 3.5-2.6 3.2C7 10.3 7.5 8.5 8 7ZM14 14c.8-2.5 3.4-2 3.1.4-.2 1.5-1.2 3.5-2.6 3.2-1.5-.3-1-2.1-.5-3.6Z" />
        <path d="M6.5 14.5h.01M10 17.5h.01M13 5h.01M17 8h.01" />
      </>
    ),
    "shield-check": (
      <>
        <path d="M12 3 20 6v5c0 5-3.2 8.4-8 10-4.8-1.6-8-5-8-10V6l8-3Z" />
        <path d="m8.5 12 2.2 2.2 4.8-5" />
      </>
    ),
    "user-check": (
      <>
        <circle cx="9" cy="8" r="3" />
        <path d="M4 19c.7-3 2.4-4.5 5-4.5 1.4 0 2.5.4 3.3 1.1M15 12l2 2 4-5" />
      </>
    ),
    toggle: (
      <>
        <rect x="3" y="7" width="18" height="10" rx="5" />
        <circle cx="15.5" cy="12" r="2.5" />
      </>
    ),
    gavel: (
      <>
        <path d="m14 5 5 5M8 11l5 5M13 4 7 10l7 7 6-6-7-7ZM4 20h8" />
      </>
    ),
    repeat: (
      <>
        <path d="m17 2 4 4-4 4" />
        <path d="M3 11V8a2 2 0 0 1 2-2h16" />
        <path d="m7 22-4-4 4-4" />
        <path d="M21 13v3a2 2 0 0 1-2 2H3" />
      </>
    ),
  };

  return paths[name];
}

export function StepIcon({
  icon,
  live,
  dark,
}: {
  icon: FlowIcon;
  live?: boolean;
  dark?: boolean;
}) {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke={live ? "var(--live)" : dark ? "var(--brand-soft)" : "var(--brand)"}
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="shrink-0"
    >
      <IconPath name={icon} />
    </svg>
  );
}

function SummaryMap({
  flow,
  active,
  dark,
}: {
  flow: StakeholderFlow;
  active: boolean;
  dark?: boolean;
}) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="mb-8 md:mb-10">
      <div className="grid grid-cols-1 sm:grid-cols-[1fr_auto_1fr_auto_1fr] gap-2 sm:items-center max-w-[720px] mx-auto">
        {flow.summary.map((label, index) => (
          <motion.div
            key={`${flow.id}-summary-${label}`}
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 8 }}
            animate={active ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
            transition={{ duration: 0.35, ease: EASE, delay: index * 0.08 }}
            className={`min-h-11 rounded-full border px-4 py-2 flex items-center justify-center text-center font-mono text-[10px] tracking-[0.1em] uppercase ${
              index === 1
                ? "border-live/45 bg-live/10 text-live"
                : dark
                ? "border-paper/15 bg-paper/[0.06] text-paper/70"
                : "border-line bg-surface text-muted"
            }`}
          >
            {label}
          </motion.div>
        )).flatMap((node, index, array) =>
          index < array.length - 1
            ? [
                node,
                <motion.div
                  key={`${flow.id}-summary-arrow-${index}`}
                  initial={shouldReduceMotion ? {} : { opacity: 0, scaleX: 0.6 }}
                  animate={active ? { opacity: 1, scaleX: 1 } : { opacity: 0, scaleX: 0.6 }}
                  transition={{ duration: 0.3, ease: EASE, delay: 0.12 + index * 0.08 }}
                  className="hidden sm:flex items-center justify-center text-muted"
                  aria-hidden="true"
                >
                  <svg width="28" height="10" viewBox="0 0 28 10" fill="none">
                    <path
                      d="M1 5h22"
                      stroke={index === 0 ? "var(--live)" : "currentColor"}
                      strokeWidth="1.2"
                      strokeLinecap="round"
                    />
                    <path
                      d="m20 1 6 4-6 4"
                      stroke={index === 0 ? "var(--live)" : "currentColor"}
                      strokeWidth="1.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </motion.div>,
              ]
            : [node]
        )}
      </div>
    </div>
  );
}

function StepCard({
  step,
  index,
  active,
  dark,
}: {
  step: FlowStep;
  index: number;
  active: boolean;
  dark?: boolean;
}) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={shouldReduceMotion ? {} : { opacity: 0, y: 14 }}
      animate={active ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
      transition={{ duration: 0.45, ease: EASE, delay: 0.16 + index * 0.08 }}
      className={`group relative flex min-h-[112px] w-full items-start gap-4 rounded-[14px] border p-4 transition-transform duration-200 ease-out hover:-translate-y-0.5 sm:p-5 ${
        dark
          ? "border-paper/12 bg-paper/[0.06] hover:border-brand-soft/45"
          : "border-line bg-surface hover:border-brand-soft"
      }`}
    >
      <div
        className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border ${
          step.isLive
            ? "border-live/35 bg-live/10"
            : dark
            ? "border-brand-soft/25 bg-brand-soft/10"
            : "border-brand/20 bg-brand/8"
        }`}
      >
        <StepIcon icon={step.icon} live={step.isLive} dark={dark} />
      </div>

      <div className="min-w-0 flex-1">
        <div className="mb-1.5 flex flex-wrap items-center gap-2">
          <span
            className={`font-mono text-[10px] tracking-[0.14em] ${
              step.isLive ? "text-live" : dark ? "text-brand-soft" : "text-brand"
            }`}
          >
            {String(step.number).padStart(2, "0")}
          </span>
          <h4
            className={`font-sans text-sm font-semibold leading-snug sm:text-base ${
              dark ? "text-paper" : "text-ink"
            }`}
          >
            {step.title}
          </h4>
          {step.isLive && (
            <span className="inline-flex min-h-6 items-center gap-1.5 rounded-full border border-live/30 bg-live/10 px-2 py-0.5 font-mono text-[9px] font-semibold tracking-[0.12em] text-live">
              <span className="h-1.5 w-1.5 rounded-full bg-live pulse-dot" />
              REAL-TIME
            </span>
          )}
        </div>
        <p
          className={`text-sm leading-relaxed ${
            dark ? "text-paper/62" : "text-muted"
          }`}
        >
          {step.description}
        </p>
      </div>
    </motion.div>
  );
}

export default function StakeholderFlowDiagram({
  flow,
  trigger,
  dark = false,
}: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<HTMLDivElement>(null);
  const firstDotRef = useRef<HTMLDivElement>(null);
  const lastDotRef = useRef<HTMLDivElement>(null);
  const inView = useInView(containerRef, { once: true, amount: 0.18 });
  const shouldReduceMotion = useReducedMotion();
  const isActive = trigger !== undefined ? trigger : inView;
  const displayActive = shouldReduceMotion ? true : isActive;
  const [lineHeight, setLineHeight] = useState(0);

  useLayoutEffect(() => {
    const measure = () => {
      const first = firstDotRef.current;
      const last = lastDotRef.current;
      if (!first || !last) return;
      const firstRect = first.getBoundingClientRect();
      const lastRect = last.getBoundingClientRect();
      const distance =
        lastRect.top + lastRect.height / 2 - (firstRect.top + firstRect.height / 2);
      setLineHeight(Math.max(0, distance));
    };

    measure();
    const observer = new ResizeObserver(measure);
    if (stepsRef.current) observer.observe(stepsRef.current);
    window.addEventListener("resize", measure);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [flow.id, flow.steps.length]);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={flow.id}
        ref={containerRef}
        initial={shouldReduceMotion ? {} : { opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={shouldReduceMotion ? {} : { opacity: 0 }}
        transition={{ duration: 0.42, ease: EASE }}
        className="w-full"
      >
        <SummaryMap flow={flow} active={displayActive} dark={dark} />

        <div className="relative mx-auto max-w-[720px]">
          <div
            className="pointer-events-none absolute left-[22px] top-0 bottom-0 w-px sm:left-1/2"
            aria-hidden="true"
          >
            <div
              className={`absolute left-0 top-7 w-px ${
                dark ? "bg-paper/12" : "bg-line"
              }`}
              style={{ height: `${lineHeight}px` }}
            />
            <motion.div
              className="absolute left-0 top-7 w-px origin-top bg-brand"
              style={{ height: `${lineHeight}px` }}
              initial={shouldReduceMotion ? {} : { scaleY: 0 }}
              animate={{ scaleY: displayActive ? 1 : 0 }}
              transition={{ duration: 0.75, ease: EASE, delay: 0.08 }}
            />
          </div>

          <div ref={stepsRef} className="space-y-6">
            {flow.steps.map((step, index) => (
              <div
                key={`${flow.id}-${step.number}`}
                className="relative grid grid-cols-[44px_1fr] gap-4 sm:grid-cols-[1fr_44px_1fr] sm:gap-5"
              >
                <div className="hidden sm:block" aria-hidden="true" />

                <motion.div
                  ref={index === 0 ? firstDotRef : index === flow.steps.length - 1 ? lastDotRef : undefined}
                  initial={shouldReduceMotion ? {} : { opacity: 0, scale: 0.75 }}
                  animate={
                    displayActive
                      ? { opacity: 1, scale: 1 }
                      : { opacity: 0, scale: 0.75 }
                  }
                  transition={{ duration: 0.35, ease: EASE, delay: 0.08 + index * 0.08 }}
                  className="relative z-10 flex h-11 w-11 items-center justify-center"
                >
                  <span
                    className={`absolute h-4 w-4 rounded-full ${
                      step.isLive ? "bg-live/20" : "bg-brand/15"
                    }`}
                  />
                  <span
                    className={`relative h-2.5 w-2.5 rounded-full ${
                      step.isLive ? "bg-live pulse-dot" : "bg-brand"
                    }`}
                  />
                </motion.div>

                <StepCard
                  step={step}
                  index={index}
                  active={displayActive}
                  dark={dark}
                />
              </div>
            ))}
          </div>
        </div>

        {flow.footnote && (
          <p
            className={`mx-auto mt-8 max-w-[720px] text-xs italic leading-relaxed ${
              dark ? "text-paper/45" : "text-muted"
            }`}
          >
            {flow.footnote}
          </p>
        )}
      </motion.div>
    </AnimatePresence>
  );
}
