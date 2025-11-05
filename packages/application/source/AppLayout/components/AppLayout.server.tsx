import React from 'react'

import { Overlay } from '@coolui/core'

import type { LayoutState } from '@/AppLayout/state/types'
import type { LayoutConfig } from '@/AppLayout/config/types'

import * as Slot from '../ui/slots'
import { Sidebar, SidebarProps } from '../ui/Sidebar'
import { Header, HeaderProps } from '../ui/Header'
import { Footer, FooterProps } from '../ui/Footer'
import { DEFAULT_LAYOUT_CONFIG } from '../config/constants'


export type AppLayoutProps = {
    config: LayoutConfig
    state?: LayoutState

    content?: SidebarProps['content'] & HeaderProps['content'] & FooterProps['content']
    children?: React.ReactNode
}

export const AppLayout = ({
    config = DEFAULT_LAYOUT_CONFIG,
    state,
    content,
    children
}: AppLayoutProps) => {
    return <Slot.Root>
        <Sidebar
            config={config}
            state={state}
            content={{
                sidebarHeader: content?.sidebarHeader,
                sidebarBody: content?.sidebarBody,
                sidebarFooter: content?.sidebarFooter,
            }}
        />
        <Overlay
            isOpen={state?.isSidebarOpen}
            onClick={state?.closeSidebar}
        />
        <Slot.RootWrapper>
            <Header
                config={config}
                state={state}
                content={{
                    headerActions: content?.headerActions,
                    headerToolbar: content?.headerToolbar,
                }}

            />
            <Slot.RootMain>
                {children}
            </Slot.RootMain>
            <Footer
                config={config}
                content={{
                    footer: content?.footer
                }}
            />
        </Slot.RootWrapper>
    </Slot.Root>
}