import "./globals.scss";

import React from "react";
import { BackgroundCover } from "@/components";
import { Poppins } from "next/font/google";
import ThemeProvider, { ThemeMode } from "@/context/theme";
import { cookies } from "next/headers";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function Layout({ children }: { children: React.ReactNode }) {
  const defaultThemeMode = cookies().get("mode")?.value as
    | ThemeMode
    | undefined;

  return (
    <html lang="en">
      <body className={poppins.className} data-theme={defaultThemeMode}>
        <ThemeProvider defaultThemeMode={defaultThemeMode}>
          <BackgroundCover />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
