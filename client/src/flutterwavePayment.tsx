// import React from 'react';

// export default function flutterwavePayment() {
//     const FlutterwaveCheckout = {
//       public_Key: process.env.FLUTTERWAVE_PUBLIC_KEY,
//       tx_ref: Date.now(),
//       amount: "",
//       currency: "USD",
//       payment_options: "card, ussd",
//       customer: {
//         email: "",
//         fullName: "",
//       },
//       customizations: {
//         title: "The Titanic Store",
//         description: "Payment for an awesome cruise",
//         logo: "https://www.logolynx.com/images/logolynx/22/2239ca38f5505fbfce7e55bbc0604386.jpeg",
//       },
//     };

//     const fwConfig = {
//         ...FlutterwaveCheckout,
//         test: "Pay with Flutterwave",
//         callback: (res: any) => {
//             console.log(res);
//         },
//         onclose: () => {},
//     };

//   return (
//     <div>
//         <h1>Pay with Flutterwave</h1>
//         <FlutterwaveButton
//     </div>
//   )
// }
