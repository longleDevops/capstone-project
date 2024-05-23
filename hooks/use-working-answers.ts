import { create } from 'zustand'

interface IWorkingAnswers {
  workingAnswers: {
    companyName: string,
    jobTitle: string,
    salary: string,
    avgSalary: number
  };
  setWorkingAnswers: (internationalAnswers: {
    companyName: string,
    jobTitle: string,
    salary: string,
    avgSalary: number
  }) => void;

}
export const useWorkingAnswers = create<IWorkingAnswers>((set) => ({
  workingAnswers: {
    companyName: '',
    jobTitle: '',
    salary: '',
    avgSalary: 0
  },
  setWorkingAnswers: (workingAnswers: {
    companyName: string,
    jobTitle: string,
    salary: string,
    avgSalary: number
  }) => { set({ workingAnswers }) },

}))