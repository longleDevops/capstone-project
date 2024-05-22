import { create } from 'zustand'

interface ISearchingAnswers {
  searchingAnswers: {
    companyName: string,
    jobTitle: string,
    salary: string,
  };
  setSearchingAnswers: (searchingAnswers: {
    companyName: string,
    jobTitle: string,
    salary: string,
  }) => void;

}
export const useSearchingJobAnswers = create<ISearchingAnswers>((set) => ({
  searchingAnswers: {
    companyName: '',
    jobTitle: '',
    salary: '',
  },
  setSearchingAnswers: (searchingAnswers: {
    companyName: string,
    jobTitle: string,
    salary: string,
  }) => { set({ searchingAnswers }) },

}))