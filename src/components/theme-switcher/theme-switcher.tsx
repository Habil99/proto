"use client";

import { ThemeContextType, ThemeMode, useThemeSelector } from "@/context/theme";
import { Button } from "@/components";
import { FaMoon } from "react-icons/fa";
import { BiSun } from "react-icons/bi";

export const ThemeSwitcher = () => {
  const { mode, toggleThemeMode } = useThemeSelector<ThemeContextType>();

  return (
    <Button
      icon={mode === ThemeMode.Light ? <FaMoon /> : <BiSun />}
      onClick={toggleThemeMode}
    />
  );
};
