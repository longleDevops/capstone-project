import { create } from 'zustand'

interface InternationalAnswers {
  internationalAnswers: {
    companyName: string,
    jobTitle: string,
    salary: string,
    avgSalary: number
  };
  setInternationalAnswers: (internationalAnswers: {
    companyName: string,
    jobTitle: string,
    salary: string,
    avgSalary: number
  }) => void;

}
export const useInternationalAnswers = create<InternationalAnswers>((set) => ({
  internationalAnswers: {
    companyName: '',
    jobTitle: '',
    salary: '',
    avgSalary: 0
  },
  setInternationalAnswers: (internationalAnswers: {
    companyName: string,
    jobTitle: string,
    salary: string,
    avgSalary: number
  }) => { set({ internationalAnswers }) },

}))