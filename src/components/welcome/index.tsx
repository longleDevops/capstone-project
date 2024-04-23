import React from 'react';
import Button from "../ui/button"
import Icon from "../../../public/welcome-logo.png"

import styles from "./styles.module.css";

export default function getstarted() {
    return (
        <div className={styles.surveyContainer}>
                <img
                    src={Icon.src}
                    alt="My Image"
                    width={500}
                    height={500}
                    className={styles.welcomeLogo}
                />

            <div className={styles.surveyTitleContainer}>
                <div className={styles.loginTitle}>Survey</div>
            </div>

            <Button href="/login">Get Started</Button>

        </div>
    );
}
