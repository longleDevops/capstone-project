"use client"
import { useFilter } from '@/hooks/use-filter'
import styles from './styles.module.css'
import { X } from 'lucide-react'
import { FilterGroup } from './filter/filter-group'
import { Button } from '@mantine/core'

export const FilterList = () => {
  const { majorName, setMajorName } = useFilter()
  //if (majorName.size === 0) return <div style={{ height: '20px' }}></div>
  const arr: string[] = []
  majorName.forEach(item => arr.push(item))
  const handleClicked = (item: string) => {
    majorName.delete(item)
    setMajorName(majorName)
  }
  const handleReset = () => {
    majorName.clear()
    setMajorName(majorName)
  }
  return (
    <div className={styles.filter_container}>
      {arr.map((item, index) => (
        <div className={styles.each_item} key={index}>
          <p className={styles.filter_item_title}>{item}</p>
          <div className={styles.x} onClick={() => handleClicked(item)}>X</div>
        </div>
      ))}
      {arr.length !== 0 &&
        <Button variant='default' color='gray' c={'gray'} onClick={handleReset}>
          Clear all
        </Button>}
    </div>
  )
}