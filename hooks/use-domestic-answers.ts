import { create } from 'zustand'

interface IDomesticAnswers {
  domesticAnswers: {
    internshipCompany: string,
    internshipTitle: string,
    internshipSalary: string,
    internshipPrepTime: string
  };
  setDomesticAnswers: (domesticAnswers: {
    internshipCompany: string,
    internshipTitle: string,
    internshipSalary: string,
    internshipPrepTime: string
  }) => void;

}
export const useDomesticAnswers = create<IDomesticAnswers>((set) => ({
  domesticAnswers: {
    internshipCompany: '',
    internshipTitle: '',
    internshipSalary: '',
    internshipPrepTime: ''
  },
  setDomesticAnswers: (domesticAnswers: {
    internshipCompany: string,
    internshipTitle: string,
    internshipSalary: string,
    internshipPrepTime: string
  }) => { set({ domesticAnswers }) },

}))