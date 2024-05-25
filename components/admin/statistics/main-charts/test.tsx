"use client"

import 'chart.js/auto';
import styles from "./styles.module.css"
import { Bar } from "react-chartjs-2"
import { useGetBackgrounds } from '@/app/(back-end)/features/student-background/api/use-get-backgrounds';

export const BarChart = () => {
  // fall, winter, spring (2017-2023)
  const quarters = ["F17", "W17", "S17", "F18", "W18", "S18", "F19", "W19", "S19", "F20", "W20", "S20", "F21", "W21", "S21", "F22", "W22", "S22", "F23", "W23", "S23"]


  const { data: backgroundData } = useGetBackgrounds()

  const domesticMap = new Map();
  quarters.forEach(val => domesticMap.set(val, 0))

  const internationalMap = new Map();
  quarters.forEach(val => internationalMap.set(val, 0))

  const workingMap = new Map();
  quarters.forEach(val => workingMap.set(val, 0))

  const seekingMap = new Map();
  quarters.forEach(val => seekingMap.set(val, 0))

  const searchingMap = new Map();
  quarters.forEach(val => searchingMap.set(val, 0))

  // domestic only
  backgroundData
    ? backgroundData.filter(value => value.startTerm.split("")[0] != "Summer" && value.status === "domestic-student").map(value => value.startTerm).forEach((quarter) => {
      if (domesticMap.has(transform(quarter))) {
        domesticMap.set(transform(quarter), domesticMap.get(transform(quarter)) + 1);
      }
    }) : []

  // international only
  backgroundData
    ? backgroundData.filter(value => value.startTerm.split("")[0] != "Summer" && value.status === "international-student").map(value => value.startTerm).forEach((quarter) => {
      if (internationalMap.has(transform(quarter))) {
        internationalMap.set(transform(quarter), internationalMap.get(transform(quarter)) + 1);
      }
    }) : []


  // working only
  backgroundData
    ? backgroundData.filter(value => value.startTerm.split("")[0] != "Summer" && value.status === "working-student").map(value => value.startTerm).forEach((quarter) => {
      if (workingMap.has(transform(quarter))) {
        workingMap.set(transform(quarter), workingMap.get(transform(quarter)) + 1);
      }
    }) : []


  // seeking only
  backgroundData
    ? backgroundData.filter(value => value.startTerm.split("")[0] != "Summer" && value.status === "seeking-student").map(value => value.startTerm).forEach((quarter) => {
      if (seekingMap.has(transform(quarter))) {
        seekingMap.set(transform(quarter), seekingMap.get(transform(quarter)) + 1);
      }
    }) : []

  // searching only
  backgroundData
    ? backgroundData.filter(value => value.startTerm.split("")[0] != "Summer" && value.status === "job-seeking-student").map(value => value.startTerm).forEach((quarter) => {
      if (searchingMap.has(transform(quarter))) {
        searchingMap.set(transform(quarter), searchingMap.get(transform(quarter)) + 1);
      }
    }) : []

  const data = {
    labels: quarters,
    datasets: [
      {
        label: 'Domestic',
        data: Array.from(domesticMap.values()),

      },
      {
        label: 'International',
        data: Array.from(internationalMap.values()),
      },
      {
        label: 'Working',
        data: Array.from(workingMap.values()),
      },
      {
        label: 'Seeking Degree',
        data: Array.from(seekingMap.values()),
      },
      {
        label: 'Searching Jobs',
        data: Array.from(searchingMap.values()),
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
        ],
      },
    ]
  };

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
    const season = quarter.split(" ")[0].slice(0, 1); // "F"
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