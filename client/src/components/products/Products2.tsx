"use client";

import Image from "next/image";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/cartSlice";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { setProducts } from "@/redux/productSlice";
import { truncateText } from "@/utils/truncateText";
import { Rating } from "@mui/material";

export default function Products2() {
  const dispatch = useDispatch();
  const router = useRouter();
  const products = useSelector((state: any) => state.comb.prod.allProduct);

  const updateCart = ({
    id,
    title,
    description,
    image,
    price,
    rating,
    category,
  }: {
    id: any;
    title: any;
    description: any;
    image: any;
    price: any;
    rating: any;
    category: any;
  }) => {
    dispatch(
      addToCart({ id, title, description, image, price, rating, category })
    );
  };

  const getProducts2 = async () => {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    dispatch(setProducts(data));
  };

  useEffect(() => {
    getProducts2();
  }, []);

  return (
    <div className="productsWrapper container mx-auto my-8 md:px-5 py-10 ">
      <h1 className="font-bold font-kanit text-4xl py-12 text-center">
        Best Seller
      </h1>
      <div className="cardsWrapper grid md:grid-cols-2 lg:grid-cols-3 gap-y-6 md:gap-14">
        {products.map((product: any) => (
          <div className="card col-span-1 cursor-pointer border-[1.2px] border-slate-200 bg-slate-50 rounded-sm p-2  text-center text-sm">
            <div
              onClick={() => router.push(`/productDetails/${product?.id}`)}
              key={product?.id}
              className="cardBody flex flex-col items-center w-full gap-1 transition hover:scale-105"
            >
              <div className="aspect-square overflow-hidden relative">
                <Image
                  src={product?.image}
                  width={150}
                  height={50}
                  className=" object-contain cursor-pointer"
                  alt="product title"
                ></Image>
              </div>
              <div className="mt-4">
                <Link
                  href={{
                    pathname: `/productDetails/${product?.id}`,
                    query: {
                      id: product?.id,
                    },
                  }}
                  className="cursor-pointer"
                >
                  {truncateText(product?.title)}
                </Link>
              </div>
              <div>
                <Rating value={product?.rating.rate} readOnly />
              </div>
              <div className="price font-bold text-xl">${product?.price}</div>
            </div>
            <div className="button p-3">
              <button
                className="bg-red-500 text-white w-32 h-10 rounded-full"
                onClick={() =>
                  updateCart({
                    id: product?.id,
                    title: product?.title,
                    description: product?.desc,
                    image: product?.image,
                    price: product?.price,
                    rating: product?.rating,
                    category: product?.category,
                  })
                }
              >
                Add to cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
