"use client"

import { useSurveyPartTwo } from '@/hooks/use-partTwo'
import { useSurvey } from '@/hooks/use-survey'
import { Button, TextInput } from '@mantine/core'
import { ArrowLeft, ArrowRight, Check, X } from 'lucide-react'
import Image from 'next/image'
import { OptionOne } from './option-one'
import { OptionTwo } from './option-two'
import { OptionThree } from './option-three'
import styles from './styles.module.css'


export const SurveyTwo = () => {
  const {
    q1Answer,
    q2Path1Answer,
    q2Path2Answer,
    q2Path3Answer,
    setQ1Answer,
    setQ2Path1Answer,
    setQ2Path2Answer,
    setQ2Path3Answer,
  } = useSurveyPartTwo()
  const { currentPart, setCurrentPart } = useSurvey()

  const quizThreeAnswers = [
    {
      name: "CWU student",
      href: '/cwu_wildcat.png',
      isDisable: (q2Path2Answer === 0 || q2Path3Answer === 0) && q1Answer !== 0 && q1Answer != -1,
      isActive: q1Answer === 0 && currentPart === 1
    },
    {
      name: "Currently working ",
      href: '/working.png',
      isDisable: (q2Path1Answer === 0 || q2Path3Answer === 0) && q1Answer !== 1 && q1Answer != -1,
      isActive: q1Answer === 1 || (currentPart === 2 && q1Answer !== -1)
    },
    {
      name: "Seeking degree",
      href: '/higher_degree.png',
      isDisable: (q2Path1Answer === 0 || q2Path2Answer === 0) && q1Answer !== 2 && q1Answer != -1 || (q2Path3Answer === 1 && currentPart > 3),
      isActive: q1Answer === 2 || (currentPart === 3 && q1Answer !== -1)
    },
  ]

  const handleAnswerQ1 = (answer: number) => {
    if (answer === q1Answer) {
      setQ1Answer(-1);
      setQ2Path1Answer(-1);
      setQ2Path2Answer(-1);
      setQ2Path3Answer(-1)
      return;
    }
    const part = answer === 0 ? 1 : answer === 1 ? 2 : 3;
    setCurrentPart(part)
    setQ1Answer(answer)
  }

  const navigateBack = () => {
    setCurrentPart(0)
  }
  const navigateNext = () => {

  }
  return (
    <div className={styles.container}>
      <div className={styles.title}>What is your current status?</div>
      <div className={styles.answer1_container}>
        {quizThreeAnswers.map((item, index) => (
          <div key={index}
            className={
              item.isDisable ? styles.answer1_disable1 :
                item.isActive ? styles.answer1_selected : styles.answer1
            }
            onClick={() => handleAnswerQ1(index)}
          >
            {item.isDisable &&
              <div className={styles.answer1_disable2}></div>
            }
            {(item.isActive) &&
              <div className={styles.select_holder}>
                <Check size={15} color='white' />
              </div>
            }
            <div className={styles.img_holder}>
              <Image
                alt='answer-img'
                src={item.href}
                width={index === 0 ? 40 : index === 1 ? 55 : index === 2 ? 65 : 35}
                height={index === 0 ? 40 : index === 1 ? 55 : index === 0 ? 65 : 35}
                className={styles.img_item}
              />
            </div>
            <div className={styles.answer1_title}>{item.name}</div>
          </div>
        ))}
      </div>

      {quizThreeAnswers[0].isActive ?
        <OptionOne />
        : quizThreeAnswers[1].isActive ?
          <OptionTwo />
          : quizThreeAnswers[2].isActive ?
            <OptionThree />
            : <></>
      }

      {q1Answer === -1 && <div className={styles.btn_group}>
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