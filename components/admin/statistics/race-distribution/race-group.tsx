"use client";

import styles from "@/components/admin/statistics/styles.module.css";
import { useGetBackgrounds } from "@/app/(back-end)/features/student-background/api/use-get-backgrounds";
import { useFilter } from "@/hooks/use-filter";
import CountUp from 'react-countup'
import { RaceChart } from "./race-chart";

const raceArr = [
  'Asian',
  'White and European',
  'African',
  'Hispanic and Latino',
  'Middle Eastern',
]

export const RaceGroup = () => {
  const { majorName } = useFilter();

  const { data: backgroundData1, isLoading } = useGetBackgrounds();

  const backgroundData2 = backgroundData1 ? backgroundData1 : [];

  const backgroundData =
    majorName.size === 0 || majorName.size === 14
      ? backgroundData2
      : backgroundData2.filter((item) => majorName.has(item.major));

  const asianArr = backgroundData
    ? backgroundData.filter((val) => val.race === raceArr[0])
    : [];

  const whiteAndEuropeanArr = backgroundData
    ? backgroundData.filter((val) => val.race === raceArr[1])
    : [];

  const africanArr = backgroundData
    ? backgroundData.filter((val) => val.race === raceArr[2])
    : [];

  const hispanicAndLatino = backgroundData
    ? backgroundData.filter((val) => val.race === raceArr[3])
    : [];

  const middleEastern = backgroundData
    ? backgroundData.filter((val) => val.race === raceArr[4])
    : [];

  const distributions = [
    {
      level: "",
      rank: "",
      amount: 0,
    },
    {
      level: "Asian",
      rank: "1",
      amount: asianArr.length,
    },
    {
      level: "White and European",
      rank: "2",
      amount: whiteAndEuropeanArr.length,
    },
    {
      level: "African",
      rank: "3",
      amount: africanArr.length,
    },
    {
      level: "Hispanic and Latino",
      rank: "4",
      amount: hispanicAndLatino.length,
    },
    {
      level: "Middle Easten",
      rank: "5",
      amount: middleEastern.length,
    },
  ];
  return (
    <>
      <div className={styles.title}>Ethicity</div>
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
                      : index === 2 ? styles.color_txt3
                        : index === 3 ? styles.color_txt4
                          : index === 4 ? styles.color_txt5
                            : styles.color_txt6
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
            <RaceChart
              asian={asianArr.length}
              white={whiteAndEuropeanArr.length}
              african={africanArr.length}
              hispanic={hispanicAndLatino.length}
              middleEastern={middleEastern.length}
            />
          )}
        </div>
      </div>
    </>
  );
};
