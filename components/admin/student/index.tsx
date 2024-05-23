"use client"

import { StudentTable } from "./student-table"
import styles from "./styles.module.css"
import { Student } from "./columns"
import { useGetBackgrounds } from "@/app/(back-end)/features/student-background/api/use-get-backgrounds"

export const StudentPage = () => {

  const { data: submittedBackgrounds, isLoading } = useGetBackgrounds();

  if (!submittedBackgrounds || isLoading) return <>...Loading</>

  const data: Student[] =
    submittedBackgrounds.map((item) => (
      {
        id: item.studentId || '000000',
        firstName: item.firstName || '',
        lastName: item.lastName,
        degree: item.degreeLevel,
        major: item.major,
        startTerm: item.startTerm,
        endTerm: item.endTerm || 'N/A',
        campus: item.campus,
        employmentStatus: item.status,
        // satisfaction: '4.6',
        // salary: "$100,000",
        gender: item.gender,
        race: item.race,
      }
    ));

  return (
    <div className={styles.container}>
      <p className={styles.header_text}>Survey Management</p>
      <p className={styles.header_description}>View and manage all of the registered users with ease</p>
      <StudentTable data={data} />
    </div>
  )
}