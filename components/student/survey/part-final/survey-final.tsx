"use client"

import Image from "next/image"
import styles from './styles.module.css'
import Link from "next/link"
import { useSurvey } from "@/hooks/use-survey"
import { useGetBackgrounds } from "@/app/(back-end)/features/student-background/api/use-get-backgrounds"
import { useBackgroundAnswers } from "@/hooks/use-background-answers"
import CountUp from 'react-countup'
import { useRouter } from "next/navigation"
import { Button } from "@mantine/core"

export const SurveyFinal = () => {
  const { setCurrentPart } = useSurvey()
  const { data: backgroundData } = useGetBackgrounds()
  const { backgroundAnswers } = useBackgroundAnswers()
  const router = useRouter()
  const matchedMajor = backgroundData ? backgroundData.filter((val) => val.major === backgroundAnswers.major) : []
  const size = backgroundData ? backgroundData.length : 0

  const matchedPercent = (matchedMajor.length / size) * 100;

  const handleClicked = () => {
    router.push('/student/home')
    router.refresh()
  }
  return (
    <div className={styles.container}>
      <p className={styles.header_txt}>Thank you for your participation!</p>
      <Image
        src={'/completed.png'}
        alt="completed status"
        width={90}
        height={100}
        className={styles.completed_img}
      />
      <p className={styles.completed_txt}>Completed</p>
      <div className={styles.description}>
        <p><CountUp end={matchedPercent} decimals={2} duration={2} suffix="%" /> students have the same major as yours</p>
      </div>

      <Button
        variant='variant'
        onClick={handleClicked}
      >
        Back to Home
      </Button>
    </div>
  )
}