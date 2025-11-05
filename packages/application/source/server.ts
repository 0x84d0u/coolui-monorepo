// Types
export type { LayoutConfig } from './AppLayout/config/types'
export type { LayoutState } from './AppLayout/state/types'

export type { Theme, ThemeConfig, ThemeMode, ThemeName } from './Theme/config/types'
export type { ThemeState  } from './Theme/state/types'

// Constants
export { DEFAULT_LAYOUT_CONFIG } from './AppLayout/config/constants'
export { DEFAULT_THEME_CONFIG} from './Theme/config/constants'

// Helpers / Utils
export { NextThemeScript, getThemeScript } from './Theme/helpers/NextThemeScript'


// Components
export { AppLayout, type AppLayoutProps } from './AppLayout/components/AppLayout.server'
export { Section, type SectionProps } from './Page/components/Section'



