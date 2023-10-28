// import { NextApiRequest, NextApiResponse } from "next";
// import Paystack from "paystack";

// const paystack = new Paystack(process.env.PAYSTACK_SECRET_KEY);

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {
//   if (req.method === "POST") {
//     try {
//       const { email, amount } = req.body;

//       // Initialize a transaction
//       const transaction = await paystack.transaction.initailize({
//         email,
//         amount: amount * 100,
//       });

//       const authorizationUrl = transaction.data.authorization_url;

//       res.status(200).json({ authorizationUrl });
//     } catch (err) {
//       console.error("Paystack Error:", err);
//       res
//         .status(500)
//         .json({ error: "An error occurred while processing your transaction" });
//     }
//   } else {
//     res.status(405).end();
//   }
// }
