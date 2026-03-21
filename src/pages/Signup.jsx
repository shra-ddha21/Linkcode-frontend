import React, { useState } from 'react';
import AuthCard from '../components/AuthCard';
import AuthHeader from '../components/AuthHeader';
import FormInput from '../components/FormInput';
import AuthButton from '../components/AuthButton';
import api from '../api/axios';
import styles from './Signup.module.css';

const Signup = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        mobile: '',
        gender: '',
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
                topLinkText="Already a member?" 
                topLinkPath="/login"
                title="Create an account"
                subtitle="Enter your details to get started."
            />

            <form className={styles.signupForm} onSubmit={handleSubmit}>
                <div className={styles.row}>
                    <FormInput
                        label="First Name"
                        id="firstName"
                        placeholder="First name"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                    />
                    <FormInput
                        label="Last Name"
                        id="lastName"
                        placeholder="Last name"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                    />
                </div>

                <FormInput
                    label="Email ID"
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />

                <div className={styles.row}>
                    <FormInput
                        label="Mobile No"
                        id="mobile"
                        type="tel"
                        placeholder="Enter mobile"
                        value={formData.mobile}
                        onChange={handleChange}
                        required
                    />
                    <div className={styles.selectGroup}>
                        <label className={styles.label}>Gender</label>
                        <select
                            id="gender"
                            value={formData.gender}
                            onChange={handleChange}
                            className={styles.select}
                            required
                        >
                            <option value="" disabled>Select gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                </div>

                <FormInput
                    label="Password"
                    id="password"
                    type="password"
                    placeholder="Create password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    allowToggle={true}
                />

                {error && <p className={styles.errorMessage}>{error}</p>}

                <AuthButton type="submit" disabled={loading}>
                    {loading ? 'SIGNING UP...' : 'SIGN UP'}
                </AuthButton>
            </form>
        </AuthCard>
    );
};

export default Signup;
