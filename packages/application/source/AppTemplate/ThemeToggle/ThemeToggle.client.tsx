"use client";

import { useTheme } from "@/Theme/ThemeProvider";

import { ThemeToggle as ServerThemeToggle } from './ThemeToggle'

export const ThemeToggle = () => {
    const { themeMode, toggleMode, mounted } = useTheme();

    return <ServerThemeToggle 
        mounted={mounted}
        themeMode={themeMode}
        toggleMode={toggleMode}
    />

};
