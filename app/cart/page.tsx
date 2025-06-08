"use client";
import React, { useState } from 'react';
import CartHeader from '@/components/cart/cartHeader';
import CartItem from '@/components/cart/cartItem';
import CartSummary from '@/components/cart/cartSummary';
import OrderItem from '@/components/cart/orderItem';
import '@/components/cart/styles/cart.css';

interface CartItemType {
    id: string;
    name: string;
    price: number;
    quantity: number;
    image: string;
}

interface Order {
    id: string;
    items: CartItemType[];
    total: number;
    status: 'در حال آماده‌سازی' | 'ارسال' | 'تحویل داده شده';
    placedAt: string;
}

const Cart: React.FC = () => {
    const [cartItems, setCartItems] = useState<CartItemType[]>([
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
            items: [{ id: '3', name: 'ساندویچ مرغ', price: 90000, quantity: 1, image: '/images/sandwich.png' }],
            total: 90000,
            status: 'ارسال',
            placedAt: '1404/02/15 12:00',
        },
        {
            id: 'order3',
            items: [{ id: '4', name: 'کباب کوبیده', price: 200000, quantity: 2, image: '/images/kebab.png' }],
            total: 400000,
            status: 'تحویل داده شده',
            placedAt: '1404/02/14 18:45',
        },
    ]);

    const handleQuantityChange = (id: string, delta: number) => {
        setCartItems((prevItems) =>
            prevItems
                .map((item) => (item.id === id ? { ...item, quantity: Math.max(0, item.quantity + delta) } : item))
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

    const getStatusColor = (status: string) => {
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
        <div className="page-container">
            <div className="cart-card">
                <CartHeader cartItems={cartItems} clearCart={() => setCartItems([])} />
                {cartItems.length === 0 ? (
                    <div className="empty-cart">سبد خرید شما خالی است!</div>
                ) : (
                    <>
                        <div className="cart-items">
                            {cartItems.map((item) => (
                                <CartItem
                                    key={item.id}
                                    {...item}
                                    handleQuantityChange={handleQuantityChange}
                                    handleRemoveItem={handleRemoveItem}
                                    formatPrice={formatPrice}
                                />
                            ))}
                        </div>
                        <CartSummary subtotal={calculateSubtotal()} formatPrice={formatPrice} />
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
                            <OrderItem key={order.id} order={order} getStatusColor={getStatusColor} formatPrice={formatPrice} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Cart;