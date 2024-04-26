"use client";
import React, { useState, FormEvent, ChangeEvent } from 'react';
import styles from "./style.module.css";



export const ContactUs = () => {
    const [complaint, setComplaint] = useState('');
    const [question, setQuestion] = useState('');

    const handleComplaintChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setComplaint(e.target.value);
    };

    const handleQuestionChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setQuestion(e.target.value);
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Here you can handle the submission of the complaint and question
        // For example, send them to the server or perform any necessary actions
        console.log('Complaint:', complaint);
        console.log('Question:', question);
        // Optionally, you can clear the input fields after submission
        setComplaint('');
        setQuestion('');
    };

    return (
        <div className={styles.contactContainer}>
            <h1>Complaints and Questions</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="complaint">Complaint:</label>
                    <textarea
                        id="complaint"
                        value={complaint}
                        onChange={handleComplaintChange}
                        placeholder="Type your complaint here..."
                        rows={4}
                        cols={50}
                    />
                </div>
                <div>
                    <label htmlFor="question">Question:</label>
                    <textarea
                        id="question"
                        value={question}
                        onChange={handleQuestionChange}
                        placeholder="Type your question here..."
                        rows={4}
                        cols={50}
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}