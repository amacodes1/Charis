'use client'
import { useState, useEffect } from "react"

export default function Timer () {
    const [timeLeft, setTimeLeft] = useState<number>(0)

    useEffect(() => {
        const targetDate = new Date('2023-12-31T23:59:59');
        const interval = setInterval(() => {
            const now = new Date().getTime();
            const difference = targetDate.getTime() - now;

            if (difference <= 0) {
                clearInterval(interval);
                setTimeLeft(0)
            } else {
                setTimeLeft(difference);
            }
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  return (
    <div className="text-black container bg-teal-100 w-auto h-72 m-5">
        <h1 className="font-bold font-rem text-5xl">Weekly Sale on 50% Off All Products</h1>
        <p>
            {`
                days ${days} 
                hours ${hours}
                minutes ${minutes} 
                seconds ${seconds}
            `}
        </p>
    </div>
  );
};