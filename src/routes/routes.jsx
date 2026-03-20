import React from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';
import Login from '../pages/Login.jsx';
import Signup from '../pages/Signup.jsx';
import ForgotPassword from '../pages/ForgotPassword.jsx';
import VerifyOTP from '../pages/VerifyOTP.jsx';
import ResetPassword from '../pages/ResetPassword.jsx';
import ResetSuccess from '../pages/ResetSuccess.jsx';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Navigate to="/login" replace />,
    },
    {
        path: '/login',
        element: <Login />,
    },
    {
        path: '/signup',
        element: <Signup />,
    },
    {
        path: '/forgot-password',
        element: <ForgotPassword />,
    },
    {
        path: '/verify-otp',
        element: <VerifyOTP />,
    },
    {
        path: '/reset-password',
        element: <ResetPassword />,
    },
    {
        path: '/reset-success',
        element: <ResetSuccess />,
    }
]);

export default router;
