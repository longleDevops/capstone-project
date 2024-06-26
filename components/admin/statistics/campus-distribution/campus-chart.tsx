"use client"

import 'chart.js/auto';

import { Doughnut, Pie } from 'react-chartjs-2';
import styles from '@/components/admin/statistics/styles.module.css'
import { GraduationCap } from 'lucide-react';
import { rgba } from '@mantine/core';

type props = {
  ellen: number,
  pierce: number,
  lynwood: number,
  desmoines: number,
  sammamish: number,
  online: number
}

const campusArr = [
  "Ellensburg",
  "Pierce County",
  "Lynnwood",
  "Des Moines",
  "Sammamish",
  "Online"
]

export const CampusChart = ({ ellen, pierce, lynwood, desmoines, sammamish, online }: props) => {
  const total = ellen + pierce + lynwood + desmoines + sammamish + online
  const ellenPercent = total !== 0 ? parseFloat(((ellen / total) * 100).toFixed(1)) : 0
  const piercePercent = total !== 0 ? parseFloat(((pierce / total) * 100).toFixed(1)) : 0
  const lynwoodPercent = total !== 0 ? parseFloat(((lynwood / total) * 100).toFixed(1)) : 0
  const desmoinesPercent = total !== 0 ? parseFloat(((desmoines / total) * 100).toFixed(1)) : 0
  const sammanishPercent = total !== 0 ? parseFloat(((sammamish / total) * 100).toFixed(1)) : 0
  const onlinePercent = total !== 0 ? 100 - ellenPercent - piercePercent - lynwoodPercent - desmoinesPercent - sammanishPercent : 0


  const dataArr = [ellenPercent, piercePercent, lynwoodPercent, desmoinesPercent, sammanishPercent, onlinePercent];

  const percent = (desmoines / (ellen + pierce + lynwood + desmoines + sammamish + online)) * 100;

  const data = {
    labels: campusArr,
    datasets: [{
      label: '%',
      data: dataArr,

      hoverOffset: 15,
      borderWidth: 0,
    }]
  };
  return (
    <div className={styles.doughnut_container}>
      <div className={styles.doughnut_value}>
        <p>{percent.toFixed(0)}%</p>
        <p className={styles.doughnut_description}>Desmoines</p>
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