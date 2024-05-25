"use client"

import { useSettings } from "@/hooks/use-settings"
import { Statistics } from "./statistics"
import { StudentProfile } from "./student-profile"
import { StudentRegistered } from "./student-registered"
import styles from "./styles.module.css"

export const AdminDashboard = () => {
  const { isClosed } = useSettings()
  return (
    <div
      className={styles.container}
      style={isClosed ? { marginLeft: '140px' } : {}}
    >
      <div className={styles.container_holder}>
        <p className={styles.dashboard_text}>Dashboard</p>
        <p className={styles.welcome_text}>Welcome back, Admin</p>
        <p className={styles.welcome_description}>Here the brief survey report</p>
        <div className={styles.statistics_container}>
          <Statistics />
        </div>

        <p className={styles.welcome_text}>All Submissions</p>
        <p className={styles.welcome_description}>View and Manage student&apos;s profiles from all survey submissions</p>
        <div className={styles.profile_container}>
          <StudentProfile />
        </div>

        <p className={styles.welcome_text}>Recent Registerd</p>
        <p className={styles.welcome_description}>View all recent registered students</p>
        <div className={styles.submission_container}>
          <StudentRegistered />
        </div>
      </div>
    </div>
  )
}