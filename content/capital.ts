export interface CostRow {
  item: string;
  purpose: string;
  type: string;
  estimate: string;
}

export const capitalContent = {
  title: "Strong architecture, deliberately low cost.",
  body: "We chose every piece of infrastructure to do more with less. The ask isn't for scale we don't need yet — it's for the focused tooling that lets a small team ship a compliant platform and build the AI advantage in-house.",
  costTable: [
    {
      item: "AI / dev workstation",
      purpose:
        "Local model R&D (voice-to-EMR), AI-assisted development, data kept on-prem",
      type: "One-time",
      estimate: "₹2.2L – 2.8L",
    },
    {
      item: "Application VPS",
      purpose:
        "App + database, India-hosted (low latency, data residency)",
      type: "Monthly",
      estimate: "₹3k – 6k",
    },
    {
      item: "Backup & snapshots",
      purpose: "Disaster recovery, audit-log retention",
      type: "Monthly",
      estimate: "₹1k – 2k",
    },
    {
      item: "Object storage (R2)",
      purpose: "Prescriptions, reports, documents + delivery",
      type: "Monthly",
      estimate: "₹0.5k – 1.5k",
    },
    {
      item: "WhatsApp Business API",
      purpose: "Secure record + reminder delivery",
      type: "Per-msg",
      estimate: "~₹0.3 – 0.8 / msg",
    },
    {
      item: "Business email (Zoho)",
      purpose: "Professional comms, onboarding",
      type: "Monthly",
      estimate: "~₹0.9k / yr tier",
    },
    {
      item: "Verification APIs (Aadhaar/PAN/licence)",
      purpose: "KYC for doctors & pharmacies",
      type: "Per-check",
      estimate: "pay-per-verify",
    },
  ] as CostRow[],
  workstationTitle: "Why own a workstation instead of renting cloud GPUs?",
  workstationPoints: [
    "One-time capex vs. open-ended monthly cloud-GPU bills.",
    "Phase 2 model work runs locally — no per-token cost while benchmarking the voice-to-EMR pipeline.",
    "Health data stays on-premise during R&D — a DPDP advantage, not just a cost one.",
    "Doubles as AI-assisted development hardware for a lean team.",
  ],
  workstationFootnote:
    "Cloud GPU at comparable usage crosses the workstation's one-time cost within months — and keeps charging after.",
} as const;
