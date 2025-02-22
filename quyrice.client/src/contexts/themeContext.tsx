"use client";
import { createContext, useContext, useEffect, useState } from "react";
import {
  ThemeContextType,
  ThemeProviderProps,
} from "@/models/theme/theme.modal";
import { ERROR_MESSAGE } from "@/messages/error-message..constants";

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error(ERROR_MESSAGE.EM001);
  }
  return context;
};

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<ThemeContextType["theme"] | null>(null);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    const initialTheme = storedTheme
      ? (storedTheme as ThemeContextType["theme"])
      : "light";
    setTheme(initialTheme);
  }, []);

  useEffect(() => {
    if (theme === null) return;
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [theme]);

  const toggleTheme = () => {
    if (theme === null) return;
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  if (theme === null) {
    return null;
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
