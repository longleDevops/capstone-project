"use client"

import { Button, Select, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import { notifications } from '@mantine/notifications';
import { ArrowRight, Calendar, CalendarCheck, ContactRound, Earth, Fingerprint, FlaskConical, GraduationCap, TrendingUp, University } from 'lucide-react';
import { zodResolver } from 'mantine-form-zod-resolver';
import { FaTransgender } from "react-icons/fa";
import { z } from 'zod';


import styles2 from "@/components/student/survey/notification.module.css";
import { useBackgroundAnswers } from '@/hooks/use-background-answers';
import { useSurveyPartTwo } from '@/hooks/use-partTwo';
import { useSurvey } from '@/hooks/use-survey';
import { useUser } from '@clerk/nextjs';
import styles from './styles.module.css';

export const SurveyOne = () => {
  const { user } = useUser()

  const { backgroundAnswers, setBackgroundAnswers } = useBackgroundAnswers()
  const { q1Answer } = useSurveyPartTwo()
  const { firstName, lastName, studentId, major, startTerm, endTerm, campus, gender, race, degreeLevel } = backgroundAnswers
  const { setCurrentPart } = useSurvey()

  const schema = z.object({
    firstName: z
      .string(),
    lastName: z
      .string(),
    studentId: z
      .coerce
      .number()
      .int()
      .gte(1000000, { message: 'ID should have 7 numbers and not start with 0' })
      .lte(9999999, { message: 'ID should only have 7 numbers' }),
    major: z
      .string(),
    startTerm: z
      .string(),
    endTerm: z
      .string(),
    campus: z
      .string(),
    gender: z
      .string({ message: 'Please fill this field' }),
    race: z
      .string({ message: 'Please fill this field' }),
    degreeLevel: z
      .string()
  });

  const startTermArr = ["Fall 2017", "Winter 2017", "Spring 2017", "Summer 2017", "Fall 2018", "Winter 2018", "Spring 2018", "Summer 2018", "Fall 2019", "Winter 2019", "Spring 2019", "Summer 2019", "Fall 2020", "Winter 2020", "Spring 2020", "Summer 2020", "Fall 2021", "Winter 2021", "Spring 2021", "Summer 2021", "Fall 2022", "Winter 2022", "Spring 2022", "Summer 2022", "Fall 2023", "Winter 2023", "Spring 2023", "Summer 2023", "Fall 2024", "Winter 2024", "Spring 2024"];

  const endTermArr = ["Fall 2017", "Winter 2017", "Spring 2017", "Summer 2017", "Fall 2018", "Winter 2018", "Spring 2018", "Summer 2018", "Fall 2019", "Winter 2019", "Spring 2019", "Summer 2019", "Fall 2020", "Winter 2020", "Spring 2020", "Summer 2020", "Fall 2021", "Winter 2021", "Spring 2021", "Summer 2021", "Fall 2022", "Winter 2022", "Spring 2022", "Summer 2022", "Fall 2023", "Winter 2023", "Spring 2023", "Summer 2023", "Fall 2024", "Winter 2024", "Spring 2024", "Summer 2025"];


  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      firstName: firstName ? firstName : user?.firstName,
      lastName: lastName ? lastName : user?.lastName,
      studentId,
      major,
      startTerm,
      endTerm,
      campus,
      gender,
      race,
      degreeLevel
    },
    validate: zodResolver(schema),
  });

  // Check endterm is greater than start term
  const isValidTerm = (start: string, end: string) => {
    const startIndex = startTermArr.indexOf(start);
    const endIndex = endTermArr.indexOf(end);

    return endIndex > startIndex;
  }
  const handleSubmit = (values: typeof form.values) => {
    if (!isValidTerm(values.startTerm, values.endTerm)) {
      notifications.show({
        title: '',
        message: "End Term must be greater than Start Term",
        color: 'red',
        autoClose: 3000,
        style: { width: 260, height: 60 },
        classNames: styles2
      })
      return;
    }

    setBackgroundAnswers(values);
    notifications.show({
      title: 'Background Info Completed',
      message: "",
      color: 'teal',
      autoClose: 3000,
      style: { width: 260, height: 60 },
      classNames: styles2
    })

    if (q1Answer === -1) {
      setCurrentPart(1)
      return;
    }
    setCurrentPart(q1Answer + 1)
  }

  return (
    <>
      <form onSubmit={form.onSubmit(handleSubmit)}>
        <div className={styles.container}>
          <div className={styles.title}>
            What is your First Name?
          </div>
          <TextInput size='lg' radius={10}
            required
            leftSection={<ContactRound />}
            styles={{ input: {} }}
            key={form.key('firstName')}
            {...form.getInputProps('firstName')}
          />

          <div className={styles.title}>What is your Last Name?</div>
          <TextInput size='lg' radius={10}
            leftSection={<ContactRound />}
            key={form.key('lastName')}
            {...form.getInputProps('lastName')}

          />

          <div className={styles.title}><p>What is your CWU ID? </p></div>
          <TextInput size='lg' radius={10}
            leftSection={<Fingerprint />}
            placeholder='0000000'
            key={form.key('studentId')}
            {...form.getInputProps('studentId')}
          />

          <div className={styles.title}>What is your level of degree?</div>
          <Select
            size="lg"
            radius={10}
            leftSection={<University />}
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

          <div className={styles.title}>What is your Major?</div>
          <Select
            size="lg"
            radius={10}
            leftSection={<GraduationCap />}
            style={{}}
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
              "Medical"
            ]}
            allowDeselect={false}
            searchable
            nothingFoundMessage="Nothing found..."
            key={form.key('major')}
            {...form.getInputProps('major')}
            comboboxProps={{ transitionProps: { transition: 'pop', duration: 200 } }}
            required
          />

          <div className={styles.term_container}>
            <div>
              <div className={styles.title}>Start Term</div>
              <Select
                size="lg"
                radius={10}
                leftSection={<Calendar />}
                style={{}}
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
            </div>
            <div>
              <div className={styles.title}>End term</div>
              <Select
                size="lg"
                radius={10}
                leftSection={<CalendarCheck />}
                style={{}}
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
            </div>
          </div>

          <div className={styles.title}>Campus Location</div>
          <Select
            size="lg"
            radius={10}

            style={{}}
            data={[
              "Ellensburg",
              "Pierce County",
              "Lynnwood",
              "Des Moines",
              "Sammamish",
              "Online"
            ]}
            allowDeselect={false}
            searchable
            leftSection={<University />}
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
            leftSection={<FaTransgender size={24} />}
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
            ]}
            clearable
            leftSection={<Earth />}
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