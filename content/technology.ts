export interface TechPillar {
  label: string;
  title: string;
  description: string;
}

export const technologyContent = {
  title: "Built lean, built correct.",
  body: "Healthcare software fails in two ways — it breaks under bad networks, or it breaks the rules. We engineered against both from day one.",
  pillars: [
    {
      label: "REAL-TIME",
      title: "Real-time, resilient",
      description:
        "Server-sent events with polling fallback, not fragile sockets. Doctor selection survives flaky rural connections. Atomic accept prevents double-booking.",
    },
    {
      label: "HEALTH-ID",
      title: "Health-ID native",
      description:
        "ABHA / ABDM integration with graceful degradation when a health ID can't be created on the spot.",
    },
    {
      label: "SECURITY",
      title: "Secure by structure",
      description:
        "Records shared as authenticated links, never raw data over chat. Tamper-evident prescriptions with full audit logs.",
    },
    {
      label: "INFRA",
      title: "Cost-disciplined infra",
      description:
        "A single well-chosen VPS, object storage for documents, and a local AI workstation for in-house model work — instead of burning cash on managed everything.",
    },
  ] as TechPillar[],
} as const;
