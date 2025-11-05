import React from 'react'
import * as Slot from './slots'
import { LayoutConfig } from '@/AppLayout/config/types'
import { LayoutState } from '@/AppLayout/state/types'
import { AppLogo } from '@/Logo/Logo'


export type HeaderProps = {
    config: LayoutConfig
    state?: LayoutState
    content?: {
        headerToolbar?: React.ReactNode
        headerActions?: React.ReactNode
    }
}

export const Header = ({
    config,
    state,
    content
}: HeaderProps) => {

    if (!config.header.enabled) return null

    return <Slot.HeaderWrapper
        isFixed={config.header.fixed ?? false}
        showBorder={(state?.isHeaderScrolled || state?.isSidebarOpen) ? true : false}
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