"use client";

import {
  createContext,
  FC,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { ThemeMode } from "@/context/theme/constants";
import {
  ThemeContextType,
  ThemeProviderType,
} from "@/context/theme/theme.type";

const ThemeContext = createContext<ThemeContextType>({
  mode: ThemeMode.Light,
  toggleThemeMode: () => {
  },
});

export function useThemeSelector<T>(
  selector: (state: ThemeContextType) => T,
): T {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useThemeSelector must be used within a ThemeProvider");
  }
  return selector(context);
}

const ThemeProvider: FC<ThemeProviderType> = ({
                                                children,
                                                defaultThemeMode,
                                              }) => {
  const [mode, setMode] = useState<ThemeMode>(defaultThemeMode || ThemeMode.Light);

  const toggleThemeMode = useCallback(() => {
    setMode((prevState) =>
      prevState === ThemeMode.Light ? ThemeMode.Dark : ThemeMode.Light,
    );
  }, []);

  useEffect(() => {
    if (!defaultThemeMode) {
      const prefersLightMode = window.matchMedia(
        "(prefers-color-scheme: light)",
      ).matches;
      setMode(prefersLightMode ? ThemeMode.Light : ThemeMode.Dark);
    }
  }, [defaultThemeMode]);

  useEffect(() => {
    if (mode) {
      console.log(mode) ;
      document.body.setAttribute("data-theme", mode);
      document.cookie = `mode=${mode}; path=/; max-age=31536000`;
    }
  }, [mode]);

  return (
    <ThemeContext.Provider
      value={{
        mode,
        toggleThemeMode,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
