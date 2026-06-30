export interface Slide {
  id: string;
  sectionId: string;
  headline: string;
  points: string[];
  footnote?: string;
  diagram?: "systemOverview" | "stakeholderFlow" | "architecture";
  tags?: string[];
}

export const presentationSlides: Slide[] = [
  {
    id: "slide-title",
    sectionId: "hero",
    headline: "Specialist care, delivered through the pharmacy next door.",
    points: [
      "B2B telemedicine infrastructure for rural and Tier 2/3 India",
      "Pharmacies become compliant care hubs — no app for patients to learn",
      "Engineered for low-bandwidth India, built on ABDM, audited end to end",
    ],
  },
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
    id: "slide-gap",
    sectionId: "problem",
    headline: "The gap is structural. The channel is hiding in plain sight.",
    points: [
      "70%+ of doctors are in cities. 72% of patients aren't.",
      "The trusted point of contact in rural India is the local pharmacy.",
      "That's where we put the doctor.",
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
    id: "slide-capital",
    sectionId: "capital",
    headline: "Strong architecture, deliberately low cost.",
    points: [
      "₹2.2–2.8L one-time workstation replaces open-ended cloud-GPU bills",
      "~₹5–10k/mo total infra — VPS + backups + object storage",
      "Health data on-premise during R&D — a DPDP advantage",
      "The ask is focused tooling, not premature scale",
    ],
  },
  {
    id: "slide-close",
    sectionId: "close",
    headline: "The trust already exists. We're giving it a specialist.",
    points: [
      "Three stakeholder flows finalized · Marketing site live · Architecture scoped · Vendor groundwork done",
      "Wellity HealthCare — last-mile telemedicine infrastructure for the India that needs it most.",
    ],
  },
];
