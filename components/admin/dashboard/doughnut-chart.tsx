"use client"

import 'chart.js/auto';
import { Doughnut } from 'react-chartjs-2';

import { useGetDomestics } from "@/app/(back-end)/features/domestic-student/api/use-get-domestics";
import { useGetInternationals } from "@/app/(back-end)/features/international-student/api/use-get-internationals";
import { useGetSearchingJob } from "@/app/(back-end)/features/searching-job/api/use-get-searching-job";
import { useGetSeekingDegrees } from "@/app/(back-end)/features/seeking-degree/api/use-get-seekingDegrees";
import { useGetWorking } from "@/app/(back-end)/features/working/api/use-get-workings";
import styles from './styles.module.css';


export const DoughnutChart = () => {

  const { data: workingStudents, isLoading: isLoading1 } = useGetWorking()
  const { data: seekingStudents, isLoading: isLoading2 } = useGetSeekingDegrees()
  const { data: searchingStudents, isLoading: isLoading3 } = useGetSearchingJob()
  const { data: domesticStudents, isLoading: isLoading4 } = useGetDomestics()
  const { data: internationalStudents, isLoading: isLoading5 } = useGetInternationals()

  const totalCollegeStudents = (domesticStudents && internationalStudents) ? domesticStudents.length + internationalStudents.length : 0;

  const totalGraduatedStudents = (workingStudents && seekingStudents && searchingStudents) ? workingStudents.length + seekingStudents.length + searchingStudents.length : 0;

  const total = totalCollegeStudents + totalGraduatedStudents

  const percentage = total === 0 ? 0 :
    (totalCollegeStudents > totalGraduatedStudents ? (totalCollegeStudents / total) * 100
      : (totalGraduatedStudents / total) * 100)
  const data = {
    labels: [
      'CWU',
      'Graduated',
    ],
    datasets: [{
      label: '',
      data: [totalCollegeStudents, totalGraduatedStudents],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
      ],
      hoverOffset: 15,
      borderWidth: 0,
    }]
  };
  return (
    <div className={styles.doughnut_container}>
      <div className={styles.doughnut_value}>
        {percentage.toFixed(0)}%
      </div>
      <Doughnut
        data={data}
        options={
          {
            color: 'black',
            layout: {
              padding: 10
            },
            plugins: {
              legend: {
                display: false
              },

            },
            maintainAspectRatio: false,
            cutout: '70%',
          }
        }
      />
    </div>
  )
}