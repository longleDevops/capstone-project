import { create } from 'zustand'

interface InternationalAnswers {
  internationalAnswers: {
    companyName: string,
    jobTitle: string,
    salary: string,
  };
  setInternationalAnswers: (internationalAnswers: {
    companyName: string,
    jobTitle: string,
    salary: string,
  }) => void;

}
export const useInternationalAnswers = create<InternationalAnswers>((set) => ({
  internationalAnswers: {
    companyName: '',
    jobTitle: '',
    salary: '',
  },
  setInternationalAnswers: (internationalAnswers: {
    companyName: string,
    jobTitle: string,
    salary: string,
  }) => { set({ internationalAnswers }) },

}))