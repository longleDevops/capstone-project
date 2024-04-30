"use client"

import { ProfileDialog } from "./dialog/profile-dialog"
import styles from "./styles.module.css"
import { useRef, useState } from "react"
import { ScrollArea, Flex, Button, Stack, Group } from '@mantine/core';
import { Check, ChevronRight, CircleChevronRight, SendHorizonal } from "lucide-react";
import CountUp from 'react-countup';


export const StudentProfile = () => {
  const [scrollPos, setScrollPos] = useState(0);
  const containerRef = useRef(null);

  const profiles = [
    {
      name: "TL",
      major: "Computer science",
      graduation: "Student",
      surveyStatus: "yes"
    },
    {
      name: "LL",
      major: "Graphic Design",
      graduation: "Alumni",
      surveyStatus: "yes"
    },
    {
      name: "DE",
      major: "Architecture Engineer",
      graduation: "Alumni",
      surveyStatus: "yes"
    },
    {
      name: "AM",
      major: "Software Developer",
      graduation: "Student",
      surveyStatus: "no"
    },
    {
      name: "AM",
      major: "Software Developer",
      graduation: "Student",
      surveyStatus: "yes"
    },
    {
      name: "AM",
      major: "Software Developer",
      graduation: "Student",
      surveyStatus: "yes"
    },
    {
      name: "AM",
      major: "Software Developer",
      graduation: "Student",
      surveyStatus: "yes"
    },
    {
      name: "AM",
      major: "Mechanical Engineering",
      graduation: "Student",
      surveyStatus: "yes"
    },

  ]
  const viewport = useRef<HTMLDivElement>(null);
  const [scrollPosition, onScrollPositionChange] = useState({ x: 0, y: 0 });

  const scrollToRight = (amount: number) => {
    const newPosistion = amount + scrollPosition.x;
    viewport.current!.scrollTo({ left: newPosistion, behavior: 'smooth' });
  }
  return (
    <>
      <div className={styles.profile_default}>
        <div className={styles.horizontal_icon}>
          <SendHorizonal size={23} color="white" />
        </div>
        <p className={styles.submission_text}>Submissions</p>
        <p className={styles.submission_percent}>67%</p>
        <p>320 <span>/400</span></p>
      </div>

      <ScrollArea w={760} h={270}
        viewportRef={viewport}
        scrollHideDelay={1500}
        onScrollPositionChange={onScrollPositionChange}
      >
        <Flex gap={15}>
          {profiles.map((item) => (
            <div className={styles.profile_holder} key={item.name}>
              <div className={styles.profile_top}>
                {item.name}
              </div>
              <div className={styles.profile_bottom}>
                <p className={styles.major_text}>{item.major}</p>
                <div className={styles.status_text}>
                  <p>{item.graduation}</p>
                  {item.surveyStatus === 'yes' && <div className={styles.profile_completion}><Check size={14} /></div>}
                </div>

                <ProfileDialog />
              </div>
            </div>
          ))}
        </Flex>
      </ScrollArea>

      <ChevronRight className={styles.next_btn} onClick={() => scrollToRight(60)} size={30} />

    </>
  )
}