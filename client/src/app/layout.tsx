import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Offers from "../components/Offers";
import { Provider } from "react-redux";
import { store, persistor } from "../redux/store";
import { PersistGate } from "redux-persist/integration/react";

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
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {() => (
          <html lang="en">
            <body className={inter.className}>
              <Navbar />
              {children}
              <Offers />
              <Footer />
            </body>
          </html>
        )}
      </PersistGate>
    </Provider>
  );
}
