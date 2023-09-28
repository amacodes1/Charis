// import { Header } from "./components/carouselSlider/Header";
import Newsletter from "@/components/Newsletter";
import Products from "@/components/Products";
import Products2 from "@/components/Products2";
import Timer from "@/components/Timer";

export default function Home() {
  return (
    <main className="">
      {/* <Header /> */}
      <Products />
      <Timer />
      <Products2 />
      <Newsletter />
    </main>
  );
}
