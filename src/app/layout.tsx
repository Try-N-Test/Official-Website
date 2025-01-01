import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import NavBar from "@/components/shared/NavBar";
import Footer from "@/components/shared/Footer";

const monaSans = localFont({
  src: "./fonts/Mona-Sans.ttf",
  variable: "--font-mona-sans",
  weight: "100 200 300 400 500 600 700 800 900",
});

export const metadata: Metadata = {
  title: "Try N Test Official Website",
  description: "The Official Website of the Try N Test Community",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${monaSans.className} antialiased`}>
        <NavBar />
        {children}
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
