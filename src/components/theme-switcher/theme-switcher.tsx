"use client";

import { ThemeContext, ThemeMode, useThemeSelector } from "@/context/theme";
import { Button } from "@/components";
import { FaMoon } from "react-icons/fa";
import { BiSun } from "react-icons/bi";

const ThemeSwitcher = () => {
  const { mode, toggleThemeMode } = useThemeSelector<ThemeContext>();

  return (
    <Button
      icon={mode === ThemeMode.Light ? <FaMoon /> : <BiSun />}
      onClick={toggleThemeMode}
      size="lg"
      className="!px-2"
    />
  );
};
export default ThemeSwitcher;
