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
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { id, value } = e.target;
        
        if (id === 'mobile') {
            // Only allow digits and limit to 10 digits
            const numericValue = value.replace(/\D/g, '').slice(0, 10);
            setFormData(prev => ({
                ...prev,
                [id]: numericValue
            }));
        } else {
            setFormData(prev => ({
                ...prev,
                [id]: value
            }));
        }

        // Clear error when user starts typing
        if (errors[id]) {
            setErrors(prev => ({ ...prev, [id]: '' }));
        }
    };

    const validateForm = () => {
        const newErrors = {};

        // Name validation (only letters, min 2)
        const nameRegex = /^[A-Za-z]{2,30}$/;
        if (!nameRegex.test(formData.firstName.trim())) {
            newErrors.firstName = 'First name must be at least 2 letters';
        }
        if (!nameRegex.test(formData.lastName.trim())) {
            newErrors.lastName = 'Last name must be at least 2 letters';
        }

        // Password validation (min 8, 1 upper, 1 lower, 1 number, 1 special)
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        if (!passwordRegex.test(formData.password)) {
            newErrors.password = 'Password must be 8+ chars with uppercase, lowercase, number and special char';
        }

        // Mobile validation (10 digits)
        const mobileRegex = /^[0-9]{10}$/;
        if (!mobileRegex.test(formData.mobile)) {
            newErrors.mobile = 'Mobile number must be 10 digits';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) return;

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

            <form className={styles.signupForm} onSubmit={handleSubmit} noValidate>
                <div className={styles.row}>
                    <FormInput
                        label="First Name"
                        id="firstName"
                        placeholder="First name"
                        value={formData.firstName}
                        onChange={handleChange}
                        error={errors.firstName}
                        required
                    />
                    <FormInput
                        label="Last Name"
                        id="lastName"
                        placeholder="Last name"
                        value={formData.lastName}
                        onChange={handleChange}
                        error={errors.lastName}
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
                        error={errors.mobile}
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
                    error={errors.password}
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

export default SignUp;
