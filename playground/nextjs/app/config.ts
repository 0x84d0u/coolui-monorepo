import { AppLayoutConfig, ThemeConfig } from "@coolui/application";

export const THEME_CONFIG: ThemeConfig = {
    defaultMode: 'dark',
    defaultTheme: 'default',
    modeStorageKey: 'cooltheme-mode',
    themeStorageKey: 'cooltheme-name',
    themes: []
}

export const LAYOUT_CONFIG : AppLayoutConfig = {
    headerEnabled: true,
    headerFixed: true,
    headerThemeSelectEneabled: true,
    headerThemeToggleEnabled: true,
    
    logoEnabled: true,
    logoWordmark: "Cool UI",
    
    sidebarEnabled: true,
    
    enableFooter: true,
}