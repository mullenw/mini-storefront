'use client';
import React from 'react';

export default function CartSummary({ cart }) {
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="border p-3 rounded bg-gray-50 text-center">
      <p className="font-medium">Cart Items: {cart.length}</p>
      <p className="text-blue-600 font-semibold">Total: ${total.toFixed(2)}</p>
    </div>
  );
}
