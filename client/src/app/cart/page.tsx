"use client";
import { useSelector, useDispatch } from "react-redux";
import {
  incrementQuantity,
  decrementQuantity,
  clearCart,
  removeItem,
} from "../../redux/cartSlice";
import Image from "next/image";
import { Heading } from "@/components/Heading";
import Button from "@/components/Button";
import Link from "next/link";
import { MdArrowBack } from "react-icons/md";

export default function Cart() {
  const cart = useSelector((state: any) => state.comb.cart.productList);
  const dispatch = useDispatch();

  // console.log(cart);

  const handleRemove = (id: string) => {
    dispatch(removeItem(id));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const getTotalPrice = () => {
    if (!Array.isArray(cart)) {
      return 0;
    }
    return cart.reduce(
      (accumulator: any, item: any) => accumulator + item.quantity * item.price,
      0
    );
  };
  // console.log(getTotalPrice());

  return (
    <div className="cart container p-8 text-center justify-center">
      <Heading title="Shopping Cart" center />
      {cart?.length === 0 ? (
        <div>
          <h1>Your Cart is Empty!</h1>
          <Link
            href={"/"}
            className="text-slate-500 flex items-center gap-1 mt-2"
          >
            <MdArrowBack />
            <span>Start Shopping</span>
          </Link>
        </div>
      ) : (
        <ul>
          <div className="cartHeader mt-8 flex justify-between">
            <div>Image</div>
            <div>Product</div>
            <div>Price</div>
            <div>Actions</div>
            <div>Total Price</div>
          </div>
          {cart?.map((item: any, index: any) => (
            <li key={index}>
              <div className="body flex justify-between items-center text-center mb-4">
                <div className="image w-28">
                  <Image
                    className="w-28"
                    src={item.image}
                    alt={item.title}
                    height={90}
                    width={65}
                  />
                </div>
                <div className="flex flex-col justify-between">
                  <Link href={`/productDetails/${item.id}`}>{item.title}</Link>
                  {/* <div>{item.selectedImg.color}</div> */}
                </div>
                <p>${item.price}</p>

                <div className="buttons">
                  <button onClick={() => dispatch(decrementQuantity(item.id))}>
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button onClick={() => dispatch(incrementQuantity(item.id))}>
                    +
                  </button>
                </div>
                <div>
                  <p>Price: ${item.price * item.quantity}</p>
                  <button
                    onClick={() => handleRemove(item.id)}
                    className="text-red-600 underline m-1 text-base"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </li>
          ))}
          <div className="border-t-[1.5px] border-black py-4 flex justify-between gap-4 my-12">
            <div className="w-[90px] mt-12">
              <Button
                label="Clear Cart"
                onClick={handleClearCart}
                small
                outline
              />
            </div>
            <div className="flex flex-col gap-1 items-start">
              <div className="flex justify-between w-full text-base">
                <h2 className="font-bold text-2xl mt-12">Your Grand Total:</h2>
                <span className="font-bold mt-12 text-xl">
                  ${getTotalPrice()}
                </span>
              </div>
              <p className="text-slate-500">
                Taxes and Shipping will be calculated at checkout
              </p>

              <Link
                href={{
                  pathname: "/checkout",
                  query: { cart: JSON.stringify(cart) },
                }}
              >
                <Button
                  label="Checkout"
                  custom="bg-green-500 text-white"
                  onClick={() => {}}
                />
              </Link>

              <Link
                href={"/"}
                className="text-slate-500 flex items-center gap-1 mt-2"
              >
                <MdArrowBack />
                <span>Continue Shopping</span>
              </Link>
            </div>
          </div>
        </ul>
      )}
    </div>
  );
}
