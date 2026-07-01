"use client";

import { useState } from "react";
import { stakeholderFlows, flowsIntro } from "@/content/flows";
import ScrollReveal from "@/components/ScrollReveal";
import StakeholderFlowDiagram from "@/components/diagrams/StakeholderFlowDiagram";

export default function FlowsSection() {
  const [activeFlow, setActiveFlow] = useState(0);
  const currentFlow = stakeholderFlows[activeFlow];

  return (
    <section id="flows" className="py-20 md:py-28">
      <div className="section-container">
        <ScrollReveal>
          <h2
            className="font-display text-ink mb-4"
            style={{
              fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
              fontWeight: 420,
              lineHeight: 1.15,
            }}
          >
            How it works
          </h2>
          <p className="font-sans text-lg text-ink font-medium mb-8">
            {flowsIntro}
          </p>
        </ScrollReveal>

        {/* Tab navigation */}
        <ScrollReveal delay={0.06}>
          <div className="flex gap-1 mb-10 bg-surface rounded-xl p-1 w-fit border border-line">
            {stakeholderFlows.map((flow, i) => (
              <button
                key={flow.id}
                onClick={() => setActiveFlow(i)}
                className={`min-h-11 px-4 py-2 rounded-lg text-sm font-sans font-medium transition-all focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-1 ${
                  activeFlow === i
                    ? "bg-brand text-white shadow-sm"
                    : "text-muted hover:text-ink hover:bg-white/60"
                }`}
                aria-pressed={activeFlow === i}
              >
                {flow.label}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Flow subtitle */}
        <ScrollReveal delay={0.12}>
          <p className="text-muted text-sm font-mono mb-6 tracking-wide">
            {currentFlow.subtitle.toUpperCase()}
          </p>
        </ScrollReveal>

        {/* Stakeholder flow diagram */}
        <ScrollReveal delay={0.18}>
          <StakeholderFlowDiagram
            flow={currentFlow}
          />
        </ScrollReveal>
      </div>
    </section>
  );
}
