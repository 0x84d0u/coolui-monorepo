import React from "react"

export type State = {
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

export type Content = {
    headerToolbar?: React.ReactNode
    headerActions?: React.ReactNode

    sidebarHeader?: React.ReactNode
    sidebarBody?: React.ReactNode
    sidebarFooter?: React.ReactNode
}

