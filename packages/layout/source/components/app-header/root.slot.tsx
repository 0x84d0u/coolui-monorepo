import { cn } from "@coolui/styles"
import React from "react"

export type Props = {
    children?: React.ReactNode
    className?: string
    isScrolled?: boolean
}

export const Slot = ({
    isScrolled,
    className,
    children
}: Props) => {
    return <header
        className={cn(
            "sticky top-0 z-30 border-b",
            "bg-body/80 text-typo-body",
            "supports-backdrop-filter:backdrop-blur-md",
            "transition-colors",
            isScrolled ? "border-subtle/80" : "border-transparent",
            className
        )}
    >
        {children}
    </header>
}