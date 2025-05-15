"use client";

import "../styles/globals.css";
import ReactQueryProvider from "@/providers/ReactQueryProvider";
import { ChakraUIProvider } from "@/providers/ChakraUIProvider";
import { fonts } from "./fonts";
import { Header } from "@/components/Header/Header";
import { Footer } from "@/components/Footer/Footer";
import { Suspense } from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${fonts.rubik.variable} antialiased`}>
        <ChakraUIProvider>
          <ReactQueryProvider>
            <Suspense fallback={null}>
              <Header />
              {children}
              <Footer />
            </Suspense>
          </ReactQueryProvider>
        </ChakraUIProvider>
      </body>
    </html>
  );
}
