"use client"

import styles from "./menu.module.css"
import { useDisclosure } from '@mantine/hooks';
import { Modal, Button } from '@mantine/core';
import { useDialog } from '@/hooks/use-dialog';
import 'chart.js/auto';
import { Bar } from "react-chartjs-2"
import { useGetBackgrounds } from "@/app/(back-end)/features/student-background/api/use-get-backgrounds";
import CountUp from 'react-countup'

export const SalaryDialog = () => {

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
  const totalStudent = backgroundData2.length
  const salaryMap = new Map()
  const countMap = new Map()
  majorArr.forEach(val => salaryMap.set(val, 0))
  majorArr.forEach(val => countMap.set(val, 0))
  const workingData = backgroundData2.filter(val => val.avgSalary > 0)

  workingData.forEach(val => {
    salaryMap.set(val.major, salaryMap.get(val.major) + val.avgSalary)
  })

  workingData.forEach(val => {
    countMap.set(val.major, countMap.get(val.major) + 1)
  })

  const avgSalary: number[] = []
  workingData.forEach(val => {
    avgSalary.push(salaryMap.get(val.major) / countMap.get(val.major))
  })
  const data = {
    labels: majorArr,
    datasets: [{
      label: "Avg. Salary",
      data: avgSalary,
      backgroundColor: '#3a4fde',
      hoverBackgroundColor: '#00d4c8',
      maxBarThickness: 40,
      pointStyle: 'cross'
    }]
  };

  return (
    <>
      <Modal opened={isDialogOpen} onClose={() => setIsDialogOpen(false)} centered size="auto" radius={20} withCloseButton={false}
        transitionProps={{ duration: 50 }}>
        {/* Modal content */}
        <div className={styles.modal_container}>
          <div className={styles.chart_title}>
            <p>Average Student Salary By Majors</p>
            <div className={styles.total_title}>
              <CountUp end={totalStudent} duration={3} />
              <p>students</p>
            </div>
          </div>
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

                  scales: {
                    y: {
                      max: 120000,
                      ticks: {
                        font: {
                          size: 15,
                          weight: 'bold'
                        },
                        // Include a dollar sign in the ticks
                        callback: function (value, index, ticks) {
                          return '$ ' + value.toLocaleString();
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
            />
          </div>
        </div>
      </Modal>
    </>
  );
}