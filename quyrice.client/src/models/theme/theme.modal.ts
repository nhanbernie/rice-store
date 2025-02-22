import { ReactNode } from "react";

export interface ThemeContextType {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

export interface ThemeProviderProps {
  children: ReactNode;
}
