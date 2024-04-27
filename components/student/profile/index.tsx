// index.js
"use client";

import React, { useState } from "react";
import styles from "./style.module.css";
import { UserButton } from "@clerk/nextjs";
import { Textarea } from "@mantine/core";
import { Demo } from "./demo";
export const Profile = () => {
  return (
    <>
      <div className={styles.imageHolder}>
        <img src="/cwu-logo.png" alt="CWU Logo" className={styles.cwuImage} />
      </div>
      <div className={styles.container}>
        <div className={styles.iconWrapper}>
          {/* Display the icon image */}
          <UserButton afterSignOutUrl="/" />
          <div>Thang Le</div>
        </div>
      </div>

      <div className={styles.aboutContainer}>
        <div className={styles.About}>
          <h1 className={styles.heading}>Profile</h1>
          <div>
            <p></p>
            <Demo />
          </div>
          <div>
            <button type="submit" className={styles.surveyButton}>
              Submit!
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
