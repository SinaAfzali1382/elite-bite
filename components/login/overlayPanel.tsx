"use client";
import React from 'react';
import styles from './styles/login.module.css';

interface OverlayPanelProps {
    handleToggle: () => void;
}

const OverlayPanel: React.FC<OverlayPanelProps> = ({ handleToggle }) => {
    return (
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
    );
};

export default OverlayPanel;