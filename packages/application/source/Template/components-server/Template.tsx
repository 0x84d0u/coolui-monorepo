import React from 'react'
import { Layout as RootLayout } from '../components-ui/root.layout'

import { Config, State } from '../lib/types'
import { Overlay } from './Overlay'
import { Sidebar } from './Sidebar'
import { Header } from './Header'

export type TemplateProps = {
    config?: Partial<Config>
    state?: Partial<State>

    headerToolbar?: React.ReactNode
    headerActions?: React.ReactNode


    sidebarHeader?: React.ReactNode
    sidebarBody?: React.ReactNode
    sidebarFooter?: React.ReactNode

    children?: React.ReactNode
}

export const Template = ({
    config,
    state,
    headerToolbar,
    headerActions,
    sidebarHeader,
    sidebarBody,
    sidebarFooter,
    children
}: TemplateProps) => {

    return <RootLayout
        overlay={<Overlay
            {...state}
        />}
        sidebar={<Sidebar
            config={config}
            state={state}
            header={sidebarHeader}
            body={sidebarBody}
            footer={sidebarFooter}
        />}
        header={<Header
            config={config}
            state={state}
            actions={headerActions}
            toolbar={headerToolbar}
        />}
    >
        {children}
    </RootLayout>
}