"use client";
import React from 'react';
import Link from 'next/link';
import './styles/cart.css';

interface CartSummaryProps {
    subtotal: number;
    formatPrice: (price: number) => string;
}

const CartSummary: React.FC<CartSummaryProps> = ({ subtotal, formatPrice }) => {
    return (
        <div className="cart-summary">
            <div className="subtotal">
                جمع کل: <span>{formatPrice(subtotal)} تومان</span>
            </div>
            <Link href="/checkout" className="checkout-button">
                تسویه حساب
            </Link>
        </div>
    );
};

export default CartSummary;