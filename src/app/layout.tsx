import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ToJSON - JSON Converter and Formatter",
  description: "Convert and format your data to JSON effortlessly with ToJSON.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased scroll-smooth min-h-screen w-full bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 overflow-x-hidden`}
      >
        <Navbar></Navbar>
        {children}
      </body>
    </html>
  );
}
