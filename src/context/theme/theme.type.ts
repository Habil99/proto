import React from "react";
import { ThemeMode } from "@/context/theme/constants";

export type ThemeContext = {
  mode: ThemeMode;
  toggleThemeMode: () => void;
};

export type ThemeProvider = {
  children: React.ReactNode;
  defaultThemeMode: ThemeMode | undefined;
};
