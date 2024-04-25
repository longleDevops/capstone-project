import Image from "next/image"
import { DoughnutChart } from "./doughnut-chart"
import styles from "./styles.module.css"
import { BadgeDollarSign, Ellipsis, Handshake } from "lucide-react"


export const Statistics = () => {
  const statistics = [
    {
      title: "Total students",
      description: "CWU & Alumni",
      data: "200"
    },
    {
      title: "Salary",
      description: "Avg. Income",
      data: "$200,000"
    },
    {
      title: "Career",
      description: "Majors & Jobs",
      data: "200"
    },
  ]


  return (
    <>
      {statistics.map((item, index) => (
        <div className={styles.statistics_holder}>
          <div className={styles.statistics_left}>
            {index === 0 ? <Image
              alt="cwu logo"
              src={"/cwu_wildcat.png"}
              width={50}
              height={50}
              className={styles.statistics_logo}
            />
              : index === 1 ?
                <div className={styles.statistics_icon}>
                  <BadgeDollarSign size={25} color="white" />
                </div>
                : <div className={styles.statistics_icon2}>
                  <Handshake size={25} color="white" />
                </div>
            }
            <p className={styles.statistics_title}>{item.title}</p>
            <p className={styles.statistics_description}>
              {item.description}
            </p>
            <p className={styles.statistics_value}>+300</p>

          </div>
          <div className={styles.statistics_right}>
            {index === 0 ?
              <>
                <DoughnutChart />
              </>
              : <Ellipsis size={30} />
            }
          </div>

        </div>
      ))}
    </>
  )
}