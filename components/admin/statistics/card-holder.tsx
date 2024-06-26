"use client";

import Image from "next/image";
import styles from "./styles.module.css";
import { CircleHelp, HandCoins, Percent, Star, Triangle } from "lucide-react";
import { useGetBackgrounds } from "@/app/(back-end)/features/student-background/api/use-get-backgrounds";
import CountUp from "react-countup";
import { useFilter } from "@/hooks/use-filter";
import { useSettings } from "@/hooks/use-settings";

import { FiTriangle } from "react-icons/fi";
import { TbTriangleInverted } from "react-icons/tb";
import { difference } from "next/dist/build/utils";
import { TooltipComponent } from "./tooltip";

export const CardHolder = () => {
  const { majorName } = useFilter();
  const { theme } = useSettings();
  const { data: backgroundData1, isLoading } = useGetBackgrounds();

  const backgroundData2 = backgroundData1 ? backgroundData1 : [];

  const backgroundData =
    majorName.size === 0 || majorName.size === 14
      ? backgroundData2
      : backgroundData2.filter((item) => majorName.has(item.major));

  const totalStudents = backgroundData ? backgroundData.length : 0;

  const ratingArr = backgroundData
    ? backgroundData.map((value) => Number(value.avgRating))
    : [];
  const sumRating = ratingArr.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }, 0);

  const avgRating = parseFloat((sumRating / ratingArr.length).toFixed(1));

  const employedArr = backgroundData
    ? backgroundData
      .filter((value) => value.isEmployed)
      .map((value) => value.avgSalary)
    : [];

  const totalSalary = employedArr.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }, 0);


  const formatTotalSalary = totalSalary.toLocaleString('en-US', {
    // add suffixes for thousands, millions, and billions
    // the maximum number of decimal places to use
    maximumFractionDigits: 2,
    // specify the abbreviations to use for the suffixes
    notation: 'compact',
    compactDisplay: 'short'
  })

  // Extract the numeric value and the suffix (K, M, or B)
  const match = formatTotalSalary.match(/(-?\d*\.?\d+)([KMB])?/);

  const numericValue = match ? parseFloat(match[1]) : 0; // Numeric value without the suffix
  const suffix = match ? match[2] : ''; // The suffix (K, M, or B) or an empty string if not present



  const avgSalary = Number((totalSalary / employedArr.length).toFixed(1))

  const employmentRate =
    totalStudents > 0 ? (employedArr.length / totalStudents) * 100 : 0.0;

  const items = [
    {
      title: "Total Students",
      value: totalStudents,
      increased: "3%",
      icon: "icon",
      prefix: "",
      suffix: "",
      isIncreased: totalStudents > 10,
      difference:
        totalStudents - 10 > 0
          ? (((totalStudents - 10) / 10) * 100).toFixed(2)
          : (((10 - totalStudents) / 10) * 100).toFixed(2),
      label: "This data represents all students who have completed the survey",
      color: '#bc0c47'
    },
    {
      title: "Employment Rate",
      value: employmentRate,
      increased: "3%",
      icon: Percent,
      prefix: "",
      suffix: "%",
      isIncreased: employmentRate > 50,
      difference:
        employmentRate - 50 > 0
          ? (((employmentRate - 50) / 50) * 100).toFixed(2)
          : (((50 - employmentRate) / 50) * 100).toFixed(2),
      label: "This data represents the employment rates or the percentage of students who are currently employed. The standard comparison value is 50%. ",
      color: '#bc0c47'
    },
    {
      title: "Gross Salary",
      value: numericValue,
      increased: "3%",
      icon: HandCoins,
      prefix: '$',
      suffix,
      isIncreased: avgSalary > 50000,
      difference: ((avgSalary - 50000) / 50000 * 100).toFixed(2),
      label: 'This data represents the total salary reported by all students who are currently employed. The standard comparison value is $50,000',
      color: '#bc0c47'
    },
    {
      title: "Avg Rating",
      value: Number(avgRating),
      increased: "3%",
      icon: Star,
      prefix: "",
      suffix: "",
      isIncreased: avgRating > 2.5,
      difference: (((avgRating - 2.5) / 2.5) * 100).toFixed(2),
      label:
        "This data represents the average survey rating collected from all students. The highest rating is 5, and the lowest is 1. The standard comparison value is 2.5.",
      color: '#bc0c47'
    },
  ];
  return (
    <div className={styles.card_container}>
      {items.map((item, index) => (
        <div
          className={styles.card_holder}
          key={item.title}
          style={theme === "Classic" ? { border: "1px #d0d5dc solid" } : {}}
        >
          <div className={styles.upper_card}>
            <div
              className={
                index === 0 ? styles.logo_holder_first : styles.logo_holder
              }

            >
              {index === 0 && (
                <Image
                  alt="cwu logo"
                  src={"/cwu_wildcat.png"}
                  width={50}
                  height={50}
                  className={styles.cwu_logo}
                />
              )}
              {<item.icon />}
            </div>
            {item.isIncreased ? (
              <div className={styles.percent_txt}>
                <FiTriangle fill="#4bcd2f" color="#4bcd2f" size={11} />
                <p>{item.difference}%</p>
              </div>
            ) : (
              <div className={styles.percent_txt}>
                <TbTriangleInverted fill="#f33c5c" color="#f33c5c" size={10} />
                <p>{item.difference}%</p>
              </div>
            )}
          </div>
          <div className={styles.lower_card}>
            <div>
              <p
                className={styles.lower_card_value}
                style={index === 0 ? {} : {}}
              >
                {index !== 0 ? (
                  <CountUp
                    end={item.value}
                    decimals={1}
                    duration={2}
                    prefix={item.prefix}
                    suffix={item.suffix}
                  />
                ) : (
                  <CountUp
                    end={item.value}
                    duration={2}
                    prefix={item.prefix}
                    suffix={item.suffix}
                  />
                )}
              </p>
              <p
                className={styles.lower_card_title}
                style={index === 0 ? {} : {}}
              >
                {item.title}
              </p>
            </div>
            <TooltipComponent label={item.label} />
          </div>
        </div>
      ))}
    </div>
  );
};
