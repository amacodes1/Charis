

export default function Offers() {
  return (
    <section className=" mb-10">
        <div className="max-[768px]:px-[2rem] bg-slate-900 mx-auto md:px-8 py-28 text-center ">
            <h1 className="uppercase text-xl text-red-600 font-kanit">Join Our Newsletter</h1>
            <p className="text-4xl font-bold font-kanit text-black">Subscribe to get updated with new offers</p>
            <div className="py-4">
                <input type="text" className="shadow border-none rounded w-96 py-3 px-5 text-gray-700 focus:outline-none focus:shadow-outline" placeholder="Enter your Email..." />
                <button className="bg-red-500 px-10 py-3 mt-2 md:ml-2 rounded text-gray-50 text-l">Subscribe</button>
            </div>
        </div>
    </section>
  )
}
