"use client";
import React, { useState } from "react";
import { BankInfo, bankPrefixMap } from "@/components/payment/banks";
import CreditCardDisplay from "@/components/payment/creditCardDisplay";
import CardNumberInput from "@/components/payment/cardNumberInput";
import ExpirationInput from "@/components/payment/expirationInput";
import CcvInput from "@/components/payment/ccvInput";
import "@/components/payment/styles/pay.css";

const Pay: React.FC = () => {
  const [cardNumbers, setCardNumbers] = useState<string[]>(["", "", "", ""]);
  const [expirationMonth, setExpirationMonth] = useState<string>("");
  const [expirationYear, setExpirationYear] = useState<string>("");
  const [ccv, setCcv] = useState<string>("");
  const [isCcvFocused, setIsCcvFocused] = useState<boolean>(false);
  const [bankInfo, setBankInfo] = useState<BankInfo>({
    name: "",
    color: "from-[#FFED66] to-[#00CECB]",
    logo: `<svg width="60" height="45" viewBox="0 0 60 45" xmlns="http://www.w3.org/2000/svg"><text x="10" y="30" font-size="14" fill="#0f0c29">بانک</text></svg>`,
  });

  const handleCardNumberChange = (index: number, value: string) => {
    if (/^\d{0,4}$/.test(value)) {
      const newCardNumbers = [...cardNumbers];
      newCardNumbers[index] = value;
      setCardNumbers(newCardNumbers);

      const firstSixDigits = newCardNumbers.join("").slice(0, 6);
      if (firstSixDigits.length === 6) {
        let detectedBank: BankInfo | undefined;
        for (const prefix of [firstSixDigits, firstSixDigits.slice(0, 4)]) {
          detectedBank = bankPrefixMap[prefix];
          if (detectedBank) break;
        }
        setBankInfo(
            detectedBank || {
              name: "",
              color: "from-[#FFED66] to-[#00CECB]",
              logo: `<svg width="60" height="45" viewBox="0 0 60 45" xmlns="http://www.w3.org/2000/svg"><text x="10" y="30" font-size="14" fill="#0f0c29">بانک</text></svg>`,
            }
        );
      } else {
        setBankInfo({
          name: "",
          color: "from-[#FFED66] to-[#00CECB]",
          logo: `<svg width="60" height="45" viewBox="0 0 60 45" xmlns="http://www.w3.org/2000/svg"><text x="10" y="30" font-size="14" fill="#0f0c29">بانک</text></svg>`,
        });
      }

      if (value.length === 4 && index < 3) {
        document.getElementById(`card-number-${index + 1}`)?.focus();
      }
    }
  };

  const cardNumberDisplay = cardNumbers.join(" ").trim();

  return (
      <div className="min-h-screen flex justify-center items-center font-vazir bg-gradient-to-b from-[#0f0c29] via-[#302b63] to-[#24243e]">
        <div className="checkout">
          <CreditCardDisplay
              bankInfo={bankInfo}
              cardNumberDisplay={cardNumberDisplay}
              expirationMonth={expirationMonth}
              expirationYear={expirationYear}
              ccv={ccv}
              isCcvFocused={isCcvFocused}
          />
          <form className="form" autoComplete="off" noValidate>
            <CardNumberInput cardNumbers={cardNumbers} handleCardNumberChange={handleCardNumberChange} />
            <ExpirationInput
                expirationMonth={expirationMonth}
                expirationYear={expirationYear}
                setExpirationMonth={setExpirationMonth}
                setExpirationYear={setExpirationYear}
            />
            <CcvInput ccv={ccv} setCcv={setCcv} setIsCcvFocused={setIsCcvFocused} />
            <button className="btn" type="submit">پرداخت</button>
          </form>
        </div>
      </div>
  );
};

export default Pay;