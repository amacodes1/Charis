"use client";

import Button from "@/components/Button";
import { Heading } from "@/components/Heading";
import { clearCart } from "@/redux/cartSlice";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function CheckoutPage() {
  const cart = useSelector((state: any) => state.comb.cart.productList);
  const dispatch = useDispatch();
  const router = useRouter();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    address: "",
    city: "",
    postalCode: "",
    country: "",
    paymentMethod: "Paystack",
  });

  const [orderSummary, setOrderSummary] = useState({
    itemsPrice: 0,
    shippingPrice: 0,
    taxPrice: 0,
    totalPrice: 0,
  });

  // calculate order summary based on cart contents
  useEffect(() => {
    const itemsPrice = cart.reduce(
      (total: any, item: any) => total + item.price * item.quantity,
      0
    );
    const shippingPrice = 0;
    const taxPrice = 0;
    const totalPrice = itemsPrice + shippingPrice + taxPrice;

    setOrderSummary({ itemsPrice, shippingPrice, taxPrice, totalPrice });
  }, [cart]);

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handlePlaceOrder = () => {
    // clear cart after a succesful order creation
    dispatch(clearCart());

    // redirect to a confirmation page
    router.push("/order-confirmation");
  };

  return (
    <div className="checkoutPage container max-w-2xl mx-auto p-4">
      <Heading title="Checkout" center />
      <div className="sm:flex flex-row space-x-10">
        <form className=" w-6/12">
          <label
            className="block font-bold text-xl mb-4"
            htmlFor="billingDetails"
          >
            Billing Details
          </label>
          {/* Fullname */}
          <div className="mb-4">
            <label className="block font-semibold" htmlFor="full name">
              Full Name:
            </label>
            <input
              className="w-full border rounded p-2"
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              required
            />
          </div>

          {/* Email Address */}
          <div className="mb-4">
            <label className="block font-semibold" htmlFor="email">
              Email:
            </label>
            <input
              className="w-full border rounded p-2"
              type="text"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>

          {/* Address */}
          <div className="mb-4">
            <label className="block font-semibold" htmlFor="address">
              Address:
            </label>
            <input
              className="w-full border rounded p-2"
              type="text"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              required
            />
          </div>

          {/* City */}
          <div className="mb-4">
            <label className="block font-semibold" htmlFor="city">
              City:
            </label>
            <input
              className="w-full border rounded p-2"
              type="text"
              name="city"
              value={formData.city}
              onChange={handleInputChange}
              required
            />
          </div>

          {/* Postal code */}
          <div className="mb-4">
            <label className="block font-semibold" htmlFor="postalCode">
              Postal Code:
            </label>
            <input
              className="w-full border rounded p-2"
              type="number"
              name="postalcode"
              value={formData.postalCode}
              onChange={handleInputChange}
              required
            />
          </div>

          {/* Country */}
          <div className="mb-4">
            <label className="block font-semibold" htmlFor="country">
              Country:
            </label>
            <input
              className="w-full border rounded p-2"
              type="text"
              name="country"
              value={formData.country}
              onChange={handleInputChange}
              required
            />
          </div>

          {/* Payment method */}
          <div className="mb-4 mt-20">
            <label className="block font-bold text-xl" htmlFor="paymentMethod">
              Payment Method
            </label>
            <select
              className="w-full border rounded p-2"
              name="payment method"
              value={formData.paymentMethod}
              onChange={handleInputChange}
            >
              <option value="Paystack">Paystack</option>
              <option value="Flutterwave">Flutterwave</option>
              <option value="Paypal">Paypal</option>
            </select>
          </div>

          {/* Place Order button */}
          <div>
            <Button label="Place Order" onClick={handlePlaceOrder} />
          </div>
        </form>

        {/* Summarize the order */}
        <div className="orderSummary mt-8 border p-4 w-5/12">
          <Heading title="Order Summary" center />
          <div className="mb-4 mt-2 p-2">
            <div className="p-2">
              Subtotal: ${orderSummary.itemsPrice.toFixed(2)}
            </div>
            <div className="p-2">
              Shipping Price: ${orderSummary.shippingPrice.toFixed(2)}
            </div>
            <div className="p-2">
              Tax Price: ${orderSummary.taxPrice.toFixed(2)}
            </div>
            <div className="p-2">
              Total Price: ${orderSummary.totalPrice.toFixed(2)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
