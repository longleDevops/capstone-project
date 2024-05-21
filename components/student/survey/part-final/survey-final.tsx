import Image from "next/image"
import styles from './styles.module.css'
import Link from "next/link"


export const SurveyFinal = () => {
  return (
    <div className={styles.container}>
      <p className={styles.header_txt}>Thank you for your participation!</p>
      <Image
        src={'/completed.png'}
        alt="completed status"
        width={90}
        height={100}
        className={styles.completed_img}
      />
      <p className={styles.completed_txt}>Completed</p>
      <div className={styles.description}>
        <p>33% students have the same major as yours</p>
        <p>you are the top 1% with over 100k salary!</p>
      </div>

      <Link
        href={'/student/home'}
        className={styles.btn}
      >
        Back to Home
      </Link>
    </div>
  )
}