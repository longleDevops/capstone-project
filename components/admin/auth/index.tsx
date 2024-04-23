"use client"

import Link from "next/link";
import React, { useState } from 'react';
import TextInput from "../../ui/inputField";

import styles from "./styles.module.css";


export default function Auth() {
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
			<div className={styles.loginTitle}>Admin</div>
			<TextInput
				placeholder="Username"
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
			<Link
				href={"/admin/dashboard"}
				className={styles.login_btn}
			>
				Login
			</Link>
			<p className={styles.forgot_password}>Forgot password?</p>
		</div>
	);
}
