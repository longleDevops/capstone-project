import { create } from 'zustand'

interface ISettings {
  isClosed: boolean
  setIsClosed: (isClosed: boolean) => void,
  theme: string | null,
  setTheme: (theme: string | null) => void,
  tempTheme: string | null,
  setTempTheme: (tempTheme: string | null) => void,
}

export const useSettings = create<ISettings>((set) => ({

  isClosed: false,
  setIsClosed: (isClosed: boolean) => { set({ isClosed }) },

  theme: 'Cwu',
  setTheme: (theme: string | null) => { set({ theme }) },
  tempTheme: 'Cwu',
  setTempTheme: (tempTheme: string | null) => { set({ tempTheme }) },
}))