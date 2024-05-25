"use client"

import styles from "./menu.module.css"
import { useDisclosure } from '@mantine/hooks';
import { Modal, Button } from '@mantine/core';
import { useDialog } from '@/hooks/use-dialog';
import 'chart.js/auto';
import { Bar } from "react-chartjs-2"
import { useGetBackgrounds } from "@/app/(back-end)/features/student-background/api/use-get-backgrounds";

export const CareerDialog = () => {
  const { isDialogOpen2, setIsDialogOpen2 } = useDialog()

  const majorArr = [
    "Art",
    "Elementary Education",
    "Business",
    "Psychology",
    "Criminal Justice and Safety Studies",
    "Social Science Research Methods",
    "Marketing",
    "Computer and Information Systems Security",
    "Photography",
    "Web Page and Digital Design",
    "Accounting",
    "Finance",
    "Nursing",
    "Medical"
  ]

  const { isDialogOpen, setIsDialogOpen } = useDialog()

  const { data: backgroundData1 } = useGetBackgrounds()

  const backgroundData2 = backgroundData1 ? backgroundData1 : []

  const workingMap = new Map()
  majorArr.forEach(val => workingMap.set(val, 0))
  const workingData = backgroundData2.filter(val => val.avgSalary > 0)

  workingData.forEach(val => {
    workingMap.set(val.major, workingMap.get(val.major) + 1)
  })

  const workingArr: number[] = []
  workingData.forEach(val => {
    workingArr.push(workingMap.get(val.major))
  })


  const labels = majorArr;
  const data = {
    labels: labels,
    datasets: [{
      axis: 'y',
      label: 'Total employed students per major',
      data: workingArr,
      fill: true,
      backgroundColor: [
        'rgba(255, 99, 132, 0.4)',
        'rgba(255, 159, 64, 0.4)',
        'rgba(255, 205, 86, 0.4)',
        'rgba(75, 192, 192, 0.4)',
        'rgba(54, 162, 235, 0.4)',
        'rgba(153, 102, 255, 0.4)',
        'rgba(201, 203, 207, 0.4)'
      ],
      borderColor: [
        'rgb(255, 99, 132)',
        'rgb(255, 159, 64)',
        'rgb(255, 205, 86)',
        'rgb(75, 192, 192)',
        'rgb(54, 162, 235)',
        'rgb(153, 102, 255)',
        'rgb(201, 203, 207)'
      ],
      borderWidth: 1
    }]
  };

  return (
    <>
      <Modal opened={isDialogOpen2} onClose={() => setIsDialogOpen2(false)} withCloseButton={false} centered size="auto" radius={20}
        transitionProps={{ duration: 50 }}>
        {/* Modal content */}
        <div className={styles.chart_title}>Total Employed Students Per Major</div>
        <div className={styles.bar_container}>
          <Bar
            options={
              {
                responsive: true,
                maintainAspectRatio: false,
                indexAxis: 'y',
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

                scales: {
                  y: {
                    ticks: {
                      font: {
                        size: 16,
                        weight: 'bold'
                      }
                    },
                    border: {
                      dash: [5]
                    },

                  },
                  x: {
                    ticks: {
                      font: {
                        size: 12,
                        weight: 'bold'
                      }
                    },
                    title: {
                      font: {
                        size: 18,
                        weight: 'bold'
                      }
                    },
                    border: {
                      dash: [5]
                    }
                  },
                }
              }
            }
            data={data}

          />
        </div>
      </Modal>
    </>
  );
}