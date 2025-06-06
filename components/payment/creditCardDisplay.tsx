"use client";
import React from 'react';
import { BankInfo } from './banks';
import "@/components/payment/styles/pay.css";

interface CreditCardDisplayProps {
    bankInfo: BankInfo;
    cardNumberDisplay: string;
    expirationMonth: string;
    expirationYear: string;
    ccv: string;
    isCcvFocused: boolean;
}

const CreditCardDisplay: React.FC<CreditCardDisplayProps> = ({
                                                                 bankInfo,
                                                                 cardNumberDisplay,
                                                                 expirationMonth,
                                                                 expirationYear,
                                                                 ccv,
                                                                 isCcvFocused,
                                                             }) => {
    return (
        <div className={`credit-card-box ${isCcvFocused ? "hover" : ""}`}>
            <div className="flip">
                <div className={`front bg-gradient-to-r ${bankInfo.color}`}>
                    <div className="bank-logo" dangerouslySetInnerHTML={{ __html: bankInfo.logo }} />
                    <div className="bank-name">{bankInfo.name || "بانک"}</div>
                    <div className="number">{cardNumberDisplay || "**** **** **** ****"}</div>
                    <div className="card-expiration-date">
                        <label>تاریخ انقضا</label>
                        <div>{expirationMonth && expirationYear ? `${expirationMonth}/${expirationYear.slice(2)}` : "MM/YY"}</div>
                    </div>
                </div>
                <div className={`back bg-gradient-to-r ${bankInfo.color}`}>
                    <div className="strip"></div>
                    <div className="bank-name">{bankInfo.name || "بانک"}</div>
                    <div className="ccv">
                        <label>کد امنیتی</label>
                        <div>{ccv || ""}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreditCardDisplay;