import React from 'react';
import { Link } from 'react-router-dom';
import styles from './AuthHeader.module.css';

const AuthHeader = ({ title, subtitle, icon, backTo = "/login", backText = "← Back", topLinkText, topLinkPath }) => {
    return (
        <>
            <div className={styles.topHeader}>
                {topLinkText && (
                    <div className={styles.topLinkSection}>
                        <span className={styles.memberText}>{topLinkText}</span>
                        <Link to={topLinkPath} className={styles.signupLink}>
                            {topLinkPath === "/signup" ? "Sign up now" : "Log in"}
                        </Link>
                    </div>
                )}
            </div>
            {backTo && !topLinkText && (
                <Link to={backTo} className={styles.backLink}>{backText}</Link>
            )}

            <div className={styles.headerArea}>
                {icon && <div className={styles.iconCircle}>{icon}</div>}
                <h2 className={styles.title}>{title}</h2>
                <p className={styles.subtitle}>{subtitle}</p>
            </div>
        </>
    );
};

export default AuthHeader;
