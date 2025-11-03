'use client';

import { Theme, ThemeMode } from "@/types";
import { createContext } from "react";

export interface ThemeContextType {
  themeName: string;
  themeMode: ThemeMode;
  themes: Theme[];
  setThemeName: (theme: string) => void;
  setThemeMode: (mode: ThemeMode) => void;
  toggleMode: () => void;
  mounted: boolean;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);
