import React from "react"
import { cn } from "@coolui/styles"


export type Props = {
    isOpen?: boolean
    isLaptop?: boolean
    className?: string
    children?: React.ReactNode
}
export const Slot = ({
    isOpen,
    isLaptop,
    className,
    children
}: Props) => <aside
    className={cn(
        "transition-transform duration-300",
        "h-svh flex flex-col",
        "bg-surface text-typo-surface border-r border-subtle",
        // Fixed only on mobile/tablet
        !isLaptop && "fixed inset-y-0 left-0 z-40",  // ← Conditional fixed
        "w-64",
        // On laptop: just a flex child with shrink-0
        "laptop:shrink-0",  // ← No positioning, just flex behavior
        !isLaptop && (isOpen ? "translate-x-0" : "-translate-x-full"),
        className
    )}
>
        {children}
    </aside>