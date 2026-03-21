import React from 'react';
import styles from './PasswordRules.module.css';

const PasswordRules = ({ password }) => {
    const rules = [
        { id: 'min8', label: 'Min 8 characters', test: (p) => p.length >= 8 },
        { id: 'special', label: 'Special character', test: (p) => /[^A-Za-z0-9]/.test(p) },
        { id: 'number', label: 'One number', test: (p) => /[0-9]/.test(p) },
        { id: 'uppercase', label: 'One uppercase', test: (p) => /[A-Z]/.test(p) }
    ];

    const isRuleSatisfied = (test) => test(password);

    return (
        <div className={styles.rulesContainer}>
            {rules.map((rule) => (
                <div 
                    key={rule.id} 
                    className={`${styles.ruleItem} ${isRuleSatisfied(rule.test) ? styles.satisfied : ''}`}
                >
                    <div className={styles.checkbox}>
                        {isRuleSatisfied(rule.test) && <div className={styles.glowCircle} />}
                    </div>
                    <span className={styles.ruleLabel}>{rule.label}</span>
                </div>
            ))}
        </div>
    );
};

export default PasswordRules;
