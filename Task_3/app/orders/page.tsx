"use client";

import { useCart } from "../context/CartContext";
import Image from "next/image";

// Match Product type used in Cart
type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
};

export default function OrdersPage() {
  const { orders } = useCart();

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-3xl font-bold text-center mb-6">Order History</h1>

      {orders.length === 0 ? (
        <p className="text-center text-gray-600">No past orders yet.</p>
      ) : (
        <div className="space-y-6 max-w-3xl mx-auto">
          {orders.map((order: Product[], index: number) => (
            <div
              key={index}
              className="bg-white p-4 rounded-lg shadow space-y-4"
            >
              <h2 className="text-lg font-semibold">Order #{index + 1}</h2>
              {order.map((item: Product) => (
                <div key={item.id} className="flex items-center space-x-4">
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
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
