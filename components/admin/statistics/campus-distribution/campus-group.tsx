"use client";

import styles from "@/components/admin/statistics/styles.module.css";
import { useGetBackgrounds } from "@/app/(back-end)/features/student-background/api/use-get-backgrounds";
import { useFilter } from "@/hooks/use-filter";
import CountUp from 'react-countup'
import { CampusChart } from "./campus-chart";

const campusArr = [
  "Ellensburg",
  "Pierce County",
  "Lynnwood",
  "Des Moines",
  "Sammamish",
  "Online"
]

export const CampusGroup = () => {
  const { majorName } = useFilter();

  const { data: backgroundData1, isLoading } = useGetBackgrounds();

  const backgroundData2 = backgroundData1 ? backgroundData1 : [];

  const backgroundData =
    majorName.size === 0 || majorName.size === 14
      ? backgroundData2
      : backgroundData2.filter((item) => majorName.has(item.major));

  const ellenArr = backgroundData
    ? backgroundData.filter((val) => val.campus === campusArr[0])
    : [];

  const pierceArr = backgroundData
    ? backgroundData.filter((val) => val.campus === campusArr[1])
    : [];

  const lynwoodArr = backgroundData
    ? backgroundData.filter((val) => val.campus === campusArr[2])
    : [];

  const desmoinesArr = backgroundData
    ? backgroundData.filter((val) => val.campus === campusArr[3])
    : [];

  const sammamishArr = backgroundData
    ? backgroundData.filter((val) => val.campus === campusArr[4])
    : [];

  const onlineArr = backgroundData
    ? backgroundData.filter((val) => val.campus === campusArr[5])
    : [];

  const distributions = [
    {
      level: "",
      rank: "",
      amount: 0,
    },
    {
      level: campusArr[0],
      rank: "1",
      amount: ellenArr.length,
    },
    {
      level: campusArr[1],
      rank: "2",
      amount: pierceArr.length,
    },
    {
      level: campusArr[2],
      rank: "3",
      amount: lynwoodArr.length,
    },
    {
      level: campusArr[3],
      rank: "4",
      amount: desmoinesArr.length,
    },
    {
      level: campusArr[4],
      rank: "5",
      amount: sammamishArr.length,
    },
    {
      level: campusArr[5],
      rank: "6",
      amount: onlineArr.length,
    },
  ];
  return (
    <>
      <div className={styles.title}>Campus</div>
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

                  <CountUp end={item.amount} separator="," />
                </p>
              </div>
            )
          )}
        </div>
        <div className={styles.doughnut}>
          {!isLoading && (
            <CampusChart
              ellen={ellenArr.length}
              pierce={pierceArr.length}
              lynwood={lynwoodArr.length}
              desmoines={desmoinesArr.length}
              sammamish={sammamishArr.length}
              online={onlineArr.length}
            />
          )}
        </div>
      </div>
    </>
  );
};
