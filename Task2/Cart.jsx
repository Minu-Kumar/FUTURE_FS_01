import React from 'react';
import { useCart } from '../context/CartContext';
import { Link, useNavigate } from 'react-router-dom'; // ✅ Import useNavigate

const Cart = () => {
  const { cartItems, removeFromCart } = useCart();
  const navigate = useNavigate(); // ✅ Initialize navigator

  const totalPrice = cartItems.reduce((acc, item) => {
    const numericPrice = parseInt(item.price.replace('₹', ''));
    return acc + numericPrice;
  }, 0);

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-10">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-indigo-700">🛒 Your Cart</h2>

        {cartItems.length === 0 ? (
          <div className="text-center text-lg">
            <p>Your cart is empty.</p>
            <Link to="/products" className="text-indigo-600 underline mt-4 inline-block">
              Go back to products
            </Link>
          </div>
        ) : (
          <>
            <div className="grid gap-6">
              {cartItems.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center bg-white p-4 rounded-lg shadow"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-24 h-24 object-cover rounded-md"
                  />
                  <div className="ml-4 flex-grow">
                    <h3 className="text-lg font-semibold">{item.name}</h3>
                    <p className="text-indigo-600 font-bold">{item.price}</p>
                  </div>
                  <button
                    onClick={() => removeFromCart(index)}
                    className="text-red-600 hover:text-red-800"
                  >
                    ❌ Remove
                  </button>
                </div>
              ))}
            </div>

            <div className="mt-8 flex justify-between items-center">
              <h3 className="text-2xl font-bold">
                Total: ₹{totalPrice}
              </h3>
              <button
                className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
                onClick={() => navigate('/checkout')} // ✅ Add redirect here
              >
                Proceed to Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
