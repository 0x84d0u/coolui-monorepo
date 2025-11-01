"use client";

import React from "react";

export type ColorScheme = "light" | "dark" | "system";

export interface ThemeContextProps {
  themes: string[]; // List of available theme names.
  theme?: string; // The currently active theme name : This is `undefined` on the server and during the client's first render to prevent hydration mismatches.
  setTheme: (theme: string) => void; // Function to set the active theme.
  colorScheme?: "light" | "dark"; // The resolved color scheme ("light" or "dark") : This is `undefined` on the server and during the client's first render.
  storedColorScheme?: ColorScheme; // The user's stored preference ("light", "dark", or "system") : This is `undefined` on the server and during the client's first render.
  setColorScheme: (colorScheme: ColorScheme) => void; // Function to set the color scheme preference.
}

const ThemeContext = React.createContext<ThemeContextProps | undefined>(undefined);

export const useTheme = () => {
  const context = React.useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

export const ThemeProviderContext = ThemeContext.Provider;