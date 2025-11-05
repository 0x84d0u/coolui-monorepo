
import React from "react"
import { cn } from "@coolui/styles"

export type OverlayProps = {
    isOpen?: boolean
    onClick?: React.MouseEventHandler<HTMLDivElement> | undefined
    className?: string
}
export const Overlay = ({
    isOpen,
    onClick,
    className,
}: OverlayProps) => <div
        role="button"
        tabIndex={0}
        // onKeyDown={(e) => {
        //     if (e.key === 'Enter' || e.key === ' ') {
        //         onClick && onClick?.();
        //     }
        // }}
        className={cn(
            "fixed inset-0 z-20 bg-overlay backdrop-blur-sm transition-opacity",
            "laptop:hidden",
            // On mobile/tablet: show/hide based on isOpen
            isOpen ? "opacity-100" : "opacity-0 pointer-events-none",
            className
        )}
        onClick={onClick}
        aria-hidden={!isOpen}
    />