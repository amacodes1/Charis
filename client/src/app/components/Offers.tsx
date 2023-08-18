'use client'
import Image from "next/image"

export default function Offers() {
  return (
    <section className="">
        <div className="flex flex-row max-[768px]:px-[2rem] bg-slate-100 text-black mx-auto md:px-20 py-20 text-center justify-between">
            <div className="offer">
              <Image src={"https://preview.colorlib.com/theme/furn/assets/img/icon/services1.svg"} width={90} height={90} className="bg-slate-100 image" alt="" />
              <h2 className="capitalize">Fast and free delivery</h2>
              <h4>Free delivery on all orders</h4>
            </div>
            <div className="offer">
              <Image src={"https://preview.colorlib.com/theme/furn/assets/img/icon/services2.svg"} width={70} height={70} className="bg-slate-100 image" alt="" />
              <h2 className="capitalize">Secure Payment</h2>
              <h4>Free delivery on all orders</h4>
            </div>
            <div className="offer">
              <Image src={"https://preview.colorlib.com/theme/furn/assets/img/icon/services3.svg"} width={70} height={70} className="bg-slate-100 image" alt="" />
              <h2 className="capitalize">money back guarantee</h2>
              <h4>Free delivery on all orders</h4>
            </div>
            <div className="offer">
              <Image src={"https://preview.colorlib.com/theme/furn/assets/img/icon/services4.svg"} width={70} height={70} className="bg-slate-100 image" alt="" />
              <h2 className="capitalize">online support</h2>
              <h4>Free delivery on all orders</h4>
            </div>
        </div>
    </section>
  )
}
