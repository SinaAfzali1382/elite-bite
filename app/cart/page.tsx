"use client";
import React, { useState } from 'react';
import Link from 'next/link';

interface CartItem {
    id: string;
    name: string;
    price: number;
    quantity: number;
    image: string;
}

interface Order {
    id: string;
    items: CartItem[];
    total: number;
    status: 'در حال آماده‌سازی' | 'ارسال' | 'تحویل داده شده';
    placedAt: string;
}

const Cart: React.FC = () => {
    const [cartItems, setCartItems] = useState<CartItem[]>([
        { id: '1', name: 'پیتزا مارگاریتا', price: 150000, quantity: 2, image: '/images/pizza.png' },
        { id: '2', name: 'برگر کلاسیک', price: 80000, quantity: 1, image: '/images/burger.png' },
        { id: '3', name: 'نوشابه', price: 20000, quantity: 3, image: '/images/drink.png' },
    ]);

    const [orders] = useState<Order[]>([
        {
            id: 'order1',
            items: [
                { id: '1', name: 'پیتزا پپرونی', price: 160000, quantity: 1, image: '/images/pizza.png' },
                { id: '2', name: 'سیب‌زمینی سرخ‌شده', price: 40000, quantity: 2, image: '/images/fries.png' },
            ],
            total: 240000,
            status: 'در حال آماده‌سازی',
            placedAt: '1404/02/15 14:30',
        },
        {
            id: 'order2',
            items: [
                { id: '3', name: 'ساندویچ مرغ', price: 90000, quantity: 1, image: '/images/sandwich.png' },
            ],
            total: 90000,
            status: 'ارسال',
            placedAt: '1404/02/15 12:00',
        },
        {
            id: 'order3',
            items: [
                { id: '4', name: 'کباب کوبیده', price: 200000, quantity: 2, image: '/images/kebab.png' },
            ],
            total: 400000,
            status: 'تحویل داده شده',
            placedAt: '1404/02/14 18:45',
        },
    ]);

    const handleQuantityChange = (id: string, delta: number) => {
        setCartItems((prevItems) =>
            prevItems
                .map((item) =>
                    item.id === id ? { ...item, quantity: Math.max(0, item.quantity + delta) } : item
                )
                .filter((item) => item.quantity > 0)
        );
    };

    const handleRemoveItem = (id: string) => {
        setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
    };

    const calculateSubtotal = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    const formatPrice = (price: number) => {
        return new Intl.NumberFormat('fa-IR').format(price);
    };

    const getStatusColor = (status: Order['status']) => {
        switch (status) {
            case 'در حال آماده‌سازی':
                return '#f99245';
            case 'ارسال':
                return '#00CECB';
            case 'تحویل داده شده':
                return '#4CAF50';
            default:
                return '#666666';
        }
    };

    return (
        <>
            <style>
                {`
          @import url('https://fonts.googleapis.com/css2?family=Vazirmatn:wght@400;500;700;900&display=swap');

          body {
            font-family: 'Vazirmatn', sans-serif;
            background: linear-gradient(135deg, #E6FFFA 0%, #B0F4F3 100%);
            margin: 0;
            min-height: 100vh;
            overflow-x: hidden;
            padding: 20px;
          }

          .page-container {
            max-width: 1200px;
            margin: 0 auto;
            display: flex;
            flex-direction: column;
            gap: 30px;
          }

          .cart-card, .order-status-card {
            background: #FFFFFF;
            border-radius: 24px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
            border: 1px solid #E5E7EB;
            padding: 20px;
            text-align: right;
          }

          .cart-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding-bottom: 20px;
            border-bottom: 1px solid #E5E7EB;
            margin-bottom: 20px;
          }

          .cart-header h1, .order-status-card h2 {
            font-size: 28px;
            font-weight: 700;
            color: #333333;
            margin: 0;
          }

          .cart-header .clear-cart {
            background: none;
            border: 2px solid #f99245;
            color: #f99245;
            border-radius: 24px;
            padding: 8px 20px;
            font-size: 14px;
            font-weight: 500;
            cursor: pointer;
            transition: all 0.3s ease;
          }

          .cart-header .clear-cart:hover {
            background: #f99245;
            color: #FFFFFF;
            box-shadow: 0 4px 12px rgba(249, 146, 69, 0.3);
          }

          .cart-items {
            display: flex;
            flex-direction: column;
            gap: 20px;
          }

          .cart-item {
            display: flex;
            align-items: center;
            padding: 20px;
            background: #F8FAFC;
            border-radius: 16px;
            border: 1px solid #E5E7EB;
            transition: all 0.3s ease;
          }

          .cart-item:hover {
            box-shadow: 0 4px 12px rgba(0, 206, 203, 0.1);
          }

          .cart-item img {
            width: 80px;
            height: 80px;
            object-fit: cover;
            border-radius: 12px;
            margin-left: 20px;
            border: 2px solid #FFFFFF;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
          }

          .cart-item-details {
            flex: 1;
            display: flex;
            flex-direction: column;
            gap: 10px;
          }

          .cart-item-details h2 {
            font-size: 18px;
            font-weight: 500;
            color: #333333;
            margin: 0;
          }

          .cart-item-details .price {
            font-size: 16px;
            color: #666666;
          }

          .quantity-control {
            display: flex;
            align-items: center;
            gap: 10px;
          }

          .quantity-control button {
            width: 36px;
            height: 36px;
            border-radius: 50%;
            background: linear-gradient(135deg, #00CECB 0%, #06B6D4 100%);
            color: #FFFFFF;
            font-size: 18px;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 0;
            box-shadow: 0 2px 8px rgba(0, 206, 203, 0.2);
            border: none;
            cursor: pointer;
          }

          .quantity-control button:hover {
            background: linear-gradient(135deg, #06B6D4 0%, #00A4A3 100%);
            box-shadow: 0 4px 12px rgba(0, 206, 203, 0.3);
          }

          .quantity-control span {
            font-size: 16px;
            font-weight: 500;
            color: #333333;
            min-width: 30px;
            text-align: center;
          }

          .remove-item {
            background: none;
            border: none;
            color: #f99245;
            font-size: 14px;
            font-weight: 500;
            cursor: pointer;
            transition: all 0.3s ease;
          }

          .remove-item:hover {
            color: #d87a33;
            text-decoration: underline;
          }

          .cart-summary {
            margin-top: 30px;
            padding: 20px;
            background: #F8FAFC;
            border-radius: 16px;
            border: 1px solid #E5E7EB;
            display: flex;
            justify-content: space-between;
            align-items: center;
          }

          .cart-summary .subtotal {
            font-size: 20px;
            font-weight: 700;
            color: #333333;
          }

          .cart-summary .subtotal span {
            color: #00CECB;
          }

          .cart-summary .checkout-button {
            background: linear-gradient(135deg, #00CECB 0%, #06B6D4 100%);
            border-radius: 24px;
            padding: 12px 40px;
            font-size: 16px;
            font-weight: 500;
            color: #FFFFFF;
            border: none;
            cursor: pointer;
            transition: all 0.3s ease;
            box-shadow: 0 2px 8px rgba(0, 206, 203, 0.2);
            text-decoration: none;
          }

          .cart-summary .checkout-button:hover {
            background: linear-gradient(135deg, #06B6D4 0%, #00A4A3 100%);
            box-shadow: 0 4px 12px rgba(0, 206, 203, 0.3);
            transform: translateY(-1px);
          }

          .empty-cart {
            text-align: center;
            padding: 40px;
            color: #666666;
            font-size: 18px;
          }

          .order-list {
            display: flex;
            flex-direction: column;
            gap: 20px;
          }

          .order-item {
            padding: 20px;
            background: #F8FAFC;
            border-radius: 16px;
            border: 1px solid #E5E7EB;
            transition: all 0.3s ease;
          }

          .order-item:hover {
            box-shadow: 0 4px 12px rgba(0, 206, 203, 0.1);
          }

          .order-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 15px;
          }

          .order-header h3 {
            font-size: 18px;
            font-weight: 500;
            color: #333333;
            margin: 0;
          }

          .order-status {
            font-size: 14px;
            font-weight: 500;
            padding: 6px 12px;
            border-radius: 12px;
            color: #FFFFFF;
          }

          .order-details {
            font-size: 14px;
            color: #666666;
            margin-bottom: 10px;
          }

          .order-items-list {
            display: flex;
            flex-direction: column;
            gap: 10px;
          }

          .order-item-detail {
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-size: 14px;
            color: #333333;
          }

          .order-item-detail img {
            width: 50px;
            height: 50px;
            object-fit: cover;
            border-radius: 8px;
            margin-left: 10px;
            border: 2px solid #FFFFFF;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
          }

          .order-total {
            font-size: 16px;
            font-weight: 700;
            color: #333333;
            margin-top: 10px;
            text-align: left;
          }

          @media (max-width: 1024px) {
            .page-container {
              max-width: 90%;
            }
            .cart-card, .order-status-card {
              padding: 15px;
            }
            .cart-header h1, .order-status-card h2 {
              font-size: 24px;
            }
            .cart-item, .order-item {
              padding: 15px;
            }
            .cart-item img, .order-item-detail img {
              width: 70px;
              height: 70px;
              margin-left: 15px;
            }
            .cart-item-details h2, .order-header h3 {
              font-size: 16px;
            }
            .cart-item-details .price {
              font-size: 14px;
            }
            .cart-summary .subtotal {
              font-size: 18px;
            }
            .cart-summary .checkout-button {
              padding: 10px 30px;
              font-size: 14px;
            }
            .order-status {
              font-size: 13px;
            }
            .order-total {
              font-size: 14px;
            }
          }

          @media (max-width: 768px) {
            .page-container {
              gap: 20px;
            }
            .cart-card, .order-status-card {
              margin: 0;
            }
            .cart-header {
              flex-direction: column;
              gap: 15px;
              align-items: flex-end;
            }
            .cart-header h1, .order-status-card h2 {
              font-size: 22px;
            }
            .cart-header .clear-cart {
              padding: 6px 15px;
              font-size: 13px;
            }
            .cart-item, .order-item {
              flex-direction: column;
              align-items: flex-end;
              gap: 15px;
              text-align: right;
            }
            .cart-item img, .order-item-detail img {
              width: 100px;
              height: 100px;
              margin-left: 0;
            }
            .cart-item-details, .order-items-list {
              align-items: flex-end;
            }
            .quantity-control {
              justify-content: flex-end;
            }
            .cart-summary {
              flex-direction: column;
              gap: 20px;
              align-items: flex-end;
            }
            .cart-summary .subtotal {
              font-size: 16px;
            }
            .cart-summary .checkout-button {
              width: 100%;
              padding: 12px;
            }
            .empty-cart {
              font-size: 16px;
              padding: 30px;
            }
            .order-header {
              flex-direction: column;
              align-items: flex-end;
              gap: 10px;
            }
            .order-status {
              width: fit-content;
            }
            .order-details, .order-item-detail {
              font-size: 13px;
            }
          }

          @media (max-width: 480px) {
            .cart-card, .order-status-card {
              padding: 10px;
              border-radius: 16px;
            }
            .cart-header h1, .order-status-card h2 {
              font-size: 20px;
            }
            .cart-header .clear-cart {
              font-size: 12px;
              padding: 5px 12px;
            }
            .cart-item, .order-item {
              padding: 10px;
            }
            .cart-item img, .order-item-detail img {
              width: 80px;
              height: 80px;
            }
            .cart-item-details h2, .order-header h3 {
              font-size: 14px;
            }
            .cart-item-details .price {
              font-size: 13px;
            }
            .quantity-control button {
              width: 32px;
              height: 32px;
              font-size: 16px;
            }
            .quantity-control span {
              font-size: 14px;
            }
            .remove-item {
              font-size: 12px;
            }
            .cart-summary {
              padding: 15px;
            }
            .cart-summary .subtotal {
              font-size: 14px;
            }
            .cart-summary .checkout-button {
              font-size: 13px;
              padding: 10px;
            }
            .empty-cart {
              font-size: 14px;
              padding: 20px;
            }
            .order-status {
              font-size: 12px;
              padding: 5px 10px;
            }
            .order-total {
              font-size: 13px;
            }
          }

          @media (max-width: 360px) {
            .page-container {
              padding: 10px;
            }
            .cart-header h1, .order-status-card h2 {
              font-size: 18px;
            }
            .cart-header .clear-cart {
              font-size: 11px;
              padding: 4px 10px;
            }
            .cart-item img, .order-item-detail img {
              width: 70px;
              height: 70px;
            }
            .cart-item-details h2, .order-header h3 {
              font-size: 13px;
            }
            .cart-item-details .price {
              font-size: 12px;
            }
            .quantity-control button {
              width: 28px;
              height: 28px;
              font-size: 14px;
            }
            .quantity-control span {
              font-size: 13px;
            }
            .cart-summary .subtotal {
              font-size: 13px;
            }
            .cart-summary .checkout-button {
              font-size: 12px;
              padding: 8px;
            }
            .order-details, .order-item-detail {
              font-size: 12px;
            }
            .order-status {
              font-size: 11px;
            }
          }
        `}
            </style>
            <div className="page-container">
                <div className="cart-card">
                    <div className="cart-header">
                        <h1>سبد خرید</h1>
                        {cartItems.length > 0 && (
                            <button className="clear-cart" onClick={() => setCartItems([])}>
                                خالی کردن سبد
                            </button>
                        )}
                    </div>
                    {cartItems.length === 0 ? (
                        <div className="empty-cart">سبد خرید شما خالی است!</div>
                    ) : (
                        <>
                            <div className="cart-items">
                                {cartItems.map((item) => (
                                    <div key={item.id} className="cart-item">
                                        <img src={item.image} alt={item.name} />
                                        <div className="cart-item-details">
                                            <h2>{item.name}</h2>
                                            <div className="price">{formatPrice(item.price)} تومان</div>
                                            <div className="quantity-control">
                                                <button onClick={() => handleQuantityChange(item.id, 1)}>+</button>
                                                <span>{item.quantity}</span>
                                                <button onClick={() => handleQuantityChange(item.id, -1)}>-</button>
                                            </div>
                                            <button className="remove-item" onClick={() => handleRemoveItem(item.id)}>
                                                حذف
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="cart-summary">
                                <div className="subtotal">
                                    جمع کل: <span>{formatPrice(calculateSubtotal())} تومان</span>
                                </div>
                                <Link href="/checkout" className="checkout-button">
                                    تسویه حساب
                                </Link>
                            </div>
                        </>
                    )}
                </div>
                <div className="order-status-card">
                    <h2>وضعیت سفارش‌ها</h2>
                    {orders.length === 0 ? (
                        <div className="empty-cart">هیچ سفارشی ثبت نشده است!</div>
                    ) : (
                        <div className="order-list">
                            {orders.map((order) => (
                                <div key={order.id} className="order-item">
                                    <div className="order-header">
                                        <h3>سفارش #{order.id}</h3>
                                        <span
                                            className="order-status"
                                            style={{ backgroundColor: getStatusColor(order.status) }}
                                        >
                      {order.status}
                    </span>
                                    </div>
                                    <div className="order-details">
                                        تاریخ سفارش: {order.placedAt}
                                    </div>
                                    <div className="order-items-list">
                                        {order.items.map((item) => (
                                            <div key={item.id} className="order-item-detail">
                        <span>
                          {item.name} (تعداد: {item.quantity})
                        </span>
                                                <img src={item.image} alt={item.name} />
                                            </div>
                                        ))}
                                    </div>
                                    <div className="order-total">
                                        جمع کل: {formatPrice(order.total)} تومان
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default Cart;