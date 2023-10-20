import "./globals.scss";

import React from "react";
import { BackgroundCover } from "@/components";
import { Poppins } from "next/font/google";
import ThemeProvider, { ThemeMode } from "@/context/theme";
import { cookies } from "next/headers";
import { ReduxProvider } from "@/store/provider";
import { AuthProvider } from "@/providers/auth.provider";
import AppFetch from "@/lib/app-fetch";
import { userService } from "@/services";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  AppFetch.getInstance(cookies().getAll());
  const user = await userService.getCurrentUser();

  const defaultThemeMode = cookies().get("mode")?.value as
    | ThemeMode
    | undefined;

  return (
    <html lang="en">
      <body className={poppins.className} data-theme={defaultThemeMode}>
        <ReduxProvider>
          <AuthProvider user={user}>
            <ThemeProvider defaultThemeMode={defaultThemeMode}>
              <BackgroundCover />
              {children}
            </ThemeProvider>
          </AuthProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
