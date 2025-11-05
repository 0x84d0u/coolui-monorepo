'use client';

import { useContext } from "react";
import { ThemeContext } from "../lib/Context";

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useAppTheme must be used within a AppThemeProvider');
  }
  return context;
}
