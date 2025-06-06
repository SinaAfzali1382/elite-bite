"use client";
import React from 'react';
import "@/components/payment/styles/pay.css";

interface ExpirationInputProps {
    expirationMonth: string;
    expirationYear: string;
    setExpirationMonth: (value: string) => void;
    setExpirationYear: (value: string) => void;
}

const ExpirationInput: React.FC<ExpirationInputProps> = ({
                                                             expirationMonth,
                                                             expirationYear,
                                                             setExpirationMonth,
                                                             setExpirationYear,
                                                         }) => {
    return (
        <fieldset className="fieldset-expiration">
            <label htmlFor="card-expiration-month">تاریخ انقضا</label>
            <div className="select">
                <select
                    id="card-expiration-month"
                    value={expirationMonth}
                    onChange={(e) => setExpirationMonth(e.target.value)}
                >
                    <option value=""></option>
                    {["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"].map((month) => (
                        <option key={month} value={month}>{month}</option>
                    ))}
                </select>
            </div>
            <div className="select">
                <select
                    id="card-expiration-year"
                    value={expirationYear}
                    onChange={(e) => setExpirationYear(e.target.value)}
                >
                    <option value=""></option>
                    {["2025", "2026", "2027", "2028", "2029", "2030"].map((year) => (
                        <option key={year} value={year}>{year}</option>
                    ))}
                </select>
            </div>
        </fieldset>
    );
};

export default ExpirationInput;