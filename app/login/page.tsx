"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './Login.module.css';
import API from '@/app/api';

const Login: React.FC = () => {
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
                setErrorMessage(res.message);
            }
        } catch {
            setErrorMessage('خطا در ارتباط با سرور');
        }
    };

    return (
        <div className={styles.wrapper}>
            <section>
                <div className={`${styles.container} ${isSignUp ? styles['right-panel-active'] : ''}`}>
                    <div className={`${styles['form-container']} ${styles['sign-up-container']}`}>
                        <form>
                            <h1 className={styles.title}>ثبت‌نام</h1>
                            {!userType && (
                                <div className={styles['user-type-selection']}>
                                    <button type="button" className={`${styles['user-type-button']}`} onClick={() => setUserType('customer')}>مشتری</button>
                                    <button type="button" className={`${styles['user-type-button']}`} onClick={() => setUserType('restaurant')}>صاحب رستوران</button>
                                </div>
                            )}
                            {userType === 'customer' && (
                                <>
                                    <label><input type="text" placeholder="نام" required value={firstName} onChange={(e) => setFirstName(e.target.value)} /></label>
                                    <label><input type="text" placeholder="نام خانوادگی" required value={lastName} onChange={(e) => setLastName(e.target.value)} /></label>
                                    <label><input type="email" placeholder="ایمیل" required value={email} onChange={(e) => setEmail(e.target.value)} /></label>
                                    <button type="button" className={styles['primary-button']} onClick={handleSignUp}>ثبت‌نام</button>
                                    {errorMessage && <p className={styles['error-message']}>{errorMessage}</p>}
                                    <button type="button" className={styles['return-button']} onClick={handleReturn}>بازگشت</button>
                                </>
                            )}
                        </form>
                    </div>
                    <div className={`${styles['form-container']} ${styles['sign-in-container']}`}>
                        <form>
                            <h1 className={styles.title}>ورود</h1>
                            <p>در حال توسعه...</p>
                        </form>
                    </div>
                    <div className={styles['overlay-container']}>
                        <div className={styles.overlay}>
                            <div className={`${styles['overlay-panel']} ${styles['overlay-left']}`}>
                                <h1 className={styles['brand-title']}><span className={styles['brand-elite']}>Elite</span><span className={styles['brand-bite']}>Bite</span></h1>
                                <p className={styles.description}>اگر حساب کاربری دارید، اینجا وارد شوید</p>
                                <button className={styles['ghost-button']} onClick={handleToggle}>ورود</button>
                            </div>
                            <div className={`${styles['overlay-panel']} ${styles['overlay-right']}`}>
                                <h1 className={styles['brand-title']}><span className={styles['brand-elite']}>Elite</span><span className={styles['brand-bite']}>Bite</span></h1>
                                <p className={styles.description}>اگر هنوز حساب کاربری ندارید، ثبت‌نام کنید</p>
                                <button className={styles['ghost-button']} onClick={handleToggle}>ثبت‌نام</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Login;
