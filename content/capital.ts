export interface CostRow {
  item: string;
  purpose: string;
  type: string;
  estimate: string;
}

export interface WorkstationSpecRow {
  component: string;
  spec: string;
  why: string;
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
      estimate: "₹3.5L",
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
  workstationSpecs: [
    {
      component: "GPU",
      spec: "RTX 5070 Ti",
      why: "Local inference/fine-tuning for the voice-to-EMR pipeline — zero per-token cost during R&D",
    },
    {
      component: "CPU",
      spec: "Ryzen 7 9700X",
      why: "Parallel builds, containerized dev environment, concurrent model + app workloads",
    },
    {
      component: "RAM",
      spec: "64GB DDR5",
      why: "Loads full medical ASR datasets + LLM context in-memory, no swap bottleneck",
    },
    {
      component: "Storage",
      spec: "NVMe SSD (3TB)",
      why: "Fast dataset I/O for ASR/EMR training iterations",
    },
  ] as WorkstationSpecRow[],
  workstationFramingLine:
    "This is R&D infrastructure, not a workstation — it's what lets us build the Phase 2 AI moat in-house instead of renting GPU-hours indefinitely. Also powers in-house analytics.",
} as const;
