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

    </div>
  )
}