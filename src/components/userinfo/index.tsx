"use client";
import React, { useState } from 'react';
import styles from "./style.module.css";



export default function UserInfo() {
    // States to store the input field values
    

    return (
        <>
            <div className={styles.loginContainer}>
                <div className={styles.Name}>Name</div>
                <div className={styles.Contact}>Email</div>
                <div className={styles.Bio}>Bio</div>
            </div>
        </>
    );
}
