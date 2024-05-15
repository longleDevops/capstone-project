import { BarChart } from "./bar-chart"
import { CardHolder } from "./card-holder"
import { CareerChart } from "./career-chart"
import { LineChart } from "./line-chart"
import { FilterGroup } from "./filter-group"
import styles from "./styles.module.css"
import { DistributionGroup } from "./level-distribution/distribution-group"
import { SalaryGroup } from "./salary/salary-group"

export const Statistics = () => {
  return (
    <div className={styles.container}>
      <p>Survey Statistics </p>
      <FilterGroup />

      <div className={styles.section_container}>
        <div className={styles.left_container1}>
          <div className={styles.chart_title}>
            Total CWU students by term
          </div>

        </div>
        <div className={styles.right_container1}>
          <CardHolder />
        </div>
      </div>

      <div className={styles.section_container}>
        <div className={styles.left_container}>
          <DistributionGroup />
        </div>
        <div className={styles.right_container}>
          <SalaryGroup />
        </div>
      </div>
    </div>
  )
}