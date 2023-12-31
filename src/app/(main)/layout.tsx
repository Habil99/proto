import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import React from "react";
import { Footer, Navbar } from "@/components";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col min-h-screen">
      <Navbar />
      <div className="g-container flex-grow">{children}</div>
      <Footer />
    </section>
  );
}
