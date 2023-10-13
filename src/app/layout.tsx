import "./globals.scss";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import React from "react";
import ThemeProvider, { ThemeMode } from "@/context/theme";
import { BackgroundCover, Navbar } from "@/components";
import { cookies } from "next/headers";

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
  const defaultThemeMode = cookies().get("mode")?.value as
    | ThemeMode
    | undefined;

  return (
    <html lang="en">
      <body className={poppins.className} data-theme={defaultThemeMode}>
        <ThemeProvider defaultThemeMode={defaultThemeMode}>
          <BackgroundCover />
          <div className="g-container">
            <Navbar />
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
