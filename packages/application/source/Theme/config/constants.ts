import type { ThemeConfig } from "./types";

export const DEFAULT_THEME_CONFIG: ThemeConfig = {
    defaultTheme: 'default',
    defaultMode: 'light',
    modeStorageKey: 'app-theme-mode',
    themeStorageKey: 'app-theme-name',
    themes: [
        { label: "Default", value: "default" },
        { label: "Minimalist", value: "minimalist" },
        { label: "Modern", value: "modern" },
        { label: "Retro", value: "retro" },
    ]
}
