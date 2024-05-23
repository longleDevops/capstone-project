"use client"


import { BadgeDollarSign, Handshake } from "lucide-react"
import Image from "next/image"
import CountUp from 'react-countup'

import { useGetSubmittedAccounts } from "@/app/(back-end)/features/account/api/use-get-submitted-accounts"
import { useGetDomestics } from "@/app/(back-end)/features/domestic-student/api/use-get-domestics"
import { useGetInternationals } from "@/app/(back-end)/features/international-student/api/use-get-internationals"
import { useGetSearchingJob } from "@/app/(back-end)/features/searching-job/api/use-get-searching-job"
import { useGetSeekingDegrees } from "@/app/(back-end)/features/seeking-degree/api/use-get-seekingDegrees"
import { useGetWorking } from "@/app/(back-end)/features/working/api/use-get-workings"
import { DoughnutChart } from "./doughnut-chart"
import { CareerDialog } from "./menu/career-dialog"
import { CareerMenu } from "./menu/career-menu"
import { SalaryDialog } from "./menu/salary-dialog"
import { SalaryMenu } from "./menu/salary-menu"
import styles from "./styles.module.css"

export const Statistics = () => {

  const { data: submittedAccounts } = useGetSubmittedAccounts()
  const totalSubmittedStudents = submittedAccounts ? submittedAccounts.length : 0

  const { data: workingStudents } = useGetWorking()
  // const { data: seekingStudents } = useGetSeekingDegrees()
  // const { data: searchingStudents } = useGetSearchingJob()
  const { data: domesticStudents } = useGetDomestics()
  const { data: internationalStudents } = useGetInternationals()

  const workingSalary = workingStudents ? workingStudents.map((item) => item.avgSalary) : [0]
  const domesticSalary = domesticStudents ? domesticStudents.map((item) => item.avgInternshipSalary) : [0]
  const internationalSalary = internationalStudents ? internationalStudents.map((item) => item.avgSalary) : [0]

  const totalSalary = workingSalary.concat(domesticSalary, internationalSalary)
  const filteredSalary = totalSalary.filter(value => value !== 0)

  const sum = filteredSalary.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  const totalAvg = Number(sum / filteredSalary.length)

  const totalWorkingStudents = filteredSalary.length;

  const statistics = [
    {
      title: "Total Students",
      description: "CWU & Alumni",
      data: totalSubmittedStudents
    },
    {
      title: "Salary",
      description: "Avg. Income",
      data: totalAvg
    },
    {
      title: "Job",
      description: "Working students",
      data: totalWorkingStudents
    },
  ]


  return (
    <>
      {statistics.map((item, index) => (
        <div className={index === 0 ? styles.statistics_holder1 : styles.statistics_holder2} key={index}>
          <div className={styles.statistics_left}>
            {index === 0 ? <Image
              alt="cwu logo"
              src={"/cwu_wildcat.png"}
              width={50}
              height={50}
              className={styles.statistics_logo}
            />
              : index === 1 ?
                <div className={styles.statistics_icon}>
                  <BadgeDollarSign size={23} color="white" />
                </div>
                : <div className={styles.statistics_icon2}>
                  <Handshake size={23} color="white" />
                </div>
            }
            <p className={styles.statistics_title}>{item.title}</p>
            <p className={styles.statistics_description}>
              {item.description}
            </p>
            <div className={styles.statistics_value}>
              {index === 1 ? <CountUp end={item.data} duration={2} prefix="$" />
                : index === 2 ? <CountUp end={item.data} duration={1.6} suffix="+" />
                  : <CountUp end={item.data} duration={1.2} />
              }
            </div>

          </div>
          <div className={styles.statistics_right}>
            {index === 0 ?

              <DoughnutChart />

              : index === 1 ? <SalaryMenu />
                : <CareerMenu />
            }
          </div>

        </div>
      ))}
      <SalaryDialog />
      <CareerDialog />
    </>
  )
}