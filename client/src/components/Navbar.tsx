"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { ShoppingCart, User } from "phosphor-react";
import { useSelector } from "react-redux";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(1000);
  const cart = useSelector((state: any) => state.comb.cart.productList);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWindowWidth(window.innerWidth);
    });
  }, []);

  // Getting the count of items on the cart icon
  const getItemsCount = () => {
    return cart.reduce(
      (accumulator: any, item: any) => accumulator + item.quantity,
      0
    );
  };
  // console.log(getItemsCount());

  return (
    <nav className="bg-teal-200 w-full h-24 p-4 sticky">
      <div className="md:hidden">
        {mobileMenuOpen ? (
          <button
            onClick={closeMobileMenu}
            className="text-black focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-10"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        ) : (
          <button
            className="text-black focus:outline-none"
            onClick={toggleMobileMenu}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-12"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        )}
      </div>
      <div className="flex md:flex-row mx-auto md:mt-3">
        <h1
          className={`text-4xl md:text-5xl font-bold pl-24 md:pl-10 mb-2 md:mb-0 z-20 ${
            mobileMenuOpen ? "hidden" : "block"
          }`}
        >
          <Link href="/" className="text-black no-underline pb-3 font-rem">
            Charis.
          </Link>
        </h1>

        <div
          className={`flex-1 md:space-x-2 pb-3 md:block md:pb-0 ${
            mobileMenuOpen ? "p-4 md:p-0 block" : "hidden"
          }`}
        >
          <div className="flex md:flex-row flex-col items-center md:mx-auto h-screen md:h-auto ltr mt-2">
            <Link
              href="/"
              className="catLink"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              Home
            </Link>
            <div className="relative inline-block group">
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="catLink"
              >
                Categories
              </Link>
              <div className="hidden group-hover:block absolute space-y-4 bg-black text-white px-6 py-6 gap-4 w-36 top-full left-16">
                <Link href="#" className="block text-white hover:text-gray-300">
                  Music
                </Link>
                <Link
                  href="#"
                  className="block text-white hover:text-gray-300 "
                >
                  Movies
                </Link>
                <Link href="#" className="block text-white hover:text-gray-300">
                  Sports
                </Link>
                <Link href="#" className="block text-white hover:text-gray-300">
                  Politics
                </Link>
                <Link href="#" className="block text-white hover:text-gray-300">
                  Food
                </Link>
              </div>
            </div>
            <Link
              href="/"
              className="catLink"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              About
            </Link>
            <Link
              href="/"
              className="catLink"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              Contact
            </Link>
          </div>
        </div>

        <div
          className={`flex flex-row relative ltr ml-8 md:ml-8 lg:ml-2 items-center       max-w-xs w-fit h-fit bg-black rounded-full cursor-pointer overflow-hidden ${
            mobileMenuOpen ? "hidden" : "block"
          }`}
        >
          <svg
            className="search_icon h-6 py-1 px-1 pl-2 fill-stone-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 48  48"
          >
            <path d="M46.599 46.599a4.498 4.498 0 0 1-6.363 0l-7.941-7.941C29.028 40.749 25.167 42 21 42 9.402 42 0 32.598 0 21S9.402 0 21 0s21 9.402 21 21c0 4.167-1.251 8.028-3.342 11.295l7.941 7.941a4.498 4.498 0 0 1 0 6.363zM21 6C12.717 6 6 12.714 6 21s6.717 15 15 15c8.286 0 15-6.714 15-15S29.286 6 21 6z"></path>
          </svg>
          <input
            className={`inputBox bg-transparent outline-inherit border-0 w-40 py-2 pr-2 text-sm ${
              windowWidth > 640 ? "block" : "hidden"
            }`}
            placeholder="search products"
            id="inputBox"
            type="text"
          />
        </div>

        <div className="account ml-4">
          <Link href="/register">
            <User size={32} />
          </Link>
        </div>

        <div className="cart ml-4 relative">
          <Link href="/cart">
            <ShoppingCart size={32} className="" />
            <p className="absolute top-0 right-0">({getItemsCount()})</p>
          </Link>
        </div>
      </div>
    </nav>
  );
}
