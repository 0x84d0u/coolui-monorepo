import React from 'react';

// Props MUST match the props passed to ThemeProvider
interface ThemeScriptProps {
  defaultTheme: string;
  defaultColorScheme?: "light" | "dark" | "system";
  themes?: string[];
  storageKey?: string;
  colorSchemeStorageKey?: string;
}

const DEFAULT_STORAGE_KEY = "coolui-theme";
const DEFAULT_COLOR_SCHEME_KEY = "coolui-color-scheme";

/**
 * Renders a blocking script to prevent FOUC (Flash of Unstyled Content)
 * or "flash of wrong theme". This script runs *before* React hydration.
 *
 * Place this in the `<head>` of your `layout.tsx`.
 */
export const ThemeScript = ({
  defaultTheme,
  defaultColorScheme = "system",
  themes = ["default"],
  storageKey = DEFAULT_STORAGE_KEY,
  colorSchemeStorageKey = DEFAULT_COLOR_SCHEME_KEY,
}: ThemeScriptProps) => {
  
  const script = `
(function() {
  try {
    const root = document.documentElement;
    const allThemes = ${JSON.stringify(themes)};
    
    // 1. Get theme from localStorage
    let theme = localStorage.getItem("${storageKey}");
    if (!theme || !allThemes.includes(theme)) {
      theme = "${defaultTheme}";
    }
    
    // 2. Get color scheme from localStorage
    let schemePref = localStorage.getItem("${colorSchemeStorageKey}");
    if (schemePref !== "light" && schemePref !== "dark" && schemePref !== "system") {
      schemePref = "${defaultColorScheme}";
    }
    
    // 3. Calculate effective scheme
    let effectiveScheme = schemePref;
    if (schemePref === "system") {
      effectiveScheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    }
    
    // 4. Apply classes to <html>
    root.classList.add(theme);
    if (effectiveScheme === "dark") {
      root.classList.add("dark");
    }
  } catch (e) {
    // User storage might be disabled
    console.error("Failed to apply theme from blocking script:", e);
  }
})();
`;

  return (
    <script
      id="coolui-theme-script"
      dangerouslySetInnerHTML={{ __html: script }}
    />
  );
};