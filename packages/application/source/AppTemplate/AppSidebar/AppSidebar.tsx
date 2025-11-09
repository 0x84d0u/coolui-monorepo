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

    return <Wrapper
        isOpen={sidebarIsOpen}
        position={sidebarPosition}
    >
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


const Body = (props: ChildrenComponent) => <div className={cn(
    "flex-1 overflow-y-auto overflow-x-hidden",
    // "sidebar-scroll",
    "p-4 space-y-2",
)}>{props.children}</div>

const Header = (props: ChildrenComponent & { visible: boolean }) => props.visible && <div className={cn(
    "shrink-0",
    "px-6 py-4",
    "border-b border-layout-border",
)}>{props.children}</div>

const Footer = (props: ChildrenComponent & { visible: boolean }) => props.visible && <div className={cn(
    "shrink-0",
    "px-6 py-4",
    "border-t border-layout-border",
    "bg-layout-bg",
)}>{props.children}</div>

const Wrapper = (props: ChildrenComponent & {
    className?: string
    isOpen?: boolean
    position?: 'left' | 'right'
}) => {
    return <aside className={cn(
        "transition-transform duration-350 ease-out",

        "bg-layout-bg text-layout-typo",
        "border-r border-layout-border",
        "flex flex-col",
        "h-[calc(100svh-var(--header-height))] min-h-[calc(100svh-var(--header-height))]",
        "laptop:h-svh laptop:min-h-svh",
        "w-(--sidebar-width)",
        "fixed inset-y-0 left-0 top-(--header-height) z-30",
        "laptop:sticky laptop:top-0 laptop:shrink-0",
        "shadow-2xl laptop:shadow-none",
        props.position === 'right' ? 'order-2' : 'order-0',

        props.isOpen
            ? 'translate-x-0'
            : props.position === 'right'
                ? 'translate-x-full laptop:translate-x-0'
                : '-translate-x-full laptop:translate-x-0',

        // "no-print",
        "focus-visible:outline-none",
    )}>
        {props.children}
    </aside>
}