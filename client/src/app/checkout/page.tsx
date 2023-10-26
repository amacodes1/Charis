"use client";

import Button from "@/components/Button";
import { Heading } from "@/components/Heading";
import { clearCart } from "@/redux/cartSlice";
import { useRouter } from "next/navigation";
import Script from "next/script";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import handlePaystack from "../api/paystackInterface/route";
import { PaystackButton } from "react-paystack";

export default function CheckoutPage() {
  const cart = useSelector((state: any) => state.comb.cart.productList);
  const dispatch = useDispatch();
  const router = useRouter();
  const [email] = useState("");
  const [name] = useState("");
  const [phone] = useState("");
  //   const publicKey: "pk_test_d52da3f7bd43b9df9f5bc3f32eba8daea456eeff";
  const amount = "1000000";

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    address: "",
    city: "",
    postalCode: "",
    country: "",
    paymentMethod: "Paystack",
  });

  const componentProps = {
    email,
    amount,
    metadata: {
      name,
      phone,
    },

    text: "Pay Now",
    onSuccess: () =>
      alert(`Payment successfully, Thank you for your patronage`),
    onclose: () => alert(`You haven't purchased your goods yet`),
  };

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

  const handlePaystackSubmit = (e: any) => {
    e.preventDefault();
    handlePaystack(formData.email, parseFloat(amount));
  };

  const handlePlaceOrder = () => {
    // clear cart after a succesful order creation
    dispatch(clearCart());

    // redirect to a confirmation page
    router.push("/order-confirmation");
  };

  return (
    <div className="checkoutPage p-8 m-[1rem] sm:m-[3rem] border rounded-lg">
      <Heading title="Checkout" center />
      <div className="sm:flex justify-between w-full">
        <div className="sm:w-[55%]">
          <form>
            <Script src="https://js.paystack.co/v1/inline.js"></Script>
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
            <form onSubmit={handlePaystackSubmit}>
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
                {/* <PaystackButton {...componentProps} /> */}
              </div>
            </form>

            {/* Flutterwave payment */}

            {/* <script src="https://checkout.flutterwave.com/v3.js"></script>
            <form>
                <div>
                    Your order is ₦54,600
                </div>
                <button type="button" id="start-payment-button" onclick="makePayment()">Pay Now</button>
            </form>
            <script>
                function makePayment() {
                    FlutterwaveCheckout({
                    public_key: "FLWPUBK_TEST-SANDBOXDEMOKEY-X",
                    tx_ref: "titanic-48981487343MDI0NzMx",
                    amount: 54600,
                    currency: "NGN",
                    payment_options: "card, banktransfer, ussd",
                    redirect_url: "https://glaciers.titanic.com/handle-flutterwave-payment",
                    meta: {
                    consumer_id: 23,
                    consumer_mac: "92a3-912ba-1192a",
                    },
                    customer: {
                    email: "rose@unsinkableship.com",
                    phone_number: "08102909304",
                    name: "Rose DeWitt Bukater",
                    },
                    customizations: {
                    title: "The Titanic Store",
                    description: "Payment for an awesome cruise",
                    logo: "https://www.logolynx.com/images/logolynx/22/2239ca38f5505fbfce7e55bbc0604386.jpeg",
                     },
                    });
                }
            </script> */}

            {/* Place Order button */}
            <div>
              <Button
                label="Place Order"
                custom="bg-green-400"
                onClick={handlePlaceOrder}
              />
            </div>
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

// "use client";

// import { FormEventHandler, useEffect, useState } from "react";
// import { PaystackButton } from "react-paystack";
// import { PaystackProps } from "react-paystack/dist/types";

// type referenceObj = {
//   message: string;
//   reference: string;
//   status: "sucess" | "failure";
//   trans: string;
//   transaction: string;
//   trxref: string;
// };

// const Paystack: React.FC = (): JSX.Element => {
//   const [ref, setRef] = useState("");
//   const [email, setEmail] = useState("");
//   const [amount, setAmount] = useState(0);
//   const [name, setName] = useState("");
//   const [surname, setSurname] = useState("");
//   const [success, setSuccess] = useState(false);

//   useEffect(() => {
//     setSuccess(false);
//     setRef("" + Math.floor(Math.random() * 1000000000 + 1));
//   }, [success]);

//   const config: PaystackProps = {
//     reference: ref,
//     email: email,
//     firstname: name,
//     lastname: surname,
//     label: name + " " + surname,
//     amount: (amount * 100) | 0,
//     publicKey: process.env.PAYSTACK_PUBLIC_TEST_KEY as string,
//     currency: "USD",
//   };

//   const onSuccess = async (reference: referenceObj) => {
//     const res = await fetch(`/api/verify/${reference.reference}`);
//     const verifyData = await res.json();

//     if (verifyData.data.status === "success") {
//       setSuccess(true);
//       setEmail("");
//       setAmount(0);
//       setName("");
//       setSurname("");
//     }
//   };

//   const onClose = () => {
//     alert("Payment cancelled.");
//   };

//   const componentProps = {
//     ...config,
//     text: `Pay $ ${amount | 0}`,
//     onSuccess,
//     onClose,
//   };

//   return (
//     <div id="paymentForm">
//       <div className="form-group">
//         <label htmlFor="email">Email Address</label>
//         <input
//           type="email"
//           id="email-address"
//           required
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//       </div>
//       <div className="form-group">
//         <label htmlFor="amount">Amount</label>
//         <input
//           type="number"
//           step="0.01"
//           min={0}
//           id="amount"
//           required
//           value={amount}
//           onChange={(e) => setAmount(Number.parseFloat(e.target.value))}
//         />
//       </div>
//       <div className="form-group">
//         <label htmlFor="first-name">First Name</label>
//         <input
//           type="text"
//           id="first-name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//         />
//       </div>
//       <div className="form-group">
//         <label htmlFor="last-name">Last Name</label>
//         <input
//           type="text"
//           id="last-name"
//           value={surname}
//           onChange={(e) => setSurname(e.target.value)}
//         />
//       </div>

//       <PaystackButton {...componentProps} />
//     </div>
//   );
// };

// export default Paystack;
