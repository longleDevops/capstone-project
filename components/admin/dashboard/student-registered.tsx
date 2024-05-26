"use client"

import { useGetAccounts } from "@/app/(back-end)/features/account/api/use-get-accounts"
import styles from "./styles.module.css"

export const StudentRegistered = () => {
  const { data } = useGetAccounts()

  const formatDate = (input: string) => {
    const dateObject = new Date(input)
    const result = dateObject.toLocaleString('en-US', { month: '2-digit', day: 'numeric', year: 'numeric' });

    return result;
  }

  const formatTime = (input: string) => {
    const dateObject = new Date(input)
    const result = dateObject.toLocaleString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit', timeZoneName: 'short' });

    return result;
  }

  const isEven = (index: number) => {
    if (index % 2 === 0) {
      return true
    }
    return false
  }

  if (!data) return <>...Loading</>
  return (
    <div className={styles.submission_container_big}>
      <div className={styles.submission_container}>
        <div className={styles.submission_title} >
          <p className={styles.submission_name}>Full Name</p>
          <p>Survey Name</p>
          <p > Survey Status</p>
          <p >Date Created</p>
          <p >At Time</p>
        </div>
        {data.slice(-50).reverse().map((item, index) => (
          <div className={isEven(index) ? styles.submission_row : styles.submission_row_odd} key={item.id}>
            <p className={styles.submission_name}>{item.firstName} {item.lastName}</p>
            <p>Graduation survey</p>
            <p className={styles.submission_status} style={item.isSubmitted ? { color: '#0bca00' } : { color: '#ca0900' }}>{item.isSubmitted ? 'completed' : 'not submitted'}</p>
            <p className={styles.date_created}>{formatDate(item.createdAt)}</p>
            <p className={styles.submission_status}>{formatTime(item.createdAt)}</p>
          </div>
        ))}
      </div>
    </div>
  )
}