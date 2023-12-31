"use client";

// import Button from "@/components/Button";
import { Heading } from "@/components/Heading";
// import { clearCart } from "@/redux/cartSlice";
// import { useRouter } from "next/navigation";
// import Script from "next/script";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { usePaystackPayment } from "react-paystack";

export default function CheckoutPage() {
  const cart = useSelector((state) => state.comb.cart.productList);
  // const dispatch = useDispatch();
  // const router = useRouter();

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
      (total, item) => total + item.price * item.quantity,
      0
    );
    const shippingPrice = 0;
    const taxPrice = 0;
    const totalPrice = itemsPrice + shippingPrice + taxPrice;

    setOrderSummary({ itemsPrice, shippingPrice, taxPrice, totalPrice });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cart]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // const handlePlaceOrder = () => {
  //   // clear cart after a succesful order creation
  //   dispatch(clearCart());

  //   // redirect to a confirmation page
  //   router.push("/order-confirmation");
  // };

  // Paystack logic
  const config = {
    reference: new Date().getTime().toString(),
    email: "graceama@gmail.com",
    amount: 5000 * 100,
    publicKey: "pk_test_d52da3f7bd43b9df9f5bc3f32eba8daea456eeff",
  };

  const onSuccess = (e) => {
    console.log(e);
  };
  const onClose = () => {
    console.log("closed");
  };

  const PaystackHookExample = () => {
    const initializePayment = usePaystackPayment(config);
    return (
      <div>
        <button
          style={{
            padding: "10px",
            borderRadius: "7px",
            backgroundColor: "#3c9eaf",
            color: "white",
          }}
          onClick={() => {
            initializePayment(onSuccess, onClose);
          }}
        >
          Pay With Paystack
        </button>
      </div>
    );
  };

  return (
    <div className="checkoutPage p-8 m-[1rem] sm:m-[3rem] border rounded-lg">
      <Heading title="Checkout" center />
      <div className="sm:flex justify-between w-full">
        <div className="sm:w-[55%]">
          <form>
            {/* <Script src="https://js.paystack.co/v1/inline.js"></Script> */}
            <label
              className="block font-bold text-xl mb-4"
              htmlFor="billingDetails"
            >
              Billing Details
            </label>

            {/* Fullname */}
            <div className="mb-4">
              <label
                className="block font-semibold text-sm"
                htmlFor="full name"
              >
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
              <label className="block font-semibold text-sm" htmlFor="email">
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
              <label className="block font-semibold text-sm" htmlFor="address">
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
              <label className="block font-semibold text-sm" htmlFor="city">
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

            <div className="flex flex-row space-x-4">
              {/* Country */}
              <div className="mb-4 basis-8/12">
                <label
                  className="block font-semibold text-sm"
                  htmlFor="country"
                >
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

              {/* Postal code */}
              <div className="mb-4 basis-4/12">
                <label
                  className="block font-semibold text-sm"
                  htmlFor="postalCode"
                >
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
            </div>

            {/* Payment method */}

            <div>
              <PaystackHookExample />
            </div>

            {/* <form onSubmit={handlePaystackSubmit}>
                <div className="mb-4 mt-20">
                  <label
                    className="block font-bold text-xl"
                    htmlFor="paymentMethod"
                  >
                    Payment Method
                  </label>
                  <input
                    className="w-full border rounded p-2"
                    name="payment method"
                    value={formData.paymentMethod}
                    onChange={handleInputChange}
                    required
                  ></input>
                  <PaystackButton {...componentProps} />
                </div>
              </form> */}

            {/* Flutterwave payment */}

            {/* Place Order button */}
            {/* <div>
              <Button
                label="Place Order"
                custom="bg-green-400"
                onClick={handlePlaceOrder}
              />
            </div> */}
          </form>
        </div>

        {/* Summarize the order */}
        <div className="orderSummary mt-8 border p-4 h-80 mr-4 sm:w-[40%]">
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
