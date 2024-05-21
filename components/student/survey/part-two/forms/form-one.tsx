"use client"

import { useCreateDomestic } from '@/app/(back-end)/features/domestic-student/api/use-create-cwu'
import { useSurveyPartTwo } from '@/hooks/use-partTwo'
import { useSurvey } from '@/hooks/use-survey'
import { Button, Select, TextInput } from '@mantine/core'
import { useForm } from '@mantine/form'
import { ArrowLeft, ArrowRight, Check, DollarSign, X } from 'lucide-react'
import { zodResolver } from 'mantine-form-zod-resolver'
import { z } from 'zod'
import styles from '@/components/student/survey/part-two/styles.module.css'
import { notifications } from '@mantine/notifications';
import styles2 from "@/components/student/survey/notification.module.css"

export const FormOne = () => {
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
    internshipCompany: z.string(),
    internshipTitle: z.string(),
    internshipSalary: z.string(),
    internshipPrepTime: z.string()
  });

  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      intershipCompany: '',
      internshipTitle: '',
      internshipSalary: '',
      internshipPrepTime: ''
    },
    validate: zodResolver(schema),
  });

  const domesticMutation = useCreateDomestic()

  const handleSubmit = (values: typeof form.values) => {
    domesticMutation.mutate({
      ...values,
      currentStatus: "Domestic Student",
      isInternship: q4Path1Answer === 0
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
        <div className={styles.title}>
          Have you participated in any internship programs?
        </div>
        <div className={styles.q2_path1_holder}>
          <div className={q4Path1Answer === 0 ? styles.q2_path1_yes_selected : styles.q2_path1_yes} onClick={() => handleQ4Pt1(0)}>
            {q4Path1Answer === 0 &&
              <div className={styles.select_holder}>
                <Check size={15} color='white' />
              </div>
            }
            <Check size={22} />
            YES
          </div>
          <div className={q4Path1Answer === 1 ? styles.q2_path1_no_selected : styles.q2_path1_no} onClick={() => handleQ4Pt1(1)}>
            {q4Path1Answer === 1 &&
              <div className={styles.select_holder}>
                <Check size={15} color='white' />
              </div>
            }
            <X size={22} />
            NO
          </div>
        </div>

        {q4Path1Answer === 0 && q3Path1Answer === 0 && q2Path1Answer === 0 && (
          <>
            <div className={styles.title}>What is your internship company name?</div>
            <TextInput
              size='lg'
              radius={10}
              required
              placeholder="Appl Inc."
              key={form.key('internshipCompany')}
              {...form.getInputProps('internshipCompany')}
            />

            <div className={styles.title}>What is your internship title?</div>
            <TextInput
              size='lg'
              radius={10}
              required
              placeholder="Ex: Software Engineering"
              key={form.key('internshipTitle')}
              {...form.getInputProps('internshipTitle')}
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
              key={form.key('internshipSalary')}
              {...form.getInputProps('internshipSalary')}
              comboboxProps={{ transitionProps: { transition: 'pop', duration: 200 } }}
            />

            <div className={styles.title}>How long did you take the internship?</div>
            <Select
              size="lg"
              radius={10}
              leftSection={<DollarSign />}
              style={{}}
              placeholder="3 months"
              data={[
                "less than 1 month",
                "1 month - 3 months",
                "3 months - 6 months",
                "6 months - 1 year",
                "1 year - 2 years",
                // list of majors.
              ]}
              allowDeselect={false}
              searchable
              nothingFoundMessage="Nothing found..."
              key={form.key('internshipPrepTime')}
              {...form.getInputProps('internshipPrepTime')}
              comboboxProps={{ transitionProps: { transition: 'pop', duration: 200 } }}
            />
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