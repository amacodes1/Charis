"use client";

import {
  CartProductType,
  SelectedImgType,
} from "@/app/productDetails/[productId]/page";
import React from "react";
import { useSelector } from "react-redux";
import Image from "next/image";

interface ProductImageProps {
  cartProduct: CartProductType;
  product: SelectedImgType | SelectedImgType[];
  handleColorSelect: (value: SelectedImgType) => void;
}

const ProductImages: React.FC<ProductImageProps> = ({
  cartProduct,
  product,
  handleColorSelect,
}) => {
  const images = Array.isArray(product) ? product : [product];
  //   const products = useSelector((state: any) => state.comb.prod.allProduct);
  return (
    <div className="grid grid-cols-6 gap-2 h-full max-h-[500px] min-h-[300px] sm:min-h-[400px]">
      <div className="flex flex-col items-center justify-center gap-4 cursor-pointer border h-full max-h-[500px] min-h-[300px] sm:min-h-[400px]">
        {images.map((image: SelectedImgType) => {
          return (
            <div
              key={image.color}
              onClick={() => handleColorSelect(image)}
              className={`
            relative w-[80%] 
            aspect-square rounded 
            border-teal-300 
            ${
              (cartProduct.selectedImg && cartProduct.selectedImg.color) ===
              image.color
                ? "border-[1.5px]"
                : "border-none"
            }`}
            >
              <Image
                className="object-contain"
                src={image.image}
                alt="images"
                fill
              />
            </div>
          );
        })}
      </div>
      <div className="col-span-5 relative aspect-square">
        <Image
          fill
          src={cartProduct.selectedImg.image}
          alt="cartProduct image"
          className="w-full h-full object-contain max-h-[500px] min-h-[300px] sm:min-h-[400px]"
        />
      </div>
    </div>
  );
};

export default ProductImages;
