"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import SignUpForm from '@/components/login/signUpForm';
import SignInForm from '@/components/login/signInForm';
import API from '@/components/frontAPI/api';
import styles from '@/components/login/styles/login.module.css';

const Page: React.FC = () => {
    const [isSignUp, setIsSignUp] = useState<boolean>(false);
    const [userType, setUserType] = useState<'customer' | 'restaurant' | null>(null);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');

    const router = useRouter();

    const handleToggle = () => {
        setIsSignUp(!isSignUp);
        setUserType(null);
        setFirstName('');
        setLastName('');
        setEmail('');
    };

    const handleReturn = () => {
        setUserType(null);
        setFirstName('');
        setLastName('');
        setEmail('');
    };

    const handleSignUp = async () => {
        if (!userType) {
            return;
        }

        try {
            const res = await API[
                userType === 'customer' ? 'customerSignupCode' : 'restaurantSignupCode'
                ]({ firstName, lastName, email });

            if (res.status === 'success') {
                router.push(
                    `/sms/verify?email=${encodeURIComponent(email)}&type=${encodeURIComponent(userType)}&action=signup`
                );
            }
        } catch {
            // Errors are handled in SignUpForm
        }
    };

    React.useEffect(() => {
        console.log('userType changed:', userType);
    }, [userType]);

    return (
        <div className={styles.wrapper}>
            <section>
                <div className={styles.container}>
                    <h1 className={styles['brand-title']}>
                        <span className={styles['brand-elite']}>Elite</span>
                        <span className={styles['brand-bite']}>Bite</span>
                    </h1>
                    <div className={styles['form-container']}>
                        {isSignUp ? (
                            <SignUpForm
                                userType={userType}
                                firstName={firstName}
                                lastName={lastName}
                                email={email}
                                setUserType={setUserType}
                                setFirstName={setFirstName}
                                setLastName={setLastName}
                                setEmail={setEmail}
                                handleSignUp={handleSignUp}
                                handleReturn={handleReturn}
                            />
                        ) : (
                            <SignInForm />
                        )}
                    </div>
                    <div className={styles['toggle-container']}>
                        <p className={styles.description}>
                            {isSignUp ? 'حساب کاربری دارید؟' : 'هنوز حساب کاربری ندارید؟'}
                        </p>
                        <button className={styles['ghost-button']} onClick={handleToggle}>
                            {isSignUp ? 'ورود' : 'ثبت‌نام'}
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Page;