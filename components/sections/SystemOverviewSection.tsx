"use client";

import { solutionContent } from "@/content/solution";
import ScrollReveal from "@/components/ScrollReveal";
import SystemOverviewDiagram from "@/components/diagrams/SystemOverviewDiagram";

export default function SystemOverviewSection() {
  return (
    <section id="system" className="py-20 md:py-28">
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
            {solutionContent.title}
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.06}>
          <p className="text-ink/90 text-base md:text-lg leading-relaxed max-w-2xl mb-12">
            {solutionContent.body}
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.12}>
          <div className="mb-12 py-8 border-y border-line/50">
            <SystemOverviewDiagram />
          </div>
        </ScrollReveal>

        <div className="flex flex-wrap gap-3">
          {solutionContent.pillars.map((pillar, i) => (
            <ScrollReveal key={pillar.title} delay={i * 0.05}>
              <div className="border border-line rounded-lg px-4 py-2.5 bg-surface/60">
                <span className="font-sans font-semibold text-ink text-sm">
                  {pillar.title}
                </span>
                <span className="mx-2 text-line">·</span>
                <span className="text-muted text-sm">{pillar.description}</span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
