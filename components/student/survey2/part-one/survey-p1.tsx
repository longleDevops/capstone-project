"use client"
import { Input, Select } from '@mantine/core';
import styles from './styles.module.css'
import { useState } from 'react';
import { BriefcaseBusiness, ScanFace } from 'lucide-react';


export const SurveyOne = () => {

  const [value, setValue] = useState('Long')
  const [major, setMajor] = useState<string | null>('');

  return (
    <div className={styles.container}>
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
          "Mathematic", // list of majors.
        ]}
        allowDeselect={false}
        searchable
        onChange={setMajor}
        nothingFoundMessage="Nothing found..."
        comboboxProps={{ transitionProps: { transition: 'pop', duration: 200 } }}
      />
    </div>
  )
}