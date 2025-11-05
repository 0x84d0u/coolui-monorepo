import type { AppLayoutProps as AppLayoutTemplateProps } from '../components/types'
import { Config, State } from '../lib/types'

export type AppSidebarToggleProps = Pick<Config, 'sidebarEnabled'> & Partial<Pick<State, 'toggleSidebar'>>

export type AppLayoutProviderProps = { children?: React.ReactNode }
export type AppLayoutProps = AppLayoutTemplateProps & Pick<Config, 'headerThemeToggleEnabled' | 'sidebarEnabled'>