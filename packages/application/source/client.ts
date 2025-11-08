"use client";

// Theme
export { applyThemeBeforeRender } from './Theme/Frameworks/apply-theme-before-render'
export { useTheme } from './Theme/ThemeProvider'
export { DEFAULT_CONFIG as DEFAULT_THEME_CONFIG } from './Theme/helpers'
export type { Config as ThemeConfig, Theme } from './Theme/types'


// AppTemplate
export { useAppTemplate } from './AppTemplate/AppTemplate.provider'

// Page
export { Page, type PageProps } from './Page/Page.client'