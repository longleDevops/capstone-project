"use client"

import { Line } from "react-chartjs-2"
import 'chart.js/auto';
import styles from './styles.module.css'
import { useGetBackgrounds } from '@/app/(back-end)/features/student-background/api/use-get-backgrounds';
import { useFilter } from "@/hooks/use-filter";

export const LineChart = () => {

  // const labels = ['S22', 'F23', 'W23', 'S23', 'F24', 'W24', 'S4'];

  // const data = {
  //   labels,
  //   datasets: [
  //     {
  //       fill: true,
  //       data: [23, 43, 45, 65, 234, 43, 333],
  //       borderColor: 'rgb(53, 162, 235)',
  //       backgroundColor: 'rgba(53, 162, 235, 0.5)',
  //       tension: .5
  //     },
  //   ],
  // };

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
        backgroundColor: ["#0363f4"],
        fill: true,
        tension: .5
      },
      {
        label: 'Unemployed',
        data: Array.from(otherMap.values()),
        backgroundColor: ["#f33c5c"],
        fill: true,
        tension: .5
      },

    ]
  };
  function transform(quarter: string) {
    const season = quarter.split(" ")[0].slice(0, 2) === "Su" ? 'SU' : quarter.split(" ")[0].slice(0, 1); // "F"
    const year = quarter.split(" ")[1].slice(2); // "19"
    return season + year
  }

  return (
    <div className={styles.area_container}>
      <Line
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
                  size: 16,
                  weight: 'bold'
                },
                bodyFont: {
                  size: 20,
                  weight: 'bolder'
                }
              }
            },

            scales: {
              y: {
                ticks: {
                  display: false
                },
                border: {
                  dash: [5]
                }
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