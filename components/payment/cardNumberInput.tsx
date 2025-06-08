"use client";
import React from 'react';
import "@/components/payment/styles/pay.css";

interface CardNumberInputProps {
    cardNumbers: string[];
    handleCardNumberChange: (index: number, value: string) => void;
}

const CardNumberInput: React.FC<CardNumberInputProps> = ({ cardNumbers, handleCardNumberChange }) => {
    return (
        <fieldset className="fieldset">
            <label htmlFor="card-number">شماره کارت</label>
            {cardNumbers.map((num, index) => (
                <input
                    key={index}
                    type="text"
                    id={`card-number-${index}`}
                    className="input-cart-number"
                    maxLength={4}
                    value={num}
                    onChange={(e) => handleCardNumberChange(index, e.target.value)}
                    inputMode="numeric"
                    pattern="\d*"
                />
            ))}
        </fieldset>
    );
};

export default CardNumberInput;