import { Config, Content, State } from "../lib/types"

export type AppHeaderProps =
    Pick<Content, 'headerActions' | 'headerToolbar'> &
    Pick<Config,
        'headerEnabled' | 'headerFixed' | 'headerThemeToggleEnabled' |
        'logoEnabled' | 'logoImgUrl' | 'logoWordmark' |
        'sidebarEnabled'
    > &
    Partial<Pick<State, 'isSidebarOpen' | 'isHeaderScrolled' | 'toggleSidebar'>>
    


    
export type AppSidebarProps = Pick<Config,
    'sidebarEnabled' |
    'logoEnabled' | 'logoImgUrl' | 'logoWordmark'
> &
    Partial<Pick<State, 'isSidebarOpen'>> &
    Pick<Content, 'sidebarHeader' | 'sidebarBody' | 'sidebarFooter'>


export type AppLayoutProps = Config & Partial<State> & Content & {
    children?: React.ReactNode
}