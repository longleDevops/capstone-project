"use client"

import { useMainChart } from '@/hooks/use-main-chart'
import { ChartSelect } from './chart-select'
import { LineChart } from './line-chart'
import styles from './styles.module.css'
import { BarChart } from './bar-chart'

export const ChartsContainer = () => {

  const { chartType } = useMainChart()
  return (
    <div className={styles.container}>
      <div className={styles.chart_holder}>
        <p className={styles.chart_title}>Total cwu students by terms</p>
        <ChartSelect />
      </div>
      <p className={styles.chart_description}>{"Spring, Fall, Winter"}</p>
      {chartType === "Area chart"
        ? <LineChart />
        : <BarChart />}
    </div>
  )
}