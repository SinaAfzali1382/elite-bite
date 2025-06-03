import React from "react";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
      <footer className="footer font-vazir">
        <style>
          {`
          @import url('https://fonts.googleapis.com/css2?family=Vazirmatn:wght@400;500;700;900&display=swap');
          .font-vazir {
            font-family: 'Vazirmatn', sans-serif;
          }
          .footer {
            background: #FFFFFF;
            color: #1F2937;
            padding: 48px 0;
            box-shadow: 0 -4px 12px rgba(0, 0, 0, 0.05);
            border-top: 1px solid #E5E7EB;
            direction: rtl;
          }
          .footer-container {
            max-width: 1200px;
            margin: 0 auto;
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            gap: 24px;
            padding: 0 32px;
            direction: rtl;
          }
          .footer-section {
            flex: 1;
            min-width: 200px;
          }
          .footer-section h3 {
            color: #333333;
            font-size: 20px;
            font-weight: 700;
            margin-bottom: 16px;
            border-bottom: 2px solid #00CECB;
            padding-bottom: 8px;
            text-align: right;
          }
          .footer-section p {
            font-size: 16px;
            font-weight: 400;
            color: #666666;
            line-height: 1.5;
            text-align: right;
          }
          .footer-section ul {
            list-style: none;
            padding: 0;
          }
          .footer-section ul li {
            margin-bottom: 12px;
          }
          .footer-section ul li a {
            color: #1F2937;
            text-decoration: none;
            font-size: 16px;
            transition: color 0.3s ease;
            text-align: right;
            display: block;
          }
          .footer-section ul li a:hover {
            color: #FF4D4D;
          }
          .newsletter input {
            width: 100%;
            padding: 12px 16px;
            margin-bottom: 12px;
            border: 1px solid #E5E7EB;
            border-radius: 24px;
            background: #F8FAFC;
            color: #1F2937;
            font-size: 16px;
            outline: none;
            text-align: right;
            transition: all 0.3s ease;
          }
          .newsletter input:focus {
            border-color: #00CECB;
            box-shadow: 0 0 0 3px rgba(0, 206, 203, 0.1);
          }
          .newsletter button {
            width: 100%;
            padding: 12px;
            background: linear-gradient(135deg, #00CECB 0%, #06B6D4 100%);
            border: none;
            border-radius: 24px;
            color: #FFFFFF;
            font-size: 16px;
            font-weight: 500;
            cursor: pointer;
            transition: all 0.3s ease;
            box-shadow: 0 2px 8px rgba(0, 206, 203, 0.2);
          }
          .newsletter button:hover {
            background: linear-gradient(135deg, #06B6D4 0%, #00A4A3 100%);
            box-shadow: 0 4px 12px rgba(0, 206, 203, 0.3);
            transform: translateY(-1px);
          }
          .footer-bottom {
            text-align: center;
            padding-top: 24px;
            border-top: 1px solid #E5E7EB;
            margin-top: 32px;
            color: #666666;
            font-size: 14px;
            font-weight: 400;
            text-align: right;
          }

          /* Responsive Styles */
          @media (max-width: 1200px) {
            .footer-container {
              max-width: 95%;
              padding: 0 24px;
            }
          }

          @media (max-width: 1024px) {
            .footer-container {
              padding: 0 20px;
            }
            .footer-section h3 {
              font-size: 18px;
            }
            .footer-section p, .footer-section ul li a {
              font-size: 15px;
            }
            .newsletter input, .newsletter button {
              font-size: 15px;
            }
          }

          @media (max-width: 768px) {
            .footer-container {
              flex-direction: column;
              text-align: center;
              gap: 32px;
              padding: 0 16px;
            }
            .footer-section {
              min-width: 100%;
            }
            .footer-section h3, .footer-section p, .footer-section ul li a {
              text-align: center;
            }
            .newsletter input, .newsletter button {
              font-size: 14px;
            }
            .footer-bottom {
              font-size: 13px;
              text-align: center;
            }
          }

          @media (max-width: 480px) {
            .footer {
              padding: 32px 0;
            }
            .footer-container {
              padding: 0 12px;
            }
            .footer-section h3 {
              font-size: 16px;
            }
            .footer-section p, .footer-section ul li a {
              font-size: 14px;
            }
            .newsletter input, .newsletter button {
              padding: 10px;
              font-size: 13px;
            }
            .footer-bottom {
              font-size: 12px;
              padding-top: 20px;
            }
          }

          @media (max-width: 360px) {
            .footer {
              padding: 24px 0;
            }
            .footer-container {
              padding: 0 10px;
            }
            .footer-section h3 {
              font-size: 14px;
            }
            .footer-section p, .footer-section ul li a {
              font-size: 13px;
            }
            .newsletter input, .newsletter button {
              padding: 8px;
              font-size: 12px;
            }
            .footer-bottom {
              font-size: 11px;
            }
          }
        `}
        </style>
        <div className="footer-container">
          <div className="footer-section">
            <h3>elitebite</h3>
            <p>سفارش آنلاین غذای مورد علاقه‌تان با سریع‌ترین زمان و بهترین کیفیت. با ما طعم واقعی غذا را تجربه کنید.</p>
          </div>
          <div className="footer-section">
            <h3>لینک‌های سریع</h3>
            <ul>
              <li><Link href="/home">خانه</Link></li>
              <li><Link href="/about">درباره ما</Link></li>
              <li><Link href="/restaurants">رستوران‌ها</Link></li>
              <li><Link href="/contact">تماس با ما</Link></li>
            </ul>
          </div>
          <div className="footer-section newsletter">
            <h3>پیشنهادات و انتقادات</h3>
            <p>پیشنهادات و انتقادات خود را با ما به اشتراک بگذارید</p>
            <input type="email" placeholder="ایمیل خود را وارد کنید" />
            <button type="submit">اشتراک</button>
          </div>
          <div className="footer-section">
            <h3>ما را دنبال کنید</h3>
            <ul>
              <li><a href="https://www.facebook.com/" target="_blank">فیس‌بوک</a></li>
              <li><a href="https://twitter.com" target="_blank">توییتر</a></li>
              <li><a href="https://www.facebook.com/" target="_blank">اینستاگرام</a></li>
              <li><a href="https://twitter.com" target="_blank">یوتیوب</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© ۱۴۰۴ elitebite. تمامی حقوق محفوظ است.</p>
        </div>
      </footer>
  );
};

export default Footer;