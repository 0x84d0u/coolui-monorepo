import React from 'react'
import * as Slot from './slots'
import type { LayoutConfig } from '@/AppLayout/config/types'
import type { LayoutState } from '@/AppLayout/state/types'
import { AppLogo } from '@/Logo/Logo'

export type SidebarProps = {
    config: LayoutConfig
    state?: LayoutState
    content?: {
        sidebarHeader?: React.ReactNode
        sidebarBody?: React.ReactNode
        sidebarFooter?: React.ReactNode
    }
}

export const Sidebar = ({
    config,
    state,
    content
}: SidebarProps) => {
    if (!config.sidebar.enabled) return null

    const isOpen = state?.isSidebarOpen || false

    return <Slot.SidebarWrapper
        isOpen={isOpen}
    >
        <Slot.SidebarHeader>
            <AppLogo />
            {content?.sidebarHeader}
        </Slot.SidebarHeader>
        <Slot.SidebarBody>
            {content?.sidebarBody}
        </Slot.SidebarBody>
        <Slot.SidebarFooter>
            {content?.sidebarFooter}
        </Slot.SidebarFooter>
    </Slot.SidebarWrapper>
}