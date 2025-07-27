"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCart } from "../context/CartContext";

export default function Navbar() {
  const pathname = usePathname();
  const { cart } = useCart();

  return (
    <nav className="fixed top-0 left-0 right-0 bg-blue-800 text-white shadow-md z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/products" className="text-2xl font-bold">
          NIKE Store
        </Link>

        {/* Nav Links */}
        <div className="flex items-center space-x-6">
          {/* Products Page */}
          <Link
            href="/products"
            className={`hover:text-yellow-400 ${
              pathname === "/products" ? "text-yellow-400" : ""
            }`}
          >
            Products
          </Link>

          {/* Orders Page (NEW) */}
          <Link
            href="/orders"
            className={`hover:text-yellow-400 ${
              pathname === "/orders" ? "text-yellow-400" : ""
            }`}
          >
            My Orders
          </Link>

          {/* Cart Page with Counter */}
          <Link href="/cart" className="relative">
            🛒
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                {cart.length}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
}
