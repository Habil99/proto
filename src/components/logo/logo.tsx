"use client";

import { ThemeMode, useThemeSelector } from "@/context/theme";
import Image from "next/image";

const Logo = () => {
  const mode = useThemeSelector((state) => state.mode);

  return (
    <Image
      src={
        mode === ThemeMode.Light ? "/svg/logo-dark.svg" : "/svg/logo-light.svg"
      }
      width={80}
      height={32}
      priority
      alt="Proto Blog Website By Habil"
    />
  );
};

export default Logo;
