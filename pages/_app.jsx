import "../styles/globals.css";
import { NextUIProvider } from "@nextui-org/react";
import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({ subsets: ["latin"] });

function MyApp({ Component, pageProps }) {
  return (
    <NextUIProvider>
      <Toaster position="bottom-right" />
      <div className={inter.className}>
        <Component {...pageProps} />
      </div>
    </NextUIProvider>
  );
}

export default MyApp;
