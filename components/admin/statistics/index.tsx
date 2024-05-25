"use client"

import { useSettings } from "@/hooks/use-settings"
import { CardHolder } from "./card-holder"
import { FilterGroup } from "./filter/filter-group"
import { DistributionGroup } from "./level-distribution/distribution-group"
import { ChartsContainer } from "./main-charts/charts-container"
import { SalaryGroup } from "./salary/salary-group"
import styles from "./styles.module.css"

export const Statistics = () => {
  const { isClosed } = useSettings()
  return (
    <div
      className={styles.container}
      style={isClosed ? { marginLeft: '140px' } : {}}
    >
      <div className={styles.container_holder}>
        <p className={styles.statistics_title}>Survey Statistics </p>
        <p className={styles.statistic_des}>Manage and filter survey data records</p>
        <FilterGroup />

        <div className={styles.section_container}>
          <div className={styles.left_container1}>
            <ChartsContainer />

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
    </div>
  )
}