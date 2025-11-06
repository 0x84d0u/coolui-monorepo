
export type State = {
    // config?: Config

    isHeaderScrolled: boolean

    isSidebarOpen: boolean
    closeSidebar: () => void
    openSidebar: () => void
    toggleSidebar: () => void
}

export type Config = {
    logoEnabled?: boolean
    logoWordmark?: string
    logoImgUrl?: string

    headerEnabled?: boolean
    headerThemeToggleEnabled?: boolean
    headerFixed?: boolean


    sidebarEnabled?: boolean

    enableFooter?: boolean
}
