"use client";

import Link from "next/link";

export default function Signup() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-900 to-blue-600 relative">
      {/* NIKE Watermark */}
      <h1 className="absolute text-[15rem] text-white opacity-10 select-none">
        NIKE
      </h1>

      {/* Sign Up Box */}
      <div className="bg-transparent p-10 rounded-xl shadow-xl z-10 flex flex-col gap-6 text-white w-[300px] text-center">
        <h2 className="text-3xl font-bold">Sign Up</h2>

        {/* Input Fields */}
        <input
          type="text"
          placeholder="Username"
          className="border border-white bg-transparent text-white p-3 rounded"
        />
        <input
          type="email"
          placeholder="Email"
          className="border border-white bg-transparent text-white p-3 rounded"
        />
        <input
          type="password"
          placeholder="Password"
          className="border border-white bg-transparent text-white p-3 rounded"
        />

        {/* Big Green Sign Up Button */}
        <button className="bg-green-600 hover:bg-green-800 text-white py-3 px-6 rounded text-lg font-bold transition w-full">
          Sign Up
        </button>

        {/* Back to Login Button */}
        <Link href="/login">
          <button className="bg-blue-600 hover:bg-blue-800 text-white py-2 px-4 rounded transition w-full mt-4">
            Back to Login
          </button>
        </Link>
      </div>
    </div>
  );
}
