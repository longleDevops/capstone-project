"use client";
import Link from "next/link";
import React, { useState } from 'react';
import Button from "../ui/button"
import TextInput from "../ui/inputField";
import styles from "./style.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faQuestionCircle, faPowerOff, faCogs, faHandsHelping, faInfoCircle } from '@fortawesome/free-solid-svg-icons'



export default function Dashboard() {
    // States to store the input field values
    const [phoneNumber, setPhoneNo] = useState('');
    const [selectedGender, setSelectedGender] = useState('');
    const [Major, setMajor] = useState('');
    
    const handleSelectChange = (e) => {
        setSelectedGender(e.target.value);
    };

    return (
        <>
        <div className={styles.container}>
            <div className={styles.iconWrapper}>
                {/* Display the icon image */}
                <img src="/user-icon.jpg" alt="Icon" className={styles.icon} />
                <div>Tu Ho</div>
            </div>
        </div>
        <div className={styles.div}>
            <div className={styles.loginTitle}>Profile</div>
            <div className={styles.loginContainer}>
                <a href="/user-profile" className={styles.skipButton}><FontAwesomeIcon icon={faUser} /> My Account</a>
                <a href="/take-survey" className={styles.skipButton}><FontAwesomeIcon icon={faQuestionCircle} /> Take Survey</a>
                <a href="/logout" className={styles.skipButton}><FontAwesomeIcon icon={faPowerOff} /> Log out</a>
            </div>
            <div className={styles.p}>
                More
            </div>
            <div className={styles.loginContainer}>
                <a href="/help-support" className={styles.skipButton}><FontAwesomeIcon icon={faHandsHelping} /> Help & Support</a>
                <a href="/about-app" className={styles.skipButton}><FontAwesomeIcon icon={faInfoCircle} /> About App</a>
            </div>
        </div>
        </>
    );
}
