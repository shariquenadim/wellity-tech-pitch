export interface Slide {
  id: string;
  sectionId: string;
  headline: string;
  points: string[];
  footnote?: string;
}

export const presentationSlides: Slide[] = [
  {
    id: "slide-hero",
    sectionId: "hero",
    headline: "Specialist care, delivered through the pharmacy next door.",
    points: [
      "B2B telemedicine platform for rural and Tier 2/3 India",
      "Pharmacies become telemedicine hubs — no app for patients to learn",
      "Low-bandwidth, fully compliant, verified doctors",
    ],
  },
  {
    id: "slide-problem",
    sectionId: "problem",
    headline: "The access gap is structural, not temporary.",
    points: [
      "70%+ of doctors concentrated in urban areas",
      "72% of citizens in rural and peri-urban regions",
      "The trusted point of contact is the local pharmacy — we build on it",
    ],
  },
  {
    id: "slide-solution",
    sectionId: "solution",
    headline: "The pharmacy becomes the hub.",
    points: [
      "Simple dashboard + guided intake + live specialist connection",
      "Low-bandwidth first — works on 2G/3G",
      "Every doctor verified, every record compliant",
    ],
  },
  {
    id: "slide-flows",
    sectionId: "flows",
    headline: "Three roles. One clean loop.",
    points: [
      "Pharmacy: onboard → register patient → select doctor (live) → dispense",
      "Patient: walk in → consent → consult → receive care (no app needed)",
      "Doctor: verify → go live → bid → consult → prescribe with audit trail",
    ],
  },
  {
    id: "slide-technology",
    sectionId: "technology",
    headline: "Built lean, built correct.",
    points: [
      "SSE with polling fallback — survives rural connections",
      "ABHA / ABDM native with graceful degradation",
      "Tamper-evident prescriptions, full audit logs",
      "Cost-disciplined infra — VPS + object storage + local AI workstation",
    ],
  },
  {
    id: "slide-phases",
    sectionId: "phases",
    headline: "Ship the loop now. Build the moat next.",
    points: [
      "Phase 1: working, legal, trusted consultation — end to end",
      "Phase 2: vernacular voice-to-EMR pipeline on structured clinical data",
      "The moat is the multilingual health data only this channel produces",
    ],
  },
  {
    id: "slide-compliance",
    sectionId: "compliance",
    headline: "Compliance isn't a feature. It's the foundation.",
    points: [
      "ABDM / FHIR aligned — tender- and partner-eligible",
      "DPDP Act: purpose-specific consent, no data repurposing",
      "Every action logged immutably — audit-first architecture",
    ],
  },
  {
    id: "slide-capital",
    sectionId: "capital",
    headline: "Strong architecture, deliberately low cost.",
    points: [
      "₹2.2–2.8L one-time workstation replaces open-ended cloud-GPU bills",
      "₹5–10k/mo total infra — VPS + storage + backups",
      "Health data on-premise during R&D — DPDP advantage",
      "The ask is focused tooling, not premature scale",
    ],
  },
  {
    id: "slide-traction",
    sectionId: "traction",
    headline: "Already in motion.",
    points: [
      "Three stakeholder flows finalized",
      "Marketing site live — wellitycare.com",
      "Onboarding backend started (GitHub)",
      "Architecture, compliance approach, and vendor groundwork done",
    ],
  },
  {
    id: "slide-close",
    sectionId: "close",
    headline: "The trust already exists. We're giving it a specialist.",
    points: [
      "Last-mile telemedicine, built for the India that needs it most",
    ],
  },
];
