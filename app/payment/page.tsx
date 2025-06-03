"use client";
import React, { useState } from "react";

// Define bank prefix to bank name, color, and logo mapping
interface BankInfo {
  name: string;
  color: string; // Tailwind CSS gradient colors
  logo: string; // SVG logo as string
}

const bankPrefixMap: { [key: string]: BankInfo } = {
  "627412": { name: "اقتصاد نوین Halt", color: "from-blue-500 to-blue-300", logo: `<svg width="60" height="45" viewBox="0 0 60 45" xmlns="http://www.w3.org/2000/svg"><text x="10" y="30" font-size="14" fill="#0f0c29">اقتصاد نوین</text></svg>` },
  "207177": { name: "توسعه صادرات ایران", color: "from-green-500 to-green-300", logo: `<svg width="60" height="45" viewBox="0 0 60 45" xmlns="http://www.w3.org/2000/svg"><text x="10" y="30" font-size="14" fill="#0f0c29">توسعه صادرات</text></svg>` },
  "627381": { name: "انصار", color: "from-red-500 to-red-300", logo: `<svg width="60" height="45" viewBox="0 0 60 45" xmlns="http://www.w3.org/2000/svg"><text x="10" y="30" font-size="14" fill="#0f0c29">انصار</text></svg>` },
  "502229": { name: "پاسارگاد", color: "from-purple-500 to-purple-300", logo: `<svg width="60" height="45" viewBox="0 0 60 45" xmlns="http://www.w3.org/2000/svg"><text x="10" y="30" font-size="14" fill="#0f0c29">پاسارگاد</text></svg>` },
  "505785": { name: "ایران زمین", color: "from-yellow-500 to-yellow-300", logo: `<svg width="60" height="45" viewBox="0 0 60 45" xmlns="http://www.w3.org/2000/svg"><text x="10" y="30" font-size="14" fill="#0f0c29">ایران زمین</text></svg>` },
  "502806": { name: "شهر", color: "from-teal-500 to-teal-300", logo: `<svg width="60" height="45" viewBox="0 0 60 45" xmlns="http://www.w3.org/2000/svg"><text x="10" y="30" font-size="14" fill="#0f0c29">شهر</text></svg>` },
  "622106": { name: "پارسیان", color: "from-pink-500 to-pink-300", logo: `<svg width="60" height="45" viewBox="0 0 60 45" xmlns="http://www.w3.org/2000/svg"><text x="10" y="30" font-size="14" fill="#0f0c29">پارسیان</text></svg>` },
  "502908": { name: "توسعه تعاون", color: "from-indigo-500 to-indigo-300", logo: `<svg width="60" height="45" viewBox="0 0 60 45" xmlns="http://www.w3.org/2000/svg"><text x="10" y="30" font-size="14" fill="#0f0c29">توسعه تعاون</text></svg>` },
  "639194": { name: "پارسیان", color: "from-pink-500 to-pink-300", logo: `<svg width="60" height="45" viewBox="0 0 60 45" xmlns="http://www.w3.org/2000/svg"><text x="10" y="30" font-size="14" fill="#0f0c29">پارسیان</text></svg>` },
  "502910": { name: "کارآفرین", color: "from-orange-500 to-orange-300", logo: `<svg width="60" height="45" viewBox="0 0 60 45" xmlns="http://www.w3.org/2000/svg"><text x="10" y="30" font-size="14" fill="#0f0c29">کارآفرین</text></svg>` },
  "627884": { name: "پارسیان", color: "from-pink-500 to-pink-300", logo: `<svg width="60" height="45" viewBox="0 0 60 45" xmlns="http://www.w3.org/2000/svg"><text x="10" y="30" font-size="14" fill="#0f0c29">پارسیان</text></svg>` },
  "502938": { name: "دی", color: "from-gray-500 to-gray-300", logo: `<svg width="60" height="45" viewBox="0 0 60 45" xmlns="http://www.w3.org/2000/svg"><text x="10" y="30" font-size="14" fill="#0f0c29">دی</text></svg>` },
  "639347": { name: "پاسارگاد", color: "from-purple-500 to-purple-300", logo: `<svg width="60" height="45" viewBox="0 0 60 45" xmlns="http://www.w3.org/2000/svg"><text x="10" y="30" font-size="14" fill="#0f0c29">پاسارگاد</text></svg>` },
  "505416": { name: "گردشگری", color: "from-cyan-500 to-cyan-300", logo: `<svg width="60" height="45" viewBox="0 0 60 45" xmlns="http://www.w3.org/2000/svg"><text x="10" y="30" font-size="14" fill="#0f0c29">گردشگری</text></svg>` },
  "505801": { name: "موسسه اعتباری کوثر (سپه)", color: "from-blue-600 to-blue-400", logo: `<svg width="60" height="45" viewBox="0 0 60 45" xmlns="http://www.w3.org/2000/svg"><text x="10" y="30" font-size="14" fill="#0f0c29">کوثر</text></svg>` },
  "589210": { name: "سپه", color: "from-green-600 to-green-400", logo: `<svg width="60" height="45" viewBox="0 0 60 45" xmlns="http://www.w3.org/2000/svg"><text x="10" y="30" font-size="14" fill="#0f0c29">سپه</text></svg>` },
  "589463": { name: "رفاه کارگران", color: "from-red-600 to-red-400", logo: `<svg width="60" height="45" viewBox="0 0 60 45" xmlns="http://www.w3.org/2000/svg"><text x="10" y="30" font-size="14" fill="#0f0c29">رفاه</text></svg>` },
  "603769": { name: "صادرات ایران", color: "from-purple-600 to-purple-400", logo: `<svg width="60" height="45" viewBox="0 0 60 45" xmlns="http://www.w3.org/2000/svg"><text x="10" y="30" font-size="14" fill="#0f0c29">صادرات</text></svg>` },
  "627648": { name: "توسعه صادرات ایران", color: "from-green-500 to-green-300", logo: `<svg width="60" height="45" viewBox="0 0 60 45" xmlns="http://www.w3.org/2000/svg"><text x="10" y="30" font-size="14" fill="#0f0c29">توسعه صادرات</text></svg>` },
  "603770": { name: "کشاورزی", color: "from-yellow-600 to-yellow-400", logo: `<svg width="60" height="45" viewBox="0 0 60 45" xmlns="http://www.w3.org/2000/svg"><text x="10" y="30" font-size="14" fill="#0f0c29">کشاورزی</text></svg>` },
  "636949": { name: "حکمت ایرانیان (سپه)", color: "from-blue-700 to-blue-500", logo: `<svg width="60" height="45" viewBox="0 0 60 45" xmlns="http://www.w3.org/2000/svg"><text x="10" y="30" font-size="14" fill="#0f0c29">حکمت</text></svg>` },
  "603799": { name: "ملی ایران", color: "from-teal-600 to-teal-400", logo: `<svg width="60" height="45" viewBox="0 0 60 45" xmlns="http://www.w3.org/2000/svg"><text x="10" y="30" font-size="14" fill="#0f0c29">ملی</text></svg>` },
  "606373": { name: "قرض الحسنه مهر ایران", color: "from-pink-600 to-pink-400", logo: `<svg width="60" height="45" viewBox="0 0 60 45" xmlns="http://www.w3.org/2000/svg"><text x="10" y="30" font-size="14" fill="#0f0c29">مهر ایران</text></svg>` },
  "610433": { name: "ملت", color: "from-indigo-600 to-indigo-400", logo: `<svg width="60" height="45" viewBox="0 0 60 45" xmlns="http://www.w3.org/2000/svg"><text x="10" y="30" font-size="14" fill="#0f0c29">ملت</text></svg>` },
  "621986": { name: "سامان", color: "from-orange-600 to-orange-400", logo: `<svg width="60" height="45" viewBox="0 0 60 45" xmlns="http://www.w3.org/2000/svg"><text x="10" y="30" font-size="14" fill="#0f0c29">سامان</text></svg>` },
  "639607": { name: "سرمایه", color: "from-gray-600 to-gray-400", logo: `<svg width="60" height="45" viewBox="0 0 60 45" xmlns="http://www.w3.org/2000/svg"><text x="10" y="30" font-size="14" fill="#0f0c29">سرمایه</text></svg>` },
  "627353": { name: "تجارت", color: "from-cyan-600 to-cyan-400", logo: `<svg width="60" height="45" viewBox="0 0 60 45" xmlns="http://www.w3.org/2000/svg"><text x="10" y="30" font-size="14" fill="#0f0c29">تجارت</text></svg>` },
  "639346": { name: "سینا", color: "from-red-700 to-red-500", logo: `<svg width="60" height="45" viewBox="0 0 60 45" xmlns="http://www.w3.org/2000/svg"><text x="10" y="30" font-size="14" fill="#0f0c29">سینا</text></svg>` },
  "627961": { name: "صنعت و معدن", color: "from-purple-700 to-purple-500", logo: `<svg width="60" height="45" viewBox="0 0 60 45" xmlns="http://www.w3.org/2000/svg"><text x="10" y="30" font-size="14" fill="#0f0c29">صنعت و معدن</text></svg>` },
  "627760": { name: "پست ایران", color: "from-yellow-700 to-yellow-500", logo: `<svg width="60" height="45" viewBox="0 0 60 45" xmlns="http://www.w3.org/2000/svg"><text x="10" y="30" font-size="14" fill="#0f0c29">پست ایران</text></svg>` },
  "639599": { name: "قوامین", color: "from-green-700 to-green-500", logo: `<svg width="60" height="45" viewBox="0 0 60 45" xmlns="http://www.w3.org/2000/svg"><text x="10" y="30" font-size="14" fill="#0f0c29">قوامین</text></svg>` },
  "628023": { name: "مسکن", color: "from-blue-800 to-blue-600", logo: `<svg width="60" height="45" viewBox="0 0 60 45" xmlns="http://www.w3.org/2000/svg"><text x="10" y="30" font-size="14" fill="#0f0c29">مسکن</text></svg>` },
  "628157": { name: "موسسه اعتباری توسعه", color: "from-teal-700 to-teal-500", logo: `<svg width="60" height="45" viewBox="0 0 60 45" xmlns="http://www.w3.org/2000/svg"><text x="10" y="30" font-size="14" fill="#0f0c29">توسعه</text></svg>` },
  "636214": { name: "آینده", color: "from-pink-700 to-pink-500", logo: `<svg width="60" height="45" viewBox="0 0 60 45" xmlns="http://www.w3.org/2000/svg"><text x="10" y="30" font-size="14" fill="#0f0c29">آینده</text></svg>` },
  "636795": { name: "مرکزی", color: "from-gray-700 to-gray-500", logo: `<svg width="60" height="45" viewBox="0 0 60 45" xmlns="http://www.w3.org/2000/svg"><text x="10" y="30" font-size="14" fill="#0f0c29">مرکزی</text></svg>` },
  "639370": { name: "مهر اقتصاد (سپه)", color: "from-indigo-700 to-indigo-500", logo: `<svg width="60" height="45" viewBox="0 0 60 45" xmlns="http://www.w3.org/2000/svg"><text x="10" y="30" font-size="14" fill="#0f0c29">مهر اقتصاد</text></svg>` },
  "991975": { name: "ملت", color: "from-indigo-600 to-indigo-400", logo: `<svg width="60" height="45" viewBox="0 0 60 45" xmlns="http://www.w3.org/2000/svg"><text x="10" y="30" font-size="14" fill="#0f0c29">ملت</text></svg>` },
};

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
  }); // Default gradient, empty name, and default logo

  // Handle card number input and detect bank prefix
  const handleCardNumberChange = (index: number, value: string) => {
    if (/^\d{0,4}$/.test(value)) {
      const newCardNumbers = [...cardNumbers];
      newCardNumbers[index] = value;
      setCardNumbers(newCardNumbers);

      // Combine first 6 digits to check bank prefix
      const firstSixDigits = newCardNumbers.join("").slice(0, 6);
      if (firstSixDigits.length === 6) {
        let detectedBank: BankInfo | undefined;
        // Check all possible prefix lengths (4 or 6 digits)
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
        }); // Reset to default
      }

      // Auto-focus next input
      if (value.length === 4 && index < 3) {
        document.getElementById(`card-number-${index + 1}`)?.focus();
      }
    }
  };

  const cardNumberDisplay = cardNumbers.join(" ").trim();

  return (
      <div className="min-h-screen flex justify-center items-center font-vazir bg-gradient-to-b from-[#0f0c29] via-[#302b63] to-[#24243e]">
        <style>
          {`
          @import url('https://fonts.googleapis.com/css2?family=Vazirmatn:wght@400;500;700&display=swap');
          .font-vazir {
            font-family: 'Vazirmatn', sans-serif;
          }
          *,
          *::before,
          *::after {
            box-sizing: border-box;
          }
          .checkout {
            margin: 150px auto 30px;
            position: relative;
            width: 460px;
            background: #FFFFEA;
            border-radius: 15px;
            padding: 160px 45px 30px;
            box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
          }
          .credit-card-box {
            perspective: 1000;
            width: 400px;
            height: 280px;
            position: absolute;
            top: -112px;
            left: 50%;
            transform: translateX(-50%);
          }
          .credit-card-box.hover .flip {
            transform: rotateY(180deg);
          }
          .front,
          .back {
            width: 400px;
            height: 250px;
            border-radius: 15px;
            backface-visibility: hidden;
            position: absolute;
            color: #0f0c29;
            font-family: 'Vazirmatn', sans-serif;
            top: 0;
            left: 0;
            text-shadow: 0 1px 1px rgba(0, 0, 0, 0.3);
            box-shadow: 0 1px 6px rgba(0, 0, 0, 0.3);
          }
          .flip {
            transition: 0.6s;
            transform-style: preserve-3d;
            position: relative;
          }
          .front {
            z-index: 2;
            transform: rotateY(0deg);
          }
          .back {
            transform: rotateY(180deg);
          }
          .bank-name {
            position: absolute;
            top: 9px;
            right: 20px;
            font-size: 18px;
            font-weight: 700;
            color: #0f0c29;
            text-shadow: 0 1px 1px rgba(0, 0, 0, 0.3);
          }
          .back .bank-name {
            top: 185px;
          }
          .bank-logo {
            position: absolute;
            width: 60px;
            height: 45px;
            top: 20px;
            left: 20px;
            border-radius: 8px;
            overflow: hidden;
          }
          .strip {
            background: linear-gradient(135deg, #0f0c29, #302b63);
            position: absolute;
            width: 100%;
            height: 50px;
            top: 30px;
            left: 0;
          }
          .number {
            position: absolute;
            margin: 0 auto;
            top: 103px;
            left: 19px;
            font-size: 38px;
            direction: ltr;
          }
          .credit-card-box label {
            font-size: 10px;
            letter-spacing: 1px;
            text-shadow: none;
            text-transform: uppercase;
            font-weight: normal;
            opacity: 0.5;
            display: block;
            margin-bottom: 3px;
          }
          .card-holder,
          .card-expiration-date {
            position: absolute;
            margin: 0 auto;
            top: 180px;
            left: 19px;
            font-size: 22px;
            text-transform: capitalize;
          }
          .card-expiration-date {
            text-align: right;
            left: auto;
            right: 20px;
          }
          .ccv {
            height: 36px;
            background: #D8D8D8;
            width: 91%;
            border-radius: 5px;
            top: 110px;
            left: 0;
            right: 0;
            position: absolute;
            margin: 0 auto;
            color: #0f0c29;
            text-align: right;
            padding: 10px;
            direction: ltr;
          }
          .ccv label {
            margin: -25px 0 14px;
            color: #0f0c29;
          }
          .form fieldset {
            border: none;
            padding Redacted
            padding: 10px 0;
            position: relative;
            clear: both;
          }
          .form .fieldset-expiration {
            float: right;
            width: 60%;
          }
          .form .fieldset-expiration .select {
            width: 84px;
            margin-left: 12px;
            float: right;
          }
          .form .fieldset-ccv {
            clear: none;
            float: left;
            width: 86px;
          }
          .form label {
            display: block;
            text-transform: uppercase;
            font-size: 11px;
            color: #0f0c29;
            margin-bottom: 5px;
            font-weight: bold;
          }
          .form input,
          .form .select {
            width: 100%;
            height: 38px;
            color: #0f0c29;
            padding: 10px;
            border-radius: 5px;
            font-size: 15px;
            outline: none !important;
            border: 1px solid #0f0c29;
            box-shadow: inset 0 1px 4px rgba(0, 0, 0, 0.2);
          }
          .form .input-cart-number {
            width: 82px;
            display: inline-block;
            margin-left: 8px;
          }
          .form .input-cart-number:last-child {
            margin-left: 0;
          }
          .form .select {
            position: relative;
          }
          .form .select::after {
            content: '';
            border-top: 8px solid #0f0c29;
            border-left: 4px solid transparent;
            border-right: 4px solid transparent;
            position: absolute;
            z-index: 2;
            top: 14px;
            right: 10px;
            pointer-events: none;
          }
          .form .select select {
            appearance: none;
            position: absolute;
            padding: 0;
            border: none;
            width: 100%;
            outline: none !important;
            top: 6px;
            right: 6px;
            background: none;
          }
          .form button {
            width: 100%;
            outline: none !important;
            background: #00CECB;
            text-transform: uppercase;
            font-weight: bold;
            border: none;
            box-shadow: none;
            text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
            margin-top: 90px;
            color: #FFFFEA;
            padding: 15px;
            border-radius: 5px;
            transition: background 0.2s ease;
          }
          .form button:hover {
            background: #FF5E5B;
          }
        `}
        </style>
        <div className="checkout">
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
                  <div>{ccv || "123"}</div>
                </div>
              </div>
            </div>
          </div>
          <form className="form" autoComplete="off" noValidate>
            <fieldset>
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
                      <option key={month} value={month}>
                        {month}
                      </option>
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
                      <option key={year} value={year}>
                        {year}
                      </option>
                  ))}
                </select>
              </div>
            </fieldset>
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
            <button className="btn" type="submit">
              پرداخت
            </button>
          </form>
        </div>
      </div>
  );
};

export default Pay;