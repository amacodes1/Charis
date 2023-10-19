"use client";

import NavigationButton from "@/components/NavigationButton";
import Newsletter from "@/components/Newsletter";
import ProductCard from "@/components/products/ProductCard";
import Products2 from "@/components/products/Products2";
import { Slider } from "@/components/Slider";
import Timer from "@/components/Timer";
import Loading from "./loading";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/ReactToastify.css";

export default function Home() {
  const [loading] = useState();
  return (
    <>
      <main className="">
        {loading ? (
          <Loading />
        ) : (
          <>
            <Slider />
            <NavigationButton />
            <ProductCard />
            <Timer />
            <Products2 />
            <Newsletter />
          </>
        )}
      </main>
      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
}
