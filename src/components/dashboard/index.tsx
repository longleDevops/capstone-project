"use client";

import React, { useState } from 'react';
import styles from "./style.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faQuestionCircle, faPowerOff, faCogs, faHandsHelping, faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import { UserRound, CircleHelp, Power } from 'lucide-react';

import Link from 'next/link';
import { UserButton } from '@clerk/nextjs';

const items = [
	{
		href: "/student/info",
		title: "My Account",
		icon: UserRound
	},
	{
		href: "/student/survey",
		title: "Take Survey",
		icon: CircleHelp
	},
	{
		href: "/student/logout",
		title: "Log out",
		icon: Power
	}
]

export default function Dashboard() {
	// States to store the input field values

	return (
		<>
			<div className={styles.container}>
				<div className={styles.iconWrapper}>
					{/* Display the icon image */}
					<UserButton afterSignOutUrl='/' />
					<div>Tu Ho</div>
				</div>
			</div>

			<div className={styles.loginContainer}>

				{items.map((item) => (
					<Link href={item.href} key={item.href} className={styles.link}>
						<item.icon />
						<p className={styles.title}>
							{item.title}
						</p>

					</Link>
				))}
			</div>

		</>
	);
}
