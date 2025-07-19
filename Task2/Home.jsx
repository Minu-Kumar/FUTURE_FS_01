// src/pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const user = JSON.parse(localStorage.getItem('user'));

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-purple-500 to-indigo-600 text-white">
      <h1 className="text-4xl font-bold mb-4">Welcome to Shopora</h1>
      {user && (
        <p className="text-lg mb-6">Hello, <span className="font-semibold">{user.email}</span>!</p>
      )}
      <Link
        to="/products"
        className="bg-white text-indigo-600 px-6 py-3 rounded-lg shadow-lg hover:bg-gray-100 transition"
      >
        Start Shopping
      </Link>
    </div>
  );
};

export default Home;
