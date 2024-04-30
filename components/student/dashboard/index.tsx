// index.js

"use client";

import React, { useState } from "react";
import styles from "./style.module.css";
import Link from "next/link";
import Image from "next/image";

export const Dashboard = () => {
  return (
    <>
      <div className={styles.imageHolder}>
        <img src="/cwu-logo.png" alt="CWU Logo" className={styles.cwuImage} />
      </div>

      <div className={styles.aboutContainer}>
        <Image src="/grad.png" alt="CWU grad" width={700} height={200} className={styles.cwuGradImg} />
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
        <Link href="/student/survey">
          <button type="submit" className={styles.surveyButton}>
            Take Survey!
          </button>
        </Link>
      </div>
    </>
  );
};
