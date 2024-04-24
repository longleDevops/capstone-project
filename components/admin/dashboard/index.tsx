import { Statistics } from "./statistics"
import { StudentProfile } from "./student-profile"
import styles from "./styles.module.css"

const submissions = [
  {
    name: "Kevin",
    survey: "Post graduation survey",
    status: "completed",
    date: "04/23/2024"
  },
  {
    name: "Kevin",
    survey: "Post graduation survey",
    status: "completed",
    date: "04/23/2024"
  },
  {
    name: "Kevin",
    survey: "Post graduation survey",
    status: "completed",
    date: "04/23/2024"
  }
]
export const AdminDashboard = () => {
  return (
    <div className={styles.container}>
      <p className={styles.dashboard_text}>Dashboard</p>
      <p className={styles.welcome_text}>Welcome back Angela.</p>
      <div className={styles.statistics_container}>
        <Statistics />
      </div>
      <div className={styles.profile_container}>
        <StudentProfile />
      </div>
      <p>Recent Submissions</p>
      <div className={styles.submission_container}>
        {submissions.map((item) => (
          <div className={styles.submission_row} key={item.name}>
            <p>{item.name}</p>
            <p>{item.survey}</p>
            <p>{item.status}</p>
            <p>{item.date}</p>
          </div>
        ))}
      </div>
    </div>
  )
}