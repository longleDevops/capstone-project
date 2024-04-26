"use client"

import { ProfileDialog } from "./dialog/profile-dialog"
import styles from "./styles.module.css"
import { useRef, useState } from "react"
import { ScrollArea, Flex, Button, Stack, Group } from '@mantine/core';
import { CircularProgressbar } from 'react-circular-progressbar';
import { CircleChevronRight } from "lucide-react";


export const StudentProfile = () => {
  const [scrollPos, setScrollPos] = useState(0);
  const containerRef = useRef(null);

  const profiles = [
    {
      name: "kevin1",
      major: "math",
      year: "2022"
    },
    {
      name: "kevin2",
      major: "math",
      year: "2022"
    },
    {
      name: "kevin3",
      major: "math",
      year: "2022"
    },
    {
      name: "kevin3",
      major: "math",
      year: "2022"
    },
    {
      name: "kevin3",
      major: "math",
      year: "2022"
    },
    {
      name: "kevin3",
      major: "math",
      year: "2022"
    },
    {
      name: "kevin3",
      major: "math",
      year: "2022"
    },
    {
      name: "kevin3",
      major: "math",
      year: "2022"
    }
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
        <p>320</p>
        <p>Submissions</p>
      </div>

      <ScrollArea w={720} h={260}
        viewportRef={viewport}
        scrollHideDelay={1000}
        onScrollPositionChange={onScrollPositionChange}
      >
        <Flex gap={10}>
          {profiles.map((item) => (
            <div className={styles.profile_holder} key={item.name}>
              <div className={styles.profile_top}>
                TL
              </div>
              <div className={styles.profile_bottom}>
                <p className={styles.major_text}>Computer science</p>
                <p className={styles.status_text}>CWU student</p>
                <ProfileDialog />
              </div>
            </div>
          ))}
        </Flex>
      </ScrollArea>

      <CircleChevronRight className={styles.next_btn} onClick={() => scrollToRight(60)} size={30} />

    </>
  )
}