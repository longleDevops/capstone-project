// index.js

"use client";

import React, { useState } from 'react';
import styles from "./style.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faQuestionCircle, faPowerOff, faCogs, faHandsHelping, faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import { UserRound, CircleHelp, Power, Bell, CircleArrowRight } from 'lucide-react';

import Link from 'next/link';
import { UserButton } from '@clerk/nextjs';

const items = [
    {
        href: "/student/info",
        title: "My Account",
        icon: UserRound
    },
    {
        href: "/student/profile",
        title: "Take Survey",
        icon: CircleArrowRight
    },
    {
        href: "/student/dashboard", // NEED to add one more page for about us
        title: "Help And Support",
        icon: Bell
    },
    {
        href: "/student/dashboard", // NEED to add one more page for about us
        title: "About Us",
        icon: CircleHelp
    },
    {
        href: "/student/logout",
        title: "Log out",
        icon: Power
    }
];

export default function Dashboard() {
    return (
        <>
            <div className={styles.imageHolder}>
                <img src="/cwu-logo.png" alt="CWU Logo" className={styles.cwuImage} />
            </div>
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