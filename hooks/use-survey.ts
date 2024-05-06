import { create } from 'zustand'

interface ISurvey {
  isStarted: boolean;
  setIsStarted: (isStarted: boolean) => void;

  isStepOneStarted: boolean;
  setIsStepOneStarted: (isStepOneStarted: boolean) => void;
  isStepTwoStarted: boolean;
  setIsStepTwoStarted: (isStepTwoStarted: boolean) => void;
  isStepThreeStarted: boolean;
  setIsStepThreeStarted: (isStepThreeStarted: boolean) => void;

  currentPart: number;
  setCurrentPart: (currentPart: number) => void
}
export const useSurvey = create<ISurvey>((set) => ({
  isStarted: false,
  setIsStarted: (isStarted: boolean) => { set({ isStarted }) },

  isStepOneStarted: true,
  setIsStepOneStarted: (isStepOneStarted: boolean) => { set({ isStepOneStarted }) },

  isStepTwoStarted: false,
  setIsStepTwoStarted: (isStepTwoStarted: boolean) => { set({ isStepTwoStarted }) },

  isStepThreeStarted: false,
  setIsStepThreeStarted: (isStepThreeStarted: boolean) => { set({ isStepThreeStarted }) },

  currentPart: 1,
  setCurrentPart: (currentPart: number) => { set({ currentPart }) }

}))