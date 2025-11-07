import { Overlay, SlotProps } from "@coolui/core"
import { cn } from "@coolui/styles"

import { Layout } from "../lib/layout"
import { AppLayoutProps, Config, Content, LogoPosition, State } from "../lib/types"

export const AppLayout = (props: AppLayoutProps) => {

    const content: Content = {
        ...props
    }
    const state: State = {
        
        ...props
    }
    const config: Config = {
        footerEnabled: true,
        headerEnabled: true,
        sidebarEnabled: true,
        headerFixed: true,
        logoEnabled: true,
        logoPosition: 'both',
        sidebarPosition: 'left',
        headerBordered: state.headerIsScrolled || state.headerIsScrolled ? true : false,
        ...props
    }

    const setLogoProps = (position: Omit<LogoPosition, 'both'>): SlotProps => {
        const enabled = config.logoEnabled && (config.logoPosition === 'both' || config.logoPosition === position)
        return {
            children: !enabled ? null : <div> Logo </div>,
            className: cn(
                // Hide logo on sidebar <laptop
                config.logoPosition === 'sidebar' && "laptop:hidden"
            )
        }
    }

    return <Layout
        main={{ children: content.children }}
        footer={{ remove: !config.footerEnabled, children: content.footer }}

        // Header
        headerWrapper={{
            remove: !config.headerEnabled,
            className: cn(
                config.headerBordered ? "border-border" : "border-transparent",
                config.headerFixed ? "sticky top-0 z-30" : "",
            )
        }}
        headerToolbar={{
            children: <>
                {config.sidebarEnabled && <button onClick={state.toggleSidebar}> toggle sidebar </button>}
                {content.headerToolbar}
            </>
        }}
        headerLogo={setLogoProps('header')}
        headerActions={{ children: content.headerActions }}

        sidebarWrapper={{
            remove: !config.sidebarEnabled,
            className: cn(
                config.sidebarPosition === 'right' ? 'order-2' : 'order-0',
                state.sidebarIsOpen ? 'translate-x-0' : '-translate-x-full laptop:translate-x-0',
            )
        }}
        overlay={{ remove: !config.sidebarEnabled, children: <Overlay isOpen={state.sidebarIsOpen} onClick={state.closeSidebar} /> }}
        sidebarLogo={setLogoProps('sidebar')}
        sidebarHeader={{ remove: !content.sidebarHeader, children: content.sidebarHeader }}
        sidebarNavigation={{ remove: !content.sidebarNavigation, children: content.sidebarNavigation }}
        sidebarToolbar={{ remove: !content.sidebarToolbar, children: content.sidebarToolbar }}
        sidebarFooter={{ remove: !content.sidebarFooter, children: content.sidebarFooter }}


    />
}

AppLayout.displayName = "Template"