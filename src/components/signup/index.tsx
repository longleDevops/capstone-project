"use client";

import React, { useState } from 'react';
import Button from "../ui/button";
import TextInput from "../ui/inputField";

import styles from "./styles.module.css";

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
                <TextInput
                    placeholder="First Name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                />
            </div>
            <div className={styles.inputWrapper}>
                <TextInput
                    placeholder="Last Name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                />
            </div>
            <div className={styles.inputWrapper}>
                <TextInput
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div className={styles.inputWrapper}>
                <TextInput
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <Button href="/login">Sign up</Button>
        </div>
    );
}
