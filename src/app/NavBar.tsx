'use client';

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import SonarIQlogo from "./SonarIQlogo.svg";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="px-8 py-5 bg-[#fdf6e3] text-black shadow-md w-full">
      <div className="max-w-8xl mx-auto w-full flex items-center justify-between">
        {/* Left: Logo */}
        <Link href="/" className="flex items-center text-xl font-bold mr-auto">
          <Image
            src={SonarIQlogo}
            alt="SonarIQ Logo"
            width={32}
            height={32}
          />
        </Link>

        {/* Center: Navigation */}
        <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center space-x-6 text-lg">
          <Link 
            href="/" 
            className="px-4 py-2 rounded-lg transition-all duration-300 hover:bg-indigo-200 hover:shadow-lg transform hover:scale-105"
          >
            Home
          </Link>
          <Link 
            href="/features" 
            className="px-4 py-2 rounded-lg transition-all duration-300 hover:bg-indigo-200 hover:shadow-lg transform hover:scale-105"
          >
            Features
          </Link>
          <Link 
            href="/pricing" 
            className="px-4 py-2 rounded-lg transition-all duration-300 hover:bg-indigo-200 hover:shadow-lg transform hover:scale-105"
          >
            Pricing
          </Link>

          <div className="relative">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="px-4 py-2 rounded-lg transition-all duration-300 hover:bg-indigo-200 hover:shadow-lg transform hover:scale-105 focus:outline-none"
            >
              About ▾
            </button>

            {isOpen && (
              <div className="absolute right-0 mt-2 w-32 bg-white text-black rounded-lg shadow-lg z-50 border">
                <Link
                  href="/about/team"
                  className="block px-4 py-2 hover:bg-gray-100 first:rounded-t-lg"
                  onClick={() => setIsOpen(false)}
                >
                  Team
                </Link>
                <Link
                  href="/about/mission"
                  className="block px-4 py-2 hover:bg-gray-100 last:rounded-b-lg"
                  onClick={() => setIsOpen(false)}
                >
                  Mission
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
