"use client"

import { useSurvey } from "@/hooks/use-survey"
import styles from './styles.module.css'
import { Check } from "lucide-react"
import Image from "next/image"

export const ProgressSidebar = () => {
  const { currentPart } = useSurvey()
  const steps = [
    {
      title: 'Background info',
      description: 'Some basic information about yourself',
      isActive: currentPart === 1,
      isCompleted: currentPart > 1
    },
    {
      title: 'Employment status',
      description: 'Some information regarding your current employment status',
      isActive: currentPart === 2,
      isCompleted: currentPart > 2

    },
    {
      title: 'Career planning',
      description: 'Your satisfactions regarding CWU career services',
      isActive: currentPart === 3,
      isCompleted: currentPart > 3

    },
    {
      title: 'Survey completion',
      description: 'Some statistics results for your references',
      isActive: currentPart === 4,
      isCompleted: currentPart > 4

    },
  ]

  return (
    <div className={styles.sidebar_container}>
      <div className={styles.sidebar_banner}>
        <Image
          src={'/banner2.png'}
          alt="cwu-banner"
          width={250}
          height={150}
          className={styles.banner_img}
        />
        <div className={styles.sidebar_title}>
          Graduation Survey
        </div>
      </div>
      <div className={styles.sidebar_des}>Help students explore their post-graduation career paths</div>
      <div className={styles.content_container}>
        <div className={styles.vertical_container}>
          {steps.map((item, index) => (
            <>
              <div className={item.isCompleted ? styles.inner_status_completed : item.isActive ? styles.inner_status_active : styles.inner_status}>
                {item.isCompleted ?
                  <Check color="white" size={14} strokeWidth={4} absoluteStrokeWidth />
                  : <div className={item.isActive ? styles.inner_circle_active : styles.inner_circle}>
                  </div>}
              </div>
              {index != 3 &&
                <div className={item.isCompleted ? styles.status_completed : item.isActive ? styles.status_active : styles.status}> </div>
              }
            </>
          ))}
        </div>
        <div className={styles.steps_container}>
          {steps.map((item) => (
            <div key={item.title} className={styles.steps_item}>
              <p className={styles.steps_title}>{item.title}</p>
              <p className={styles.steps_description}>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}