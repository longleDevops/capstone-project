"use client";
import "chart.js/auto";
import { Doughnut } from "react-chartjs-2";
import styles from "@/components/admin/statistics/styles.module.css";
import CountUp from "react-countup";

type Props = {
  bachelor: number;
  master: number;
  doctorate: number;
};

export const SalaryChart = ({ bachelor, master, doctorate }: Props) => {
  // Calculate total number of students
  const totalStudents = (bachelor + master + doctorate) / 3;

  // Calculate average salary for each degree level
  const bachelorAvgSalary = totalStudents !== 0 ? bachelor / totalStudents : 0;
  const masterAvgSalary = totalStudents !== 0 ? master / totalStudents : 0;
  const doctorateAvgSalary =
    totalStudents !== 0 ? doctorate / totalStudents : 0;

  const data = {
    labels: ["Bachelor's", "Master's", "Doctorate's"],
    datasets: [
      {
        label: "",
        data: [bachelorAvgSalary, masterAvgSalary, doctorateAvgSalary],
        hoverOffset: 15,
        borderWidth: 0,
      },
    ],
  };

  return (
    <div className={styles.doughnut_container}>
      <div className={styles.doughnut_value}>
        <CountUp end={totalStudents} duration={2} prefix="$" />
        <p className={styles.doughnut_description}>Avarage</p>
      </div>
      <div>
        <Doughnut
          data={data}
          options={{
            color: "black",
            layout: { padding: 10 },
            plugins: {
              legend: { display: false },
              tooltip: {
                xAlign: "center",
                yAlign: "bottom",
                backgroundColor: "rgba(64,84,215,1)",
                displayColors: true,
                boxPadding: 5,
                padding: 10,
                titleFont: { size: 14, weight: "bold" },
                bodyFont: { size: 18, weight: "bolder" },
              },
            },
            maintainAspectRatio: false,
            cutout: "73%",
          }}
        />
      </div>
    </div>
  );
};
