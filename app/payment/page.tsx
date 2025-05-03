"use client";
import React, { useState } from "react";

const Pay: React.FC = () => {
  const [cardNumbers, setCardNumbers] = useState(["", "", "", ""]);
  const [cardHolder, setCardHolder] = useState("");
  const [expirationMonth, setExpirationMonth] = useState("");
  const [expirationYear, setExpirationYear] = useState("");
  const [ccv, setCcv] = useState("");
  const [isCcvFocused, setIsCcvFocused] = useState(false);

  const handleCardNumberChange = (index: number, value: string) => {
    if (/^\d{0,4}$/.test(value)) {
      const newCardNumbers = [...cardNumbers];
      newCardNumbers[index] = value;
      setCardNumbers(newCardNumbers);
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
            background: linear-gradient(135deg, #FFED66, #00CECB);
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
          .logo {
            position: absolute;
            top: 9px;
            right: 20px;
            width: 60px;
          }
          .back .logo {
            top: 185px;
          }
          .chip {
            position: absolute;
            width: 60px;
            height: 45px;
            top: 20px;
            left: 20px;
            background: linear-gradient(135deg, #D8D8D8 0%, #FFFFEA 100%);
            border-radius: 8px;
          }
          .chip::before {
            content: '';
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            margin: auto;
            border: 4px solid rgba(0, 0, 0, 0.1);
            width: 80%;
            height: 70%;
            border-radius: 5px;
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
            <div className="front">
              <div className="chip"></div>
              <div className="logo">
                <svg
                  version="1.1"
                  id="visa"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  width="47.834px"
                  height="47.834px"
                  viewBox="0 0 47.834 47.834"
                  style={{}}
                >
                  <g>
                    <g>
                      <path
                        d="M44.688,16.814h-3.004c-0.933,0-1.627,0.254-2.037,1.184l-5.773,13.074h4.083c0,0,0.666-1.758,0.817-2.143
                         c0.447,0,4.414,0.006,4.979,0.006c0.116,0.498,0.474,2.137,0.474,2.137h3.607L44.688,16.814z M39.893,26.01
                         c0.32-0.819,1.549-3.987,1.549-3.987c-0.021,0.039,0.317-0.825,0.518-1.362l0.262,1.23c0,0,0.745,3.406,0.901,4.119H39.893z
                         M34.146,26.404c-0.028,2.963-2.684,4.875-6.771,4.875c-1.743-0.018-3.422-0.361-4.332-0.76l0.547-3.193l0.501,0.228
                         c1.277,0.532,2.104,0.747,3.661,0.747c1.117,0,2.313-0.438,2.325-1.393c0.007-0.625-0.501-1.07-2.016-1.77
                         c-1.476-0.683-3.43-1.827-3.405-3.876c0.021-2.773,2.729-4.708,6.571-4.708c1.506,0,2.713,0.31,3.483,0.599l-0.526,3.092
                         l-0.351-0.165c-0.716-0.288-1.638-0.566-2.91-0.546c-1.522,0-2.228,0.634-2.228,1.227c-0.008,0.668,0.824,1.108,2.184,1.77
                         C33.126,23.546,34.163,24.783,34.146,26.404z M0,16.962l0.05-0.286h6.028c0.813,0.031,1.468,0.29,1.694,1.159l1.311,6.304
                         C7.795,20.842,4.691,18.099,0,16.962z M17.581,16.812l-6.123,14.239l-4.114,0.007L3.862,19.161
                         c2.503,1.602,4.635,4.144,5.386,5.914l0.406,1.469l3.808-9.729L17.581,16.812L17.581,16.812z M19.153,16.8h3.89L20.61,31.066
                         h-3.888L19.153,16.8z"
                        fill="#0f0c29"
                      />
                    </g>
                  </g>
                </svg>
              </div>
              <div className="number">{cardNumberDisplay || "**** **** **** ****"}</div>
              <div className="card-holder">
                <label>نام دارنده کارت</label>
                <div>{cardHolder || "نام کامل"}</div>
              </div>
              <div className="card-expiration-date">
                <label>تاریخ انقضا</label>
                <div>{expirationMonth && expirationYear ? `${expirationMonth}/${expirationYear.slice(2)}` : "MM/YY"}</div>
              </div>
            </div>
            <div className="back">
              <div className="strip"></div>
              <div className="logo">
                <svg
                  version="1.1"
                  id="visa"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  width="47.834px"
                  height="47.834px"
                  viewBox="0 0 47.834 47.834"
                  style={{}}
                >
                  <g>
                    <g>
                      <path
                        d="M44.688,16.814h-3.004c-0.933,0-1.627,0.254-2.037,1.184l-5.773,13.074h4.083c0,0,0.666-1.758,0.817-2.143
                         c0.447,0,4.414,0.006,4.979,0.006c0.116,0.498,0.474,2.137,0.474,2.137h3.607L44.688,16.814z M39.893,26.01
                         c0.32-0.819,1.549-3.987,1.549-3.987c-0.021,0.039,0.317-0.825,0.518-1.362l0.262,1.23c0,0,0.745,3.406,0.901,4.119H39.893z
                         M34.146,26.404c-0.028,2.963-2.684,4.875-6.771,4.875c-1.743-0.018-3.422-0.361-4.332-0.76l0.547-3.193l0.501,0.228
                         c1.277,0.532,2.104,0.747,3.661,0.747c1.117,0,2.313-0.438,2.325-1.393c0.007-0.625-0.501-1.07-2.016-1.77
                         c-1.476-0.683-3.43-1.827-3.405-3.876c0.021-2.773,2.729-4.708,6.571-4.708c1.506,0,2.713,0.31,3.483,0.599l-0.526,3.092
                         l-0.351-0.165c-0.716-0.288-1.638-0.566-2.91-0.546c-1.522,0-2.228,0.634-2.228,1.227c-0.008,0.668,0.824,1.108,2.184,1.77
                         C33.126,23.546,34.163,24.783,34.146,26.404z M0,16.962l0.05-0.286h6.028c0.813,0.031,1.468,0.29,1.694,1.159l1.311,6.304
                         C7.795,20.842,4.691,18.099,0,16.962z M17.581,16.812l-6.123,14.239l-4.114,0.007L3.862,19.161
                         c2.503,1.602,4.635,4.144,5.386,5.914l0.406,1.469l3.808-9.729L17.581,16.812L17.581,16.812z M19.153,16.8h3.89L20.61,31.066
                         h-3.888L19.153,16.8z"
                        fill="#0f0c29"
                      />
                    </g>
                  </g>
                </svg>
              </div>
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
          <fieldset>
            <label htmlFor="card-holder">نام دارنده کارت</label>
            <input
              type="text"
              id="card-holder"
              value={cardHolder}
              onChange={(e) => setCardHolder(e.target.value)}
            />
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
            <label htmlFor="card-ccv">کد امنیتی</label>
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