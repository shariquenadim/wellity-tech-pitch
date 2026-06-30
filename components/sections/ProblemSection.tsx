"use client";

import { problemContent } from "@/content/problem";
import ScrollReveal from "@/components/ScrollReveal";

export default function ProblemSection() {
  return (
    <section id="problem" className="py-20 md:py-28">
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
            {problemContent.title}
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 mb-12">
          {problemContent.stats.map((stat, i) => (
            <ScrollReveal key={stat.number} delay={i * 0.06}>
              <div className="card text-center py-8 md:py-10">
                <p
                  className="font-mono text-primary mb-3"
                  style={{
                    fontSize: "clamp(2.5rem, 5vw, 3.5rem)",
                    fontWeight: 600,
                    lineHeight: 1,
                  }}
                >
                  {stat.number}
                </p>
                <p className="text-muted text-sm md:text-base leading-relaxed">
                  {stat.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <p className="text-ink/90 text-base md:text-lg leading-relaxed max-w-2xl">
            Primary care in these regions is fragmented. The trusted point of
            contact isn&apos;t a hospital — it&apos;s the{" "}
            <strong className="font-semibold text-ink">
              local pharmacy or diagnostic centre
            </strong>
            . That existing trust is the channel everyone else ignores. We build
            on it instead of around it.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
