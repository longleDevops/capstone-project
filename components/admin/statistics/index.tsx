"use client"

import { useSettings } from "@/hooks/use-settings"
import { CardHolder } from "./card-holder"
import { FilterGroup } from "./filter/filter-group"
import { DistributionGroup } from "./level-distribution/distribution-group"
import { ChartsContainer } from "./main-charts/charts-container"
import { SalaryGroup } from "./salary/salary-group"
import styles from "./styles.module.css"
import { FilterList } from "./filter-list"
import { RaceGroup } from "./race-distribution/race-group"
import { CampusGroup } from "./campus-distribution/campus-group"
import { Button } from "@mantine/core"
import { useShowHide } from "@/hooks/use-showHide"


export const Statistics = () => {
  const { isClosed, theme } = useSettings()
  const { isShown, setIsShown } = useShowHide()

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
        <div className={styles.section_container} >
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

        {isShown &&
          <div className={styles.section_container}>
            <div
              className={styles.left_container3}
              style={
                theme === 'Classic' ? { border: '1px solid #d0d5dc' } : {}
              }>
              <RaceGroup />
            </div>
            <div
              className={styles.right_container3}
              style={
                theme === 'Classic' ? { border: '1px solid #d0d5dc' } : {}
              }
            >
              <CampusGroup />
            </div>

          </div>}

        {!isShown ? <Button variant='outline' color="indigo" onClick={() => setIsShown(true)}>
          Show more
        </Button>

          : <Button variant='outline' color="gray" onClick={() => setIsShown(false)}>
            Show less
          </Button>}
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