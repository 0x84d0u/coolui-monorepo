
export type LayoutState = {
    isHeaderScrolled: boolean

    isSidebarOpen: boolean
    closeSidebar: () => void
    openSidebar: () => void
    toggleSidebar: () => void
}