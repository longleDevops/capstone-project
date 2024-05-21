"use client"

import { Button, Select, TextInput } from '@mantine/core'
import { useForm } from '@mantine/form'
import { ArrowLeft, ArrowRight, Check, DollarSign, X } from 'lucide-react'
import { zodResolver } from 'mantine-form-zod-resolver'
import { z } from 'zod'
import { useSurvey } from '@/hooks/use-survey'
import { useSurveyPartTwo } from '@/hooks/use-partTwo'

import styles from './styles.module.css'
import { useCreateSeekingDegree } from '@/app/(back-end)/features/seeking-degree/api/use-create-seekingDegree'
import { notifications } from '@mantine/notifications';
import styles2 from "@/components/student/survey/notification.module.css"


export const OptionThree = () => {
  const {
    q1Answer,
    q2Path1Answer,
    q3Path1Answer,
    q4Path1Answer,

    q2Path2Answer,


    q2Path3Answer,

    setQ1Answer,
    setQ2Path1Answer,
    setQ3Path1Answer,
    setQ2Path4Answer,
    setQ2Path2Answer,
    setQ2Path3Answer,
    setQ4Path1Answer
  } = useSurveyPartTwo()
  const { currentPart, setCurrentPart } = useSurvey()

  const schema = z.object({
    institution: z.string(),
    major: z.string(),
  });

  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      institution: '',
      major: '',
    },
    validate: zodResolver(schema),
  });

  const seekingMutation = useCreateSeekingDegree()
  const handleSubmit = (values: typeof form.values) => {
    seekingMutation.mutate({
      ...values,
      isSeeking: q2Path3Answer === 0,
      isHelped: true
    }, {
      onSuccess: () => {
        setCurrentPart(4),
          notifications.show({
            title: 'Employment Completed',
            message: "",
            color: 'teal',
            autoClose: 3000,
            style: { width: 260, height: 60 },
            classNames: styles2
          })
      }
    })
  }
  return (

    <form onSubmit={form.onSubmit(handleSubmit)}>
      <div className={styles.title}>
        Are you currently seeking a higher or different degree?
      </div>
      <div className={styles.q2_path1_holder}>
        <div className={q2Path3Answer === 0 ? styles.q2_path1_yes_selected : styles.q2_path1_yes} onClick={() => setQ2Path3Answer(0)}>
          {q2Path3Answer === 0 &&
            <div className={styles.select_holder}>
              <Check size={15} color='white' />
            </div>
          }
          <Check size={22} />
          YES
        </div>
        <div className={q2Path3Answer === 1 ? styles.q2_path1_no_selected : styles.q2_path1_no} onClick={() => setQ2Path3Answer(1)}>
          {q2Path2Answer === 1 &&
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
            placeholder="Ex: Apple Inc."
            required
            key={form.key('institution')}
            {...form.getInputProps('institution')}
          />

          <div className={styles.title}>What is your major?</div>
          <TextInput
            size='lg'
            placeholder="Ex: Apple Inc."
            required
            key={form.key('major')}
            {...form.getInputProps('major')}
          />

          <div className={styles.title}>Did the major at CWU help you get acceped?</div>
          <TextInput
            size='lg'
            placeholder="Ex: Apple Inc."
            required
            key={form.key('salary')}
            {...form.getInputProps('salary')}
          />

          <div className={styles.title}>How long did it to get accepted?</div>
          <TextInput
            size='lg'
            placeholder="Ex: Apple Inc."
            required
            key={form.key('salary')}
            {...form.getInputProps('salary')}
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
          type='submit'
        >
          Next
        </Button>
      </div>
    </form>

  )
}
