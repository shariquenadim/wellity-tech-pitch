export interface StatCard {
  number: string;
  description: string;
}

export const problemContent = {
  title: "The access gap is structural, not temporary.",
  stats: [
    {
      number: "70%+",
      description: "of India's doctors are concentrated in urban areas.",
    },
    {
      number: "<33%",
      description: "of the population those urban doctors serve.",
    },
    {
      number: "72%",
      description: "of citizens live in rural and peri-urban regions.",
    },
  ] as StatCard[],
  body: 'Primary care in these regions is fragmented. The trusted point of contact isn\'t a hospital — it\'s the **local pharmacy or diagnostic centre**. That existing trust is the channel everyone else ignores. We build on it instead of around it.',
} as const;
