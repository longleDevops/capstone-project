import styles from "./styles.module.css"

export const CardHolder = () => {
  const items = [
    {
      title: "student",
      value: "300",
      increased: "3%",
      icon: "icon"
    },
    {
      title: "student",
      value: "300",
      increased: "3%",
      icon: "icon"
    },
    {
      title: "student",
      value: "300",
      increased: "3%",
      icon: "icon"
    },
    {
      title: "student",
      value: "300",
      increased: "3%",
      icon: "icon"
    }
  ]
  return (
    <div className={styles.card_container}>
      {items.map((item) => (
        <div className={styles.card_holder}>

        </div>
      ))}
    </div>
  )
}