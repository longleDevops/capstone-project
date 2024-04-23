import styles from "./styles.module.css"

const items = [
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
      <p>Dashboard</p>
      <p>Welcome back Angela.</p>
      <div className={styles.item_container}>
        {items.map((item) => (
          <div className={styles.item_holder} key={item.name}>
            {item.name}
          </div>
        ))}
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