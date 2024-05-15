"use client"

import Image from 'next/image'
import styles from './styles.module.css'
import { useState } from 'react'
import { Check, CircleCheck, X } from 'lucide-react'
import { useSurveyPartTwo } from '@/hooks/use-partTwo'
import { TextInput } from '@mantine/core'
import { useSurvey } from '@/hooks/use-survey'


export const SurveyTwo = () => {
  const { q1Answer, setQ1Answer, q2Path1Answer, setQ2Path1Answer, q3Path1Answer, setQ3Path1Answer, q2Path4Answer, setQ2Path4Answer, q2Path2Answer, setQ2Path2Answer, q2Path3Answer, setQ2Path3Answer } = useSurveyPartTwo()
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
  const handleYes = (input: number) => {
    if (currentPart === 1) {
      if (input === q2Path1Answer) {
        setQ2Path1Answer(-1);
      }
      setQ2Path1Answer(input);
    } else if (currentPart === 2) {
      if (input === q3Path1Answer) {
        setQ3Path1Answer(-1);
        return;
      }
      setQ3Path1Answer(input)
    } else if (currentPart === 2) {
      if (input === q2Path2Answer) {
        setQ2Path2Answer(-1);
        return;
      }
      setQ2Path2Answer(input)
    } else {
      if (input === q2Path3Answer) {
        setQ2Path3Answer(-1);
        return;
      }
      setQ2Path3Answer(input)
    }
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
        <>
          <div className={styles.title}>
            Are you currently a CWU student?
          </div>
          <div className={styles.q2_path1_holder}>
            <div className={q2Path1Answer === 0 ? styles.q2_path1_yes_selected : styles.q2_path1_yes} onClick={() => handleYes(0)}>
              {q2Path1Answer === 0 &&
                <div className={styles.select_holder}>
                  <Check size={15} color='white' />
                </div>
              }
              <Check size={22} />
              YES
            </div>
            <div className={q2Path1Answer === 1 ? styles.q2_path1_no_selected : styles.q2_path1_no} onClick={() => handleYes(1)}>
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
                <div className={q3Path1Answer === 0 ? styles.q2_path1_yes_selected : styles.q2_path1_yes} onClick={() => handleYes(0)}>
                  {q3Path1Answer === 0 &&
                    <div className={styles.select_holder}>
                      <Check size={15} color='white' />
                    </div>
                  }
                  <Check size={22} />
                  YES
                </div>
                <div className={q3Path1Answer === 1 ? styles.q2_path1_no_selected : styles.q2_path1_no} onClick={() => handleYes(1)}>
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
          {q3Path1Answer === 0 &&
            <>
              <div className={styles.title}>
                Have you participated in any internship programs?
              </div>
              <div className={styles.q2_path1_holder}>
                <div className={styles.q2_path1_yes} onClick={() => handleYes(0)}>

                  <Check size={22} />
                  YES
                </div>
                <div className={styles.q2_path1_no} onClick={() => setQ2Path1Answer(1)}>

                  <X size={22} />
                  NO
                </div>
              </div>
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

          {q3Path1Answer === 1 &&
            <>
              <div className={styles.title}>
                Have you taken OPT or CPT?
              </div>
              <div className={styles.q2_path1_holder}>
                <div className={styles.q2_path1_yes} onClick={() => handleYes(0)}>

                  <Check size={22} />
                  CPT
                </div>
                <div className={styles.q2_path1_no} onClick={() => setQ2Path1Answer(1)}>

                  <X size={22} />
                  OPT
                </div>
              </div>
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
        : quizThreeAnswers[1].isActive ?
          <>
            <div className={styles.title}>
              Are you currently working?
            </div>
            <div className={styles.q2_path1_holder}>
              <div className={styles.q2_path1_yes} onClick={() => handleYes(0)}>
                {q2Path2Answer === 0 &&
                  <div className={styles.select_holder}>
                    <Check size={15} color='white' />
                  </div>
                }
                <Check size={22} />
                YES
              </div>
              <div className={styles.q2_path1_no} onClick={() => handleYes(1)}>
                {q2Path2Answer === 1 &&
                  <div className={styles.select_holder}>
                    <Check size={15} color='white' />
                  </div>
                }
                <X size={22} />
                NO
              </div>
            </div>

            {q2Path2Answer === 0 &&
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
              </div>}
          </>
          : quizThreeAnswers[2].isActive ?
            <>
              <div className={styles.title}>
                Are you currently seeking a higher or different degree?
              </div>
              <div className={styles.q2_path1_holder}>
                <div className={styles.q2_path1_yes} onClick={() => handleYes(0)}>
                  {q2Path3Answer === 0 &&
                    <div className={styles.select_holder}>
                      <Check size={15} color='white' />
                    </div>
                  }
                  <Check size={22} />
                  YES
                </div>
                <div className={styles.q2_path1_no} onClick={() => handleYes(1)}>
                  {q2Path3Answer === 1 &&
                    <div className={styles.select_holder}>
                      <Check size={15} color='white' />
                    </div>
                  }
                  <X size={22} />
                  NO
                </div>
              </div>
              {q2Path3Answer === 0 &&
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
                </div>}
            </>

            : <></>

      }
    </div>
  )
}