import { ChildrenComponent } from "@coolui/core"
import { cn } from "@coolui/styles"

import { AppLogo } from "../AppLogo/AppLogo"
import { LogoConfig, NavigationConfig, SidebarConfig } from "@/AppTemplate/types"
import { AppNav } from "../AppNav/AppNav"


export const AppSidebar = ({
    sidebarEnabled,
    sidebarPosition,

    sidebarBodyContent,
    sidebarFooterContent,
    sidebarHeaderContent,
    
    sidebarIsOpen,
    closeSidebar,
    openSidebar,
    toggleSidebar,
    
    ...props
}: SidebarConfig & LogoConfig & NavigationConfig) => {
    if (!sidebarEnabled) return null;

    const logoConfig: LogoConfig = props;
    const navigationConfig: NavigationConfig = props;

    return <Wrapper className={cn(
        sidebarPosition === 'right' ? 'order-2' : 'order-0',
        sidebarIsOpen ? 'translate-x-0' : sidebarPosition === 'right' ? 'translate-x-full laptop:translate-x-0' : '-translate-x-full laptop:translate-x-0',
    )}>
        <Header visible={logoConfig.logoEnabled || sidebarHeaderContent ? true : false}>
            <AppLogo {...logoConfig} className="hidden laptop:block" />
            {sidebarHeaderContent}
        </Header>
        <Body>
            <AppNav {...navigationConfig} />
            {sidebarBodyContent}
        </Body>
        <Footer visible={sidebarFooterContent ? true : false}>
            {sidebarFooterContent}
        </Footer>
    </Wrapper>
}


// Layout 

const Body = (props: ChildrenComponent) => <div>{props.children}</div>
const Header = (props: ChildrenComponent & { visible: boolean }) => props.visible && <div className="shrink-0 px-6 py-4 border-b border-border">{props.children}</div>
const Footer = (props: ChildrenComponent & { visible: boolean }) => props.visible && <div className="shrink-0 px-6 py-4 border-t border-border">{props.children}</div>

const Wrapper = (props: ChildrenComponent & { className?: string }) => {
    return <aside className={cn(
        // Theme colors
        "bg-(--cool-sidebar-bg) text-(--cool-sidebar-color)",
        // Border
        "border-r border-border",
        // Layout
        "flex flex-col",

        // Height management
        // Mobile/Tablet: Full viewport height minus header
        "h-[calc(100svh-var(--cool-header-height))] min-h-[calc(100svh-var(--cool-header-height))]",
        // Laptop+: Full screen height
        "laptop:h-svh laptop:min-h-svh",

        // Width
        "w-[280px] mobile:w-[320px] tablet:w-[280px]",

        // Positioning
        // Mobile/Tablet: Fixed overlay
        "fixed inset-y-0 left-0 top-(--cool-header-height) z-30",
        // Laptop+: Static in flow, with sticky positioning
        "laptop:sticky laptop:top-0 laptop:shrink-0",

        // Slide animation
        "transition-transform duration-300 ease-out",
        // Shadow on mobile when open
        "shadow-2xl laptop:shadow-none",
        // Print hide
        "print:hidden",
        // Focus management
        "focus-visible:outline-none",
        // Scrollable content
        "overflow-y-auto overflow-x-hidden",
        // Smooth scroll
        "scroll-smooth",
    )}>
        {props.children}
    </aside>
}