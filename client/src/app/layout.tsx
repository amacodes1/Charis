// import "./globals.css";
// import type { Metadata } from "next";
// import { Inter } from "next/font/google";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
// import Offers from "../components/Offers";
// import { Provider } from "react-redux";
// import { store } from "../redux/store";
// import ClientPersistGate from "@/components/ClientPersistGate";

// const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Charis",
//   description: "created by amacodes",
// };

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <Provider store={store}>
//       <ClientPersistGate>
//         {() => (
//           <html lang="en">
//             <body className={inter.className}>
//               <Navbar />
//               {children}
//               <Offers />
//               <Footer />
//             </body>
//           </html>
//         )}
//       </ClientPersistGate>
//     </Provider>
//   );
// }


import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Offers from "../components/Offers";
import ClientPersistGate from "@/components/ClientPersistGate";
import ReduxProvider from "@/redux/ReduxProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Charis",
  description: "created by amacodes",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReduxProvider>
          <ClientPersistGate>
            <Navbar />
            {children}
            <Offers />
            <Footer />
          </ClientPersistGate>
        </ReduxProvider>
      </body>
    </html>
  );
}
