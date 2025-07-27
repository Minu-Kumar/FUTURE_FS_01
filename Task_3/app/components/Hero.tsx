'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative w-full h-[80vh]">
      {/* Background Banner */}
      <Image
        src="/banner.png"
        alt="Nike Banner"
        fill
        priority
        className="object-cover"
      />

      {/* Button and Text Overlay */}
      <div className="absolute top-1/2 left-12 transform -translate-y-1/2 z-10 space-y-4">
        <h1 className="text-6xl font-bold text-black drop-shadow-lg">
          JUST DO IT
        </h1>
        <p className="text-lg text-gray-800 max-w-sm">
          Step into the future of sportswear with Nike.
        </p>
        <Link href="/products">
          <button className="bg-black text-white font-bold px-6 py-3 rounded-lg shadow-lg hover:bg-gray-900 border-2 border-white transition">
            ORDER NOW
          </button>
        </Link>
      </div>

      {/* Subtle dark overlay for contrast */}
      <div className="absolute inset-0 bg-black/10"></div>
    </section>
  );
}
