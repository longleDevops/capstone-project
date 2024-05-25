"use client"
import styles from "./styles.module.css"
import { Pie } from "react-chartjs-2"
import 'chart.js/auto';


export const PieChart = () => {
  const data = {
    labels: [
      'Undergraduate',
      'Graduated',
    ],
    datasets: [{
      label: 'My First Dataset',
      data: [50, 30],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
      ],
      hoverOffset: 4
    }]
  };

  return (
    <div className={styles.pie_container}>
      <Pie
        data={data}
        options={
          {
            responsive: true,
            maintainAspectRatio: false,
            // Plugins
            plugins: {
              legend: {
                display: false
              },
              tooltip: {
                displayColors: true,
                boxPadding: 5,
                padding: 10,
                titleFont: {
                  size: 14,
                  weight: 'bold'
                },
                bodyFont: {
                  size: 18,
                  weight: 'bolder'
                }
              }
            },
          }
        }
      />
    </div>
  )
}