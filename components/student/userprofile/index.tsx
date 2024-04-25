"use client";

import Link from 'next/link';
import React, { useState } from 'react';
import styles from "./style.module.css";

interface TextInputProps {
	e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>;
}

export default function UserProfile() {
	const [phoneNumber, setPhoneNo] = useState<string>('');
	const [selectedGender, setSelectedGender] = useState<string>('');
	const [Major, setMajor] = useState<string>('');

	const handleSelectChange = (e: TextInputProps['e']) => {
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
					<div className={styles.loginTitle}>Student Info</div>
					<div className={styles.inputWrapper}>
						<input
							className={styles.input}
							placeholder="Your name"
							value={phoneNumber}
							onChange={(e) => setPhoneNo(e.target.value)} />
					</div>
					<div>
						<select value={selectedGender} onChange={handleSelectChange} className={styles.dropDown}>
							<option value="" disabled selected className={styles.placeholderOption}>
								Select Gender
							</option>
							<option value="male">Male</option>
							<option value="female">Female</option>
						</select>
					</div>

					<div className={styles.inputWrapper}>
						<input
							className={styles.input}
							placeholder="What is your CWU ID?"
							value={Major}
							onChange={(e) => setMajor(e.target.value)} />
					</div>
					<Link
						href={"/student/survey"}
						className={styles.skipButton}>NEXT</Link>
				</div>
			</div>
		</>
	);
}
