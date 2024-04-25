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
      student Page
      <div className={styles.section_container}>
        <div className={styles.left_section}>
          Table
        </div>
        <div className={styles.right_section}>
          Profile
          <p>Graduated</p>
          <p></p>
        </div>
      </div>
    </div>
  )
}