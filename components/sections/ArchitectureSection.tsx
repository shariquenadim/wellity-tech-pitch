"use client";

import { technologyContent } from "@/content/technology";
import ScrollReveal from "@/components/ScrollReveal";
import ArchitectureDiagram from "@/components/diagrams/ArchitectureDiagram";

export default function ArchitectureSection() {
  return (
    <section id="architecture" className="py-20 md:py-28 bg-surface/50">
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
            {technologyContent.title}
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.06}>
          <p className="text-ink/90 text-base md:text-lg leading-relaxed max-w-2xl mb-12">
            {technologyContent.body}
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.12}>
          <ArchitectureDiagram />
        </ScrollReveal>
      </div>
    </section>
  );
}
