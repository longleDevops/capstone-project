import { BarChart } from "./bar-chart"
import { CardHolder } from "./card-holder"
import { CareerChart } from "./career-chart"
import { LineChart } from "./line-chart"
import { ReportBtn } from "./report-btn"
import styles from "./styles.module.css"

export const Statistics = () => {
  return (
    <div className={styles.container}>
      Statistics page
      <ReportBtn />

      <div className={styles.section_container}>
        <div className={styles.left_container1}>
          <LineChart />
        </div>
        <div className={styles.right_container1}>
          <CardHolder />
        </div>
      </div>

      <div className={styles.bar_wrapper}>
      </div>
      <div className={styles.section_container}>
        <div className={styles.left_container}>
        </div>
        <div className={styles.right_container}>

        </div>
      </div>
    </div>
  )
}