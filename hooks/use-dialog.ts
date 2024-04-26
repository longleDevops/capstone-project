import { create } from 'zustand'

interface IDialog {
  isDialogOpen: boolean
  setIsDialogOpen: (isDialogOpen: boolean) => void,
  isMenuOpen: boolean,
  setIsMenuOpen: (isDialogOpen: boolean) => void,

  isDialogOpen2: boolean,
  setIsDialogOpen2: (isDialogOpen2: boolean) => void,
  isMenuOpen2: boolean,
  setIsMenuOpen2: (isDialogOpen2: boolean) => void,
}

export const useDialog = create<IDialog>((set) => ({

  isDialogOpen: false,
  setIsDialogOpen: (isDialogOpen: boolean) => { set({ isDialogOpen }) },
  isMenuOpen: false,
  setIsMenuOpen: (isMenuOpen: boolean) => { set({ isMenuOpen }) },

  isDialogOpen2: false,
  setIsDialogOpen2: (isDialogOpen2: boolean) => { set({ isDialogOpen2 }) },
  isMenuOpen2: false,
  setIsMenuOpen2: (isMenuOpen2: boolean) => { set({ isMenuOpen2 }) },
}))