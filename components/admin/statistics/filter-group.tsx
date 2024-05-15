import { Button } from "@mantine/core"
import styles from "./styles.module.css"

export const FilterGroup = () => {

  return (
    <div className={styles.filter_container}>
      <Button>
        Filter Major
      </Button>
      <Button>
        Filter Term
      </Button>
    </div>
  )
}