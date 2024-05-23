"use client"

import { ProfileDialog } from "./dialog/profile-dialog"
import styles from "./styles.module.css"
import { useRef, useState } from "react"
import { ScrollArea, Flex, Button, Stack, Group } from '@mantine/core';
import { Check, ChevronRight, CircleChevronRight, SendHorizonal } from "lucide-react";
import CountUp from 'react-countup';
import { useGetAccounts } from "@/app/(back-end)/features/account/api/use-get-accounts";
import { useGetBackgrounds } from "@/app/(back-end)/features/student-background/api/use-get-backgrounds";
import { useGetSubmittedAccounts } from "@/app/(back-end)/features/account/api/use-get-submitted-accounts";
import { useDialog } from "@/hooks/use-dialog";


export const StudentProfile = () => {
  const { setIsDialogOpen3 } = useDialog()
  const { data: allStudents } = useGetAccounts()
  const { data: allSubmittedStudents } = useGetSubmittedAccounts()
  const { data: backgroundData } = useGetBackgrounds()

  const profiles = backgroundData ? backgroundData : [];

  const submissionPercent = (allStudents && allSubmittedStudents) ? (allSubmittedStudents.length / allStudents.length) * 100 : 0

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
        <p className={styles.submission_percent}>{submissionPercent.toFixed(0)}%</p>
        <p>{allSubmittedStudents?.length} <span>/ {allStudents?.length}</span></p>
      </div>

      <ScrollArea w={760} h={270}
        viewportRef={viewport}
        scrollHideDelay={1500}
        onScrollPositionChange={onScrollPositionChange}
      >
        <Flex gap={15}>
          {profiles.map((item) => (
            <div className={styles.profile_holder} key={item.id}>
              <div className={styles.profile_top}>
                {item.firstName}
              </div>
              <div className={styles.profile_bottom}>
                <p className={styles.major_text}>{item.major}</p>
                <div className={styles.status_text}>
                  <p>{item.endTerm}</p>
                  <div className={styles.profile_completion}><Check size={14} /></div>
                </div>

                <ProfileDialog backgroundData={item} />
              </div>
            </div>
          ))}
        </Flex>
      </ScrollArea>

      {profiles.length >= 4 && <ChevronRight className={styles.next_btn} onClick={() => scrollToRight(60)} size={30} />}

    </>
  )
}