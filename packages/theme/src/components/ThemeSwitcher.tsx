"use client";

import React from "react";
import { useTheme } from "./useTheme";

export const ThemeSwitcher = () => {
  const { theme, setTheme, storedColorScheme, setColorScheme, themes } = useTheme();

  // On first render, theme/storedColorScheme are undefined to prevent hydration
  // mismatch. We can show a loading state.
  if (!theme || !storedColorScheme) {
    return (
      <div className="flex gap-4 p-4 rounded-lg border border-dashed animate-pulse">
        <div className="h-10 w-32 bg-gray-700 rounded" />
        <div className="h-10 w-32 bg-gray-700 rounded" />
      </div>
    );
  }

  return (
    <div className="flex flex-col sm:flex-row gap-4 p-4 rounded-lg border border-card bg-card text-card-foreground">
      {/* --- Theme Selector --- */}
      <div className="flex flex-col gap-1">
        <label htmlFor="theme-select" className="text-sm font-medium">Theme</label>
        <select
          id="theme-select"
          value={theme}
          onChange={(e) => setTheme(e.target.value)}
          className="p-2 rounded bg-gray-700 text-white"
        >
          {themes.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>

      {/* --- Color Scheme Selector --- */}
      <div className="flex flex-col gap-1">
        <label htmlFor="scheme-select" className="text-sm font-medium">Mode</label>
        <select
          id="scheme-select"
          value={storedColorScheme}
          onChange={(e) => setColorScheme(e.target.value as any)}
          className="p-2 rounded bg-gray-700 text-white"
        >
          <option value="system">System</option>
          <option value="light">Light</option>
          <option value="dark">Dark</option>
        </select>
      </div>
    </div>
  );
};