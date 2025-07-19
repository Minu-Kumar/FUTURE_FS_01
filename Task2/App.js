import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';
import Products from './pages/Products';
import Cart from './pages/Cart';
import OrderHistory from './pages/OrderHistory';
import { CartProvider } from './context/CartContext';
import { OrderHistoryProvider } from './context/OrderHistoryContext';
import Checkout from './pages/Checkout';

function App() {
  return (
    <CartProvider>
      <OrderHistoryProvider>
        <Router>
          <div className="bg-gray-100 min-h-screen">
            <Navbar />
            <Routes>
              {/* 👇 Login page is the default (/) route */}
              <Route path="/" element={<Login />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/home" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/order-history" element={<OrderHistory />} />
              <Route path="/checkout" element={<Checkout />} />
            </Routes>
          </div>
        </Router>
      </OrderHistoryProvider>
    </CartProvider>
  );
}

export default App;

