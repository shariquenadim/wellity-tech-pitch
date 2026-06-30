export interface StatCard {
  number: string;
  description: string;
}

export const problemContent = {
  title: "The gap is structural. The channel is hiding in plain sight.",
  body: "70%+ of doctors sit in cities; 72% of patients don't. The one place rural patients already trust is the local pharmacy — so that's where we put the doctor.",
  stats: [
    {
      number: "70%+",
      description: "doctors in urban areas",
    },
    {
      number: "<33%",
      description: "of the population they serve",
    },
    {
      number: "72%",
      description: "of citizens live rurally",
    },
  ] as StatCard[],
} as const;
