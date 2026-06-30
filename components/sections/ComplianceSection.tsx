"use client";

import React from "react";
import { complianceContent } from "@/content/compliance";
import ScrollReveal from "@/components/ScrollReveal";

export default function ComplianceSection() {
  const icons: Record<string, React.ReactNode> = {
    "ABDM / FHIR": (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
    "DPDP Act": (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" />
        <path d="M7 11V7a5 5 0 0110 0v4" />
      </svg>
    ),
    "Audit everywhere": (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
        <path d="M14 2v6h6" />
        <path d="M16 13H8" />
        <path d="M16 17H8" />
        <path d="M10 9H8" />
      </svg>
    ),
    "Verified identities": (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  };

  return (
    <section id="compliance" className="py-20 md:py-28 bg-surface/50">
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
            {complianceContent.title}
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mb-10">
          {complianceContent.cards.map((card, i) => (
            <ScrollReveal key={card.title} delay={i * 0.06}>
              <div className="card h-full">
                <div className="mb-3">{icons[card.title]}</div>
                <h3 className="font-sans font-semibold text-ink text-base mb-2">
                  {card.title}
                </h3>
                <p className="text-muted text-sm leading-relaxed">
                  {card.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.3}>
          <p className="text-muted text-xs italic leading-relaxed max-w-2xl">
            {complianceContent.footnote}
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
