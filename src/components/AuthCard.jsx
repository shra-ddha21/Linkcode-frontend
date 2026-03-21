import React from 'react';
import styles from './AuthCard.module.css';

const AuthCard = ({ children, isResetFlow = false, isSlim = false }) => {
    return (
        <div className={styles.authPage}>
            <div className={`${styles.container} ${isResetFlow ? styles.resetContainer : ''} ${isSlim ? styles.slimContainer : ''}`}>
                {/* Left Section: Image Area */}
                {!isSlim && (
                    <div className={styles.imageSection}>
                        {/* Side image placeholder */}
                    </div>
                )}

                {/* Right Section: Form Area */}
                <div className={`${styles.formSection} ${isSlim ? styles.slimFormSection : ''}`}>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default AuthCard;
