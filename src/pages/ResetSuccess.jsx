import React from 'react';
import AuthCard from '../components/AuthCard';
import AuthHeader from '../components/AuthHeader';
import AuthButton from '../components/AuthButton';
import { useNavigate } from 'react-router-dom';
import styles from './ResetSuccess.module.css';

const ResetSuccess = () => {
    const navigate = useNavigate();

    return (
        <AuthCard isSlim={true}>
            <AuthHeader 
                title="Password reset!"
                subtitle="Your password has been successfully reset. Click below to log in magically."
                icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#039855" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>}
                backTo={null}
            />

            <div className={styles.content}>
                <AuthButton onClick={() => navigate('/login')}>
                    BACK TO LOGIN
                </AuthButton>
            </div>
        </AuthCard>
    );
};

export default ResetSuccess;
