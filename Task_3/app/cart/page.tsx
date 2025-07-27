"use client";

import { useCart } from "../context/CartContext";
import Image from "next/image";
import { useRouter } from "next/navigation";

// Define Product type (match your context)
type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
};

export default function CartPage() {
  const { cart, removeFromCart, addOrder } = useCart();
  const router = useRouter();

  // Calculate total with types
  const total = cart.reduce((sum: number, item: Product) => sum + item.price, 0);

  const handleCheckout = () => {
    addOrder(cart);
    router.push("/orders"); // Redirect to orders page
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-3xl font-bold text-center mb-6">Your Cart</h1>

      {cart.length === 0 ? (
        <p className="text-center text-gray-600">Your cart is empty.</p>
      ) : (
        <>
          <div className="space-y-4 max-w-2xl mx-auto">
            {cart.map((item: Product) => (
              <div
                key={item.id}
                className="flex items-center justify-between bg-white p-4 shadow rounded-lg"
              >
                <div className="flex items-center space-x-4">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={80}
                    height={80}
                    className="object-contain"
                  />
                  <div>
                    <p className="font-semibold">{item.name}</p>
                    <p className="text-green-600">${item.price}</p>
                  </div>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          <div className="text-center mt-6">
            <p className="text-xl font-bold mb-4">
              Total: <span className="text-green-600">${total}</span>
            </p>
            <button
              onClick={handleCheckout}
              className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg text-lg font-bold"
            >
              Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
}
