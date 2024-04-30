"use client";
import React, { useState } from "react";
import styles from "./styles.module.css";
import { UserButton } from "@clerk/nextjs";
import router, { useRouter } from "next/router";
import { Survey_p1 } from "./survey_p1";
import { Survey_p2 } from "./survey_p2";
import { Survey_p3 } from "./survey_p3";

export const Survey = () => {
  // State to track the current table
  const [currentTable, setCurrentTable] = useState(1);

  const [submitted, setSubmitted] = useState(false);
  const [p1Completed, setP1Completed] = useState(false);
  const [p2Completed, setP2Completed] = useState(false);
  const [p3Completed, setP3Completed] = useState(false);
  //SetAnswers for tables
  const [answersP1, setAnswersP1] = useState({});
  const [answersP2, setAnswersP2] = useState({});
  const [answersP3, setAnswersP3] = useState({});

  // Function to handle navigation to the next table
  // Inside handleNext function
  const handleNext = () => {
    if (currentTable === 1 && !p1Completed) {
      alert("Please answer all questions in Part 1 before proceeding.");
      return;
    }
    if (currentTable === 2 && !p2Completed) {
      alert("Please answer all questions in Part 2 before proceeding.");
      return;
    }

    setCurrentTable(currentTable + 1);
  };
  // Function to handle navigation to the previous table
  const handleBack = () => {
    setCurrentTable(currentTable - 1);
  };

  const handleSubmit = () => {
    if (currentTable === 3 && !p3Completed) {
      alert("Please answer all questions in Part 3 before proceeding.");
      return;
    }
    // Show a message
    alert("Thank you for your time!");

    // Redirect back to the student dashboard
    setSubmitted(true);
    window.location.href = "/student/dashboard";
  };

  //Handle Set table answers
  return (
    <div className={styles.scrollableContainer}>
      <div className={styles.imageHolder}>
        <img src="/cwu-logo.png" alt="CWU Logo" className={styles.cwuImage} />
      </div>
      <div className={styles.container}>
        <div className={styles.iconWrapper}>
          {/* Display the icon image */}
          <UserButton afterSignOutUrl="/" />
          <div>Tu Ho</div>
        </div>
      </div>
      <div className={styles.surveyContainer}>
        <div className={styles.surveyHeader}></div>
        {/* Render current table */}
        <div className="renderTableContainer">
          {currentTable === 1 && (
            <Survey_p1 onP1Complete={() => setP1Completed(true)} />
          )}
          {currentTable === 2 && (
            <Survey_p2 onP2Complete={() => setP2Completed(true)} />
          )}{" "}
          {currentTable === 3 && (
            <Survey_p3 onP3Complete={() => setP3Completed(true)} />
          )}
        </div>
        <div className={styles.buttonContainer}>
          {currentTable !== 1 && (
            <button onClick={handleBack} className={styles.nextButton}>
              Back
            </button>
          )}
          {(currentTable == 1 || currentTable == 2) && (
            <button onClick={handleNext} className={styles.nextButton}>
              Next
            </button>
          )}
          {currentTable === 3 && (
            <button onClick={handleSubmit} className={styles.nextButton}>
              Submit
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
