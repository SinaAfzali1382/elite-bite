"use client";
import React from 'react';
import styles from './styles/login.module.css';

interface SignUpFormProps {
    userType: 'customer' | 'restaurant' | null;
    firstName: string;
    lastName: string;
    email: string;
    errorMessage: string;
    setUserType: (type: 'customer' | 'restaurant' | null) => void;
    setFirstName: React.Dispatch<React.SetStateAction<string>>;
    setLastName: React.Dispatch<React.SetStateAction<string>>;
    setEmail: React.Dispatch<React.SetStateAction<string>>;
    handleSignUp: () => void;
    handleReturn: () => void;
}

const SignUpForm: React.FC<SignUpFormProps> = ({
                                                   userType,
                                                   firstName,
                                                   lastName,
                                                   email,
                                                   errorMessage,
                                                   setUserType,
                                                   setFirstName,
                                                   setLastName,
                                                   setEmail,
                                                   handleSignUp,
                                                   handleReturn,
                                               }) => {
    const handleInputChange = (setter: React.Dispatch<React.SetStateAction<string>>) => (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setter(event.target.value || '');
    };

    return (
        <div className={styles['form-container']}>
            {userType === null ? (
                <div className={styles['user-type-selection']}>
                    <h2>نوع حساب کاربری</h2>
                    <button
                        className={styles.button}
                        onClick={() => setUserType('customer')}
                    >
                        مشتری
                    </button>
                    <button
                        className={styles.button}
                        onClick={() => setUserType('restaurant')}
                    >
                        رستوران
                    </button>
                </div>
            ) : (
                <form onSubmit={(e) => { e.preventDefault(); handleSignUp(); }}>
                    <h2>ثبت‌نام {userType === 'customer' ? 'مشتری' : 'رستوران'}</h2>
                    <input
                        type="text"
                        placeholder="نام"
                        value={firstName}
                        onChange={handleInputChange(setFirstName)}
                        className={styles.input}
                    />
                    <input
                        type="text"
                        placeholder="نام خانوادگی"
                        value={lastName}
                        onChange={handleInputChange(setLastName)}
                        className={styles.input}
                    />
                    <input
                        type="email"
                        placeholder="ایمیل"
                        value={email}
                        onChange={handleInputChange(setEmail)}
                        className={styles.input}
                    />
                    <span className={styles.error}>{errorMessage}</span>
                    <button type="submit" className={styles.button}>ثبت‌نام</button>
                    <button
                        type="button"
                        className={styles['back-button']}
                        onClick={handleReturn}
                    >
                        بازگشت
                    </button>
                </form>
            )}
        </div>
    );
};

export default SignUpForm;