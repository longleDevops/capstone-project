import Image from "next/image"
import styles from "./styles.module.css"
import { CircleHelp } from "lucide-react"

export const CardHolder = () => {
  const items = [
    {
      title: "Total students",
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
        <div className={styles.card_holder} key={item.icon}>
          <div className={styles.upper_card}>
            <div className={styles.logo_holder}>
              <Image
                alt="cwu logo"
                src={"/cwu_wildcat.png"}
                width={50}
                height={50}
                className={styles.cwu_logo}
              />
            </div>
            <div>{item.increased}</div>
          </div>
          <div className={styles.lower_card}>
            <div>
              <p>{item.value}</p>
              <p>{item.title}</p>
            </div>
            <CircleHelp size={18} color='white' fill="blue" />
          </div>
        </div>
      ))}
    </div>
  )
}