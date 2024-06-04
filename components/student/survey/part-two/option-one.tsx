"use client"

import { useSurveyPartTwo } from '@/hooks/use-partTwo'
import { useSurvey } from '@/hooks/use-survey'
import { Button } from '@mantine/core'
import { ArrowLeft, ArrowRight, Check, X } from 'lucide-react'
import styles from './styles.module.css'
import { FormOne } from './forms/form-one'
import { FormTwo } from './forms/form-two'
import styles2 from '@/components/student/survey/notification.module.css'
import { notifications } from '@mantine/notifications';

export const OptionOne = () => {
  const {
    q1Answer,
    q2Path1Answer,
    q3Path1Answer,
    q4Path1Answer,

    q2Path3Answer,

    setQ1Answer,
    setQ2Path1Answer,
    setQ3Path1Answer,
    setQ4Path1Answer,
    setQ4Path1Answer2
  } = useSurveyPartTwo()
  const { currentPart, setCurrentPart } = useSurvey()

  const handleQ2Pt1 = (input: number) => {
    if (input === q2Path1Answer) {
      setQ2Path1Answer(-1)
      setQ3Path1Answer(-1);
      setQ4Path1Answer(-1);
      setQ4Path1Answer2(-1)
      return
    }
    if (input === 1) {
      setQ3Path1Answer(-1);
      setQ4Path1Answer(-1);
      setQ4Path1Answer2(-1);
      setQ2Path1Answer(input);
      return
    }
    setQ2Path1Answer(input)
  }
  const handleQ3Pt1 = (input: number) => {
    return input === q3Path1Answer ? setQ3Path1Answer(-1) : setQ3Path1Answer(input)
  }
  const handleQ4Pt1 = (input: number) => {
    return input === q4Path1Answer ? setQ4Path1Answer(-1) : setQ4Path1Answer(input)
  }

  const navigateNext = () => {
    if (q2Path1Answer === -1) {
      notifications.show({
        title: 'Please Answer',
        message: "Are you currently a CWU student?",
        color: 'red',
        autoClose: 3000,
        style: { width: 290, height: 80 },
        classNames: styles2
      });
      return;
    }
    if (q2Path1Answer === 1) {
      setQ1Answer(1)
      setCurrentPart(2);
      return;
    }
    if (q2Path1Answer === 0) {
      notifications.show({
        title: 'Please Answer',
        message: "Are you a US citizen?",
        color: 'red',
        autoClose: 3000,
        style: { width: 290, height: 80 },
        classNames: styles2
      });
      return;
    }

  }


  return (
    <div>
      <div className={styles.title}>
        Are you currently a CWU student?
      </div>
      <div className={styles.q2_path1_holder}>
        <div className={q2Path1Answer === 0 ? styles.q2_path1_yes_selected : styles.q2_path1_yes} onClick={() => handleQ2Pt1(0)}>
          {q2Path1Answer === 0 &&
            <div className={styles.select_holder}>
              <Check size={15} color='white' />
            </div>
          }
          <Check size={22} />
          YES
        </div>
        <div className={q2Path1Answer === 1 ? styles.q2_path1_no_selected : styles.q2_path1_no} onClick={() => handleQ2Pt1(1)}>
          {q2Path1Answer === 1 &&
            <div className={styles.select_holder}>
              <Check size={15} color='white' />
            </div>
          }
          <X size={22} />
          NO
        </div>
      </div>
      {q2Path1Answer === 0 &&
        <>
          <div className={styles.title}>
            Are you a US citizen?
          </div>
          <div className={styles.q2_path1_holder}>
            <div className={q3Path1Answer === 0 ? styles.q2_path1_yes_selected : styles.q2_path1_yes} onClick={() => handleQ3Pt1(0)}>
              {q3Path1Answer === 0 &&
                <div className={styles.select_holder}>
                  <Check size={15} color='white' />
                </div>
              }
              <Check size={22} />
              YES
            </div>
            <div className={q3Path1Answer === 1 ? styles.q2_path1_no_selected : styles.q2_path1_no} onClick={() => handleQ3Pt1(1)}>
              {q3Path1Answer === 1 &&
                <div className={styles.select_holder}>
                  <Check size={15} color='white' />
                </div>
              }
              <X size={22} />
              NO
            </div>
          </div>
        </>
      }
      {(q2Path1Answer === 0 && q3Path1Answer === 0) && <FormOne />}
      {(q2Path1Answer === 0 && q3Path1Answer === 1) && <FormTwo />}

      {q3Path1Answer === -1 &&
        <div className={styles.btn_group}>
          <Button
            radius={10}
            size='lg'
            bg={'transparent'}
            styles={{ root: { color: 'black', fontSize: 16 } }}
            leftSection={<ArrowLeft size={24} />}
            onClick={() => setCurrentPart(0)}
          >
            Back
          </Button>
          <Button
            radius={10}
            size='lg'
            bg={'black'}
            styles={{ root: { fontSize: 16 } }}
            rightSection={<ArrowRight size={24} />}
            onClick={navigateNext}
          >
            Next
          </Button>
        </div>}
    </div>
  )
}