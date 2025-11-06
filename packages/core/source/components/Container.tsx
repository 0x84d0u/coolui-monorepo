import React from "react"
import { cn } from "@coolui/styles"

export type ContainerSize = 'sm' | 'md' | 'lg' | 'xl' | 'full'
export type ContainerProps = {
    size?: ContainerSize
    children?: React.ReactNode
    className?: string
}
export const Container = ({
    size = 'lg',
    className,
    children
}: ContainerProps) => {
    return <div className={cn(
        "mx-auto w-full",
        "px-4 tablet:px-6 laptop:px-8",
        size === 'sm' && 'max-w-scree-sm',
        size === 'md' && 'max-w-scree-md',
        size === 'lg' && 'max-w-scree-lg',
        size === 'xl' && 'max-w-scree-xl',
        size === 'full' && 'max-w-none',
        className
    )}>
        {children}
    </div>
}