"use client";

import React, { useState, useEffect, useMemo, useCallback } from "react";
import { ThemeProviderContext, type ColorScheme } from "./useTheme";

// Define default keys (can be overridden by props)
const DEFAULT_STORAGE_KEY = "coolui-theme";
const DEFAULT_COLOR_SCHEME_KEY = "coolui-color-scheme";

// Helper to get system theme, safe for SSR
const getSystemTheme = (): "light" | "dark" => {
    if (typeof window === "undefined") return "light"; // Default for SSR
    return window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
};

export interface ThemeProviderProps {
    children: React.ReactNode; /** The theme to use by default (e.g., "default") */
    defaultTheme: string; /** The color scheme to use by default ("light", "dark", or "system") */
    defaultColorScheme?: ColorScheme; /** A list of all available theme names */
    themes?: string[]; /** localStorage key for the theme */
    storageKey?: string; /** localStorage key for the color scheme */
    colorSchemeStorageKey?: string;
}

export const ThemeProvider = ({
    children,
    defaultTheme,
    defaultColorScheme = "system",
    themes = ["default"],
    storageKey = DEFAULT_STORAGE_KEY,
    colorSchemeStorageKey = DEFAULT_COLOR_SCHEME_KEY,
}: ThemeProviderProps) => {

    // --- State ---
    // Initialize all state to `undefined`.
    // This ensures the server render and the client's first render are identical.
    const [theme, setThemeState] = useState<string | undefined>(undefined);
    const [storedColorScheme, setStoredColorScheme] = useState<ColorScheme | undefined>(undefined);
    const [effectiveColorScheme, setEffectiveColorScheme] = useState<"light" | "dark">(getSystemTheme());

    // --- Utility ---
    // This function applies the classes to the <html> tag.
    const applyTheme = useCallback((
        currentTheme: string,
        currentSchemePref: ColorScheme
    ) => {
        const root = window.document.documentElement;

        // Apply theme class (e.g., "default", "eureka")
        for (const t of themes) {
            root.classList.remove(t);
        }
        root.classList.add(currentTheme);

        // Calculate and apply color scheme class (.dark)
        const newEffectiveScheme =
            currentSchemePref === "system" ? getSystemTheme() : currentSchemePref;

        if (newEffectiveScheme === "dark") {
            root.classList.add("dark");
        } else {
            root.classList.remove("dark");
        }

        setEffectiveColorScheme(newEffectiveScheme);
    }, [themes]);

    // --- Effects ---
    // 1. Hydrate state from localStorage (client-side only)
    useEffect(() => {
        const savedTheme = localStorage.getItem(storageKey) || defaultTheme;
        const savedScheme = (localStorage.getItem(colorSchemeStorageKey) as ColorScheme) || defaultColorScheme;

        // Set state to trigger React update
        setThemeState(savedTheme);
        setStoredColorScheme(savedScheme);

        // Apply classes. The blocking script already did this,
        // but this ensures consistency if the script fails.
        applyTheme(savedTheme, savedScheme);
    }, [defaultTheme, defaultColorScheme, storageKey, colorSchemeStorageKey, applyTheme]);

    // 2. Listen for system theme changes
    useEffect(() => {
        const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
        const handleChange = () => {
            if (storedColorScheme === "system" && theme) {
                applyTheme(theme, "system");
            }
        };
        mediaQuery.addEventListener("change", handleChange);
        return () => mediaQuery.removeEventListener("change", handleChange);
    }, [storedColorScheme, theme, applyTheme]);

    // --- Public API ---
    const setTheme = (newTheme: string) => {
        if (!themes.includes(newTheme) || !storedColorScheme) return;
        localStorage.setItem(storageKey, newTheme);
        setThemeState(newTheme);
        applyTheme(newTheme, storedColorScheme);
    };

    const setColorScheme = (newScheme: ColorScheme) => {
        if (!theme) return;
        localStorage.setItem(colorSchemeStorageKey, newScheme);
        setStoredColorScheme(newScheme);
        applyTheme(theme, newScheme);
    };

    // --- Provider Value ---
    const providerValue = useMemo(
        () => ({
            themes,
            theme,
            setTheme,
            colorScheme: effectiveColorScheme,
            storedColorScheme,
            setColorScheme,
        }),
        [themes, theme, effectiveColorScheme, storedColorScheme]
    );

    return (
        <ThemeProviderContext value={providerValue}>
            {children}
        </ThemeProviderContext>
    );
};