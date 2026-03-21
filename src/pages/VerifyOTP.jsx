import React, { useState } from 'react';
import AuthCard from '../components/AuthCard';
import AuthHeader from '../components/AuthHeader';
import OTPInput from '../components/OTPInput';
import AuthButton from '../components/AuthButton';
import api from '../api/axios';
import { useNavigate, useLocation } from 'react-router-dom';
import styles from './VerifyOTP.module.css';

const VerifyOTP = () => {
    const [otp, setOtp] = useState(['', '', '', '']);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const email = location.state?.email || '';

    const handleVerify = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        
        // Simulated transition
        setTimeout(() => {
            setLoading(false);
            navigate('/reset-password', { state: { email, token: 'temp-token' } });
        }, 800);
    };

    return (
        <AuthCard isSlim={true}>
            <AuthHeader 
                title="Password reset"
                subtitle={`We sent a code to ${email}`}
                icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#4b49ac" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>}
            />

            <form className={styles.form} onSubmit={handleVerify}>
                <OTPInput otp={otp} onChange={setOtp} />

                {error && <p className={styles.errorMessage}>{error}</p>}

                <AuthButton type="submit" disabled={loading || otp.some(d => !d)}>
                    {loading ? 'VERIFYING...' : 'CONTINUE'}
                </AuthButton>

                <div className={styles.resendSection}>
                    <p>Didn't receive the email? <button type="button" className={styles.resendBtn}>Click to resend</button></p>
                </div>
            </form>
        </AuthCard>
    );
};

export default VerifyOTP;
