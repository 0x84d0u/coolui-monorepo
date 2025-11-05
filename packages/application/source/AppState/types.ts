import React from "react"

export type AppState = {
    isHeaderScrolled: boolean

    isSidebarOpen: boolean
    closeSidebar: () => null
}

export type AppProviderProps = {
    children?: React.ReactNode
}
