"use client"
import { useSurvey } from '@/hooks/use-survey'
import { ProgressSidebar } from './progress-sidebar'
import styles from './styles.module.css'
import { SurveyOne } from './part-one/survey-p1'
import { SurveyTwo } from './part-two/survey-p2'
import { Button } from '@mantine/core'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { SurveyThree } from './part-three/survey-p3'

export const Survey2 = () => {
  const { isStepOneStarted, setIsStepOneStarted, isStepTwoStarted, setIsStepTwoStarted, isStepThreeStarted, setIsStepThreeStarted, currentPart, setCurrentPart } = useSurvey()

  const handleClicked = (value: number) => {
    const newPart = currentPart + value;
    if (newPart === 0 || newPart === 5)
      return;
    setCurrentPart(newPart)
  }
  return (
    <div className={styles.container}>
      <div className={styles.left_content}>
        <ProgressSidebar />
      </div>
      <div className={styles.right_content}>
        {currentPart === 1 ? <SurveyOne />
          : currentPart === 2 ? <SurveyTwo />
            : <SurveyThree />

        }

        <div className={styles.btn_group}>
          <Button
            radius={10}
            size='lg'
            bg={'transparent'}
            styles={{ root: { color: 'black', fontSize: 16 } }}
            leftSection={<ArrowLeft size={24} />}
            onClick={() => handleClicked(-1)}
          >
            Back
          </Button>
          <Button
            radius={10}
            size='lg'
            bg={'black'}
            styles={{ root: { fontSize: 16 } }}
            rightSection={<ArrowRight size={24} />}
            onClick={() => handleClicked(1)}
          >
            Next
          </Button>

        </div>
      </div>
    </div>
  )
}