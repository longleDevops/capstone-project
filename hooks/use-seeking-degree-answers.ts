import { create } from 'zustand'

interface ISeekingDegree {
  seekingAnswers: {
    institution: string,
    major: string,
    prepTime: string,
    isHelped: boolean
  };
  setSeekingAnswers: (seekingAnswers: {
    institution: string,
    major: string,
    prepTime: string,
    isHelped: boolean
  }) => void;

}
export const useSeekingDegreeAnswers = create<ISeekingDegree>((set) => ({
  seekingAnswers: {
    institution: '',
    major: '',
    prepTime: '',
    isHelped: false

  },
  setSeekingAnswers: (seekingAnswers: {
    institution: string,
    major: string,
    prepTime: string,
    isHelped: boolean
  }) => { set({ seekingAnswers }) },

}))