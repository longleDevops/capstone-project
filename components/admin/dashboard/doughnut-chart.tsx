"use client"

import 'chart.js/auto';

import { Doughnut } from 'react-chartjs-2';
import styles from './styles.module.css'

export const DoughnutChart = () => {
  const data = {
    labels: [
      'Red',
      'Blue',
    ],
    datasets: [{
      label: 'My First Dataset',
      data: [300, 50],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
      ],
      hoverOffset: 15,
      borderWidth: 0,
    }]
  };
  return (
    <div className={styles.doughnut_container}>
      <div className={styles.doughnut_value}>
        200
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
            cutout: '70%',
          }
        }
      />
    </div>
  )
}