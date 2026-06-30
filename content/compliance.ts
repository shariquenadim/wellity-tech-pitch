export interface ComplianceCard {
  title: string;
  description: string;
}

export const complianceContent = {
  title: "Compliance is the foundation, not a feature.",
  cards: [
    {
      title: "ABDM / FHIR",
      description:
        "Aligned with India's national digital health stack. Records map to FHIR standards, keeping us tender- and partner-eligible.",
    },
    {
      title: "DPDP Act",
      description:
        "Purpose-specific, separated consent. Health data is never repurposed for marketing. Retention and deletion handled by policy.",
    },
    {
      title: "Audit everywhere",
      description:
        "Immutable who/what/when logs for every action. Backups and logs are first-class, not afterthoughts.",
    },
    {
      title: "Verified identities",
      description:
        "Doctors and facilities checked at onboarding; patients consent before any data moves.",
    },
  ] as ComplianceCard[],
  footnote:
    "This is also why a real engineering team is needed — correctness, consent, audit and health-ID integration are not weekend work.",
} as const;
