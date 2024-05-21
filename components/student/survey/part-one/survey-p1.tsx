"use client"

import { Button, Select, TextInput } from '@mantine/core';
import { MonthPickerInput } from '@mantine/dates';
import { ArrowRight, BriefcaseBusiness } from 'lucide-react';
import { useForm } from '@mantine/form';
import { notifications } from '@mantine/notifications';
import { zodResolver } from 'mantine-form-zod-resolver';
import { z } from 'zod';


import { useCreateBackground } from '@/app/(back-end)/features/student-background/api/use-create-background';
import styles from './styles.module.css';
import styles2 from "@/components/student/survey/notification.module.css";
import { useSurvey } from '@/hooks/use-survey';

export const SurveyOne = () => {

  const mutation = useCreateBackground()

  const schema = z.object({
    firstName: z
      .string()
      .min(2, { message: 'First Name should have at least 2 letters' }),
    lastName: z
      .string()
      .min(2, { message: 'last name should have at least 2 letters' }),
    studentId: z
      .string()
      .min(5, { message: 'ID should have at least 8 numbers' }),
    major: z
      .string(),
    startTerm: z
      .string(),
    endTerm: z
      .string(),
    campus: z
      .string(),
    gender: z
      .string(),
    race: z
      .string(),
  });

  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      firstName: '',
      lastName: '',
      studentId: '',
      major: '',
      startTerm: '',
      endTerm: '',
      campus: '',
      gender: '',
      race: ''
    },
    validate: zodResolver(schema),
  });

  const { setCurrentPart } = useSurvey()

  const handleSubmit = (values: typeof form.values) => {
    mutation.mutate(values, {
      onSuccess: () => {
        setCurrentPart(1),
          notifications.show({
            title: 'Background Info Completed',
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
    <>
      <form onSubmit={form.onSubmit(handleSubmit)}>
        <div className={styles.container}>
          <div className={styles.title}>What is your First Name?</div>
          <TextInput size='lg' radius={10}
            required
            //value={firstName}
            styles={{ input: {} }}
            //onChange={(e) => setFirstName(e.target.value)} 
            key={form.key('firstName')}
            {...form.getInputProps('firstName')}
          />

          <div className={styles.title}>What is your Last Name?</div>
          <TextInput size='lg' radius={10}
            key={form.key('lastName')}
            {...form.getInputProps('lastName')}

          />

          <div className={styles.title}><p>What is your CWU ID? </p></div>
          <TextInput size='lg' radius={10}
            key={form.key('studentId')}
            {...form.getInputProps('studentId')}

          />
          <div className={styles.title}>What is your Major?</div>
          <Select
            size="lg"
            radius={10}
            leftSection={<BriefcaseBusiness />}
            style={{}}
            placeholder="Example: Computer Science"
            data={[
              "Art",
              "Elementary Education",
              "Business",
              "Psychology",
              "Criminal Justice and Safety Studies",
              "Social Science Research Methods",
              "Marketing",
              "Computer and Information Systems Security",
              "Photography",
              "Web Page and Digital Design",
              "Accounting",
              "Finance",
              "Nursing",
              "Medical", // list of majors.
            ]}
            allowDeselect={false}
            searchable
            nothingFoundMessage="Nothing found..."
            key={form.key('major')}
            {...form.getInputProps('major')}
            comboboxProps={{ transitionProps: { transition: 'pop', duration: 200 } }}
            required
          />

          <div className={styles.title}>Start Term</div>
          <Select
            size="lg"
            radius={10}
            leftSection={<BriefcaseBusiness />}
            style={{}}
            placeholder="Ex. Spring 2018"
            data={[
              "Fall 2017",
              "Winter 2017",
              "Spring 2017",
              "Summer 2017",
              "Fall 2018",
              "Winter 2018",
              "Spring 2018",
              "Summer 2018",
              "Fall 2019",
              "Winter 2019",
              "Spring 2019",
              "Summer 2019",
              "Fall 2020",
              "Winter 2020",
              "Spring 2020",
              "Summer 2020",
              "Fall 2021",
              "Winter 2021",
              "Spring 2021",
              "Summer 2021",
              "Fall 2022",
              "Winter 2022",
              "Spring 2022",
              "Summer 2022",
              "Fall 2023",
              "Winter 2023",
              "Spring 2023",
              "Summer 2023",
              "Fall 2024",
              "Winter 2024",
              "Spring 2024"
            ]}
            allowDeselect={false}
            searchable
            nothingFoundMessage="Nothing found..."
            key={form.key('startTerm')}
            {...form.getInputProps('startTerm')}
            comboboxProps={{ transitionProps: { transition: 'pop', duration: 200 } }}
            required
          />
          <div className={styles.title}>End term</div>
          <Select
            size="lg"
            radius={10}
            leftSection={<BriefcaseBusiness />}
            style={{}}
            placeholder="Ex. Spring 2018"
            data={[
              "Fall 2017",
              "Winter 2017",
              "Spring 2017",
              "Summer 2017",
              "Fall 2018",
              "Winter 2018",
              "Spring 2018",
              "Summer 2018",
              "Fall 2019",
              "Winter 2019",
              "Spring 2019",
              "Summer 2019",
              "Fall 2020",
              "Winter 2020",
              "Spring 2020",
              "Summer 2020",
              "Fall 2021",
              "Winter 2021",
              "Spring 2021",
              "Summer 2021",
              "Fall 2022",
              "Winter 2022",
              "Spring 2022",
              "Summer 2022",
              "Fall 2023",
              "Winter 2023",
              "Spring 2023",
              "Summer 2023",
              "Fall 2024",
              "Winter 2024",
              "Spring 2024"
            ]}
            allowDeselect={false}
            searchable
            nothingFoundMessage="Nothing found..."
            key={form.key('endTerm')}
            {...form.getInputProps('endTerm')}
            comboboxProps={{ transitionProps: { transition: 'pop', duration: 200 } }}
            required
          />

          <div className={styles.title}>Campus Location</div>
          <Select
            size="lg"
            radius={10}

            style={{}}
            placeholder="Example: Des Moines"
            data={[
              "Ellensburg",
              "Pierce County",
              "Lynnwood",
              "Des Moines",
              "Sammamish", // list of location.
            ]}
            allowDeselect={false}
            searchable
            key={form.key('campus')}
            {...form.getInputProps('campus')}
            nothingFoundMessage="Nothing found..."
            comboboxProps={{ transitionProps: { transition: 'pop', duration: 200 } }}
            required
          />
          <div className={styles.title}>Gender</div>
          <Select
            size="lg"
            data={[
              'Male',
              'Female',
              'Other',
            ]}
            clearable
            key={form.key('gender')}
            {...form.getInputProps('gender')}
            required
          />
          <div className={styles.title}>What is your race?</div>
          <Select
            size="lg"
            data={[
              'Asian',
              'White and European',
              'African',
              'Hispanic and Latino',
              'Middle Eastern',
              'Other'
            ]}

            clearable
            key={form.key('race')}
            {...form.getInputProps('race')}
            required
          />


          <div className={styles.btn_group}>
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
        </div>
      </form>

    </>
  )
}