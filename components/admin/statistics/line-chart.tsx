"use client"

import { Line } from "react-chartjs-2"
import 'chart.js/auto';
import styles from './styles.module.css'

export const LineChart = () => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },

    },
  };

  const labels = ['spring 22', 'Fall 23', 'Winter 23', 'Spring 23', 'Fall 24', 'Winter 24', 'Spring 24'];

  const data = {
    labels,
    datasets: [
      {
        fill: true,
        label: 'Dataset 2',
        data: [23, 43, 45, 65, 234, 43, 333],
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
        tension: .5
      },
    ],
  };
  return (
    <div className={styles.area_container}>
      <Line
        data={data}
        options={options}
      />
    </div>
  )
}