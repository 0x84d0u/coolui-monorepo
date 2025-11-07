import { TemplateConfig, ThemeConfig } from "@coolui/application";

export const THEME_CONFIG: ThemeConfig = {
    defaultMode: 'dark',
    defaultTheme: 'default',
    modeStorageKey: 'cooltheme-mode',
    themeStorageKey: 'cooltheme-name',
    themes: [],
}

export const LAYOUT_CONFIG : TemplateConfig = {
    headerEnabled: true,
    headerFixed: true,
    headerThemeToggleEnabled: true,
    
    logoEnabled: true,
    logoWordmark: "Cool UI",
    logoImgUrl: undefined,
    
    sidebarEnabled: true,
    
    enableFooter: true,
}