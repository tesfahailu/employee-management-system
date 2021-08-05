export interface Rows {
  id: number;
  title: string;
  description: string | null;
}

export const rows: Array<Rows> = [
  {
    id: 1,
    title: 'marketing',
    description:
      'assists a business with creating, implementing, and sustaining marketing strategie.',
  },

  {
    id: 2,
    title: 'operations',
    description:
      'responsible for the effective and successful management of labor, productivity, quality control and safety measures.',
  },
];