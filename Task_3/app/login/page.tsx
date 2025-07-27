"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Add real authentication logic later if needed
    router.push("/products"); // Redirect to products after login
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-900 to-blue-700 relative">
      {/* NIKE Watermark */}
      <h1 className="absolute text-[15rem] text-white opacity-10 select-none">
        NIKE
      </h1>

      {/* Login Box */}
      <div className="bg-transparent text-white p-8 rounded-lg shadow-lg w-96 z-10">
        <h1 className="text-2xl font-bold text-center mb-6">Login</h1>

        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-3 rounded-md border border-white bg-transparent text-white placeholder-gray-300"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 rounded-md border border-white bg-transparent text-white placeholder-gray-300"
            required
          />

          {/* Green Login Button */}
          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-800 text-white font-bold py-3 rounded-md transition"
          >
            Login
          </button>
        </form>

        {/* Sign Up Redirect Button */}
        <div className="text-center mt-4">
          <p className="text-sm">Don’t have an account?</p>
          <button
            onClick={() => router.push("/signup")}
            className="mt-2 w-full bg-blue-600 hover:bg-blue-800 text-white font-bold py-3 rounded-md transition"
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}
