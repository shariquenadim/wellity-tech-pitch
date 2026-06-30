export interface Pillar {
  title: string;
  description: string;
}

export const solutionContent = {
  title: "The pharmacy is the hub. Everything else is infrastructure.",
  body: "The pharmacist runs a guided intake; a verified specialist joins live; a signed prescription and the patient's record flow back out — over networks that drop, under rules that don't bend. The hard parts are real-time selection on weak networks, identity and licence verification, health-ID integration, and an audit trail that holds up. That's the product.",
  pillars: [
    {
      title: "Last-mile trust",
      description:
        "Built on the relationships rural patients already have.",
    },
    {
      title: "Low-bandwidth first",
      description:
        "Designed for 2G/3G realities, not metro fibre.",
    },
    {
      title: "Verified supply",
      description:
        "Every doctor identity-checked, licence-verified.",
    },
    {
      title: "Compliant by design",
      description:
        "ABDM-aligned, DPDP-ready, audited end to end.",
    },
  ] as Pillar[],
} as const;
