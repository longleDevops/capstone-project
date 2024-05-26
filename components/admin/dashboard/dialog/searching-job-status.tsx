import { useGetSearchingJob } from '@/app/(back-end)/features/searching-job/api/use-get-searching-job';
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
    avgRating: string
  }
}

export const SearchingJobStatus = ({ backgroundData }: props) => {
  const { data, isLoading } = useGetSearchingJob()

  if (isLoading || !data) return <>...Loading</>

  const searchingData = data.find(item => item.userId === backgroundData.userId)

  if (!searchingData) return <>Not found</>

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
        <p className={styles.left_txt}>Status</p>
        <p className={styles.right_txt}>Seeking jobs</p>
      </div>

      <div className={styles.holder}>
        <p className={styles.left_txt}>Applied Company</p>
        <p className={styles.right_txt}>{searchingData.companyName}</p>
      </div>
      <div className={styles.holder}>
        <p className={styles.left_txt}>Position Title</p>
        <p className={styles.right_txt} >{searchingData.jobTitle}</p>
      </div>
      <div className={styles.holder}>
        <p className={styles.left_txt}>Salary Range</p>
        <p className={styles.right_txt}>{searchingData.salary}</p>
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
        <Rating value={Number(backgroundData.avgRating)} fractions={2} readOnly />
      </div>
    </div>
  )
}