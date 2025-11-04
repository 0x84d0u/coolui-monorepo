import React from "react"
import { cn, cva, styleVariant, VariantProps } from "@coolui/styles"

const variants = cva("", {
    variants: {
        size: styleVariant.containerSize
    },
})

export type ContainerProps = VariantProps<typeof variants> & {
    children?: React.ReactNode
    className?: string
}
export const Container = ({
    size = 'lg',
    className,
    children
}: ContainerProps) => <div className={cn(
    "mx-auto w-full",
    "px-4 tablet:px-6 laptop:px-8",
    variants({ size }),
    className
)}>
        {children}
    </div>