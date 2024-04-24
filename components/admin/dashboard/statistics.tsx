import styles from "./styles.module.css"

export const Statistics = () => {
  const statistics = [
    {
      title: "Total students",
      data: "200"
    },
    {
      title: "CWU students",
      data: "200"
    },
    {
      title: "Alumni",
      data: "200"
    },
  ]
  return (
    <>
      {statistics.map((item) => (
        <div className={styles.statistics_holder}>
          <p className={styles.statistics_title}>{item.title}</p>
          <p className={styles.statistics_data}>{item.data}</p>
        </div>
      ))}
    </>
  )
}