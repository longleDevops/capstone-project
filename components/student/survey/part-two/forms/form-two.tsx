"use client"

import { useCreateDomestic } from '@/app/(back-end)/features/domestic-student/api/use-create-cwu'
import { useSurveyPartTwo } from '@/hooks/use-partTwo'
import { useSurvey } from '@/hooks/use-survey'
import { Select, TextInput, Button } from '@mantine/core'
import { useForm } from '@mantine/form'
import { Check, DollarSign, X, ArrowLeft, ArrowRight } from 'lucide-react'
import { zodResolver } from 'mantine-form-zod-resolver'
import { z } from 'zod'
import styles from '@/components/student/survey/part-two/styles.module.css'
import { useCreateInternational } from '@/app/(back-end)/features/international-student/api/use-create-international'
import { notifications } from '@mantine/notifications';
import styles2 from "@/components/student/survey/notification.module.css"

export const FormTwo = () => {
  const {
    q1Answer,
    q2Path1Answer,
    q3Path1Answer,
    q4Path1Answer,
    q4Path1Answer2,
    q2Path2Answer,


    q2Path3Answer,

    setQ1Answer,
    setQ2Path1Answer,
    setQ3Path1Answer,
    setQ2Path4Answer,
    setQ2Path2Answer,
    setQ2Path3Answer,
    setQ4Path1Answer,
    setQ4Path1Answer2
  } = useSurveyPartTwo()
  const { currentPart, setCurrentPart } = useSurvey()

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

  const handleQ2Pt1 = (input: number) => {
    return input === q2Path1Answer ? setQ2Path1Answer(-1) : setQ2Path1Answer(input)
  }
  const handleQ3Pt1 = (input: number) => {
    return input === q3Path1Answer ? setQ3Path1Answer(-1) : setQ3Path1Answer(input)
  }
  const handleQ4Pt1 = (input: number) => {
    return input === q4Path1Answer ? setQ4Path1Answer(-1) : setQ4Path1Answer(input)
  }

  const schema = z.object({
    companyName: z
      .string(),
    jobTitle: z
      .string(),
    salary: z
      .string(),
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

  const internationalMutation = useCreateInternational()

  const handleSubmit = (values: typeof form.values) => {
    internationalMutation.mutate({
      ...values,
      currentStatus: "International Student",
      isOPT: q4Path1Answer2 === 0
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
    }
    )
  }
  return (
    <div>
      <form onSubmit={form.onSubmit(handleSubmit)}>
        {q3Path1Answer === 1 && q2Path1Answer === 0 && (
          <>
            <div className={styles.title}>
              Have you taken OPT or CPT?
            </div>
            <div className={styles.q2_path1_holder}>
              <div className={q4Path1Answer2 === 0 ? styles.q2_path1_yes_selected : styles.q2_path1_yes} onClick={() => setQ4Path1Answer2(0)}>
                {q4Path1Answer2 === 0 &&
                  <div className={styles.select_holder}>
                    <Check size={15} color='white' />
                  </div>
                }
                <Check size={22} />
                YES
              </div>
              <div className={q4Path1Answer2 === 1 ? styles.q2_path1_no_selected : styles.q2_path1_no} onClick={() => setQ4Path1Answer2(1)}>
                {q4Path1Answer2 === 1 &&
                  <div className={styles.select_holder}>
                    <Check size={15} color='white' />
                  </div>
                }
                <X size={22} />
                NO
              </div>
            </div>
            {q4Path1Answer2 === 0 &&
              <>
                <div className={styles.title}>What is your CPT / OPT company name?</div>
                <TextInput
                  size='lg'
                  placeholder="Ex: Apple Inc."
                  required
                  key={form.key('companyName')}
                  {...form.getInputProps('companyName')}

                />

                <div className={styles.title}>What is your CPT / OPT title?</div>
                <TextInput
                  size='lg'
                  placeholder="Ex: Apple Inc."
                  required
                  key={form.key('jobTitle')}
                  {...form.getInputProps('jobTitle')}
                />

                <div className={styles.title}>What is your CPT / OPT work salary?</div>
                <TextInput
                  size='lg'
                  required
                  placeholder="Ex: Apple Inc."
                  key={form.key('salary')}
                  {...form.getInputProps('salary')}
                />
              </>
            }
          </>
        )}
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
    </div>
  )
}