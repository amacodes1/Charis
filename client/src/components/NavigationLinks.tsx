"use client";
import Link from "next/link";

export default function NavigationLinks() {
  return (
    <nav className="bg-teal-200 shadow-sm border-t border-gray-500 top-20 z-40">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-center space-x-8 h-12">
          <Link href="/" className="text-gray-700 hover:text-teal-600 font-medium">
            Home
          </Link>
          
          <div className="relative group">
            <Link href="/" className="text-gray-700 hover:text-teal-600 font-medium">
              Categories
            </Link>
            <div className="hidden group-hover:block absolute bg-white shadow-lg border rounded-md py-2 w-36 top-full left-0 z-50">
              <Link href="#" className="block px-4 py-2 text-gray-700 hover:bg-teal-50">
                Music
              </Link>
              <Link href="#" className="block px-4 py-2 text-gray-700 hover:bg-teal-50">
                Movies
              </Link>
              <Link href="#" className="block px-4 py-2 text-gray-700 hover:bg-teal-50">
                Sports
              </Link>
              <Link href="#" className="block px-4 py-2 text-gray-700 hover:bg-teal-50">
                Politics
              </Link>
              <Link href="#" className="block px-4 py-2 text-gray-700 hover:bg-teal-50">
                Food
              </Link>
            </div>
          </div>
          
          <Link href="/" className="text-gray-700 hover:text-teal-600 font-medium">
            About
          </Link>
          
          <Link href="/" className="text-gray-700 hover:text-teal-600 font-medium">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}