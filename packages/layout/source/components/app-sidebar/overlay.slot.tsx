import { cn } from "@coolui/styles"
import React from "react"

export type Props = {
    isOpen?: boolean
    isLaptop?: boolean
    close?:  React.MouseEventHandler<HTMLDivElement> | undefined 
    className?: string
}
export const Slot = ({ 
    isOpen,
    isLaptop,
    close,
    className,
}: Props) => <div
    className={cn(
        "fixed inset-0 z-30 bg-black/40 backdrop-blur-sm transition-opacity duration-300",
        // Hide on laptop and above
        "laptop:hidden",
        // On mobile/tablet: show/hide based on isOpen
        isOpen && !isLaptop ? "opacity-100" : "opacity-0 pointer-events-none",
        className
    )}
    onClick={close}
    aria-hidden={!isOpen || isLaptop}
/>