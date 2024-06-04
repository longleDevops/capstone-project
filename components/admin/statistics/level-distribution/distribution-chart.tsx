"use client"

import 'chart.js/auto';

import styles from '@/components/admin/statistics/styles.module.css';
import { Doughnut } from 'react-chartjs-2';
import CountUp from 'react-countup'

type props = {
  bachelor: number,
  master: number,
  doctorate: number
}

export const DistributionChart = ({ bachelor, master, doctorate }: props) => {
  const total = bachelor + master + doctorate;
  const bachelorPercent = total !== 0 ? parseFloat(((bachelor / total) * 100).toFixed(2)) : 0;
  const masterPercent = total !== 0 ? parseFloat(((master / total) * 100).toFixed(2)) : 0;

  const doctoratePercent = total !== 0 ? 100 - bachelorPercent - masterPercent : 0;

  const dataArr = [bachelorPercent, masterPercent, doctoratePercent];

  const data = {
    labels: [
      "Bachelor's",
      "Master's",
      "Doctorate's"
    ],
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
        <CountUp end={total} duration={2} />
        <p className={styles.doughnut_description}>Total Students</p>
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