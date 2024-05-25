import { Button } from "@mantine/core"
import styles from "./styles.module.css"
import { FilterModal } from "./modal"

export const FilterGroup = () => {

  return (
    <div className={styles.filter_container}>
      <FilterModal />

    </div>
  )
}