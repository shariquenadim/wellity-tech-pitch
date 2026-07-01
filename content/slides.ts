export type SlideDiagram =
  | "systemOverview"
  | "stakeholderFlow"
  | "flowOverview"
  | "flowDetail"
  | "architecture";
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
    annualInfra: "₹1.5L – 2.1L /yr",
    barLabel: "₹1.5L – 2.1L",
    barValue: 2.1,
  },
  {
    phase: "Year 2 — Expansion",
    scale: "~500–1,500/day",
    compute: "scaled VPS / small cluster (₹15–30k/mo)",
    storage: "₹2–5k/mo",
    messaging: "higher volume",
    verification: "steady",
    annualInfra: "₹3.5L – 5.5L /yr",
    barLabel: "₹3.5L – 5.5L",
    barValue: 5.5,
  },
  {
    phase: "Year 3 — Multi-region",
    scale: "~3,000–8,000/day",
    compute: "HA cluster + read replicas (₹50k–1L/mo)",
    storage: "₹8–20k/mo",
    messaging: "high volume",
    verification: "steady",
    annualInfra: "₹9.5L – 16.5L /yr",
    barLabel: "₹9.5L – 16.5L",
    barValue: 16.5,
  },
];

export const presentationSlides: Slide[] = [
  {
    id: "slide-intro",
    sectionId: "hero",
    headline: "India trusts its neighborhood pharmacy. We're turning that trust into verified healthcare access.",
    points: [
      "Most Indians live nearer a pharmacy than a qualified doctor — the pharmacy is already the health touchpoint, just an informal, unverified one.",
      "Wellity turns that walk-in into a verified specialist consult, a signed prescription, and a compliant health record — in one visit, no app required.",
      "This deck is the case for funding the engineering that makes that loop real, compliant, and built to scale.",
    ],
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
    diagram: "flowOverview",
  },
  {
    id: "slide-flows-detail",
    sectionId: "flows",
    headline: "Inside the loop: the pharmacy hub.",
    points: [
      "Eight steps, one continuous session — from verified onboarding to a signed Rx in the patient's hand.",
      "Only two steps carry real-time risk — live doctor selection and atomic accept — and both are already engineered.",
    ],
    diagram: "flowDetail",
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
    id: "slide-data-value",
    sectionId: "phases",
    headline: "Indian medical data, done right, is worth more than the consult.",
    points: [
      "India's structured, consented clinical data barely exists at population scale today — most health history lives on paper, in fragmented apps, or nowhere at all.",
      "Every Wellity consult becomes ABDM/FHIR-aligned, DPDP-consented, structured clinical data — multilingual, point-of-care, impossible to fake.",
      "Cleaned, structured, and stored compliantly, that dataset isn't a byproduct — it's worth crores to research, population health, and AI training, and it compounds with every consult.",
    ],
    footnote:
      "We don't sell health data. We build the asset that makes Phase 2 — and everything after it — defensible.",
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
    points: ["Modeled, infra + services only", "One-time AI/dev workstation: ₹3.5L, Year 1 capex, reused across all 3 years"],
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
      own: "OWN: ~₹3.5L one-time",
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
