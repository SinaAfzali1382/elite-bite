"use client";
import React, { useState } from "react";

interface FormInput {
  value: string;
  placeholder: string;
  type: string;
  name: string;
  required: boolean;
}

const Login: React.FC = () => {
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    username: "",
    phone: "",
    password: "",
    repeatPassword: "",
    loginPhone: "",
    loginPassword: "",
  });

  const handleToggle = () => {
    setIsChecked(!isChecked);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const renderInput = ({ value, placeholder, type, name, required }: FormInput) => (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={handleInputChange}
      required={required}
      className="w-3/5 h-10 bg-[#D8D8D8] flex justify-center items-center mx-auto my-5 p-3 border-none outline-none rounded-md text-[#0f0c29] placeholder-[#0f0c29]/60"
    />
  );

  return (
    <div className="min-h-screen flex justify-center items-center font-vazir bg-white via-[#302b63] to-[#24243e]">
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Vazirmatn:wght@400;500;700&display=swap');
          .font-vazir {
            font-family: 'Vazirmatn', sans-serif;
          }
          .main {
            width: 350px;
            height: 500px;
            overflow: hidden;
            background: linear-gradient(135deg, #FFFFEA 0%, #D8D8D8 100%);
            border-radius: 10px;
            box-shadow: 5px 20px 50px rgba(0, 0, 0, 0.5);
            position: relative;
          }
          .signup {
            position: relative;
            width: 100%;
            height: 100%;
          }
          .login {
            height: 460px;
            background: #FFFFEA;
            border-radius: 60% / 10%;
            transition: transform 0.8s ease-in-out;
            transform: translateY(-180px);
          }
          .login-checked {
            transform: translateY(-500px);
          }
          .label-signup {
            color: #00CECB;
            font-size: 2.3em;
            display: flex;
            justify-content: center;
            margin: 50px;
            font-weight: bold;
            cursor: pointer;
            transition: transform 0.5s ease-in-out;
          }
          .label-login {
            color: #00CECB;
            font-size: 2.3em;
            display: flex;
            justify-content: center;
            margin: 50px;
            font-weight: bold;
            cursor: pointer;
            transition: transform 0.5s ease-in-out;
            transform: scale(0.6);
          }
          .label-signup-checked {
            transform: scale(0.6);
          }
          .label-login-checked {
            transform: scale(1);
          }
          button {
            background: #00CECB;
            transition: background 0.2s ease;
          }
          button:hover {
            background: #FF5E5B;
          }
        `}
      </style>
      <div className="main">
        <input
          type="checkbox"
          id="chk"
          checked={isChecked}
          onChange={handleToggle}
          className="hidden"
          aria-hidden="true"
        />
        <div className="signup">
          <label
            htmlFor="chk"
            className={`label-signup ${isChecked ? "label-signup-checked" : ""}`}
            aria-hidden="true"
          >
            ثبت نام
          </label>
          {renderInput({
            value: formData.username,
            placeholder: "نام کاربری",
            type: "text",
            name: "username",
            required: true,
          })}
          {renderInput({
            value: formData.phone,
            placeholder: "شماره تلفن",
            type: "tel",
            name: "phone",
            required: true,
          })}
          {renderInput({
            value: formData.password,
            placeholder: "رمز عبور",
            type: "password",
            name: "password",
            required: true,
          })}
          {renderInput({
            value: formData.repeatPassword,
            placeholder: "تکرار رمز عبور",
            type: "password",
            name: "repeatPassword",
            required: true,
          })}
          <button className="w-3/5 h-10 mx-auto my-5 flex justify-center items-center text-[#FFFFEA] font-bold text-base border-none outline-none rounded-md">
            ثبت نام
          </button>
        </div>
        <div className={`login ${isChecked ? "login-checked" : ""}`}>
          <label
            htmlFor="chk"
            className={`label-login ${isChecked ? "label-login-checked" : ""}`}
            aria-hidden="true"
          >
            ورود
          </label>
          {renderInput({
            value: formData.loginPhone,
            placeholder: "شماره تلفن",
            type: "tel",
            name: "loginPhone",
            required: true,
          })}
          {renderInput({
            value: formData.loginPassword,
            placeholder: "رمز عبور",
            type: "password",
            name: "loginPassword",
            required: true,
          })}
          <button className="w-3/5 h-10 mx-auto my-5 flex justify-center items-center text-[#FFFFEA] font-bold text-base border-none outline-none rounded-md">
            ورود
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;