"use client";

import { engineeringContent } from "@/content/engineering";
import ScrollReveal from "@/components/ScrollReveal";

export default function EngineeringDecisionsSection() {
  return (
    <section id="decisions" className="py-20 md:py-28 bg-surface/50">
      <div className="section-container">
        <ScrollReveal>
          <h2
            className="font-display text-ink mb-4 max-w-2xl"
            style={{
              fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
              fontWeight: 420,
              lineHeight: 1.15,
            }}
          >
            {engineeringContent.title}
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-5 mt-10 mb-10">
          {engineeringContent.decisions.map((d, i) => (
            <ScrollReveal key={d.id} delay={i * 0.05}>
              <div className="card h-full flex gap-4 items-start">
                {/* Constraint (left) */}
                <div className="flex-shrink-0 w-1 self-stretch rounded-full bg-brand/20" />
                <div className="flex-1 min-w-0">
                  <p className="font-mono text-[10px] tracking-[0.12em] text-brand/60 uppercase mb-1.5">
                    Constraint
                  </p>
                  <p className="font-sans text-sm text-muted leading-relaxed mb-3 italic">
                    {d.constraint}
                  </p>
                  <p className="font-mono text-[10px] tracking-[0.12em] text-brand uppercase mb-1.5">
                    Decision
                  </p>
                  <p className="font-sans text-sm text-ink leading-relaxed">
                    {d.decision}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.3}>
          <p className="text-muted text-xs font-mono italic leading-relaxed max-w-2xl">
            {engineeringContent.caption}
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
