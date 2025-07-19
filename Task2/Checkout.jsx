import React from 'react';
import { useCart } from '../context/CartContext';
import { useOrderHistory } from '../context/OrderHistoryContext';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
  const { cartItems, clearCart } = useCart();
  const { addOrder } = useOrderHistory(); // ✅ correct hook
  const navigate = useNavigate();

  const handleCheckout = () => {
    if (cartItems.length === 0) {
      alert("Your cart is empty!");
      return;
    }

    addOrder({
      id: Date.now(),
      items: cartItems,
      date: new Date().toLocaleString(),
    });

    clearCart();
    navigate('/order-history'); // ✅ auto redirect
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Checkout</h2>
      <ul>
        {cartItems.map(item => (
          <li key={item.id} className="mb-2">
            {item.name} - ₹{item.price} x {item.quantity}
          </li>
        ))}
      </ul>
      <button
        onClick={handleCheckout}
        className="mt-4 px-4 py-2 bg-green-500 text-white rounded"
      >
        Proceed to Checkout
      </button>
    </div>
  );
};

export default Checkout;
