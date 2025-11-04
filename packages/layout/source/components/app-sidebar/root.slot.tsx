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
        "transition-transform",
        "fixed inset-y-0 left-0 z-40 w-64",
        "h-svh flex flex-col",
        "bg-surface text-typo-surface border-r border-subtle",
        "laptop:sticky laptop:top-0 laptop:translate-x-0 laptop:shrink-0",
        !isLaptop && (isOpen ? "translate-x-0" : "-translate-x-full"),
        className
    )}
>
        {children}
    </aside>