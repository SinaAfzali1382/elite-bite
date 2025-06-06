"use client";
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import CodeInput from '@/components/sms/codeInput';
import VerifyButton from '@/components/sms/verifyButton';
import API from '@/components/frontAPI/api';
import styles from '@/components/sms/styles/OneTimeCodeInput.module.css';

const OneTimeCodeInput: React.FC = () => {
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
            <CodeInput inputValue={inputValue} setInputValue={setInputValue} />
            <span className={styles.error}>{errorMessage}</span>
            <VerifyButton handleVerify={handleVerify} />
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