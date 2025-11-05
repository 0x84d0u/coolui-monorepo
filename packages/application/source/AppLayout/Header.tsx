import React from 'react'
import * as Slot from './slots'
import { AppConfig } from '@/AppConfig/types'
import { AppState } from '@/AppState/types'
import { AppLogo } from '@/AppLogo/AppLogo'


export type HeaderProps = {
    appConfig: AppConfig
    appState?: AppState
    content?: {
        headerToolbar?: React.ReactNode
        headerActions?: React.ReactNode
    }
}

export const Header = ({
    appConfig,
    appState,
    content
}: HeaderProps) => {

    if (!appConfig.header.enabled) return false

    return <Slot.HeaderWrapper
        isFixed={appConfig.header.fixed ?? false}
        showBorder={(appState?.isHeaderScrolled || appState?.isSidebarOpen) ? true : false}
    >
            <Slot.HeaderToolbar>
                {content?.headerToolbar}
            </Slot.HeaderToolbar>
            <Slot.HeaderBranding>
                <AppLogo />
            </Slot.HeaderBranding>
            <Slot.HeaderActions>
                {content?.headerActions}
            </Slot.HeaderActions>
    </Slot.HeaderWrapper>
}