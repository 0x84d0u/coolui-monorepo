import { cn } from "@coolui/styles"
import React from "react"

export type Props = {
    children?: React.ReactNode
    className?: string
}

export const Slot = ({
    className,
    children
}: Props) => {
    return <footer
        className={cn(
            "border-t border-subtle bg-surface/70 text-typo-surface backdrop-blur-sm",
            "py-4 px-6 laptop:px-8",
            "text-sm",
            "transition-colors",
            className
        )}
    >
        {children}
    </footer>
}