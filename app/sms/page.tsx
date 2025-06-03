"use client";
import React, { useRef, useEffect, useState } from 'react';
import styles from './OneTimeCodeInput.module.css';

const OneTimeCodeInput: React.FC = () => {
    const inputRef = useRef<HTMLInputElement | null>(null);
    const [inputValue, setInputValue] = useState<string>('');

    // Handle input formatting for digits and dashes
    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        const key = event.key;

        if (key >= '0' && key <= '9' && inputValue.length < 17) {
            setInputValue((prev) => {
                if (prev.length > 0) {
                    return prev + ' - ' + key;
                }
                return key;
            });
        } else if (key === 'Backspace') {
            setInputValue((prev) => prev.slice(0, Math.max(0, prev.length - 4)));
        } else if (key !== 'Backspace') {
            event.preventDefault();
        }
    };

    // Handle focus effect
    const handleFocus = () => {
        if (inputRef.current) {
            inputRef.current.style.boxShadow = '0 2px #00CECB'; // Updated to match previous teal color
        }
    };

    // Handle blur effect
    const handleBlur = () => {
        if (inputRef.current) {
            inputRef.current.style.boxShadow = '';
        }
    };

    // Update input value when state changes
    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.value = inputValue;
        }
    }, [inputValue]);

    return (
        <div className={styles.container}>
            <img
                src="https://www.digikala.com/statics/img/svg/logo.svg"
                alt="Digikala Logo"
                className={styles.logo}
            />
            <h3 className={styles.enter}>کد تایید را وارد کنید</h3>
            <p>کد تایید برای شماره xxxxxxxxxxx پیامک شد</p>
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
            <span className={styles.error}></span>
            <button type="submit" className={styles.button}>
                ورود
            </button>
            <p className={styles.des}>
                با ورود به دیجی‌کالا،{' '}
                <a href="#" className={styles.link}>
                    شرایط دیجی‌کالا
                </a>{' '}
                و{' '}
                <a href="#" className={styles.link}>
                    قوانین حریم خصوصی
                </a>{' '}
                را می‌پذیرم
            </p>
        </div>
    );
};

export default OneTimeCodeInput;