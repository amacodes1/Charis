"use client";

import { useEffect } from "react";
import { setData, nextSlide, prevSlide, dotSlide } from "@/redux/sliderSlice";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import { RootState } from "@/redux/store";
import { sliderData } from "@/data/sliderData";

export const Slider = () => {
  const dispatch = useDispatch();
  const { data, currentIndex } = useSelector(
    (state: RootState) => state.slider
  );

  useEffect(() => {
    dispatch(setData(sliderData));
  }, [dispatch]);

  return (
    <div className="relative pb-2 z-0 h-[370px]">
      {data &&
        data.map((item: any, index: number) => (
          <div
            key={item.id}
            className={
              index === currentIndex
                ? "absolute inset-0 opacity-100 duration-700 ease-in-out"
                : "absolute inset-0 opacity-0 duration-700 ease-in-out"
            }
            style={{
              backgroundImage: `url(${item.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>
            <div className="relative z-10 h-full flex items-center p-12">
              <div className="w-2/5">
                <p className="text-white text-[50px] font-bold font-kanit mb-4">
                  {index === currentIndex && item.title}
                </p>
                {index === currentIndex && item.desc && (
                  <p className="text-white text-lg mb-6">{item.desc}</p>
                )}
                {index === currentIndex && (
                  <button className="bg-teal-200 hover:bg-teal-300 text-black w-60 px-6 py-4 rounded-lg font-semibold transition-colors">
                    Shop Now
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      <div className="flex absolute bottom-12 left-1/2 transform -translate-x-1/2 z-20">
        {data &&
          data.map((item: any, index: number) => (
            <div className="mr-4" key={item.id}>
              <div
                className={
                  index === currentIndex
                    ? "bg-green-300 rounded-full p-1 cursor-pointer"
                    : "bg-white rounded-full p-1 cursor-pointer"
                }
                onClick={() => dispatch(dotSlide(index))}
              ></div>
            </div>
          ))}
      </div>
      <div>
        <button
          className="absolute top-[50%] left-4 bg-white rounded-full p-2 hover:bg-green-300 z-20"
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
          className="absolute top-[50%] right-4 bg-white rounded-full p-2 hover:bg-green-300 z-20"
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
