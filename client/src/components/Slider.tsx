"use client";

import { useEffect } from "react";
import { setData, nextSlide, prevSlide, dotSlide } from "@/redux/sliderSlice";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";

export const Slider = () => {
  const dispatch = useDispatch();
  const { data, currentIndex } = useSelector((state: any) => state.comb.slider);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://fakestoreapi.com/products?limit=4");
      const jsonData = await res.json();
      dispatch(setData(jsonData));
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  return (
    <div className="relative pb-4 bg-orange-500 z-0">
      <div className="p-12">
        {data &&
          data.map((item: any) => (
            <div
              key={item.id}
              className={
                parseInt(item.id) === currentIndex
                  ? "opacity-100 duration-700 ease-in-out scale-100"
                  : "opacity-0 duration-700 ease-in-out scale-95"
              }
            >
              <div className="flex">
                <div className="">
                  <p className="text-black text-4xl font-bold font-kanit">
                    {parseInt(item.id) === currentIndex && item.title}
                  </p>
                </div>
                <div>
                  {parseInt(item.id) === currentIndex && (
                    <Image
                      className="h-[500px] w-96 mr-4 bg-orange-400"
                      src={item.image}
                      alt="header"
                    />
                  )}
                </div>
              </div>
            </div>
          ))}
      </div>
      <div className="flex absolute bottom-12 left-[45%]">
        {data &&
          data.map((item: any) => (
            <div className="mr-4" key={item.id}>
              <div
                className={
                  item.id === currentIndex
                    ? "bg-green-300 rounded-full p-4 cursor-pointer"
                    : "bg-white rounded-full p-4 cursor-pointer"
                }
                onClick={() => dispatch(dotSlide(item.id))}
              ></div>
            </div>
          ))}
      </div>
      <div>
        <button
          className="absolute top-[50%] left-4 bg-white rounded-full p-2 hover:bg-green-300"
          onClick={() => dispatch(prevSlide())}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75"
            />
          </svg>
        </button>
        <button
          className="absolute top-[50%] right-4 bg-white rounded-full p-2 hover:bg-green-300"
          onClick={() => dispatch(nextSlide())}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};
