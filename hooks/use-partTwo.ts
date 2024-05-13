import { create } from 'zustand'

interface ISurveyTwo {
  q1Answer: number;
  setQ1Answer: (answer: number) => void;

  q2Path1Answer: number;
  setQ2Path1Answer: (q2Path1Answer: number) => void;
  q3Path1Answer: number;
  setQ3Path1Answer: (q3Path1Answer: number) => void;

  q2Path2Answer: number;
  setQ2Path2Answer: (q2Path2Answer: number) => void;

  q2Path3Answer: number;
  setQ2Path3Answer: (q2Path3Answer: number) => void;

  q2Path4Answer: number;
  setQ2Path4Answer: (q2Path4Answer: number) => void;

  horizontalProgress: number;
  setHorizontalProgress: (q2Path4Answer: number) => void;
}

export const useSurveyPartTwo = create<ISurveyTwo>((set) => ({
  q1Answer: -1,
  setQ1Answer: (q1Answer: number) => set({ q1Answer }),

  q2Path1Answer: -1,
  setQ2Path1Answer: (q2Path1Answer: number) => set({ q2Path1Answer }),
  q3Path1Answer: -1,
  setQ3Path1Answer: (q3Path1Answer: number) => set({ q3Path1Answer }),

  q2Path2Answer: -1,
  setQ2Path2Answer: (q2Path2Answer: number) => set({ q2Path2Answer }),

  q2Path3Answer: -1,
  setQ2Path3Answer: (q2Path3Answer: number) => set({ q2Path3Answer }),

  q2Path4Answer: -1,
  setQ2Path4Answer: (q2Path4Answer: number) => set({ q2Path4Answer }),

  horizontalProgress: 0,
  setHorizontalProgress: (horizontalProgress: number) => set({ horizontalProgress }),
}))