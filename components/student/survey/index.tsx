"use client"

import { useSurvey } from '@/hooks/use-survey'
import { SurveyFinal } from './part-final/survey-final'
import { SurveyOne } from './part-one/survey-p1'
import { SurveyThree } from './part-three/survey-p3'
import { SurveyTwo } from './part-two/survey-p2'
import { ProgressSidebar } from './progress-sidebar'
import styles from './styles.module.css'

export const Survey = () => {
  const { currentPart } = useSurvey();

  return (
    <div className={styles.container}>
      <div className={styles.left_content}>
        <ProgressSidebar />
      </div>
      <div className={styles.right_content}>
        {currentPart === 0 ? <SurveyOne />
          : [1, 2, 3].includes(currentPart) ? <SurveyTwo />
            : currentPart === 4 ? <SurveyThree />
              : <SurveyFinal />
        }
      </div>
    </div>
  )
}