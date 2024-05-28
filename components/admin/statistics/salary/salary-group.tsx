"use client";
import styles from "./styles.module.css";
import { SalaryChart } from "./salary-chart";
import { useGetBackgrounds } from "@/app/(back-end)/features/student-background/api/use-get-backgrounds";
import CountUp from "react-countup";
import { useFilter } from "@/hooks/use-filter";

export const SalaryGroup = () => {
  const { majorName } = useFilter();
  const { data: backgroundData1, isLoading } = useGetBackgrounds();
  const backgroundData2 = backgroundData1 ? backgroundData1 : [];
  const backgroundData =
    majorName.size === 0 || majorName.size === 14
      ? backgroundData2
      : backgroundData2.filter((item) => majorName.has(item.major));

  // Filter working students for each degree level
  const workingBachelorStudents = backgroundData.filter(
    (val) =>
      val.degreeLevel === "Bachelor's Degree" &&
      val.status === "working-student"
  );
  const workingMasterStudents = backgroundData.filter(
    (val) =>
      val.degreeLevel === "Master's Degree" && val.status === "working-student"
  );
  const workingDoctorateStudents = backgroundData.filter(
    (val) =>
      val.degreeLevel === "Doctoral Degree" && val.status === "working-student"
  );

  // Calculate average salary for working students of each degree level
  const bachelorAvgSalary =
    workingBachelorStudents.length > 0
      ? workingBachelorStudents.reduce(
        (accumulator, currentValue) => accumulator + currentValue.avgSalary,
        0
      ) / workingBachelorStudents.length
      : 0;

  const masterAvgSalary =
    workingMasterStudents.length > 0
      ? workingMasterStudents.reduce(
        (accumulator, currentValue) => accumulator + currentValue.avgSalary,
        0
      ) / workingMasterStudents.length
      : 0;

  const doctorateAvgSalary =
    workingDoctorateStudents.length > 0
      ? workingDoctorateStudents.reduce(
        (accumulator, currentValue) => accumulator + currentValue.avgSalary,
        0
      ) / workingDoctorateStudents.length
      : 0;

  const salary = [
    {
      level: "",
      rank: "",
      amount: 0,
    },
    {
      level: "Bachelor's",
      rank: "1",
      amount: bachelorAvgSalary,
    },
    {
      level: "Master's",
      rank: "2",
      amount: masterAvgSalary,
    },
    {
      level: "Doctorate's",
      rank: "3",
      amount: doctorateAvgSalary,
    },
  ];
  return (
    <>
      <div className={styles.title}>Salary</div>
      <div className={styles.distribution_holder}>
        <div className={styles.list}>
          {salary.map((item, index) =>
            index === 0 ? (
              <div key={item.level} className={styles.list_header}>
                <p className={styles.color_txt}></p>
                <p className={styles.rank_txt}></p>
                <p className={styles.level_txt}>Levels </p>
                <p className={styles.amount_txt}>Avg Salary </p>
                {/* Change label to Average Salary */}
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
                  <CountUp end={item.amount} duration={2} prefix={"$"} />
                </p>
              </div>
            )
          )}
        </div>
        <div className={styles.doughnut}>
          {!isLoading && (
            <SalaryChart
              bachelor={bachelorAvgSalary}
              master={masterAvgSalary}
              doctorate={doctorateAvgSalary}
            />
          )}
        </div>
      </div>
    </>
  );
};
