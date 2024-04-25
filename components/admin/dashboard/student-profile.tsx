import { ProfileDialog } from "./dialog/profile-dialog"
import styles from "./styles.module.css"

export const StudentProfile = () => {
  const profiles = [
    {
      name: "kevin1",
      major: "math",
      year: "2022"
    },
    {
      name: "kevin2",
      major: "math",
      year: "2022"
    },
    {
      name: "kevin3",
      major: "math",
      year: "2022"
    }
  ]
  return (
    <>
      <div className={styles.profile_default}>
        3
      </div>
      {profiles.map((item) => (
        <div className={styles.profile_holder} key={item.name}>
          <div className={styles.profile_top}>
            TL
          </div>
          <div className={styles.profile_bottom}>
            <p className={styles.major_text}>Computer science</p>
            <p className={styles.status_text}>CWU student</p>
            <ProfileDialog />
          </div>
        </div>
      ))}
    </>
  )
}