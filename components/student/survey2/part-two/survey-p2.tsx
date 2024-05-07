"use client"

import Image from 'next/image'
import styles from './styles.module.css'
import { useState } from 'react'
import { Check, CircleCheck, X } from 'lucide-react'
import { useSurveyPartTwo } from '@/hooks/use-partTwo'
import { TextInput } from '@mantine/core'

const quizThreeAnswers = [
  {
    name: "CWU student",
    href: '/cwu_wildcat.png'
  },
  {
    name: "Currently working ",
    href: '/working.png'
  },
  {
    name: "Seeking degree",
    href: '/higher_degree.png'
  },
  {
    name: "Taking break",
    href: '/vacation_tree.png'
  }
]

export const SurveyTwo = () => {
  const { q1Answer, setQ1Answer, q2Path1Answer, setQ2Path1Answer, q3Path1Answer, setQ3Path1Answer, q2Path4Answer, setQ2Path4Answer } = useSurveyPartTwo()

  const handleAnswerQ1 = (answer: number) => {
    setQ1Answer(answer)
  }
  return (
    <div className={styles.container}>
      <div className={styles.title}>What is your current status?</div>
      <div className={styles.answer1_container}>
        {quizThreeAnswers.map((item, index) => (
          <div className={styles.answer1} onClick={() => handleAnswerQ1(index)}>
            {q1Answer === index &&
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

      {q1Answer === 0 ?
        <>
          <div className={styles.title}>
            Have you participated in any internship programs?
          </div>
          <div className={styles.q2_path1_holder}>
            <div className={styles.q2_path1_yes} onClick={() => setQ2Path1Answer(0)}>
              {q2Path1Answer === 0 &&
                <div className={styles.select_holder}>
                  <Check size={15} color='white' />
                </div>
              }
              <Check size={22} />
              YES
            </div>
            <div className={styles.q2_path1_no} onClick={() => setQ2Path1Answer(1)}>
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
              <div className={styles.title}>What is your company name?</div>
              <TextInput
                size='lg'
                placeholder="Ex: Apple Inc."
              />

              <div className={styles.title}>What is your job title?</div>
              <TextInput
                size='lg'
                placeholder="Ex: Apple Inc."
              />

              <div className={styles.title}>What is your estimate salary?</div>
              <TextInput
                size='lg'
                placeholder="Ex: Apple Inc."
              />

              <div className={styles.title}>How long did it take for preparing?</div>
              <TextInput
                size='lg'
                placeholder="Ex: Apple Inc."
              />
            </>
          }
        </>
        : q1Answer === 1 ?
          <div>
            <div className={styles.title}>What is your company name?</div>
            <TextInput
              size='lg'
              placeholder="Ex: Apple Inc."
            />

            <div className={styles.title}>What is your job title?</div>
            <TextInput
              size='lg'
              placeholder="Ex: Apple Inc."
            />

            <div className={styles.title}>What is your estimate salary?</div>
            <TextInput
              size='lg'
              placeholder="Ex: Apple Inc."
            />

            <div className={styles.title}>Did you got any recommendation letter from CWU?</div>
            <TextInput
              size='lg'
              placeholder="Ex: Apple Inc."
            />

            <div className={styles.title}>How did you secure your current job?</div>
            <TextInput
              size='lg'
              placeholder="Ex: Apple Inc."
            />
          </div>
          : q1Answer === 2 ?
            <div>
              <div className={styles.title}>What institution are you pursuing a higher degree?</div>
              <TextInput
                size='lg'
                placeholder="Ex: Apple Inc."
              />

              <div className={styles.title}>What is your major?</div>
              <TextInput
                size='lg'
                placeholder="Ex: Apple Inc."
              />

              <div className={styles.title}>Did the major at CWU help you get acceped?</div>
              <TextInput
                size='lg'
                placeholder="Ex: Apple Inc."
              />

              <div className={styles.title}>How long did it to get accepted?</div>
              <TextInput
                size='lg'
                placeholder="Ex: Apple Inc."
              />
            </div>
            :
            <>
              <div className={styles.title}>
                Are you planning on applying for a job?
              </div>
              <div className={styles.q2_path1_holder}>
                <div className={styles.q2_path1_yes} onClick={() => setQ2Path4Answer(0)}>
                  {q2Path4Answer === 0 &&
                    <div className={styles.select_holder}>
                      <Check size={15} color='white' />
                    </div>
                  }
                  <Check size={22} />
                  YES
                </div>
                <div className={styles.q2_path1_no} onClick={() => setQ2Path4Answer(1)}>
                  {q2Path4Answer === 1 &&
                    <div className={styles.select_holder}>
                      <Check size={15} color='white' />
                    </div>
                  }
                  <X size={22} />
                  NO
                </div>
              </div>
              {q2Path4Answer === 0 &&
                <>
                  <div className={styles.title}>What is the job title you are aiming for?</div>
                  <TextInput
                    size='lg'
                    placeholder="Ex: Apple Inc."
                  />

                  <div className={styles.title}>How much salary would you expect?</div>
                  <TextInput
                    size='lg'
                    placeholder="Ex: Apple Inc."
                  />

                  <div className={styles.title}>How long do you expect for getting the new job?</div>
                  <TextInput
                    size='lg'
                    placeholder="Ex: Apple Inc."
                  />
                </>
              }
            </>
      }
    </div>
  )
}