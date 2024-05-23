import { useGetInternationals } from '@/app/(back-end)/features/international-student/api/use-get-internationals';
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

export const InternationalStatus = ({ backgroundData }: props) => {
  const { data, isLoading } = useGetInternationals()

  if (isLoading || !data) return <>...Loading</>

  const internationalData = data.find(item => item.userId === backgroundData.userId)

  if (!internationalData) return <>Not found</>

  const isInterned = () => {
    return internationalData.avgSalary > 0
  }
  return (
    <div className={styles.bottom_container}>
      <p className={styles.username}>@{'hjkh'}</p>
      <p className={styles.name}>{backgroundData.firstName}&nbsp;{backgroundData.lastName}</p>
      <div className={styles.graduation_holder}>
        <p className={styles.status}>Domestic Student</p>
        <p className={styles.date}>{backgroundData.startTerm} - {backgroundData.endTerm}</p>
      </div>
      <p className={styles.degree}>{backgroundData.degreeLevel} in {backgroundData.major}</p>

      <div className={styles.holder}>
        <p className={styles.left_txt}>Internship</p>
        <p className={styles.right_txt}>{isInterned() ? 'yes' : 'NO'}</p>
      </div>

      <div className={styles.holder}>
        <p className={styles.left_txt}>Company</p>
        <p className={styles.right_txt}>{isInterned() ? internationalData.companyName : 'no'}</p>
      </div>
      <div className={styles.holder}>
        <p className={styles.left_txt}>Job Title</p>
        <p className={styles.right_txt} >{isInterned() ? internationalData.jobTitle : 'no'}</p>
      </div>
      <div className={styles.holder}>
        <p className={styles.left_txt}>Salary range</p>
        <p className={styles.right_txt}>{isInterned() ? internationalData.salary : 'no'}</p>
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