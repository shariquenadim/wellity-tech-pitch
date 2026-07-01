export type SlideDiagram = "systemOverview" | "stakeholderFlow" | "architecture";
export type SlideVariant = "standard" | "moneyUse" | "infraScaling" | "workstation";

export interface MoneyUseColumn {
  title: string;
  body: string;
}

export interface InfraScalingRow {
  phase: string;
  scale: string;
  compute: string;
  storage: string;
  messaging: string;
  verification: string;
  annualInfra: string;
  barLabel: string;
  barValue: number;
}

export interface Slide {
  id: string;
  sectionId: string;
  headline: string;
  points: string[];
  variant?: SlideVariant;
  footnote?: string;
  diagram?: SlideDiagram;
  tags?: string[];
  moneyUse?: MoneyUseColumn[];
  infraRows?: InfraScalingRow[];
  comparison?: {
    own: string;
    cloud: string;
    note: string;
  };
}

export const infraScalingRows: InfraScalingRow[] = [
  {
    phase: "Year 1 — Pilot",
    scale: "~50–150/day",
    compute: "1 VPS + backups (₹4–8k/mo)",
    storage: "₹0.5–1.5k/mo",
    messaging: "usage-based, low",
    verification: "onboarding spikes",
    annualInfra: "₹1.0L – 1.6L /yr",
    barLabel: "₹1.0L – 1.6L",
    barValue: 1.6,
  },
  {
    phase: "Year 2 — Expansion",
    scale: "~500–1,500/day",
    compute: "scaled VPS / small cluster (₹15–30k/mo)",
    storage: "₹2–5k/mo",
    messaging: "higher volume",
    verification: "steady",
    annualInfra: "₹3.0L – 5.0L /yr",
    barLabel: "₹3.0L – 5.0L",
    barValue: 5,
  },
  {
    phase: "Year 3 — Multi-region",
    scale: "~3,000–8,000/day",
    compute: "HA cluster + read replicas (₹50k–1L/mo)",
    storage: "₹8–20k/mo",
    messaging: "high volume",
    verification: "steady",
    annualInfra: "₹9L – 16L /yr",
    barLabel: "₹9L – 16L",
    barValue: 16,
  },
];

