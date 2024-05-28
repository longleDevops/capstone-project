"use client";

import { DistributionChart } from "./distribution-chart";
import styles from "@/components/admin/statistics/styles.module.css";
import { useGetBackgrounds } from "@/app/(back-end)/features/student-background/api/use-get-backgrounds";
import { useFilter } from "@/hooks/use-filter";
import CountUp from 'react-countup'

export const DistributionGroup = () => {
  const { majorName } = useFilter();

  const { data: backgroundData1, isLoading } = useGetBackgrounds();

  const backgroundData2 = backgroundData1 ? backgroundData1 : [];

  const backgroundData =
    majorName.size === 0 || majorName.size === 14
      ? backgroundData2
      : backgroundData2.filter((item) => majorName.has(item.major));

  const bachelorArr = backgroundData
    ? backgroundData.filter((val) => val.degreeLevel === "Bachelor's Degree")
    : [];

  const masterArr = backgroundData
    ? backgroundData.filter((val) => val.degreeLevel === "Master's Degree")
    : [];

  const doctorateArr = backgroundData
    ? backgroundData.filter((val) => val.degreeLevel === "Doctoral Degree")
    : [];

  const distributions = [
    {
      level: "",
      rank: "",
      amount: 0,
    },
    {
      level: "Bachelor's",
      rank: "1",
      amount: bachelorArr.length,
    },
    {
      level: "Master's",
      rank: "2",
      amount: masterArr.length,
    },
    {
      level: "Doctorate's",
      rank: "3",
      amount: doctorateArr.length,
    },
  ];
  return (
    <>
      <div className={styles.title}>Level</div>
      <div className={styles.distribution_holder}>
        <div className={styles.list}>
          {distributions.map((item, index) =>
            index === 0 ? (
              <div key={item.level} className={styles.list_header}>
                <p className={styles.color_txt}></p>
                <p className={styles.rank_txt}></p>
                <p className={styles.level_txt}>Levels</p>
                <p className={styles.amount_txt}>Students</p>
              </div>
            ) : (
              <div key={item.level} className={styles.each_level}>
                <p
                  className={
                    index === 1
                      ? styles.color_txt2
                      : index === 2
                        ? styles.color_txt3
                        : styles.color_txt4
                  }
                ></p>
                <p className={styles.rank_txt}>{item.rank}</p>
                <p className={styles.level_txt}>{item.level}</p>
                <p className={styles.amount_txt}>

                  <CountUp end={item.amount} separator="," duration={2} />
                </p>
              </div>
            )
          )}
        </div>
        <div className={styles.doughnut}>
          {!isLoading && (
            <DistributionChart
              bachelor={bachelorArr.length}
              master={masterArr.length}
              doctorate={doctorateArr.length}
            />
          )}
        </div>
      </div>
    </>
  );
};
