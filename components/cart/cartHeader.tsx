"use client";
import React from 'react';
import './styles/cart.css';

interface CartHeaderProps {
    cartItems: { id: string }[];
    clearCart: () => void;
}

const CartHeader: React.FC<CartHeaderProps> = ({ cartItems, clearCart }) => {
    return (
        <div className="cart-header">
            <h1>سبد خرید</h1>
            {cartItems.length > 0 && (
                <button className="clear-cart" onClick={clearCart}>
                    خالی کردن سبد
                </button>
            )}
        </div>
    );
};

export default CartHeader;