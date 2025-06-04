"use client";
import React, { useRef, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './OneTimeCodeInput.module.css';
import API from '@/app/api';

const OneTimeCodeInput: React.FC = () => {
    const inputRef = useRef<HTMLInputElement | null>(null);
    const [inputValue, setInputValue] = useState('');
    const [email, setEmail] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const router = useRouter();

    useEffect(() => {
        const storedEmail = localStorage.getItem('signupEmail');
        if (storedEmail) {
            setEmail(storedEmail);
        }
    }, []);

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        const key = event.key;

        if (key >= '0' && key <= '9' && inputValue.length < 17) {
            setInputValue((prev) => (prev.length > 0 ? prev + ' - ' + key : key));
        } else if (key === 'Backspace') {
            setInputValue((prev) => prev.slice(0, Math.max(0, prev.length - 4)));
        } else if (key !== 'Backspace') {
            event.preventDefault();
        }
    };

    const handleFocus = () => {
        if (inputRef.current) {
            inputRef.current.style.boxShadow = '0 2px #00CECB';
        }
    };

    const handleBlur = () => {
        if (inputRef.current) {
            inputRef.current.style.boxShadow = '';
        }
    };

    const handleVerify = async () => {
        try {
            const code = inputValue.replace(/ - /g, '');
            const res = await API.customerSignupVerify({ email, code });

            if (res.status === 'success') {
                router.push('/dashboard');
            } else {
                setErrorMessage(res.message);
            }
        } catch {
            setErrorMessage('خطایی در تأیید ثبت‌نام رخ داده است.');
        }
    };

    return (
        <div className={styles.container}>
            <img src="https://www.digikala.com/statics/img/svg/logo.svg" alt="Logo" className={styles.logo} />
            <h3 className={styles.enter}>کد تایید را وارد کنید</h3>
            <p>کد تایید برای ایمیل {email} ارسال شده است.</p>
            <input
                id="put"
                type="text"
                ref={inputRef}
                value={inputValue}
                onKeyDown={handleKeyDown}
                onFocus={handleFocus}
                onBlur={handleBlur}
                className={styles.input}
            />
            <span className={styles.error}>{errorMessage}</span>
            <button type="submit" className={styles.button} onClick={handleVerify}>تأیید</button>
            <p className={styles.des}>
                با ورود به سایت،{' '}
                <a href="#" className={styles.link}>شرایط استفاده</a>{' '}
                و{' '}
                <a href="#" className={styles.link}>قوانین حریم خصوصی</a>{' '}
                را می‌پذیرید.
            </p>
        </div>
    );
};

export default OneTimeCodeInput;
