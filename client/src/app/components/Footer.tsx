import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaTiktok } from "react-icons/fa"

export default function Footer() {
  return (
    <footer className="bg-teal-200">
        <div className="container mx-auto flex md:flex-row flex-col px-10 md:px-6 py-10">
            <div className="about text-black mt-6">
                <h2 className="uppercase mb-8 after font-bold font-kanit">About Us</h2>
                <p>Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit. Ullam voluptas deserunt <br /> beatae aliquam amet similique possimus <br /> expedita ut culpa eius pariatur sint harum, <br /> ex, cupiditate perferendis quas tempora <br /> dicta eveniet!</p>
            </div>
            <div className="md:ml-20">
                <h2 className="uppercase my-8 text-black after font-bold font-kanit">Our Socials</h2>
                <div className="space-y-4">
                    <Link className="linkIcon flex" href=""> <FaFacebook className="mr-4 mt-1"/> Facebook </Link>
                    <Link className="linkIcon flex" href=""> <FaTwitter className="mr-4 mt-1"/> Twitter </Link>
                    <Link className="linkIcon flex" href=""> <FaInstagram className="mr-4 mt-1"/> Instagram </Link>
                    <Link className="linkIcon flex" href=""> <FaYoutube className="mr-4 mt-1"/> YouTube </Link>
                    <Link className="linkIcon flex" href=""> <FaTiktok className="mr-4 mt-1"/> TikTok </Link>
                </div>
            </div>
            <div className="md:ml-28">
                <h2 className="uppercase text-black my-8 font-bold font-kanit">Quick links</h2>
                <div className="text-black flex flex-col space-y-4">
                    <Link href="">Home</Link>
                    <Link href="">Who We Are</Link>
                    <Link href="">Contact Us</Link>
                    <Link href="">Categories</Link>
                    <Link href="">Privacy Policy</Link>
                </div>
            </div>
            <div className="md:ml-28">
                <h2 className="uppercase text-black my-8 font-bold font-kanit">Features</h2>
                <div className="text-black flex flex-col space-y-4">
                    <Link href="">Careers</Link>
                    <Link href="">Brand Assests</Link>
                    <Link href="">investor Relations</Link>
                    <Link href="">Terms of Service</Link>
                    <Link href="">Marketing Service</Link>
                </div>
            </div>
            
            
        </div>
            <div className="container mx-auto px-6 flex flex-col md:flex-row pb-10 justify-center">
                <p className=" text-black">Copyright ©2023 Ama Codes. All rights reserved </p>
                <p className="text-black ml-6">Terms & Conditions Apply</p>
            </div>
    </footer>
  )
}
