"use client";
import Link from "next/link";
import styles from "./styles.module.css";
import React, { useState } from 'react';

export default function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailWarning, setEmailWarning] = useState('');

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    }

    const handleEmailBlur = (e: React.FocusEvent<HTMLInputElement>) => {
        const input = e.target.value;
        const emailPattern = /\S+@\S+\.\S+/;

        if (!emailPattern.test(input) && input !== '') {
            setEmailWarning('@');
        } else {
            setEmailWarning('');
        }
    }

    return (
        <div className={styles.loginContainer}>
            <div className={styles.loginTitle}>Log In</div>
            <div className={styles.inputFieldWrapper}>
                <input
                    type="text"
                    placeholder="Email"
                    className={styles.inputField}
                    value={email}
                    onChange={handleEmailChange}
                    onBlur={handleEmailBlur} // Add onBlur event handler
                />
                {emailWarning && <span className={styles.warning}>{emailWarning}</span>}
            </div>
            <div className={styles.inputFieldWrapper}>
                <input
                    type="password"
                    placeholder="Enter your password"
                    className={styles.inputField}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
            </div>

            <div>
                <Link href="/login" className={styles.loginButton} >Log In</Link>
            </div>
            <div>
                <Link href="/sign-up" className={styles.signupButton} >Sign Up</Link>
            </div>
            <div>
                <Link href="/forgot-password" className={styles.forgotPasswordButton} >Forgot Password</Link>
            </div>
        </div>
    );
}
