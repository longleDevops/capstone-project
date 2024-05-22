"use client"

import { useSurvey } from "@/hooks/use-survey"
import styles from './styles.module.css'
import { Check } from "lucide-react"
import Image from "next/image"
import { useSurveyPartTwo } from "@/hooks/use-partTwo"

export const ProgressSidebar = () => {
  const { currentPart, setCurrentPart } = useSurvey()
  const { q1Answer, setQ1Answer } = useSurveyPartTwo()
  const steps = [
    {
      title: 'Background info',
      description: 'Some basic information about yourself',
      isActive: currentPart === 0,
      isCompleted: currentPart > 0
    },
    {
      title: 'Employment status',
      description: 'Some information regarding your current employment status',
      isActive: [1, 2, 3, 4].includes(currentPart),
      isCompleted: currentPart > 4

    },
    {
      title: 'Career planning',
      description: 'Your satisfactions regarding CWU career services',
      isActive: currentPart === 5,
      isCompleted: currentPart > 5

    },
    {
      title: 'Survey completion',
      description: 'Some statistics results for your references',
      isActive: currentPart === 6,
      isCompleted: currentPart >= 6

    },
  ]

  const tracking = ["1", "2", "3", "4"]
  const handleTrackingClicked = (pos: number) => {
    setQ1Answer(pos);
    setCurrentPart(pos + 1)
  }
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
              {(index === 0 || index === 2) &&
                <div className={item.isCompleted ? styles.status_completed : item.isActive ? styles.status_active : styles.status}> </div>
              }
              {index === 1 &&
                <div className={item.isCompleted ? styles.status_completed2 : item.isActive ? styles.status_active2 : styles.status2}> </div>
              }
            </>
          ))}
        </div>
        <div className={styles.steps_container}>
          {steps.map((item, index) => (
            <div key={item.title} className={index === 1 ? styles.steps_item2 : styles.steps_item}>
              <p className={styles.steps_title}>{item.title}</p>
              <p className={styles.steps_description}>{item.description}</p>
              {index === 1 && [1, 2, 3, 4].includes(currentPart) && (
                <div className={styles.tracking_container}>
                  {tracking.map((item, index) => (
                    <div key={index} className={[1, 2, 3, 4].includes(currentPart) && q1Answer === index ? styles.tracking_item_active : styles.tracking_item} onClick={() => handleTrackingClicked(index)}>
                      {item}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}