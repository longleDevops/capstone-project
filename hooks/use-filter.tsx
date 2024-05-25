import { create } from 'zustand'

interface IFilter {
  majorName: Set<string>
  setMajorName: (majorName: Set<string>) => void,

  majorSet: Set<string>,
  setMajorSet: (majorSet: Set<string>) => void
}

export const useFilter = create<IFilter>((set) => ({

  majorName: new Set<string>(),
  setMajorName: (majorName: Set<string>) => { set({ majorName }) },

  majorSet: new Set<string>(),
  setMajorSet: (majorSet: Set<string>) => { set({ majorSet }) }
}))