// import { Header } from "./components/carouselSlider/Header";
import Newsletter from "@/components/Newsletter";
import ProductCard from "@/components/products/ProductCard";
import Products2 from "@/components/products/Products2";
import Timer from "@/components/Timer";

export default function Home() {
  return (
    <main className="">
      {/* <Header /> */}
      <ProductCard />
      <Timer />
      <Products2 />
      <Newsletter />
    </main>
  );
}
