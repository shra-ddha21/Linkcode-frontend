import React, { useState } from 'react';
import AuthCard from '../components/AuthCard';
import AuthHeader from '../components/AuthHeader';
import FormInput from '../components/FormInput';
import AuthButton from '../components/AuthButton';
import api from '../api/axios';
import { useNavigate } from 'react-router-dom';
import styles from './ForgotPassword.module.css';

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        
        // Simulated transition
        setTimeout(() => {
            setLoading(false);
            navigate('/verify-otp', { state: { email } });
        }, 800);
    };

    return (
        <AuthCard isSlim={true}>
            <AuthHeader 
                title="Forgot password?"
                subtitle="No worries, we'll send you reset instructions."
                icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#4b49ac" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3m-3-3l-2.25-2.25"></path></svg>}
            />

            <form className={styles.form} onSubmit={handleSubmit}>
                <FormInput
                    label="Email or Mobile No"
                    id="email"
                    placeholder="Enter your email or mobile"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />

                {error && <p className={styles.errorMessage}>{error}</p>}

                <AuthButton type="submit" disabled={loading}>
                    {loading ? 'SENDING OTP...' : 'SEND OTP'}
                </AuthButton>
            </form>
        </AuthCard>
    );
};

export default ForgotPassword;
