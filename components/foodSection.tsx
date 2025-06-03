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
        { name: "سنتی", image: "https://images.unsplash.com/photo-1571091718767-4594d5800d96?w=200", rating: 4.5, location: "تهران", foodType: "ساندویچ", price: "متوسط", popularity: 85 },
        { name: "فست فود", image: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=200", rating: 4.8, location: "شیراز", foodType: "برگر", price: "گران", popularity: 92 },
        { name: "سرباز", image: "https://images.unsplash.com/photo-1513104890138-7c749659a680?w=200", rating: 4.2, location: "اصفهان", foodType: "پیتزا", price: "متوسط", specialOffer: true, popularity: 78 },
        { name: "کافه", image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=200", rating: 4.7, location: "مشهد", foodType: "قهوه", price: "گران", popularity: 88 },
        ];

    const foodItems = [
        { name: "ایرانی", image: "https://images.unsplash.com/photo-1571091718767-4594d5800d96?w=200", rating: 4.5, category: "فست فود", price: "متوسط", popularity: 85, specialOffer: false },
        { name: "فست فود", image: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=200", rating: 4.8, category: "فست فود", price: "گران", popularity: 92, specialOffer: true },
        { name: "کباب", image: "https://images.unsplash.com/photo-1513104890138-7c749659a680?w=200", rating: 4.2, category: "پیتزا", price: "متوسط", popularity: 78, specialOffer: false },
        { name: "ساندویچ", image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=200", rating: 4.7, category: "قهوه", price: "گران", popularity: 88, specialOffer: true },
        { name: "برگر", image: "https://images.unsplash.com/photo-1551782450-a2132b4a6d91?w=200", rating: 4.4, category: "فست فود", price: "ارزان", popularity: 80, specialOffer: false },
        { name: "پیتزا", image: "https://images.unsplash.com/photo-1571091718767-4594d5800d96?w=200", rating: 4.5, category: "فست فود", price: "متوسط", popularity: 85, specialOffer: false },
        { name: "پاستا", image: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=200", rating: 4.8, category: "فست فود", price: "گران", popularity: 92, specialOffer: true },
        { name: "دریایی ", image: "https://images.unsplash.com/photo-1513104890138-7c749659a680?w=200", rating: 4.2, category: "پیتزا", price: "متوسط", popularity: 78, specialOffer: false },
        { name: "محلی", image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=200", rating: 4.7, category: "قهوه", price: "گران", popularity: 88, specialOffer: true },
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
          @import url('https://fonts.googleapis.com/css2?family=Vazirmatn:wght@400;500;700;900&display=swap');
          .font-vazir {
            font-family: 'Vazirmatn', sans-serif;
          }
          .food-section {
            max-width: 1200px;
            margin: 80px auto;
            padding: 48px;
            background: #FFFFFF;
            border-radius: 24px;
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.05);
            position: relative;
            overflow: hidden;
            direction: rtl;
          }
          .category-list {
            display: flex;
            justify-content: center;
            gap: 32px;
            margin-bottom: 48px;
            position: relative;
          }
          .category-item {
            cursor: pointer;
            padding: 12px 24px;
            font-size: 20px;
            font-weight: 700;
            color: #1F2937;
            transition: all 0.3s ease;
            position: relative;
            border-radius: 12px;
          }
          .category-item:hover {
            color: #00CECB;
            background: rgba(0, 206, 203, 0.05);
          }
          .category-item.selected {
            color: #00CECB;
            background: rgba(0, 206, 203, 0.1);
          }
          .category-item.selected::after {
            content: '';
            position: absolute;
            bottom: -8px;
            right: 0;
            width: 100%;
            height: 4px;
            background: linear-gradient(90deg, #00CECB, #06B6D4);
            border-radius: 2px;
            animation: slideIn 0.3s ease forwards;
          }
          .category-item svg {
            display: none;
          }
          .filter-panel {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
            gap: 16px;
            margin-bottom: 48px;
            background: #F8FAFC;
            padding: 24px;
            border-radius: 16px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
          }
          .filter-panel select, .filter-panel label {
            position: relative;
            display: flex;
            align-items: center;
          }
          .filter-panel select {
            width: 100%;
            padding: 12px 40px 12px 16px;
            border: 1px solid #E5E7EB;
            border-radius: 12px;
            background: #FFFFFF;
            color: #1F2937;
            font-size: 16px;
            font-weight: 500;
            appearance: none;
            transition: all 0.3s ease;
            text-align: right;
          }
          .filter-panel select:focus {
            border-color: #00CECB;
            box-shadow: 0 0 0 3px rgba(0, 206, 203, 0.1);
            outline: none;
          }
          .filter-panel select::-ms-expand {
            display: none;
          }
          .filter-panel select::after {
            content: '▼';
            position: absolute;
            left: 16px;
            top: 50%;
            transform: translateY(-50%);
            color: #00CECB;
            font-size: 12px;
            pointer-events: none;
          }
          .filter-panel .select-wrapper {
            position: relative;
            width: 100%;
          }
          .filter-panel .select-wrapper::after {
            content: '▼';
            position: absolute;
            left: 16px;
            top: 50%;
            transform: translateY(-50%);
            color: #00CECB;
            font-size: 12px;
            pointer-events: none;
          }
          .filter-panel label {
            font-size: 16px;
            color: #1F2937;
            font-weight: 500;
            gap: 8px;
            cursor: pointer;
          }
          .filter-panel input[type="checkbox"] {
            appearance: none;
            width: 20px;
            height: 20px;
            border: 2px solid #E5E7EB;
            border-radius: 6px;
            background: #FFFFFF;
            position: relative;
            cursor: pointer;
            transition: all 0.3s ease;
          }
          .filter-panel input[type="checkbox"]:checked {
            background: #00CECB;
            border-color: #00CECB;
          }
          .filter-panel input[type="checkbox"]:checked::after {
            content: '✔';
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            color: #FFFFFF;
            font-size: 12px;
          }
          .section-title {
            font-size: 32px;
            font-weight: 700;
            color: #1F2937;
            margin-bottom: 32px;
            text-align: right;
            position: relative;
            display: inline-block;
            opacity: 0;
            animation: fadeIn 1s ease forwards;
          }
          .section-title::after {
            content: '';
            position: absolute;
            bottom: -8px;
            right: 0;
            width: 60px;
            height: 4px;
            background: linear-gradient(90deg, #00CECB, #06B6D4);
            border-radius: 2px;
          }
          .restaurant-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
            gap: 32px;
          }
          .restaurant-card {
            background: #FFFFFF;
            border-radius: 16px;
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
            height: 200px;
            overflow: hidden;
          }
          .restaurant-card img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.4s ease;
          }
          .restaurant-card:hover img {
            transform: scale(1.08);
          }
          .restaurant-image::after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.3));
            pointer-events: none;
          }
          .restaurant-card .rating {
            position: absolute;
            top: 16px;
            left: 16px;
            background: linear-gradient(90deg, #00CECB, #06B6D4);
            color: #FFFFFF;
            padding: 8px 16px;
            border-radius: 20px;
            font-size: 14px;
            font-weight: 600;
            display: flex;
            align-items: center;
            gap: 8px;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
          }
          .restaurant-card .name {
            padding: 20px;
            text-align: center;
            font-size: 20px;
            font-weight: 600;
            color: #1F2937;
            background: #F8FAFC;
            border-top: 1px solid #E5E7EB;
            transition: color 0.3s ease;
          }
          .restaurant-card:hover .name {
            color: #FF4D4D;
          }
          .restaurant-card .arrow {
            display: none;
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

          /* Responsive Styles */
          @media (max-width: 1200px) {
            .food-section {
              max-width: 95%;
              padding: 40px;
            }
            .restaurant-grid {
              grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
              gap: 24px;
            }
            .restaurant-image {
              height: 180px;
            }
          }

          @media (max-width: 1024px) {
            .food-section {
              padding: 32px;
            }
            .category-list {
              gap: 24px;
              margin-bottom: 40px;
            }
            .category-item {
              font-size: 18px;
              padding: 10px 20px;
            }
            .restaurant-grid {
              grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
              gap: 20px;
            }
            .restaurant-image {
              height: 160px;
            }
            .restaurant-card .name {
              font-size: 18px;
            }
            .section-title {
              font-size: 28px;
            }
            .filter-panel {
              grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
              padding: 20px;
            }
            .filter-panel select, .filter-panel label {
              font-size: 15px;
            }
          }

          @media (max-width: 768px) {
            .food-section {
              max-width: 100%;
              padding: 24px;
            }
            .category-list {
              gap: 20px;
              margin-bottom: 32px;
            }
            .category-item {
              font-size: 16px;
              padding: 8px 16px;
            }
            .restaurant-grid {
              grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
              gap: 16px;
            }
            .restaurant-image {
              height: 140px;
            }
            .restaurant-card .name {
              font-size: 16px;
              padding: 16px;
            }
            .restaurant-card .rating {
              font-size: 13px;
              padding: 6px 12px;
            }
            .section-title {
              font-size: 24px;
            }
            .filter-panel {
              grid-template-columns: 1fr;
              padding: 16px;
            }
            .filter-panel select, .filter-panel label {
              font-size: 14px;
            }
          }

          @media (max-width: 480px) {
            .food-section {
              padding: 16px;
            }
            .category-list {
              gap: 16px;
              margin-bottom: 24px;
              flex-wrap: wrap;
            }
            .category-item {
              font-size: 14px;
              padding: 6px 12px;
            }
            .restaurant-grid {
              grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
              gap: 12px;
            }
            .restaurant-image {
              height: 120px;
            }
            .restaurant-card .name {
              font-size: 14px;
              padding: 12px;
            }
            .restaurant-card .rating {
              font-size: 12px;
              padding: 4px 8px;
            }
            .section-title {
              font-size: 20px;
            }
            .filter-panel {
              padding: 12px;
            }
            .filter-panel select, .filter-panel label {
              font-size: 13px;
            }
            .filter-panel input[type="checkbox"] {
              width: 18px;
              height: 18px;
            }
          }

          @media (max-width: 360px) {
            .food-section {
              padding: 12px;
            }
            .category-list {
              gap: 12px;
              margin-bottom: 20px;
            }
            .category-item {
              font-size: 13px;
              padding: 6px 10px;
            }
            .restaurant-grid {
              grid-template-columns: 1fr;
              gap: 10px;
            }
            .restaurant-image {
              height: 100px;
            }
            .restaurant-card .name {
              font-size: 13px;
              padding: 10px;
            }
            .restaurant-card .rating {
              font-size: 11px;
              padding: 4px 6px;
            }
            .section-title {
              font-size: 18px;
            }
            .filter-panel {
              padding: 10px;
            }
            .filter-panel select, .filter-panel label {
              font-size: 12px;
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
            <h2 className="section-title">{selectedCategory === "رستوران‌ها" ? "دسته بندی رستوران‌ها" : "دسته بندی غذاها"}</h2>
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
                                    style={{ width: "16px", height: "16px", fill: "#FFFFFF" }}
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