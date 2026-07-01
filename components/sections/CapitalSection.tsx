"use client";

import { capitalContent } from "@/content/capital";
import { infraScalingRows } from "@/content/slides";
import ScrollReveal from "@/components/ScrollReveal";
import ScalingBudgetVisual from "@/components/diagrams/ScalingBudgetVisual";

export default function CapitalSection() {
  return (
    <section id="capital" className="py-20 md:py-28">
      <div className="section-container">
        <ScrollReveal>
          <h2
            className="font-display text-ink mb-6 max-w-2xl"
            style={{
              fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
              fontWeight: 420,
              lineHeight: 1.15,
            }}
          >
            {capitalContent.title}
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.06}>
          <p className="text-ink/90 text-base md:text-lg leading-relaxed max-w-2xl mb-12">
            {capitalContent.body}
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.12}>
          <div className="mb-12">
            <div className="mb-5 flex flex-wrap items-center gap-3">
              <h3 className="font-sans text-lg font-semibold text-ink">
                3-year infrastructure scaling
              </h3>
              <span className="rounded-full border border-live/30 bg-live/10 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-live">
                modeled, infra + services only
              </span>
            </div>
            <ScalingBudgetVisual rows={infraScalingRows} />
            <p className="mt-4 max-w-3xl font-mono text-xs leading-relaxed text-muted">
              Infra + services only; excludes team. Costs track consults/day — we pay for scale as it arrives, not before.
            </p>
          </div>
        </ScrollReveal>

        {/* Cost Table */}
        <ScrollReveal delay={0.18}>
          <div className="mb-12">
            <div className="grid gap-3 sm:hidden">
              {capitalContent.costTable.map((row) => (
                <div key={row.item} className="rounded-[14px] border border-line bg-surface p-4">
                  <div className="mb-2 flex items-start justify-between gap-3">
                    <h3 className="font-sans text-sm font-semibold text-ink">
                      {row.item}
                    </h3>
                    <span className="shrink-0 rounded bg-brand/8 px-2 py-0.5 font-mono text-[10px] tracking-wide text-brand/80">
                      {row.type}
                    </span>
                  </div>
                  <p className="mb-3 text-xs leading-relaxed text-muted">
                    {row.purpose}
                  </p>
                  <p className="font-mono text-sm font-semibold text-ink">
                    {row.estimate}
                  </p>
                </div>
              ))}
            </div>

            <table className="hidden w-full border-collapse text-sm sm:table">
              <thead>
                <tr className="border-b border-line">
                  <th className="text-left py-3 pr-4 font-mono text-[10px] tracking-[0.15em] text-muted font-medium uppercase">
                    Item
                  </th>
                  <th className="text-left py-3 pr-4 font-mono text-[10px] tracking-[0.15em] text-muted font-medium uppercase hidden sm:table-cell">
                    Purpose
                  </th>
                  <th className="text-left py-3 pr-4 font-mono text-[10px] tracking-[0.15em] text-muted font-medium uppercase">
                    Type
                  </th>
                  <th className="text-right py-3 font-mono text-[10px] tracking-[0.15em] text-muted font-medium uppercase">
                    Estimate
                  </th>
                </tr>
              </thead>
              <tbody>
                {capitalContent.costTable.map((row, i) => (
                  <tr
                    key={i}
                    className="border-b border-line/50 last:border-none"
                  >
                    <td className="py-3 pr-4 font-sans text-ink font-medium text-sm">
                      {row.item}
                      <span className="block sm:hidden text-muted text-xs font-normal mt-0.5">
                        {row.purpose}
                      </span>
                    </td>
                    <td className="py-3 pr-4 text-muted text-sm hidden sm:table-cell">
                      {row.purpose}
                    </td>
                    <td className="py-3 pr-4">
                      <span className="inline-block font-mono text-[10px] tracking-wide text-brand/80 bg-brand/8 px-2 py-0.5 rounded whitespace-nowrap">
                        {row.type}
                      </span>
                    </td>
                    <td className="py-3 text-right font-mono text-sm text-ink font-medium whitespace-nowrap">
                      {row.estimate}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </ScrollReveal>

        {/* Workstation Justification */}
        <ScrollReveal delay={0.24}>
          <div className="border border-brand/20 rounded-2xl p-6 md:p-8 bg-brand/[0.02]">
            <h3 className="font-sans font-semibold text-ink text-lg mb-4 flex items-start gap-3">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="var(--brand)"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="flex-shrink-0 mt-0.5"
              >
                <rect x="2" y="3" width="20" height="14" rx="2" />
                <path d="M8 21h8" />
                <path d="M12 17v4" />
                <path d="M7 8h2m2 0h2m2 0h2" />
                <path d="M7 12h10" />
              </svg>
              {capitalContent.workstationTitle}
            </h3>
            <ul className="space-y-3 mb-4">
              {capitalContent.workstationPoints.map((point, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-ink/80 text-sm leading-relaxed"
                >
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand flex-shrink-0" />
                  {point}
                </li>
              ))}
            </ul>
            <p className="text-muted text-xs italic font-mono leading-relaxed">
              {capitalContent.workstationFootnote}
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
