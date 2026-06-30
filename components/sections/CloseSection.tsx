"use client";

import { closeContent } from "@/content/close";
import ScrollReveal from "@/components/ScrollReveal";
import ConsultationPulse from "@/components/ConsultationPulse";

export default function CloseSection() {
  return (
    <section id="close" className="py-24 md:py-32">
      <div className="section-container text-center">
        <ScrollReveal>
          <div className="flex justify-center mb-10">
            <ConsultationPulse size="md" />
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.06}>
          <h2
            className="font-display text-ink mb-6 max-w-2xl mx-auto"
            style={{
              fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
              fontWeight: 420,
              lineHeight: 1.15,
            }}
          >
            {closeContent.headline}
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.12}>
          <p className="text-muted text-base md:text-lg leading-relaxed max-w-xl mx-auto mb-10">
            {closeContent.sub}
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.18}>
          <div className="inline-block border border-line rounded-xl p-6 bg-surface/50">
            <p className="font-mono text-sm text-brand font-medium mb-1">
              {closeContent.founderName}
            </p>
            <p className="font-mono text-xs text-muted">
              {closeContent.founderEmail}
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
