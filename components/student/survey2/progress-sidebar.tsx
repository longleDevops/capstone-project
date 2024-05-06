"use client"

import { useSurvey } from "@/hooks/use-survey"
import styles from './styles.module.css'

export const ProgressSidebar = () => {
  const { isStepOneStarted, isStepTwoStarted, setIsStepTwoStarted, isStepThreeStarted, setIsStepThreeStarted } = useSurvey()
  const steps = [
    {
      title: 'Background info',
      description: 'Some basic information about yourself',
      active: isStepOneStarted
    },
    {
      title: 'Background info',
      description: 'Some basic information about yourself',
      active: isStepTwoStarted
    },
    {
      title: 'Background info',
      description: 'Some basic information about yourself',
      active: isStepThreeStarted
    },
    {
      title: 'Background info',
      description: 'Some basic information about yourself',
      active: isStepThreeStarted
    },
  ]
  return (
    <div>
      <p>Central Washington University</p>
      <p>Post career graduation survey</p>
      <p>Complete 3 assessment surveys so that we can provide you the best statistic result.</p>
      <div className={styles.content_container}>
        <div className={styles.vertical_container}>
          {steps.map((item) => (
            <>
              <div className={styles.inner_status}>
                <div className={styles.inner_circle}>
                </div>
              </div>
              <div className={styles.status}> </div>
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