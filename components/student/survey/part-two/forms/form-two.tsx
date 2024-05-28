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
import { useInternationalAnswers } from '@/hooks/use-international-answers'

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

  const handleQ4Pt2 = (input: number) => {
    return input === q4Path1Answer2 ? setQ4Path1Answer2(-1) : setQ4Path1Answer2(input)
  }
  const { internationalAnswers, setInternationalAnswers } = useInternationalAnswers();
  const { companyName, jobTitle, salary } = internationalAnswers

  const salaryRange = [
    "$40,000 - $50,000",
    "$50,000 - $60,000",
    "$60,000 - $70,000",
    "$70,000 - $80,000",
    "$80,000 - $90,000",
    "$90,000 - $100,000",
    "Above $100,000", // list of salaries.
  ]

  const avgSalary = [
    45000,
    55000,
    65000,
    75000,
    85000,
    95000,
    120000
  ]
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
      companyName,
      jobTitle,
      salary,
    },
    validate: zodResolver(schema),
  });


  const handleSubmit = (values: typeof form.values) => {
    setInternationalAnswers({
      ...values,
      avgSalary: avgSalary[salaryRange.indexOf(values.salary)]
    });
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

  const navigateNext = () => {
    if (q4Path1Answer2 === -1) {
      notifications.show({
        title: 'Please Answer',
        message: "Have you taken OPT / CPT?",
        color: 'red',
        autoClose: 3000,
        style: { width: 290, height: 80 },
        classNames: styles2
      });
      return;
    }
    setInternationalAnswers({ companyName: '', jobTitle: '', salary: '', avgSalary: 0 });
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

  return (
    <div>
      <form onSubmit={form.onSubmit(handleSubmit)}>
        {q3Path1Answer === 1 && q2Path1Answer === 0 && (
          <>
            <div className={styles.title}>
              Have you taken OPT / CPT?
            </div>
            <div className={styles.q2_path1_holder}>
              <div className={q4Path1Answer2 === 0 ? styles.q2_path1_yes_selected : styles.q2_path1_yes} onClick={() => handleQ4Pt2(0)}>
                {q4Path1Answer2 === 0 &&
                  <div className={styles.select_holder}>
                    <Check size={15} color='white' />
                  </div>
                }
                <Check size={22} />
                YES
              </div>
              <div className={q4Path1Answer2 === 1 ? styles.q2_path1_no_selected : styles.q2_path1_no} onClick={() => handleQ4Pt2(1)}>
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
                <Select
                  size="lg"
                  radius={10}
                  leftSection={<DollarSign />}
                  style={{}}
                  placeholder="Ex: $50,000 - $60,0000"
                  data={salaryRange}
                  allowDeselect={false}
                  searchable
                  nothingFoundMessage="Nothing found..."
                  key={form.key('salary')}
                  {...form.getInputProps('salary')}
                  comboboxProps={{ transitionProps: { transition: 'pop', duration: 200 } }}
                  required
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

          {q3Path1Answer === 1 && q4Path1Answer2 !== 0 && <Button
            radius={10}
            size='lg'
            bg={'black'}
            styles={{ root: { fontSize: 16 } }}
            rightSection={<ArrowRight size={24} />}
            onClick={navigateNext}
          >
            Next
          </Button>}

          {q3Path1Answer === 1 && q4Path1Answer2 === 0 && <Button
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
    </div>
  )
}