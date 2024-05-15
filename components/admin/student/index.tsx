import { StudentTable } from "./student-table"
import styles from "./styles.module.css"
export const StudentPage = () => {
  const profile = [
    {
      status: "graduated",
      year: "2022",
      major: "Computer science",
      satisfaction: "30",
      experience: "great experience so far"
    }
  ]
  return (
    <div className={styles.container}>
      <p className={styles.header_text}>Survey Management</p>
      <p className={styles.header_description}>View and manage all of the registered students with ease</p>
      <StudentTable />
    </div>
  )
}