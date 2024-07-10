import type { Metadata } from "next";
import { Inter, Mulish } from "next/font/google";
import "./globals.css";
import { Satisfy, Lora } from "next/font/google"

const inter = Inter({ subsets: ["latin"] });

//👇 Configure our font object
const mulish = Mulish({
  subsets: ['latin'],
})

const stylish = Satisfy({
  subsets: ['latin'],
  weight: "400",
})

const lora = Lora({
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: "Shady Palms",
  description: "The village local bar",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`dark ${lora.className}`}>{children}</body>
    </html>
  );
}
