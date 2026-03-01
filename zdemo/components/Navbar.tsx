"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-black text-white px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">ZovicAI</h1>

      <div className="space-x-6 hidden md:flex">
        <Link href="/">Explore</Link>
        <Link href="/effects">Effects</Link>
        <Link href="#">Video</Link>
        <Link href="#">Pricing</Link>
      </div>

      <div className="space-x-3">
        <button className="text-sm">Login</button>
        <button className="bg-lime-400 text-black px-4 py-1 rounded-md text-sm font-medium">
          Sign Up
        </button>
      </div>
    </nav>
  );
}