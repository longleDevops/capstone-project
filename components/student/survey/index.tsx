"use client"

import { useSurvey } from '@/hooks/use-survey'
import { SurveyFinal } from './part-final/survey-final'
import { SurveyOne } from './part-one/survey-p1'
import { SurveyThree } from './part-three/survey-p3'
import { SurveyTwo } from './part-two/survey-p2'
import { ProgressSidebar } from './progress-sidebar'
import styles from './styles.module.css'
import { useUser } from '@clerk/nextjs'
import { useGetAccount } from '@/app/(back-end)/features/account/api/use-get-account'
import { redirect } from 'next/navigation'
import { StepperNavbar } from './stepper-navbar'

export const Survey = () => {
  const { currentPart } = useSurvey();
  const { isLoaded } = useUser()
  const { data } = useGetAccount()
  const accountData = data ? data[0].isSubmitted : false
  if (accountData) redirect('/student/home')
  return (
    <div className={styles.container}>
      <div className={styles.left_content}>
        <ProgressSidebar />
      </div>
      <div className={styles.stepper}>
        <StepperNavbar />
      </div>
      <div className={styles.right_content}>
        {!isLoaded ?
          <div className={styles.loading}>...Loading</div> :
          currentPart === 0 ? <SurveyOne />
            : [1, 2, 3, 4].includes(currentPart) ? <SurveyTwo />
              : currentPart === 5 ? <SurveyThree />
                : <SurveyFinal />

        }
      </div>
    </div>
  )
}