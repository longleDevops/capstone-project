import { useGetWorking } from '@/app/(back-end)/features/working/api/use-get-workings';
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

export const WorkingStatus = ({ backgroundData }: props) => {

  const { data, isLoading } = useGetWorking()

  if (isLoading || !data) return <>...Loading</>

  const workingData = data.find(item => item.userId === backgroundData.userId)

  if (!workingData) return <>Not found</>

  return (
    <div className={styles.bottom_container}>
      <p className={styles.username}>@{backgroundData.firstName?.substring(0, 2)}{backgroundData.lastName?.substring(0, 2)}</p>
      <p className={styles.name}>{backgroundData.firstName}&nbsp;{backgroundData.lastName}</p>
      <div className={styles.graduation_holder}>
        <p className={styles.status}>Graduated</p>
        <p className={styles.date}>{backgroundData.startTerm} - {backgroundData.endTerm}</p>
      </div>
      <p className={styles.degree}>{backgroundData.degreeLevel} in {backgroundData.major}</p>

      <div className={styles.holder}>
        <p className={styles.left_txt}>Company</p>
        <p className={styles.right_txt}>{workingData.companyName}</p>
      </div>
      <div className={styles.holder}>
        <p className={styles.left_txt}>Job Title</p>
        <p className={styles.right_txt} >{workingData.jobTitle}</p>
      </div>
      <div className={styles.holder}>
        <p className={styles.left_txt}>Salary range</p>
        <p className={styles.right_txt}>{workingData.salary}</p>
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