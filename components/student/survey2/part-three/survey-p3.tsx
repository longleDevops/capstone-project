import { Angry, Check, Frown, Meh, Smile, SmilePlus } from 'lucide-react'
import styles from './styles.module.css'
import Image from 'next/image'
import { useState } from 'react'

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
  const [q1Answer, setQ1Answer] = useState(-1)
  const [q2Answer, setQ2Answer] = useState(-1)
  const [q3Answer, setQ3Answer] = useState(-1)

  return (
    <div className={styles.container}>
      <div className={styles.title}>On the scale 1 to 5, how did CWU help you with career planning and decisions?</div>
      <div className={styles.question_container}>
        {answers.map((item, index) => (
          <div className={styles.answer} key={item.title} onClick={() => setQ1Answer(index)}>
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

      <div className={styles.title}>On the scale 1 to 5, how did CWU help you with career planning and decisions?</div>
      <div className={styles.question_container}>
        {answers.map((item, index) => (
          <div className={styles.answer} key={item.title} onClick={() => setQ2Answer(index)}>
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

      <div className={styles.title}>On the scale 1 to 5, how did CWU help you with career planning and decisions?</div>
      <div className={styles.question_container}>
        {answers.map((item, index) => (
          <div className={styles.answer} key={item.title} onClick={() => setQ3Answer(index)}>
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

    </div>
  )
}