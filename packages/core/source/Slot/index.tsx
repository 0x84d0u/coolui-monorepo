import { cn } from "@coolui/styles"
import React from "react"

export type Children = React.ReactNode
export type ChildrenComponent = {
    children?: Children
}

export type SlotProps<T extends React.ElementType = "div"> = {
    as?: T
    children?: React.ReactNode

    unwrapped?: boolean
    remove?: boolean 

    className?: string
    jsxProps?: Omit<React.ComponentPropsWithoutRef<T>, 'className'>
}

export const Slot = <T extends React.ElementType = "div">({
    as,
    children,
    unwrapped,
    remove,
    className,
    jsxProps
}: SlotProps<T>
) => {
    if (remove) return null;
    if (unwrapped) return <>{children}</>

    const Component = as || "div"
    return <Component className={className} {...jsxProps}>{children}</Component>
}

type MergeProps = Partial<Omit<SlotProps, 'as'>>

export const mergeSlots = (
    base: MergeProps = {},
    updated: MergeProps = {}
): MergeProps => {
    const {
        // as: baseAs,
        className: baseClassName,
        jsxProps: baseJsxProps,
        children: baseChildren,
        unwrapped: baseUnwrapped,
    } = base

    const {
        // as: updatedAs,
        className: updatedClassName,
        jsxProps: updatedJsxProps,
        children: updatedChildren,
        unwrapped: updatedUnwrapped,
    } = updated

    return {
        // as: updatedAs ?? baseAs ?? "div",
        className: cn(baseClassName, updatedClassName) || undefined,
        jsxProps: { ...baseJsxProps, ...updatedJsxProps },
        children: updatedChildren ?? baseChildren,
        unwrapped: updatedUnwrapped ?? baseUnwrapped,
    }
}
