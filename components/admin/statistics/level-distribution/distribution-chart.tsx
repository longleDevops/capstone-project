"use client"

import 'chart.js/auto';

import { Doughnut } from 'react-chartjs-2';
import styles from '@/components/admin/statistics/styles.module.css'

export const DistributionChart = () => {
  const data = {
    labels: [
      'Red',
      'Blue',
    ],
    datasets: [{
      label: 'My First Dataset',
      data: [300, 50, 45, 43],

      hoverOffset: 15,
      borderWidth: 0,
    }]
  };
  return (
    <div className={styles.doughnut_container}>
      <div className={styles.doughnut_value}>
        67%
      </div>
      <Doughnut
        data={data}
        options={
          {
            color: 'black',
            layout: {
              padding: 10
            },
            plugins: {
              legend: {
                display: false
              },

            },
            maintainAspectRatio: false,
            cutout: '75%',
          }
        }
      />
    </div>
  )
}