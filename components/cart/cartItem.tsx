"use client";
import React from 'react';
import './styles/cart.css';

interface CartItemProps {
    id: string;
    name: string;
    price: number;
    quantity: number;
    image: string;
    handleQuantityChange: (id: string, delta: number) => void;
    handleRemoveItem: (id: string) => void;
    formatPrice: (price: number) => string;
}

const CartItem: React.FC<CartItemProps> = ({
                                               id,
                                               name,
                                               price,
                                               quantity,
                                               image,
                                               handleQuantityChange,
                                               handleRemoveItem,
                                               formatPrice,
                                           }) => {
    return (
        <div className="cart-item">
            <img src={image} alt={name} />
            <div className="cart-item-details">
                <h2>{name}</h2>
                <div className="price">{formatPrice(price)} تومان</div>
                <div className="quantity-control">
                    <button onClick={() => handleQuantityChange(id, 1)}>+</button>
                    <span>{quantity}</span>
                    <button onClick={() => handleQuantityChange(id, -1)}>-</button>
                </div>
                <button className="remove-item" onClick={() => handleRemoveItem(id)}>
                    حذف
                </button>
            </div>
        </div>
    );
};

export default CartItem;