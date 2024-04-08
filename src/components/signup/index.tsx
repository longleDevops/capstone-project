"use client";

import Link from "next/link";
import styles from "./styles.module.css";
import React, { useState } from 'react';

export default function LoginForm() {
    // States to store the input field values
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div className={styles.loginContainer}>
            <div className={styles.loginTitle}>Sign Up</div>
            <div className={styles.inputWrapper}>
                <input
                    type="text"
                    placeholder="First Name"
                    className={styles.loginInput}
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                />
            </div>
            <div className={styles.inputWrapper}>
                <input
                    type="text"
                    placeholder="Last Name"
                    className={styles.loginInput}
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                />
            </div>
            <div className={styles.inputWrapper}>
                <input
                    type="email"
                    placeholder="Email"
                    className={styles.loginInput}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div className={styles.inputWrapper}>
                <input
                    type="password"
                    placeholder="Password"
                    className={styles.loginInput}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

            </div>
            <div>
                <Link href="/login" className={styles.signupButton} >Sign up</Link>
            </div>
        </div>
    );
}
