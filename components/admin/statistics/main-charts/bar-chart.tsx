"use client"

import 'chart.js/auto';
import styles from "./styles.module.css"
import { Bar } from "react-chartjs-2"
import { useGetBackgrounds } from '@/app/(back-end)/features/student-background/api/use-get-backgrounds';
import { useFilter } from '@/hooks/use-filter';

export const BarChart = () => {
  // fall, winter, spring (2017-2023)
  const quarters = ["F17", "W17", "S17", "SU17", "F18", "W18", "S18", "SU18", "F19", "W19", "S19", "SU19", "F20", "W20", "S20", "SU20", "F21", "W21", "S21", "SU21", "F22", "W22", "S22", "SU22", "F23", "W23", "S23", "SU23", "F24", "W24", "S24", "SU24"]

  const { majorName } = useFilter()

  const { data: backgroundData1 } = useGetBackgrounds()

  const backgroundData2 = backgroundData1 ? backgroundData1 : []

  const backgroundData = (majorName.size === 0 || majorName.size === 14) ? backgroundData2 : backgroundData2.filter((item) => majorName.has(item.major))

  const employedMap = new Map();
  quarters.forEach(val => employedMap.set(val, 0))

  const otherMap = new Map();
  quarters.forEach(val => otherMap.set(val, 0))



  // employed only
  backgroundData
    ? backgroundData.filter(value => value.isEmployed === true).map(value => value.startTerm).forEach((quarter) => {
      if (employedMap.has(transform(quarter))) {
        employedMap.set(transform(quarter), employedMap.get(transform(quarter)) + 1);
      }
    }) : []

  // un-employed only
  backgroundData
    ? backgroundData.filter(value => value.isEmployed === false).map(value => value.startTerm).forEach((quarter) => {
      if (otherMap.has(transform(quarter))) {
        otherMap.set(transform(quarter), otherMap.get(transform(quarter)) + 1);
      }
    }) : []

  const data = {
    labels: quarters,
    datasets: [
      {
        label: 'Employed',
        data: Array.from(employedMap.values()),
        backgroundColor: ["#0363f4"]
      },
      {
        label: 'Unemployed',
        data: Array.from(otherMap.values()),
        backgroundColor: ["#f33c5c"]
      },

    ]
  };
  //#3981ee
  // backgroundColor: [
  //   'rgba(255, 99, 132, 0.2)',
  //   'rgba(255, 159, 64, 0.2)',
  //   'rgba(255, 205, 86, 0.2)',
  //   'rgba(75, 192, 192, 0.2)',
  //   'rgba(54, 162, 235, 0.2)',
  //   'rgba(153, 102, 255, 0.2)',
  //   'rgba(201, 203, 207, 0.2)'
  // ],
  // borderColor: [
  //   'rgb(255, 99, 132)',
  //   'rgb(255, 159, 64)',
  //   'rgb(255, 205, 86)',
  //   'rgb(75, 192, 192)',
  //   'rgb(54, 162, 235)',
  //   'rgb(153, 102, 255)',
  //   'rgb(201, 203, 207)'
  // ],
  // borderWidth: 1

  function transform(quarter: string) {
    const season = quarter.split(" ")[0].slice(0, 2) === 'Su' ? 'SU' : quarter.split(" ")[0].slice(0, 1); // "F"
    const year = quarter.split(" ")[1].slice(2); // "19"
    return season + year
  }

  return (
    <div className={styles.bar_container}>
      <Bar
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
            animations: {
              tension: {
                duration: 500,
                easing: 'easeOutQuad',
                from: .8,
                to: .5,
                loop: false
              }
            },
            scales: {
              y: {
                ticks: {
                  display: false
                },
                border: {
                  dash: [5]
                },

              },
              x: {
                border: {
                  dash: [5]
                }
              },
            }
          }
        }
      />
    </div>
  )
}