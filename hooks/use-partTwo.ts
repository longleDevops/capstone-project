import { create } from 'zustand'

interface ISurveyTwo {
  q1Answer: number;
  setQ1Answer: (answer: number) => void;

  q2Path1Answer: number;
  setQ2Path1Answer: (q2Path1Answer: number) => void;
  q3Path1Answer: number;
  setQ3Path1Answer: (q3Path1Answer: number) => void;

  q2Path4Answer: number;
  setQ2Path4Answer: (q2Path4Answer: number) => void;
}

export const useSurveyPartTwo = create<ISurveyTwo>((set) => ({
  q1Answer: -1,
  setQ1Answer: (q1Answer: number) => set({ q1Answer }),

  q2Path1Answer: -1,
  setQ2Path1Answer: (q2Path1Answer: number) => set({ q2Path1Answer }),
  q3Path1Answer: -1,
  setQ3Path1Answer: (q3Path1Answer: number) => set({ q3Path1Answer }),

  q2Path4Answer: -1,
  setQ2Path4Answer: (q2Path4Answer: number) => set({ q2Path4Answer }),
}))