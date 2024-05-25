"use client"

import 'chart.js/auto';

import { Doughnut, Pie } from 'react-chartjs-2';
import styles from '@/components/admin/statistics/styles.module.css'
import { GraduationCap } from 'lucide-react';
import { rgba } from '@mantine/core';

type props = {
  bachelor: number,
  master: number,
  doctorate: number
}

export const DistributionChart = ({ bachelor, master, doctorate }: props) => {
  const dataArr = [bachelor, master, doctorate];

  const percent = (bachelor / (bachelor + master + doctorate)) * 100;

  const data = {
    labels: [
      "Bachelor's",
      "Master's",
      "Doctorate's"
    ],
    datasets: [{
      label: '',
      data: dataArr,

      hoverOffset: 15,
      borderWidth: 0,
    }]
  };
  return (
    <div className={styles.doughnut_container}>
      <div className={styles.doughnut_value}>
        <p>{percent.toFixed(0)}%</p>
        <p className={styles.doughnut_description}>Bachelor&apos;s</p>
      </div>
      <div>
        <Doughnut
          data={data}
          options={
            {
              responsive: true,
              maintainAspectRatio: false,
              color: 'black',
              layout: {
                padding: 10
              },
              plugins: {
                legend: {
                  display: false
                },
                tooltip: {
                  xAlign: 'center',
                  yAlign: 'bottom',
                  backgroundColor: 'rgba(64,84,215,1)',
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
              cutout: '73%',
            }
          }
        />
      </div>
    </div>
  )
}