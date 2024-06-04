"use client"

import { Check, ChevronRight, SendHorizonal } from "lucide-react";
import { useRef, useState } from "react";
import { Flex, ScrollArea } from '@mantine/core';

import { useGetAccounts } from "@/app/(back-end)/features/account/api/use-get-accounts";
import { useGetBackgrounds } from "@/app/(back-end)/features/student-background/api/use-get-backgrounds";
import { ProfileDialog } from "./dialog/profile-dialog";
import styles from "./styles.module.css";
import { useSettings } from "@/hooks/use-settings";


export const StudentProfile = () => {
  const { data: allStudents } = useGetAccounts()
  const { data: allSubmittedStudents } = useGetBackgrounds()
  const { data: backgroundData } = useGetBackgrounds()
  const { theme } = useSettings()
  const viewport = useRef<HTMLDivElement>(null);
  const [scrollPosition, onScrollPositionChange] = useState({ x: 0, y: 0 });

  // const profiles = backgroundData.slice(-100).reverse();
  const profiles = backgroundData ? backgroundData.slice(0, 100) : []

  const submissionPercent = (allStudents && allSubmittedStudents) ? (allSubmittedStudents.length / allStudents.length) * 100 : 0


  const scrollToRight = (amount: number) => {
    const newPosistion = amount + scrollPosition.x;
    viewport.current!.scrollTo({ left: newPosistion, behavior: 'smooth' });
  }

  return (
    <>
      <div
        className={styles.profile_default}
        style={
          theme === 'Classic' ? { boxShadow: '0px 2px 5px #1f32c4' } : {}
        }
      >
        <div className={styles.horizontal_icon}>
          <SendHorizonal size={23} color="white" />
        </div>
        <p className={styles.submission_text}>Submissions</p>
        <p className={styles.submission_percent}>{submissionPercent.toFixed(0)}%</p>
        <p style={{ fontWeight: '600' }}>{allSubmittedStudents?.length} <span>/ {allStudents?.length}</span></p>
      </div>

      <ScrollArea w={760} h={270}
        viewportRef={viewport}
        scrollHideDelay={1500}
        onScrollPositionChange={onScrollPositionChange}
      >
        <Flex gap={15}>
          {profiles.map((item, index) => (
            <div
              className={styles.profile_holder}
              key={index}

            >
              <div className={styles.profile_top}
                style={theme === 'Classic' ? {
                  borderTop: '1px solid #d0d5dc',
                  borderLeft: '1px solid #d0d5dc',
                  borderRight: '1px solid #d0d5dc',
                } : {}}
              >
                {item.firstName}
              </div>
              <div className={styles.profile_bottom}
                style={theme === 'Classic' ? {
                  borderBottom: '1px solid #d0d5dc',
                  borderLeft: '1px solid #d0d5dc',
                  borderRight: '1px solid #d0d5dc',
                } : {}}
              >
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

      {profiles.length >= 4 && <ChevronRight className={styles.next_btn} onClick={() => scrollToRight(100)} size={30} />}

    </>
  )
}