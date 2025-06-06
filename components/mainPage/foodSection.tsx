"use client";
import React, { useState } from "react";
import Link from "next/link";
import "./FoodSection.css";

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