"use client"

import 'chart.js/auto';

import { Doughnut, Pie } from 'react-chartjs-2';
import styles from '@/components/admin/statistics/styles.module.css'
import { GraduationCap } from 'lucide-react';
import { rgba } from '@mantine/core';

type props = {
  asian: number,
  white: number,
  african: number,
  hispanic: number,
  middleEastern: number
}

export const RaceChart = ({ asian, white, african, hispanic, middleEastern }: props) => {

  const dataArr = [asian, white, african, hispanic, middleEastern];

  const percent = (asian / (asian + white + african + hispanic + middleEastern)) * 100;

  const data = {
    labels: [
      'Asian',
      'White and European',
      'African',
      'Hispanic and Latino',
      'Middle Eastern',
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
        <p className={styles.doughnut_description}>Asian</p>
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