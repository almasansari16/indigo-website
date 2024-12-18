"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import { Inter, Raleway, Roboto } from "next/font/google";
import "node_modules/react-modal-video/css/modal-video.css";
import "../styles/index.css";
import localfont from "next/font/local";

const ClashGrotesk = localfont({
  src: [
    {
      path: "../../public/fonts/ClashGrotesk-Bold.woff2",
      weight: "400",
      style: "normal",
      },
      ],
      variable: "--font-ClashGrotesk"
})
const inter = Inter({ subsets: ["latin"] });
const roboto_init = Roboto({
  subsets: ['latin'],
  weight: ['100' , '300' , '500' , '700'],
  variable : '--font-roboto'
})


// Raleway
const raleway = Raleway({
  subsets: ['latin'],
  weight: ['100' , '300' , '500' , '700'],
  variable : '--font-raleway'
})


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />

      <body className={`bg-[#FCFCFC] dark:bg-black ${raleway.variable} ${ClashGrotesk.variable}`}>
        <Providers>
          <Header />
          {children}
          <Footer />
          <ScrollToTop />
        </Providers>
      </body>
    </html>
  );
}

import { Providers } from "./providers";
