"use client";
import Link from "next/link";

export default function NavigationLinks() {
  return (
    <nav className="bg-teal-200 shadow-sm border-t border-gray-500 top-20 z-40">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-center space-x-8 h-12">
          <Link href="/" className="text-gray-900 hover:text-teal-600 font-medium">
            Home
          </Link>
          
          <div className="relative group">
            <Link href="/" className="text-gray-900 hover:text-teal-600 font-medium">
              Categories
            </Link>
            <div className="hidden group-hover:block absolute bg-black shadow-lg rounded-md py-2 w-36 top-8 -left-5 z-50">
              <Link href="#" className="block px-4 py-2 text-white hover:text-teal-200">
                Music
              </Link>
              <Link href="#" className="block px-4 py-2 text-white hover:text-teal-200">
                Movies
              </Link>
              <Link href="#" className="block px-4 py-2 text-white hover:text-teal-200">
                Sports
              </Link>
              <Link href="#" className="block px-4 py-2 text-white hover:text-teal-200">
                Politics
              </Link>
              <Link href="#" className="block px-4 py-2 text-white hover:text-teal-200">
                Food
              </Link>
            </div>
          </div>
          
          <Link href="/" className="text-gray-900 hover:text-teal-600 font-medium">
            Shop
          </Link>
          <Link href="/" className="text-gray-900 hover:text-teal-600 font-medium">
            About
          </Link>
          
          <Link href="/" className="text-gray-900 hover:text-teal-600 font-medium">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}