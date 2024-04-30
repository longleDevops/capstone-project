import { Statistics } from "./statistics"
import { StudentProfile } from "./student-profile"
import { StudentSubmission } from "./student-submission"
import styles from "./styles.module.css"


export const AdminDashboard = () => {
  return (
    <div className={styles.container}>
      <p className={styles.dashboard_text}>Dashboard</p>
      <p className={styles.welcome_text}>Welcome back, Jessica</p>
      <p className={styles.welcome_description}>Here's the brief survey report</p>
      <div className={styles.statistics_container}>
        <Statistics />
      </div>

      <p className={styles.welcome_text}>Recent Registered</p>
      <p className={styles.welcome_description}>View and Manage most recent 20 registered students</p>
      <div className={styles.profile_container}>
        <StudentProfile />
      </div>

      <p className={styles.welcome_text}>Recent Submissions</p>
      <p className={styles.welcome_description}>View the most 20 recent student's submissions</p>
      <div className={styles.submission_container}>
        <StudentSubmission />
      </div>
    </div>
  )
}