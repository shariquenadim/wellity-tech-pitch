"use client";

import { tractionContent } from "@/content/traction";
import ScrollReveal from "@/components/ScrollReveal";

export default function TractionSection() {
  return (
    <section id="traction" className="py-20 md:py-28 bg-surface/50">
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
            {tractionContent.title}
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 mb-10">
          {tractionContent.items.map((item, i) => (
            <ScrollReveal key={item.title} delay={i * 0.06}>
              <div className="card h-full">
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 flex-shrink-0">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <circle
                        cx="10"
                        cy="10"
                        r="9"
                        stroke="var(--ok)"
                        strokeWidth="1.5"
                        fill="var(--ok)"
                        fillOpacity="0.1"
                      />
                      <path
                        d="M6 10l3 3 5-5"
                        stroke="var(--ok)"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-sans font-semibold text-ink text-sm mb-1">
                      {item.title}
                    </h3>
                    <p className="text-muted text-xs leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.3}>
          <p className="text-muted text-xs italic leading-relaxed max-w-2xl">
            {tractionContent.footnote}
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
