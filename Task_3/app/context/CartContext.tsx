"use client";

import { createContext, useContext, useState, ReactNode } from "react";

export type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
};

type CartContextType = {
  cart: Product[];
  orders: Product[][]; // Array of orders, each order is a list of products
  addToCart: (product: Product) => void;
  removeFromCart: (id: number) => void;
  addOrder: (orderItems: Product[]) => void;
  clearCart: () => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<Product[]>([]);
  const [orders, setOrders] = useState<Product[][]>([]); // Store orders as arrays

  const addToCart = (product: Product) => setCart((prev) => [...prev, product]);

  const removeFromCart = (id: number) =>
    setCart((prev) => prev.filter((item) => item.id !== id));

  const addOrder = (orderItems: Product[]) => {
    setOrders((prev) => [...prev, orderItems]); // Save whole cart as one order
    setCart([]); // Clear cart after checkout
  };

  const clearCart = () => setCart([]);

  return (
    <CartContext.Provider
      value={{ cart, orders, addToCart, removeFromCart, addOrder, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within CartProvider");
  return context;
}
