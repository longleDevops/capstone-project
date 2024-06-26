"use client"

import { useMainChart } from '@/hooks/use-main-chart'
import { ChartSelect } from './chart-select'
import { LineChart } from './line-chart'
import styles from './styles.module.css'
import { BarChart } from './bar-chart'
import { useSettings } from '@/hooks/use-settings'
import { RadarChart } from './radar-chart'

export const ChartsContainer = () => {
  const { theme } = useSettings()
  const { chartType } = useMainChart()
  return (
    <div
      className={styles.container}

    >
      <div className={styles.chart_holder}>
        <p className={styles.chart_title}>Total cwu students by terms</p>
        <ChartSelect />
      </div>
      <p className={styles.chart_description}>{"Fall, Winter, Spring, Summer"}</p>
      {chartType === "Area chart" ? <LineChart />
        : chartType === "Bar chart" ? <BarChart />
          : <RadarChart />
      }
    </div>
  )
}