import { create } from 'zustand'

interface ISurveyThree {
  q1Answer: number;
  setQ1Answer: (q1Answer: number) => void;

  q2Answer: number;
  setQ2Answer: (answq2Answerer: number) => void;

  q3Answer: number;
  setQ3Answer: (q3Answer: number) => void;

  q4Answer: number;
  setQ4Answer: (q4Answer: number) => void;

  q5Answer: number;
  setQ5Answer: (q5Answer: number) => void;
}

export const useSurveyPartThree = create<ISurveyThree>((set) => ({
  q1Answer: -1,
  setQ1Answer: (q1Answer: number) => set({ q1Answer }),

  q2Answer: -1,
  setQ2Answer: (q2Answer: number) => set({ q2Answer }),
  q3Answer: -1,
  setQ3Answer: (q3Answer: number) => set({ q3Answer }),
  q4Answer: -1,
  setQ4Answer: (q4Answer: number) => set({ q4Answer }),
  q5Answer: -1,
  setQ5Answer: (q5Answer: number) => set({ q5Answer }),
}))
