import "../styles/globals.css";
import { NextUIProvider } from "@nextui-org/react";
import { Inter } from "next/font/google";

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({ subsets: ["latin"] });

function MyApp({ Component, pageProps }) {
  return (
    <NextUIProvider>
      <div className={inter.className}>
        <Component {...pageProps} />
      </div>
    </NextUIProvider>
  );
}

export default MyApp;
