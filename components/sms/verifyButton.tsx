"use client";
import React from 'react';
import styles from '@/components/sms/styles/OneTimeCodeInput.module.css';

interface VerifyButtonProps {
    handleVerify: () => void;
}

const VerifyButton: React.FC<VerifyButtonProps> = ({ handleVerify }) => {
    return (
        <button type="submit" className={styles.button} onClick={handleVerify}>
            تأیید
        </button>
    );
};

export default VerifyButton;