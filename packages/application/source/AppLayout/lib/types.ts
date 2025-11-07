import { Children } from "@coolui/core"

export type SidebarPosition = 'left' | 'right';
export type LogoPosition = 'header' | 'sidebar' | 'both';

export type State = {
    headerIsScrolled?: boolean
    sidebarIsOpen?: boolean

    closeSidebar?: () => void
    openSidebar?: () => void
    toggleSidebar?: () => void
}


export type Config = {
    logoEnabled?: boolean
    logoPosition?: LogoPosition

    headerEnabled?: boolean;
    headerFixed?: boolean;
    headerBordered?: boolean;

    footerEnabled?: boolean;
    sidebarEnabled?: boolean;
    sidebarPosition?: SidebarPosition;
}

export type Content = {
    logoName?: string
    logoSrc?: string

    headerActions?: Children
    headerToolbar?: Children

    children?: Children

    footer?: Children

    sidebarHeader?: Children
    sidebarNavigation?: Children
    sidebarToolbar?: Children
    sidebarFooter?: Children
}


export type AppLayoutProps = Config & Content & State
export type ClientAppLayoutProps = Config & Content
