"use client";
import Link from "next/link";
import React, { useState } from 'react';
import Button from "../../ui/button"
import TextInput from "../../ui/inputField";

import styles from "./styles.module.css";


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
            <TextInput
                placeholder="Email"
                value={email}
                onChange={handleEmailChange}
                onBlur={handleEmailBlur}
            />
            {emailWarning && <span className={styles.warning}>{emailWarning}</span>}
            <TextInput
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
            />
            <Button href="/login">Login</Button>

            <div>
                <Link href="/sign-up" className={styles.signupButton} >Sign Up</Link>
            </div>
            <div>
                <Link href="/forgot-password" className={styles.forgotPasswordButton} >Forgot Password</Link>
            </div>
        </div>
    );
}
