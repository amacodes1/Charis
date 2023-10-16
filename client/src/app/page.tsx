import NavigationButton from "@/components/NavigationButton";
import Newsletter from "@/components/Newsletter";
import ProductCard from "@/components/products/ProductCard";
import Products2 from "@/components/products/Products2";
import { Slider } from "@/components/Slider";
import Timer from "@/components/Timer";

export default function Home() {
  return (
    <main className="">
      <Slider />
      <NavigationButton />
      <ProductCard />
      <Timer />
      <Products2 />
      <Newsletter />
    </main>
  );
}
