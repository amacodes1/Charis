"use client";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Quantity, removeItem } from "../../redux/cartSlice";

export default function Cart() {
  const { cart } = useSelector((state: any) => state.comb);
  const dispatch = useDispatch();

  // console.log(cart);

  const handleUpdateQuantity = (id: string, quantity: number) => {
    dispatch(Quantity({ id, quantity }));
  };

  const handleRemove = (id: string) => {
    dispatch(removeItem(id));
  };

  return (
    <div>
      <h1>Shopping Cart</h1>
      <ul>
        {cart?.productList?.map((item: any, index: any) => (
          <li key={index}>
            <div>
              <img src={item.image} alt={item.title} />
              <p>{item.price}</p>
              <p>{item.title}</p>
            </div>
            <div>
              <button
                onClick={() =>
                  handleUpdateQuantity(item._id, item.quantity - 1)
                }
              >
                -
              </button>
              <span>{item.quantity}</span>
              <button
                onClick={() =>
                  handleUpdateQuantity(item._id, item.quantity + 1)
                }
              >
                +
              </button>
            </div>
            <div>
              <p>Price: ${item.price * item.quantity}</p>
              <button onClick={() => handleRemove(item._id)}>Remove</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
