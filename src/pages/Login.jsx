import React, { useState } from 'react';
import AuthCard from '../components/AuthCard';
import AuthHeader from '../components/AuthHeader';
import FormInput from '../components/FormInput';
import AuthButton from '../components/AuthButton';
import api from '../api/axios';
import styles from './Login.module.css';

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [id]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        setTimeout(() => {
            console.log('Signup simulated success:', formData);
            setLoading(false);
            // navigate to login
        }, 800);
    };

    return (
        <AuthCard>
            <AuthHeader 
                topLinkText="Not a member?" 
                topLinkPath="/signup"
                title="Log in to your account"
                subtitle="Enter your details to access your dashboard."
            />

            <form className={styles.loginForm} onSubmit={handleSubmit}>
                <FormInput
                    label="Email or Mobile No"
                    id="email"
                    placeholder="Enter your email or mobile"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />

                <FormInput
                    label="Password"
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    allowToggle={true}
                />

                <div className={styles.forgotPassword}>
                    <a href="/forgot-password">Forgot password?</a>
                </div>

                {error && <p className={styles.errorMessage}>{error}</p>}

                <AuthButton type="submit" disabled={loading}>
                    {loading ? 'LOGGING IN...' : 'LOGIN'}
                </AuthButton>
            </form>
        </AuthCard>
    );
};

export default Login;
