"use client";

import { phasesContent } from "@/content/phases";
import ScrollReveal from "@/components/ScrollReveal";

export default function PhasesSection() {
  return (
    <section id="phases" className="py-20 md:py-28">
      <div className="section-container">
        <ScrollReveal>
          <h2
            className="font-display text-ink mb-12 max-w-2xl"
            style={{
              fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
              fontWeight: 420,
              lineHeight: 1.15,
            }}
          >
            {phasesContent.title}
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 mb-10">
          {/* Phase 1 */}
          <ScrollReveal delay={0.06}>
            <div className="card h-full">
              <h3 className="font-sans font-semibold text-ink text-lg mb-4">
                {phasesContent.phase1.title}
              </h3>
              <ul className="space-y-3">
                {phasesContent.phase1.points.map((point, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-muted text-sm leading-relaxed"
                  >
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          {/* Phase 2 */}
          <ScrollReveal delay={0.12}>
            <div className="card h-full border-primary/20 bg-primary/[0.03]">
              <h3 className="font-sans font-semibold text-ink text-lg mb-4">
                {phasesContent.phase2.title}
              </h3>
              <ul className="space-y-3">
                {phasesContent.phase2.points.map((point, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-muted text-sm leading-relaxed"
                  >
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={0.18}>
          <p className="text-muted text-xs font-mono italic leading-relaxed max-w-2xl">
            {phasesContent.caption}
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
