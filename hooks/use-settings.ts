import { create } from 'zustand'

interface ISettings {
  isClosed: boolean
  setIsClosed: (isClosed: boolean) => void,


}

export const useSettings = create<ISettings>((set) => ({

  isClosed: false,
  setIsClosed: (isClosed: boolean) => { set({ isClosed }) },

}))