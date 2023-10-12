import React from "react";
import { ThemeMode } from "@/context/theme/constants";

export type ThemeContextType = {
  mode: ThemeMode;
  toggleThemeMode: () => void;
};

export type ThemeProviderType = {
  children: React.ReactNode;
  defaultThemeMode: ThemeMode | undefined;
};
