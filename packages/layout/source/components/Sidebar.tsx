import React from 'react'


// import { SidebarMenu, SidebarMenuProps } from '@components/navigation/sidebar-menu.client'

import * as Root from '@/slots/sidebar/root.slot'
import * as Overlay from '@/slots/sidebar/overlay.slot'
import { Logo, LogoProps } from './Logo'

export type SidebarProps = {
    className?: {
        root?: string
        overlay?: string,
        // menu?: SidebarMenuProps['className']
    }

    logo?: LogoProps

    isOpen?: boolean
    close?: React.MouseEventHandler<HTMLDivElement> | undefined

    // menuItems?: SidebarMenuProps['items']
    // menuWithSearch?: SidebarMenuProps['withSearch']

    menu?: React.ReactNode
}

export const Sidebar = ({
    className,

    isOpen,
    close,

    logo,

    // menuItems = [],
    // menuWithSearch,

    menu
}: SidebarProps) => {
    const rootProps: Root.Props = { isOpen, className: className?.root }
    const overlayProps: Overlay.Props = { isOpen, close, className: className?.overlay }
    // const menuProps: SidebarMenuProps = { items: menuItems, withSearch: menuWithSearch, className: className?.menu }
    return <>
        <Root.Slot {...rootProps}>
            <div className="p-6 border-b border-border">
                {logo && <Logo {...logo}/>}
            </div>
            <div className='p-6 flex-1 overflow-auto'>
                {/* {menu ? menu : menuItems.length > 0 ? <SidebarMenu {...menuProps} /> : null} */}
                {menu}
            </div>
            <div className='p-6 border-t border-border'>
                Sticky
            </div>
        </Root.Slot>
        <Overlay.Slot {...overlayProps} />
    </>
}