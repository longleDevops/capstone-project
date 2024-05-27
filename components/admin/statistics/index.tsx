"use client"

import { useSettings } from "@/hooks/use-settings"
import { CardHolder } from "./card-holder"
import { FilterGroup } from "./filter/filter-group"
import { DistributionGroup } from "./level-distribution/distribution-group"
import { ChartsContainer } from "./main-charts/charts-container"
import { SalaryGroup } from "./salary/salary-group"
import styles from "./styles.module.css"
import { FilterList } from "./filter-list"

export const Statistics = () => {
  const { isClosed, theme } = useSettings()
  return (
    <div
      className={styles.container}
      style={isClosed ? { marginLeft: '140px' } : {}}
    >
      <div className={styles.container_holder}>
        <p className={styles.statistics_title}>Survey Statistics </p>
        <p className={styles.statistic_des}>Manage and filter survey data records</p>

        <FilterList />
        <FilterGroup />
        <div className={styles.section_container}>
          <div className={styles.left_container1}
            style={
              theme === 'Classic' ? { border: '1px solid #d0d5dc' } : {}
            }
          >
            <ChartsContainer />

          </div>
          <div className={styles.right_container1}>
            <CardHolder />
          </div>
        </div>

        <div className={styles.section_container}>
          <div
            className={styles.left_container}
            style={
              theme === 'Classic' ? { border: '1px solid #d0d5dc' } : {}
            }>
            <DistributionGroup />
          </div>
          <div
            className={styles.right_container}
            style={
              theme === 'Classic' ? { border: '1px solid #d0d5dc' } : {}
            }
          >
            <SalaryGroup />
          </div>

        </div>
        {/* <div className={styles.section_container}>
          <div
            className={styles.analysis_container}
            style={
              theme === 'Classic' ? { border: '1px solid #d0d5dc' } : {}
            }>
            <DistributionGroup />
          </div>
        </div> */}
      </div>
    </div>
  )
}