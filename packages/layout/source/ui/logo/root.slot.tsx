import React from "react"
import { cn } from "@coolui/core"


export type Props = {
    orientation?: "horizontal" | "vertical"
    className?: string
    children?: React.ReactNode
}

export const SLot = ({ orientation, className, ...props }: Props) => <div
    className={cn(
        "inline-flex items-center gap-2",
        orientation === "vertical" && "flex-col items-start",
        className
    )}
    {...props}
/>