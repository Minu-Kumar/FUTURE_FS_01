// src/context/OrderHistoryContext.jsx
import React, { createContext, useState, useContext } from 'react';

export const OrderHistoryContext = createContext();

export const OrderHistoryProvider = ({ children }) => {
  const [orderHistory, setOrderHistory] = useState([]);

  const addOrder = (order) => {
    setOrderHistory((prev) => [...prev, order]);
  };

  return (
    <OrderHistoryContext.Provider value={{ orderHistory, addOrder }}>
      {children}
    </OrderHistoryContext.Provider>
  );
};

// Optional hook
export const useOrderHistory = () => {
  const context = useContext(OrderHistoryContext);
  if (!context) {
    throw new Error('useOrderHistory must be used within OrderHistoryProvider');
  }
  return context;
};
