import React from "react"
import { Container, Flex } from "@coolui/core"
import { cn } from "@coolui/styles"

export const Root = (props: { children: React.ReactNode }) => <div className="relative flex min-h-svh h-full ">{props.children} </div>
export const RootWrapper = (props: { children: React.ReactNode }) => <div className="min-h-svh flex-1 flex flex-col">{props.children}</div>
export const RootMain = (props: { children: React.ReactNode }) => <main className="flex-1 overflow-y-auto"> {props.children}</main>

export const SidebarWrapper = (props: {
    children: React.ReactNode
    isOpen: boolean
}) => {
    return <aside
        className={cn(
            "bg-(--cool-sidebar-bg) text-(--cool-sidebar-color)",
            "border-r border-border",
            "flex flex-col",
            // Full height on laptop
            "h-(--cool-sidebar-height) min-h-(--cool-sidebar-height) laptop:h-svh laptop:min-h-svh",
            // Full width on mobile
            "w-full tablet:w-64",
            // Fixed on mobile/tablet, Static on laptop
            "fixed inset-y-0 left-0 top-(--cool-header-height) z-30 laptop:relative laptop:top-0",
            // Slide animation
            "transition-transform duration-300 ease-in-out",
            props.isOpen ? 'translate-x-0' : '-translate-x-full laptop:translate-x-0',
            "laptop:shrink-0",
        )}
    >
        {props.children}
    </aside>
}

export const SidebarHeader = (props: { children: React.ReactNode }) => <Flex direction='column' className={cn("tablet:flex p-6 border-b border-border min-h-40")}>{props.children}</Flex>
export const SidebarBody = (props: { children?: React.ReactNode }) => <Flex direction='column' className={cn("p-6 flex-1 overflow-auto",)}>{props.children}</Flex>
export const SidebarFooter = (props: { children?: React.ReactNode }) => <Flex direction='column' className={cn("p-6 border-t border-border")}>{props.children}</Flex>



export const HeaderWrapper = (props: {
    children: React.ReactNode
    isFixed: boolean
    showBorder: boolean
}) => {
    return <header
        className={cn(
            "bg-(--cool-header-bg) text-(--cool-header-color)",
            "border-b transition-colors duration-200", 
            props.showBorder ? "border-border" : "border-transparent",
            props.isFixed ? "sticky top-0 z-30" : "",
        )}
    >
        <Container className='grid grid-cols-3 items-center h-(--cool-header-height)' >
            {props.children}
        </Container>
    </header>
}

export const HeaderToolbar = (props: { children: React.ReactNode }) => <div className="flex items-center">{props.children}</div>
export const HeaderBranding = (props: { children: React.ReactNode }) => <div className="flex items-center justify-self-center">{props.children}</div>
export const HeaderActions = (props: { children: React.ReactNode }) => <div className="flex items-center justify-end gap-2">{props.children}</div>

export const FooterWrapper = (props: {
    children: React.ReactNode
}) => {
    return <footer className="border-t border-border">
        <Container className="grid grid-cols-3 items-center h-16">
            {props.children}
        </Container>
    </footer>
}