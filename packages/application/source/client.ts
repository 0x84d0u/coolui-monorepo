"use client";

// Theme
export { applyThemeBeforeRender } from './Theme/Frameworks/apply-theme-before-render'
export { DEFAULT_CONFIG as DEFAULT_THEME_CONFIG } from './Theme/helpers'
export type { Config as ThemeConfig, Theme } from './Theme/types'


// AppTemplate
export { Application, type ApplicationProps } from './Application/Application'
export { useAppTemplate } from './AppTemplate/AppTemplate.provider'
export { useTheme } from './Theme/ThemeProvider'

// Page
export { Page, type PageProps } from './Page/Page.client'