import React from 'react';

const Cart = ({ cart }) => {
    return (
        <div className="justify-start text-left bg-gray-100 p-4">
            <p className="text-3xl">Your Cart</p>
            <p>Standard Tickets: {cart.standard}</p>
            <p>Elite Tickets: {cart.elite}</p>
        </div>
    );
};

export default Cart;