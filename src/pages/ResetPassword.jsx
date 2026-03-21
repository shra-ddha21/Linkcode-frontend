import React, { useState } from 'react';
import AuthCard from '../components/AuthCard';
import AuthHeader from '../components/AuthHeader';
import FormInput from '../components/FormInput';
import AuthButton from '../components/AuthButton';
import PasswordRules from '../components/PasswordRules';
import api from '../api/axios';
import { useNavigate, useLocation } from 'react-router-dom';
import styles from './ResetPassword.module.css';

const ResetPassword = () => {
    const [passwords, setPasswords] = useState({
        newPassword: '',
        confirmPassword: ''
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const email = location.state?.email || '';

    const handleChange = (e) => {
        const { id, value } = e.target;
        setPasswords(prev => ({ ...prev, [id]: value }));
    };

    const isPasswordValid = (p) => {
        return p.length >= 8 && /[^A-Za-z0-9]/.test(p) && /[0-9]/.test(p) && /[A-Z]/.test(p);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (passwords.newPassword !== passwords.confirmPassword) {
            setError('Passwords do not match');
            return;
        }
        setLoading(true);
        setError('');
        
        // Simulated transition
        setTimeout(() => {
            setLoading(false);
            navigate('/reset-success');
        }, 800);
    };

    return (
        <AuthCard isSlim={true}>
            <AuthHeader 
                title="Set new password"
                subtitle="Your new password must be different from previously used passwords."
                icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#4b49ac" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>}
            />

            <form className={styles.form} onSubmit={handleSubmit}>
                <FormInput
                    label="Password"
                    id="newPassword"
                    type="password"
                    placeholder="Enter new password"
                    value={passwords.newPassword}
                    onChange={handleChange}
                    required
                    allowToggle={true}
                />

                <PasswordRules password={passwords.newPassword} />

                <FormInput
                    label="Confirm Password"
                    id="confirmPassword"
                    type="password"
                    placeholder="Confirm new password"
                    value={passwords.confirmPassword}
                    onChange={handleChange}
                    required
                    allowToggle={true}
                />

                {error && <p className={styles.errorMessage}>{error}</p>}

                <AuthButton 
                    type="submit" 
                    disabled={loading || !isPasswordValid(passwords.newPassword) || passwords.newPassword !== passwords.confirmPassword}
                >
                    {loading ? 'RESETTING...' : 'RESET PASSWORD'}
                </AuthButton>
            </form>
        </AuthCard>
    );
};

export default ResetPassword;
