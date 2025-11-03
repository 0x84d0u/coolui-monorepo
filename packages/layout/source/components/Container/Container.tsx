import React from "react"
import { cn, cva, type VariantProps } from "@coolui/core"
import { containerSizeVariants } from "@/utils/variants"


const variants = cva("", {
    variants: {
        size: containerSizeVariants
    },
})

export type ComponentOwnProps = VariantProps<typeof variants>
export type ContainerProps = ComponentOwnProps & {
    children?: React.ReactNode
    className?: string
}
export const Container = ({
    size,
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