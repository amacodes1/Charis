"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/cartSlice";
import Link from "next/link";

export default function Products2() {
  const [products2, setProducts2] = useState<any>([]);
  const dispatch = useDispatch();

  const updateCart = ({
    id,
    title,
    image,
    price,
    category,
  }: {
    id: any;
    title: any;
    image: any;
    price: any;
    category: any;
  }) => {
    dispatch(addToCart({ id, title, image, price, category }));
  };

  const getProducts = async () => {
    const res = await fetch("https://fakestoreapi.com/products?limit=6");
    const data = await res.json();
    setProducts2(data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="productsWrapper container mx-auto my-8 md:px-5 py-10 ">
      <h1 className="font-bold font-kanit text-4xl py-12 text-center">
        Best Seller
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-y-6 md:gap-14">
        {products2.map((product: any) => (
          <div
            key={product?.id}
            className="card flex flex-col p-4 text-l w-72 max-w-full h-96 justify-between m-4 shadow-lg rounded shadow-teal-200"
          >
            <Image
              src={product?.image}
              width={150}
              height={50}
              className="py-2 md:py-1 mt-4 mx-auto w-24 rounded text-teal-100"
              alt="images"
            ></Image>
            <h4>{product?.title}</h4>
            <span className="price font-bold text-xl">${product?.price}</span>
            <div className="buttons flex flex-row p-3 space-x-4">
              <button
                className="bg-red-500 text-white w-28 h-10 rounded-full"
                onClick={() =>
                  updateCart({
                    id: product?.id,
                    title: product?.title,
                    image: product?.image,
                    price: product?.price,
                    category: product?.category,
                  })
                }
              >
                Add to cart
              </button>
              <button className="bg-yellow-300 text-black w-28 h-10 rounded-full">
                <Link href="/cart"></Link> Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
