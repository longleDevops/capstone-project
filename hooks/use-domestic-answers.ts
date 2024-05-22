import { create } from 'zustand'

interface IDomesticAnswers {
  domesticAnswers: {
    intershipCompany: string,
    internshipTitle: string,
    internshipSalary: string,
    internshipPrepTime: string
  };
  setDomesticAnswers: (domesticAnswers: {
    intershipCompany: string,
    internshipTitle: string,
    internshipSalary: string,
    internshipPrepTime: string
  }) => void;

}
export const useDomesticAnswers = create<IDomesticAnswers>((set) => ({
  domesticAnswers: {
    intershipCompany: '',
    internshipTitle: '',
    internshipSalary: '',
    internshipPrepTime: ''
  },
  setDomesticAnswers: (domesticAnswers: {
    intershipCompany: string,
    internshipTitle: string,
    internshipSalary: string,
    internshipPrepTime: string
  }) => { set({ domesticAnswers }) },

}))