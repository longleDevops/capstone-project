import { create } from 'zustand'

interface IWorkingAnswers {
  workingAnswers: {
    companyName: string,
    jobTitle: string,
    salary: string,
  };
  setWorkingAnswers: (internationalAnswers: {
    companyName: string,
    jobTitle: string,
    salary: string,
  }) => void;

}
export const useWorkingAnswers = create<IWorkingAnswers>((set) => ({
  workingAnswers: {
    companyName: '',
    jobTitle: '',
    salary: '',
  },
  setWorkingAnswers: (workingAnswers: {
    companyName: string,
    jobTitle: string,
    salary: string,
  }) => { set({ workingAnswers }) },

}))