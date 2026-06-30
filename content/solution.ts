export interface Pillar {
  title: string;
  description: string;
}

export const solutionContent = {
  title: "The pharmacy becomes the hub.",
  body: "Patients already walk into their local pharmacy for care. Wellity equips that pharmacy with a simple dashboard, a guided patient intake, and a live connection to verified specialists. The pharmacy stays the trusted face; the specialist joins remotely. Video, voice or chat — whichever the network allows.",
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
