import React from 'react';
import styles from "./styles.module.css";

interface TextInputProps {
    type?: string;
    placeholder: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
    required?: boolean;
}

const TextInput: React.FC<TextInputProps> = ({ type = 'text', placeholder, value, onChange, onBlur, required }) => {
    return (
        <div className={styles.inputWrapper}>
            <input
                type={type}
                placeholder={placeholder}
                className={styles.input}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                required={required}
            />
            <div className={styles.inputUnderline}></div>
        </div>
    );
}

export default TextInput;
