import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import localFont from "next/font/local";

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "./clientToastContainer.js";
import "./globals.css";
import StoreProvider from "./StoreProvider.jsx";

import AuthProvider from "@/context/AuthProvider.jsx";
import DarkModeProvider from "@/context/DarkModeProvider.jsx";
import { Toaster } from "sonner";

export const metadata = {
  title: process.env.NEXT_PUBLIC_DEFAULT_META_APP_NAME,
  description: process.env.NEXT_PUBLIC_DEFAULT_META_APP_DESCRIPTION,
};

const poppinsELi = localFont({
  src: "./assets/fonts/poppinsELi.ttf",
  variable: "--font-poppins--extra-light",
  weight: "200",
});

const poppinsLi = localFont({
  src: "./assets/fonts/poppinsLi.ttf",
  variable: "--font-poppins-light",
  weight: "300",
});

const poppinsRg = localFont({
  src: "./assets/fonts/poppinsRg.ttf",
  variable: "--font-poppins-rg",
  weight: "400",
});

const poppinsMd = localFont({
  src: "./assets/fonts/poppinsMd.ttf",
  variable: "--font-poppins-md",
  weight: "500",
});

const poppinsSb = localFont({
  src: "./assets/fonts/poppinsSb.ttf",
  variable: "--font-poppins-sb",
  weight: "600",
});

const poppinsBo = localFont({
  src: "./assets/fonts/poppinsBo.ttf",
  variable: "--font-poppins-bold",
  weight: "700",
});

const poppinsBl = localFont({
  src: "./assets/fonts/poppinsBl.ttf",
  variable: "--font-poppins-black",
  weight: "900",
});

// Bin Yaber (F-E)
const candaraRg = localFont({
  src: "./assets/fonts/candara.ttf",
  variable: "--font-candara-rg",
  weight: "400",
});
const candaraBo = localFont({
  src: "./assets/fonts/candara.ttf",
  variable: "--font-candara-bold",
  weight: "700",
});
const ppNeueMontrealMd = localFont({
  src: "./assets/fonts/ppneuemontrealMd.otf",
  variable: "--font-pp-neue-montreal-md",
  weight: "500",
});

// Fujairah Free Zone
const montserrat = localFont({
  src: "./assets/fonts/montserratVF.ttf",
  variable: "--font-montserrat",
});

const RootLayout = async ({ children }) => {
  const locale = await getLocale();

  // Providing all messages to the client side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body
        className={`${poppinsRg.variable} ${poppinsMd.variable} ${poppinsBl.variable} ${poppinsBo.variable} ${poppinsLi.variable} ${poppinsELi.variable} ${poppinsSb.variable} ${candaraRg.variable} ${candaraBo.variable} ${ppNeueMontrealMd.variable} antialiased`}
      >
        <AuthProvider>
          <StoreProvider>
            <NextIntlClientProvider messages={messages}>
              <DarkModeProvider>{children}</DarkModeProvider>
            </NextIntlClientProvider>
          </StoreProvider>

          <Toaster richColors />
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
        </AuthProvider>
      </body>
    </html>
  );
};

export default RootLayout;
