import React from "react"

import { ContainerProps } from "@coolui/core"

import { useAppLayout } from "@/lib/hooks";
import { AppLayoutContextProps } from "@/lib/types"

import { AppLayoutRoot, AppLayoutRootProps } from "../app-layout-root/AppLayoutRoot"
import { AppFooter, AppFooterProps } from "../app-footer/AppFooter"
import { AppHeader, AppHeaderProps } from "../app-header/AppHeader"
import { AppSidebar, AppSidebarProps } from "../app-sidebar/AppSidebar"

import { AppLogo } from "../app-logo/AppLogo"
import { AppSidebarToggle } from "../app-sidebar-toggle/AppSidebarToggle";


export type AppLayoutProps = {
    ctx?: AppLayoutContextProps

    rootClassNames?: AppLayoutRootProps['classNames']
    sidebarClassNames?: AppSidebarProps['classNames']
    footerClassNames?: AppFooterProps['classNames']
    headerClassNames?: AppHeaderProps['classNames']

    headerContainerSize?: ContainerProps['size']
    footerContainerSize?: ContainerProps['size']

    sidebarContent?: AppSidebarProps['children']
    headerContent?: AppHeaderProps['children']
    footerContent?: AppFooterProps['children']
    children?: React.ReactNode

    asBody?: AppLayoutRootProps['asBody']

    enableThemeModeToggle?: boolean
}

export const AppLayout = ({
    ctx,

    rootClassNames,
    sidebarClassNames,
    footerClassNames,
    headerClassNames,

    headerContainerSize,
    footerContainerSize,

    sidebarContent,
    headerContent,
    footerContent,
    children,

    asBody,

    // enableThemeModeToggle,

}: AppLayoutProps) => {

    const hook = useAppLayout();

    const context = ctx || hook

    const Logo = () => <AppLogo wordmark="Cool UI <3" />

    return <AppLayoutRoot
        asBody={asBody}
        classNames={rootClassNames}
        children={{
            sidebar: <AppSidebar
                classNames={sidebarClassNames}
                params={{
                    close: context.sidebar.close,
                    isOpen: context.sidebar.isOpen
                }}
                children={{
                    branding: sidebarContent?.branding || <Logo />,
                    ...sidebarContent
                }}
            />,
            header: <AppHeader
                classNames={headerClassNames}
                params={{
                    containerSize: headerContainerSize,
                    isScrolled: context.header.scrolled
                }}
                children={{
                    branding: headerContent?.branding || <Logo />,
                    toolbar: <> 
                        <AppSidebarToggle />
                        {headerContent?.toolbar}
                    </>,
                    actions: headerContent?.actions
                }}

            />,
            page: children,
            footer: <AppFooter
                classNames={footerClassNames}
                params={{
                    containerSize: footerContainerSize
                }}
                children={footerContent}
            />,
        }}

    />
}