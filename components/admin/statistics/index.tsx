import Image from "next/image"
import styles from "./styles.module.css"
export const Statistics = () => {
  return (
    <div className={styles.container}>
      <Image
        src={'/prototype.png'}
        alt="prototype"
        width={1100}
        height={700}
      />
      <Image
        src={'/prototype2.png'}
        alt="prototype"
        width={1100}
        height={700}
      />
    </div>
  )
}