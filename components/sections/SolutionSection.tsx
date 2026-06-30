"use client";

import { solutionContent } from "@/content/solution";
import ScrollReveal from "@/components/ScrollReveal";

export default function SolutionSection() {
  return (
    <section id="solution" className="py-20 md:py-28">
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

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
          {solutionContent.pillars.map((pillar, i) => (
            <ScrollReveal key={pillar.title} delay={i * 0.06}>
              <div className="card h-full">
                <h3 className="font-sans font-semibold text-ink text-base mb-2">
                  {pillar.title}
                </h3>
                <p className="text-muted text-sm leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
