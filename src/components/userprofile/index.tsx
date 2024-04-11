"use client";
import Link from "next/link";
import React, { useState } from 'react';
import Button from "../ui/button"
import TextInput from "../ui/inputField";
import styles from "./style.module.css";


export default function UserProfile() {
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
            </div>
            <div className={styles.loginContainer}>
                <div className={styles.loginTitle}>Bio</div>
                <div className={styles.inputWrapper}>
                    <input
                        className={styles.input}
                        placeholder="Phone Number"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNo(e.target.value)} />
                </div>
                <div className={styles.inputWrapper}>
                    <select value={selectedGender} onChange={handleSelectChange} className={styles.input}>
                        <option value="" disabled hidden>Select your gender</option>
                        <option value="option1">Male</option>
                        <option value="option2">Female</option>
                    </select>
                </div>
                <div className={styles.inputWrapper}>
                    <input
                        className={styles.input}
                        placeholder="What is your major?"
                        value={Major}
                        onChange={(e) => setMajor(e.target.value)} />
                </div>
                <button className={styles.skipButton}>Skip</button>
            </div>
        </div>
        </>
    );
}
