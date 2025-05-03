"use client";
import React, { useState } from "react";
import Link from "next/link";

const FoodSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("رستوران‌ها");
  const [filters, setFilters] = useState({
    location: "",
    foodType: "",
    rating: "",
    price: "",
    category: "",
    popularity: "",
    specialOffers: false,
  });

  const categories = [
    { name: "رستوران‌ها", icon: "burger" },
    { name: "غذا", icon: "food" },
  ];

  const restaurants = [
    { name: "ساندویچی", image: "https://images.unsplash.com/photo-1571091718767-4594d5800d96?w=200", rating: 4.5, location: "تهران", foodType: "ساندویچ", price: "متوسط", popularity: 85 },
    { name: "برگری", image: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=200", rating: 4.8, location: "شیراز", foodType: "برگر", price: "گران", popularity: 92 },
    { name: "پیتزا پارمی", image: "https://images.unsplash.com/photo-1513104890138-7c749659a680?w=200", rating: 4.2, location: "اصفهان", foodType: "پیتزا", price: "متوسط", specialOffer: true, popularity: 78 },
    { name: "کافه", image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=200", rating: 4.7, location: "مشهد", foodType: "قهوه", price: "گران", popularity: 88 },
    { name: "فست فود", image: "https://images.unsplash.com/photo-1551782450-a2132b4a6d91?w=200", rating: 4.4, location: "تبریز", foodType: "فست فود", price: "ارزان", popularity: 80 },
    { name: "رستوران", image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=200", rating: 4.9, location: "تهران", foodType: "سنتی", price: "گران", popularity: 95 },
    { name: "در الملک", image: "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?w=200", rating: 4.3, location: "شیراز", foodType: "فارسي", price: "متوسط", popularity: 75 },
    { name: "دارچین", image: "https://images.unsplash.com/photo-1504672281656-e3e7f6dd3f67?w=200", rating: 4.6, location: "اصفهان", foodType: "دسر", price: "متوسط", specialOffer: true, popularity: 82 },
    { name: "سوپرمارکت", image: "https://images.unsplash.com/photo-1542838132-92c53300491f?w=200", rating: 4.1, location: "تبریز", foodType: "مواد غذایی", price: "ارزان", popularity: 70 },
  ];

  const foodItems = [
    { name: "ساندویچ مرغ", image: "https://images.unsplash.com/photo-1571091718767-4594d5800d96?w=200", rating: 4.5, category: "فست فود", price: "متوسط", popularity: 85, specialOffer: false },
    { name: "برگر گوشت", image: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=200", rating: 4.8, category: "فست فود", price: "گران", popularity: 92, specialOffer: true },
    { name: "پیتزا مارgherita", image: "https://images.unsplash.com/photo-1513104890138-7c749659a680?w=200", rating: 4.2, category: "پیتزا", price: "متوسط", popularity: 78, specialOffer: false },
    { name: "قهوه لاته", image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=200", rating: 4.7, category: "قهوه", price: "گران", popularity: 88, specialOffer: true },
    { name: "چیکن نگت", image: "https://images.unsplash.com/photo-1551782450-a2132b4a6d91?w=200", rating: 4.4, category: "فست فود", price: "ارزان", popularity: 80, specialOffer: false },
  ];

  const fallbackImage = "https://via.placeholder.com/200x120.png?text=Placeholder";

  // Filter logic
  const filteredItems = selectedCategory === "رستوران‌ها"
    ? restaurants.filter((item) => {
        const matchesLocation = !filters.location || item.location === filters.location;
        const matchesFoodType = !filters.foodType || item.foodType === filters.foodType;
        const matchesRating = !filters.rating || item.rating >= parseFloat(filters.rating);
        const matchesPrice = !filters.price || item.price === filters.price;
        return matchesLocation && matchesFoodType && matchesRating && matchesPrice;
      })
    : foodItems.filter((item) => {
        const matchesCategory = !filters.category || item.category === filters.category;
        const matchesPopularity = !filters.popularity || item.popularity >= parseInt(filters.popularity);
        const matchesPrice = !filters.price || item.price === filters.price;
        const matchesSpecialOffers = !filters.specialOffers || item.specialOffer;
        return matchesCategory && matchesPopularity && matchesPrice && matchesSpecialOffers;
      });

  return (
    <section className="food-section font-vazir">
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Vazirmatn:wght@400;500;700&display=swap');
          .font-vazir {
            font-family: 'Vazirmatn', sans-serif;
            direction: ltr;
          }
          .food-section {
            max-width: 1200px;
            margin: 60px auto;
            padding: 40px;
            background: linear-gradient(145deg, #f7fafc, #edf2f7);
            border-radius: 16px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
            position: relative;
            overflow: hidden;
          }
          .category-list {
            display: flex;
            justify-content: center;
            gap: 30px;
            margin-bottom: 40px;
            position: relative;
          }
          .category-item {
            position: relative;
            cursor: pointer;
            padding: 10px 20px;
            font-size: 18px;
            font-weight: 600;
            color: #2d3748;
            transition: color 0.3s ease;
          }
          .category-item:hover {
            color: #00CECB;
          }
          .category-item.selected {
            color: #00CECB;
          }
          .category-item.selected::after {
            content: '';
            position: absolute;
            bottom: -5px;
            left: 0;
            width: 100%;
            height: 3px;
            background: linear-gradient(90deg, #00CECB, #06B6D4);
            animation: slideIn 0.3s ease forwards;
          }
          .category-item svg {
            display: none; /* Removed icons for a cleaner look */
          }
          .filter-panel {
            display: flex;
            gap: 20px;
            margin-bottom: 40px;
            flex-wrap: wrap;
            background: #ffffff;
            padding: 20px;
            border-radius: 12px;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
          }
          .filter-panel select, .filter-panel label {
            flex: 1;
            min-width: 150px;
            position: relative;
          }
          .filter-panel select {
            appearance: none;
            padding: 12px 40px 12px 16px;
            border: 1px solid #e2e8f0;
            border-radius: 8px;
            background: #f7fafc;
            color: #2d3748;
            font-size: 14px;
            font-weight: 500;
            transition: border-color 0.3s ease, box-shadow 0.3s ease;
          }
          .filter-panel select:focus {
            border-color: #00CECB;
            box-shadow: 0 0 0 3px rgba(0, 206, 203, 0.1);
            outline: none;
          }
          .filter-panel select::after {
            content: '▼';
            position: absolute;
            right: 16px;
            top: 50%;
            transform: translateY(-50%);
            color: #00CECB;
            font-size: 12px;
          }
          .filter-panel label {
            display: flex;
            align-items: center;
            font-size: 14px;
            color: #2d3748;
          }
          .filter-panel input[type="checkbox"] {
            margin-left: 8px;
            accent-color: #00CECB;
          }
          .section-title {
            font-size: 28px;
            font-weight: 700;
            color: #1a202c;
            margin-bottom: 30px;
            text-align: right;
            position: relative;
            display: inline-block;
            opacity: 0;
            animation: fadeIn 1s ease forwards;
          }
          .section-title::after {
            content: '';
            position: absolute;
            bottom: -6px;
            right: 0;
            width: 50px;
            height: 4px;
            background: linear-gradient(90deg, #00CECB, #06B6D4);
            border-radius: 2px;
          }
          .restaurant-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
            gap: 30px;
          }
          .restaurant-card {
            background: #ffffff;
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 6px 20px rgba(0, 0, 0, 0.05);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            position: relative;
            opacity: 0;
            animation: fadeInUp 0.5s ease forwards;
          }
          .restaurant-card:hover {
            transform: translateY(-8px);
            box-shadow: 0 12px 30px rgba(0, 0, 0, 0.1);
          }
          .restaurant-image {
            position: relative;
            width: 100%;
            height: 180px;
            overflow: hidden;
          }
          .restaurant-card img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.4s ease;
          }
          .restaurant-card:hover img {
            transform: scale(1.05);
          }
          .restaurant-image::after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.4));
            pointer-events: none;
          }
          .restaurant-card .rating {
            position: absolute;
            top: 12px;
            left: 12px;
            background: linear-gradient(90deg, #00CECB, #06B6D4);
            color: #ffffff;
            padding: 6px 12px;
            border-radius: 20px;
            font-size: 13px;
            font-weight: 600;
            display: flex;
            align-items: center;
            gap: 6px;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
          }
          .restaurant-card .name {
            padding: 16px;
            text-align: center;
            font-size: 18px;
            font-weight: 600;
            color: #1a202c;
            background: #f7fafc;
            border-top: 1px solid #e2e8f0;
          }
          .restaurant-card .arrow {
            display: none; /* Removed arrow for a cleaner look */
          }
          @keyframes slideIn {
            from { width: 0; }
            to { width: 100%; }
          }
          @keyframes fadeIn {
            to { opacity: 1; }
          }
          @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .restaurant-card:nth-child(1) { animation-delay: 0.1s; }
          .restaurant-card:nth-child(2) { animation-delay: 0.2s; }
          .restaurant-card:nth-child(3) { animation-delay: 0.3s; }
          .restaurant-card:nth-child(4) { animation-delay: 0.4s; }
          .restaurant-card:nth-child(5) { animation-delay: 0.5s; }
          .restaurant-card:nth-child(6) { animation-delay: 0.6s; }
          .restaurant-card:nth-child(7) { animation-delay: 0.7s; }
          .restaurant-card:nth-child(8) { animation-delay: 0.8s; }
          .restaurant-card:nth-child(9) { animation-delay: 0.9s; }

          @media (max-width: 1024px) {
            .food-section {
              max-width: 90%;
              padding: 30px;
            }
            .restaurant-grid {
              grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
              gap: 24px;
            }
            .restaurant-image {
              height: 160px;
            }
            .restaurant-card .name {
              font-size: 16px;
            }
            .section-title {
              font-size: 24px;
            }
            .filter-panel {
              flex-direction: column;
              padding: 15px;
            }
          }

          @media (max-width: 768px) {
            .food-section {
              max-width: 95%;
              padding: 20px;
            }
            .category-list {
              gap: 20px;
              margin-bottom: 30px;
            }
            .category-item {
              font-size: 16px;
            }
            .restaurant-grid {
              grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
              gap: 20px;
            }
            .restaurant-image {
              height: 140px;
            }
            .restaurant-card .name {
              font-size: 14px;
            }
            .section-title {
              font-size: 22px;
            }
          }

          @media (max-width: 480px) {
            .food-section {
              max-width: 100%;
              padding: 15px;
            }
            .category-list {
              gap: 15px;
              margin-bottom: 20px;
            }
            .category-item {
              font-size: 14px;
              padding: 8px 15px;
            }
            .restaurant-grid {
              grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
              gap: 16px;
            }
            .restaurant-image {
              height: 120px;
            }
            .restaurant-card .name {
              font-size: 13px;
              padding: 12px;
            }
            .restaurant-card .rating {
              font-size: 11px;
              padding: 4px 8px;
            }
            .section-title {
              font-size: 20px;
            }
          }
        `}
      </style>
      <svg style={{ position: "absolute", width: 0, height: 0 }}>
        <defs>
          <linearGradient id="icon-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: "#00CECB", stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: "#06B6D4", stopOpacity: 1 }} />
          </linearGradient>
        </defs>
      </svg>
      <div className="category-list">
        {categories.map((category) => (
          <div
            key={category.name}
            className={`category-item ${selectedCategory === category.name ? "selected" : ""}`}
            onClick={() => {
              setSelectedCategory(category.name);
              setFilters({
                location: "",
                foodType: "",
                rating: "",
                price: "",
                category: "",
                popularity: "",
                specialOffers: false,
              });
            }}
          >
            <span>{category.name}</span>
          </div>
        ))}
      </div>
      <div className="filter-panel">
        {selectedCategory === "رستوران‌ها" ? (
          <>
            <select value={filters.location} onChange={(e) => setFilters({ ...filters, location: e.target.value })}>
              <option value="">همه مکان‌ها</option>
              <option value="تهران">تهران</option>
              <option value="شیراز">شیراز</option>
              <option value="اصفهان">اصفهان</option>
              <option value="مشهد">مشهد</option>
              <option value="تبریز">تبریز</option>
            </select>
            <select value={filters.foodType} onChange={(e) => setFilters({ ...filters, foodType: e.target.value })}>
              <option value="">همه انواع غذا</option>
              <option value="ساندویچ">ساندویچ</option>
              <option value="برگر">برگر</option>
              <option value="پیتزا">پیتزا</option>
              <option value="قهوه">قهوه</option>
              <option value="فست فود">فست فود</option>
              <option value="سنتی">سنتی</option>
              <option value="فارسي">فارسی</option>
              <option value="دسر">دسر</option>
              <option value="مواد غذایی">مواد غذایی</option>
            </select>
            <select value={filters.rating} onChange={(e) => setFilters({ ...filters, rating: e.target.value })}>
              <option value="">همه امتیازها</option>
              <option value="4">4 و بالاتر</option>
              <option value="4.5">4.5 و بالاتر</option>
            </select>
            <select value={filters.price} onChange={(e) => setFilters({ ...filters, price: e.target.value })}>
              <option value="">همه قیمت‌ها</option>
              <option value="ارزان">ارزان</option>
              <option value="متوسط">متوسط</option>
              <option value="گران">گران</option>
            </select>
          </>
        ) : (
          <>
            <select value={filters.category} onChange={(e) => setFilters({ ...filters, category: e.target.value })}>
              <option value="">همه دسته‌بندی‌ها</option>
              <option value="فست فود">فست فود</option>
              <option value="پیتزا">پیتزا</option>
              <option value="قهوه">قهوه</option>
            </select>
            <select value={filters.popularity} onChange={(e) => setFilters({ ...filters, popularity: e.target.value })}>
              <option value="">همه محبوبیت‌ها</option>
              <option value="80">80% و بالاتر</option>
              <option value="90">90% و بالاتر</option>
            </select>
            <select value={filters.price} onChange={(e) => setFilters({ ...filters, price: e.target.value })}>
              <option value="">همه قیمت‌ها</option>
              <option value="ارزان">ارزان</option>
              <option value="متوسط">متوسط</option>
              <option value="گران">گران</option>
            </select>
            <label>
              <input
                type="checkbox"
                checked={filters.specialOffers}
                onChange={(e) => setFilters({ ...filters, specialOffers: e.target.checked })}
              />
              پیشنهادات ویژه
            </label>
          </>
        )}
      </div>
      <h2 className="section-title">در سطح شهر</h2>
      <div className="restaurant-grid">
        {filteredItems.map((item) => (
          <Link
            href={
              selectedCategory === "رستوران‌ها"
                ? `/restaurant/${item.name}${"location" in item && item.location ? `?location=${item.location}` : ""}${"foodType" in item ? `&foodType=${item.foodType}` : ""}&rating=${item.rating}&price=${item.price}`
                : `/food/${item.name}${"category" in item && item.category ? `?category=${item.category}` : ""}&popularity=${item.popularity}&price=${item.price}&special=${item.specialOffer || false}`
            }
            key={item.name}
            className="restaurant-card"
          >
            <div className="restaurant-image">
              <img
                src={item.image}
                alt={item.name}
                onError={(e) => {
                  e.currentTarget.src = fallbackImage;
                  e.currentTarget.onerror = null;
                }}
              />
              <div className="rating">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  style={{ width: "14px", height: "14px", fill: "#FFFFFF" }}
                >
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
                {item.rating}
              </div>
            </div>
            <div className="name">{item.name}</div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default FoodSection;