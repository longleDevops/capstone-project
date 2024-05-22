import { create } from 'zustand'

interface IAuthentication {
  isAuthenticated: boolean
  setIsAuthenticated: (isAuthenticated: boolean) => void,
}

export const useAuthentication = create<IAuthentication>((set) => ({

  isAuthenticated: false,
  setIsAuthenticated: (isAuthenticated: boolean) => { set({ isAuthenticated }) },

}))