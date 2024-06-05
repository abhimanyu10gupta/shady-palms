
"use client" 

import Navbar from "@/components/Navbar";
import "../globals.css";
import Image from "next/image";
import ShadyBanner from '../../public/ShadyBanner.png'
import Footer from "@/components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="">
      <Navbar />
        <div className=''>{children}</div>
      <Footer />
    </main>
  );
}
