"use client"

import { Button, Select, TextInput } from '@mantine/core'
import { useForm } from '@mantine/form'
import { ArrowLeft, ArrowRight, CalendarDays, Check, DollarSign, Factory, FlaskConical, Gitlab, GraduationCap, University, X } from 'lucide-react'
import { zodResolver } from 'mantine-form-zod-resolver'
import { z } from 'zod'
import { useSurvey } from '@/hooks/use-survey'
import { useSurveyPartTwo } from '@/hooks/use-partTwo'

import styles from './styles.module.css'
import { useCreateSeekingDegree } from '@/app/(back-end)/features/seeking-degree/api/use-create-seekingDegree'
import { notifications } from '@mantine/notifications';
import styles2 from "@/components/student/survey/notification.module.css"
import { useSeekingDegreeAnswers } from '@/hooks/use-seeking-degree-answers'


export const OptionThree = () => {
  const {
    q1Answer,
    q2Path1Answer,
    q3Path1Answer,
    q4Path1Answer,

    q2Path2Answer,


    q2Path3Answer,
    q5Path3Answer,
    setQ1Answer,
    setQ2Path1Answer,
    setQ3Path1Answer,
    setQ2Path4Answer,
    setQ2Path2Answer,
    setQ2Path3Answer,
    setQ5Path3Answer,
    setQ4Path1Answer
  } = useSurveyPartTwo()
  const { currentPart, setCurrentPart } = useSurvey()

  const { seekingAnswers, setSeekingAnswers } = useSeekingDegreeAnswers()
  const { institution, major, prepTime, degreeLevel } = seekingAnswers
  const schema = z.object({
    institution: z.string(),
    major: z.string(),
    prepTime: z.string(),
    degreeLevel: z.string()
  });

  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      institution,
      major,
      prepTime,
      degreeLevel
    },
    validate: zodResolver(schema),
  });

  const seekingMutation = useCreateSeekingDegree()
  const handleSubmit = (values: typeof form.values) => {
    setSeekingAnswers({
      ...values,
      isHelped: q5Path3Answer === 0
    })
    setCurrentPart(5);
    notifications.show({
      title: 'Employment Completed',
      message: "",
      color: 'teal',
      autoClose: 3000,
      style: { width: 260, height: 60 },
      classNames: styles2
    })
  }

  const handleQ2Pt3 = (input: number) => {
    return input === q2Path3Answer ? setQ2Path3Answer(-1) : setQ2Path3Answer(input)
  }

  const handleQ5Pt3 = (input: number) => {
    return input === q5Path3Answer ? setQ5Path3Answer(-1) : setQ5Path3Answer(input)
  }

  const navigateBack = () => {
    if (q2Path3Answer === 0) {
      setCurrentPart(0);
      return;
    }
    setCurrentPart(2)
    setQ1Answer(1)
  }

  const navigateNext = () => {
    if (q2Path3Answer === -1) {
      notifications.show({
        title: 'Please Answer',
        message: "Are you currently seeking a higher or different degree?",
        color: 'red',
        autoClose: 3000,
        style: { width: 290, height: 80 },
        classNames: styles2
      });
      return;
    }
    setCurrentPart(4)
    setQ1Answer(3)
  }
  return (

    <form onSubmit={form.onSubmit(handleSubmit)}>
      <div className={styles.title}>
        Are you currently seeking a higher or different degree?
      </div>
      <div className={styles.q2_path1_holder}>
        <div className={q2Path3Answer === 0 ? styles.q2_path1_yes_selected : styles.q2_path1_yes} onClick={() => handleQ2Pt3(0)}>
          {q2Path3Answer === 0 &&
            <div className={styles.select_holder}>
              <Check size={15} color='white' />
            </div>
          }
          <Check size={22} />
          YES
        </div>
        <div className={q2Path3Answer === 1 ? styles.q2_path1_no_selected : styles.q2_path1_no} onClick={() => handleQ2Pt3(1)}>
          {q2Path3Answer === 1 &&
            <div className={styles.select_holder}>
              <Check size={15} color='white' />
            </div>
          }
          <X size={22} />
          NO
        </div>
      </div>

      {q2Path3Answer === 0 && (
        <div>
          <div className={styles.title}>What institution are you pursuing a higher degree?</div>
          <TextInput
            size='lg'
            placeholder="Seattle University."
            required
            leftSection={<University />}
            key={form.key('institution')}
            {...form.getInputProps('institution')}
          />

          <div className={styles.title}>What is your target degree level?</div>
          <Select
            size="lg"
            radius={10}
            leftSection={<GraduationCap />}
            style={{}}
            data={[
              "Bachelor's Degree",
              "Master's Degree",
              "Doctoral Degree",

            ]}
            allowDeselect={false}
            key={form.key('degreeLevel')}
            {...form.getInputProps('degreeLevel')}
            comboboxProps={{ transitionProps: { transition: 'pop', duration: 200 } }}
            required
          />

          <div className={styles.title}>What is your major?</div>
          <TextInput
            size='lg'
            placeholder="Ex: Apple Inc."
            required
            leftSection={<FlaskConical />}
            key={form.key('major')}
            {...form.getInputProps('major')}
          />

          <div className={styles.title}>Did the major at CWU help you get acceped?</div>
          <div className={styles.q2_path1_holder}>
            <div className={q5Path3Answer === 0 ? styles.q2_path1_yes_selected : styles.q2_path1_yes} onClick={() => handleQ5Pt3(0)}>
              {q5Path3Answer === 0 &&
                <div className={styles.select_holder}>
                  <Check size={15} color='white' />
                </div>
              }
              <Check size={22} />
              YES
            </div>
            <div className={q5Path3Answer === 1 ? styles.q2_path1_no_selected : styles.q2_path1_no} onClick={() => handleQ5Pt3(1)}>
              {q5Path3Answer === 1 &&
                <div className={styles.select_holder}>
                  <Check size={15} color='white' />
                </div>
              }
              <X size={22} />
              NO
            </div>
          </div>

          <div className={styles.title}>How long did it to get accepted?</div>
          <Select
            size="lg"
            radius={10}
            leftSection={<CalendarDays />}
            style={{}}
            placeholder="3 months"
            data={[
              "less than 1 month",
              "1 month - 3 months",
              "3 months - 6 months",
              "6 months - 1 year",
              "1 year - 2 years",
            ]}
            allowDeselect={false}
            searchable
            required
            nothingFoundMessage="Nothing found..."
            key={form.key('prepTime')}
            {...form.getInputProps('prepTime')}
            comboboxProps={{ transitionProps: { transition: 'pop', duration: 200 } }}
          />
        </div>
      )
      }

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

        {q2Path3Answer !== 0 && <Button
          radius={10}
          size='lg'
          bg={'black'}
          styles={{ root: { fontSize: 16 } }}
          rightSection={<ArrowRight size={24} />}
          onClick={navigateNext}
        >
          Next
        </Button>}

        {q2Path3Answer === 0 && <Button
          radius={10}
          size='lg'
          bg={'black'}
          styles={{ root: { fontSize: 16 } }}
          rightSection={<ArrowRight size={24} />}
          type='submit'
        >
          Next
        </Button>}
      </div>
    </form>

  )
}
