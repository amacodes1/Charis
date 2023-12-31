"use client";

import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loading from "@/app/loading";
import { addToCart } from "@/redux/cartSlice";
import Image from "next/image";
import { Rating } from "@mui/material";
import Button from "@/components/Button";
import { MdCheckCircle } from "react-icons/md";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { addRecentlyViewed } from "@/redux/recentlyViewedSlice";
// import { ListRating } from "@/components/products/ListRating";
// import ProductImages from "@/components/products/ProductImages";
// import SetColor from "@/components/products/SetColor";

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
  const [quantity, setQuantity] = useState(1);
  const [isProductInCart, setIsProductInCart] = useState(false);
  const router = useRouter();

  // console.log("params", typeof params.productId);

  const selectedProduct = product.find(
    (prod: any) => prod.id.toString() === params.productId
  );
  // console.log("selectedProduct:", selectedProduct);
  // console.log(product);

  const [cartProduct] = useState<CartProductType>({
    id: selectedProduct?.id,
    title: selectedProduct?.title,
    description: selectedProduct?.description,
    category: selectedProduct?.category,
    selectedImg: { ...selectedProduct?.image[0] },
    quantity: 1,
    price: selectedProduct?.price,
  });

  useEffect(() => {
    setIsProductInCart(false);

    if (product) {
      const existingIndex = product.findIndex(
        (item: any) => item.id === product.id
      );

      if (existingIndex > -1) {
        setIsProductInCart(true);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [product]);

  if (!product) {
    return (
      <div>
        {" "}
        <Loading />{" "}
      </div>
    );
  }

  const handleViewProduct = (product: any) => {
    dispatch(addRecentlyViewed(product));

    if (selectedProduct) {
      handleViewProduct(selectedProduct);
    }
  };

  // useEffect(() => {
  //   if (selectedProduct) {
  //     handleViewProduct(selectedProduct);
  //   }
  // }, [selectedProduct]);

  const handleAddToCart = () => {
    dispatch(addToCart({ ...cartProduct, quantity }));
    console.log("product added to cart");

    toast.success("Product added to cart");
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

  return (
    <div className="productDetails grid grid-cols-1 ">
      {selectedProduct && (
        <div className="flex">
          {/* <ProductImages
            cartProduct={cartProduct}
            product={product.image}
            handleColorSelect={handleColorSelect}
          /> */}
          <div className="images p-16 text-sm text-slate-600">
            <Image
              src={selectedProduct.image}
              width={1000}
              height={250}
              alt="product title"
              className="items-center pt-8"
            ></Image>
          </div>
          <div className="details flex flex-col gap-1 text-slate-600 text-sm ml-20 p-28">
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
            {isProductInCart ? (
              <>
                <p className="mb-2 text-slate-500 flex items-center gap-1">
                  <MdCheckCircle className="text-teal-400" size={20} />
                  <span>Product Added to Cart</span>
                </p>
                <div className="max-w-[300px]">
                  <Button
                    label="View Cart"
                    outline
                    onClick={() => {
                      router.push("/cart");
                    }}
                  />
                </div>
              </>
            ) : (
              <>
                {/* <SetColor
              cartProduct={cartProduct}
              product={selectedProduct.colorCode}
              handleColorSelect={handleColorSelect}
            /> */}
                <HorizontalLine />
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
                <div className="flex items-center gap-8 max-w-[300px]">
                  <Button
                    label="Add To Cart"
                    onClick={() => {
                      handleAddToCart();
                    }}
                  />
                  <Button
                    label="Buy Now"
                    onClick={() => {
                      handleAddToCart();
                    }}
                  />
                </div>
              </>
            )}
          </div>
        </div>
      )}
      <div className="flex flex-col mt-20 gap-4">
        <div>Add Rating</div>
        {/* <ListRating product={selectedProduct} /> */}
      </div>
    </div>
  );
}
