import React from 'react'

import type { AppState } from '@/AppState/types'
import {type AppConfig } from '@/AppConfig/types'

import * as Slot from './slots'
import { Sidebar, SidebarProps } from './Sidebar'
import { Header, HeaderProps } from './Header'
import { Overlay } from '@coolui/core'
import { Footer } from './Footer'
import { defaultAppConfig } from '@/server'


export type AppLayoutProps = {
    appState?: AppState
    appConfig: AppConfig

    content?: SidebarProps['content'] & HeaderProps['content'] & {
        footer: React.ReactNode
    }

    children?: React.ReactNode
}

export const AppLayout = ({
    appConfig = defaultAppConfig,
    appState,
    content,
    children
}: AppLayoutProps) => {
    return <Slot.Root>
        <Sidebar
            appConfig={appConfig}
            appState={appState}
            content={{
                sidebarHeader: content?.sidebarHeader,
                sidebarBody: content?.sidebarBody,
                sidebarFooter: content?.sidebarFooter,
            }}
        />
        <Overlay
            isOpen={appState?.isSidebarOpen}
            onClick={appState?.closeSidebar}
        />
        <Slot.RootWrapper>
            <Header
                appConfig={appConfig}
                appState={appState}
                content={{
                    headerActions: content?.headerActions,
                    headerToolbar: content?.headerToolbar,
                }}

            />
            <Slot.RootMain>
                {children}
            </Slot.RootMain>
            <Footer
                appConfig={appConfig}
                appState={appState}
                content={{
                    footer: content?.footer
                }}
            />
        </Slot.RootWrapper>
    </Slot.Root>
}