import React from 'react';
import styles from './AuthButton.module.css';

const AuthButton = ({ children, type = "button", onClick, disabled = false, ...props }) => {
    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={`${styles.authBtn} ${disabled ? styles.disabled : ''}`}
            {...props}
        >
            {children}
        </button>
    );
};

export default AuthButton;
