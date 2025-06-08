"use client";
import React, { useRef } from 'react';
import styles from '@/components/sms/styles/OneTimeCodeInput.module.css';

interface CodeInputProps {
    inputValue: string;
    setInputValue: React.Dispatch<React.SetStateAction<string>>;
}

const CodeInput: React.FC<CodeInputProps> = ({ inputValue, setInputValue }) => {
    const inputRef = useRef<HTMLInputElement | null>(null);

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

    return (
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
    );
};

export default CodeInput;