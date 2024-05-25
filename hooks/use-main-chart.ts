import { create } from 'zustand'

interface IMainChart {
  chartType: string | null
  setChartType: (chartType: string | null) => void,
}

export const useMainChart = create<IMainChart>((set) => ({

  chartType: "Bar chart",
  setChartType: (chartType: string | null) => { set({ chartType }) },

}))