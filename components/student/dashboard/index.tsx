// index.js

"use client";

import React, { useState } from 'react';
import styles from "./style.module.css";
import { UserButton } from '@clerk/nextjs';

export const Dashboard = () => {
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

            <div>
                Dashboard
            </div>
        </>
    );
}