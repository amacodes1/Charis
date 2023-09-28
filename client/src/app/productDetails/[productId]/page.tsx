"use client";

// import { useRouter, useSearchParams } from "next/navigation";
import { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loading from "@/app/loading";
import { addToCart } from "@/redux/cartSlice";
import Link from "next/link";
import Image from "next/image";
import { Rating } from "@mui/material";
// import SetColor from "@/components/SetColor";

interface IParams {
  productId?: string;
}

export type CartProductType = {
  id: string;
  title: string;
  description: string;
  category: string;
  selectedImg: SelectedImgType;
  quantity: number;
  price: number;
};

export type SelectedImgType = {
  color: string;
  colorCode: string;
  image: string;
};

const HorizontalLine = () => {
  return <hr className="w-[50%] my-2" />;
};

export default function ProductDetails({ params }: { params: IParams }) {
  const product = useSelector((state: any) => state.comb.prod.allProduct);
  const dispatch = useDispatch();

  // console.log("params", typeof params.productId);

  const selectedProduct = product.find(
    (prod: any) => prod.id.toString() === params.productId
  );
  // console.log("selectedProduct:", selectedProduct);
  // console.log(product);

  const [cartProduct, setCartProduct] = useState<CartProductType>({
    id: selectedProduct?.id,
    title: selectedProduct?.title,
    description: selectedProduct?.description,
    category: selectedProduct?.category,
    selectedImg: { ...selectedProduct?.image[0] },
    quantity: 1,
    price: selectedProduct?.price,
  });

  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div>
        {" "}
        <Loading />{" "}
      </div>
    );
  }

  const handleAddToCart = () => {
    dispatch(addToCart({ ...product, quantity }));
  };

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  // const handleColorSelect = useCallback(
  //   (value: SelectedImgType) => [
  //     setCartProduct((prev) => {
  //       return { ...prev, selectedImg: value };
  //     }),
  //   ],
  //   [cartProduct.selectedImg]
  // );
  // console.log(cartProduct);

  return (
    <div className="productDetails grid grid-cols-1 md:grid-cols-2 gap-12">
      {selectedProduct && (
        <>
          <Link href="/">Back To Products</Link>

          <div className="flex">
            <div className="w-1/2">
              {" "}
              Images
              <Image
                src={selectedProduct.image}
                width={250}
                height={150}
                alt={product.title}
                className="items-center"
              ></Image>
              {/* {product.additionalImages.map((image: any, index: number) => (
            <img key={index} src={image} alt={`${product?.title} - ${index}`} />
          ))} */}
            </div>
            <div className="flex flex-col gap-1 text-slate-600 text-sm">
              {" "}
              Details
              <p className="text-3xl font-medium text-slate-700">
                {selectedProduct.title}
              </p>
              <p>Price: ${selectedProduct.price}</p>
              <div className="flex items-center gap-2">
                <Rating value={selectedProduct.rating.rate} readOnly />
                <p>{selectedProduct.rating.count} reviews</p>
              </div>
              <HorizontalLine />
              <p className="text-justify">
                Description: {selectedProduct.description}
              </p>
              <HorizontalLine />
              <div>
                <span className="font-semibold">
                  CATEGORY: {selectedProduct.category}
                </span>
              </div>
              <div
                className={
                  selectedProduct.inStock ? "text-teal-400" : "text-rose-600"
                }
              >
                {selectedProduct.inStock ? "In Stock" : "Out of Stock"}
              </div>
              <HorizontalLine />
              {/* <SetColor
                cartProduct={cartProduct}
                product={selectedProduct.image}
                handleColorSelect={handleColorSelect}
              />
              <HorizontalLine /> */}
              <div className="flex items-center gap-8">
                <div className="font-semibold">QUANTITY:</div>
                <div className="flex items-center gap-4 text-base">
                  <button className="qtyBtn" onClick={handleDecrement}>
                    -
                  </button>
                  <span>{quantity}</span>
                  <button className="qtyBtn" onClick={handleIncrement}>
                    +
                  </button>
                </div>
              </div>
              <HorizontalLine />
              <div className="flex items-center gap-8">
                <button onClick={handleAddToCart}>Add To Cart</button>
                <button>Buy Now</button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
