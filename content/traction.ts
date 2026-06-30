export interface TractionItem {
  title: string;
  description: string;
  done: boolean;
}

export const tractionContent = {
  title: "What's built.",
  items: [
    {
      title: "Three stakeholder flows finalized",
      description:
        "Pharmacy, patient and doctor journeys designed, balancing convenience with compliance and audit.",
      done: true,
    },
    {
      title: "Marketing site live",
      description: "wellitycare.com is up.",
      done: true,
    },
    {
      title: "Onboarding backend in development",
      description:
        "Initial onboarding-form backend in development on GitHub.",
      done: true,
    },
    {
      title: "Architecture & compliance approach scoped",
      description:
        "System design, real-time model, and compliance approach finalized. Verification APIs (Aadhaar/PAN/licence) evaluated for cost and integration.",
      done: true,
    },
    {
      title: "Vendor groundwork done",
      description:
        "Zoho business email onboarded. Verification APIs selected. WhatsApp Business API evaluated.",
      done: true,
    },
  ] as TractionItem[],
  footnote:
    "Foundation done. Next phase is execution — and the focused tooling to do it well.",
} as const;
