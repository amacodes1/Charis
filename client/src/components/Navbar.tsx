"use client";
import Link from "next/link";
import { ShoppingCart, User } from "phosphor-react";
import { useSelector } from "react-redux";
import SearchBar from "./SearchBar";
import { RootState } from "@/redux/store";

export default function Navbar() {
  const cart = useSelector(
    (state: RootState) => state.cart?.productList ?? []
  );

  // Getting the count of items on the cart icon
  const getItemsCount = () => {
    return cart.reduce(
      (accumulator: any, item: any) => accumulator + item.quantity,
      0
    );
  };
  // console.log(getItemsCount());

  return (
    <nav className="bg-teal-200 w-full h-16 p-4 sticky top-0 z-50">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold">
          <Link href="/" className="text-black no-underline font-rem">
            Charis.
          </Link>
        </h1>

        <div className="flex-1 max-w-2xl mx-8">
          <SearchBar />
        </div>

        <div className="flex items-center space-x-4">
          <Link href="/register">
            <User size={32} />
          </Link>
          
          <Link href="/cart" className="relative">
            <ShoppingCart size={32} />
            <span className="text-xs bg-red-500 text-white rounded-full px-1.5 py-0.5 absolute -top-2 -right-2">
              {getItemsCount()}
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
