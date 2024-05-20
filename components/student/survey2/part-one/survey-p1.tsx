"use client"
import { Input, Select, TextInput } from '@mantine/core';
import { MonthPickerInput } from '@mantine/dates';
import styles from './styles.module.css'
import { useState } from 'react';
import { BriefcaseBusiness, ScanFace } from 'lucide-react';
import { Button } from '@mantine/core';
import { ArrowRight } from 'lucide-react';
import { useCreateBackground } from '@/app/(back-end)/features/student-background/api/use-create-background';

import { zodResolver } from 'mantine-form-zod-resolver';
import { z } from 'zod';
import { useForm } from '@mantine/form';


export const SurveyOne = () => {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [cwuId, setCwuId] = useState('');

  const [major, setMajor] = useState<string | null>('');

  const [start, setStartTerm] = useState<Date | null>(null);
  const [end, setEndTerm] = useState<Date | null>(null);
  const [campus, setCampus] = useState<string | null>('');
  const [gender, setGender] = useState<string | null>('');
  const [race, setRace] = useState<string | null>('');

  //const mutation = useCreateBackground()
  const handleClicked = () => {

  }
  const schema = z.object({
    firstName: z
      .string()
      .min(2, { message: 'First Name should have at least 2 letters' }),
    lastName: z
      .string()
      .min(2, { message: 'last name should have at least 2 letters' }),
    cwuId: z
      .string()
      .min(5, { message: 'ID should have at least 8 numbers' }),
    major: z
      .string(),

  });

  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      firstName: '',
      lastName: '',
      cwuId: '',
      major: '',
    },
    validate: zodResolver(schema),
  });

  // form.validate();
  // form.errors;
  const handleSubmit = (values: typeof form.values) => {
    console.log(values);
  }
  return (
    <>
      <form onSubmit={form.onSubmit(handleSubmit)}>
        <div className={styles.container}>
          <div className={styles.title}>What is your first name?</div>
          <TextInput size='lg' radius={20} placeholder='your first name'
            required
            //value={firstName}
            styles={{ input: {} }}
            //onChange={(e) => setFirstName(e.target.value)} 
            key={form.key('firstName')}
            {...form.getInputProps('firstName')}
          />

          <div className={styles.title}>What is your last name?</div>
          <TextInput size='lg' radius={20} placeholder='your last name'
            key={form.key('lastName')}
            {...form.getInputProps('lastName')}

          />

          <div className={styles.title}>What is your CWU ID?</div>
          <TextInput size='lg' radius={20} placeholder='your CWU ID'
            key={form.key('cwuId')}
            {...form.getInputProps('cwuId')}
          />
          <div className={styles.title}>What is your major?</div>
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
          />
          <div className={styles.title}>When is your start term</div>
          <MonthPickerInput
            size='lg'
            placeholder="Pick month"
            value={start}
            onChange={setStartTerm}
          />
          <div className={styles.title}>When is your end term</div>
          <MonthPickerInput
            size='lg'
            placeholder="Pick month"
            value={end}
            onChange={setEndTerm}
          />
          {/* <div className={styles.title}>Where is your campus location?</div>
          <Select
            size="lg"
            radius={10}
            value={campus}
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
            onChange={setCampus}
            nothingFoundMessage="Nothing found..."
            comboboxProps={{ transitionProps: { transition: 'pop', duration: 200 } }}
          />
          <div className={styles.title}>What is your gender?</div>
          <Select
            size="lg"
            placeholder="Pick Gender"
            data={[
              'Male',
              'Female',
              'Other',
            ]}
            value={gender}
            onChange={setGender}
            clearable
          />
          <div className={styles.title}>What is your race?</div>
          <Select
            size="lg"
            placeholder="Pick Race"
            data={[
              'Asian',
              'White and European',
              'African',
              'Hispanic and Latino',
              'Middle Eastern',
              'Other'
            ]}
            value={race}
            onChange={setRace}
            clearable
          /> */}
          <div className={styles.btn_group}>

            <Button
              radius={10}
              size='lg'
              bg={'black'}
              styles={{ root: { fontSize: 16 } }}
              rightSection={<ArrowRight size={24} />}
              //onClick={() => handleClicked()}
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