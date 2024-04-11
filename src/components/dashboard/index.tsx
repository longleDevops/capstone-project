"use client";
import Link from "next/link";
import React, { useState } from 'react';
import Button from "../ui/button"
import TextInput from "../ui/inputField";
import styles from "./style.module.css";


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
                <button className={styles.skipButton}>My Account</button>
                <button className={styles.skipButton}>Take Survey</button>
                <button className={styles.skipButton}>Log out</button>
            </div>
            <div className={styles.p}>More</div>
            <div className={styles.loginContainer}>
                <button className={styles.skipButton}>Help & Support</button>
                <button className={styles.skipButton}>About App</button>
            </div>
            </div>
        </>
    );
}
