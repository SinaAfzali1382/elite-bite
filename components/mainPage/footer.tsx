import React from "react";
import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import "./Footer.css";

const Footer: React.FC = () => {
  return (
      <footer className="footer font-vazir">
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
          <div className="footer-section contact">
            <h3>راه‌های ارتباطی</h3>
            <ul>
              <li>
                <a href="mailto:info@elitebite.com" className="contact-link">
                  <span className="text">ایمیل: info@elitebite.com</span>
                </a>
              </li>
              <li>
                <a href="tel:+982112345678" className="contact-link">
                  <span className="text">تلفن: +۹۸ ۲۱ ۱۲۳۴ ۵۶۷۸</span>
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>ما را دنبال کنید</h3>
            <ul className="social-links">
              <li>
                <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="social-link">
                  <span className="icon facebook-icon"><FaFacebook size={30} /></span>
                </a>
              </li>
              <li>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link">
                  <span className="icon twitter-icon"><FaTwitter size={30} /></span>
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="social-link">
                  <span className="icon instagram-icon"><FaInstagram size={30} /></span>
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" className="social-link">
                  <span className="icon youtube-icon"><FaYoutube size={30} /></span>
                </a>
              </li>
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