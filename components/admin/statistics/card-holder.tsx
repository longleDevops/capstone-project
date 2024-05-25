"use client"

import Image from "next/image"
import styles from "./styles.module.css"
import { CircleHelp, HandCoins, Percent, Star } from "lucide-react"
import { useGetBackgrounds } from "@/app/(back-end)/features/student-background/api/use-get-backgrounds"
import CountUp from 'react-countup'
import { useFilter } from "@/hooks/use-filter"

export const CardHolder = () => {
  const { majorName } = useFilter()

  const { data: backgroundData1, isLoading } = useGetBackgrounds()

  const backgroundData2 = backgroundData1 ? backgroundData1 : []

  const backgroundData = (majorName.size === 0 || majorName.size === 14) ? backgroundData2 : backgroundData2.filter((item) => majorName.has(item.major))

  const totalStudents = backgroundData ? (backgroundData.length) : 0;

  const ratingArr = backgroundData ? backgroundData.map(value => Number(value.avgRating)) : []
  const sumRating = ratingArr.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }, 0);
  const avgRating = Number((sumRating / ratingArr.length).toFixed(1))

  const employedArr = backgroundData ? backgroundData.filter(value => value.isEmployed).map(value => value.avgSalary) : []

  const totalSalary = employedArr.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }, 0);

  const avgSalary = Number((totalSalary / employedArr.length).toFixed(1))

  const employmentRate = totalStudents > 0 ? (employedArr.length / totalStudents) * 100 : 0.00

  const items = [
    {
      title: "Total Students",
      value: totalStudents,
      increased: "3%",
      icon: "icon",
      prefix: '',
      suffix: ''
    },
    {
      title: "Employment Rate",
      value: employmentRate,
      increased: "3%",
      icon: Percent,
      prefix: '',
      suffix: '%'
    },
    {
      title: "Avg Salary",
      value: avgSalary,
      increased: "3%",
      icon: HandCoins,
      prefix: '$',
      suffix: ''
    },
    {
      title: "Avg Rating",
      value: Number(avgRating.toFixed(1)),
      increased: "3%",
      icon: Star,
      prefix: '',
      suffix: ''
    }
  ]
  return (
    <div className={styles.card_container}>
      {items.map((item, index) => (
        <div
          className={styles.card_holder}
          key={item.title}
          style={index === 0 ? { backgroundColor: '#f2f2f2', boxShadow: ' 2px 3px 3px #9E0419' } : {}}
        >
          <div className={styles.upper_card}>
            <div className={index === 0 ? styles.logo_holder_first : styles.logo_holder}
            >
              {index === 0 && <Image
                alt="cwu logo"
                src={"/cwu_wildcat.png"}
                width={50}
                height={50}
                className={styles.cwu_logo}
              />}
              {<item.icon />}
            </div>
            <div>{item.increased}</div>
          </div>
          <div className={styles.lower_card}>
            <div>
              <p className={styles.lower_card_value} style={index === 0 ? {} : {}}
              >
                < CountUp end={item.value} duration={2} prefix={item.prefix} suffix={item.suffix} />
              </p>
              <p className={styles.lower_card_title} style={index === 0 ? {} : {}}
              >{item.title}</p>
            </div>
            <CircleHelp size={18} color='white' fill="blue" />
          </div>
        </div>
      ))}
    </div>
  )
}