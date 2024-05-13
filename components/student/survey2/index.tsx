"use client"
import { useSurvey } from '@/hooks/use-survey'
import { ProgressSidebar } from './progress-sidebar'
import styles from './styles.module.css'
import { SurveyOne } from './part-one/survey-p1'
import { SurveyTwo } from './part-two/survey-p2'
import { Button } from '@mantine/core'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { SurveyThree } from './part-three/survey-p3'
import { useSurveyPartTwo } from '@/hooks/use-partTwo'
import { useSurveyPartThree } from '@/hooks/use-partThree'
import { ConfirmationModal } from './part-final/confirmation-modal'
import { SurveyFinal } from './part-final/survey-final'

export const Survey2 = () => {
  const { currentPart, setCurrentPart } = useSurvey()
  const { q1Answer, setQ1Answer, q2Path1Answer, q2Path2Answer, q2Path3Answer } = useSurveyPartTwo()

  const { q1Answer: q1Part3Answer, q2Answer: q2Part3Answer, q3Answer: q3Part3Answer, q4Answer: q4Part3Answer, q5Answer: q5Part3Answer } = useSurveyPartThree()

  const isCompleted = () => {
    return q1Part3Answer !== -1 && q2Part3Answer !== -1 && q3Part3Answer !== -1 && q4Part3Answer !== -1 && q5Part3Answer !== -1 && currentPart === 4
  }
  const handleClicked = (value: number) => {
    const newPart = currentPart + value;
    console.log(newPart)
    if (value > 0 && q1Answer === -1 && currentPart === 1) return;
    if (value > 0 && q1Answer === 2 && currentPart === 0) {
      setCurrentPart(3);
      return;
    }

    if (value > 0 && currentPart === 1 && q2Path1Answer === 0) {
      setCurrentPart(4);
      return;
    }

    if (value > 0 && currentPart === 2 && q2Path2Answer === 0) {
      setCurrentPart(4);
      return;
    }

    if (value > 0 && (q2Path3Answer === 1 || q2Path3Answer === -1) && currentPart === 3) return;

    // toggle answers 
    if (currentPart >= 1 && currentPart <= 3) {
      const newVal = q1Answer + value;
      if (newVal >= 0 && newVal <= 2)
        setQ1Answer(newVal)
    }

    if (value < 0 && currentPart === 4 && q1Answer === 0 && q2Path1Answer === 0) {
      setCurrentPart(1);
      return;
    }

    if (value < 0 && currentPart === 4 && q1Answer === 1 && q2Path2Answer === 0) {
      setCurrentPart(2);
      return;
    }

    if (q1Answer === 0 && q2Path1Answer === 0 && [1, 2, 3].includes(currentPart) && value > 0) {
      setCurrentPart(newPart + 2);
      return;
    }
    if (newPart === -1 || newPart === 5)
      return;
    setCurrentPart(newPart)
  }

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

        {
          currentPart < 5 &&
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
            {
              isCompleted() ?
                <ConfirmationModal />
                : <Button
                  radius={10}
                  size='lg'
                  bg={'black'}
                  styles={{ root: { fontSize: 16 } }}
                  rightSection={<ArrowRight size={24} />}
                  onClick={() => handleClicked(1)}
                >
                  Next
                </Button>}

          </div>
        }
      </div>
    </div>
  )
}