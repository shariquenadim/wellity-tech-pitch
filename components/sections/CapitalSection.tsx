"use client";

import { capitalContent } from "@/content/capital";
import ScrollReveal from "@/components/ScrollReveal";

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

        {/* Cost Table */}
        <ScrollReveal delay={0.12}>
          <div className="overflow-x-auto -mx-6 px-6 mb-12">
            <table className="w-full text-sm border-collapse min-w-[600px]">
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
                      <span className="inline-block font-mono text-[10px] tracking-wide text-primary/80 bg-primary/8 px-2 py-0.5 rounded whitespace-nowrap">
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
        <ScrollReveal delay={0.18}>
          <div className="border border-primary/20 rounded-2xl p-6 md:p-8 bg-primary/[0.02]">
            <h3 className="font-sans font-semibold text-ink text-lg mb-4 flex items-start gap-3">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="var(--primary)"
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
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
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
