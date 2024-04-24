import styles from "./styles.module.css"

export const StudentProfile = () => {
  const profiles = [
    {
      name: "kevin",
      major: "math",
      year: "2022"
    },
    {
      name: "kevin",
      major: "math",
      year: "2022"
    },
    {
      name: "kevin",
      major: "math",
      year: "2022"
    }
  ]
  return (
    <>
      {profiles.map((item) => (
        <div className={styles.profile_holder} key={item.name}>
          <div className={styles.profile_top}>
            TL
          </div>
          <div className={styles.profile_bottom}>
            <p className={styles.major_text}>Computer science</p>
            <p className={styles.status_text}>CWU student</p>
            <button className={styles.profile_btn}>View Profile</button>
          </div>
        </div>
      ))}
    </>
  )
}