export const presentationSlides: Slide[] = [
  {
    id: "slide-founder",
    sectionId: "hero",
    headline: "[FOUNDER NAME] — Technical co-founder, platform & architecture.",
    points: [
      "Software engineer with banking-grade systems experience — payments, bulk data, compliance-heavy workflows.",
      "Building Wellity's technical foundation: real-time infrastructure, health-identity integration, audit-first design.",
    ],
    tags: ["BANKING-GRADE SYSTEMS", "B.TECH, NIT", "IEEE-PUBLISHED"],
  },
  {
    id: "slide-system",
    sectionId: "system",
    headline: "The pharmacy is the hub. Everything else is infrastructure.",
    points: [
      "Pharmacist runs guided intake → specialist joins live → signed Rx flows back out",
      "Real-time selection, health-ID integration, and audit trail — on networks that drop",
    ],
    diagram: "systemOverview",
  },
  {
    id: "slide-decisions",
    sectionId: "decisions",
    headline: "Decisions we already made.",
    points: [
      "SSE + polling fallback — not WebSockets. Survives 2G/3G drop-offs.",
      "Atomic accept with row-level lock — no double-booking, ever.",
      "House-doctor fallback — the marketplace is never empty.",
      "ABHA graceful degradation — consult proceeds; health ID links later.",
      "Signed Rx via stored signature + reg. number — legally valid, zero per-Rx cost.",
    ],
    footnote:
      "None of these are visible in a demo. All of them are why a real engineering team is needed.",
  },
  {
    id: "slide-flows",
    sectionId: "flows",
    headline: "Three roles, one clean loop.",
    points: [
      "Pharmacy: onboard → register patient → select doctor (live) → print Rx + dispense",
      "Patient: walk in → consent OTP → consult → receive medicine (no app needed)",
      "Doctor: verify → go live → bid (atomic) → consult → write note + signed Rx",
    ],
    diagram: "stakeholderFlow",
  },
  {
    id: "slide-architecture",
    sectionId: "architecture",
    headline: "The stack, deliberately lean.",
    points: [
      "One well-chosen VPS · Postgres · R2 object storage",
      "India-hosted for data residency · Local AI workstation for Phase 2",
    ],
    diagram: "architecture",
  },
  {
    id: "slide-phases",
    sectionId: "phases",
    headline: "Ship the loop now. Build the data moat next.",
    points: [
      "Phase 1: pharmacy hub, verified doctors, live selection, compliant prescriptions. No AI in the critical path.",
      "Phase 2: every consult → structured, consented clinical data → vernacular voice-to-EMR pipeline.",
      "We run a local AI workstation: in-house models, no per-token cost, health data on-prem.",
    ],
    footnote:
      "The moat isn't the video call. It's the structured, multilingual health data only this channel produces.",
  },
  {
    id: "slide-compliance",
    sectionId: "compliance",
    headline: "Compliance is the foundation, not a feature.",
    points: [
      "ABDM / FHIR — aligned with India's national health stack, tender-eligible",
      "DPDP Act — purpose-specific consent; health data never repurposed for marketing",
      "Audit everywhere — immutable who/what/when logs, backups are first-class",
      "Verified identities — doctors and facilities checked at onboarding",
    ],
  },
  {
    id: "slide-money-use",
    sectionId: "capital",
    headline: "What the money is for.",
    variant: "moneyUse",
    points: [],
    moneyUse: [
      {
        title: "Build",
        body: "AI/dev workstation for in-house model R&D (voice-to-EMR) + AI-assisted development. One-time capex.",
      },
      {
        title: "Run",
        body: "India-hosted VPS, backups, object storage, business email. Keeps the platform live, compliant, and data-resident.",
      },
      {
        title: "Reach",
        body: "WhatsApp Business API + verification APIs (Aadhaar/PAN/licence). The per-transaction rails that move records and onboard doctors/pharmacies safely.",
      },
    ],
    footnote:
      "Infra + services only. Lean by design — the ask scales with usage, not ahead of it.",
  },
  {
    id: "slide-infra-scaling",
    sectionId: "capital",
    headline: "3-year infrastructure scaling.",
    variant: "infraScaling",
    points: ["Modeled, infra + services only", "One-time AI/dev workstation: ₹2.2L – 2.8L, Year 1 capex, reused across all 3 years"],
    infraRows: infraScalingRows,
    footnote:
      "Infra + services only; excludes team. Costs track consults/day — we pay for scale as it arrives, not before.",
  },
  {
    id: "slide-workstation",
    sectionId: "capital",
    headline: "Why own the workstation.",
    variant: "workstation",
    points: [
      "One-time capex vs. open-ended monthly cloud-GPU bills.",
      "Phase 2 model work runs locally — no per-token cost while benchmarking the voice-to-EMR pipeline.",
      "Health data stays on-premise during R&D — a DPDP advantage, not just a cost one.",
      "Doubles as AI-assisted development hardware for a lean team.",
    ],
    comparison: {
      own: "OWN: ~₹2.5L one-time",
      cloud: "CLOUD GPU: ~₹X/mo, indefinite",
      note: "Crosses break-even within months, then keeps charging.",
    },
  },
  {
    id: "slide-close",
    sectionId: "close",
    headline: "The trust already exists. We're giving it a specialist.",
    points: [
      "What's built: three stakeholder flows finalized · Marketing site live · Onboarding backend in development",
      "Architecture scoped · Compliance approach finalized · Vendor groundwork done",
      "Wellity HealthCare — last-mile telemedicine infrastructure for the India that needs it most.",
    ],
  },
];
