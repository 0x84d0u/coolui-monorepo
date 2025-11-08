import { Children } from "@coolui/core"
import { AppNavItemProps } from "./AppNav/AppNavItem.client";

export type NavItem = {
    label?: string
    icon?: Children
    renderToggle?: (isOpen: boolean) => Children
    defaultOpen?: boolean
    items?: NavItem[]
}

export type State = {
    headerIsScrolled?: boolean
    sidebarIsOpen?: boolean

    closeSidebar?: () => void
    openSidebar?: () => void
    toggleSidebar?: () => void
}




export type LogoConfig = {
    logoEnabled?: boolean
    logoPosition?: 'header' | 'sidebar' | 'both'
    logoWordmark?: string
    logoSrc?: string
}

export type NavigationConfig = {
    navEnabled?: boolean
    navItems?: NavItem[]
    navItemProps?: AppNavItemProps
}
export type HeaderConfig = {
    headerEnabled?: boolean;
    headerFixed?: boolean;
    headerBordered?: boolean;

    headerActionsContent?: Children
    headerToolbarContent?: Children

    headerIsScrolled?: boolean
}
export type SidebarConfig = {
    sidebarEnabled?: boolean;
    sidebarPosition?: 'left' | 'right';

    sidebarHeaderContent?: Children
    sidebarBodyContent?: Children
    sidebarFooterContent?: Children

    sidebarIsOpen?: boolean
    closeSidebar?: () => void
    openSidebar?: () => void
    toggleSidebar?: () => void
}
export type FooterConfig = {
    footerEnabled?: boolean;
    footerContent?: Children

}
export type RootConfig = {
    children?: Children
}
