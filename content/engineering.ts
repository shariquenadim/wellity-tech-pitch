export interface EngineeringDecision {
  id: string;
  constraint: string;
  decision: string;
}

export const engineeringContent = {
  title: "Decisions we already made.",
  caption:
    "None of these are visible in a demo. All of them are why a real engineering team is needed — and why the platform holds up when it's audited.",
  decisions: [
    {
      id: "network",
      constraint: "Rural 2G/3G drops connections mid-flow.",
      decision:
        "Server-sent events with a polling fallback for live doctor selection — not raw WebSockets. Lower overhead, survives flaky networks, reconnects cleanly.",
    },
    {
      id: "double-booking",
      constraint: "Two pharmacies can grab the same live doctor at the same instant.",
      decision:
        "Atomic accept with a row-level lock + idempotency key. A doctor moves available → in-consult in one transaction. No double-booking, ever.",
    },
    {
      id: "fallback",
      constraint: "If a pharmacist opens the app to an empty doctor list, trust dies.",
      decision:
        "A salaried house-doctor fallback. If no specialist accepts within the window, a Wellity doctor is auto-assigned. The marketplace is never empty.",
    },
    {
      id: "abha",
      constraint:
        "Health IDs can't always be created on the spot (Aadhaar-mobile mismatch is common rurally).",
      decision:
        "ABHA fetch/create with graceful degradation — the consultation proceeds without blocking, the health ID links later. Compliance without a dead end.",
    },
    {
      id: "prescription",
      constraint:
        "Per-prescription Aadhaar OTP is too much friction at consult volume, and govt OTP latency is unreliable.",
      decision:
        "Phase 1 prescriptions are signed with the doctor's stored signature + medical-council registration number + an immutable, tamper-evident audit log — legally valid for telemedicine, zero per-prescription cost. Cryptographic org-level signing is a Phase 2 upgrade, not a launch blocker.",
    },
    {
      id: "phi",
      constraint: "Health data over WhatsApp/SMS is a DPDP and policy violation.",
      decision:
        "We never send records in a message body. We send an authenticated link to the ABHA-linked record. Re-auth to open. PHI never travels in plain text.",
    },
    {
      id: "consent",
      constraint: "\"Consent\" given verbally isn't legally demonstrable.",
      decision:
        "A patient-phone OTP at consult start = identity + consent + timestamp in one step. Purpose-specific consent, separated from any marketing opt-in (DPDP-clean).",
    },
  ] as EngineeringDecision[],
} as const;
