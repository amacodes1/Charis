"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Timer() {
  const [timeLeft, setTimeLeft] = useState<number>(0);

  useEffect(() => {
    const targetDate = new Date("2024-12-31T23:59:59");
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate.getTime() - now;

      if (difference <= 0) {
        clearInterval(interval);
        setTimeLeft(0);
      } else {
        setTimeLeft(difference);
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  return (
    <div className="max-[768px]:px-[2rem] flex flex-col md:flex-row text-black bg-teal-100 mx-auto w-full h-auto md:h-1/4 m-5">
      <div className="pt-16 md:pt-24 md:py-16 md:px-20">
        <Image
          src={"/images/charis-img-11.webp"}
          width={400}
          height={100}
          className="rounded"
          alt=""
        />
      </div>
      <div className="my-10 md:ml-36 md:py-16">
        <h1 className="font-bold font-rem text-3xl md:text-5xl">
          Weekly Sale on 50% Off All Products
        </h1>
        <div className="flex flex-row md:mt-10">
          <div className="timerSegment">
            <span className="label">Days</span>
            <span className="time">{days}</span>
          </div>
          <div className="timerSegment">
            <span className="label">Hours</span>
            <span className="time">{hours}</span>
          </div>
          <div className="timerSegment">
            <span className="label">Minutes</span>
            <span className="time">{minutes}</span>
          </div>
          <div className="timerSegment">
            <span className="label">Seconds</span>
            <span className="time">{seconds}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
