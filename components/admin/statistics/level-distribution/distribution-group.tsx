import { DistributionChart } from './distribution-chart'
import styles from '@/components/admin/statistics/styles.module.css'
export const DistributionGroup = () => {
  const distributions = [
    {
      level: 'bachelors',
      rank: '1',
      amount: '200'
    },
    {
      level: 'Master',
      rank: '2',
      amount: '200'
    },
    {
      level: 'PhD',
      rank: '3',
      amount: '200'
    },
    {
      level: 'Graduated',
      rank: '4',
      amount: '200'
    },
  ]
  return (
    <>
      <div className={styles.title}>
        Distributions
      </div>
      <div className={styles.distribution_holder}>
        <div className={styles.list}>
          {distributions.map((item, index) => (
            index === 0 ?
              <div key={item.level} className={styles.list_header}>
                <p className={styles.color_txt}></p>
                <p className={styles.rank_txt} ></p>
                <p className={styles.level_txt}>Levels</p>
                <p className={styles.amount_txt}>Students</p>
              </div>

              : <div key={item.level} className={styles.each_level}>
                <p className={styles.color_txt2}></p>
                <p className={styles.rank_txt}>{item.rank}</p>
                <p className={styles.level_txt}>{item.level}</p>
                <p className={styles.amount_txt}>{item.amount}</p>
              </div>
          ))}
        </div>
        <div className={styles.doughnut}>
          <DistributionChart />
        </div>
      </div>
    </>
  )
}