
"use client" 

import Navbar from "@/components/Navbar";
import "../globals.css";
import { CssBaseline } from "@mui/material";
import Image from "next/image";
import ShadyBanner from '../../public/ShadyBanner.png'
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="h-screen w-screen">
      <Navbar />
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <div className=''>{children}</div>
      </LocalizationProvider>
    </main>
  );
}
