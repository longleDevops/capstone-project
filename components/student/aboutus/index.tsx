"use client";
import React, { useState } from 'react';
import styles from "./style.module.css";
import { UserButton } from '@clerk/nextjs';


export const AboutUs = () => {


    return (
        <>

            <div className={styles.imageHolder}>
                <img src="/cwu-logo.png" alt="CWU Logo" className={styles.cwuImage} />
            </div>

            <div className={styles.aboutContainer}>
                <div className={styles.About}>
                    <h1 className={styles.heading}>About Us</h1>
                    <p className={styles.description}>
                        Welcome to the Career Survey Website of Central Washington University (CWU).
                        Our mission is to provide valuable insights and information to students, alumni,
                        and employers to facilitate successful career development and recruitment processes.
                    </p>
                </div>
                <div className={styles.Team}>
                    <h2 className={styles.subheading}>Our Team</h2>
                    <div className={styles.teamMember}>
                        <div className={styles.name}>Thang Le</div>
                        <div className={styles.role}>Project Manager</div>
                    </div>
                    <div className={styles.teamMember}>
                        <div className={styles.name}>Jake Tran</div>
                        <div className={styles.role}>Front-end development</div>
                    </div>
                    <div className={styles.teamMember}>
                        <div className={styles.name}>Botir Babadzhanov</div>
                        <div className={styles.role}>Front-end development</div>
                    </div>
                    <div className={styles.teamMember}>
                        <div className={styles.name}>Long Le</div>
                        <div className={styles.role}>Back-end development</div>
                    </div>
                    <div className={styles.teamMember}>
                        <div className={styles.name}>Huong Mai</div>
                        <div className={styles.role}>Back-end development</div>
                    </div>
                </div>
                <div className={styles.Contact}>
                    <h2 className={styles.subheading}>Contact Us</h2>
                    <p className={styles.contactInfo}>
                        For any inquiries or assistance, please feel free to contact us:
                    </p>
                    <p className={styles.contactInfo}>
                        Email: info@cwucareersurvey.com
                    </p>
                    <p className={styles.contactInfo}>
                        Phone: +1 (123) 456-7890
                    </p>
                </div>
            </div>
        </>
    );
}
