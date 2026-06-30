export interface ComplianceCard {
  title: string;
  description: string;
}

export const complianceContent = {
  title: "Compliance isn't a feature. It's the foundation.",
  cards: [
    {
      title: "ABDM / FHIR",
      description:
        "Aligned with India's national digital health stack; records map to FHIR standards, keeping us tender- and partner-eligible.",
    },
    {
      title: "DPDP Act",
      description:
        "Purpose-specific, separated consent. Health data is never repurposed for marketing. Retention and deletion handled by policy.",
    },
    {
      title: "Audit everywhere",
      description:
        "Every action — who, what, when — is logged immutably. Backups and logs are first-class, not afterthoughts.",
    },
    {
      title: "Verified identities",
      description:
        "Doctors and facilities are checked at onboarding; patients consent before any data moves.",
    },
  ] as ComplianceCard[],
  footnote:
    "This is also why a real engineering team is needed — correctness, consent, audit and health-ID integration are not weekend work.",
} as const;
