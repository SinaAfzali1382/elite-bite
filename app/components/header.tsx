"use client";
import React from "react";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <div className="header-container font-vazir">
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Vazirmatn:wght@400;500;700;900&display=swap');
          .font-vazir {
            font-family: 'Vazirmatn', sans-serif;
          }
          .header-container {
            position: relative;
            width: 100%;
          }
          .header {
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 16px 32px;
            background: #FFFFFF;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
            position: fixed;
            top: 0;
            width: 100%;
            z-index: 1000;
            border-bottom: 1px solid #E5E7EB;
            box-sizing: border-box;
          }
          .header-content {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;
            max-width: 1200px;
            margin: 0 auto;
          }
          .logo {
            font-size: 28px;
            font-weight: 700;
            white-space: nowrap;
            color: #1F2937;
          }
          .logo span {
            color: #00CECB;
            background: linear-gradient(135deg, #00CECB 0%, #06B6D4 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
          .search-container {
            flex: 1;
            max-width: 600px;
            margin: 0 24px;
            position: relative;
          }
          .search-container input {
            width: 100%;
            height: 48px;
            padding: 12px 48px 12px 16px;
            border-radius: 24px;
            border: 1px solid #E5E7EB;
            background: #F8FAFC;
            font-size: 16px;
            color: #1F2937;
            outline: none;
            text-align: right;
            transition: all 0.3s ease;
          }
          .search-container input:focus {
            border-color: #00CECB;
            box-shadow: 0 0 0 3px rgba(0, 206, 203, 0.1);
          }
          .search-container .search-icon {
            position: absolute;
            left: 16px;
            top: 50%;
            transform: translateY(-50%);
            width: 24px;
            height: 24px;
            fill: #6B7280;
            transition: fill 0.3s ease;
          }
          .search-container input:focus + .search-icon {
            fill: #00CECB;
          }
          .location-button {
            display: flex;
            align-items: center;
            background: linear-gradient(135deg, #00CECB 0%, #06B6D4 100%);
            color: #FFFFFF;
            padding: 10px 20px;
            border-radius: 24px;
            font-size: 16px;
            font-weight: 500;
            text-decoration: none;
            transition: all 0.3s ease;
            white-space: nowrap;
            box-shadow: 0 2px 8px rgba(0, 206, 203, 0.2);
          }
          .location-button:hover {
            background: linear-gradient(135deg, #06B6D4 0%, #00A4A3 100%);
            box-shadow: 0 4px 12px rgba(0, 206, 203, 0.3);
            transform: translateY(-1px);
          }
          .location-button svg {
            width: 20px;
            height: 20px;
            margin-left: 8px;
            fill: #FFFFFF;
          }
          .hero-section {
            position: relative;
            min-height: 950px;
            background: linear-gradient(135deg, #E6FFFA 0%, #B0F4F3 100%);
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 80px 32px;
            overflow: hidden;
            z-index: 1;
          }
          .hero-content {
            display: flex;
            align-items: center;
            justify-content: space-between;
            max-width: 1000px;
            width: 100%;
            position: relative;
          }
          .hero-images {
            position: relative;
            flex: 0 0 400px;
            max-width: 400px;
            height: 350px;
            margin-right: 30px;
          }
          .hero-image {
            position: absolute;
            transition: all 0.3s ease;
            background: #FFFFFF; /* Added white background */
            padding: 10px; /* Added padding to show white background */
            border-radius: 24px; /* Adjusted to account for padding */
          }
          .hero-image img {
            width: 100%;
            height: 100%;
            border-radius: 16px; /* Adjusted to fit within padding */
            object-fit: cover;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
            border: 2px solid #FFFFFF;
          }
          .hero-image:nth-child(1) {
            width: 250px;
            height: 250px;
            top: 0;
            left: 0;
            transform: rotate(-10deg);
          }
          .hero-image:nth-child(1):hover {
            transform: rotate(-10deg) scale(1.05);
            filter: drop-shadow(0 0 25px rgba(0, 206, 203, 0.7));
          }
          .hero-image:nth-child(2) {
            width: 200px;
            height: 200px;
            top: 160px; /* Increased from 130px to add more vertical space */
            left: 180px; /* Increased from 160px to add more horizontal space */
            transform: rotate(5deg);
          }
          .hero-image:nth-child(2):hover {
            transform: rotate(5deg) scale(1.05);
            filter: drop-shadow(0 0 25px rgba(0, 206, 203, 0.7));
          }
          .hero-image:nth-child(3) {
            width: 160px;
            height: 160px;
            top: 20px; /* Decreased from 40px to balance spacing */
            left: 260px; /* Increased from 220px to add more horizontal space */
            transform: rotate(15deg);
          }
          .hero-image:nth-child(3):hover {
            transform: rotate(15deg) scale(1.05);
            filter: drop-shadow(0 0 25px rgba(0, 206, 203, 0.7));
          }
          .hero-text {
            flex: 1;
            max-width: 500px;
            padding: 30px;
            border-radius: 15px;
            border: 1px solid transparent;
            background-clip: padding-box;
            animation: fadeIn 1s ease-out forwards;
          }
          @keyframes fadeIn {
            to { opacity: 1; }
          }
          @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-20px); }
          }
          .hero-text {
            width: 40px;
            height: 40px;
            fill: #00CECB;
            margin-bottom: 200px;
          }
          .hero-text h1 {
            font-size: 48px;
            font-weight: 700;
            color: #333333;
            margin-bottom: 20px;
            line-height: 1.2;
          }
          .hero-text p {
            font-size: 16px;
            font-weight: 400;
            color: #666666;
            margin-bottom: 30px;
            line-height: 1.5;
          }
          .hero-text .cta-container {
            display: flex;
            gap: 20px;
            opacity: 0;
            animation: fadeIn 1s ease-out 0.5s forwards;
          }
          .hero-text .cta-button {
            position: relative;
            padding: 12px 24px;
            font-size: 14px;
            font-weight: 700;
            text-transform: uppercase;
            text-decoration: none;
            border-radius: 5px;
            transition: all 0.3s ease;
          }
          .hero-text .cta-button::after {
            content: '';
            position: absolute;
            width: 0;
            height: 2px;
            bottom: 0;
            left: 0;
            background: #333333;
            transition: width 0.3s ease;
          }
          .hero-text .cta-button:hover::after {
            width: 100%;
          }
          .hero-text .cta-button.primary {
            background: #00CECB;
            color: #FFFFFF;
          }
          .hero-text .cta-button.primary:hover {
            background: #06B6D4;
          }
          .hero-text .cta-button.secondary {
            background: transparent;
            color: #333333;
            border: 2px solid #00CECB;
          }
          .hero-text .cta-button.secondary:hover {
            background: #00CECB;
            color: #FFFFFF;
          }
          .hero-text .cta-button.secondary::after {
            background: #00CECB;
          }

          /* Responsive Styles */
          @media (max-width: 1200px) {
            .header {
              padding: 14px 24px;
            }
            .header-content {
              max-width: 95%;
            }
            .search-container {
              max-width: 500px;
              margin: 0 20px;
            }
            .hero-section {
              padding: 70px 24px;
              min-height: 650px;
            }
            .hero-content {
              max-width: 900px;
            }
            .hero-images {
              flex: 0 0 350px;
              max-width: 350px;
              height: 300px;
              margin-right: 25px;
            }
            .hero-image:nth-child(1) {
              width: 220px;
              height: 220px;
            }
            .hero-image:nth-child(2) {
              width: 175px;
              height: 175px;
              top: 140px; /* Adjusted from 110px */
              left: 160px; /* Adjusted from 140px */
            }
            .hero-image:nth-child(3) {
              width: 140px;
              height: 140px;
              top: 15px; /* Adjusted from 35px */
              left: 230px; /* Adjusted from 190px */
            }
            .hero-text {
              padding: 25px;
              max-width: 450px;
            }
            .hero-text h1 {
              font-size: 42px;
            }
            .hero-text p {
              font-size: 15px;
            }
          }

          @media (max-width: 1024px) {
            .header {
              padding: 12px 20px;
            }
            .header-content {
              max-width: 90%;
            }
            .logo {
              font-size: 24px;
            }
            .search-container input {
              height: 44px;
              font-size: 15px;
            }
            .location-button {
              padding: 8px 16px;
              font-size: 14px;
            }
            .location-button svg {
              width: 18px;
              height: 18px;
            }
            .search-container .search-icon {
              width: 22px;
              height: 22px;
            }
            .hero-section {
              padding: 60px 20px;
              min-height: 600px;
            }
            .hero-content {
              max-width: 800px;
            }
            .hero-images {
              flex: 0 0 300px;
              max-width: 300px;
              height: 250px;
              margin-right: 20px;
            }
            .hero-image:nth-child(1) {
              width: 190px;
              height: 190px;
            }
            .hero-image:nth-child(2) {
              width: 150px;
              height: 150px;
              top: 120px; /* Adjusted from 90px */
              left: 140px; /* Adjusted from 120px */
            }
            .hero-image:nth-child(3) {
              width: 120px;
              height: 120px;
              top: 10px; /* Adjusted from 30px */
              left: 200px; /* Adjusted from 160px */
            }
            .hero-text {
              padding: 20px;
              max-width: 400px;
            }
            .hero-text h1 {
              font-size: 36px;
            }
            .hero-text p {
              font-size: 14px;
              margin-bottom: 25px;
            }
            .hero-text .cta-button {
              padding: 10px 20px;
              font-size: 13px;
            }
            .hero-text {
              width: 35px;
              height: 35px;
            }
          }

          @media (max-width: 768px) {
            .header {
              padding: 10px 16px;
            }
            .header-content {
              flex-direction: column;
              align-items: stretch;
              max-width: 95%;
              gap: 12px;
            }
            .logo {
              font-size: 22px;
              text-align: center;
              margin-bottom: 12px;
            }
            .search-container {
              margin: 0;
              max-width: 100%;
            }
            .search-container input {
              height: 40px;
              font-size: 14px;
            }
            .location-button {
              padding: 8px 14px;
              font-size: 14px;
              justify-content: center;
            }
            .location-button svg {
              width: 16px;
              height: 16px;
            }
            .search-container .search-icon {
              width: 20px;
              height: 20px;
            }
            .hero-section {
              flex-direction: column;
              align-items: center;
              padding: 50px 16px;
              text-align: center;
              min-height: 800px;
            }
            .hero-content {
              flex-direction: column;
              max-width: 600px;
            }
            .hero-images {
              flex: 0 0 300px;
              max-width: 300px;
              height: 250px;
              margin-right: 0;
              margin-bottom: 30px;
            }
            .hero-image:nth-child(1) {
              width: 190px;
              height: 190px;
            }
            .hero-image:nth-child(2) {
              width: 150px;
              height: 150px;
              top: 120px;
              left: 140px;
            }
            .hero-image:nth-child(3) {
              width: 120px;
              height: 120px;
              top: 10px;
              left: 200px;
            }
            .hero-text {
              max-width: 100%;
              padding: 20px;
              backdrop-filter: blur(6px);
            }
            .hero-text h1 {
              font-size: 30px;
            }
            .hero-text p {
              font-size: 14px;
              margin-bottom: 20px;
            }
            .hero-text .cta-container {
              flex-direction: column;
              gap: 12px;
            }
            .hero-text .cta-button {
              padding: 10px 18px;
              font-size: 12px;
            }
            .hero-text {
              width: 30px;
              height: 30px;
            }
          }

          @media (max-width: 480px) {
            .header {
              padding: 8px 12px;
            }
            .header-content {
              max-width: 98%;
            }
            .logo {
              font-size: 20px;
            }
            .search-container input {
              height: 36px;
              font-size: 13px;
            }
            .location-button {
              padding: 6px 12px;
              font-size: 12px;
            }
            .location-button svg {
              width: 14px;
              height: 14px;
            }
            .search-container .search-icon {
              width: 18px;
              height: 18px;
            }
            .hero-section {
              padding: 40px 12px;
              min-height: 700px;
            }
            .hero-content {
              max-width: 400px;
            }
            .hero-images {
              flex: 0 0 250px;
              max-width: 250px;
              height: 200px;
              margin-bottom: 20px;
            }
            .hero-image:nth-child(1) {
              width: 160px;
              height: 160px;
            }
            .hero-image:nth-child(2) {
              width: 125px;
              height: 125px;
              top: 100px; /* Adjusted from 75px */
              left: 120px; /* Adjusted from 100px */
            }
            .hero-image:nth-child(3) {
              width: 100px;
              height: 100px;
              top: 5px; /* Adjusted from 25px */
              left: 160px; /* Adjusted from 130px */
            }
            .hero-text {
              padding: 15px;
            }
            .hero-text h1 {
              font-size: 26px;
            }
            .hero-text p {
              font-size: 13px;
              margin-bottom: 16px;
            }
            .hero-text .cta-button {
              padding: 8px 16px;
              font-size: 11px;
            }
            .hero-text {
              width: 25px;
              height: 25px;
            }
          }

          @media (max-width: 360px) {
            .header {
              padding: 6px 10px;
            }
            .logo {
              font-size: 18px;
            }
            .search-container input {
              height: 32px;
              font-size: 12px;
              padding: 10px 40px 10px 14px;
            }
            .search-container .search-icon {
              width: 16px;
              height: 16px;
            }
            .location-button {
              padding: 5px 10px;
              font-size: 11px;
            }
            .location-button svg {
              width: 12px;
              height: 12px;
            }
            .hero-section {
              padding: 30px 10px;
              min-height: 650px;
            }
            .hero-content {
              max-width: 320px;
            }
            .hero-images {
              flex: 0 0 200px;
              max-width: 200px;
              height: 160px;
              margin-bottom: 15px;
            }
            .hero-image:nth-child(1) {
              width: 130px;
              height: 130px;
            }
            .hero-image:nth-child(2) {
              width: 100px;
              height: 100px;
              top: 80px; /* Adjusted from 60px */
              left: 100px; /* Adjusted from 80px */
            }
            .hero-image:nth-child(3) {
              width: 80px;
              height: 80px;
              top: 0px; /* Adjusted from 20px */
              left: 130px; /* Adjusted from 100px */
            }
            .hero-text {
              padding: 12px;
            }
            .hero-text h1 {
              font-size: 22px;
            }
            .hero-text p {
              font-size: 12px;
              margin-bottom: 14px;
            }
            .hero-text .cta-button {
              padding: 7px 14px;
              font-size: 10px;
            }
            .hero-text {
              width: 20px;
              height: 20px;
            }
          }
        `}
      </style>
      <header className="header">
        <div className="header-content">
          <Link href="/login" className="location-button">
            ورود/ثبت‌نام
          </Link>
          <div className="search-container">
            <input
              type="text"
              placeholder="...رستوران‌ها، کافه‌ها، غذاها"
              defaultValue="...سفارش آنلاین غذا"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="search-icon"
            >
              <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
            </svg>
          </div>
          <div className="logo">
            <span>elite</span>bite
          </div>
        </div>
      </header>
      <div className="hero-section">
        <div className="hero-content">
          <div className="hero-images">
            <div className="hero-image">
              <img
                src="pizza.png"
                alt="Plate of food with burger, fries, egg, and pickles"
              />
            </div>
            <div className="hero-image">
              <img
                src="burger.png"
                alt="Burger with fries"
              />
            </div>
            <div className="hero-image">
              <img
                src="drink.png"
                alt="Pizza slice"
              />
            </div>
          </div>
          <div className="hero-text">
            
            <h1>یکبار بگیر مشتری شو</h1>
            <p>سفارش آنلاین غذای مورد علاقه‌تان را با سریع‌ترین زمان تجربه کنید، با بهترین کیفیت و تنوع در منو.</p>
            <div className="cta-container">
              <Link href="/restaurants" className="cta-button primary">
                سفارش آنلاین
              </Link>
              <Link href="/location" className="cta-button secondary">
                موقعیت ما
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;