export interface TechPillar {
  label: string;
  title: string;
  description: string;
}

export const technologyContent = {
  title: "The stack, deliberately lean.",
  body: "One well-chosen VPS, Postgres, object storage for documents, a local AI workstation for in-house model work, and India-based hosting for data residency — instead of paying for managed everything.",
  pillars: [
    {
      label: "CLIENTS",
      title: "Pharmacy + Doctor",
      description:
        "Browser-based dashboards — no native app to maintain. Works on low-end devices over 2G/3G.",
    },
    {
      label: "APP LAYER",
      title: "Next.js / FastAPI",
      description:
        "Next.js for the pharmacy and doctor dashboards; FastAPI for the real-time selection and clinical record APIs.",
    },
    {
      label: "DATA",
      title: "PostgreSQL + R2",
      description:
        "Postgres for all structured data with row-level locks for atomic operations. Cloudflare R2 for prescriptions, reports, and documents.",
    },
    {
      label: "EXTERNAL",
      title: "ABDM · eSign · WhatsApp",
      description:
        "ABHA/ABDM for health identity, verification APIs for KYC, WhatsApp Business for authenticated record delivery.",
    },
  ] as TechPillar[],
} as const;
