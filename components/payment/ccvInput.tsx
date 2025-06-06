"use client";
import React from 'react';
import "@/components/payment/styles/pay.css";

interface CcvInputProps {
    ccv: string;
    setCcv: (value: string) => void;
    setIsCcvFocused: (value: boolean) => void;
}

const CcvInput: React.FC<CcvInputProps> = ({ ccv, setCcv, setIsCcvFocused }) => {
    return (
        <fieldset className="fieldset-ccv">
            <label htmlFor="card-ccv">cvv2</label>
            <input
                type="text"
                id="card-ccv"
                maxLength={3}
                value={ccv}
                onChange={(e) => setCcv(e.target.value.replace(/\D/g, ""))}
                onFocus={() => setIsCcvFocused(true)}
                onBlur={() => setIsCcvFocused(false)}
                inputMode="numeric"
                pattern="\d*"
            />
        </fieldset>
    );
};

export default CcvInput;