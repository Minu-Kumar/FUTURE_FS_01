import React from 'react';
import { useOrderHistory } from '../context/OrderHistoryContext';

const OrderHistory = () => {
  const { orderHistory } = useOrderHistory();

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Your Order History</h2>

      {orderHistory.length === 0 ? (
        <p className="text-gray-600">You have no previous orders.</p>
      ) : (
        <div className="space-y-6">
          {orderHistory.map((order) => (
            <div
              key={order.id}
              className="border border-gray-300 p-4 rounded-lg shadow bg-white"
            >
              <p className="font-semibold text-lg mb-2">
                Order ID: {order.id}
              </p>
              <p className="text-sm text-gray-500 mb-2">
                Date: {order.date}
              </p>
              <ul className="pl-4 list-disc text-gray-800">
                {order.items.map((item) => (
                  <li key={item.id}>
                    {item.name} – ₹{item.price} × {item.quantity}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default OrderHistory;
