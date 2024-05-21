"use client";
import React, { useState, FormEvent, ChangeEvent } from "react";
import styles from "./style.module.css";
import { UserButton } from "@clerk/nextjs";

export const ContactUs = () => {
  const [comment, setComment] = useState("");
  const [question, setQuestion] = useState("");

  const handleComplaintChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setComment(e.target.value);
  };

  const handleQuestionChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setQuestion(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Here you can handle the submission of the complaint and question
    // For example, send them to the server or perform any necessary actions
    console.log("Comment:", comment);
    console.log("Question:", question);
    // Optionally, you can clear the input fields after submission
    setComment("");
    setQuestion("");
  };

  return (
    <>
      <div className={styles.imageHolder}>
        <img src="/cwu-logo.png" alt="CWU Logo" className={styles.cwuImage} />
      </div>
      <div className={styles.contactContainer}>
        <div className={styles.Support}>
          <h1>Help and Support</h1>
          <p>
            Welcome to our Help and Support page. Here you can find information
            and resources to assist you with any issues or questions you may
            have.
          </p>
        </div>
        <div className={styles.Question}>
          <h2>Frequently Asked Questions (FAQs)</h2>
          <p>Below are some common questions and answers:</p>
          <ul>
            <li>How do I reset my password?</li>
            <li>What do I do if I encounter an error?</li>
            <li>Where can I find the user manual?</li>
            <li>How can I contact customer support?</li>
          </ul>
        </div>
        <div className={styles.Resources}>
          <h2>Resources</h2>
          <p>Here are some additional resources that may be helpful:</p>
          <ul>
            <li>User Manual</li>
            <li>Video Tutorials</li>
            <li>FAQs</li>
            <li>Knowledge Base</li>
          </ul>
        </div>
      </div>
    </>
  );
};
