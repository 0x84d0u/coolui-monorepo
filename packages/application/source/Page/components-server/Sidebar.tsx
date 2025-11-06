import React from "react"
import { cn } from "@coolui/styles"
import { Section } from "../../Section/components-server/Section"

export type SidebarProps = {
    children?: React.ReactNode
    position?: 'left' | 'right'
}

export const Sidebar = ({
    children,
    position = 'left'
}: SidebarProps) => {
    if (!children) return null
    
    const className = cn(
        "w-full laptop:w-64",
        "sticky top-0",
        // Order for flexbox layout
        position === 'right' && 'laptop:order-2'
    )
    
    return (
        <Section className={className}>
            {children}
        </Section>
    )
}

Sidebar.displayName = "Sidebar"