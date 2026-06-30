"use client";

import { technologyContent } from "@/content/technology";
import ScrollReveal from "@/components/ScrollReveal";

function ArchitectureDiagram() {
  return (
    <div className="w-full overflow-x-auto -mx-6 px-6">
      <svg
        viewBox="0 0 820 340"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full max-w-[820px] mx-auto"
        role="img"
        aria-label="System architecture diagram: clients connect through app layer to storage and external services"
      >
        {/* ——— Column 1: Clients ——— */}
        <rect x="10" y="80" width="140" height="56" rx="10" fill="var(--surface)" stroke="var(--line)" strokeWidth="1" />
        <text x="80" y="104" textAnchor="middle" fill="var(--primary)" fontSize="10" fontFamily="var(--font-ibm-plex-mono), monospace" letterSpacing="0.05em">PHARMACY</text>
        <text x="80" y="122" textAnchor="middle" fill="var(--muted)" fontSize="10" fontFamily="var(--font-ibm-plex-mono), monospace">Dashboard</text>

        <rect x="10" y="200" width="140" height="56" rx="10" fill="var(--surface)" stroke="var(--line)" strokeWidth="1" />
        <text x="80" y="224" textAnchor="middle" fill="var(--primary)" fontSize="10" fontFamily="var(--font-ibm-plex-mono), monospace" letterSpacing="0.05em">DOCTOR</text>
        <text x="80" y="242" textAnchor="middle" fill="var(--muted)" fontSize="10" fontFamily="var(--font-ibm-plex-mono), monospace">Dashboard</text>

        {/* ——— Arrows: Clients → App Layer ——— */}
        <line x1="150" y1="108" x2="260" y2="158" stroke="var(--line)" strokeWidth="1.5" />
        <line x1="150" y1="228" x2="260" y2="178" stroke="var(--line)" strokeWidth="1.5" />
        <polygon points="256,154 264,158 256,162" fill="var(--line)" />
        <polygon points="256,174 264,178 256,182" fill="var(--line)" />

        {/* ——— Column 2: App Layer ——— */}
        <rect x="260" y="120" width="160" height="100" rx="12" fill="var(--primary)" fillOpacity="0.07" stroke="var(--primary)" strokeWidth="1.5" strokeDasharray="none" />
        <text x="340" y="148" textAnchor="middle" fill="var(--primary)" fontSize="10" fontFamily="var(--font-ibm-plex-mono), monospace" fontWeight="600" letterSpacing="0.05em">APP LAYER</text>
        <text x="340" y="170" textAnchor="middle" fill="var(--muted)" fontSize="10" fontFamily="var(--font-ibm-plex-mono), monospace">Next.js · FastAPI</text>
        <text x="340" y="188" textAnchor="middle" fill="var(--muted)" fontSize="10" fontFamily="var(--font-ibm-plex-mono), monospace">SSE + REST</text>
        <text x="340" y="206" textAnchor="middle" fill="var(--muted)" fontSize="10" fontFamily="var(--font-ibm-plex-mono), monospace">Auth · RBAC</text>

        {/* ——— Arrows: App Layer → Storage ——— */}
        <line x1="420" y1="160" x2="510" y2="108" stroke="var(--line)" strokeWidth="1.5" />
        <line x1="420" y1="180" x2="510" y2="228" stroke="var(--line)" strokeWidth="1.5" />
        <polygon points="506,104 514,108 506,112" fill="var(--line)" />
        <polygon points="506,224 514,228 506,232" fill="var(--line)" />

        {/* ——— Column 3: Storage ——— */}
        <rect x="510" y="80" width="140" height="56" rx="10" fill="var(--surface)" stroke="var(--line)" strokeWidth="1" />
        <text x="580" y="104" textAnchor="middle" fill="var(--primary)" fontSize="10" fontFamily="var(--font-ibm-plex-mono), monospace" letterSpacing="0.05em">POSTGRES</text>
        <text x="580" y="122" textAnchor="middle" fill="var(--muted)" fontSize="10" fontFamily="var(--font-ibm-plex-mono), monospace">Records · Audit</text>

        <rect x="510" y="200" width="140" height="56" rx="10" fill="var(--surface)" stroke="var(--line)" strokeWidth="1" />
        <text x="580" y="224" textAnchor="middle" fill="var(--primary)" fontSize="10" fontFamily="var(--font-ibm-plex-mono), monospace" letterSpacing="0.05em">OBJECT STORE</text>
        <text x="580" y="242" textAnchor="middle" fill="var(--muted)" fontSize="10" fontFamily="var(--font-ibm-plex-mono), monospace">R2 · Documents</text>

        {/* ——— Arrows: Storage → External ——— */}
        <line x1="650" y1="108" x2="690" y2="68" stroke="var(--line)" strokeWidth="1.5" strokeDasharray="4 3" />
        <line x1="650" y1="108" x2="690" y2="148" stroke="var(--line)" strokeWidth="1.5" strokeDasharray="4 3" />
        <line x1="650" y1="228" x2="690" y2="248" stroke="var(--line)" strokeWidth="1.5" strokeDasharray="4 3" />

        {/* ——— Column 4: External Services ——— */}
        <rect x="690" y="40" width="120" height="44" rx="8" fill="none" stroke="var(--line)" strokeWidth="1" strokeDasharray="4 3" />
        <text x="750" y="58" textAnchor="middle" fill="var(--muted)" fontSize="9" fontFamily="var(--font-ibm-plex-mono), monospace" letterSpacing="0.05em">ABDM</text>
        <text x="750" y="74" textAnchor="middle" fill="var(--muted)" fontSize="9" fontFamily="var(--font-ibm-plex-mono), monospace">Health ID</text>

        <rect x="690" y="120" width="120" height="56" rx="8" fill="none" stroke="var(--line)" strokeWidth="1" strokeDasharray="4 3" />
        <text x="750" y="142" textAnchor="middle" fill="var(--muted)" fontSize="9" fontFamily="var(--font-ibm-plex-mono), monospace" letterSpacing="0.05em">VERIFICATION</text>
        <text x="750" y="158" textAnchor="middle" fill="var(--muted)" fontSize="9" fontFamily="var(--font-ibm-plex-mono), monospace">eSign · Aadhaar</text>
        <text x="750" y="170" textAnchor="middle" fill="var(--muted)" fontSize="9" fontFamily="var(--font-ibm-plex-mono), monospace">PAN · Licence</text>

        <rect x="690" y="220" width="120" height="44" rx="8" fill="none" stroke="var(--line)" strokeWidth="1" strokeDasharray="4 3" />
        <text x="750" y="238" textAnchor="middle" fill="var(--muted)" fontSize="9" fontFamily="var(--font-ibm-plex-mono), monospace" letterSpacing="0.05em">WHATSAPP</text>
        <text x="750" y="254" textAnchor="middle" fill="var(--muted)" fontSize="9" fontFamily="var(--font-ibm-plex-mono), monospace">Business API</text>

        {/* ——— Labels ——— */}
        <text x="80" y="40" textAnchor="middle" fill="var(--muted)" fontSize="9" fontFamily="var(--font-ibm-plex-mono), monospace" letterSpacing="0.1em" opacity="0.6">CLIENTS</text>
        <text x="340" y="40" textAnchor="middle" fill="var(--muted)" fontSize="9" fontFamily="var(--font-ibm-plex-mono), monospace" letterSpacing="0.1em" opacity="0.6">APPLICATION</text>
        <text x="580" y="40" textAnchor="middle" fill="var(--muted)" fontSize="9" fontFamily="var(--font-ibm-plex-mono), monospace" letterSpacing="0.1em" opacity="0.6">STORAGE</text>
        <text x="750" y="20" textAnchor="middle" fill="var(--muted)" fontSize="9" fontFamily="var(--font-ibm-plex-mono), monospace" letterSpacing="0.1em" opacity="0.6">EXTERNAL</text>
      </svg>
    </div>
  );
}

export default function TechnologySection() {
  return (
    <section id="technology" className="py-20 md:py-28 bg-surface/50">
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

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mb-16">
          {technologyContent.pillars.map((pillar, i) => (
            <ScrollReveal key={pillar.label} delay={i * 0.06}>
              <div className="card h-full">
                <span className="inline-block font-mono text-[10px] tracking-[0.15em] text-primary/70 bg-primary/8 px-2 py-0.5 rounded mb-3">
                  {pillar.label}
                </span>
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

        <ScrollReveal delay={0.3}>
          <ArchitectureDiagram />
        </ScrollReveal>
      </div>
    </section>
  );
}
