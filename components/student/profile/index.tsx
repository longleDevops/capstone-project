// index.js
"use client";

import React, { useState } from "react";
import styles from "./style.module.css";
import { UserButton } from "@clerk/nextjs";
import { Demo } from "./demo";

export const Profile = () => {
  const [submitted, setSubmitted] = useState(false); // State to track form submission

  const handleSubmit = () => {
    // Function to handle form submission
    setSubmitted(true); // Set submitted to true when form is submitted
  };

  return (
    <>
      <div className={styles.imageHolder}>
        <img src="/cwu-logo.png" alt="CWU Logo" className={styles.cwuImage} />
      </div>

      <div className={styles.aboutContainer}>
        <div className={styles.About}>
          <h1 className={styles.heading}>Profile</h1>
          <Demo submitted={submitted} /> {/* Pass submitted state to Demo */}
          <div>
            {/* Call handleSubmit when submit button is clicked */}
            <button
              type="submit"
              className={styles.surveyButton}
              onClick={handleSubmit}
            >
              Update!
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
