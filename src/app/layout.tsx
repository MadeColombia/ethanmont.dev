"use client";
import { useState, useEffect } from "react";
import type { Metadata } from "next";
import { Urbanist, Geist_Mono } from "next/font/google";
import "./globals.css";
import LoadingScreen from "@/components/LoadingScreen";

const urbanist = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust time as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <html lang="en">
      <body
        className={`${urbanist.variable} ${geistMono.variable} font-sans antialiased`}
      >
        {loading ? <LoadingScreen /> : children}
      </body>
    </html>
  );
}
