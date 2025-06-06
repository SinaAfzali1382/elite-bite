"use client";
import React from 'react';
import './styles/cart.css';

interface CartItem {
    id: string;
    name: string;
    price: number;
    quantity: number;
    image: string;
}

interface OrderItemProps {
    order: {
        id: string;
        items: CartItem[];
        total: number;
        status: 'در حال آماده‌سازی' | 'ارسال' | 'تحویل داده شده';
        placedAt: string;
    };
    getStatusColor: (status: string) => string;
    formatPrice: (price: number) => string;
}

const OrderItem: React.FC<OrderItemProps> = ({ order, getStatusColor, formatPrice }) => {
    return (
        <div className="order-item">
            <div className="order-header">
                <h3>سفارش #{order.id}</h3>
                <span className="order-status" style={{ backgroundColor: getStatusColor(order.status) }}>
          {order.status}
        </span>
            </div>
            <div className="order-details">تاریخ سفارش: {order.placedAt}</div>
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
            <div className="order-total">جمع کل: {formatPrice(order.total)} تومان</div>
        </div>
    );
};

export default OrderItem;