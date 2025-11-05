// Types

export type { LayoutConfig } from './AppLayout/config/types'
export type { LayoutState } from './AppLayout/state/types'

export type { Theme, ThemeConfig, ThemeMode, ThemeName } from './Theme/config/types'
export type { ThemeState } from './Theme/state/types'

export type { PageConfig } from './Page/config/types'


// Constants

export { DEFAULT_LAYOUT_CONFIG } from './AppLayout/config/constants'
export { DEFAULT_THEME_CONFIG } from './Theme/config/constants'
export { DEFAULT_PAGE_CONFIG } from './Page/config/constants'

// Helpers / Utils

export { NextThemeScript, getThemeScript } from './Theme/helpers/NextThemeScript'


// Components

export { AppLayout, type AppLayoutProps } from './AppLayout/components-server/AppLayout'
export { Section, type SectionProps } from './Page/components-server/Section'
export { SectionGroup, type SectionGroupProps } from './Page/components-server/SectionGroup'
export { Page, type PageProps } from './Page/components-server/Page'



