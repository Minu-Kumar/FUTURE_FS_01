"use client";

import Image from "next/image";
import { useCart } from "../context/CartContext";

const products = [
  { id: 1, name: "Nike Air Zoom", price: 120, image: "/shoes1.png" },
  { id: 2, name: "Nike Revolution", price: 90, image: "/shoes2.png" },
  { id: 3, name: "Nike Pegasus", price: 150, image: "/shoes3.png" },
  { id: 4, name: "Nike Infinity", price: 180, image: "/shoes4.png" },
  { id: 5, name: "Nike ZoomX", price: 200, image: "/shoes5.png" },
];

export default function ProductsPage() {
  const { addToCart } = useCart();

  return (
    <main className="bg-gray-50 min-h-screen p-8">
      <h1 className="text-3xl font-bold text-center mb-8">Our Products</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white border rounded-lg p-4 shadow hover:shadow-lg transition flex flex-col items-center"
          >
            <Image
              src={product.image}
              alt={product.name}
              width={200}
              height={200}
              className="object-contain"
            />
            <h2 className="mt-4 text-lg font-semibold text-center">{product.name}</h2>
            <p className="text-center text-green-600 font-bold">${product.price}</p>

            <button
              onClick={() => addToCart(product)}
              className="mt-4 bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-md"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}
