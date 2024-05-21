"use client"

import { Button, Select, TextInput } from '@mantine/core'
import { useForm } from '@mantine/form'
import { ArrowLeft, ArrowRight, Check, DollarSign, X } from 'lucide-react'
import { zodResolver } from 'mantine-form-zod-resolver'
import { z } from 'zod'
import { useSurvey } from '@/hooks/use-survey'
import { useSurveyPartTwo } from '@/hooks/use-partTwo'

import styles from './styles.module.css'
import { SalaryDialog } from '@/components/admin/dashboard/menu/salary-dialog'
import { useCreateWorking } from '@/app/(back-end)/features/working/api/use-create-working'
import { notifications } from '@mantine/notifications';
import styles2 from "@/components/student/survey/notification.module.css"


export const OptionTwo = () => {
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
    companyName: z.string(),
    jobTitle: z.string(),
    salary: z.string(),
  });

  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      companyName: '',
      jobTitle: '',
      salary: '',
    },
    validate: zodResolver(schema),
  });

  const workingMutation = useCreateWorking()

  const handleSubmit = (values: typeof form.values) => {
    workingMutation.mutate(
      {
        ...values,
        isWorking: q2Path2Answer === 0
      },
      {
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
      }
    )
  }
  return (

    <form onSubmit={form.onSubmit(handleSubmit)}>
      <div className={styles.title}>
        Are you currently working?
      </div>
      <div className={styles.q2_path1_holder}>
        <div className={q2Path2Answer === 0 ? styles.q2_path1_yes_selected : styles.q2_path1_yes} onClick={() => setQ2Path2Answer(0)}>
          {q2Path2Answer === 0 &&
            <div className={styles.select_holder}>
              <Check size={15} color='white' />
            </div>
          }
          <Check size={22} />
          YES
        </div>
        <div className={q2Path2Answer === 1 ? styles.q2_path1_no_selected : styles.q2_path1_no} onClick={() => setQ2Path2Answer(1)}>
          {q2Path2Answer === 1 &&
            <div className={styles.select_holder}>
              <Check size={15} color='white' />
            </div>
          }
          <X size={22} />
          NO
        </div>
      </div>

      {q2Path2Answer === 0 ? (
        <div>
          <div className={styles.title}>What is your company name?</div>
          <TextInput
            size='lg'
            placeholder="Ex: Apple Inc."
            required
            key={form.key('companyName')}
            {...form.getInputProps('companyName')}
          />

          <div className={styles.title}>What is your job title?</div>
          <TextInput
            size='lg'
            placeholder="Ex: Apple Inc."
            required
            key={form.key('jobTitle')}
            {...form.getInputProps('jobTitle')}
          />

          <div className={styles.title}>What is your estimate salary?</div>
          <Select
            size="lg"
            radius={10}
            leftSection={<DollarSign />}
            style={{}}
            placeholder="Ex: $50,000 - $60,0000"
            data={[
              "$40,000 - $50,000",
              "$50,000 - $60,000",
              "$60,000 - $70,000",
              "$70,000 - $80,000",
              "$80,000 - $90,000",
              "$90,000 - $100,000",
              "Above $100,000", // list of salaries.
            ]}
            allowDeselect={false}
            searchable
            nothingFoundMessage="Nothing found..."
            key={form.key('salary')}
            {...form.getInputProps('salary')}
            comboboxProps={{ transitionProps: { transition: 'pop', duration: 200 } }}
          />
        </div>
      ) : (
        <div>
          <div className={styles.title}>What company have you applied to?</div>
          <TextInput
            size='lg'
            placeholder="Ex: Apple Inc."
            required
            key={form.key('companyName')}
            {...form.getInputProps('companyName')}
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