import { useGetSeekingDegrees } from '@/app/(back-end)/features/seeking-degree/api/use-get-seekingDegrees';
import styles from './styles.module.css'
import { Rating } from '@mantine/core';


type props = {
  backgroundData: {
    id: number;
    firstName: string | null;
    lastName: string | null;
    status: string;
    studentId: string | null;
    major: string;
    startTerm: string;
    endTerm: string | null;
    campus: string;
    gender: string;
    race: string;
    degreeLevel: string;
    userId: string;
  }
}

export const SeekingDegreeStatus = ({ backgroundData }: props) => {
  const { data, isLoading } = useGetSeekingDegrees()

  if (isLoading || !data) return <>...Loading</>

  const seekingData = data.find(item => item.userId === backgroundData.userId)

  if (!seekingData) return <>Not found</>

  return (
    <div className={styles.bottom_container}>
      <p className={styles.username}>@{'hjkh'}</p>
      <p className={styles.name}>{backgroundData.firstName}&nbsp;{backgroundData.lastName}</p>
      <div className={styles.graduation_holder}>
        <p className={styles.status}>Graduated</p>
        <p className={styles.date}>{backgroundData.startTerm} - {backgroundData.endTerm}</p>
      </div>
      <p className={styles.degree}>{backgroundData.degreeLevel} in {backgroundData.major}</p>

      <div className={styles.holder}>
        <p className={styles.left_txt}>Status</p>
        <p className={styles.right_txt}>higer education</p>
      </div>

      <div className={styles.holder}>
        <p className={styles.left_txt}>Institution</p>
        <p className={styles.right_txt}>{seekingData.institution}</p>
      </div>
      <div className={styles.holder}>
        <p className={styles.left_txt}>Major</p>
        <p className={styles.right_txt} >{seekingData.major}</p>
      </div>
      <div className={styles.holder}>
        <p className={styles.left_txt}>Accepted Time</p>
        <p className={styles.right_txt}>{seekingData.prepTime}</p>
      </div>

      <div className={styles.holder}>
        <p className={styles.left_txt}>Gender</p>
        <p className={styles.right_txt}>{backgroundData.gender}</p>
      </div>
      <div className={styles.holder}>
        <p className={styles.left_txt}>Ethicity</p>
        <p className={styles.right_txt}>{backgroundData.race}</p>
      </div>
      <div className={styles.holder}>
        <p className={styles.left_txt}>Survey Rating</p>
        <Rating value={3.5} fractions={2} readOnly />
      </div>
    </div>
  )
}