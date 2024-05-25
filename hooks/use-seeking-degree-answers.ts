import { create } from 'zustand'

interface ISeekingDegree {
  seekingAnswers: {
    institution: string,
    major: string,
    prepTime: string,
    isHelped: boolean,
    degreeLevel: string
  };
  setSeekingAnswers: (seekingAnswers: {
    institution: string,
    major: string,
    prepTime: string,
    isHelped: boolean,
    degreeLevel: string

  }) => void;

}
export const useSeekingDegreeAnswers = create<ISeekingDegree>((set) => ({
  seekingAnswers: {
    institution: '',
    major: '',
    prepTime: '',
    isHelped: false,
    degreeLevel: ''

  },
  setSeekingAnswers: (seekingAnswers: {
    institution: string,
    major: string,
    prepTime: string,
    isHelped: boolean,
    degreeLevel: string
  }) => { set({ seekingAnswers }) },

}))