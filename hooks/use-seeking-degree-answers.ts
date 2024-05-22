import { create } from 'zustand'

interface ISeekingDegree {
  seekingAnswers: {
    institution: string,
    major: string,
  };
  setSeekingAnswers: (seekingAnswers: {
    institution: string,
    major: string,
  }) => void;

}
export const useSeekingDegreeAnswers = create<ISeekingDegree>((set) => ({
  seekingAnswers: {
    institution: '',
    major: '',
  },
  setSeekingAnswers: (seekingAnswers: {
    institution: string,
    major: string,
  }) => { set({ seekingAnswers }) },

}))