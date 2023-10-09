import { useSelector } from "react-redux";

const cart = useSelector((state: any) => state.comb.cart);

export const getTotal = () => {
  let totalQuantity = 0;
  let totalPrice = 0;
  cart.forEach((item: any) => {
    totalQuantity += item.quantity;
    totalPrice += item.price * item.quantity;
  });

  return { totalPrice, totalQuantity };
};
