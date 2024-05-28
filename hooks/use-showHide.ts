import { create } from 'zustand'

interface IShowHide {
  isShown: boolean
  setIsShown: (isShown: boolean) => void,
}

export const useShowHide = create<IShowHide>((set) => ({

  isShown: false,
  setIsShown: (isShown: boolean) => { set({ isShown }) },

}))