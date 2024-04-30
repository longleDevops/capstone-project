import styles from "./styles.module.css"

export const StudentSubmission = () => {
  const submissions = [
    {
      name: "Long",
      survey: "Post graduation survey",
      status: "completed",
      date: "04/23/2024"
    },
    {
      name: "Thang",
      survey: "Post graduation survey",
      status: "completed",
      date: "04/29/2024"
    },
    {
      name: "Botir",
      survey: "Post graduation survey",
      status: "completed",
      date: "04/29/2024"
    },
    {
      name: "Huong",
      survey: "Post graduation survey",
      status: "completed",
      date: "04/28/2024"
    },
    {
      name: "Jake",
      survey: "Post graduation survey",
      status: "completed",
      date: "04/27/2024"
    },
    {
      name: "Jake",
      survey: "Post graduation survey",
      status: "completed",
      date: "04/27/2024"
    },
    {
      name: "Jake",
      survey: "Post graduation survey",
      status: "completed",
      date: "04/27/2024"
    },
    {
      name: "Jake",
      survey: "Post graduation survey",
      status: "completed",
      date: "04/27/2024"
    }
  ]
  const isEven = (index: number) => {
    if (index % 2 === 0) {
      return true
    }
    return false
  }
  return (
    <div className={styles.submission_container_big}>
      <div className={styles.submission_container}>
        {submissions.map((item, index) => (
          <div className={isEven(index) ? styles.submission_row : styles.submission_row_odd} key={item.name}>
            <p className={styles.submission_name}>{item.name}</p>
            <p>{item.survey}</p>
            <p className={styles.submission_status}>{item.status}</p>
            <p>{item.date}</p>
          </div>
        ))}
      </div>
    </div>
  )
}