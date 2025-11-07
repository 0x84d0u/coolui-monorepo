import React from "react"
import { cn } from "@coolui/styles"
import { Flex } from "@coolui/core"


export const Layout = ({
    isOpen,
    header,
    body,
    footer
}: {
    isOpen?: boolean
    header?: React.ReactNode
    body?: React.ReactNode
    footer?: React.ReactNode
}) => {
    return <Wrapper isOpen={isOpen}>
        <Header children={header} />
        <Body children={body} />
        <Footer children={footer} />
    </Wrapper>
}

export const Wrapper = ({
    isOpen,
    children,
}: {
    isOpen?: boolean
    children?: React.ReactNode
}) => {
    return <aside
        role="complementary"
        aria-label="Application sidebar"
        aria-hidden={!isOpen}
        className={cn(
            "bg-(--cool-sidebar-bg) text-(--cool-sidebar-color)",
            "border-r border-border",
            "flex flex-col",
            // Full height on laptop
            "h-(--cool-sidebar-height) min-h-(--cool-sidebar-height) laptop:h-svh laptop:min-h-svh",
            // Full width on mobile
            "w-full tablet:w-64",
            // Fixed on mobile/tablet, Static on laptop
            "fixed inset-y-0 left-0 top-(--cool-header-height) z-30",
            // Sticky on laptop
            "laptop:sticky laptop:top-0",
            // Slide animation
            "transition-transform duration-300 ease-in-out",
            "laptop:shrink-0",
            isOpen ? 'translate-x-0' : '-translate-x-full laptop:translate-x-0',
        )}
    >
        {children}
    </aside>
}


export const Header = (props: { children: React.ReactNode }) => <Flex direction='column' className={cn("tablet:flex p-6 border-b border-border")}>{props.children}</Flex>
export const Body = (props: { children?: React.ReactNode }) => <Flex direction='column' className={cn("p-6 flex-1 overflow-y-auto",)}>{props.children}</Flex>
export const Footer = (props: { children?: React.ReactNode }) => <Flex direction='column' className={cn("p-6 border-t border-border")}>{props.children}</Flex>


