'use client';

import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useAppTheme must be used within a AppThemeProvider');
  }
  return context;
}
