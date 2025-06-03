"use client";
import React, { useState } from 'react';
import Link from "next/link";
import styles from './Login.module.css';

const Login: React.FC = () => {
    const [isSignUp, setIsSignUp] = useState<boolean>(false);
    const [userType, setUserType] = useState<'customer' | 'restaurant' | null>(null);

    const handleToggle = () => {
        setIsSignUp(!isSignUp);
        setUserType(null);
    };

    const handleReturn = () => {
        setUserType(null);
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
                                    <button
                                        type="button"
                                        className={`${styles['user-type-button']} ${userType === 'customer' ? styles.active : ''}`}
                                        onClick={() => setUserType('customer')}
                                    >
                                        مشتری
                                    </button>
                                    <button
                                        type="button"
                                        className={`${styles['user-type-button']} ${userType === 'restaurant' ? styles.active : ''}`}
                                        onClick={() => setUserType('restaurant')}
                                    >
                                        صاحب رستوران
                                    </button>
                                </div>
                            )}
                            {userType === 'customer' && (
                                <>
                                    <label>
                                        <input type="text" placeholder="نام" required />
                                    </label>
                                    <label>
                                        <input type="text" placeholder="نام خانوادگی" required />
                                    </label>
                                    <label>
                                        <input type="email" placeholder="ایمیل" required />
                                    </label>
                                    <Link href="/sms" className={styles.link}>
                                        <button type="button" className={styles['primary-button']}>ورود</button>
                                    </Link>
                                    <button type="button" className={styles['return-button']} onClick={handleReturn}>
                                        بازگشت
                                    </button>
                                </>
                            )}
                            {userType === 'restaurant' && (
                                <>
                                    <label>
                                        <input type="text" placeholder="نام" required />
                                    </label>
                                    <label>
                                        <input type="text" placeholder="نام خانوادگی" required />
                                    </label>
                                    <label>
                                        <input type="email" placeholder="ایمیل" required />
                                    </label>
                                    <Link href="/sms" className={styles.link}>
                                        <button type="button" className={styles['primary-button']}>ورود</button>
                                    </Link>
                                    <button type="button" className={styles['return-button']} onClick={handleReturn}>
                                        بازگشت
                                    </button>
                                </>
                            )}
                        </form>
                    </div>
                    <div className={`${styles['form-container']} ${styles['sign-in-container']}`}>
                        <form>
                            <h1 className={styles.title}>ورود</h1>
                            {!userType && (
                                <div className={styles['user-type-selection']}>
                                    <button
                                        type="button"
                                        className={`${styles['user-type-button']} ${userType === 'customer' ? styles.active : ''}`}
                                        onClick={() => setUserType('customer')}
                                    >
                                        مشتری
                                    </button>
                                    <button
                                        type="button"
                                        className={`${styles['user-type-button']} ${userType === 'restaurant' ? styles.active : ''}`}
                                        onClick={() => setUserType('restaurant')}
                                    >
                                        صاحب رستوران
                                    </button>
                                </div>
                            )}
                            {(userType === 'customer' || userType === 'restaurant') && (
                                <>
                                    <label>
                                        <input type="email" placeholder="ایمیل" required />
                                    </label>
                                    <Link href="/sms" className={styles.link}>
                                        <button type="button" className={styles['primary-button']}>ورود</button>
                                    </Link>
                                    <button type="button" className={styles['return-button']} onClick={handleReturn}>
                                        بازگشت
                                    </button>
                                </>
                            )}
                        </form>
                    </div>
                    <div className={styles['overlay-container']}>
                        <div className={styles.overlay}>
                            <div className={`${styles['overlay-panel']} ${styles['overlay-left']}`}>
                                <h1 className={styles['brand-title']}>
                                    <span className={styles['brand-elite']}>Elite</span>
                                    <span className={styles['brand-bite']}>Bite</span>
                                </h1>
                                <p className={styles.description}>اگر حساب کاربری دارید، اینجا وارد شوید</p>
                                <button className={styles['ghost-button']} onClick={handleToggle}>
                                    ورود
                                </button>
                            </div>
                            <div className={`${styles['overlay-panel']} ${styles['overlay-right']}`}>
                                <h1 className={styles['brand-title']}>
                                    <span className={styles['brand-elite']}>Elite</span>
                                    <span className={styles['brand-bite']}>Bite</span>
                                </h1>
                                <p className={styles.description}>اگر هنوز حساب کاربری ندارید، ثبت‌نام کنید</p>
                                <button className={styles['ghost-button']} onClick={handleToggle}>
                                    ثبت‌نام
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Login;