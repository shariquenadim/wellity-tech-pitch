"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import type { InfraScalingRow } from "@/content/slides";
import DiagramImageFallback from "@/components/diagrams/DiagramImageFallback";

interface ScalingBudgetVisualProps {
  rows: InfraScalingRow[];
  trigger?: boolean;
  dark?: boolean;
}

const EASE = [0.22, 1, 0.36, 1] as const;

function ScalingBars({
  rows,
  trigger,
  dark,
}: {
  rows: InfraScalingRow[];
  trigger?: boolean;
  dark: boolean;
}) {
  const ref = useRef<SVGSVGElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });
  const shouldReduceMotion = useReducedMotion();
  const active = shouldReduceMotion ? true : trigger !== undefined ? trigger : inView;
  const max = Math.max(...rows.map((row) => row.barValue));
  const axis = dark ? "rgba(247,250,252,0.22)" : "var(--line)";
  const label = dark ? "rgba(247,250,252,0.68)" : "var(--muted)";
  const ink = dark ? "rgba(247,250,252,0.9)" : "var(--ink)";

  return (
    <div
      className={`rounded-[14px] border p-4 ${
        dark ? "border-paper/12 bg-paper/[0.04]" : "border-line bg-white"
      }`}
    >
      <svg
        ref={ref}
        viewBox="0 0 560 260"
        role="img"
        aria-label="Three-year annual infrastructure cost bar chart"
        className="h-auto w-full"
      >
        <line x1="54" y1="210" x2="530" y2="210" stroke={axis} strokeWidth="1" />
        <line x1="54" y1="42" x2="54" y2="210" stroke={axis} strokeWidth="1" />
        {[0, 4, 8, 12, 16].map((tick) => {
          const y = 210 - (tick / max) * 168;
          return (
            <g key={tick}>
              <line x1="49" y1={y} x2="530" y2={y} stroke={axis} strokeWidth="1" strokeDasharray={tick === 0 ? "none" : "3 6"} opacity={tick === 0 ? 1 : 0.5} />
              <text x="38" y={y + 4} textAnchor="end" fill={label} fontSize="10" fontFamily="var(--font-ibm-plex-mono), monospace">
                {tick}L
              </text>
            </g>
          );
        })}

        {rows.map((row, index) => {
          const barHeight = (row.barValue / max) * 168;
          const x = 104 + index * 150;
          const y = 210 - barHeight;
          const fill = index === 0 ? "var(--live)" : "var(--brand)";

          return (
            <g key={row.phase}>
              <motion.rect
                x={x}
                y={y}
                width="62"
                height={barHeight}
                rx="8"
                fill={fill}
                initial={shouldReduceMotion ? {} : { scaleY: 0 }}
                animate={{ scaleY: active ? 1 : 0 }}
                transition={{ duration: 0.55, ease: EASE, delay: 0.12 + index * 0.12 }}
                style={{ transformOrigin: `${x + 31}px 210px` }}
              />
              <motion.text
                x={x + 31}
                y={Math.max(24, y - 10)}
                textAnchor="middle"
                fill={ink}
                fontSize="12"
                fontFamily="var(--font-ibm-plex-mono), monospace"
                fontWeight="600"
                initial={shouldReduceMotion ? {} : { opacity: 0, y: 6 }}
                animate={{ opacity: active ? 1 : 0, y: active ? 0 : 6 }}
                transition={{ duration: 0.35, ease: EASE, delay: 0.35 + index * 0.12 }}
              >
                {row.barLabel}
              </motion.text>
              <text x={x + 31} y="235" textAnchor="middle" fill={label} fontSize="11" fontFamily="var(--font-ibm-plex-mono), monospace">
                Y{index + 1}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}

export default function ScalingBudgetVisual({
  rows,
  trigger,
  dark = false,
}: ScalingBudgetVisualProps) {
  return (
    <div className="grid gap-5 lg:grid-cols-[1.3fr_0.9fr]">
      <div
        className={`overflow-hidden rounded-[14px] border ${
          dark ? "border-paper/12 bg-paper/[0.05]" : "border-line bg-white"
        }`}
      >
        <div className="grid gap-3 p-3 md:hidden">
          {rows.map((row) => (
            <div
              key={`${row.phase}-mobile`}
              className={`rounded-xl border p-4 ${
                dark ? "border-paper/10 bg-paper/[0.04]" : "border-line/70 bg-surface/60"
              }`}
            >
              <div className="mb-3 flex items-start justify-between gap-3">
                <h3 className={`font-sans text-sm font-semibold ${dark ? "text-paper" : "text-ink"}`}>
                  {row.phase}
                </h3>
                <span className={`shrink-0 font-mono text-[10px] ${dark ? "text-brand-soft" : "text-brand"}`}>
                  {row.scale}
                </span>
              </div>
              <dl className="grid gap-2">
                {[
                  ["Compute", row.compute],
                  ["Storage", row.storage],
                  ["Messaging", row.messaging],
                  ["Verification", row.verification],
                  ["Annual infra", row.annualInfra],
                ].map(([labelText, value]) => (
                  <div key={labelText} className="grid grid-cols-[92px_1fr] gap-3">
                    <dt className={`font-mono text-[9px] uppercase tracking-[0.12em] ${dark ? "text-paper/40" : "text-muted"}`}>
                      {labelText}
                    </dt>
                    <dd className={`text-xs leading-snug ${labelText === "Annual infra" ? "font-mono font-semibold" : ""} ${dark ? "text-paper/68" : "text-ink/78"}`}>
                      {value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          ))}
        </div>

        <div className="hidden md:block">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr className={dark ? "border-b border-paper/12" : "border-b border-line"}>
                {[
                  "Phase",
                  "Scale",
                  "Compute",
                  "Storage",
                  "Messaging",
                  "Verify",
                  "Annual infra",
                ].map((heading) => (
                  <th
                    key={heading}
                    className={`px-3 py-3 font-mono text-[9px] font-medium uppercase tracking-[0.14em] ${
                      dark ? "text-paper/45" : "text-muted"
                    }`}
                  >
                    {heading}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr
                  key={row.phase}
                  className={dark ? "border-b border-paper/10 last:border-none" : "border-b border-line/60 last:border-none"}
                >
                  <td className={`px-3 py-3 font-sans text-xs font-semibold ${dark ? "text-paper" : "text-ink"}`}>
                    {row.phase}
                  </td>
                  <td className={`px-3 py-3 font-mono text-[11px] ${dark ? "text-brand-soft" : "text-brand"}`}>
                    {row.scale}
                  </td>
                  <td className={`px-3 py-3 text-xs leading-snug ${dark ? "text-paper/62" : "text-muted"}`}>
                    {row.compute}
                  </td>
                  <td className={`px-3 py-3 font-mono text-[11px] ${dark ? "text-paper/62" : "text-muted"}`}>
                    {row.storage}
                  </td>
                  <td className={`px-3 py-3 text-xs ${dark ? "text-paper/62" : "text-muted"}`}>
                    {row.messaging}
                  </td>
                  <td className={`px-3 py-3 text-xs ${dark ? "text-paper/62" : "text-muted"}`}>
                    {row.verification}
                  </td>
                  <td className={`px-3 py-3 font-mono text-[11px] font-semibold whitespace-nowrap ${dark ? "text-paper" : "text-ink"}`}>
                    {row.annualInfra}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <DiagramImageFallback
        src="/diagrams/scaling.png"
        fallbackSrc="/diagrams/scalling.png"
        alt="Three-year consult volume and infrastructure scaling visual"
        dark={dark}
      >
        <ScalingBars rows={rows} trigger={trigger} dark={dark} />
      </DiagramImageFallback>
    </div>
  );
}
