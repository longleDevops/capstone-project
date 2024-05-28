// index.js

"use client";

import { useSurvey } from "@/hooks/use-survey";
import Image from "next/image";
import Link from "next/link";
import styles from "./style.module.css";
import { useBackgroundAnswers } from "@/hooks/use-background-answers";
import { Button } from "@mantine/core";
import { useRouter } from "next/navigation";

type props = {
  firstName: string,
  lastName: string,
  userId: string
}

export const NotStarted = ({ firstName, lastName, userId }: props) => {
  const { isStarted, setIsStarted } = useSurvey()
  const { setBackgroundAnswers } = useBackgroundAnswers()
  const router = useRouter()
  const handleClicked = () => {
    setBackgroundAnswers({
      firstName,
      lastName,
      studentId: '',
      major: '',
      startTerm: '',
      endTerm: '',
      campus: '',
      gender: '',
      race: '',
      degreeLevel: ''
    })
    setIsStarted(true)
    router.push('/student/survey')
  }

  return (
    <>
      <div className={styles.imageHolder}>
        <img src="/cwu-logo.png" alt="CWU Logo" className={styles.cwuImage} />
      </div>

      <div className={styles.aboutContainer}>
        <Image
          src="/grad.png"
          alt="CWU grad"
          width={700}
          height={200}
          className={styles.cwuGradImg}
        />
        <div className={styles.heading}>Post-Graduation Career Survey </div>
        <div className={styles.description_container}>
          <p>
            As you embark on your journey beyond Central Washington University,
            we invite you to participate in our Post-Graduation Career Survey.
            Your insights and experiences are invaluable in shaping the future
            of our programs and ensuring the success of current and future
            students. The CWU Post-Graduation Career Survey is a vital tool for
            understanding the career paths and achievements of our graduates. By
            sharing your post-graduation experiences, you contribute to the
            enhancement of our academic programs, career services, and alumni
            support initiatives.
          </p>
        </div>

        <Button variant="default" onClick={handleClicked} className={styles.surveyButton}>
          Take Survey!
        </Button>
      </div>
    </>
  );

};
