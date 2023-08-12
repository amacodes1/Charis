import Link from "next/link"
import Image from "next/image"

export default function PopularPosts() {
  return (
    <section className="container mx-auto my-8 md:px-5 py-10">
        <h1 className="font-bold font-kanit text-4xl py-12 text-center">Popular Products</h1>
        <div className="grid md:grid-cols-3 gap-y-6 md:gap-14">
            {ReturnPopularPosts()}
            {ReturnPopularPosts()}
            {ReturnPopularPosts()}
            {ReturnPopularPosts()}
            {ReturnPopularPosts()}
            {ReturnPopularPosts()}
        </div>
    </section>
  )
}

export function ReturnPopularPosts() {
    return(
        <div className="flex flex-col bg-teal-50 p-2 text-l">
            <div className="images py-2 md:py-1">
                <Link href={"/"}><Image src={"/images/charis-img-4.webp"} width={650} height={250} className="rounded" alt="" /></Link>
            </div>
            <div className="info justify-center py-4 ml-24">
                <div className="title">
                <Link href={"/"} className="text-l md:text-xl font-oswald text-gray-800 hover:text-gray-600"> Gray Armed Sofa </Link>
                <p className="price"></p>
                </div>
            </div>
        </div>
    )
}