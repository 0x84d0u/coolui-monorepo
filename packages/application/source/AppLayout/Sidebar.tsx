import React from 'react'
import * as Slot from './slots'
import type { AppConfig } from '@/AppConfig/types'
import type { AppState } from '@/AppState/types'
import { AppLogo } from '@/AppLogo/AppLogo'

export type SidebarProps = {
    appConfig: AppConfig
    appState?: AppState
    content?: {
        sidebarHeader?: React.ReactNode
        sidebarBody?: React.ReactNode
        sidebarFooter?: React.ReactNode
    }
}

export const Sidebar = ({
    appConfig,
    appState,
    content
}: SidebarProps) => {
    if (!appConfig.sideabar.enabled) return false

    const isOpen = appState?.isSidebarOpen || false

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