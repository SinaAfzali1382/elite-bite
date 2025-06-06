"use client";
import React from 'react';
import styles from './styles/login.module.css';

const SignInForm: React.FC = () => {
    return (
        <div className={`${styles['form-container']} ${styles['sign-in-container']}`}>
            <form>
                <h1 className={styles.title}>ورود</h1>
                <p>در حال توسعه...</p>
            </form>
        </div>
    );
};

export default SignInForm;