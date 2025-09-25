import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Metadata (branding)
export const metadata: Metadata = {
  title: "Solve Ease Frontend Assignment – Shrenik Khule",
  description:
    "A frontend assignment project for Solve Ease built with Next.js, TypeScript, and Tailwind CSS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`bg-gray-50 text-gray-900 ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />

        <main className="pt-16">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
