export interface TractionItem {
  title: string;
  description: string;
}

export const tractionContent = {
  title: "Already in motion.",
  items: [
    {
      title: "Three stakeholder flows designed",
      description:
        "Pharmacy, patient and doctor journeys finalized, balancing convenience with compliance and audit.",
    },
    {
      title: "Marketing site live",
      description: "wellitycare.com is up.",
    },
    {
      title: "Onboarding backend started",
      description:
        "Initial onboarding-form backend in development (on GitHub).",
    },
    {
      title: "Architecture & research done",
      description:
        "System design, real-time model, and compliance approach scoped.",
    },
    {
      title: "Vendor groundwork",
      description:
        "Aadhaar/PAN verification APIs evaluated (cost + integration), Zoho business email onboarded.",
    },
  ] as TractionItem[],
  footnote:
    "This is the foundation. The next phase is execution — and the focused tooling to do it well.",
} as const;
