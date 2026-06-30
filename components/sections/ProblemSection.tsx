"use client";

import { problemContent } from "@/content/problem";
import ScrollReveal from "@/components/ScrollReveal";

export default function ProblemSection() {
  return (
    <section id="problem" className="py-12 md:py-16">
      <div className="section-container">
        <ScrollReveal>
          <p className="text-ink/90 text-base md:text-lg leading-relaxed max-w-2xl mb-8">
            {problemContent.body}
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.06}>
          <div className="flex flex-col sm:flex-row gap-0 divide-y sm:divide-y-0 sm:divide-x divide-line/50 border border-line/50 rounded-xl overflow-hidden bg-surface/40">
            {problemContent.stats.map((stat) => (
              <div
                key={stat.number}
                className="flex-1 flex flex-col items-center text-center py-6 px-4"
              >
                <p
                  className="font-mono text-brand mb-1.5"
                  style={{ fontSize: "clamp(2rem, 4vw, 2.75rem)", fontWeight: 600, lineHeight: 1 }}
                >
                  {stat.number}
                </p>
                <p className="text-muted text-xs leading-relaxed">{stat.description}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
