import Image from "next/image"
import styles from "./styles.module.css"
import { Pie } from "react-chartjs-2";
import {PieChart} from "../statistics2/pie-chart"

export const Statistics = () => {
  const undergraduateData = 300;
  const graduateData = 200;

  return (

    <div className={styles.container}>
      <div className={styles.title}>
        Survey Statistics 
      </div>
      <div className={styles.studentStatus}>
         <p>Student Status</p>
          <PieChart/>
      </div>

      
    </div>
  )
}