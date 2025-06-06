"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import SignUpForm from '@/components/login/signUpForm';
import SignInForm from '@/components/login/signInForm';
import OverlayPanel from '@/components/login/overlayPanel';
import API from '@/components/frontAPI/api';
import styles from '@/components/login/styles/login.module.css';

const Page: React.FC = () => {
    const [isSignUp, setIsSignUp] = useState<boolean>(false);
    const [userType, setUserType] = useState<'customer' | 'restaurant' | null>(null);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const router = useRouter();

    const handleToggle = () => {
        setIsSignUp(!isSignUp);
        setUserType(null);
    };

    const handleReturn = () => {
        setUserType(null);
    };

    const handleSignUp = async () => {
        try {
            const res = await API.customerSignupCode({ firstName, lastName, email });
            if (res.status === 'success') {
                localStorage.setItem('signupEmail', email);
                router.push('/sms');
            } else {
                setErrorMessage(res.message || 'خطای نامشخص');
            }
        } catch {
            setErrorMessage('خطا در ارتباط با سرور');
        }
    };

    return (
        <div className={styles.wrapper}>
            <section>
                <div className={`${styles.container} ${isSignUp ? styles['right-panel-active'] : ''}`}>
                    <SignUpForm
                        userType={userType}
                        firstName={firstName}
                        lastName={lastName}
                        email={email}
                        errorMessage={errorMessage}
                        setUserType={setUserType}
                        setFirstName={setFirstName}
                        setLastName={setLastName}
                        setEmail={setEmail}
                        handleSignUp={handleSignUp}
                        handleReturn={handleReturn}
                    />
                    <SignInForm />
                    <OverlayPanel handleToggle={handleToggle} />
                </div>
            </section>
        </div>
    );
};

export default Page;