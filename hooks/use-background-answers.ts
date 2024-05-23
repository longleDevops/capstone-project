import { create } from 'zustand'

interface IBackgroundAnswers {
  backgroundAnswers: {
    firstName: string | null | undefined,
    lastName: string | null | undefined,
    studentId: string,
    major: string,
    startTerm: string,
    endTerm: string,
    campus: string,
    gender: string,
    race: string,
    degreeLevel: string
  };
  setBackgroundAnswers: (backgroundAnswers: {
    firstName: string | null | undefined,
    lastName: string | null | undefined,
    studentId: string,
    major: string,
    startTerm: string,
    endTerm: string,
    campus: string,
    gender: string,
    race: string,
    degreeLevel: string

  }) => void;

}
export const useBackgroundAnswers = create<IBackgroundAnswers>((set) => ({
  backgroundAnswers: {
    firstName: null,
    lastName: null,
    studentId: '',
    major: '',
    startTerm: '',
    endTerm: '',
    campus: '',
    gender: '',
    race: '',
    degreeLevel: ''
  },
  setBackgroundAnswers: (backgroundAnswers: {
    firstName: string | null | undefined,
    lastName: string | null | undefined,
    studentId: string,
    major: string,
    startTerm: string,
    endTerm: string,
    campus: string,
    gender: string,
    race: string,
    degreeLevel: string
  }) => { set({ backgroundAnswers }) },

}))