"use client"

import { useDisclosure, useWindowScroll } from '@mantine/hooks';
import { Modal, Button } from '@mantine/core';
import styles from './styles.module.css'
import { useFilter } from '@/hooks/use-filter';
import { useState } from 'react';
import { GraduationCap } from 'lucide-react';

export function FilterModal() {
  const { majorName, setMajorName, majorSet, setMajorSet } = useFilter()
  const [scroll, scrollTo] = useWindowScroll();


  const majorArr = [
    "Art",
    "Elementary Education",
    "Business",
    "Psychology",
    "Criminal Justice and Safety Studies",
    "Social Science Research Methods",
    "Marketing",
    "Computer Science",
    "Photography",
    "Web Page and Digital Design",
    "Accounting",
    "Finance",
    "Nursing",
    "Medical"
  ]

  const [opened, { open, close }] = useDisclosure(false);

  const handleConfirmed = () => {
    close();
    scrollTo({ y: 25 })
    majorName.clear()
    majorSet.forEach(val => majorName.add(val))
    setMajorName(majorName)
  }

  const handleClosed = () => {
    close();
  }
  const handleOpened = () => {
    majorSet.clear()
    majorName.forEach(val => majorSet.add(val))
    setMajorSet(majorSet)
    open();

  }

  const handleAdded = (input: string) => {
    if (majorSet.has(input)) {
      majorSet.delete(input)
      setMajorSet(majorSet)
      return;
    }
    setMajorSet(majorSet.add(input))

  }
  return (
    <>
      <Modal opened={opened} onClose={close} size={"auto"} radius={10} withCloseButton={false} closeOnClickOutside={false} closeOnEscape={false} lockScroll={false}>
        <div className={styles.container} >
          Select one or more majors listed below
          <div className={styles.major_container}>
            {
              majorArr.map((item, index) => (
                <div
                  key={index}
                  className={styles.majorItem}
                  style={majorSet.has(item) ? { color: 'white', background: 'black' } : {}}
                  onClick={() => handleAdded(item)}>
                  {item}
                </div>
              ))
            }
          </div>
          <Button onClick={handleClosed} radius={10} mt={40} variant='default'>Cancel</Button>
          <Button onClick={handleConfirmed} bg={'black'} radius={10} mt={-30}>Confirm</Button>
        </div>
      </Modal>
      <Button onClick={handleOpened} rightSection={<GraduationCap />} radius={10} bg={"#5361ed"}>Filter Major</Button>
    </>
  );
}