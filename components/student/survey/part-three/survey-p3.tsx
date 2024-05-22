"use client"

import { useSurveyPartThree } from '@/hooks/use-partThree'
import { Angry, Check, Frown, Meh, Smile, SmilePlus } from 'lucide-react'
import styles from './styles.module.css'

import { useSurvey } from '@/hooks/use-survey'
import { Button } from '@mantine/core'
import { ArrowLeft } from 'lucide-react'
import { ConfirmationModal } from '../part-final/confirmation-modal'

const questions = [
  {

  }
]

const answers = [
  {
    title: "Bad",
    score: "1",
    icon: Angry,
    fillColor: 'red'
  },
  {
    title: "Not so good",
    score: "2",
    icon: Frown,
    fillColor: 'orange'


  },
  {
    title: "Okay",
    score: "3",
    icon: Meh,
    fillColor: 'gray'


  },
  {
    title: "Good",
    score: "4",
    icon: Smile,
    fillColor: 'yellow'


  },
  {
    title: "Excellent!",
    score: "5",
    icon: SmilePlus,
    fillColor: 'green'
  }
]


export const SurveyThree = () => {
  const { q1Answer, setQ1Answer, q2Answer, setQ2Answer, q3Answer, setQ3Answer, q4Answer, setQ4Answer, q5Answer, setQ5Answer } = useSurveyPartThree()

  const { currentPart, setCurrentPart } = useSurvey()

  const handleClicked = (quesNum: number, index: number) => {
    if (quesNum === 1) {
      if (index === q1Answer) {
        setQ1Answer(-1)
        return;
      }
      setQ1Answer(index);
      return;
    }

    if (quesNum === 2) {
      if (index === q2Answer) {
        setQ2Answer(-1)
        return;
      }
      setQ2Answer(index);
      return;
    }

    if (quesNum === 3) {
      if (index === q3Answer) {
        setQ3Answer(-1)
        return;
      }
      setQ3Answer(index)
      return
    }

    if (quesNum === 4) {
      if (index === q4Answer) {
        setQ4Answer(-1)
        return;
      }
      setQ4Answer(index)
      return
    }

    if (quesNum === 5) {
      if (index === q5Answer) {
        setQ5Answer(-1)
        return;
      }
      setQ5Answer(index);
      return
    }
  }

  const navigateBack = () => {
    setCurrentPart(q1Answer)
  }

  return (
    <div className={styles.container}>
      <div className={styles.title}>How did CWU help you with career planning and decisions?</div>
      <div className={styles.question_container}>
        {answers.map((item, index) => (
          <div className={q1Answer === index ? styles.answer_selected : styles.answer} key={item.title} onClick={() => handleClicked(1, index)}>
            {q1Answer === index &&
              <div className={styles.select_holder}>
                <Check size={15} color='white' />
              </div>
            }
            <div className={styles.score_holder}>
              <item.icon size={30} />
            </div>
            <p className={styles.answer_title}>{item.title}</p>
          </div>
        ))}
      </div>

      <div className={styles.title}>How did CWU build your communication and technical skills?</div>
      <div className={styles.question_container}>
        {answers.map((item, index) => (
          <div className={q2Answer === index ? styles.answer_selected : styles.answer} key={item.title} onClick={() => handleClicked(2, index)}>
            {q2Answer === index &&
              <div className={styles.select_holder}>
                <Check size={15} color='white' />
              </div>
            }
            <div className={styles.score_holder}>
              <item.icon size={30} />
            </div>
            <p className={styles.answer_title}>{item.title}</p>
          </div>
        ))}
      </div>

      <div className={styles.title}>How did CWU prepare for your resume?</div>
      <div className={styles.question_container}>
        {answers.map((item, index) => (
          <div className={q3Answer === index ? styles.answer_selected : styles.answer} key={item.title} onClick={() => handleClicked(3, index)}>
            {q3Answer === index &&
              <div className={styles.select_holder}>
                <Check size={15} color='white' />
              </div>
            }
            <div className={styles.score_holder}>
              <item.icon size={30} />
            </div>
            <p className={styles.answer_title}>{item.title}</p>
          </div>
        ))}
      </div>

      <div className={styles.title}>How did CWU prepare for your interviews?</div>
      <div className={styles.question_container}>
        {answers.map((item, index) => (
          <div className={q4Answer === index ? styles.answer_selected : styles.answer} key={item.title} onClick={() => handleClicked(4, index)}>
            {q4Answer === index &&
              <div className={styles.select_holder}>
                <Check size={15} color='white' />
              </div>
            }
            <div className={styles.score_holder}>
              <item.icon size={30} />
            </div>
            <p className={styles.answer_title}>{item.title}</p>
          </div>
        ))}
      </div>

      <div className={styles.title}>How would you rate the professional level of CWU staff? </div>
      <div className={styles.question_container}>
        {answers.map((item, index) => (
          <div className={q5Answer === index ? styles.answer_selected : styles.answer} key={item.title} onClick={() => handleClicked(5, index)}>
            {q5Answer === index &&
              <div className={styles.select_holder}>
                <Check size={15} color='white' />
              </div>
            }
            <div className={styles.score_holder}>
              <item.icon size={30} />
            </div>
            <p className={styles.answer_title}>{item.title}</p>
          </div>
        ))}
      </div>

      <div className={styles.btn_group}>
        <Button
          radius={10}
          size='lg'
          bg={'transparent'}
          styles={{ root: { color: 'black', fontSize: 16 } }}
          leftSection={<ArrowLeft size={24} />}
          onClick={navigateBack}
        >
          Back
        </Button>

        <ConfirmationModal />
      </div>
    </div>
  )
}