"use client"
import { Input, Select, } from '@mantine/core';
import { MonthPickerInput } from '@mantine/dates';
import styles from './styles.module.css'
import { useState } from 'react';
import { BriefcaseBusiness, ScanFace } from 'lucide-react';


export const SurveyOne = () => {

  const [value, setValue] = useState('Long')
  const [major, setMajor] = useState<string | null>('');
  const [start, setStartTerm] = useState<Date | null>(null);
  const [end, setEndTerm] = useState<Date | null>(null);
  const [campus, setCampus] = useState<string | null>('');
  const [gender, setGender] = useState<string | null>('');
  const [race, setRace] = useState<string | null>('');


  return (
    <div className={styles.container}>
      <div className={styles.pagetitle}>Background Info</div>
      <div className={styles.title}>What is your first name?</div>
      <Input size='lg' radius={20} placeholder='your first name' required value={value} styles={{ input: {} }}
        onChange={(e) => setValue(e.target.value)} />

      <div className={styles.title}>What is your last name?</div>
      <Input size='lg' radius={20} placeholder='your first name' required value={value}
        onChange={(e) => setValue(e.target.value)} />

      <div className={styles.title}>What is your CWU ID?</div>
      <Input size='lg' radius={20} placeholder='your first name' required value={value}
        onChange={(e) => setValue(e.target.value)} />
      <div className={styles.title}>What is your major?</div>
      <Select
        size="lg"
        radius={10}
        value={major}
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
        onChange={setMajor}
        nothingFoundMessage="Nothing found..."
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
      <div className={styles.title}>Where is your campus location?</div>
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
      />
    </div>
  )
}