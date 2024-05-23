import { create } from 'zustand'

interface IDomesticAnswers {
  domesticAnswers: {
    internshipCompany: string,
    internshipTitle: string,
    internshipSalary: string,
    internshipPrepTime: string,
    avgInternshipSalary: number
  };
  setDomesticAnswers: (domesticAnswers: {
    internshipCompany: string,
    internshipTitle: string,
    internshipSalary: string,
    internshipPrepTime: string,
    avgInternshipSalary: number

  }) => void;

}
export const useDomesticAnswers = create<IDomesticAnswers>((set) => ({
  domesticAnswers: {
    internshipCompany: '',
    internshipTitle: '',
    internshipSalary: '',
    internshipPrepTime: '',
    avgInternshipSalary: 0
  },
  setDomesticAnswers: (domesticAnswers: {
    internshipCompany: string,
    internshipTitle: string,
    internshipSalary: string,
    internshipPrepTime: string,
    avgInternshipSalary: number
  }) => { set({ domesticAnswers }) },

}))